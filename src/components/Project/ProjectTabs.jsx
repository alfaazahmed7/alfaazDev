"use client";

import { motion } from "framer-motion";
import { Layers, LayoutGrid, Server } from "lucide-react";

const ProjectFilterTabs = ({ activeTab, setActiveTab, projects = [] }) => {

    const getProjectCount = (tabId) => {
        if (tabId === "All") return projects.length;
        return projects.filter((project) => project.stack === tabId).length;
    };

    const tabs = [
        { id: "All", label: "All Projects", icon: LayoutGrid },
        { id: "Full-Stack", label: "Full-Stack", icon: Layers },
        { id: "Frontend", label: "Frontend", icon: Server },
    ];

    return (
        <div className="w-full flex justify-center items-center my-10 px-4">
            {/* ── RESPONSIVE CHANGES MADE HERE ─────────────────────────────────
              1. Added 'overflow-x-auto' to allow safe swipe/scroll on small widths (< 380px).
              2. Added 'scrollbar-hide' class (and inline style rules) to hide the ugly native scrollbar.
              3. Added 'w-full' combined with 'max-w-xl' so it scales fluidly.
            */}
            <div
                className="relative flex items-center gap-1 p-1.5 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl w-full max-w-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] overflow-x-auto scrollbar-none"
                style={{
                    msOverflowStyle: 'none',  /* IE and Edge */
                    scrollbarWidth: 'none',   /* Firefox */
                }}
            >
                {/* Tailwind custom styles container inline variant to wipe out Chrome/Safari scrollbars */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    div::-webkit-scrollbar { display: none; }
                `}} />

                {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    const isActive = activeTab === tab.id;
                    const count = getProjectCount(tab.id);

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            /* ── BUTTON RESPONSIVE PADDING ────────────────────
                              Adjusted mobile horizontal padding ('px-3' up to 'sm:px-5') 
                              to make sure everything fits naturally without clipping text.
                            */
                            className={`relative flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 select-none z-10 whitespace-nowrap flex-1
                                ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabGlow"
                                    className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 rounded-xl -z-10 shadow-[0_4px_20px_rgba(139,92,246,0.25)] border-t border-white/10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            <IconComponent
                                size={14}
                                className={`transition-transform duration-300 flex-shrink-0 ${isActive ? "scale-110 text-white" : "text-slate-400"}`}
                            />

                            {/* TAB LABEL */}
                            <span>{tab.label}</span>

                            {/* DYNAMIC COUNT BADGE */}
                            <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-colors duration-300 flex-shrink-0
                                ${isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-slate-800 text-slate-500"}`}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}

            </div>
        </div>
    );
};

export default ProjectFilterTabs;