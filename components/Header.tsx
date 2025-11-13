"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: '/categories', label: 'Therapeutic Areas' },
    { href: '/specialty-biologics', label: 'The Science' },
    { href: '/patient-assistance', label: 'Patient Assistance' },
    { href: '/reviews', label: 'Patient Stories' },
    { href: '/support', label: 'Support' },
    { href: '/faqs', label: 'FAQs' },
  ];

  // Scroll detection for glass header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menuElement = mobileMenuRef.current;
    if (!menuElement) return;

    const focusableElements = menuElement.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled ? 'glass-header' : 'bg-white shadow-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Medshood homepage">
            <h1 className="text-2xl font-bold text-primary">
              Medshood
              <span className="sr-only"> - India's Leading Super Specialty Pharmacy</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-primary font-bold'
                    : 'text-gray-900 hover:text-primary'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/upload-prescription"
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                pathname === '/upload-prescription'
                  ? 'bg-secondary text-white'
                  : 'bg-primary text-white hover:bg-secondary'
              }`}
              aria-current={pathname === '/upload-prescription' ? 'page' : undefined}
            >
              Upload Prescription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden py-4 space-y-4 border-t border-gray-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === link.href
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-900 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/upload-prescription"
              className={`block px-6 py-3 rounded-md font-semibold transition text-center ${
                pathname === '/upload-prescription'
                  ? 'bg-secondary text-white'
                  : 'bg-primary text-white hover:bg-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === '/upload-prescription' ? 'page' : undefined}
            >
              Upload Prescription
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
