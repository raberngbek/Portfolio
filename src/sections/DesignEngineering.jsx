import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Layers, Palette, Terminal } from 'lucide-react';

export default function DesignEngineering() {
  const sequence = [
    { step: '01', name: 'Figma', desc: 'Auto-layout & nested component variants' },
    { step: '02', name: 'Design System', desc: 'Atomic design tokens & spacing scale' },
    { step: '03', name: 'React', desc: 'Clean props contract & composable JSX' },
    { step: '04', name: 'Responsive Product', desc: 'Fluid layout from 1440px to 390px' },
  ];

  return (
    <section id="engineering" className="py-24 md:py-36 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
              DESIGN × ENGINEERING
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.05]">
              I don't stop at the <br />
              Figma file.
            </h2>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              Because I write code, I design with real-world implementation constraints, token architectures, and responsive logic in mind from day one.
            </p>

            {/* Sequence Flow */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted block mb-3">
                THE FIGMA-TO-CODE PIPELINE
              </span>
              <div className="grid grid-cols-2 gap-4">
                {sequence.map((item) => (
                  <div key={item.step} className="p-4 rounded-xl bg-surface border border-border">
                    <span className="font-mono text-xs font-bold text-accent block mb-1">
                      {item.step} / {item.name}
                    </span>
                    <span className="text-xs text-text-secondary block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: One Polished Visual */}
          <div className="lg:col-span-6">
            <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-xs font-mono font-semibold text-text-primary">
                    Button.figma ➔ Button.jsx
                  </span>
                </div>
                <span className="text-[11px] font-mono text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded-full">
                  100% Token Parity
                </span>
              </div>

              {/* Code & Token Comparison Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                {/* Figma Specs */}
                <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border space-y-2">
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block font-bold">
                    Figma Properties
                  </span>
                  <div className="text-text-secondary space-y-1">
                    <div className="flex justify-between">
                      <span>variant:</span>
                      <span className="text-text-primary font-semibold">'primary'</span>
                    </div>
                    <div className="flex justify-between">
                      <span>padding:</span>
                      <span className="text-text-primary font-semibold">14px 24px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>radius:</span>
                      <span className="text-text-primary font-semibold">9999px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>contrast:</span>
                      <span className="text-accent-emerald font-semibold">14.8:1 (AAA)</span>
                    </div>
                  </div>
                </div>

                {/* React / Tailwind Specs */}
                <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border space-y-2">
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block font-bold">
                    React / Tailwind Props
                  </span>
                  <div className="text-text-secondary space-y-1">
                    <div className="flex justify-between">
                      <span>px-6 py-3.5</span>
                      <span className="text-text-muted">scale</span>
                    </div>
                    <div className="flex justify-between">
                      <span>bg-accent</span>
                      <span className="text-text-muted">#0284C7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>rounded-full</span>
                      <span className="text-text-muted">pill</span>
                    </div>
                    <div className="flex justify-between">
                      <span>focus-visible</span>
                      <span className="text-accent font-semibold">a11y ring</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-text-muted flex items-center justify-between border-t border-border">
                <span>Zero design-to-development drift</span>
                <span className="font-mono text-text-primary">Figma Auto-Layout ➔ CSS Flexbox</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
