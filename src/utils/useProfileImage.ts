import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'mayank_portfolio_avatar';
const EVENT_NAME = 'mayank-avatar-updated';

export const useProfileImage = () => {
  const [imageSrc, setImageSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    }
    return '/image.png';
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem(STORAGE_KEY);
    }
    return false;
  });

  const [notification, setNotification] = useState<string | null>(null);

  const updatePhoto = useCallback((dataUrl: string) => {
    setImageSrc(dataUrl);
    setIsCustom(true);
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch {
      // LocalStorage quota fallback
    }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: dataUrl }));
    setNotification('Photo successfully applied!');
    setTimeout(() => setNotification(null), 3500);
  }, []);

  const resetPhoto = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setImageSrc('/image.png');
    setIsCustom(false);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: '/avatar.svg' }));
    setNotification('Reset to default portrait');
    setTimeout(() => setNotification(null), 2500);
  }, []);

  useEffect(() => {
    // 1. Listen for cross-component photo sync events
    const handleAvatarUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setImageSrc(customEvent.detail);
        setIsCustom(true);
      }
    };
    window.addEventListener(EVENT_NAME, handleAvatarUpdate);

    // 2. Global Paste Handler (Ctrl+V / Cmd+V with image)
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const res = event.target?.result as string;
              if (res) updatePhoto(res);
            };
            reader.readAsDataURL(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener(EVENT_NAME, handleAvatarUpdate);
      window.removeEventListener('paste', handlePaste);
    };
  }, [updatePhoto]);

  const handleImageError = () => {
    if (imageSrc === '/image.png') {
      setImageSrc('/avatar.png');
    } else if (imageSrc === '/avatar.png') {
      setImageSrc('/avatar.svg');
    } else if (imageSrc !== '/avatar.svg') {
      setImageSrc('/avatar.svg');
    }
  };

  return {
    imageSrc,
    isCustom,
    notification,
    handleImageError,
    updatePhoto,
    resetPhoto,
  };
};
