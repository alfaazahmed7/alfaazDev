"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiUser,
    FiFolder,
    FiMail,
    FiMenu,
    FiX,
} from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValue,
    useReducedMotion,
} from "framer-motion";

const navItems = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "About", path: "/about", icon: FiUser },
    { name: "Projects", path: "/projects", icon: FiFolder },
    { name: "Contact", path: "/contact", icon: FiMail },
];

/* ── Spotlight (throttled via rAF, skipped on reduced motion) ────── */
function NavSpotlight() {
    const ref = useRef(null);
    const x = useMotionValue(-999);
    const y = useMotionValue(-999);
    const rafId = useRef(null);
    const shouldReduce = useReducedMotion();

    useEffect(() => {
        if (shouldReduce) return;

        const move = (e) => {
            if (rafId.current) return;
            rafId.current = requestAnimationFrame(() => {
                if (!ref.current) return;
                const rect = ref.current.closest("header").getBoundingClientRect();
                x.set(e.clientX - rect.left - 150);
                y.set(e.clientY - rect.top - 150);
                rafId.current = null;
            });
        };

        window.addEventListener("mousemove", move, { passive: true });
        return () => {
            window.removeEventListener("mousemove", move);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [shouldReduce]);

    if (shouldReduce) return null;

    return (
        <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                    x,
                    y,
                    background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
                    willChange: "transform",
                }}
            />
        </div>
    );
}

/* ── Nav Link ────────────────────────────────────────────────────── */
function NavLink({ item, index }) {
    const pathname = usePathname();
    const isActive = pathname === item.path;
    const Icon = item.icon;
    const [hovered, setHovered] = useState(false);
    const shouldReduce = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            style={{ willChange: "transform" }}
        >
            <Link
                href={item.path}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex items-center gap-2 text-sm font-medium group px-1"
            >
                {/* Hover bg */}
                <AnimatePresence>
                    {hovered && !isActive && (
                        <motion.span
                            className="absolute inset-0 rounded-lg bg-white/5"
                            style={{ margin: "-6px -10px" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        />
                    )}
                </AnimatePresence>

                {/* Active pill — layoutId animates between links smoothly */}
                {isActive && (
                    <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-lg bg-indigo-500/15 border border-indigo-400/20"
                        style={{ margin: "-6px -10px", willChange: "transform" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                )}

                {/* Icon — only wobbles on hover, no loop */}
                <motion.span
                    animate={{
                        rotate: hovered ? [0, -12, 12, 0] : 0,
                        color: isActive
                            ? "#a5b4fc"
                            : hovered
                            ? "#ffffff"
                            : "rgba(255,255,255,0.55)",
                    }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10"
                    style={{ willChange: "transform" }}
                >
                    <Icon size={16} />
                </motion.span>

                {/* Label */}
                <motion.span
                    animate={{
                        color: isActive
                            ? "#a5b4fc"
                            : hovered
                            ? "#ffffff"
                            : "rgba(255,255,255,0.6)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                >
                    {item.name}
                </motion.span>

                {/* Active underline — layoutId glides between links */}
                {isActive && (
                    <motion.span
                        layoutId="activeUnderline"
                        className="absolute -bottom-[14px] left-0 w-full h-[2px] rounded-full bg-indigo-400"
                        style={{
                            boxShadow: "0 0 8px rgba(99,102,241,0.7)",
                            willChange: "transform",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                )}
            </Link>
        </motion.div>
    );
}

/* ── Main Navbar ─────────────────────────────────────────────────── */
export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const shouldReduce = useReducedMotion();

    useEffect(() => {
        return scrollY.on("change", (v) => setScrolled(v > 20));
    }, [scrollY]);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <motion.div
                className="relative"
                initial={shouldReduce ? false : { y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ willChange: "transform" }}
            >
                {/* Static ambient glow — pure CSS, zero JS cost */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-slate-900/10 to-cyan-500/10 blur-3xl opacity-70 pointer-events-none" />

                {/* Glass layer */}
                <motion.div
                    className="relative backdrop-blur-xl border-b border-white/5"
                    animate={{
                        backgroundColor: scrolled
                            ? "rgba(11,15,25,0.88)"
                            : "rgba(11,15,25,0.60)",
                        boxShadow: scrolled
                            ? "0 8px 32px rgba(0,0,0,0.35)"
                            : "0 0px 0px rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.35 }}
                >
                    <NavSpotlight />

                    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative z-10">

                        {/* Logo */}
                        <motion.div
                            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                        >
                            <Link href="/" className="group relative flex items-center gap-0.5">
                                <span className="relative text-white/90 font-bold text-xl tracking-wide group-hover:text-white transition-colors duration-200">
                                    Alfaaz
                                </span>
                                {/* .dev — opacity only, cheapest possible animation */}
                                <motion.span
                                    className="text-indigo-400 font-bold text-xl"
                                    animate={{ opacity: [1, 0.55, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    .dev
                                </motion.span>
                                {/* Blinking cursor — opacity only */}
                                <motion.span
                                    className="w-[2px] h-5 bg-indigo-400 ml-0.5 rounded-full"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.9, repeat: Infinity }}
                                />
                            </Link>
                        </motion.div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item, i) => (
                                <NavLink key={item.name} item={item} index={i} />
                            ))}
                        </nav>

                        {/* Mobile Button */}
                        <motion.button
                            className="md:hidden text-white/80 hover:text-white text-2xl transition z-10"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            whileTap={{ scale: 0.88 }}
                            initial={shouldReduce ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                        className="block"
                                        style={{ willChange: "transform" }}
                                    >
                                        <FiX />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                        className="block"
                                        style={{ willChange: "transform" }}
                                    >
                                        <FiMenu />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                className="md:hidden px-4 pb-4 overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                            >
                                <div className="flex flex-col gap-1 bg-[#0f172a]/90 backdrop-blur-xl rounded-xl p-3 border border-white/5">
                                    {navItems.map((item, i) => {
                                        const Icon = item.icon;
                                        const isActive = pathname === item.path;
                                        return (
                                            <motion.div
                                                key={item.name}
                                                initial={shouldReduce ? false : { opacity: 0, x: -16 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.25, delay: i * 0.06 }}
                                                style={{ willChange: "transform" }}
                                            >
                                                <Link
                                                    href={item.path}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 relative group ${
                                                        isActive
                                                            ? "text-indigo-300"
                                                            : "text-white/60 hover:text-white"
                                                    }`}
                                                >
                                                    {isActive ? (
                                                        <motion.span
                                                            layoutId="mobileActivePill"
                                                            className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-400/20"
                                                            style={{ willChange: "transform" }}
                                                        />
                                                    ) : (
                                                        <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                                                    )}
                                                    <Icon size={18} className="relative z-10" />
                                                    <span className="relative z-10 font-medium text-sm">{item.name}</span>
                                                    {/* Active dot — opacity only, very cheap */}
                                                    {isActive && (
                                                        <motion.span
                                                            className="ml-auto relative z-10 w-1.5 h-1.5 rounded-full bg-indigo-400"
                                                            animate={{ opacity: [1, 0.3, 1] }}
                                                            transition={{ duration: 1.5, repeat: Infinity }}
                                                        />
                                                    )}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Bottom scan line — one-shot only, no repeat */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                    />
                </motion.div>
            </motion.div>
        </header>
    );
}