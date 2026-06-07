"use client";

import { motion } from "framer-motion";
import { Layers, LayoutGrid, Server } from "lucide-react";

// 1. Added "projects" to the props destructured parameters
const ProjectFilterTabs = ({ activeTab, setActiveTab, projects }) => {

    // 2. Helper function to calculate project totals dynamically
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
            <div className="relative flex items-center gap-1.5 p-1.5 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl max-w-full sm:max-w-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)]">

                {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    const isActive = activeTab === tab.id;
                    const count = getProjectCount(tab.id); // Get dynamic count here

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 select-none z-10 whitespace-nowrap
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
                                size={15}
                                className={`transition-transform duration-300 ${isActive ? "scale-110 text-white" : "text-slate-400"}`}
                            />

                            {/* TAB LABEL */}
                            <span>{tab.label}</span>

                            {/* DYNAMIC COUNT BADGE */}
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-colors duration-300
                                ${isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-slate-800 text-slate-500 group-hover:text-slate-400"}`}
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