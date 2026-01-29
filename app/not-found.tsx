import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-6 md:px-8">
        <div className="text-center">
          <FadeIn>
            <p className="text-coral text-display-large font-bold mb-4">404</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-heading-1 font-bold mb-4">Page not found</h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-large text-muted mb-8 max-w-[40ch] mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-accent text-background font-semibold hover:bg-foreground transition-colors no-underline"
            >
              Back to Home
            </Link>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
