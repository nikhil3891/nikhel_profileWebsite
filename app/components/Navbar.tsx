"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/90 backdrop-blur-md border-b border-[#1E2D45]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-bold text-white hover:text-accent transition-colors"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          NT<span className="text-[#3B82F6]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium transition-colors ${
                active === l.href
                  ? "text-[#60A5FA] active"
                  : "text-[#8BA3C0] hover:text-[#E2EAF4]"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              onClick={() => setActive(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#8BA3C0] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1420] border-t border-[#1E2D45] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8BA3C0] hover:text-white text-sm font-medium transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center px-4 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
