import React, { useState } from 'react';
import { ArrowDown, Download, MapPin, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-border/60"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Opportunity Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 border border-border text-xs font-medium text-text-primary shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
              </span>
              <span className="text-accent tracking-wide uppercase font-semibold text-[11px]">
                OPEN TO UI/UX & PRODUCT DESIGN INTERNSHIPS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.12]">
              I design thoughtful <br className="hidden sm:inline" />
              <span className="text-gradient">digital experiences</span> <br />
              <span className="text-text-secondary text-3xl sm:text-4xl lg:text-5xl font-semibold">
                and understand how they get built.
              </span>
            </h1>

            {/* Supporting Bio */}
            <div className="space-y-3 text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              <p>
                I’m <strong className="text-text-primary font-semibold">CHHAENG SOKUNTHEARA</strong>, a Computer Science student based in Phnom Penh, focused on UI/UX and Product Design.
              </p>
              <p className="text-sm sm:text-base text-text-muted">
                I create user-centered interfaces, prototypes, design systems, and responsive experiences while using my front-end knowledge to bridge design and engineering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#work" variant="primary" size="lg">
                View My Work
              </Button>
              <Button
                href="/resume/Chhaeng_Sokuntheara_Resume.pdf"
                variant="secondary"
                size="lg"
                target="_blank"
                download
              >
                <Download className="w-4 h-4 mr-1 text-accent" />
                Download Resume
              </Button>
            </div>

            {/* Metadata Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-text-muted border-t border-border/50">
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-medium text-text-secondary">Phnom Penh, Cambodia</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-emerald"></div>
                <span className="font-medium text-text-secondary">Available for Internship</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent-purple" />
                <span className="font-medium text-text-secondary">CS Student • ACLEDA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Figma-to-Code Interactive Canvas */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/30 via-accent-purple/30 to-accent-emerald/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Window Container */}
              <div className="relative bg-surface rounded-2xl border border-border shadow-2xl overflow-hidden">
                {/* Window Chrome Header */}
                <div className="bg-surface-elevated px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-text-muted">
                      Sokuntheara.fig ➔ Component.tsx
                    </span>
                  </div>

                  {/* Mode Switcher */}
                  <div className="flex items-center bg-background-darker p-0.5 rounded-lg border border-border/80">
                    <button
                      type="button"
                      onClick={() => setActiveTab('design')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        activeTab === 'design'
                          ? 'bg-accent text-background-darker font-bold shadow-sm'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      Figma
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('code')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        activeTab === 'code'
                          ? 'bg-accent-purple text-white font-bold shadow-sm'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      React
                    </button>
                  </div>
                </div>

                {/* Window Body */}
                <div className="p-5 space-y-4">
                  {activeTab === 'design' ? (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Figma Inspection Card */}
                      <div className="bg-background-subtle rounded-xl p-4 border border-border/80">
                        <div className="flex items-center justify-between text-xs text-text-muted pb-2 border-b border-border/50">
                          <span className="flex items-center gap-1.5 font-medium text-text-primary">
                            <Layers className="w-3.5 h-3.5 text-accent" />
                            Card / GenLink_FamilyCircle
                          </span>
                          <span className="font-mono text-[10px] text-accent">Auto-layout: Hug</span>
                        </div>

                        {/* Visual Mock inside the design frame */}
                        <div className="mt-3 p-3.5 rounded-lg bg-surface border border-slate-700/60 shadow-inner">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow-md">
                              CS
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs font-semibold text-text-primary">
                                  Chhaeng Sokuntheara
                                </h4>
                                <span className="text-[10px] font-mono text-emerald-400">Ready</span>
                              </div>
                              <p className="text-[11px] text-text-muted truncate">
                                UI/UX • Product Design Intern
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[11px]">
                            <span className="text-text-muted font-mono">Contrast: 14.8:1 (AAA)</span>
                            <span className="text-accent font-medium">Touch target: 48px</span>
                          </div>
                        </div>
                      </div>

                      {/* Design Tokens Inspector */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="bg-surface-elevated/70 p-2.5 rounded-lg border border-border">
                          <span className="text-text-muted block text-[10px]">COLOR TOKEN</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-3 h-3 rounded-full bg-[#38BDF8] border border-white/20"></span>
                            <span className="text-text-primary font-semibold">#38BDF8 (Sky)</span>
                          </div>
                        </div>
                        <div className="bg-surface-elevated/70 p-2.5 rounded-lg border border-border">
                          <span className="text-text-muted block text-[10px]">TYPOGRAPHY</span>
                          <div className="text-text-primary font-semibold mt-1">
                            Inter • 600 SemiBold
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 font-mono text-xs animate-in fade-in duration-200">
                      <div className="bg-background-darker rounded-xl p-4 border border-border/80 text-slate-300 overflow-x-auto leading-relaxed">
                        <p className="text-slate-500">// Production React + Tailwind Code</p>
                        <p className="mt-1">
                          <span className="text-purple-400">export default function</span>{' '}
                          <span className="text-blue-400">FamilyCard</span>({'{'} user, onCall {'}'}) {'{'}
                        </p>
                        <p className="pl-4">
                          <span className="text-purple-400">return</span> (
                        </p>
                        <p className="pl-6 text-emerald-300">
                          {'<div className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-border hover:border-accent">'}
                        </p>
                        <p className="pl-8 text-sky-300">
                          {'<Avatar src={user.img} fallback={user.initial} />'}
                        </p>
                        <p className="pl-8 text-sky-300">
                          {'<Button variant="primary" onClick={onCall}>'}
                        </p>
                        <p className="pl-10 text-slate-200">Call Now</p>
                        <p className="pl-8 text-sky-300">{'</Button>'}</p>
                        <p className="pl-6 text-emerald-300">{'</div>'}</p>
                        <p className="pl-4">);</p>
                        <p>{'}'}</p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-text-muted px-1">
                        <span className="flex items-center gap-1.5 text-accent-emerald">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          100% Component & Token Parity
                        </span>
                        <span className="font-mono">Zero Handoff Loss</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom micro stats */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                    <span className="flex items-center gap-1 text-text-secondary">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      Figma Components ➔ React JSX
                    </span>
                    <span className="font-mono text-accent">1440px / Responsive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
