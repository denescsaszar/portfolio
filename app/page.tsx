import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

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
      </main>
    </div>
  );
}
