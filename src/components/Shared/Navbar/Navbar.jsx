"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ─── SMOOTH SCROLL HANDLER ──────────────────────────────────────
    const handleScrollClick = (e, href) => {
        if (href === "#") {
            e.preventDefault();
            window.lenis?.scrollTo(0, {
                duration: 1.2,
                immediate: false
            });
            return;
        }

        if (href.startsWith("#")) {
            e.preventDefault();

            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.lenis?.scrollTo(targetElement, {
                    offset: -64,
                    duration: 1.2,
                    immediate: false
                });

                if (!window.lenis) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };

    return (
        <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 lg:px-8">
            <nav
                className={`max-w-6xl mx-auto rounded-full transition-all duration-300 border ${scrolled
                        ? "bg-[#0a0e1a]/90 backdrop-blur-md border-blue-500/20 shadow-lg shadow-black/50"
                        : "bg-[#0d1326]/80 backdrop-blur-sm border-white/10"
                    }`}
            >
                <div className="px-6 sm:px-8">
                    <div className="flex items-center justify-between h-14">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-[#3b82f6] text-xl font-extrabold tracking-tight hover:text-blue-400 transition-colors duration-200 font-mono"
                        >
                            AZ<span className="text-blue-400">.</span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-2 lg:gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleScrollClick(e, link.href)}
                                    className="relative px-2 py-1 text-sm font-medium text-gray-300 transition-all duration-200 hover:text-white group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3b82f6] rounded-full transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Side Tools */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/resume"
                                className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-semibold text-white bg-[#3b82f6] rounded-full hover:bg-blue-500 active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40"
                            >
                                Resume
                            </Link>

                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                                className="md:hidden p-1.5 text-gray-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
                            >
                                {menuOpen ? (
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden rounded-b-3xl ${menuOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"}`}>
                    <div className="border-t border-white/10 px-6 flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    setMenuOpen(false);
                                    handleScrollClick(e, link.href);
                                }}
                                className="px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#3b82f6] rounded-full hover:bg-blue-500 transition-all duration-200 text-center"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}