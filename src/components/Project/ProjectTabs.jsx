"use client";

import { motion } from "framer-motion";
import { Layers, LayoutGrid, Server } from "lucide-react";

const ProjectFilterTabs = ({ activeTab, setActiveTab, projects = [] }) => {

    const getProjectCount = (tabId) => {
        if (tabId === "All") return projects.length;
        return projects.filter((project) => project.stack === tabId).length;
    };

    const tabs = [
        { id: "All", label: "All Projects", shortLabel: "All", icon: LayoutGrid },
        { id: "Full-Stack", label: "Full-Stack", shortLabel: "Full-Stack", icon: Layers },
        { id: "Frontend", label: "Frontend", shortLabel: "Frontend", icon: Server },
    ];

    return (
        <div className="w-full flex justify-center items-center my-10 px-4">
            {/* ── RESPONSIVE FIX ──────────────────────────────────────────────
              1. 'overflow-x-auto' + 'max-w-full min-w-0' contains swipe scrolling
                 inside the tab bar itself (it can never widen the page).
              2. Buttons use 'flex-1 basis-0 min-w-0' so the three labels share the
                 available width instead of forcing a fixed intrinsic width.
              3. Labels shrink/hide progressively below 'sm' to fit a 350px screen.
            */}
            <div
                data-hide-scroll
                className="relative flex items-center gap-1 p-1.5 bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-[#E5E7EB] dark:border-slate-800/80 rounded-2xl w-full max-w-xl shadow-sm dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] overflow-x-auto overflow-y-hidden max-w-full scrollbar-none"
                style={{
                    msOverflowStyle: 'none',  /* IE and Edge */
                    scrollbarWidth: 'none',   /* Firefox */
                }}
            >
                {/* Scoped scrollbar hiding (was previously a global `div::-webkit-scrollbar` rule that leaked site-wide) */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    div[data-hide-scroll]::-webkit-scrollbar { display: none; }
                `}} />

                {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    const isActive = activeTab === tab.id;
                    const count = getProjectCount(tab.id);

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            /* ── BUTTON RESPONSIVE SIZING ────────────────────
                              flex-1 + basis-0 + min-w-0 lets all three tabs share the
                              available width; padding/labels step down below 'sm' so the
                              row fits a 350px viewport without clipping.
                            */
                            className={`relative flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 select-none z-10 flex-1 basis-0 min-w-0
                                ${isActive ? "text-white" : "text-[#6B7280] hover:text-[#047857] dark:text-slate-400 dark:hover:text-slate-200"}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabGlow"
                                    className="absolute inset-0 bg-emerald-500 dark:bg-gradient-to-r dark:from-[#4895ef] dark:to-fuchsia-600/90 rounded-xl -z-10 shadow-[0_4px_20px_rgba(16,185,129,0.25)] dark:shadow-[0_4px_20px_rgba(139,92,246,0.25)] border-t border-white/10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            <IconComponent
                                size={14}
                                className={`transition-transform duration-300 flex-shrink-0 ${isActive ? "scale-110 text-white" : "text-[#94A3B8] dark:text-slate-400"}`}
                            />

                            {/* TAB LABEL — shortened on very small screens */}
                            <span className="truncate">
                                <span className="sm:hidden">{tab.shortLabel}</span>
                                <span className="hidden sm:inline">{tab.label}</span>
                            </span>

                            {/* DYNAMIC COUNT BADGE */}
                            <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-colors duration-300 flex-shrink-0
                                ${isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-[#F3F4F6] text-[#6B7280] dark:bg-slate-800 dark:text-slate-500"}`}
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