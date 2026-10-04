import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#080808] text-neutral-400 py-14 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
          <span className="font-['Syne'] text-xl font-bold tracking-tight text-white">
            {portfolioData.name}
          </span>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans">
            Computer Science & Engineering Student · Dayananda Sagar College of Engineering
          </p>
        </div>

        {/* Center/Right: Socials & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition-all cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition-all cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
            <span className="hidden sm:inline">TOP</span>
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-2 text-center">
        <span>© 2026 Mayank Raja. All rights reserved.</span>
        <span>Built with React, TypeScript & Tailwind CSS</span>
      </div>
    </footer>
  );
};
