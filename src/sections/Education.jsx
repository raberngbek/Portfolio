import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { GraduationCap, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  const coursework = [
    'UI/UX Design Principles',
    'Layout & Prototyping',
    'Human-Computer Interaction',
    'Web Development',
    'React',
    'Tailwind CSS',
    'HTML/CSS',
    'Database Fundamentals',
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-background-subtle/50 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Academic Background"
          title="Education & Coursework"
          subtitle="Combining computer science rigor with design principles to craft technically grounded user experiences."
          align="left"
        />

        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 md:p-10 hover:border-slate-700 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-border/60">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full mb-2">
                  <Calendar className="w-3 h-3" />
                  2023 – Present
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                  Bachelor of Computer Science (CSE)
                </h3>
                <p className="text-base sm:text-lg font-medium text-text-secondary mt-1">
                  ACLEDA Institute of Business
                </p>
                <p className="text-sm text-text-muted mt-2 max-w-xl">
                  Focusing on software development, human-computer interaction, and frontend web technologies.
                </p>
              </div>
            </div>

            <div className="bg-surface-elevated/70 border border-border px-4 py-3 rounded-xl self-start">
              <span className="text-xs font-mono text-text-muted block">STATUS</span>
              <span className="text-sm font-semibold text-accent-emerald flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                Active Student • Open for Internship
              </span>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                Relevant Coursework
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-background-subtle border border-border/80 text-text-secondary hover:text-text-primary hover:border-slate-700 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
