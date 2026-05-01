"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaStackOverflow,
} from "react-icons/fa";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from "framer-motion";
import bannerMiddleImg from "@/assests/banner2.png";

/* ─── Magnetic Social Icon (throttled via rAF) ───────────────────── */
function MagneticIcon({ children, hoverColor }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });
    const rafId = useRef(null);

    const handleMouseMove = (e) => {
        if (rafId.current) return;
        rafId.current = requestAnimationFrame(() => {
            const rect = ref.current.getBoundingClientRect();
            x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
            y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
            rafId.current = null;
        });
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY, willChange: "transform" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.3 }}
            className={`cursor-pointer transition-colors duration-200 ${hoverColor}`}
        >
            {children}
        </motion.div>
    );
}

/* ─── Typewriter ─────────────────────────────────────────────────── */
function Typewriter({ text, delay = 0 }) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), delay * 1000);
        return () => clearTimeout(t);
    }, [delay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 45);
        return () => clearInterval(interval);
    }, [started, text]);

    return (
        <span>
            {displayed}
            {displayed.length < text.length && started && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-sky-500 ml-0.5 align-middle"
                />
            )}
        </span>
    );
}

/* ─── Animated Word — simplified (no rotateX, just y + opacity) ─── */
function AnimatedWord({ word, index, shouldReduce }) {
    return (
        <motion.span
            className="inline-block"
            initial={shouldReduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.8 + index * 0.08, ease: [0.215, 0.61, 0.355, 1.0] }}
            style={{ display: "inline-block", marginRight: "0.3em", willChange: "transform" }}
        >
            {word}
        </motion.span>
    );
}

/* ─── Pure-CSS particle — zero JS animation cost ────────────────── */
function StaticParticle({ x, y, size, delay, duration }) {
    return (
        <div
            className="absolute rounded-full bg-sky-400/25 pointer-events-none"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                animation: `floatParticle ${duration}s ${delay}s ease-in-out infinite`,
            }}
        />
    );
}

/* ─── Only 6 particles (down from 18), positions fixed ──────────── */
const particles = [
    { id: 0, x: 8, y: 15, size: 10, delay: 0, duration: 6 },
    { id: 1, x: 80, y: 10, size: 7, delay: 1, duration: 7 },
    { id: 2, x: 20, y: 75, size: 12, delay: 2, duration: 5 },
    { id: 3, x: 90, y: 60, size: 6, delay: 0.5, duration: 8 },
    { id: 4, x: 50, y: 85, size: 9, delay: 1.5, duration: 6 },
    { id: 5, x: 65, y: 30, size: 8, delay: 3, duration: 7 },
];

const descWords =
    "I'm an aspiring Front-End / Full-Stack Developer passionate about building responsive and user-friendly web applications.".split(" ");

