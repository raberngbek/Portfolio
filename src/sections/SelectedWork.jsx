import React, { useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Product Design', 'UI/UX', 'Design System', 'Mobile', 'Web'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => {
        const textToSearch = `${p.category} ${p.tags.join(' ')}`.toLowerCase();
        return textToSearch.includes(activeCategory.toLowerCase());
      });

  return (
    <section id="work" className="py-24 md:py-36 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-2">
              PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              RECENT WORK
            </h2>
          </div>

          {/* Editorial Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-text-primary text-background border-text-primary font-bold'
                    : 'bg-transparent text-text-secondary border-border hover:border-text-primary hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
