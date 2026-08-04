"use client";

import { useEffect, useState, cloneElement } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { GitHubCalendar } from "react-github-calendar";

const USERNAME = "alfaazahmed7";

// Custom theme color palette for the calendar grid
const explicitTheme = {
    light: ["#0f172a", "#082f49", "#0369a1", "#06b6d4", "#38bdf8"],
    dark: ["#0f172a", "#082f49", "#0369a1", "#06b6d4", "#38bdf8"],
};

// ─── Animation Variants ───────────────────────────────────────────────────────
const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function GithubContributions() {
    const [totalContributions, setTotalContributions] = useState(0);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGithubStats() {
            try {
                setLoading(true);

                // Fetch User Repositories to calculate top language breakdown
                const reposRes = await fetch(
                    `https://api.github.com/users/${USERNAME}/repos?per_page=100`
                );
                const reposData = await reposRes.json();

                if (Array.isArray(reposData)) {
                    const langCounts = {};
                    let totalReposWithLang = 0;

                    reposData.forEach((repo) => {
                        if (repo.language) {
                            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                            totalReposWithLang++;
                        }
                    });

                    const palette = ["bg-cyan-400", "bg-blue-500", "bg-yellow-400", "bg-indigo-400"];
                    const sortedLangs = Object.entries(langCounts)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 4)
                        .map(([name, count], index) => ({
                            name,
                            percentage: Math.round((count / totalReposWithLang) * 100),
                            color: palette[index] || "bg-slate-500",
                        }));

                    setLanguages(sortedLangs);
                }
            } catch (error) {
                console.error("Error fetching repository statistics:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchGithubStats();
    }, []);

    // Handler to parse real values from react-github-calendar data
    const handleCalendarData = (contributions) => {
        if (!contributions || contributions.length === 0) return;

        const total = contributions.reduce((acc, day) => acc + day.count, 0);
        setTotalContributions(total);

        let current = 0;
        let longest = 0;
        let tempStreak = 0;

        for (let i = 0; i < contributions.length; i++) {
            if (contributions[i].count > 0) {
                tempStreak++;
                if (tempStreak > longest) longest = tempStreak;
            } else {
                tempStreak = 0;
            }
        }

        for (let i = contributions.length - 1; i >= 0; i--) {
            if (contributions[i].count > 0) {
                current++;
            } else if (i === contributions.length - 1) {
                continue;
            } else {
                break;
            }
        }

        setCurrentStreak(current);
        setLongestStreak(longest);
    };

    const stats = [
        {
            label: "Total Contributions",
            value: loading ? "..." : totalContributions.toLocaleString(),
            subtext: "In the last year",
            icon: (
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
        },
        {
            label: "Current Streak",
            value: loading ? "..." : `${currentStreak} Days`,
            subtext: "Keep the momentum",
            icon: (
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
            ),
        },
        {
            label: "Longest Streak",
            value: loading ? "..." : `${longestStreak} Days`,
            subtext: "Personal best",
            icon: (
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            label: "Most Active Time",
            value: "Tue @ 9 PM",
            subtext: "Peak productivity",
            icon: (
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="github" className="relative pb-32 lg:pb-52 px-6 sm:px-10 lg:px-20 max-w-[1500px] mx-auto w-full scroll-mt-40">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-8"
            >
                {/* Section Header */}
                <div className="flex flex-col">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-black text-white tracking-tight"
                    >
                        GitHub <span className="text-[#4895ef]">Contributions</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-base text-slate-400 max-w-[700px] mt-2"
                    >
                        Real-time overview of my open-source activity, commit history, and coding consistency across projects.
                    </motion.p>
                </div>

                {/* Top Cards: Stats Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</span>
                                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                                    {stat.value}
                                </div>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">{stat.subtext}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Contribution Graph Card */}
                <motion.div
                    variants={itemVariants}
                    className="p-5 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col gap-4 overflow-hidden"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                        <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Live Contribution Heatmap
                        </span>
                        <span className="text-xs text-slate-500">Last 365 Days</span>
                    </div>

                    {/* Calendar Heatmap Container */}
                    <div className="overflow-x-auto pb-2 pt-1 flex justify-center">
                        <GitHubCalendar
                            username={USERNAME}
                            theme={explicitTheme}
                            fontSize={12}
                            blockSize={13}
                            blockMargin={4}
                            colorScheme="dark"
                            renderBlock={(block, activity) =>
                                cloneElement(block, {
                                    "data-tooltip-id": "react-github-tooltip",
                                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                                })
                            }
                            transformData={(data) => {
                                handleCalendarData(data);
                                return data;
                            }}
                        />
                        {/* Styled Dark Tooltip */}
                        <Tooltip
                            id="react-github-tooltip"
                            style={{
                                backgroundColor: "#0f172a",
                                color: "#38bdf8",
                                border: "1px solid rgba(14,165,233,0.3)",
                                borderRadius: "8px",
                                fontSize: "12px",
                                padding: "6px 12px",
                            }}
                        />
                    </div>

                    {/* Legend Footer */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800/60">
                        <span>{totalContributions.toLocaleString()} contributions in the past year</span>
                        <div className="flex items-center gap-1.5">
                            <span>Less</span>
                            <div className="w-3 h-3 rounded-[3px] bg-slate-900/60 border border-slate-800/80" />
                            <div className="w-3 h-3 rounded-[3px] bg-cyan-950/80 border border-cyan-800/40" />
                            <div className="w-3 h-3 rounded-[3px] bg-cyan-700/80" />
                            <div className="w-3 h-3 rounded-[3px] bg-cyan-500" />
                            <div className="w-3 h-3 rounded-[3px] bg-blue-400" />
                            <span>More</span>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Card: Top Languages Breakdown */}
                {languages.length > 0 && (
                    <motion.div
                        variants={itemVariants}
                        className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col gap-4"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-300">Most Used Languages</span>
                            <span className="text-xs text-slate-500">Calculated from public repositories</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-3 w-full rounded-full bg-slate-800/80 overflow-hidden flex gap-0.5 p-0.5">
                            {languages.map((lang) => (
                                <div
                                    key={lang.name}
                                    style={{ width: `${lang.percentage}%` }}
                                    className={`h-full rounded-full ${lang.color} transition-all duration-500`}
                                />
                            ))}
                        </div>

                        {/* Legend Items */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                            {languages.map((lang) => (
                                <div key={lang.name} className="flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                                    <span className="text-xs font-medium text-slate-300">{lang.name}</span>
                                    <span className="text-xs text-slate-500 ml-auto">{lang.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}