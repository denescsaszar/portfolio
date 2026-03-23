import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denescsaszar.com"),
  title: "Denes Csaszar | Developer & Product Manager",
  description:
    "Full-stack development paired with 7+ years of e-commerce, API integrations, and product delivery. Berlin & Z\u00fcrich based.",
  keywords: [
    "Developer",
    "Product Manager",
    "Berlin",
    "Kotlin",
    "Spring Boot",
    "TypeScript",
    "Python",
    "Full-Stack",
  ],
  authors: [{ name: "Denes Csaszar" }],
  creator: "Denes Csaszar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://denescsaszar.com",
    siteName: "Denes Csaszar",
    title: "Denes Csaszar | Developer & Product Manager",
    description:
      "Full-stack development paired with 7+ years of e-commerce, API integrations, and product delivery.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Denes Csaszar - Developer & Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denes Csaszar | Developer & Product Manager",
    description:
      "Full-stack development paired with 7+ years of e-commerce, API integrations, and product delivery.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Denes Csaszar",
    url: "https://denescsaszar.com",
    jobTitle: "Developer & Product Manager",
    description:
      "7+ years bridging technical execution and business strategy across digital products in DACH & 15 European markets.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
    },
    sameAs: [
      "https://linkedin.com/in/denescsaszar",
      "https://github.com/denescsaszar",
    ],
    knowsAbout: [
      "Product Management",
      "Project Management",
      "API Integration",
      "E-Commerce",
      "Digital Transformation",
      "Agile",
      "Scrum",
    ],
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
