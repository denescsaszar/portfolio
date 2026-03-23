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
        <section className="md:min-h-screen flex items-start px-6 md:px-8 pt-24 pb-16 md:pb-24 max-w-wide mx-auto">
          <div className="w-full mt-12 md:mt-20">
            <FadeIn>
              <p className="text-body-small tracking-wide text-muted mb-4">
                Developer & Product Manager
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-display-large font-bold mb-6 leading-[1.1]">
                <span className="text-coral">Denes Csaszar</span>
                <br />
                Where product thinking
                <br />
                meets real code.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-large text-muted mb-8 md:mb-12 max-w-[48ch]">
                Full-stack development paired with 8+ years of e-commerce, API integrations, and product delivery.
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
                  Real projects. Real outcomes. Here&apos;s what I&apos;ve shipped.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <FadeIn delay={0.1}>
                <ProjectCard
                  title="idealo"
                  description="Onboarded 350+ merchants via API integrations. Doubled the partner portfolio and tripled revenue."
                  achievement="3x Revenue Growth"
                  tags={[
                    "API Integration",
                    "Data Feeds",
                    "Partner Onboarding",
                  ]}
                  href="/case-studies/idealo"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <ProjectCard
                  title="Zalando"
                  description="Launched gift cards across 15 European markets. 50K+ POS rollout, +20% revenue growth from redesign."
                  achievement="+20% Revenue Growth"
                  tags={[
                    "Product Launch",
                    "15 Markets",
                    "API Development",
                  ]}
                  href="/case-studies/zalando"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <ProjectCard
                  title="Google & Apple"
                  description="Rolled out digital gift cards across ALDI DACH with Google and Apple. POS integration, API coordination, multi-country launch."
                  achievement="DACH-wide Launch"
                  tags={["POS Integration", "Apple & Google", "ALDI DACH"]}
                  href="/case-studies/google-aldi"
                />
              </FadeIn>
              <FadeIn delay={0.4}>
                <ProjectCard
                  title="Zalando Gift Card API"
                  description="Coordinated development of a new gift card API with Zalando IT. Design thinking, feasibility study, end-to-end implementation across sales channels."
                  achievement="Multi-Platform API"
                  tags={[
                    "API Development",
                    "Design Thinking",
                    "Feasibility Study",
                  ]}
                  href="/case-studies/zalando-api"
                />
              </FadeIn>
              <FadeIn delay={0.5}>
                <ProjectCard
                  title="Deutsche Bank"
                  description="Supported Deutsche Bank in launching digital gift cards with Zalando as API integration partner. Cross-company coordination and seamless technical implementation."
                  achievement="Strategic Partnership"
                  tags={[
                    "API Integration",
                    "Cross-Company",
                    "Financial Services",
                  ]}
                  href="/case-studies/deutsche-bank"
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
                  Technical projects exploring new stacks and solving real problems.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FadeIn delay={0.1}>
                <ChallengeCard
                  title="AI Travel Concierge"
                  problem="Travelers browse endless lists instead of describing what they actually want."
                  approach="Built a full-stack app with Kotlin/Spring Boot backend and Vue 3/TypeScript frontend. Integrated Claude API so users can chat naturally and get personalized Berlin activity recommendations."
                  outcome="Live and deployed. Try it yourself."
                  tags={["Kotlin", "Spring Boot", "Vue 3", "Claude API"]}
                  href="https://gyg-ai-concierge.vercel.app"
                  linkLabel="Try the live app"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <ChallengeCard
                  title="StockPulse API"
                  problem="Needed a way to fetch, cache, and store stock prices without hammering external APIs."
                  approach="FastAPI with SQLAlchemy, 5-minute TTL cache, pagination, date filtering. Wrote 4 test suites covering CRUD, endpoints, services, and integration."
                  outcome="Clean layered architecture with real tests. The kind of backend code I want to write professionally."
                  tags={["Python", "FastAPI", "SQLAlchemy", "pytest"]}
                  href="https://github.com/denescsaszar/stockpulse-api"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <ChallengeCard
                  title="Stripe API Portfolio"
                  problem="Wanted to deeply understand payment flows. Not just use them, but implement them from scratch."
                  approach="Built 20 real-world Stripe scenarios in Python: charges, refunds, disputes, subscriptions, webhooks, fraud rules, and billing."
                  outcome="Hands-on understanding of how payment systems work under the hood."
                  tags={["Python", "Stripe API", "Webhooks", "Flask"]}
                  href="https://github.com/denescsaszar/stripe-api-portfolio"
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
                  I spent 8+ years managing products and integrations at Zalando, idealo, and InComm. Shipped across 15 markets, worked with Apple, Google, and ALDI, and learned what makes software projects succeed (and fail).
                </p>

                <p className="text-body leading-relaxed mb-6">
                  Then I went back to school. Did a full-stack bootcamp at SPICED Academy. JavaScript, React, Node.js, Express, SQL. Started building things myself. Turns out I like writing code as much as I liked managing the people who write it.
                </p>

                <p className="text-body leading-relaxed mb-8 md:mb-12">
                  Now I&apos;m looking for roles close to code — engineering, technical product management, or integration projects — where my product background is an asset, not a footnote.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h3 className="text-heading-2 font-bold mb-4 md:mb-6">
                  Skills & Technologies
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                  {[
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "HTML/CSS",
                    "SQL",
                    "Git",
                    "REST APIs",
                    "Agile / Scrum (PSM I + PSPO I)",
                    "Stakeholder Management",
                    "API Integration",
                    "Product Strategy",
                    "Requirements Engineering",
                    "Cross-functional Collaboration",
                    "Market Research",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-3 md:px-4 py-2 md:py-3 border border-border text-center text-body-small font-medium transition-all duration-300 hover:border-coral hover:shadow-lg hover:shadow-coral/5 hover:text-coral cursor-default"
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
                  Open to Developer, Product Manager, Project Manager, and Product Owner roles. Berlin &amp; Z&uuml;rich based, remote-friendly.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
                  <a
                    href="mailto:csaszar.denes@gmail.com"
                    className="px-5 md:px-6 py-3 bg-coral text-background font-semibold hover:bg-coral/80 transition-colors no-underline"
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
                      href="mailto:csaszar.denes@gmail.com"
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
                    <p>Berlin &amp; Z&uuml;rich · EU Remote</p>
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
