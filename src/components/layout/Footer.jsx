import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-text-primary font-bold">CHHAENG SOKUNTHEARA</span>
            <span>•</span>
            <span>Phnom Penh, Cambodia</span>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Designed in Figma • Built with React</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-text-primary transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
