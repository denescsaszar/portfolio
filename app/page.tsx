import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import ChallengeCard from "@/components/ChallengeCard";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
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
        <section className="min-h-screen flex items-start px-6 md:px-8 pt-24 pb-16 md:pb-24 max-w-wide mx-auto">
          <div className="w-full mt-12 md:mt-20">
            <FadeIn>
              <p className="text-body-small uppercase tracking-widest text-muted mb-4">
                Product & Project Manager
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-display-large font-bold mb-6 leading-[1.1]">
                <span className="text-coral">Denes Csaszar</span>
                <br />
                Where product, tech
                <br />
                and business meet.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-large text-muted mb-8 md:mb-12 max-w-[48ch]">
                7+ years bridging technical execution and business strategy
                across digital products in DACH & 15 European markets.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 md:gap-8">
                <a
                  href="#projects"
                  className="text-body-small font-medium text-foreground no-underline relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-coral"
                >
                  Selected work
                </a>
                <a
                  href="#challenges"
                  className="text-body-small font-medium text-foreground no-underline relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full"
                >
                  Thinking
                </a>
                <a
                  href="#contact"
                  className="text-body-small font-medium text-foreground no-underline relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full"
                >
                  Contact
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="projects"
          className="px-6 md:px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <FadeIn>
              <div className="mb-8 md:mb-12">
                <h2 className="text-heading-1 font-bold mb-4">Selected Work</h2>
                <p className="text-body-large text-muted max-w-[36ch]">
                  Product leadership across digital products, API integrations,
                  and e-commerce solutions.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <FadeIn delay={0.1}>
                <ProjectCard
                  title="idealo"
                  description="API Integration & Partner Onboarding — coordinated technical integration and partner rollout for one of Europe's leading price comparison platforms."
                  achievement="Successful Rollout"
                  tags={[
                    "API Integration",
                    "Project Management",
                    "Partner Coordination",
                  ]}
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <ProjectCard
                  title="Zalando"
                  description="Marketing & Campaign Operations across 15 European markets — managed seven-figure budgets and coordinated international teams."
                  achievement="€2M+ Budgets Managed"
                  tags={[
                    "Campaign Ops",
                    "Stakeholder Mgmt",
                    "International Teams",
                  ]}
                  href="/case-studies/zalando"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <ProjectCard
                  title="Google & Apple"
                  description="Digital Gift Card Platform & Integrations — led product strategy and B2B partnerships for multi-platform launch."
                  achievement="Multi-Platform Launch"
                  tags={["Product Strategy", "B2B Partnerships", "Scale-up"]}
                  href="/case-studies/google-aldi"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Challenges & Experiments */}
        <section
          id="challenges"
          className="px-6 md:px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <FadeIn>
              <div className="mb-8 md:mb-12">
                <h2 className="text-heading-1 font-bold mb-4">
                  Challenges & Experiments
                </h2>
                <p className="text-body-large text-muted max-w-[44ch]">
                  Small problems, clearly framed. This section shows how I think
                  about product, systems and trade-offs.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FadeIn delay={0.1}>
                <ChallengeCard
                  title="API Pagination Strategy"
                  problem="Large result sets caused slow client-side rendering and complex state handling in the frontend."
                  approach="Compared offset-based and cursor-based pagination across performance, caching behavior, API complexity and frontend UX."
                  outcome="Cursor-based pagination reduced response time and simplified frontend logic while scaling more reliably."
                  tags={["API Design", "Performance", "Trade-offs"]}
                  href="https://github.com/denescsaszar"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <ChallengeCard
                  title="Real-Time Sync Architecture"
                  problem="Multiple users editing data simultaneously led to race conditions and stale state issues across clients."
                  approach="Evaluated WebSocket, Server-Sent Events, and polling. Analyzed latency requirements, server load, and client complexity."
                  outcome="WebSocket with event sourcing eliminated race conditions and reduced latency by 400ms while keeping architecture maintainable."
                  tags={["Real-Time Systems", "Architecture", "Scalability"]}
                  href="https://github.com/denescsaszar"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <ChallengeCard
                  title="Multi-Region Data Consistency"
                  problem="Operating across 15 European markets required managing data consistency with varying network latency and regulatory constraints."
                  approach="Designed eventual consistency model with conflict resolution, local caching strategies, and GDPR-compliant data governance."
                  outcome="Reduced data sync latency to under 2 seconds globally while maintaining compliance across all regions."
                  tags={[
                    "Distributed Systems",
                    "Data Consistency",
                    "Compliance",
                  ]}
                  href="https://github.com/denescsaszar"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="px-6 md:px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <div className="max-w-[700px]">
              <FadeIn>
                <h2 className="text-heading-1 font-bold mb-6 md:mb-8">About</h2>

                <p className="text-body leading-relaxed mb-6">
                  Project Manager bridging technical execution and business
                  strategy. With 7+ years of experience managing digital
                  products across Europe, I've built a rare combination of deep
                  product thinking and technical literacy.
                </p>

                <p className="text-body leading-relaxed mb-6">
                  I've led cross-functional teams, managed seven-figure budgets,
                  and shipped products that generated measurable business
                  impact. My background spans e-commerce, API integrations, and
                  international product launches.
                </p>

                <p className="text-body leading-relaxed mb-8 md:mb-12">
                  Now I combine that product expertise with full-stack
                  development skills (JavaScript, React, Next.js, Python) and
                  Scrum certifications to bridge the gap between business needs
                  and technical execution.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h3 className="text-heading-2 font-bold mb-4 md:mb-6">
                  Skills & Technologies
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                  {[
                    "Product Strategy",
                    "Project Management",
                    "API Integration",
                    "Agile / Scrum",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Python",
                    "SQL",
                    "Figma",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-3 md:px-4 py-2 md:py-3 border border-border text-center text-body-small font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 md:px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <div className="max-w-[700px]">
              <FadeIn>
                <h2 className="text-heading-1 font-bold mb-6">Let's Talk</h2>

                <p className="text-body leading-relaxed mb-8">
                  Open to Product Manager and Project Manager roles across
                  Europe. Berlin-based, remote-friendly.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
                  <a
                    href="mailto:hello@denescsaszar.com"
                    className="px-5 md:px-6 py-3 bg-accent text-background font-semibold hover:bg-foreground transition-colors no-underline"
                  >
                    Send Email
                  </a>
                  <a
                    href="https://linkedin.com/in/denescsaszar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 md:px-6 py-3 border border-accent font-semibold hover:bg-accent hover:text-background transition-colors no-underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/denescsaszar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 md:px-6 py-3 border border-accent font-semibold hover:bg-accent hover:text-background transition-colors no-underline"
                  >
                    GitHub
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-body-small">
                  <div>
                    <p className="text-muted uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@denescsaszar.com"
                      className="hover:text-muted transition-colors no-underline"
                    >
                      csaszar.denes@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-muted uppercase tracking-wide mb-1">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/denescsaszar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-muted transition-colors no-underline"
                    >
                      github.com/denescsaszar
                    </a>
                  </div>
                  <div>
                    <p className="text-muted uppercase tracking-wide mb-1">
                      Location
                    </p>
                    <p>Berlin, Germany · EU Remote</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
