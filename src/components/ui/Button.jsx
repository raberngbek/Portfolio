import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  rel,
  download,
  icon = false,
  className = '',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";
  
  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-accent text-background-darker font-semibold hover:bg-accent-hover shadow-glow hover:shadow-glow-lg",
    secondary: "bg-surface-elevated text-text-primary border border-border hover:border-text-secondary hover:bg-surface-hover",
    outline: "bg-transparent border border-border text-text-primary hover:border-accent hover:text-accent",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
        onClick={onClick}
        {...props}
      >
        {children}
        {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
}
