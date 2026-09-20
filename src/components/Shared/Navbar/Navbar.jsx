"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Activity", href: "/#github" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 sm:px-6 lg:px-8">
            {/* Desktop / Main Navbar Pill */}
            <nav
                className={`max-w-6xl mx-auto rounded-full transition-all duration-300 border ${scrolled
                        ? "bg-[rgba(246,247,251,0.75)] backdrop-blur-md border-[#E5E7EB] shadow-sm dark:bg-[#020817]/95 dark:border-blue-500/20 dark:shadow-lg dark:shadow-black/50"
                        : "bg-white/70 backdrop-blur-sm border-[#E5E7EB] dark:bg-[#080e22]/80 dark:border-white/10"
                    }`}
            >
                <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3">
                    {/* Logo */}
                    <a href="/" className="text-lg sm:text-xl font-bold text-emerald-500 dark:text-blue-400 tracking-wider shrink-0">
                        AZ<span className="text-[#111827] dark:text-white">.</span>
                    </a>

                    {/* Desktop Links with Original Hover Effect */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-[#475467] hover:text-[#047857] dark:text-gray-300 dark:hover:text-white transition-colors duration-200 group py-1"
                            >
                                {link.name}
                                {/* Previous Hover Underline / Glow Indicator */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 dark:bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full dark:shadow-[0_0_8px_#3b82f6]" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="/resume"
                            className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-[#059669] dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-md shadow-emerald-500/20 dark:shadow-blue-600/20"
                        >
                            Resume
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-[#475467] hover:text-[#047857] dark:text-gray-300 dark:hover:text-white focus:outline-none p-1"
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown Card */}
            {menuOpen && (
                <div className="md:hidden fixed left-0 right-0 top-20 z-50 px-4 sm:px-6">
                    <div className="mx-auto max-w-md bg-white/95 dark:bg-[#020817]/95 backdrop-blur-xl border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-6 shadow-xl dark:shadow-2xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                        {/* Header inside mobile menu */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#EDF1F5] dark:border-white/10">
                            <span className="text-lg font-bold text-emerald-500 dark:text-blue-400 tracking-wider">
                                AZ<span className="text-[#111827] dark:text-white">.</span>
                            </span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-[#6B7280] hover:text-[#047857] dark:text-gray-400 dark:hover:text-white transition-colors p-1"
                                aria-label="Close menu"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links with Hover Effects */}
                        <div className="flex flex-col gap-1 py-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="relative text-[#374151] hover:text-[#047857] dark:text-gray-300 dark:hover:text-blue-400 text-base font-medium py-2.5 px-3 rounded-lg hover:bg-[#ECFDF5] dark:hover:bg-white/5 transition-all group"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-3 border-t border-[#EDF1F5] dark:border-white/10 flex items-center gap-3">
                            <a
                                href="#resume"
                                onClick={() => setMenuOpen(false)}
                                className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-[#059669] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium shadow-md shadow-emerald-500/20 dark:shadow-blue-500/20 transition-all text-sm"
                            >
                                Resume
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}