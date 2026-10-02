import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function SkillCard({ category }) {
  const { title, description, skills = [] } = category;

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-card">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-text-primary tracking-tight">
            {title}
          </h3>
          <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
            {skills.length} skills
          </span>
        </div>

        {description && (
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
            {description}
          </p>
        )}

        <div className="space-y-2.5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-2.5 rounded-xl border transition-colors flex items-center justify-between ${
                skill.highlight
                  ? 'bg-accent/5 border-accent/30 text-text-primary'
                  : 'bg-background-subtle/70 border-border/70 text-text-secondary'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 ${
                    skill.highlight ? 'text-accent' : 'text-text-muted'
                  }`}
                />
                <span className="text-xs sm:text-sm font-medium truncate">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-accent bg-accent/10 px-1.5 py-0.2 rounded">
                    <Sparkles className="w-2.5 h-2.5" />
                    Core
                  </span>
                )}
              </div>

              {skill.level && (
                <span className="text-[11px] font-mono text-text-muted flex-shrink-0 ml-2">
                  {skill.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
