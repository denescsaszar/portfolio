import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Denes Csaszar | Product & Project Manager",
  description:
    "7+ years bridging technical execution and business strategy across digital products in DACH & 15 European markets.",
  keywords: [
    "Product Manager",
    "Project Manager",
    "Berlin",
    "E-Commerce",
    "API Integration",
    "Digital Transformation",
  ],
  authors: [{ name: "Denes Csaszar" }],
  creator: "Denes Csaszar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://denescsaszar.com",
    siteName: "Denes Csaszar",
    title: "Denes Csaszar | Product & Project Manager",
    description:
      "7+ years bridging technical execution and business strategy across digital products in DACH & 15 European markets.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Denes Csaszar - Product & Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denes Csaszar | Product & Project Manager",
    description:
      "7+ years bridging technical execution and business strategy across digital products in DACH & 15 European markets.",
    images: ["/og-image.png"],
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
    jobTitle: "Product & Project Manager",
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
      </body>
    </html>
  );
}
