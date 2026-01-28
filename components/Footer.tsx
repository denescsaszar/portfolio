export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-border" role="contentinfo">
      <div className="max-w-wide mx-auto text-center">
        <p className="text-body-small text-muted">
          © {new Date().getFullYear()} Denes Csaszar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
