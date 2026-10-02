import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Approach() {
  const concepts = [
    {
      number: '01',
      title: 'USER FIRST',
      tagline: 'Human-Centered Thinking',
      explanation: 'Understand the core user problem, mental models, and pain points thoroughly before drafting a single screen.',
    },
    {
      number: '02',
      title: 'SYSTEMS THAT SCALE',
      tagline: 'Atomic Components & Tokens',
      explanation: 'Build reusable components, consistent spacing scales, and clear design systems that prevent fragmentation.',
    },
    {
      number: '03',
      title: 'DESIGN × ENGINEERING',
      tagline: 'Production-Ready Handoff',
      explanation: 'Design interfaces that realistically translate from Figma auto-layout directly into responsive React & Tailwind code.',
    },
  ];

  const processSteps = [
    { step: '01', name: 'Discover', desc: 'User goals & contexts' },
    { step: '02', name: 'Define', desc: 'Core problems & criteria' },
    { step: '03', name: 'Explore', desc: 'IA & structural sketches' },
    { step: '04', name: 'Design', desc: 'Polished UI & design tokens' },
    { step: '05', name: 'Prototype', desc: 'Interactions & tactile flows' },
    { step: '06', name: 'Test', desc: 'Usability & refinement' },
    { step: '07', name: 'Handoff', desc: 'Token specs & component props' },
  ];

  return (
    <section id="approach" className="py-24 md:py-36 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        
        {/* Top 3 Core Approach Pillars */}
        <div>
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              APPROACH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {concepts.map((concept) => (
              <div key={concept.number} className="space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted block">
                  {concept.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                  {concept.title}
                </h3>
                <div className="text-xs font-mono text-accent uppercase tracking-wider">
                  {concept.tagline}
                </div>
                <p className="text-base text-text-secondary leading-relaxed pt-2">
                  {concept.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Clean Horizontal Process Sequence */}
        <div className="pt-16 border-t border-border">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              DESIGN PROCESS LIFECYCLE
            </span>
            <span className="text-xs font-mono text-text-muted hidden sm:inline">
              Iterative & Developer-Aligned
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-accent">
                    {step.step}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <span className="hidden lg:inline text-text-muted/40 font-mono text-xs">➔</span>
                  )}
                </div>
                <h4 className="text-base font-bold text-text-primary">
                  {step.name}
                </h4>
                <p className="text-xs text-text-secondary leading-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
