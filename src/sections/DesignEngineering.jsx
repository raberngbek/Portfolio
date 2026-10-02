import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { ArrowRight, Layers, Palette, Terminal, MonitorSmartphone, CheckCircle, Code, Workflow, ShieldCheck } from 'lucide-react';

export default function DesignEngineering() {
  const steps = [
    {
      step: '01',
      title: 'Figma Component',
      desc: 'Auto-layout, atomic variants, and strict constraints designed for real-world code translation.',
      icon: Layers,
      tag: 'Auto-layout & Variants',
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
    },
    {
      step: '02',
      title: 'Design Tokens',
      desc: 'Extracted semantic hex values, rem spacing scales, font hierarchies, and elevation tokens.',
      icon: Palette,
      tag: 'Tokens & Spacing Scale',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
    },
    {
      step: '03',
      title: 'React & Tailwind',
      desc: 'Clean prop interfaces, composable JSX components, and utility classes with zero design drift.',
      icon: Terminal,
      tag: 'Props & Semantic JSX',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
    },
    {
      step: '04',
      title: 'Responsive Result',
      desc: 'Thoroughly tested from 1440px desktop to 390px mobile screens without horizontal overflow.',
      icon: MonitorSmartphone,
      tag: 'Desktop ➔ Mobile',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  ];

  const pillars = [
    {
      title: 'Design Tokens',
      desc: 'Colors, spacing, and typography scales share identical nomenclature across Figma styles and Tailwind configs.',
      icon: Palette,
    },
    {
      title: 'Responsive Layout',
      desc: 'Auto-layout rules in Figma mirror CSS Flexbox and Grid, making breakpoint adaptations seamless.',
      icon: MonitorSmartphone,
    },
    {
      title: 'Component States',
      desc: 'Every interactive element accounts for default, hover, active, focus-visible, disabled, and loading states.',
      icon: Workflow,
    },
    {
      title: 'Developer Handoff',
      desc: 'No guesswork for engineers: prop names, padding values, and ARIA accessibility roles are explicitly documented.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="engineering" className="py-20 md:py-28 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Design × Engineering"
          title="I don’t stop at the Figma file."
          subtitle="Because I write code, I design with real-world implementation constraints, token architectures, and responsive logic in mind from day one."
          align="left"
        />

        {/* Visual Pipeline Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative p-6 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-text-muted">
                        STEP {item.step}
                      </span>
                      <div className={`p-2 rounded-xl ${item.bgColor} ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/50">
                    <span className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded-full border ${item.borderColor} ${item.bgColor} ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-elevated/60 border border-border/80 hover:border-accent/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
