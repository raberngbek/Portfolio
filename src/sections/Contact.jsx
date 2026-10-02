import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Mail, Github, MapPin, Copy, Check, ArrowUpRight, Download, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'chhtheara0044@gmail.com';
  const github = 'https://github.com/raberngbek';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-3.5 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-surface-elevated text-accent border border-border">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary text-gradient">
            Looking for a Product Design intern?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            I’m currently looking for opportunities where I can learn from an experienced product team, contribute to real digital products and continue improving my product design skills.
          </p>

          {/* Quick Contact Cards Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-text-muted block">Email</span>
                <span className="text-sm font-semibold text-text-primary block mt-1 break-all">
                  {email}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-accent text-background-darker text-xs font-semibold hover:bg-accent-hover transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-elevated border border-border text-text-secondary hover:text-text-primary hover:border-slate-600 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center mb-4">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-text-muted block">GitHub Profile</span>
                <span className="text-sm font-semibold text-text-primary block mt-1">
                  raberngbek
                </span>
              </div>

              <div className="mt-6">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-elevated border border-border text-text-primary text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  <span>View Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-text-muted block">Location</span>
                <span className="text-sm font-semibold text-text-primary block mt-1">
                  Phnom Penh, Cambodia
                </span>
              </div>

              <div className="mt-6 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="text-text-muted">Status:</span>
                <span className="font-semibold text-accent-emerald flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                  Ready to Start
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Action: Resume Download */}
          <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/resume/Chhaeng_Sokuntheara_Resume.pdf"
              variant="outline"
              size="md"
              target="_blank"
              download
            >
              <Download className="w-4 h-4 mr-2" />
              Download My Resume (PDF)
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
