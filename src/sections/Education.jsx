import React from 'react';

export default function Education() {
  const coursework = [
    'UI/UX',
    'Human-Computer Interaction',
    'React',
    'Web Development',
    'Database Fundamentals',
  ];

  return (
    <section id="education" className="py-24 md:py-36 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-2">
              BACKGROUND
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              EDUCATION
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="pb-6 border-b border-border">
              <span className="text-xs font-mono text-text-muted block mb-1">
                2023 – PRESENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                Bachelor of Computer Science (CSE)
              </h3>
              <p className="text-lg text-text-secondary mt-1 font-medium">
                ACLEDA Institute of Business • Phnom Penh
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
                Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-surface border border-border text-text-secondary"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
