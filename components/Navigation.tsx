"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-background/95 backdrop-blur-sm border-b border-border transition-all">
        <a
          href="#"
          className="text-base font-semibold uppercase tracking-widest text-accent no-underline"
        >
          DC
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#projects"
              className="text-body-small font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors no-underline"
            >
              Work
            </a>
            <a
              href="#challenges"
              className="text-body-small font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors no-underline"
            >
              Thinking
            </a>
            <a
              href="#about"
              className="text-body-small font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors no-underline"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-body-small font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors no-underline"
            >
              Contact
            </a>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="text-body-small font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8">
          <a
            href="#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors no-underline"
          >
            Work
          </a>
          <a
            href="#challenges"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors no-underline"
          >
            Thinking
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors no-underline"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors no-underline"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
