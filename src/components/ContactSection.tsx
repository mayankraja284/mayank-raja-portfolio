import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { portfolioData, EMAIL } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-5 sm:px-8 max-w-7xl mx-auto bg-[#0C0C0C] border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
            Open For Collaboration
          </span>
        </motion.div>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Syne'] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight text-gradient-silver"
        >
          LET'S BUILD SOMETHING
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-12 text-balance"
        >
          I'm always interested in learning, building, collaborating, and working on interesting technical problems.
        </motion.p>

        {/* Connect Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {/* GitHub */}
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 hover:bg-neutral-800 text-white font-medium text-sm transition-all flex items-center gap-3 shadow-lg group cursor-pointer"
            aria-label="Connect on GitHub"
          >
            <Github size={18} />
            <span>GitHub</span>
            <ArrowUpRight
              size={14}
              className="text-neutral-500 group-hover:text-white transition-colors"
            />
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 hover:bg-neutral-800 text-white font-medium text-sm transition-all flex items-center gap-3 shadow-lg group cursor-pointer"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin size={18} className="text-sky-400" />
            <span>LinkedIn</span>
            <ArrowUpRight
              size={14}
              className="text-neutral-500 group-hover:text-white transition-colors"
            />
          </a>

          {/* Email button — shown ONLY if EMAIL variable is set */}
          {EMAIL ? (
            <a
              href={`mailto:${EMAIL}`}
              className="px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center gap-2.5 shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <Mail size={18} />
              <span>EMAIL ME →</span>
            </a>
          ) : null}

          {/* Share / Copy Portfolio link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="px-5 py-4 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2.5 cursor-pointer"
            title="Copy portfolio URL"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            <span>{copied ? 'Copied Link!' : 'Share Portfolio'}</span>
          </button>
        </motion.div>

        {/* Status Callout Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-[#141416] border border-white/10 text-xs font-mono text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-semibold">Active Status:</span>
            <span>2nd Year CSE @ Dayananda Sagar College of Engineering</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <div className="flex items-center gap-1.5 text-blue-400">
            <Sparkles size={13} />
            <span>Open to Project Discussions & Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
