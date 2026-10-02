import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import { projects } from '../../data/projects';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Layers,
  Smartphone,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Palette,
  FileCode,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-text-primary">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-32 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-text-secondary mb-8">
              The project case study you are looking for does not exist or has been moved.
            </p>
            <Button href="/#work" variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Selected Work
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { caseStudy } = project;
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent/20 selection:text-accent">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Top Breadcrumb & Back Link */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-medium text-text-muted bg-surface-elevated px-3 py-1 rounded-full border border-border">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Metadata Bar */}
            <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono uppercase text-text-muted block mb-1">
                  My Role
                </span>
                <span className="font-semibold text-text-primary block">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-text-muted block mb-1">
                  Timeline
                </span>
                <span className="font-semibold text-text-primary block">
                  {project.timeline}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-text-muted block mb-1">
                  Platform
                </span>
                <span className="font-semibold text-text-primary block">
                  {project.platform}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-text-muted block mb-1">
                  Tools
                </span>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section: Overview & Goal */}
          {caseStudy && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                01. Project Overview & Goal
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed text-base sm:text-lg">
                <p>{caseStudy.overview}</p>
                {caseStudy.productGoal && (
                  <div className="p-5 rounded-2xl bg-surface border-l-4 border-accent">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-bold mb-1">
                      Product Goal
                    </h3>
                    <p className="text-text-primary font-medium">
                      {caseStudy.productGoal}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Problems & Pain Points */}
          {caseStudy?.problems && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                02. User Problems & Friction Points
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.problems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-surface border border-border"
                  >
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{prob.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: User Flows */}
          {caseStudy?.userFlows && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                03. User Flows & Task Pathways
              </h2>
              <div className="space-y-3">
                {caseStudy.userFlows.map((flow, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-elevated/70 border border-border"
                  >
                    <h4 className="text-sm font-bold text-accent mb-1 font-mono">
                      {flow.stage}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      {flow.action}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Wireframe & Structural Layout */}
          {caseStudy?.wireframeNotes && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                04. Wireframing & Structural Exploration
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {caseStudy.wireframeNotes}
              </p>
            </section>
          )}

          {/* Section: Design Decisions */}
          {caseStudy?.designDecisions && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                05. Key Design Decisions & Rationale
              </h2>
              <div className="space-y-4">
                {caseStudy.designDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-colors"
                  >
                    <h4 className="text-base font-bold text-text-primary mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {item.decision}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Design System */}
          {caseStudy?.designSystem && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                06. Design System & Tokens
              </h2>

              <div className="space-y-6">
                {/* Typography scale */}
                <div className="p-5 rounded-xl bg-surface border border-border">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                    Typography System
                  </span>
                  <p className="text-sm text-text-secondary">
                    {caseStudy.designSystem.typography}
                  </p>
                </div>

                {/* Color Swatches */}
                {caseStudy.designSystem.colors && (
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
                      Token Color Palette
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {caseStudy.designSystem.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-surface border border-border flex items-center gap-3"
                        >
                          <div
                            className="w-10 h-10 rounded-lg border border-border flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-text-primary block truncate">
                              {color.name}
                            </span>
                            <span className="text-[11px] font-mono text-accent block">
                              {color.hex}
                            </span>
                            <span className="text-[10px] text-text-muted block truncate">
                              {color.role}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Atomic components */}
                {caseStudy.designSystem.components && (
                  <div className="p-5 rounded-xl bg-surface border border-border">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
                      Atomic Components Created
                    </span>
                    <ul className="space-y-2">
                      {caseStudy.designSystem.components.map((comp, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Dev Handoff */}
          {caseStudy?.devHandoff && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                07. Front-End Alignment & Development Handoff
              </h2>
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 text-accent font-semibold mb-3">
                  <FileCode className="w-5 h-5" />
                  <span>Bridging Figma with React & Tailwind</span>
                </div>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {caseStudy.devHandoff}
                </p>
              </div>
            </section>
          )}

          {/* Section: Reflection */}
          {caseStudy?.reflection && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-border">
                08. Reflection & Takeaways
              </h2>
              <div className="space-y-3">
                {caseStudy.reflection.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-elevated/50 border border-border text-text-secondary text-sm leading-relaxed flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{ref}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Next Project Banner */}
          <div className="pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Work</span>
            </Link>

            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent transition-all text-right"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-text-muted block">
                    Next Project
                  </span>
                  <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                    {nextProject.shortTitle}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
