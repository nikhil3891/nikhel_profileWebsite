"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Safe EMI Locker",
    duration: "Ongoing",
    description:
      "Backend system to manage phone feature control for EMI-based device purchases. Tracks device keys, customer records, and access control. Includes e-commerce features for retailer-to-vendor electronics purchase via mobile app.",
    tags: ["Node.js", "Express.js", "MongoDB", "Admin Panel", "E-commerce"],
    link: "https://safeemilocker.com/home",
    highlight: true,
  },
  {
    title: "Payment Management System",
    duration: "3 months",
    description:
      "Enterprise payroll backend with Google Drive integration, automated payslip PDF generation, and multi-tenant architecture designed for scalability. Built following SOLID principles.",
    tags: ["Node.js", "MSSQL", "Knex", "Google Drive API", "Multi-tenant"],
    link: null,
    highlight: false,
  },
  {
    title: "BrainyClock — Attendance System",
    duration: "4 months",
    description:
      "Global employee attendance management platform with real-time data sync across multiple office locations, department management, and shift scheduling.",
    tags: ["Node.js", "Express.js", "Real-time", "MongoDB", "REST APIs"],
    link: null,
    highlight: false,
  },
  {
    title: "Finn Mitra — Fintech Platform",
    duration: "4 months",
    description:
      "Secure fintech APIs for utility bill payment workflows. Collaborated with frontend teams to optimise API response times and ensure reliable production-grade transactions.",
    tags: ["Node.js", "Fintech", "Security", "Express.js", "Performance"],
    link: null,
    highlight: false,
  },
  {
    title: "Weldarc CRM",
    duration: "4 months",
    description:
      "Customer relationship management backend with lead assignment, tracking, and secure real-time data handling. Improved API response efficiency for business operations.",
    tags: ["Node.js", "CRM", "REST APIs", "Real-time"],
    link: null,
    highlight: false,
  },
  {
    title: "Hindu Business Directory",
    duration: "2 months",
    description:
      "Backend APIs for an Australian platform connecting businesses and individuals. Developed company listing, service management, and user communication features.",
    tags: ["Node.js", "Express.js", "Directory", "MongoDB"],
    link: null,
    highlight: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="fade-in-section py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#3B82F6] text-sm font-mono mb-3 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // projects
        </p>
        <h2
          className="text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Things I&apos;ve <span style={{ color: "#3B82F6" }}>Built</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`relative bg-[#0D1420] rounded-2xl p-6 card-hover flex flex-col ${
                p.highlight
                  ? "border border-[#3B82F6]/40 shadow-lg shadow-blue-500/10"
                  : "border border-[#1E2D45]"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-4">
                  <span className="px-3 py-1 bg-[#3B82F6] text-white text-xs font-semibold rounded-full shadow-lg">
                    ★ Featured
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="text-[#4B6282] text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {p.duration}
                  </span>
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:text-white transition-colors flex-shrink-0"
                    aria-label="Live link"
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                ) : (
                  <span className="text-[#1E2D45]">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                  </span>
                )}
              </div>

              <p
                className="text-[#8BA3C0] text-sm leading-relaxed mb-4 flex-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-tag px-2 py-0.5 bg-[#111827] border border-[#1E2D45] rounded text-[#8BA3C0] text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
