import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, LayoutDashboard, Compass, Layers } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const {
    number,
    shortTitle,
    title,
    category,
    description,
    tags = [],
    slug,
  } = project;

  // Render a large, clean editorial visual showcase for each project
  const renderVisual = () => {
    if (slug === 'genlink') {
      return (
        <div className="relative w-full aspect-[16/10] bg-[#0E131F] rounded-xl overflow-hidden p-6 sm:p-10 flex items-center justify-center border border-border/80 group-hover:border-text-primary/30 transition-all duration-500 shadow-sm">
          {/* Subtle ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Mobile Composition */}
          <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-white tracking-wide">GenLink Lifestyle</span>
              </div>
              <span className="text-[10px] font-mono text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2 py-0.5 rounded-full">
                Comfort Mode
              </span>
            </div>

            <div className="py-4">
              <div className="text-[11px] text-slate-400 mb-2 font-medium">Quick Communication Hub</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-2.5 flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center mb-1">
                    G
                  </div>
                  <span className="text-xs font-medium text-slate-200">Grandma</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Online</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-2.5 flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center mb-1">
                    M
                  </div>
                  <span className="text-xs font-medium text-slate-200">Mom</span>
                  <span className="text-[10px] text-slate-400 font-mono">2h ago</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-2.5 flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs flex items-center justify-center mb-1">
                    L
                  </div>
                  <span className="text-xs font-medium text-slate-200">Lucas</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Active</span>
                </div>
              </div>
            </div>

            <div className="bg-sky-950/30 border border-sky-800/40 rounded-xl p-3 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                ▶
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Voice Note • Family Chat</span>
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
        <div className="relative w-full aspect-[16/10] bg-[#121624] rounded-xl overflow-hidden p-6 sm:p-10 flex items-center justify-center border border-border/80 group-hover:border-text-primary/30 transition-all duration-500 shadow-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Large Financial Dashboard Composition */}
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-white">Multi-Currency Hub</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                +12.4% MoM
              </span>
            </div>

            <div className="py-4">
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Net Reconciled Balance</div>
              <div className="text-3xl font-bold font-mono text-white mt-1 tracking-tight">$14,280.50 <span className="text-xs font-normal text-slate-400">USD</span></div>
              <div className="text-xs font-mono text-slate-400 mt-1">≈ 58,549,000 KHR</div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-slate-800/70">
                <span className="text-slate-300">Upwork International Payout</span>
                <span className="font-mono text-emerald-400 font-semibold">+$2,450.00</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-slate-800/70">
                <span className="text-slate-300">SaaS Infrastructure Expense</span>
                <span className="font-mono text-slate-400">-$64.00</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Responsive Web Experience
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0E1A17] rounded-xl overflow-hidden p-6 sm:p-10 flex items-center justify-center border border-border/80 group-hover:border-text-primary/30 transition-all duration-500 shadow-sm">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Large Responsive Campus Experience Mockup */}
        <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Campus Study Pods</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              Live Map
            </span>
          </div>

          <div className="py-4 space-y-3">
            <div className="p-3 bg-slate-800/80 border border-slate-700/70 rounded-xl">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Library 3rd Floor (Quiet)</span>
                <span className="text-emerald-400 font-mono">32% Occupied</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-400 h-full w-[32%] rounded-full" />
              </div>
            </div>

            <div className="p-3 bg-slate-800/80 border border-slate-700/70 rounded-xl">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Science Wing Commons</span>
                <span className="text-amber-400 font-mono">78% Occupied</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-amber-400 h-full w-[78%] rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
            <span>Eco Points Logged</span>
            <span className="font-mono text-emerald-400 font-semibold">+1,240 pts</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <article className="group py-12 md:py-16 border-b border-border last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Number, Title, Metadata & Action */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted block">
            {number}
          </span>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight group-hover:text-accent transition-colors leading-[1.08]">
            <Link to={`/projects/${slug}`}>
              {shortTitle || title}
            </Link>
          </h3>

          <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
            {category}
          </div>

          <p className="text-base text-text-secondary leading-relaxed pt-2">
            {description}
          </p>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-surface border border-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <div className="pt-4">
            <Link
              to={`/projects/${slug}`}
              className="group/link inline-flex items-center gap-2 text-base font-bold text-text-primary hover:text-accent transition-colors"
            >
              <span className="editorial-link">View Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Large Cinematic Visual */}
        <div className="lg:col-span-7">
          <Link to={`/projects/${slug}`} className="block overflow-hidden rounded-xl">
            {renderVisual()}
          </Link>
        </div>

      </div>
    </article>
  );
}