/* ─── Main Banner ────────────────────────────────────────────────── */
export default function Banner() {
    const shouldReduce = useReducedMotion();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
    const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);
    const rafId = useRef(null);

    const handleMouseMove = (e) => {
        if (shouldReduce || rafId.current) return;
        rafId.current = requestAnimationFrame(() => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
            rafId.current = null;
        });
    };

    return (
        <>
            <style>{`
                @keyframes floatParticle {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.25; }
                    50%       { transform: translateY(-20px) translateX(8px); opacity: 0.55; }
                }
                @keyframes shimmer {
                    0%   { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
            `}</style>

            <div
                className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-white relative overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                {/* ── Static blobs — pure CSS, zero JS cost ── */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
                <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />

                {/* ── 6 pure-CSS particles ── */}
                {!shouldReduce && particles.map((p) => <StaticParticle key={p.id} {...p} />)}

                {/* ── Grid overlay ── */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* ── Container ── */}
                <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen gap-10">

                        {/* ── Left Content ── */}
                        <div className="max-w-xl">

                            {/* Badge + greeting */}
                            <motion.div
                                initial={shouldReduce ? false : { opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
                                style={{ willChange: "transform" }}
                            >
                                <motion.div
                                    className="inline-block mb-3 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-600 text-sm font-semibold tracking-widest uppercase"
                                    initial={shouldReduce ? false : { opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.45, delay: 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    👋 Welcome to my portfolio
                                </motion.div>

                                <p className="text-2xl md:text-4xl font-extrabold text-slate-800">
                                    Hi, I am Alfaaz
                                </p>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                className="text-3xl md:text-5xl font-extrabold text-sky-600 mt-2"
                                initial={shouldReduce ? false : { opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                style={{ willChange: "transform" }}
                            >
                                <Typewriter text="Full Stack Developer" delay={0.6} />
                            </motion.h1>

                            {/* Underline */}
                            <motion.div
                                className="h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 mt-2"
                                initial={{ width: 0 }}
                                animate={{ width: "60%" }}
                                transition={{ duration: 0.9, delay: 1.8, ease: "easeOut" }}
                            />

                            {/* Description */}
                            <p className="mt-4 text-slate-600 leading-relaxed font-medium overflow-hidden">
                                {descWords.map((word, i) => (
                                    <AnimatedWord key={i} word={word} index={i} shouldReduce={shouldReduce} />
                                ))}
                            </p>

                            {/* Social Icons */}
                            <motion.div
                                className="flex items-center gap-5 mt-6 text-2xl text-slate-700"
                                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                {[
                                    { Icon: FaStackOverflow, color: "hover:text-orange-500", label: "StackOverflow" },
                                    { Icon: FaInstagram, color: "hover:text-pink-500", label: "Instagram" },
                                    { Icon: FaGithub, color: "hover:text-black", label: "GitHub" },
                                    { Icon: FaLinkedin, color: "hover:text-blue-600", label: "LinkedIn" },
                                ].map(({ Icon, color, label }, i) => (
                                    <MagneticIcon key={label} hoverColor={color}>
                                        <motion.div
                                            initial={shouldReduce ? false : { opacity: 0, scale: 0, rotate: -180 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{
                                                duration: 0.45,
                                                delay: 1.5 + i * 0.1,
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                            style={{ willChange: "transform" }}
                                        >
                                            <Icon />
                                        </motion.div>
                                    </MagneticIcon>
                                ))}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button
                                className="mt-8 px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow-lg relative overflow-hidden"
                                initial={shouldReduce ? false : { opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.8 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(14,165,233,0.55)" }}
                                whileTap={{ scale: 0.97 }}
                                style={{ willChange: "transform" }}
                            >
                                {/* CSS shimmer — no JS loop */}
                                <span
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)",
                                        backgroundSize: "200% 100%",
                                        animation: "shimmer 2.8s ease-in-out infinite",
                                    }}
                                />
                                <span className="relative z-10 flex items-center gap-2">
                                    <motion.span
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        ⬇
                                    </motion.span>
                                    Download Resume
                                </span>
                            </motion.button>
                        </div>

                        {/* ── Right Image — 3D tilt + float ── */}
                        <motion.div
                            className="relative w-full md:w-1/2 flex justify-center"
                            initial={shouldReduce ? false : { opacity: 0, scale: 0.85, x: 70 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1.0] }}
                            style={{ perspective: 800, willChange: "transform" }}
                        >
                            <motion.div
                                style={{
                                    rotateX: shouldReduce ? 0 : rotateX,
                                    rotateY: shouldReduce ? 0 : rotateY,
                                    transformStyle: "preserve-3d",
                                    willChange: "transform",
                                }}
                                animate={shouldReduce ? {} : { y: [0, -16, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Static glow ring — no JS animation */}
                                <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl scale-110 pointer-events-none" />

                                {/* One simple orbiting dot — only y + opacity */}
                                {!shouldReduce && (
                                    <motion.div
                                        className="absolute w-3.5 h-3.5 rounded-full bg-sky-500"
                                        style={{
                                            top: "10%", right: "-4%",
                                            boxShadow: "0 0 10px rgba(14,165,233,0.7)",
                                            willChange: "transform",
                                        }}
                                        animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                )}

                                <div className="relative w-[280px] sm:w-[320px] md:w-[420px] lg:w-[580px] h-[280px] sm:h-[320px] md:h-[420px] lg:h-[480px]">
                                    <Image
                                        src={bannerMiddleImg}
                                        alt="developer illustration"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

                {/* ── Scroll indicator ── */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
                    <motion.div
                        className="w-[1px] h-8 bg-gradient-to-b from-sky-400 to-transparent"
                        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: "top" }}
                    />
                </motion.div>

                {/* Decorative glow */}
                <div className="absolute -bottom-20 left-0 w-full h-40 bg-white/60 blur-2xl" />
            </div>
        </>
    );
}