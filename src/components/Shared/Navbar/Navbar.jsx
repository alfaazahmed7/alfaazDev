"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "#banner" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
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
                        ? "bg-[#020817]/95 backdrop-blur-md border-blue-500/20 shadow-lg shadow-black/50"
                        : "bg-[#080e22]/80 backdrop-blur-sm border-white/10"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold text-blue-400 tracking-wider">
                        AZ<span className="text-white">.</span>
                    </a>

                    {/* Desktop Links with Original Hover Effect */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group py-1"
                            >
                                {link.name}
                                {/* Previous Hover Underline / Glow Indicator */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#3b82f6]" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop Action Button */}
                    <div className="hidden md:block">
                        <a
                            href="#resume"
                            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-md shadow-blue-600/20"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1"
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
            </nav>

            {/* Mobile Menu Dropdown Card */}
            {menuOpen && (
                <div className="md:hidden fixed inset-x-4 top-20 z-50 max-w-md mx-auto">
                    <div className="bg-[#020817]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                        {/* Header inside mobile menu */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <span className="text-lg font-bold text-blue-400 tracking-wider">
                                AZ<span className="text-white">.</span>
                            </span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors p-1"
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
                                    className="relative text-gray-300 hover:text-blue-400 text-base font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all group"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-3 border-t border-white/10">
                            <a
                                href="#resume"
                                onClick={() => setMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-500/20 transition-all text-sm"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}