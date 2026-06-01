"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation Variants ───────────────────────────────────────────────────────
// Each variant defines "hidden" (start) and "visible" (end) states.

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.7, delay, ease: "easeOut" },
    }),
};

// ─── Code Block Lines ─────────────────────────────────────────────────────────
// The fake code shown on the right side of the banner.

const codeLines = [
    { num: "01", parts: [{ text: "const ", color: "text-blue-400" }, { text: "developer", color: "text-cyan-300" }, { text: " = {", color: "text-slate-300" }] },
    { num: "02", parts: [{ text: "  name", color: "text-cyan-300" }, { text: ": ", color: "text-slate-300" }, { text: "'Alfaaz Ahmed'", color: "text-emerald-400" }, { text: ",", color: "text-slate-300" }] },
    { num: "03", parts: [{ text: "  focus", color: "text-cyan-300" }, { text: ": ", color: "text-slate-300" }, { text: "'Fullstack Mastery'", color: "text-emerald-400" }, { text: ",", color: "text-slate-300" }] },
    { num: "04", parts: [{ text: "  skills", color: "text-cyan-300" }, { text: ": ", color: "text-slate-300" }, { text: "['NextJS', 'ExpressJS,', 'MongoDB']", color: "text-emerald-400" }, { text: ",", color: "text-slate-300" }] },
    { num: "05", parts: [{ text: "  passionate", color: "text-cyan-300" }, { text: ": ", color: "text-slate-300" }, { text: "true", color: "text-blue-400" }, { text: ",", color: "text-slate-300" }] },
    { num: "06", parts: [{ text: "  motto", color: "text-cyan-300" }, { text: ": ", color: "text-slate-300" }, { text: '"Build with Purpose"', color: "text-emerald-400" }] },
    { num: "07", parts: [{ text: "};", color: "text-slate-300" }] },
    { num: "08", parts: [{ text: "developer", color: "text-cyan-300" }, { text: ".", color: "text-slate-300" }, { text: "showcase", color: "text-blue-400" }, { text: "();", color: "text-slate-300" }] },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
const socials = [
    {
        label: "GitHub",
        href: "https://github.com/alfaazahmed7",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/alfaazahmed7/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "CodeForces",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V15c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "https://twitter.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroBanner() {
    return (
        <section
            className="relative min-h-screen pt-16 flex items-center overflow-hidden"
        >
            {/* ── Subtle grid texture overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ── Glowing orb top-left ── */}
            <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
                }}
            />

            {/* ── Glowing orb bottom-right ── */}
            <div
                className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                }}
            />

            {/* ── Main content wrapper ── */}
            <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* ════════════════════════════
              LEFT SIDE — Text Content
          ════════════════════════════ */}
                    <div className="flex-1 max-w-xl">

                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="inline-block mb-3 lg:mb-6"
                        >
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/5">
                                Welcome to my Universe
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.15}
                            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-3 lg:mb-6"
                        >
                            {/* "Crafting" — white */}
                            <span className="text-white">Crafting </span>
                            {/* "Digital" — bright cyan-blue gradient */}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Digital
                            </span>
                            <br />
                            {/* "Masterpieces" — muted cyan-slate, slightly dimmed */}
                            <span className="text-slate-400">Masterpieces</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.3}
                            className="text-slate-400 text-base lg:text-lg leading-relaxed mb-4 lg:mb-8 font-light"
                        >
                            I am{" "}
                            <strong className="text-white font-semibold">Alfaaz Ahmed</strong>
                            , a professional{" "}
                            <span className="text-cyan-400 font-medium">Developer.</span>
                            <br />
                            dedicated to building high-performance, user-centric web
                            applications.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.45}
                            className="flex items-center gap-3 mb-5 lg:mb-10"
                        >
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.6}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                {/* Primary button */}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide text-white uppercase transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-95"
                                    style={{
                                        background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
                                        boxShadow: "0 0 20px rgba(14,165,233,0.3)",
                                    }}
                                >
                                    Let&apos;s Collaborate
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
                                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                        />
                                    </svg>
                                </Link>

                                {/* Secondary button */}
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide uppercase border border-slate-600 text-slate-300 bg-slate-800/40 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                                >
                                    Get Resume
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
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* ════════════════════════════
              RIGHT SIDE — Code Editor
          ════════════════════════════ */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="flex-1 w-full max-w-lg lg:max-w-xl"
                    >
                        {/* Editor window */}
                        <div
                            className="rounded-xl overflow-hidden border border-slate-700/60"
                            style={{
                                background: "rgba(15, 23, 42, 0.85)",
                                boxShadow:
                                    "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,179,237,0.05)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {/* Editor title bar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-900/60">
                                {/* Traffic lights */}
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                {/* File name tab */}
                                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                    Portfolio.js
                                </div>
                            </div>

                            {/* Code lines */}
                            <div className="px-6 py-6 font-mono text-sm sm:text-base leading-7 overflow-x-auto">
                                {codeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                                        className="flex items-start gap-4"
                                    >
                                        {/* Line number */}
                                        <span className="select-none text-slate-600 w-5 shrink-0 text-right">
                                            {line.num}
                                        </span>
                                        {/* Code text */}
                                        <span>
                                            {line.parts.map((part, j) => (
                                                <span key={j} className={part.color}>
                                                    {part.text}
                                                </span>
                                            ))}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}