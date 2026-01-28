type ProjectCardProps = {
  title: string;
  description: string;
  achievement: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  achievement,
  tags,
}: ProjectCardProps) {
  return (
    <div className="p-8 border border-border bg-background transition-all hover:border-accent hover:-translate-y-1">
      <p className="text-body-small font-semibold text-coral mb-4">
        ✓ {achievement}
      </p>
      <h3 className="text-heading-3 font-bold mb-3">{title}</h3>
      <p className="text-body text-muted mb-6 leading-relaxed">{description}</p>
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
