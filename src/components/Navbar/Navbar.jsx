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
import { useState } from "react";

const navItems = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "About", path: "/about", icon: FiUser },
    { name: "Projects", path: "/projects", icon: FiFolder },
    { name: "Contact", path: "/contact", icon: FiMail },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">

            <div className="relative">

                {/* 🌌 Soft ambient background glow (VERY subtle now) */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-slate-900/10 to-cyan-500/10 blur-3xl opacity-70" />

                {/* 🧊 Navbar glass layer */}
                <div className="relative backdrop-blur-xl bg-[#0b0f19]/70 border-b border-white/5">

                    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-white/90 font-semibold text-xl tracking-wide hover:text-white transition"
                        >
                            Alfaaz<span className="text-indigo-400">.dev</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">

                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.path;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className={`relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${isActive
                                                ? "text-indigo-300"
                                                : "text-white/60 hover:text-white/90"
                                            }`}
                                    >
                                        <Icon size={17} className="opacity-90" />

                                        {item.name}

                                        {/* Active indicator (clean underline) */}
                                        {isActive && (
                                            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile Button */}
                        <button
                            className="md:hidden text-white/80 hover:text-white text-2xl transition"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX /> : <FiMenu />}
                        </button>

                    </div>

                    {/* 📱 Mobile Menu */}
                    {mobileOpen && (
                        <div className="md:hidden px-4 pb-4">

                            <div className="flex flex-col gap-2 bg-[#0f172a]/90 backdrop-blur-xl rounded-xl p-3 border border-white/5">

                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.path;

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive
                                                    ? "bg-indigo-500/10 text-indigo-300"
                                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            <Icon size={18} />
                                            {item.name}
                                        </Link>
                                    );
                                })}

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}