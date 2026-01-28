import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import ChallengeCard from "@/components/ChallengeCard";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="min-h-screen flex items-start px-8 pt-24 pb-24 max-w-wide mx-auto">
          <div className="w-full mt-32">
            <a
              href="#about"
              className="text-body-large font-medium tracking-widest uppercase text-coral no-underline"
            >
              Denes Csaszar
            </a>

            <p className="text-body-small tracking-widest uppercase text-muted font-medium mt-10 mb-6 pb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-px after:bg-coral">
              Product & Project Manager
            </p>

            <h1 className="text-display-large font-bold mb-4">
              Where product, tech and business meet.
            </h1>

            <p className="text-body-large font-medium tracking-wide text-muted mb-6">
              Bridging technical execution and business strategy across digital
              products.
            </p>

            <p className="text-body-small tracking-widest uppercase text-muted font-medium mb-10">
              7+ years · DACH & 15 European markets
            </p>

            <div className="flex gap-8">
              <a
                href="#projects"
                className="text-body-small font-medium text-accent no-underline relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full"
              >
                Selected work
              </a>
              <a
                href="#challenges"
                className="text-body-small font-medium text-accent no-underline relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full"
              >
                Thinking & challenges
              </a>
              <a
                href="#contact"
                className="text-body-small font-medium text-accent no-underline relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="projects"
          className="px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <div className="mb-12">
              <h2 className="text-heading-1 font-bold mb-4">Selected Work</h2>
              <p className="text-body-large text-muted max-w-[36ch]">
                Product leadership across digital products, API integrations,
                and e-commerce solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <ProjectCard
                title="Zalando"
                description="Marketing & Campaign Operations across 15 European markets — managed seven-figure budgets and coordinated international teams."
                achievement="€2M+ Budgets Managed"
                tags={[
                  "Campaign Ops",
                  "Stakeholder Mgmt",
                  "International Teams",
                ]}
              />
              <ProjectCard
                title="Google & Apple"
                description="Digital Gift Card Platform & Integrations — led product strategy and B2B partnerships for multi-platform launch."
                achievement="Multi-Platform Launch"
                tags={["Product Strategy", "B2B Partnerships", "Scale-up"]}
              />
            </div>
          </div>
        </section>

        {/* Challenges & Experiments */}
        <section
          id="challenges"
          className="px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <div className="mb-12">
              <h2 className="text-heading-1 font-bold mb-4">
                Challenges & Experiments
              </h2>
              <p className="text-body-large text-muted max-w-[44ch]">
                Small problems, clearly framed. This section shows how I think
                about product, systems and trade-offs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ChallengeCard
                title="API Pagination Strategy"
                problem="Large result sets caused slow client-side rendering and complex state handling in the frontend."
                approach="Compared offset-based and cursor-based pagination across performance, caching behavior, API complexity and frontend UX."
                outcome="Cursor-based pagination reduced response time and simplified frontend logic while scaling more reliably."
                tags={["API Design", "Performance", "Trade-offs"]}
                href="https://github.com/denescsaszar"
              />
              <ChallengeCard
                title="Real-Time Sync Architecture"
                problem="Multiple users editing data simultaneously led to race conditions and stale state issues across clients."
                approach="Evaluated WebSocket, Server-Sent Events, and polling. Analyzed latency requirements, server load, and client complexity."
                outcome="WebSocket with event sourcing eliminated race conditions and reduced latency by 400ms while keeping architecture maintainable."
                tags={["Real-Time Systems", "Architecture", "Scalability"]}
                href="https://github.com/denescsaszar"
              />
              <ChallengeCard
                title="Multi-Region Data Consistency"
                problem="Operating across 15 European markets required managing data consistency with varying network latency and regulatory constraints."
                approach="Designed eventual consistency model with conflict resolution, local caching strategies, and GDPR-compliant data governance."
                outcome="Reduced data sync latency to under 2 seconds globally while maintaining compliance across all regions."
                tags={["Distributed Systems", "Data Consistency", "Compliance"]}
                href="https://github.com/denescsaszar"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-8 py-section border-t border-border">
          <div className="max-w-wide mx-auto">
            <div className="max-w-[700px]">
              <h2 className="text-heading-1 font-bold mb-8">About</h2>

              <p className="text-body leading-relaxed mb-6">
                Project Manager bridging technical execution and business
                strategy. With 7+ years of experience managing digital products
                across Europe, I've built a rare combination of deep product
                thinking and technical literacy.
              </p>

              <p className="text-body leading-relaxed mb-6">
                I've led cross-functional teams, managed seven-figure budgets,
                and shipped products that generated measurable business impact.
                My background spans e-commerce, API integrations, and
                international product launches.
              </p>

              <p className="text-body leading-relaxed mb-12">
                Now I combine that product expertise with full-stack development
                skills (JavaScript, React, Next.js, Python) and Scrum
                certifications to bridge the gap between business needs and
                technical execution.
              </p>

              <h3 className="text-heading-2 font-bold mb-6">
                Skills & Technologies
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                    className="px-4 py-3 border border-border text-center text-body-small font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section
          id="contact"
          className="px-8 py-section border-t border-border"
        >
          <div className="max-w-wide mx-auto">
            <div className="max-w-[700px]">
              <h2 className="text-heading-1 font-bold mb-6">Let's Talk</h2>

              <p className="text-body leading-relaxed mb-8">
                Open to Product Manager and Project Manager roles across Europe.
                Berlin-based, remote-friendly.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="mailto:hello@denescsaszar.com"
                  className="px-6 py-3 bg-accent text-background font-semibold hover:bg-foreground transition-colors no-underline"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/denescsaszar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-accent font-semibold hover:bg-accent hover:text-background transition-colors no-underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/denescsaszar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-accent font-semibold hover:bg-accent hover:text-background transition-colors no-underline"
                >
                  GitHub
                </a>
              </div>

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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
