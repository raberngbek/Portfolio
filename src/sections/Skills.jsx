import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import SkillCard from '../components/ui/SkillCard';
import { designSkillCategories, technicalSkills } from '../data/skills';
import { Code2, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 07 — DESIGN SKILLS (Product-Design-First) */}
        <div>
          <SectionTitle
            badge="Section 07 • Design Skills"
            title="Design & Product Capabilities"
            subtitle="Core strengths as an aspiring UI/UX and Product Design intern: from user flow mapping and wireframes to design systems and high-fidelity prototypes."
            align="left"
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSkillCategories.map((category) => (
              <SkillCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* SECTION 08 — TECHNICAL SKILLS (Implementation Literacy) */}
        <div className="pt-6 border-t border-border/60">
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-surface-elevated text-accent-purple border border-border">
              <Terminal className="w-3.5 h-3.5" />
              Section 08 • Technical Skills
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              Front-End & Engineering Literacy
            </h3>
            <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              My technical background in Computer Science enables me to design with real constraints in mind, speak the same language as developers, and ensure seamless handoff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {technicalSkills.map((tech) => (
              <div
                key={tech.name}
                className={`p-3.5 rounded-xl border transition-all ${
                  tech.highlight
                    ? 'bg-surface-elevated/80 border-accent/40 shadow-sm'
                    : 'bg-surface/70 border-border/70 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    {tech.category}
                  </span>
                  {tech.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-text-primary">
                  {tech.name}
                </h4>
                <p className="text-[11px] text-text-secondary mt-1 line-clamp-2 leading-snug">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
