import React from 'react';
import { ArrowUp, Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-darker border-t border-border/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/50">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-text-primary">
                SOKUNTHEARA<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              UI/UX and Product Designer bridging human-centered design with front-end engineering. Currently a Computer Science student at ACLEDA Institute of Business, Phnom Penh.
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted pt-2">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Phnom Penh, Cambodia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                Open for Internships
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#work" className="hover:text-accent transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-accent transition-colors">
                  Design Process
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:chhtheara0044@gmail.com"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                <span>chhtheara0044@gmail.com</span>
              </a>
              <a
                href="https://github.com/raberngbek"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
              >
                <Github className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                <span>github.com/raberngbek</span>
              </a>
              <a
                href="/resume/Chhaeng_Sokuntheara_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium pt-1"
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} CHHAENG SOKUNTHEARA. Built with React & Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
