"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/30"
                    : "bg-[#0a0e1a]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-[#3b82f6] text-2xl font-extrabold tracking-tight hover:text-blue-400 transition-colors duration-200 font-mono"
                    >
                        AZ.
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative px-3 py-1.5 text-sm font-medium text-gray-300 rounded-md transition-all duration-200 hover:text-[#3b82f6] hover:bg-blue-500/10 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#3b82f6] rounded-full transition-all duration-300 group-hover:w-4/5" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Theme Toggle + Resume + Hamburger */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            aria-label="Toggle theme"
                            className="p-2 text-gray-400 hover:text-[#3b82f6] transition-colors duration-200 rounded-full hover:bg-blue-500/10"
                        >
                            {isDark ? (
                                /* Moon icon */
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                                    />
                                </svg>
                            ) : (
                                /* Sun icon */
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-semibold text-white bg-[#3b82f6] rounded-lg hover:bg-blue-500 active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40"
                        >
                            Resume
                        </a>

                        {/* Hamburger - Mobile */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="md:hidden p-2 text-gray-400 hover:text-[#3b82f6] transition-colors duration-200 rounded-md hover:bg-blue-500/10"
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
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#0d1121] border-t border-white/5 px-4 py-3 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2.5 text-sm font-medium text-gray-300 rounded-md hover:text-[#3b82f6] hover:bg-blue-500/10 transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#3b82f6] rounded-lg hover:bg-blue-500 transition-all duration-200 text-center"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}