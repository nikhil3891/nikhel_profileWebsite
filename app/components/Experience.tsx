"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Devolyt Technologies Pvt. Ltd.",
    period: "Dec 2025 – Present",
    location: "Greater Noida",
    type: "Full-time",
    current: true,
    bullets: [
      "Design and develop scalable backend systems using Node.js and Express.js for web and mobile applications.",
      "Create comprehensive system design documents and architecture diagrams.",
      "Collaborate with cross-functional teams to align backend architecture with business requirements.",
    ],
    tags: ["Node.js", "Express.js", "System Design", "MongoDB"],
  },
  {
    title: "Software Engineer",
    company: "Radianys Technologies Pvt. Ltd.",
    period: "Aug 2025 – Sep 2025",
    location: "Gurugram",
    type: "Full-time",
    current: false,
    bullets: [
      "Developed and maintained scalable NestJS APIs for managing AI-enhanced VFX video records.",
      "Wrote and executed unit tests using Jest to ensure high code quality and reliability.",
      "Collaborated with global teams following MNC-level best practices for performance and security.",
    ],
    tags: ["NestJS", "TypeScript", "Jest", "REST APIs"],
  },
  {
    title: "Junior Node.js Developer",
    company: "Expnovature Tech Pvt. Ltd.",
    period: "Dec 2024 – Jul 2025",
    location: "Gurugram",
    type: "Full-time",
    current: false,
    bullets: [
      "Led backend development using Node.js, Express.js, MSSQL, and Knex ORM.",
      "Built and optimised RESTful APIs to enhance performance across client-facing products.",
      "Implemented Google Drive integration and automated payslip PDF generation.",
      "Designed a multi-tenant architecture with integrated ReactJS UI, following SOLID principles.",
    ],
    tags: ["Node.js", "MSSQL", "Knex", "React.js", "Multi-tenant"],
  },
  {
    title: "Junior Node.js Developer",
    company: "Azikya Software Solution Pvt. Ltd.",
    period: "Jun 2023 – Nov 2024",
    location: "Gurugram",
    type: "Full-time",
    current: false,
    bullets: [
      "Developed RESTful APIs using Node.js, Express.js, MSSQL, and Knex for multiple client projects.",
      "Built features including Google Drive integration and payslip PDF generation.",
      "Followed SOLID design principles for clean, scalable, and maintainable code.",
    ],
    tags: ["Node.js", "Express.js", "MSSQL", "SOLID Principles"],
  },
  {
    title: "Intern — Node.js Developer",
    company: "Azikya Software Solution Pvt. Ltd.",
    period: "Dec 2022 – Jun 2023",
    location: "Gurugram",
    type: "Internship",
    current: false,
    bullets: [
      "Transitioned from web development intern to backend Node.js developer.",
      "Contributed to various API modules and gained hands-on experience in backend development.",
    ],
    tags: ["Node.js", "JavaScript", "REST APIs"],
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
