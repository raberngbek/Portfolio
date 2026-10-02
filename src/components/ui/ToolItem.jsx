import React from 'react';

export default function ToolItem({ name, role, icon: Icon, highlight }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
        highlight
          ? 'bg-surface-elevated border-accent/40 shadow-sm'
          : 'bg-surface border-border hover:border-slate-700'
      }`}
    >
      {Icon && (
        <div className={`p-2 rounded-lg ${highlight ? 'bg-accent/15 text-accent' : 'bg-background-subtle text-text-secondary'}`}>
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <div className="text-sm font-semibold text-text-primary">{name}</div>
        {role && <div className="text-xs text-text-muted">{role}</div>}
      </div>
    </div>
  );
}
