import React from 'react';

export default function About() {
  const facts = [
    { label: 'Based in', value: 'Phnom Penh, Cambodia' },
    { label: 'Education', value: 'Bachelor of Computer Science' },
    { label: 'Focus', value: 'UI/UX & Product Design' },
    { label: 'Status', value: 'Open to Internship Opportunities', highlight: true },
  ];

  return (
    <section id="about" className="py-24 md:py-36 border-b border-border bg-background">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
              ABOUT ME
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
              Designing with both <br />
              users and developers <br />
              in mind.
            </h2>
          </div>

          {/* Right Column: Narrative & Small Facts */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              <p>
                I'm a Computer Science student focused on UI/UX and Product Design. I enjoy turning complex ideas into clear, usable experiences and thinking through how those ideas become real products.
              </p>
              <p>
                My front-end background helps me work across design systems, responsive behavior, interaction states, and developer handoff.
              </p>
            </div>

            {/* Small Facts Grid */}
            <div className="pt-6 border-t border-border grid grid-cols-2 gap-y-6 gap-x-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-1">
                    {fact.label}
                  </span>
                  <span className={`text-base font-semibold ${fact.highlight ? 'text-accent' : 'text-text-primary'}`}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
