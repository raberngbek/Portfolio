import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Smartphone, LayoutDashboard, Compass } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const {
    number,
    shortTitle,
    title,
    category,
    description,
    tags = [],
    slug,
    accentColor = '#38BDF8',
  } = project;

  // Render a tailored high-fidelity visual mock corresponding to the project
  const renderProjectVisual = () => {
    if (slug === 'genlink') {
      return (
        <div className="relative w-full h-full min-h-[260px] md:min-h-[320px] bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex items-center justify-center overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none border-b md:border-b-0 md:border-r border-border/60">
          {/* Subtle decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Mobile Mockup Card */}
          <div className="relative w-64 bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">GenLink Hub</span>
              </div>
              <span className="text-[10px] font-mono text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2 py-0.5 rounded-full">
                Comfort Mode
              </span>
            </div>

            {/* Quick Family Contact Circles */}
            <div className="pt-3 pb-2">
              <div className="text-[11px] text-slate-400 mb-2 font-medium">One-Tap Family Call</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-2 flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center mb-1">
                    G
                  </div>
                  <span className="text-[11px] font-medium text-slate-200">Grandma</span>
                  <span className="text-[9px] text-emerald-400 font-mono">Online</span>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-2 flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center mb-1">
                    M
                  </div>
                  <span className="text-[11px] font-medium text-slate-200">Mom</span>
                  <span className="text-[9px] text-slate-400 font-mono">2h ago</span>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-2 flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs flex items-center justify-center mb-1">
                    L
                  </div>
                  <span className="text-[11px] font-medium text-slate-200">Lucas</span>
                  <span className="text-[9px] text-emerald-400 font-mono">Active</span>
                </div>
              </div>
            </div>

            {/* Audio Voice Note Module */}
            <div className="mt-2 bg-sky-950/40 border border-sky-800/40 rounded-xl p-2.5 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                ▶
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-[10px] text-slate-300">
                  <span>Voice Note • Mom</span>
                  <span className="font-mono text-sky-400">0:42</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-sky-400 h-full w-3/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (slug === 'product-ui-redesign' || slug === 'pulsepay') {
      return (
        <div className="relative w-full h-full min-h-[260px] md:min-h-[320px] bg-gradient-to-br from-slate-900 to-indigo-950/40 p-6 flex items-center justify-center overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none border-b md:border-b-0 md:border-r border-border/60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Fintech Dashboard Widget */}
          <div className="relative w-72 bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-white">Multi-Currency Wallet</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                +12.4% MoM
              </span>
            </div>

            <div className="py-3">
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Total Net Balance</div>
              <div className="text-2xl font-bold font-mono text-white mt-0.5 tracking-tight">$14,280.50 <span className="text-xs font-normal text-slate-400">USD</span></div>
              <div className="text-[11px] font-mono text-slate-400 mt-1">≈ 58,549,000 KHR</div>
            </div>

            {/* Sparkline & Transaction Pill */}
            <div className="space-y-2 pt-1 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-300 text-[11px]">Upwork Freelance Payout</span>
                </div>
                <span className="font-mono text-emerald-400 font-medium text-[11px]">+$2,450.00</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <span className="text-slate-300 text-[11px]">SaaS Infrastructure Fee</span>
                </div>
                <span className="font-mono text-slate-400 font-medium text-[11px]">-$64.00</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: EcoTrack
    return (
      <div className="relative w-full h-full min-h-[260px] md:min-h-[320px] bg-gradient-to-br from-slate-900 to-emerald-950/30 p-6 flex items-center justify-center overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none border-b md:border-b-0 md:border-r border-border/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Campus App Card */}
        <div className="relative w-64 bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Campus Study Pods</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              Live Map
            </span>
          </div>

          <div className="py-3 space-y-2.5">
            <div className="p-2.5 bg-slate-800/80 border border-slate-700/70 rounded-xl">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Library 3rd Floor (Quiet)</span>
                <span className="text-emerald-400 font-mono text-[11px]">32% Full</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-400 h-full w-[32%] rounded-full" />
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/80 border border-slate-700/70 rounded-xl">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Science Wing Commons</span>
                <span className="text-amber-400 font-mono text-[11px]">78% Full</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-amber-400 h-full w-[78%] rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
            <span>Eco Points Logged</span>
            <span className="font-mono text-emerald-400 font-semibold">+1,240 pts</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <article className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-card">
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        {/* Visual Mockup Column */}
        <div className="md:col-span-6 overflow-hidden">
          {renderProjectVisual()}
        </div>

        {/* Content Column */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Top metadata */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-accent tracking-wider">
                PROJECT {number}
              </span>
              <span className="text-xs font-medium text-text-muted bg-surface-elevated px-2.5 py-1 rounded-full border border-border">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
              <Link to={`/projects/${slug}`}>
                {title}
              </Link>
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-background-subtle border border-border/80 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
            <Link
              to={`/projects/${slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-accent-hover transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <span className="text-xs text-text-muted font-mono">
              Figma & React Handoff
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
