"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ── Glitch text — CSS only, zero JS ────────────────────────────── */
function GlitchText({ text }) {
    return (
        <>
            <style>{`
                /* Light: slate headline with emerald tint ghosting.
                   Dark: identical to before (slate-50 + sky/rose ghosts). */
                .glitch {
                    position: relative;
                    color: #111827;
                }
                .dark .glitch {
                    color: #f8fafc;
                }
                .glitch::before,
                .glitch::after {
                    content: attr(data-text);
                    position: absolute;
                    inset: 0;
                    background: transparent;
                }
                .glitch::before {
                    color: #10b981;
                    animation: glitch-top 3.5s infinite linear;
                    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
                }
                .dark .glitch::before {
                    color: #38bdf8;
                }
                .glitch::after {
                    color: #f43f5e;
                    animation: glitch-bottom 3.5s infinite linear;
                    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
                }
                @keyframes glitch-top {
                    0%,  90%, 100% { transform: translate(0); opacity: 1; }
                    92%            { transform: translate(-4px, -2px); opacity: 0.85; }
                    94%            { transform: translate(4px, 0px);  opacity: 0.85; }
                    96%            { transform: translate(-2px, 1px); opacity: 0.9;  }
                    98%            { transform: translate(3px, -1px); opacity: 0.85; }
                }
                @keyframes glitch-bottom {
                    0%,  90%, 100% { transform: translate(0); opacity: 1; }
                    91%            { transform: translate(3px, 1px);  opacity: 0.85; }
                    93%            { transform: translate(-4px, 0px); opacity: 0.85; }
                    95%            { transform: translate(2px, 2px);  opacity: 0.9;  }
                    97%            { transform: translate(-3px,-1px); opacity: 0.85; }
                }

                /* Scanlines overlay — dark only (light mode keeps the clean
                   homepage surface with no texture). */
                .scanlines {
                    opacity: 0;
                }
                .dark .scanlines {
                    opacity: 1;
                }
                .scanlines::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(0,0,0,0.08) 2px,
                        rgba(0,0,0,0.08) 4px
                    );
                    pointer-events: none;
                }

                /* Flicker animation for the screen */
                @keyframes flicker {
                    0%, 97%, 100% { opacity: 1; }
                    98%           { opacity: 0.85; }
                    99%           { opacity: 1; }
                    99.5%         { opacity: 0.9; }
                }

                /* Pulse ring */
                @keyframes pulseRing {
                    0%   { transform: scale(0.9); opacity: 0.6; }
                    100% { transform: scale(1.6); opacity: 0;   }
                }

                /* Floating stars — CSS only */
                @keyframes starFloat {
                    0%, 100% { transform: translateY(0px);   opacity: 0.4; }
                    50%      { transform: translateY(-14px);  opacity: 0.9; }
                }

                /* Dashed orbit ring spin */
                @keyframes orbitSpin {
                    from { transform: rotate(0deg);   }
                    to   { transform: rotate(360deg); }
                }
                @keyframes orbitSpinReverse {
                    from { transform: rotate(0deg);   }
                    to   { transform: rotate(-360deg); }
                }

                /* CRT power-on line sweep */
                @keyframes crtOn {
                    0%   { transform: scaleY(0.002); opacity: 1;   }
                    100% { transform: scaleY(1);     opacity: 1;   }
                }

                /* Blink cursor */
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%      { opacity: 0; }
                }

                /* ── Themed background layers (light = portfolio surface,
                      dark = original deep-space, unchanged) ── */
                .nf-page {
                    animation: flicker 8s infinite;
                }
                /* Light backdrop = exactly the homepage surface: the #f6f7fb
                   body colour with its soft top emerald glow. No additive
                   layers, no texture. Dark keeps deep space, unchanged. */
                .nf-space {
                    background: transparent;
                }
                .dark .nf-space {
                    background: radial-gradient(ellipse at center, #0c1a2e 0%, #030712 70%);
                }

                /* Star dots: hidden in light, sky glow in dark */
                .nf-star {
                    display: none;
                }
                .dark .nf-star {
                    display: block;
                    background-color: #7dd3fc;
                    opacity: 0.4;
                }
                .nf-halo {
                    display: none;
                }
                .dark .nf-halo {
                    display: block;
                    background: radial-gradient(
                        circle,
                        rgba(56,189,248,0.4) 0%,
                        rgba(99,102,241,0.2) 60%,
                        transparent 100%
                    );
                }
                /* Decorative orbit + pulse rings: dark only */
                .nf-rings {
                    display: none;
                }
                .dark .nf-rings {
                    display: block;
                }

                /* Terminal: white card in light, original slate-black in dark */
                .nf-term {
                    background-color: #ffffff;
                    box-shadow: 0 12px 32px -12px rgba(16,185,129,0.22),
                        0 4px 12px -4px rgba(15,23,42,0.06);
                }
                .dark .nf-term {
                    background-color: #0a0f1a;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
                }
                .nf-term-bar {
                    background-color: #f3f4f6;
                }
                .dark .nf-term-bar {
                    background-color: #0d1424;
                }
                .nf-term-caret {
                    background-color: #10b981;
                }
                .dark .nf-term-caret {
                    background-color: #38bdf8;
                }
            `}</style>
            <span className="glitch" data-text={text}>{text}</span>
        </>
    );
}

