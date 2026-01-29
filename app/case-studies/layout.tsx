import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Denes Csaszar",
    default: "Case Studies | Denes Csaszar",
  },
  description: "Detailed case studies of product and project management work.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
