import Navigation from "@/components/Navigation";

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
      </main>
    </div>
  );
}