/* ── Star dot — pure CSS ─────────────────────────────────────────── */
function Star({ x, y, size, delay, duration }) {
    return (
        <div
            className="nf-star absolute rounded-full pointer-events-none"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                animation: `starFloat ${duration}s ${delay}s ease-in-out infinite`,
            }}
        />
    );
}

/* ── Fixed star positions (no Math.random in render) ────────────── */
const stars = [
    { id: 0, x: 5, y: 10, size: 3, delay: 0, duration: 5 },
    { id: 1, x: 15, y: 80, size: 2, delay: 1, duration: 6 },
    { id: 2, x: 25, y: 30, size: 4, delay: 0.5, duration: 7 },
    { id: 3, x: 40, y: 70, size: 2, delay: 2, duration: 5 },
    { id: 4, x: 55, y: 15, size: 3, delay: 1.5, duration: 6 },
    { id: 5, x: 70, y: 85, size: 2, delay: 0.8, duration: 8 },
    { id: 6, x: 80, y: 25, size: 4, delay: 3, duration: 5 },
    { id: 7, x: 90, y: 55, size: 2, delay: 0.3, duration: 7 },
    { id: 8, x: 60, y: 45, size: 3, delay: 2.5, duration: 6 },
    { id: 9, x: 35, y: 90, size: 2, delay: 1.2, duration: 5 },
];

/* ── Typewriter for terminal lines ──────────────────────────────── */
function TerminalLine({ text, delay = 0, color = "text-sky-400" }) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);
    const shouldReduce = useReducedMotion();

    useEffect(() => {
        if (shouldReduce) { setDisplayed(text); setDone(true); return; }
        const start = setTimeout(() => {
            let i = 0;
            const iv = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i >= text.length) { clearInterval(iv); setDone(true); }
            }, 35);
            return () => clearInterval(iv);
        }, delay * 1000);
        return () => clearTimeout(start);
    }, [text, delay, shouldReduce]);

    return (
        <p className={`font-mono text-sm ${color} leading-relaxed`}>
            <span className="text-[#94A3B8] dark:text-slate-500 select-none mr-2">$</span>
            {displayed}
            {!done && (
                <span
                    className="nf-term-caret inline-block w-[7px] h-[13px] ml-0.5 align-middle"
                    style={{ animation: "blink 0.8s step-end infinite" }}
                />
            )}
        </p>
    );
}

