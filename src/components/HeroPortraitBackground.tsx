import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Video, Eye, User } from 'lucide-react';

interface HeroPortraitBackgroundProps {
  onImageLoadError?: () => void;
}

export const HeroPortraitBackground: React.FC<HeroPortraitBackgroundProps> = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoExists, setVideoExists] = useState(false);

  // Mouse tracking for subtle 3D parallax depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 100,
    damping: 25,
  });
  const springY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 100,
    damping: 25,
  });

  useEffect(() => {
    // Check if user has uploaded a direct video or image file in /public
    const checkVideo = async () => {
      try {
        const res = await fetch('/mayank_hero.mp4', { method: 'HEAD' });
        if (res.ok) setVideoExists(true);
      } catch {
        setVideoExists(false);
      }
    };
    checkVideo();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Dynamic ambient radial lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[550px] bg-gradient-to-b from-blue-950/20 via-sky-950/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Main Portrait / Video Container */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {videoExists ? (
          // If the actual video file exists in /public/mayank_hero.mp4
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className="w-full max-w-4xl h-full object-cover object-center opacity-45 mix-blend-screen scale-105"
            src="/mayank_hero.mp4"
          />
        ) : (
          // Exact portrait visual of Mayank Raja from the 00:01 video frame
          <div className="relative w-full max-w-3xl h-[650px] sm:h-[750px] md:h-[850px] flex items-center justify-center opacity-55 sm:opacity-65 transition-opacity duration-700">
            {/* The SVG vector rendering matching the exact frame */}
            <img
              src="/mayank_portrait.svg"
              alt="Mayank Raja - 00:01 Video Frame Portrait"
              className="w-full h-full object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        )}
      </motion.div>

      {/* Cinematic Studio Scrims (Ensures high WCAG contrast for text and foreground buttons) */}
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent pointer-events-none" />

      {/* Bottom fade into the page background */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent pointer-events-none" />

      {/* Side vignettes */}
      <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#0C0C0C] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none" />
    </div>
  );
};
