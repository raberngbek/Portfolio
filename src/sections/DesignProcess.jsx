import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProcessStep from '../components/ui/ProcessStep';
import { Search, Target, Compass, Palette, Smartphone, RefreshCw, Send } from 'lucide-react';

export default function DesignProcess() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      subtitle: 'Understand user goals, daily contexts, and underlying friction through observation and active listening.',
      icon: Search,
      deliverables: ['Users', 'Goals', 'Problems', 'Context'],
    },
    {
      number: '02',
      title: 'Define',
      subtitle: 'Synthesize findings to isolate core user problems, establish boundaries, and outline clear feature requirements.',
      icon: Target,
      deliverables: ['Pain Points', 'Requirements', 'Core User Problems'],
    },
    {
      number: '03',
      title: 'Explore',
      subtitle: 'Map information architecture, sketch layout concepts, and draft rapid wireframes to validate structure.',
      icon: Compass,
      deliverables: ['Ideas', 'Information Architecture', 'Early Solutions', 'Wireframes'],
    },
    {
      number: '04',
      title: 'Design',
      subtitle: 'Craft polished interfaces with disciplined typographic scale, accessible contrast ratios, and atomic components.',
      icon: Palette,
      deliverables: ['Polished Interface', 'Visual Hierarchy', 'Reusable Components'],
    },
    {
      number: '05',
      title: 'Prototype',
      subtitle: 'Connect realistic interactions and user flows in Figma to test the tactile feel and navigation choreography.',
      icon: Smartphone,
      deliverables: ['Key Interactions', 'Main User Flows', 'Variants & States'],
    },
    {
      number: '06',
      title: 'Test & Iterate',
      subtitle: 'Gather feedback through usability walk-throughs, observe points of hesitation, and refine the experience.',
      icon: RefreshCw,
      deliverables: ['Feedback', 'Usability Observations', 'Design Refinement'],
    },
    {
      number: '07',
      title: 'Handoff',
      subtitle: 'Prepare design token specs, responsive behavior notes, and clean component properties for smooth implementation.',
      icon: Send,
      deliverables: ['Components', 'Design Specs', 'Developer-Ready Assets'],
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-background-subtle/50 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Section 06 • Methodology"
          title="Design Process"
          subtitle="How I approach product design problems: an honest, structured, and iterative lifecycle suited for a growing product designer."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              subtitle={step.subtitle}
              icon={step.icon}
              deliverables={step.deliverables}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
