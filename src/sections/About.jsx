import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { UserCheck, Laptop, Cpu, Award, MapPin, GraduationCap, Compass, Briefcase } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: UserCheck,
      title: "User-Centered Empathy",
      description: "Designing for human beings first—prioritizing clarity, legible typography, accessible contrast, and low cognitive friction.",
    },
    {
      icon: Cpu,
      title: "Technical Feasibility",
      description: "Understanding HTML/CSS semantics, flexbox/grid mechanics, and React state prevents creating unbuildable mockups.",
    },
    {
      icon: Laptop,
      title: "Atomic Design Systems",
      description: "Structuring Figma styles, components, and variants so they map 1:1 with modular front-end component libraries.",
    },
    {
      icon: Award,
      title: "Growth & Ownership",
      description: "Eager to learn from experienced product designers and engineers while delivering impactful work as an intern.",
    },
  ];

  const quickFacts = [
    { label: 'Location', value: 'Phnom Penh, Cambodia', icon: MapPin },
    { label: 'Education', value: 'Bachelor of Computer Science', icon: GraduationCap },
    { label: 'Focus', value: 'UI/UX & Product Design', icon: Compass },
    { label: 'Status', value: 'Open to Internship', icon: Briefcase, highlight: true },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background-subtle/50 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Section 04 • About Me"
          title="Bridging Design Vision with Engineering Reality"
          subtitle="Computer Science student based in Phnom Penh with an obsession for clean interfaces, responsive web standards, and intuitive interactions."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed">
            <p className="text-text-primary font-medium text-lg sm:text-xl">
              I’m a Computer Science student specializing in UI/UX and Product Design at ACLEDA Institute of Business in Phnom Penh.
            </p>

            <p>
              I enjoy turning complex ideas into clear, usable interfaces and thinking through the full experience—from user flows and wireframes to high-fidelity prototypes and development handoff.
            </p>

            <p>
              My technical background helps me understand responsive behavior, reusable components, implementation constraints, and collaboration with developers. Rather than treating design as static art, I treat it as a functional system intended for real devices and diverse users.
            </p>

            <p className="p-4 rounded-xl bg-surface border-l-4 border-accent text-text-primary text-sm sm:text-base">
              I am currently looking for an internship where I can learn from an experienced product team, contribute to real digital products, and push the boundary between product design and front-end engineering.
            </p>

            {/* Quick Profile Facts */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickFacts.map((fact, idx) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface border border-border flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-text-muted mb-1">
                      <Icon className="w-3.5 h-3.5 text-accent" />
                      <span>{fact.label}</span>
                    </div>
                    <span className={`text-xs font-semibold ${fact.highlight ? 'text-accent-emerald' : 'text-text-primary'}`}>
                      {fact.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-slate-700 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent w-fit mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-text-primary mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
