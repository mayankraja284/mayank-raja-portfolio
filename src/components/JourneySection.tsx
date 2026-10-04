import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Hammer, BookOpen, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar size={18} className="text-blue-400" />;
      case 1:
        return <Hammer size={18} className="text-emerald-400" />;
      case 2:
        return <BookOpen size={18} className="text-amber-400" />;
      default:
        return <Sparkles size={18} className="text-purple-400" />;
    }
  };

  return (
    <section
      id="journey"
      className="relative py-28 sm:py-36 px-5 sm:px-8 max-w-7xl mx-auto bg-[#0C0C0C] border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                Trajectory & Roadmap
              </span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              MY JOURNEY
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-md">
              A transparent, grounded path of growth: from core academic foundations to building practical products and software systems.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Timeline Cards */}
        <div className="lg:col-span-7 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500/50 via-emerald-500/30 to-amber-500/20 hidden sm:block" />

          <div className="space-y-8">
            {portfolioData.journey.map((item, idx) => (
              <motion.div
                key={item.badge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-start gap-6 group"
              >
                {/* Timeline node circle */}
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-[#141416] border border-white/10 items-center justify-center shrink-0 z-10 group-hover:border-white/30 transition-colors shadow-lg">
                  {getIconForIndex(idx)}
                </div>

                {/* Timeline content box */}
                <div className="flex-1 p-6 sm:p-7 rounded-2xl bg-[#141416] border border-white/10 hover:border-white/20 transition-all shadow-xl">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-['Syne'] text-xl font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-400 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
