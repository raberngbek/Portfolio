import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { projects } from '../../data/projects';
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  FileCode,
  CheckCircle2,
} from 'lucide-react';

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-text-primary">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-36 px-6">
          <div className="text-center max-w-md space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight">Project Not Found</h1>
            <p className="text-text-secondary">
              The project case study you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full border border-text-primary hover:bg-text-primary hover:text-background transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Work</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { caseStudy } = project;
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent/15 selection:text-text-primary">
      <Navbar />

      <main className="flex-grow pt-36 pb-28">
        
        {/* Back Link */}
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mb-12">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span className="editorial-link">Back to All Work</span>
          </Link>
        </div>

        {/* Project Header */}
        <section className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mb-20">
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                / {project.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.06]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-text-secondary font-normal leading-relaxed">
              {project.description}
            </p>

            {/* Metadata Bar */}
            <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-1">
                  My Role
                </span>
                <span className="font-semibold text-text-primary block">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Timeline
                </span>
                <span className="font-semibold text-text-primary block">
                  {project.timeline}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Platform
                </span>
                <span className="font-semibold text-text-primary block">
                  {project.platform}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Tools
                </span>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-border text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 space-y-20">

          {/* Section: Overview & Goal */}
          {caseStudy && (
            <section className="space-y-6 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                01 / OVERVIEW & GOAL
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-8 space-y-4 text-lg text-text-secondary leading-relaxed font-normal">
                  <p>{caseStudy.overview}</p>
                </div>
                {caseStudy.productGoal && (
                  <div className="lg:col-span-4 p-6 rounded-xl bg-surface border border-border space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold block">
                      Product Goal
                    </span>
                    <p className="text-base text-text-primary font-medium leading-relaxed">
                      {caseStudy.productGoal}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Problems & Pain Points */}
          {caseStudy?.problems && (
            <section className="space-y-6 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                02 / USER FRICTION POINTS
              </span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                Problems Addressed
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.problems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-surface border border-border space-y-2.5"
                  >
                    <span className="font-mono text-xs font-bold text-accent block">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-text-primary">
                      {prob.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: User Flows */}
          {caseStudy?.userFlows && (
            <section className="space-y-6 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                03 / USER FLOWS
              </span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                Key Task Pathways
              </h2>
              <div className="space-y-4">
                {caseStudy.userFlows.map((flow, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <span className="text-sm font-bold text-text-primary font-mono sm:w-1/3">
                      {flow.stage}
                    </span>
                    <span className="text-sm text-text-secondary sm:w-2/3">
                      {flow.action}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Design Decisions */}
          {caseStudy?.designDecisions && (
            <section className="space-y-6 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                04 / DESIGN DECISIONS
              </span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                Decisions & Rationale
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.designDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-surface border border-border space-y-2"
                  >
                    <h3 className="text-base font-bold text-text-primary">
                      {item.decision}
                    </h3>
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
            <section className="space-y-6 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                05 / DESIGN SYSTEM
              </span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                Tokens & Typography
              </h2>

              <div className="p-6 rounded-xl bg-surface border border-border space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-1">
                    Typography Scale
                  </span>
                  <p className="text-base text-text-secondary">
                    {caseStudy.designSystem.typography}
                  </p>
                </div>

                {caseStudy.designSystem.colors && (
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
                      Color Tokens
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {caseStudy.designSystem.colors.map((color, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div
                            className="w-full h-12 rounded-lg border border-border"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-xs font-bold text-text-primary block truncate">
                            {color.name}
                          </span>
                          <span className="text-[11px] font-mono text-text-muted block">
                            {color.hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Dev Handoff */}
          {caseStudy?.devHandoff && (
            <section className="space-y-4 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                06 / DEVELOPMENT HANDOFF
              </span>
              <div className="p-8 rounded-xl bg-surface border border-border space-y-3">
                <h3 className="text-lg font-bold text-text-primary">
                  Bridging Figma with Front-End Code
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {caseStudy.devHandoff}
                </p>
              </div>
            </section>
          )}

          {/* Section: Reflections */}
          {caseStudy?.reflection && (
            <section className="space-y-4 pt-12 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                07 / REFLECTION
              </span>
              <div className="space-y-3">
                {caseStudy.reflection.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-surface border border-border text-base text-text-secondary leading-relaxed"
                  >
                    {ref}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Next Project Link */}
          <div className="pt-16 border-t border-border flex items-center justify-between">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Work</span>
            </Link>

            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 text-right"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-text-muted block">
                    Next Project
                  </span>
                  <span className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                    {nextProject.shortTitle}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
