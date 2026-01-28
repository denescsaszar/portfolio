import Navigation from "./Navigation";
import Footer from "./Footer";
import FadeIn from "./FadeIn";

type CaseStudyLayoutProps = {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  industry: string;
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  title,
  subtitle,
  role,
  timeline,
  industry,
  children,
}: CaseStudyLayoutProps) {
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
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 text-body-small text-muted hover:text-foreground transition-colors no-underline mb-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Home
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-display-large font-bold mb-4">{title}</h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-large text-muted mb-8 max-w-[60ch]">
                {subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-body-small">
                <div>
                  <p className="text-muted uppercase tracking-wide mb-1">
                    Role
                  </p>
                  <p className="font-medium">{role}</p>
                </div>
                <div>
                  <p className="text-muted uppercase tracking-wide mb-1">
                    Timeline
                  </p>
                  <p className="font-medium">{timeline}</p>
                </div>
                <div>
                  <p className="text-muted uppercase tracking-wide mb-1">
                    Industry
                  </p>
                  <p className="font-medium">{industry}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 md:px-8 py-section">
          <div className="max-w-wide mx-auto">
            <div className="max-w-[700px]">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
