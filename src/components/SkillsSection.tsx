import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Terminal,
  Database,
  Layers,
  Cpu,
  Braces,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fundamentals' | 'web'>('all');

  const { fundamentals, webAndDev } = portfolioData.skills;

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'c':
      case 'c++':
        return <Cpu size={18} className="text-blue-600" />;
      case 'python':
        return <Terminal size={18} className="text-amber-600" />;
      case 'java':
        return <Braces size={18} className="text-red-600" />;
      case 'data structures & algorithms':
        return <Layers size={18} className="text-purple-600" />;
      case 'object-oriented programming':
        return <Code2 size={18} className="text-indigo-600" />;
      case 'git & github':
        return <Terminal size={18} className="text-neutral-800" />;
      case 'html':
      case 'css':
      case 'javascript':
        return <Globe2 size={18} className="text-sky-600" />;
      case 'react':
        return <Sparkles size={18} className="text-cyan-600" />;
      case 'apis':
        return <Code2 size={18} className="text-emerald-600" />;
      case 'databases':
        return <Database size={18} className="text-orange-600" />;
      case 'ai-assisted development':
        return <Sparkles size={18} className="text-purple-600" />;
      default:
        return <CheckCircle2 size={18} className="text-neutral-700" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 sm:py-36 px-5 sm:px-8 bg-[#F8F9FA] text-neutral-900 border-y border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
                Core Stack & Toolkit
              </span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 text-balance">
              WHAT I'M BUILDING WITH
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed font-sans">
            Technologies and engineering foundations actively practiced through coursework, problem solving, and project development.
          </p>
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-200/80 rounded-xl w-fit mb-12 border border-neutral-300">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            All Skills ({fundamentals.length + webAndDev.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fundamentals')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'fundamentals'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Programming & Fundamentals ({fundamentals.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'web'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Web & Development ({webAndDev.length})
          </button>
        </div>

        {/* Skills Two-Group Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Group 1: Programming & Fundamentals */}
          {(activeTab === 'all' || activeTab === 'fundamentals') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="border-b border-neutral-300 pb-3 flex items-center justify-between">
                <h3 className="font-['Syne'] text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
                  <Code2 size={20} className="text-blue-600" />
                  <span>Programming & Fundamentals</span>
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  {fundamentals.length} Topics
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {fundamentals.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-neutral-400/80 transition-all flex flex-col justify-between min-h-[96px] group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-neutral-100 group-hover:bg-blue-50 transition-colors">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="font-semibold text-neutral-900 text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      {skill.isCurrentlyLearning ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <BookOpen size={10} />
                          CURRENTLY LEARNING
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-neutral-600">
                          Foundational
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Group 2: Web & Development */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="border-b border-neutral-300 pb-3 flex items-center justify-between">
                <h3 className="font-['Syne'] text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
                  <Globe2 size={20} className="text-emerald-600" />
                  <span>Web & Development</span>
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  {webAndDev.length} Technologies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {webAndDev.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-neutral-400/80 transition-all flex flex-col justify-between min-h-[96px] group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-neutral-100 group-hover:bg-emerald-50 transition-colors">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="font-semibold text-neutral-900 text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      {skill.isCurrentlyLearning ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <BookOpen size={10} />
                          CURRENTLY LEARNING
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-neutral-600">
                          Core Practice
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Honest student philosophy disclaimer */}
        <div className="mt-14 pt-8 border-t border-neutral-200 text-center">
          <p className="text-xs text-neutral-500 font-mono tracking-wide">
            TRANSPARENT ENGINEERING PROGRESSION · NO FABRICATED PROFICIENCY PERCENTAGES · CONTINUOUS LEARNING
          </p>
        </div>
      </div>
    </section>
  );
};
