"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="fade-in-section py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p
            className="text-[#3B82F6] text-sm font-mono mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // about me
          </p>
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            NIKHIL TIWARI
          </h2>
          <div className="text-[#60A5FA] font-mono mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Full-Stack MERN Developer | Node.js • React.js • Next.js • NestJS | 3+ Years Experience
          </div>
          <p
            className="text-[#8BA3C0] mb-4 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Full-Stack MERN Developer with 3+ years of experience architecting and delivering
            production-grade, multi-tenant SaaS applications using Node.js, Express.js, NestJS, MongoDB,
            Redis and React.js. Shipped 249+ REST APIs across fintech, payroll, CRM and e-commerce
            platforms, with hands-on expertise in JWT/RBAC security, API versioning, BullMQ job queues
            and database optimisation.
          </p>
          <p
            className="text-[#8BA3C0] mb-6 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Currently founder-engineer of RoadPass — a multi-tenant bus-booking SaaS platform. I
            authored the BRD and am building the Dockerized backend, operator/admin dashboards and
            customer web & mobile apps in parallel.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="mailto:8.nikhil3@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[#60A5FA] hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✉️ 8.nikhil3@gmail.com
            </a>
            <span className="text-[#1E2D45]">|</span>
            <a
              href="tel:+919625905712"
              className="inline-flex items-center gap-2 text-sm text-[#60A5FA] hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              📞 +91-9625905712
            </a>
            <span className="text-[#1E2D45]">|</span>
            <span className="text-sm text-[#8BA3C0]">Greater Noida, India</span>
            <span className="text-[#1E2D45]">|</span>
            <a href="https://linkedin.com/in/nikhil-tiwari-n1991" className="text-sm text-[#60A5FA] hover:text-white">LinkedIn</a>
            <span className="text-[#1E2D45]">|</span>
            <a href="https://github.com/nikhil3891" className="text-sm text-[#60A5FA] hover:text-white">GitHub</a>
          </div>
          <div className="mt-4">
            <div className="text-xs text-[#4B6282] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Selected live projects</div>
            <ul className="list-disc list-inside text-[#8BA3C0]">
              <li><a href="https://bus-booking-users-page.vercel.app" className="text-[#60A5FA] hover:underline">RoadPass — Customer Web</a></li>
              <li><a href="https://operator-page-dashboard.vercel.app" className="text-[#60A5FA] hover:underline">RoadPass — Operator Dashboard</a></li>
              <li><a href="https://safeemilocker.com" className="text-[#60A5FA] hover:underline">Safe EMI Locker</a></li>
            </ul>
          </div>
        </div>

        {/* Right: info cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🏢", label: "Current Role", value: "Founder-Engineer — RoadPass" },
            { icon: "📍", label: "Location", value: "Greater Noida, India" },
            { icon: "⚡", label: "Expertise", value: "Node.js, NestJS, Express" },
            { icon: "📱", label: "Also builds", value: "React.js, Next.js, React Native" },
            { icon: "🎓", label: "Education", value: "B.Tech Engineering" },
            { icon: "🌐", label: "Languages", value: "English & Hindi" },
          ].map((item, idx) => (
            <div
              key={item.label}
              className="stagger-item bg-[#0D1420] border border-[#1E2D45] rounded-xl p-4 card-hover"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div
                className="text-xs text-[#4B6282] mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </div>
              <div
                className="text-sm text-[#E2EAF4] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
