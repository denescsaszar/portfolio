type ChallengeCardProps = {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  href?: string;
};

export default function ChallengeCard({
  title,
  problem,
  approach,
  outcome,
  tags,
  href,
}: ChallengeCardProps) {
  return (
    <div className="p-8 border border-border bg-background transition-all hover:border-accent hover:-translate-y-1">
      {/* Header */}
      <div className="flex justify-between items-start gap-4 mb-6">
        <h3 className="text-heading-3 font-bold">{title}</h3>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors shrink-0 pt-1"
            aria-label={`View ${title} on GitHub`}
          >
            →
          </a>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-body-small font-semibold uppercase tracking-wide mb-2">
            Problem
          </p>
          <p className="text-body text-muted leading-relaxed">{problem}</p>
        </div>

        <div>
          <p className="text-body-small font-semibold uppercase tracking-wide mb-2">
            Approach
          </p>
          <p className="text-body text-muted leading-relaxed">{approach}</p>
        </div>

        <div>
          <p className="text-body-small font-semibold uppercase tracking-wide mb-2 text-coral">
            Outcome
          </p>
          <p className="text-body text-muted leading-relaxed">{outcome}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-caption px-3 py-1.5 border border-border text-muted uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
