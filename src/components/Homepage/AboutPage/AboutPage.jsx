"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import aboutPageImage from "@/assests/alfaaz.jpg";

// ─── Stats row ────────────────────────────────────────────────────────────────
const stats = [
  { value: "8+", label: "Months Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "1+", label: "Happy Clients" },
];

// ─── Reusable fade-up variant ─────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  // Trigger animations when sections enter the viewport
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 lg:px-20 pb-32 lg:pb-52 max-w-[1500px] mx-auto">

      {/* ════════════════════════════════════════
          TWO-COLUMN LAYOUT
          Left  → text content
          Right → image + floating badges
      ════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row items-center gap-20">

        {/* ══════════════════════════
            LEFT — Text Content
        ══════════════════════════ */}
        <div ref={leftRef} className="flex-1 max-w-2xl">

          {/* ── Section label ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8 lg:mb-16"
          >
            <span className="h-px w-8 bg-cyan-50 mt-10 lg:mt-0" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400 mt-10 lg:mt-0">
              About Me
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0}
            className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-3"
          >
            Hello there 👋
          </motion.p>

          {/* Name headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0.1}
            className="text-4xl sm:text-5xl font-black leading-tight mb-2 text-white"
          >
            I&apos;m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Alfaaz Ahmed
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-slate-400 font-semibold text-base sm:text-lg mb-8 tracking-wide"
          >
            Frontend Engineer &nbsp;|&nbsp; Building High-Performance, User-Friendly Web Apps
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0.25}
            className="h-px bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-transparent mb-8"
          />

          {/* Bio paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0.3}
            className="text-slate-400 text-base leading-relaxed mb-6"
          >
            I&apos;m a passionate{" "}
            <span className="text-white font-medium">Full-Stack Developer</span> dedicated to
            crafting web applications that excel in both speed and design. I utilize the latest
            technologies and prioritize a user-centric approach to build scalable, responsive, and
            secure frontend architectures for businesses.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0.85}
            className="flex flex-wrap gap-4 sm:gap-8 mb-6 sm:mb-10"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </span>

                <span className="text-[10px] sm:text-xs tracking-wide mt-0 sm:mt-0.5 text-slate-500">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            custom={0.95}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {/* Primary */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold tracking-wide text-white uppercase"
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
                boxShadow: "0 0 20px rgba(14,165,233,0.3)",
              }}
            >
              Schedule a Meeting

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold tracking-wide text-slate-300 uppercase border border-slate-700 bg-slate-800/40 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors duration-200"
            >
              Resume

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* ══════════════════════════
    RIGHT — Image + Badges
══════════════════════════ */}
        <div ref={rightRef} className="w-full lg:flex-1 flex justify-center items-center">
          <div className="relative w-64 sm:w-72 lg:w-80 xl:w-96">

            {/* ── Rotating gradient ring behind image ── */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #0ea5e9, #6366f1, #0ea5e9)",
                padding: "2px",
                borderRadius: "1rem",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* ── Glow behind image ── */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "0 0 60px rgba(14,165,233,0.15), 0 0 120px rgba(99,102,241,0.1)",
              }}
            />

            {/* ── Profile image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={rightInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden border border-slate-700/60"
              style={{ background: "rgba(15,23,42,0.6)" }}
            >
              {/* Replace src with your real image path */}
              <Image
                src={aboutPageImage}
                alt="Abdul Basit — Developer"
                width={500}
                height={600}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ aspectRatio: "4/5" }}
                priority
              />

              {/* Overlay gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(2,8,23,0.9) 0%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* ── Floating badge — top right: Available ── */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={rightInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="absolute -top-4 -right-4 sm:-right-6 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-emerald-500/30 bg-slate-900/90 backdrop-blur-sm shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide whitespace-nowrap">
                Available for Work
              </span>
            </motion.div>

            {/* ── Floating badge — bottom left: Stack ── */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={rightInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-5 -left-4 sm:-left-6 flex items-center gap-3 px-3 sm:px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-sm shadow-lg"
            >
              <div className="flex -space-x-1.5">
                {[
                  { color: "#38bdf8", label: "Next.js" },
                  { color: "#818cf8", label: "JavaScript" },
                  { color: "#34d399", label: "Node.js" },
                ].map((t) => (
                  <span
                    key={t.label}
                    title={t.label}
                    className="w-6 h-6 rounded-full border-2 border-slate-900"
                    style={{ background: t.color }}
                  />
                ))}
              </div>
              <div>
                <p className="text-xs text-white font-semibold leading-none mb-0.5">Tech Stack</p>
                <p className="text-[10px] text-slate-500">Next · JS · Node</p>
              </div>
            </motion.div>

            {/* ── Floating badge — right middle: Experience ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={rightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 flex flex-col items-center px-3 sm:px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-sm shadow-lg"
            >
              <span
                className="text-2xl font-black leading-none"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                8+
              </span>
              <span className="text-[10px] text-slate-500 tracking-wide mt-0.5 text-center leading-tight">
                Months<br />Exp.
              </span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}