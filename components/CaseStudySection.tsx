import FadeIn from "./FadeIn";

type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function CaseStudySection({
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <FadeIn>
      <div className="mb-12 md:mb-16">
        <h2 className="text-heading-1 font-bold mb-6">{title}</h2>
        <div className="text-body leading-relaxed space-y-4">{children}</div>
      </div>
    </FadeIn>
  );
}
