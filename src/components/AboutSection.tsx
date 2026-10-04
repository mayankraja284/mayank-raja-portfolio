import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProfilePhotoCard } from './ProfilePhotoCard';

interface RevealTextProps {
  text: string;
  className?: string;
}

const RevealParagraph: React.FC<RevealTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.4'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ['#525252', '#F5F5F5']);

  return (
    <span className="relative mr-2 my-0.5 inline-block">
      <motion.span style={{ opacity, color }} className="transition-colors">
        {children}
      </motion.span>
    </span>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-5 sm:px-8 max-w-7xl mx-auto bg-[#0C0C0C]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Heading, Intro, and Prominent Profile Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  Profile & Biography
                </span>
              </div>
              <h2 className="font-['Syne'] text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                {portfolioData.about.heading}
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-sm">
                Second-year student at Dayananda Sagar College of Engineering focusing on engineering fundamentals, practical software, and hands-on systems.
              </p>
            </div>

            {/* Exact Profile Image Card */}
            <ProfilePhotoCard />
          </motion.div>
        </div>

        {/* Right Column: Character/Word Revealed Paragraphs & Education Card */}
        <div className="lg:col-span-7 space-y-12">
          {/* Paragraph 1 */}
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-300">
            <RevealParagraph text={portfolioData.about.paragraphs[0]} />
          </div>

          {/* Paragraph 2 */}
          <div className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300">
            <RevealParagraph text={portfolioData.about.paragraphs[1]} />
          </div>

          {/* Paragraph 3 */}
          <div className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300">
            <RevealParagraph text={portfolioData.about.paragraphs[2]} />
          </div>

          {/* Elegant Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="mt-14 pt-10 border-t border-white/10"
          >
            <div className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-blue-400" size={20} />
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                      Education
                    </span>
                  </div>

                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {portfolioData.education.college}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 font-medium">
                    {portfolioData.education.degree}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                    <MapPin size={13} className="text-neutral-500" />
                    <span>Bangalore, Karnataka</span>
                    <span>·</span>
                    <span>Department of Computer Science & Engineering</span>
                  </div>
                </div>

                {/* Score & Year Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8 gap-3 shrink-0">
                  <div className="text-left sm:text-right">
                    <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                      Current Year
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {portfolioData.education.currentYear}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                      Cumulative CGPA
                    </span>
                    <div className="flex items-baseline gap-1 sm:justify-end">
                      <span className="text-3xl font-extrabold text-white font-['Syne'] tabular-nums tracking-tight">
                        {portfolioData.education.cgpa}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">/ 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