/* ── Main 404 Page ───────────────────────────────────────────────── */
export default function NotFound() {
    const shouldReduce = useReducedMotion();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <div
            className="nf-page min-h-screen relative overflow-hidden flex items-center justify-center"
            style={{ animationPlayState: mounted && !shouldReduce ? "running" : "paused" }}
        >
            {/* ── Static backdrop: light = quiet emerald wash, dark = deep space ── */}
            <div className="nf-space absolute inset-0 pointer-events-none" />

            {/* ── Ambient halo behind the 404 ── */}
            <div className="nf-halo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[420px] max-w-[92vw] aspect-square rounded-full blur-3xl pointer-events-none" />

            {/* ── Scanlines ── */}
            {!shouldReduce && <div className="scanlines absolute inset-0 pointer-events-none z-10" />}

            {/* ── Stars ── */}
            {!shouldReduce && stars.map((s) => <Star key={s.id} {...s} />)}

            {/* ── Dashed orbit rings (dark only — CSS spin, no JS) ── */}
            {!shouldReduce && (
                <div className="nf-rings">
                    <div
                        className="absolute rounded-full border border-dashed border-sky-900/50 pointer-events-none"
                        style={{
                            width: "min(520px, 88vw)", height: "min(520px, 88vw)",
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: "orbitSpin 18s linear infinite",
                        }}
                    />
                    <div
                        className="absolute rounded-full border border-dashed border-slate-700/40 pointer-events-none"
                        style={{
                            width: "min(700px, 114vw)", height: "min(700px, 114vw)",
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: "orbitSpinReverse 28s linear infinite",
                        }}
                    />
                </div>
            )}

            {/* ── Pulse rings behind 404 (dark only) ── */}
            {!shouldReduce && (
                <div className="nf-rings absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-60%)" }}>
                    {[0, 0.8, 1.6].map((delay, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full border border-sky-500/20"
                            style={{
                                width: "min(220px, 60vw)", height: "min(220px, 60vw)",
                                top: "calc(min(220px, 60vw) / -2)", left: "calc(min(220px, 60vw) / -2)",
                                animation: `pulseRing 3s ${delay}s ease-out infinite`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* ── Main content ── */}
            <div className="relative z-20 flex flex-col items-center text-center px-6">

                {/* 404 glitch number */}
                <motion.div
                    initial={shouldReduce ? false : { opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                    style={{ willChange: "transform" }}
                >
                    <h1
                        className="text-[7rem] sm:text-[14rem] font-black leading-none select-none tracking-tighter [text-shadow:0_0_60px_rgba(16,185,129,0.18),0_0_120px_rgba(16,185,129,0.08)] dark:[text-shadow:0_0_60px_rgba(56,189,248,0.25),0_0_120px_rgba(56,189,248,0.1)]"
                    >
                        <GlitchText text="404" />
                    </h1>
                </motion.div>

                {/* Divider line */}
                <motion.div
                    className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/60 dark:via-sky-500/60 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "280px" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />

                {/* Subtitle */}
                <motion.p
                    className="mt-5 text-[#6B7280] dark:text-slate-400 text-lg sm:text-xl font-light tracking-widest uppercase"
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    style={{ willChange: "transform" }}
                >
                    Page Not Found
                </motion.p>

                {/* Terminal block */}
                <motion.div
                    className="nf-term mt-8 w-full max-w-sm border border-[#E5E7EB] dark:border-slate-800 rounded-xl overflow-hidden text-left"
                    initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    style={{ willChange: "transform" }}
                >
                    {/* Terminal title bar */}
                    <div className="nf-term-bar flex items-center gap-2 px-4 py-2.5 border-b border-[#E5E7EB] dark:border-slate-800">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-xs text-[#6B7280] dark:text-slate-500 font-mono tracking-wide">bash — alfaaz.dev</span>
                    </div>
                    {/* Terminal lines */}
                    <div className="px-4 py-4 flex flex-col gap-2">
                        <TerminalLine text="GET /this-page HTTP/1.1" delay={1.1} color="text-[#374151] dark:text-slate-400" />
                        <TerminalLine text="Error: 404 Not Found" delay={1.9} color="text-rose-500 dark:text-rose-400" />
                        <TerminalLine text="Redirecting you to safety..." delay={2.7} color="text-emerald-600 dark:text-sky-400" />
                    </div>
                </motion.div>

                {/* CTA button — shared project CTA token (light: emerald, dark: unchanged sky→indigo) */}
                <motion.div
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    style={{ willChange: "transform" }}
                    className="mt-8"
                >
                    <Link href="/">
                        <motion.button
                            className="btn-primary-themed relative px-8 py-3 rounded-xl font-semibold text-white overflow-hidden border border-emerald-500/40 dark:border-sky-500/40 cursor-pointer"
                            style={{ willChange: "transform" }}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            {/* CSS shimmer */}
                            <span
                                className="absolute inset-0 pointer-events-none rounded-xl"
                                style={{
                                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                                    backgroundSize: "200% 100%",
                                    animation: "shimmer 2.5s ease-in-out infinite",
                                }}
                            />
                            <span className="relative z-10 flex items-center gap-2 text-sm tracking-wide">
                                <span>←</span> Back to Home
                            </span>
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Bottom hint */}
                <motion.p
                    className="mt-6 text-xs text-[#94A3B8] dark:text-slate-600 font-mono tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                >
                    ERR_PAGE_NOT_FOUND · alfaaz.dev
                </motion.p>
            </div>

            {/* Shimmer keyframe (reused from Banner) */}
            <style>{`
                @keyframes shimmer {
                    0%   { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
            `}</style>
        </div>
    );
}