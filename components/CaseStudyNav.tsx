import FadeIn from "./FadeIn";

type CaseStudyNavProps = {
  prev?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export default function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <FadeIn>
      <nav
        className="border-t border-border pt-8 mt-12 md:mt-16"
        aria-label="Case study navigation"
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Previous */}
          <div>
            {prev && (
              <a href={prev.href} className="group block no-underline">
                <span className="text-body-small text-muted uppercase tracking-wide mb-2 block">
                  ← Previous
                </span>
                <span className="text-heading-2 font-bold group-hover:text-coral transition-colors">
                  {prev.title}
                </span>
              </a>
            )}
          </div>

          {/* Next */}
          <div className="text-right">
            {next && (
              <a href={next.href} className="group block no-underline">
                <span className="text-body-small text-muted uppercase tracking-wide mb-2 block">
                  Next →
                </span>
                <span className="text-heading-2 font-bold group-hover:text-coral transition-colors">
                  {next.title}
                </span>
              </a>
            )}
          </div>
        </div>
      </nav>
    </FadeIn>
  );
}
