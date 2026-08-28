"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Founder-Engineer",
    company: "RoadPass (SaaS Product)",
    period: "Present",
    location: "Remote",
    type: "Founder",
    current: true,
    bullets: [
      "Own product direction and full-stack delivery for RoadPass, a multi-tenant bus-booking SaaS platform built for operators and travel companies.",
      "Authored the complete Business Requirements Document (BRD) including RBAC matrices, tenant verification workflows and a phased release roadmap.",
      "Building Dockerized Node.js backend (Redis seat-locking, BullMQ job queues), Next.js operator/admin dashboards and customer web & mobile apps.",
    ],
    tags: ["Node.js", "NestJS", "Express", "MongoDB", "Redis", "BullMQ", "Next.js", "React Native"],
  },
  {
    title: "MERN Stack Developer",
    company: "Devolyt Technologies Pvt. Ltd.",
    period: "Oct 2025 – Mar 2026",
    location: "Greater Noida",
    type: "Full-time",
    current: false,
    bullets: [
      "Owned backend architecture for web and mobile apps — wrote API contracts, DB schemas and data-flow diagrams from scratch.",
      "Enforced API versioning, centralised error handling and reusable middleware; led Agile sprints and reviewed merge requests.",
    ],
    tags: ["Node.js", "Express.js", "React.js", "API Design", "MongoDB"],
  },
  {
    title: "Junior Node.js Developer",
    company: "Expnovature Tech Pvt. Ltd.",
    period: "Dec 2024 – Jul 2025",
    location: "Gurugram",
    type: "Full-time",
    current: false,
    bullets: [
      "Built 35+ Node.js/Express REST APIs and a React.js frontend for a policy-surrender and bidding platform.",
      "Implemented submission flows, bid-listing UI and settlement processing.",
    ],
    tags: ["Node.js", "Express.js", "React.js", "REST APIs"],
  },
  {
    title: "Junior Node.js Developer",
    company: "Azikya Software Solution Pvt. Ltd.",
    period: "Jun 2023 – Nov 2024",
    location: "Gurugram",
    type: "Full-time",
    current: false,
    bullets: [
      "Delivered RESTful APIs (Node.js, MSSQL, Knex) for a multi-tenant payroll platform serving multiple clients.",
      "Automated payslip PDF generation using Google Drive integration for 200+ employees monthly.",
    ],
    tags: ["Node.js", "MSSQL", "Knex", "Google Drive API"],
  },
  {
    title: "Intern — Node.js Developer",
    company: "Azikya Software Solution Pvt. Ltd.",
    period: "Dec 2022 – Jun 2023",
    location: "Gurugram",
    type: "Internship",
    current: false,
    bullets: [
      "Progressed from web intern to backend contributor, shipping Node.js/Express API modules following REST conventions.",
    ],
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Site / QA-QC Engineer",
    company: "Gannon Dunkerly / NCC / Dev Dutt Construction",
    period: "Nov 2015 – Mar 2022",
    location: "Various (Bareilly, Nabhinagar, Bhatinda & Delhi)",
    type: "Full-time",
    current: false,
    bullets: [
      "Oversaw quality assurance and quality control on infrastructure projects across multiple sites prior to transitioning into software development.",
    ],
    tags: ["QA-QC", "Site Management", "Project Coordination"],
  },
];

export default function Experience() {
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
    <section id="experience" ref={ref} className="fade-in-section py-24 px-6 bg-[#0D1420]/50">
      <div className="max-w-4xl mx-auto">
        <p
          className="text-[#3B82F6] text-sm font-mono mb-3 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // work experience
        </p>
        <h2
          className="text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Where I&apos;ve <span style={{ color: "#3B82F6" }}>Worked</span>
        </h2>

        <div className="relative timeline-line pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-8 top-5 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-[#3B82F6] border-[#3B82F6] shadow-lg shadow-blue-500/50"
                    : "bg-[#080C14] border-[#1E2D45]"
                }`}
              />

              <div className="bg-[#0D1420] border border-[#1E2D45] rounded-2xl p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[#3B82F6] font-medium text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#8BA3C0] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{exp.period}</p>
                    <p className="text-[#4B6282] text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {exp.location} · {exp.type}
                    </p>
                  </div>
                </div>

                <ul className="mb-4 space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[#8BA3C0] text-sm leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="text-[#3B82F6] mt-1.5 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-tag px-2.5 py-1 bg-[#111827] border border-[#1E2D45] rounded-md text-[#8BA3C0] text-xs"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
