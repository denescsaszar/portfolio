import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Denes Csaszar",
  description:
    "A collection of projects spanning e-commerce, fintech, and digital platforms. Case studies exploring challenges, approach, and measurable outcomes.",
  openGraph: {
    title: "Selected Work | Denes Csaszar",
    description:
      "A collection of projects spanning e-commerce, fintech, and digital platforms.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
