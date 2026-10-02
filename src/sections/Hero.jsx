import React from 'react';
import { ArrowDownRight, ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 md:pt-48 md:pb-36 border-b border-border overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-6 space-y-7">
            {/* Small Top Tagline */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface border border-border text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                CHHAENG SOKUNTHEARA — PRODUCT DESIGNER
              </span>
            </div>

            {/* Large Bold Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tighter text-text-primary leading-[1.04]">
              Designing thoughtful <br className="hidden sm:inline" />
              digital experiences <br />
              that are built to work.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-text-secondary font-normal max-w-xl leading-relaxed">
              Computer Science student focused on UI/UX, Product Design, Design Systems, and front-end implementation.
            </p>

            {/* Secondary Metadata */}
            <div className="pt-1 text-xs text-text-muted font-mono flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="flex items-center gap-1.5 text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Phnom Penh, Cambodia
              </span>
              <span>•</span>
              <span className="text-accent-emerald font-medium">
                Open to Internship Opportunities
              </span>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-text-primary">
              <a
                href="#work"
                className="group inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <span className="editorial-link">View Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="/resume/Chhaeng_Sokuntheara_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <span className="editorial-link">Resume</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
              >
                <span className="editorial-link">Contact</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: User's Exact Landscape Portrait */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg group">
              {/* Subtle back card border glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent/10 via-transparent to-surface-elevated/40 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Portrait Card (Exact 3:2 landscape preservation) */}
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-border shadow-2xl transition-all duration-300 group-hover:border-text-primary/30">
                <div className="aspect-[3/2] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/images/portrait.jpg"
                    alt="CHHAENG SOKUNTHEARA — Product Designer & Front-End Developer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </div>

                {/* Editorial Caption Bar */}
                <div className="px-5 py-4 bg-surface/95 backdrop-blur-sm border-t border-border flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-text-primary tracking-tight">
                      CHHAENG SOKUNTHEARA
                    </h3>
                    <p className="text-xs text-text-muted font-mono mt-0.5">
                      UI/UX & Product Design Intern • Phnom Penh
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
