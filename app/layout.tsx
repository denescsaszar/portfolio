import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
