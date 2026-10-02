export const designSkillCategories = [
  {
    id: 'product-ux',
    title: 'Product & UX Design',
    description: 'User-centered design methods, layout structures, and systematic design foundations.',
    skills: [
      { name: 'User Interface Design', level: 'Core', highlight: true },
      { name: 'Wireframing', level: 'Core' },
      { name: 'User Flow Mapping', level: 'Core' },
      { name: 'Responsive Design', level: 'Core', highlight: true },
      { name: 'Mobile-First Design', level: 'Proficient' },
      { name: 'Usability Testing', level: 'Proficient' },
      { name: 'Competitive Benchmarking', level: 'Proficient' },
      { name: 'Design Systems', level: 'Core', highlight: true },
    ]
  },
  {
    id: 'prototyping',
    title: 'Prototyping & Interaction',
    description: 'Transforming static wireframes into tactile, interactive prototypes to validate user mental models.',
    skills: [
      { name: 'Low-Fidelity Prototyping', level: 'Rapid Validation' },
      { name: 'High-Fidelity Prototyping', level: 'Production-like Flows', highlight: true },
      { name: 'Interactive Prototypes', level: 'Smart Animate & States' },
      { name: 'Micro-interactions', level: 'Subtle Feedback Loops' },
    ]
  },
  {
    id: 'tools',
    title: 'Design Tools',
    description: 'Industry-standard design suites for drafting vectors, component variants, and team collaboration.',
    skills: [
      { name: 'Figma', level: 'Primary Tool • Components, Variables, Auto-Layout', highlight: true },
      { name: 'FigJam', level: 'Brainstorming & User Flow Mapping' },
      { name: 'Framer', level: 'Interactive Web Exploration' },
      { name: 'Adobe XD', level: 'Vector UI Drafting' },
      { name: 'Adobe Illustrator', level: 'Vector Iconography & Assets' },
    ]
  }
];

export const technicalSkills = [
  { name: 'HTML5', category: 'Markup', desc: 'Semantic, accessible document structure' },
  { name: 'CSS3', category: 'Styling', desc: 'Flexbox, Grid, keyframe animations, media queries' },
  { name: 'Tailwind CSS', category: 'Token System', desc: 'Utility-first tokens matching Figma styles', highlight: true },
  { name: 'JavaScript', category: 'Scripting', desc: 'ES6+ modern logic and asynchronous APIs' },
  { name: 'React.js', category: 'Frontend', desc: 'Modular component hierarchy and state hooks', highlight: true },
  { name: 'Three.js / WebGL Basics', category: '3D Graphics', desc: 'Canvas rendering and spatial web fundamentals' },
  { name: 'Git', category: 'Version Control', desc: 'Branching, staging, and commit discipline' },
  { name: 'GitHub', category: 'Collaboration', desc: 'Pull requests, issues, and code reviews' },
  { name: 'Agile / Scrum', category: 'Methodology', desc: 'Sprint iterations and continuous feedback' },
  { name: 'Developer Collaboration', category: 'Handoff', desc: 'Zero-friction design token specs and prop parity', highlight: true },
];
