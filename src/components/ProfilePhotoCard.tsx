import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProfilePhotoCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none group">
      {/* Dual ambient studio glow */}
      <div className="absolute -left-6 -top-6 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Profile Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#18181B] via-[#121316] to-[#0A0B0D] p-2.5 shadow-2xl shadow-black/90 transition-all duration-300 group-hover:border-white/30 group-hover:shadow-blue-950/40"
      >
        {/* Image Frame */}
        <div className="relative aspect-square w-full rounded-[20px] overflow-hidden bg-black flex items-center justify-center">
          <img
            src="/mayank.jpeg"
            alt="Mayank Raja - Profile Portrait"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

          {/* Profile Status */}
          <div className="absolute top-3 left-3 z-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[11px] font-mono text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PROFILE PHOTO</span>
            </div>
          </div>

          {/* Identity */}
          <div className="absolute bottom-3 inset-x-3.5 z-10 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-['Syne'] text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>{portfolioData.fullName}</span>
                <CheckCircle2 size={15} className="text-blue-400" />
              </h4>

              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-white/10 text-white border border-white/15">
                {portfolioData.education.cgpa} CGPA
              </span>
            </div>

            <p className="text-xs text-neutral-400 font-sans flex items-center gap-1.5">
              <span>
                {portfolioData.education.degree.replace(
                  'Bachelor of Engineering — ',
                  'B.E. '
                )}
              </span>
              <span>·</span>
              <span>{portfolioData.education.currentYear}</span>
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-3 pt-3.5 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin size={13} className="text-blue-400" />
            <span className="font-mono text-[11px]">
              Bangalore, India
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};