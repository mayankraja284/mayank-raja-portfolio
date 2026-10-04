import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, GraduationCap, CheckCircle2, Upload, Sparkles, RefreshCw } from 'lucide-react';
import { useProfileImage } from '../utils/useProfileImage';
import { portfolioData } from '../data/portfolioData';

export const ProfilePhotoCard: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { imageSrc, isCustom, handleImageError, updatePhoto, resetPhoto } = useProfileImage();

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
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="relative w-full max-w-sm mx-auto lg:max-w-none group"
    >
      {/* Hidden file input for uploading the exact image.png */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-label="Upload exact profile image"
      />

      {/* Dual ambient studio glow matching the photo's lighting */}
      <div className="absolute -left-6 -top-6 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Profile Card Container */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`relative rounded-3xl overflow-hidden border ${
          isDragging
            ? 'border-blue-400 bg-blue-950/40 ring-4 ring-blue-500/30'
            : 'border-white/15 bg-gradient-to-b from-[#18181B] via-[#121316] to-[#0A0B0D]'
        } p-2.5 shadow-2xl shadow-black/90 transition-all duration-300 group-hover:border-white/30 group-hover:shadow-blue-950/40`}
      >
        {/* Inner Image Frame */}
        <div className="relative aspect-square w-full rounded-[20px] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={imageSrc}
            onError={handleImageError}
            alt="Mayank Raja - Profile Portrait"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Drag-over indicator overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-blue-600/75 backdrop-blur-xs flex flex-col items-center justify-center text-white z-30">
              <Upload size={36} className="animate-bounce mb-2" />
              <span className="text-xs font-mono font-bold tracking-wide">DROP IMAGE TO APPLY AS AVATAR</span>
            </div>
          )}

          {/* Bottom Dark Gradient Scrim for Contrast */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

          {/* Floating Action Controls on Top */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[11px] font-mono text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PROFILE PHOTO</span>
            </div>

            {/* Quick Upload / Set Photo Button */}
            <button
              type="button"
              onClick={handleTriggerUpload}
              className="px-3 py-1.5 rounded-xl bg-blue-600/90 hover:bg-blue-600 border border-blue-400/40 text-white font-medium backdrop-blur-md transition-all duration-200 flex items-center gap-1.5 text-xs font-mono shadow-xl cursor-pointer"
              title="Click to select your image.png file"
            >
              <Camera size={13} className="text-white" />
              <span>{isCustom ? 'Change Photo' : 'Upload image.png'}</span>
            </button>
          </div>

          {/* Bottom Identity Overlay */}
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
              <span>{portfolioData.education.degree.replace('Bachelor of Engineering — ', 'B.E. ')}</span>
              <span>·</span>
              <span>{portfolioData.education.currentYear}</span>
            </p>
          </div>
        </div>

        {/* Card Footer with Quick Action Helper */}
        <div className="p-3 pt-3.5 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin size={13} className="text-blue-400" />
            <span className="font-mono text-[11px]">Bangalore, India</span>
          </div>

          <button
            type="button"
            onClick={handleTriggerUpload}
            className="text-[11px] font-mono text-neutral-300 hover:text-white underline decoration-white/30 underline-offset-4 cursor-pointer"
          >
            Select from device
          </button>
        </div>
      </motion.div>
    </div>
  );
};
