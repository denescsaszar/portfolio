"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "idealo",
    description:
      "API Integration & Partner Onboarding — coordinated technical integration and partner rollout for one of Europe's leading price comparison platforms.",
    achievement: "Successful Rollout",
    tags: ["API Integration", "Project Management", "Partner Coordination"],
    href: "/case-studies/idealo",
    category: "E-Commerce",
  },
  {
    title: "Zalando",
    description:
      "Marketing & Campaign Operations across 15 European markets — managed seven-figure budgets and coordinated international teams.",
    achievement: "€2M+ Budgets Managed",
    tags: ["Campaign Ops", "Stakeholder Mgmt", "International Teams"],
    href: "/case-studies/zalando",
    category: "E-Commerce",
  },
  {
    title: "Google & Apple",
    description:
      "Digital Gift Card Platform & Integrations — led product strategy and B2B partnerships for multi-platform launch.",
    achievement: "Multi-Platform Launch",
    tags: ["Product Strategy", "B2B Partnerships", "Scale-up"],
    href: "/case-studies/google-aldi",
    category: "Retail",
  },
  {
    title: "Deutsche Bank",
    description:
      "Digital transformation initiatives for retail banking products — improved customer onboarding and reduced processing time significantly.",
    achievement: "72% Faster Onboarding",
    tags: ["Digital Transformation", "Banking", "Process Optimization"],
    href: "/case-studies/deutsche-bank",
    category: "Fintech",
  },
];

const categories = ["All", "E-Commerce", "Fintech", "Retail"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background font-semibold"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="px-6 md:px-8 pt-32 pb-16 md:pb-24 border-b border-border">
          <div className="max-w-wide mx-auto">
            <FadeIn>
              <p className="text-body-small uppercase tracking-widest text-muted mb-4">
                Portfolio
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-display-large font-bold mb-6">
                Selected Work
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-large text-muted max-w-[52ch]">
                A collection of projects spanning e-commerce, fintech, and
                digital platforms. Each case study explores the challenges,
                approach, and measurable outcomes.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Filter */}
        <section className="px-6 md:px-8 py-8 border-b border-border">
          <div className="max-w-wide mx-auto">
            <FadeIn>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-body-small font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-accent text-background"
                        : "border border-border hover:border-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 md:px-8 py-section">
          <div className="max-w-wide mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.title} delay={0.1 * (index + 1)}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    achievement={project.achievement}
                    tags={project.tags}
                    href={project.href}
                  />
                </FadeIn>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="text-center text-muted py-12">
                No projects found in this category.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-8 py-section border-t border-border">
          <div className="max-w-wide mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading-1 font-bold mb-4">
                Interested in working together?
              </h2>
              <p className="text-body-large text-muted mb-8 max-w-[44ch] mx-auto">
                I'm open to Product Manager and Project Manager roles across
                Europe.
              </p>
              <a
                href="/#contact"
                className="inline-block px-6 py-3 bg-accent text-background font-semibold hover:bg-foreground transition-colors no-underline"
              >
                Get in Touch
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
