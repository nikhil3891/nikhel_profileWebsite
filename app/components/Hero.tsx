"use client";
import { useEffect, useRef } from "react";

const roles = ["MERN Stack Developer", "Node.js Backend Engineer", "React & React Native Dev", "API Architect"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const current = roles[i % roles.length];
      if (!roleRef.current) return;
      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          i++;
        }
      }
      timeout = setTimeout(type, deleting ? 40 : 80);
    }
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating code badge */}
      <div
        className="absolute top-32 right-12 hidden lg:flex items-center gap-2 bg-[#0D1420] border border-[#1E2D45] rounded-lg px-4 py-2 text-xs text-[#4B6282] animate-float"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-[#3B82F6]">const</span>
        <span className="text-[#E2EAF4]">dev</span>
        <span className="text-[#8BA3C0]">=</span>
        <span className="text-green-400">"nikhel"</span>
      </div>
      <div
        className="absolute bottom-40 left-12 hidden lg:flex items-center gap-2 bg-[#0D1420] border border-[#1E2D45] rounded-lg px-4 py-2 text-xs text-[#4B6282] animate-float"
        style={{ animationDelay: "2s", fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-purple-400">await</span>
        <span className="text-[#E2EAF4]">hire</span>
        <span className="text-[#8BA3C0]">(</span>
        <span className="text-green-400">"me"</span>
        <span className="text-[#8BA3C0]">)</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Available for hire & freelance
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Nikhel{" "}
          <span className="text-glow" style={{ color: "#3B82F6" }}>
            Tiwariy
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className="text-xl md:text-2xl text-[#8BA3C0] mb-6 h-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span ref={roleRef} className="text-[#60A5FA]" />
          <span className="animate-pulse text-[#3B82F6]">|</span>
        </div>

        {/* Tagline */}
        <p
          className="text-[#8BA3C0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          2.5+ years crafting scalable backend systems, RESTful APIs, and
          full-stack applications. From fintech to CRM — turning ideas into
          production-grade software.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            { val: "2.5+", label: "Years Exp." },
            { val: "10+", label: "Projects Built" },
            { val: "5+", label: "Companies" },
            { val: "100%", label: "Committed" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.val}
              </div>
              <div className="text-xs text-[#4B6282] mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border border-[#1E2D45] hover:border-[#3B82F6] text-[#E2EAF4] font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Work
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-tiwari-n1991"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border border-[#1E2D45] hover:border-[#3B82F6] text-[#8BA3C0] hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-[#4B6282]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#3B82F6] to-transparent" />
        </div>
      </div>
    </section>
  );
}
