import React from 'react';
import {
  Clock,
  Ticket,
  Users,
  Activity,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Leaf,
  Globe,
  Compass,
  CheckCircle,
  HelpCircle,
  Lock,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectVisualMockupProps {
  project: ProjectItem;
}

export const ProjectVisualMockup: React.FC<ProjectVisualMockupProps> = ({ project }) => {
  // If user provides a custom image path later in project.customImage, it will render here
  if ((project as any).customImage) {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group">
        <img
          src={(project as any).customImage}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  // Domain-authentic visual cards
  if (project.previewType === 'queueless') {
    return (
      <div className="w-full h-full min-h-[320px] sm:min-h-[380px] rounded-2xl bg-gradient-to-br from-[#16181D] via-[#111215] to-[#0D0E10] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
              <Ticket size={16} />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block tracking-wider uppercase">
                Digital Queue Engine
              </span>
              <span className="text-sm font-bold text-white font-['Syne']">
                Queueless Virtual Pass
              </span>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono font-medium text-amber-300">
            SYSTEM IN DEV
          </div>
        </div>

        {/* Central interactive mockup card */}
        <div className="relative z-10 my-auto py-4 space-y-4">
          <div className="p-5 rounded-xl bg-neutral-900/90 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-neutral-400">YOUR QUEUE POSITION</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Clock size={12} /> ~4 mins remaining
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
                  #A-42
                </span>
                <span className="text-xs text-neutral-500 block mt-1 font-mono">
                  Token ID: 8941-B
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-neutral-400 block">AHEAD IN LINE</span>
                <span className="text-2xl font-bold text-neutral-200 font-mono">2 People</span>
              </div>
            </div>

            {/* Stepper bar */}
            <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                1. Checked In ✓
              </div>
              <div className="p-1.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 animate-pulse">
                2. Processing...
              </div>
              <div className="p-1.5 rounded bg-white/5 text-neutral-500">
                3. Service Desk
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-500 border-t border-white/5 pt-3">
          <span>Targeting queue delay reduction</span>
          <span>B.E. CSE Project Prototype</span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'datapulse') {
    return (
      <div className="w-full h-full min-h-[320px] sm:min-h-[380px] rounded-2xl bg-gradient-to-br from-[#0E1522] via-[#0B0F19] to-[#080B12] border border-sky-500/20 p-6 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-sky-500/15 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
              <Activity size={16} />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400/80 block tracking-wider uppercase">
                Telemetry Dashboard
              </span>
              <span className="text-sm font-bold text-white font-['Syne']">
                Data Pulse Analytics
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono font-semibold text-sky-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            LIVE TELEMETRY
          </div>
        </div>

        {/* Central pulse wave graph */}
        <div className="relative z-10 my-auto py-3 space-y-3">
          <div className="p-4 rounded-xl bg-[#0F172A]/80 border border-sky-500/20 backdrop-blur-md">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="text-slate-400">STREAMING PULSE RATE</span>
              <span className="text-sky-400 font-semibold flex items-center gap-1">
                <TrendingUp size={12} /> 99.8% Reliability
              </span>
            </div>

            {/* SVG Wave Graph */}
            <div className="w-full h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 300 80" className="w-full h-full stroke-sky-400 fill-none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 Q25,43 50,45 T100,45 T130,20 T150,70 T170,10 T190,55 T230,45 T270,45 T300,45"
                  strokeWidth="2.5"
                  className="stroke-sky-400"
                />
                <path
                  d="M0,45 Q25,43 50,45 T100,45 T130,20 T150,70 T170,10 T190,55 T230,45 T270,45 T300,45 L300,80 L0,80 Z"
                  fill="url(#pulseGradient)"
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-sky-500/10 text-center font-mono">
              <div>
                <span className="text-[10px] text-slate-400 block">LATENCY</span>
                <span className="text-xs font-bold text-white">18 ms</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">THROUGHPUT</span>
                <span className="text-xs font-bold text-white">4.2k req/s</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">STATUS</span>
                <span className="text-xs font-bold text-emerald-400">HEALTHY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-sky-500/15 pt-3">
          <span>Vercel Production Deployment</span>
          <span className="text-sky-400 hover:underline">data-pulse-rust.vercel.app</span>
        </div>
      </div>
    );
  }

  // Virtual Green Education
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] rounded-2xl bg-gradient-to-br from-[#0B1A14] via-[#08130E] to-[#050C09] border border-emerald-500/20 p-6 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/15 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
            <Leaf size={16} />
          </div>
          <div>
            <span className="text-xs font-mono text-emerald-400/80 block tracking-wider uppercase">
              Sustainability Platform
            </span>
            <span className="text-sm font-bold text-white font-['Syne']">
              Virtual Green Education
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          ACTIVE WEB APP
        </div>
      </div>

      {/* Modules showcase */}
      <div className="relative z-10 my-auto py-3 space-y-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          {/* Card 1: Virtual Field Trips */}
          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
              <Compass size={14} />
              <span>Virtual Field Trips</span>
            </div>
            <p className="text-[11px] text-neutral-400 line-clamp-2">
              Interactive 360° ecological habitat exploration modules.
            </p>
          </div>

          {/* Card 2: Interactive Gamification */}
          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
              <Globe size={14} />
              <span>Eco Simulations</span>
            </div>
            <p className="text-[11px] text-neutral-400 line-clamp-2">
              Carbon cycle & renewable energy balance simulators.
            </p>
          </div>
        </div>

        {/* Quiz & Awareness strip */}
        <div className="p-3.5 rounded-xl bg-neutral-900/70 border border-white/5 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <HelpCircle size={14} className="text-emerald-400" />
            <span className="text-neutral-300">Interactive Eco Quizzes</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            Gamified Learning
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-emerald-500/15 pt-3">
        <span>Environmental Awareness Hub</span>
        <span className="text-emerald-400 hover:underline">idt-project-ten.vercel.app</span>
      </div>
    </div>
  );
};
