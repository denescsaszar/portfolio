"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-wide mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-heading-2 font-bold no-underline"
          aria-label="Denes Csaszar - Home"
        >
          DC
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-body-small font-medium text-muted hover:text-foreground transition-colors no-underline"
          >
            Work
          </a>
          <a
            href="#challenges"
            className="text-body-small font-medium text-muted hover:text-foreground transition-colors no-underline"
          >
            Thinking
          </a>
          <a
            href="#about"
            className="text-body-small font-medium text-muted hover:text-foreground transition-colors no-underline"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-body-small font-medium text-muted hover:text-foreground transition-colors no-underline"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 text-muted hover:text-foreground transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[57px] bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-[57px] left-0 right-0 bg-background border-b border-border z-50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        role="menu"
      >
        <div className="flex flex-col p-6 gap-6">
          <a
            href="#projects"
            className="text-body-large font-medium no-underline py-2"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Work
          </a>
          <a
            href="#challenges"
            className="text-body-large font-medium no-underline py-2"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Thinking
          </a>
          <a
            href="#about"
            className="text-body-large font-medium no-underline py-2"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-body-large font-medium no-underline py-2"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Contact
          </a>
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className="text-body-large font-medium text-left py-2"
            role="menuitem"
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
