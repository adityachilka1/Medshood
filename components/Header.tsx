"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Medshood</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/weight-loss" className="text-gray-700 hover:text-primary transition">
              Weight Loss Programme
            </Link>
            <Link href="/how-we-work" className="text-gray-700 hover:text-primary transition">
              How We Work
            </Link>
            <Link href="/the-science-glp" className="text-gray-700 hover:text-primary transition">
              The Science
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-primary transition">
              FAQs
            </Link>
            <Link 
              href="/quiz" 
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-secondary transition"
            >
              Check Eligibility
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/weight-loss" 
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Weight Loss Programme
            </Link>
            <Link 
              href="/how-we-work" 
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How We Work
            </Link>
            <Link 
              href="/the-science-glp" 
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Science
            </Link>
            <Link 
              href="/faqs" 
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/quiz" 
              className="block bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-secondary transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Check Eligibility
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
