import React from 'react';

export default function ProcessStep({
  number,
  title,
  subtitle,
  deliverables = [],
  icon: Icon,
  isLast = false,
}) {
  return (
    <div className="relative group flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-all duration-300 hover:shadow-card">
      {/* Step Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
            {number}
          </span>
          {Icon && (
            <div className="p-2 rounded-lg bg-surface-elevated text-text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
              <Icon className="w-4 h-4" />
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Deliverables / Key Outputs */}
      {deliverables.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border/60">
          <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-2">
            Deliverables
          </span>
          <div className="flex flex-wrap gap-1.5">
            {deliverables.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-background-subtle border border-border text-text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
