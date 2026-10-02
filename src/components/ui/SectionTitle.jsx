import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignStyles[align] || alignStyles.left} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-surface-elevated text-accent border border-border">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
