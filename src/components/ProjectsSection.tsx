import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Clock, ExternalLink } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectVisualMockup } from './ProjectVisualMockup';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="sticky top-20 sm:top-24 mb-12 sm:mb-16 last:mb-0"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-[#121214] border border-white/10 p-6 sm:p-9 lg:p-11 shadow-2xl shadow-black/80 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
      >
        {/* Subtle accent glow top-right */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: project.themeColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Metadata & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Index & Status */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-neutral-500 font-mono">
                  {project.number}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.isComingSoon ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'
                    }`}
                  />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300">
                    {project.statusBadge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-['Syne'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans mb-6">
                {project.description}
              </p>

              {/* Technology Tags (Zero-Pill Discipline: clean unboxed text with subtle separators) */}
              <div className="pt-2 border-t border-white/5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Architecture & Focus
                </span>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-300 font-mono">
                  {project.technologies.map((tech, techIdx) => (
                    <React.Fragment key={tech}>
                      <span className="hover:text-white transition-colors">{tech}</span>
                      {techIdx < project.technologies.length - 1 && (
                        <span className="text-neutral-600" aria-hidden="true">
                          /
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {project.isComingSoon ? (
                // Inactive / Disabled Coming Soon button without fake link
                <div className="px-5 py-3 rounded-xl bg-neutral-800/80 border border-white/10 text-neutral-400 text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2 cursor-not-allowed select-none">
                  <Clock size={14} className="text-amber-400" />
                  <span>COMING SOON</span>
                </div>
              ) : (
                // Live Project Link
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 group/btn shadow-lg shadow-white/5 cursor-pointer"
                  aria-label={`View live project for ${project.title}`}
                >
                  <span>VIEW LIVE PROJECT</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 duration-200"
                  />
                </a>
              )}

              {/* GitHub Link where available */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github size={16} />
                  <span>VIEW ON GITHUB</span>
                  <ExternalLink size={12} className="text-neutral-500" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <div className="lg:col-span-6 w-full">
            <ProjectVisualMockup project={project} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-5 sm:px-8 max-w-7xl mx-auto bg-[#0C0C0C]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              Software Engineering Works
            </span>
          </div>
          <h2 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            SELECTED PROJECTS
          </h2>
        </div>

        <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed font-sans">
          Working applications and active software engineering explorations. Live deployments, verified source links, and clear progress states.
        </p>
      </div>

      {/* Sticky Stacking Project Cards */}
      <div className="relative">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
