"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "System Design", "Redis"],
  },
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React.js", "React Native", "HTML5", "CSS3 / Tailwind", "TypeScript", "EJS"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "Mongoose", "SQL / MSSQL", "Sequelize", "Knex ORM"],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git / GitHub", "Postman", "Swagger", "JIRA", "Jest (Unit Testing)", "Nodemailer"],
  },
];

const certs = [
  "Programming in Python",
  "Postman API Testing — Step by Step for Beginners",
];

export default function Skills() {
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
    <section id="skills" ref={ref} className="fade-in-section py-24 px-6 bg-[#0D1420]/50">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#3B82F6] text-sm font-mono mb-3 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // skills & tools
        </p>
        <h2
          className="text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          My <span style={{ color: "#3B82F6" }}>Tech Stack</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#0D1420] border border-[#1E2D45] rounded-2xl p-6 card-hover"
            >
              <div className="text-2xl mb-2">{group.icon}</div>
              <h3
                className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-2.5 py-1 bg-[#111827] border border-[#1E2D45] rounded-lg text-[#8BA3C0] text-xs cursor-default"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-[#0D1420] border border-[#1E2D45] rounded-2xl p-6">
          <h3
            className="text-white font-semibold mb-4 flex items-center gap-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span>🏆</span> Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-xl text-[#60A5FA] text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
