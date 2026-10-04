import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Code2 } from 'lucide-react';

export const AvatarHeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto flex flex-col items-center justify-center select-none perspective-[1000px] group"
    >
      {/* Dual ambient glow */}
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
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-b from-[#18181C] to-[#050507] shadow-2xl shadow-black/95 p-1.5 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-blue-900/30">
          
          {/* Inner image container */}
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black flex items-center justify-center">
            <img
              src="/mayank.jpeg"
              alt="Mayank Raja"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Identity Tag */}
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
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
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
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          }}
          className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#141416]/95 border border-white/15 text-neutral-200 text-[11px] font-mono shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-1.5 pointer-events-none"
        >
          <Sparkles size={12} className="text-amber-400" />
          <span>Developer & Builder</span>
        </motion.div>
      </motion.div>
    </div>
  );
};