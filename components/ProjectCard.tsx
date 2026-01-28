type ProjectCardProps = {
  title: string;
  description: string;
  achievement: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  achievement,
  tags,
  href,
}: ProjectCardProps) {
  const CardWrapper = href ? "a" : "article";
  const cardProps = href
    ? {
        href,
        className:
          "group block border border-border p-5 md:p-6 flex flex-col h-full transition-all duration-300 hover:border-coral hover:shadow-lg hover:shadow-coral/5 no-underline",
      }
    : {
        className:
          "group border border-border p-5 md:p-6 flex flex-col h-full transition-all duration-300 hover:border-coral hover:shadow-lg hover:shadow-coral/5",
      };

  return (
    <CardWrapper {...cardProps}>
      <div className="mb-3 md:mb-4">
        <span className="text-body-small text-coral font-medium uppercase tracking-wide">
          {achievement}
        </span>
      </div>

      <h3 className="text-heading-2 font-bold mb-2 md:mb-3 group-hover:text-coral transition-colors duration-300">
        {title}
      </h3>

      <p className="text-body text-muted mb-5 md:mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-body-small px-3 py-1.5 border border-border transition-colors duration-300 group-hover:border-coral/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardWrapper>
  );
}
