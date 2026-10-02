import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Featured Projects"
          title="Selected Work"
          subtitle="Real-world product design case studies with user research, accessible design systems, interactive prototypes, and front-end engineering considerations."
          align="left"
        />

        {/* Project Cards List */}
        <div className="space-y-10 md:space-y-12">
          {projects.map((project, index) => (
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
