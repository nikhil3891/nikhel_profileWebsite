import type { Metadata } from "next";
import "./globals.css";
import RevealSections from "./components/RevealSections";

export const metadata: Metadata = {
  title: "Nikhel Tiwaari — MERN Stack Developer",
  description:
    "Full-stack MERN developer with 2.5+ years experience in Node.js, React, React Native & scalable backend systems. Available for hire and freelance.",
  keywords: [
    "MERN Stack Developer",
    "Node.js Developer",
    "React Developer",
    "React Native",
    "Backend Developer",
    "Nikhel Tiwaari",
    "Full Stack Developer India",
    "Freelance Developer",
  ],
  authors: [{ name: "Nikhel Tiwaari" }],
  openGraph: {
    title: "Nikhel Tiwaari — MERN Stack Developer",
    description: "Full-stack MERN developer available for hire and freelance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24 md:scroll-pt-28">
      <body className="antialiased">
        <RevealSections />
        {children}
      </body>
    </html>
  );
}
