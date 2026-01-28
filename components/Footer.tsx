export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-border text-center">
      <p className="text-body-small text-muted">
        © {new Date().getFullYear()} Denes Csaszar. All rights reserved.
      </p>
      <p className="text-caption text-muted/70 mt-4">
        Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
