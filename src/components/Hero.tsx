import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, ExternalLink, Download, FileText, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AvatarHeroVisual } from './AvatarHeroVisual';

export const Hero: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2500);

    // Fallback programmatic trigger to guarantee download in all browsers/iframes
    try {
      const link = document.createElement('a');
      link.href = portfolioData.resumeUrl || '/Mayank_Raja_Resume.pdf';
      link.download = 'Mayank_Raja_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Allow default anchor tag behavior to proceed
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Dynamic ambient studio lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-blue-950/20 via-sky-950/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Hero Foreground Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-auto w-full">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-neutral-300 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{portfolioData.subheadline}</span>
        </motion.div>

        {/* Oversized Headline with silver/blue-gray gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Syne'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-5 leading-none select-none text-gradient-silver max-w-5xl drop-shadow-2xl"
        >
          {portfolioData.headline}
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8 text-balance font-normal"
        >
          {portfolioData.supportingText}
        </motion.p>

        {/* 3D Interactive Avatar Section featuring Mayank's photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-9 w-full"
        >
          <AvatarHeroVisual avatarSrc={portfolioData.avatarUrl} />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl"
        >
          {/* Explore My Work CTA */}
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown
              size={15}
              className="transition-transform group-hover:translate-y-0.5 duration-200"
            />
          </a>

          {/* Download Resume Button */}
          <a
            href={portfolioData.resumeUrl || '/Mayank_Raja_Resume.pdf'}
            download="Mayank_Raja_Resume.pdf"
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 border border-blue-500/30 hover:border-blue-500/60 hover:bg-neutral-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/10 group cursor-pointer"
            aria-label="Download Mayank Raja's sample PDF resume"
          >
            {downloading ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400">RESUME DOWNLOADED</span>
              </>
            ) : (
              <>
                <FileText size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>DOWNLOAD RESUME</span>
                <Download size={14} className="text-neutral-400 group-hover:text-white transition-colors" />
              </>
            )}
          </a>

          {/* GitHub Button */}
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 hover:bg-neutral-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            aria-label="Visit Mayank Raja's GitHub profile"
          >
            <Github size={17} />
            <span>GitHub</span>
            <ExternalLink size={13} className="text-neutral-500" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 hover:bg-neutral-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            aria-label="Visit Mayank Raja's LinkedIn profile"
          >
            <Linkedin size={17} className="text-sky-400" />
            <span>LinkedIn</span>
            <ExternalLink size={13} className="text-neutral-500" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="relative z-10 w-full pt-8 flex items-center justify-between text-xs text-neutral-500 font-mono"
      >
        <span className="hidden sm:inline">DAYANANDA SAGAR COLLEGE OF ENGINEERING</span>
        <span className="sm:hidden">DSCE CSE</span>
        <div className="flex items-center gap-2">
          <span>SCROLL TO DISCOVER</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
