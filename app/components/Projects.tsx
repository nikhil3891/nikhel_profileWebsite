"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "RoadPass — Multi-Tenant Bus Booking SaaS",
    duration: "In Development",
    description:
      "RoadPass is a multi-tenant bus-booking SaaS platform for operators and travel companies. Dockerized backend with Redis-backed seat locking, BullMQ job queues, JWT auth and admin/operator/customer dashboards built with Next.js and React.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "JWT", "Next.js", "React Native"],
    badge: "In Progress",
    link: "https://bus-booking-users-page.vercel.app",
    highlight: true,
  },
  {
    title: "Safe EMI Locker",
    duration: "4 months",
    description:
      "Complete backend for EMI-based phone feature control — device locks, admin key generation and distribution, retailer access management, and full audit trails. Includes an e-commerce module letting retailers purchase electronics from vendors via mobile app, with vendor delivery management and an admin dashboard. Multi-tenant RBAC keeps data fully isolated per retailer.",
    tags: ["Node.js", "Express.js", "MongoDB", "AWS S3", "JWT", "RBAC"],
    badge: "Live",
    link: "https://safeemilocker.com/home",
    highlight: true,
  },
  {
    title: "Payment Management System",
    duration: "3 months",
    description:
      "Multi-tenant payroll backend running multiple companies on a single codebase with complete per-tenant data isolation. Google Drive integration and automated payslip PDF generation eliminated manual HR overhead. Worker threads handle CPU-intensive batch payroll computation without blocking the event loop. Built following SOLID principles.",
    tags: ["Node.js", "MSSQL", "Knex", "Google Drive API", "Worker Threads", "Multi-tenant"],
    badge: "Client Project",
    link: null,
    highlight: false,
  },
  {
    title: "VFX Records System",
    duration: "Enterprise",
    description:
      "Built NestJS APIs for a VFX video records management system with clean architecture and high Jest test coverage while collaborating across global teams.",
    tags: ["NestJS", "Jest", "Clean Architecture", "Agile"],
    badge: "Enterprise",
    link: null,
    highlight: false,
  },
  {
    title: "BrainyClock — Attendance System",
    duration: "4 months",
    description:
      "Real-time attendance, shift and department management across global multi-location offices, with independent multi-tenant data per organisation. Designed the MySQL relational schema for structured attendance records and produced full Swagger documentation for every endpoint.",
    tags: ["Node.js", "Express.js", "MySQL", "Swagger", "Multi-tenant"],
    badge: "Client Project",
    link: null,
    highlight: false,
  },
  {
    title: "Finn Mitra — Fintech Platform",
    duration: "4 months",
    description:
      "Production-grade fintech APIs for utility bill payments, built for zero-error financial transactions at scale. Optimised API response times via query tuning and secured every endpoint with JWT, Helmet.js and rate limiting — collaborated closely with the frontend team to align API contracts and cut integration bugs.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Helmet.js"],
    badge: "Client Project",
    link: null,
    highlight: false,
  },
  {
    title: "Weldarc CRM",
    duration: "4 months",
    description:
      "CRM backend for lead assignment, pipeline tracking and lifecycle management with real-time, JWT-secured data handling. Improved API efficiency through query optimisation and added v1/v2 versioning with structured error responses for reliable frontend integration.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    badge: "Client Project",
    link: null,
    highlight: false,
  },
  {
    title: "Hindu Business Directory",
    duration: "2 months",
    description:
      "Node.js/Express APIs for an Australian business listing platform connecting companies and individuals — v1/v2 versioned, paginated endpoints built to handle large datasets, covering company listings, service management and user communication.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    badge: "Live",
    link: "https://hindubusinessdirectory.com.au",
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
              className={`stagger-item relative bg-[#0D1420] rounded-2xl p-6 card-hover flex flex-col ${p.highlight
                  ? "border border-[#3B82F6]/40 shadow-lg shadow-blue-500/10"
                  : "border border-[#1E2D45]"
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
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
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <span
                    className="text-[#4B6282] flex-shrink-0"
                    title="Private client project"
                    aria-label="Private client project"
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </span>
                )}
              </div>

              {p.badge && (
                <span
                  className="self-start mb-3 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: p.badge === "Live" ? "#34D399" : p.badge === "In Progress" ? "#FBBF24" : "#8BA3C0",
                    backgroundColor: p.badge === "Live" ? "rgba(52,211,153,0.1)" : p.badge === "In Progress" ? "rgba(251,191,36,0.1)" : "rgba(139,163,192,0.1)",
                    border: `1px solid ${p.badge === "Live" ? "rgba(52,211,153,0.3)" : p.badge === "In Progress" ? "rgba(251,191,36,0.3)" : "rgba(139,163,192,0.2)"}`,
                  }}
                >
                  {p.badge}
                </span>
              )}

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
