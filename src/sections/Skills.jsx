import React from 'react';

export default function Skills() {
  const groups = [
    {
      category: 'DESIGN',
      skills: [
        'UI Design',
        'Product Design',
        'Wireframing',
        'User Flows',
        'Prototyping',
        'Design Systems',
        'Responsive Design',
        'Usability Testing',
      ],
    },
    {
      category: 'TOOLS',
      skills: [
        'Figma',
        'FigJam',
        'Framer',
        'Adobe XD',
        'Illustrator',
      ],
    },
    {
      category: 'FRONT-END',
      skills: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'Git',
        'GitHub',
        'Developer Collaboration',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-36 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-2">
            CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
            SKILLS & TOOLS
          </h2>
        </div>

        {/* Typography-Led Grouped Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {groups.map((group) => (
            <div key={group.category} className="space-y-6">
              <div className="pb-3 border-b-2 border-text-primary">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-lg sm:text-xl font-medium text-text-primary hover:text-accent transition-colors flex items-center justify-between group"
                  >
                    <span>{skill}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity text-sm">
                      •
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
