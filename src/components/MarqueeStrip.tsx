import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code,
  Terminal,
  Cpu,
  Boxes,
  FolderGit2,
  Binary,
  Globe,
  Sparkles,
  Database,
  Layers,
  Workflow,
  Laptop,
} from 'lucide-react';

interface MarqueeItem {
  text: string;
  icon: React.ReactNode;
  category: string;
}

const row1Items: MarqueeItem[] = [
  { text: 'CODE', icon: <Code size={18} className="text-blue-400" />, category: 'Core' },
  { text: 'BUILD', icon: <Terminal size={18} className="text-emerald-400" />, category: 'Action' },
  { text: 'AI', icon: <Sparkles size={18} className="text-purple-400" />, category: 'Exploration' },
  { text: 'SYSTEMS', icon: <Cpu size={18} className="text-amber-400" />, category: 'Architecture' },
  { text: 'PROJECTS', icon: <Boxes size={18} className="text-sky-400" />, category: 'Portfolio' },
  { text: 'DSA', icon: <Binary size={18} className="text-rose-400" />, category: 'Algorithms' },
  { text: 'WEB', icon: <Globe size={18} className="text-cyan-400" />, category: 'Frontend' },
  { text: 'GITHUB', icon: <FolderGit2 size={18} className="text-slate-300" />, category: 'Version Control' },
];

const row2Items: MarqueeItem[] = [
  { text: 'ALGORITHMS', icon: <Binary size={18} className="text-emerald-400" />, category: 'Problem Solving' },
  { text: 'REACT', icon: <Laptop size={18} className="text-sky-400" />, category: 'Library' },
  { text: 'C++ & JAVA', icon: <Code size={18} className="text-blue-400" />, category: 'Languages' },
  { text: 'DATABASES', icon: <Database size={18} className="text-amber-400" />, category: 'Storage' },
  { text: 'SOFTWARE', icon: <Workflow size={18} className="text-purple-400" />, category: 'Engineering' },
  { text: 'STRUCTURES', icon: <Layers size={18} className="text-indigo-400" />, category: 'CS Core' },
  { text: 'PYTHON', icon: <Terminal size={18} className="text-yellow-400" />, category: 'Scripting' },
  { text: 'EXPLORATION', icon: <Sparkles size={18} className="text-cyan-400" />, category: 'Innovation' },
];

export const MarqueeStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll offset
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-120, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-14 overflow-hidden border-y border-white/5 bg-[#0A0A0A] select-none"
      aria-label="Developer focus marquee"
    >
      {/* Side gradient scrims for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <div className="space-y-4">
        {/* Row 1 - Left to Right Movement */}
        <motion.div style={{ x: x1 }} className="flex gap-4 w-max">
          {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-white/8 hover:border-white/20 transition-colors backdrop-blur-sm group shrink-0"
            >
              <div className="p-1.5 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-['Syne'] font-bold text-sm tracking-wider text-neutral-200 group-hover:text-white transition-colors">
                  {item.text}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Right to Left Movement */}
        <motion.div style={{ x: x2 }} className="flex gap-4 w-max">
          {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/40 border border-white/6 hover:border-white/15 transition-colors backdrop-blur-sm group shrink-0"
            >
              <div className="p-1.5 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-['Syne'] font-bold text-sm tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                  {item.text}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
