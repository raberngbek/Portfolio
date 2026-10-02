import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Download, Mail } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'chhtheara0044@gmail.com';
  const github = 'https://github.com/raberngbek';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-8">
          
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
            GET IN TOUCH
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-text-primary leading-[1.02]">
            Let's build something <br />
            useful.
          </h2>

          <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed font-normal">
            I'm currently looking for UI/UX and Product Design internship opportunities where I can learn from an experienced team and contribute to real products.
          </p>

          <div className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
            {/* Direct Email */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                Direct Email
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-bold text-text-primary hover:text-accent transition-colors editorial-link"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-surface border border-transparent hover:border-border text-text-muted hover:text-text-primary transition-all"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Profile & Code */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                Online Profiles
              </span>
              <div className="flex flex-col space-y-1 text-base font-semibold">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-text-primary hover:text-accent transition-colors"
                >
                  <span className="editorial-link">GitHub • raberngbek</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                </a>
                <span className="text-sm font-medium text-text-muted">
                  Phnom Penh, Cambodia
                </span>
              </div>
            </div>
          </div>

          {/* Resume Download Action */}
          <div className="pt-4">
            <a
              href="/resume/Chhaeng_Sokuntheara_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-text-primary text-text-primary hover:bg-text-primary hover:text-background transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
