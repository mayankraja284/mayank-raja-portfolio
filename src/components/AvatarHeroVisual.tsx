import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Code2, Camera, Upload, CheckCircle2 } from 'lucide-react';
import { useProfileImage } from '../utils/useProfileImage';

interface AvatarHeroVisualProps {
  avatarSrc?: string;
}

export const AvatarHeroVisual: React.FC<AvatarHeroVisualProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { imageSrc, isCustom, handleImageError, updatePhoto } = useProfileImage();

  // Mouse position normalized (-1 to 1) for 3D spring tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 160,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 160,
    damping: 22,
  });
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 160,
    damping: 22,
  });
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 160,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const processFile = (file?: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updatePhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFile(e.target.files?.[0]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    processFile(e.dataTransfer.files?.[0]);
  };

  const handleTriggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto flex flex-col items-center justify-center cursor-pointer select-none perspective-[1000px] group"
    >
      {/* Hidden file input for uploading custom photo */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-label="Upload custom portrait photo"
      />

      {/* Dual ambient glow matching the uploaded photo's lighting (warm amber left, cool blue right) */}
      <div className="absolute -left-8 top-1/4 w-44 h-44 bg-amber-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -right-8 top-1/4 w-44 h-44 bg-blue-500/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Floating Animated Container */}
      <motion.div
        animate={{
          y: [-7, 7, -7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Main Avatar Card Frame */}
        <div
          className={`relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border ${
            isDragging
              ? 'border-blue-400 bg-blue-950/40 ring-4 ring-blue-500/30'
              : 'border-white/20 bg-gradient-to-b from-[#18181C] to-[#050507]'
          } shadow-2xl shadow-black/95 p-1.5 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-blue-900/30`}
        >
          {/* Inner image container */}
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black flex items-center justify-center">
            <img
              src={imageSrc}
              onError={handleImageError}
              alt="Mayank Raja Avatar"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Drag-over indicator overlay */}
            {isDragging && (
              <div className="absolute inset-0 bg-blue-600/70 backdrop-blur-xs flex flex-col items-center justify-center text-white z-30">
                <Upload size={32} className="animate-bounce mb-2" />
                <span className="text-xs font-mono font-bold tracking-wide">DROP YOUR IMAGE HERE</span>
              </div>
            )}

            {/* Bottom gradient overlay for readability of tag */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Quick Upload / Set Photo Trigger Button */}
            <button
              type="button"
              onClick={handleTriggerUpload}
              className="absolute top-2.5 right-2.5 px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black/95 border border-white/25 hover:border-white/50 text-neutral-200 hover:text-white backdrop-blur-md transition-all duration-200 z-20 flex items-center gap-1.5 text-[10px] font-mono shadow-xl cursor-pointer"
              title="Click to apply image.png directly"
            >
              <Camera size={13} className="text-amber-400" />
              <span>{isCustom ? 'Change Photo' : 'Upload image.png'}</span>
            </button>

            {/* In-card Identity Tag */}
            <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] font-mono z-10">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Mayank Raja
              </span>
              <span className="text-neutral-400 text-[10px] tracking-wide">
                CSE 2nd Year
              </span>
            </div>
          </div>
        </div>

        {/* Orbiting Metadata Badges */}
        <motion.div
          animate={{
            x: [8, -8, 8],
            y: [-6, 6, -6],
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-[#141416]/95 border border-white/15 text-neutral-200 text-[11px] font-mono shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-1.5 pointer-events-none"
        >
          <Code2 size={12} className="text-blue-400" />
          <span>CSE @ DSCE</span>
        </motion.div>

        <motion.div
          animate={{
            x: [-8, 8, -8],
            y: [6, -6, 6],
          }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#141416]/95 border border-white/15 text-neutral-200 text-[11px] font-mono shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-1.5 pointer-events-none"
        >
          <Sparkles size={12} className="text-amber-400" />
          <span>Developer & Builder</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
