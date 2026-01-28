type ChallengeCardProps = {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  href: string;
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border p-6 no-underline transition-all duration-300 hover:border-teal hover:shadow-lg hover:shadow-teal/5"
      aria-label={`${title} - View case study on GitHub`}
    >
      <h3 className="text-heading-2 font-bold mb-6 group-hover:text-teal transition-colors duration-300">
        {title}
      </h3>

      <div className="space-y-4 mb-6">
        <div>
          <p className="text-body-small text-muted uppercase tracking-wide mb-1">
            Problem
          </p>
          <p className="text-body">{problem}</p>
        </div>

        <div>
          <p className="text-body-small text-muted uppercase tracking-wide mb-1">
            Approach
          </p>
          <p className="text-body">{approach}</p>
        </div>

        <div>
          <p className="text-body-small text-muted uppercase tracking-wide mb-1">
            Outcome
          </p>
          <p className="text-body">{outcome}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2" aria-label="Tags">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-body-small px-3 py-1 border border-border transition-colors duration-300 group-hover:border-teal/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
