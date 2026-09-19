"use client";

import projects from "@/data/projectsData";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe, Layout, Server, Sparkles, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaCode, FaGithub } from "react-icons/fa";

export default function ProjectDetailsPage() {
    const params = useParams();
    const router = useRouter();

    // Find the specific project based on the URL ID parameter
    const project = projects.find((p) => p.id === Number(params.id));

    // Fallback if someone manually types an invalid ID in the URL
    if (!project) {
        return (
            <div className="min-h-screen bg-[#F6F7FB] dark:bg-[#020617] flex flex-col items-center justify-center text-[#1F2937] dark:text-slate-100">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <button
                    onClick={() => router.push("/")}
                    className="px-4 py-2 bg-emerald-500 hover:bg-[#059669] dark:bg-violet-600 text-white rounded-xl text-sm transition-colors"
                >
                    Back to Portfolio
                </button>
            </div>
        );
    }

    // Motion Animation Constants
    const fadeInUp = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-[#F6F7FB] dark:bg-[#020617] text-[#374151] dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* AMBIENT GLOW BACKGROUND EFFECT */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 dark:bg-violet-600/10 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 dark:bg-cyan-500/10 blur-[160px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* BACK NAVIGATION */}
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
                    <Link
                        href="/#projects" // Links back to your main page anchor
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-emerald-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors group"
                    >
                        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                        Back to Showcase
                    </Link>
                </motion.div>

                {/* HEADER / IDENTITY HERO SECTION */}
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="relative p-2.5 bg-white dark:bg-slate-900/90 rounded-2xl border border-[#E5E7EB] dark:border-slate-800 shadow-sm dark:shadow-xl">
                            <Image
                                src={project.icon}
                                alt={`${project.title} logo`}
                                width={52}
                                height={52}
                                className="rounded-xl"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] dark:text-white">
                                    {project.title}
                                </h1>
                                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-slate-800 text-emerald-600 dark:text-cyan-400 rounded-md">
                                    {project.stack}
                                </span>
                                {project.featured && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 bg-[#ECFDF5] dark:bg-violet-500/10 border border-[#A7F3D0] dark:border-violet-500/20 text-emerald-700 dark:text-violet-300 rounded-md dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                        <Sparkles size={11} /> Featured
                                    </span>
                                )}
                            </div>
                            <p className="text-[#6B7280] dark:text-slate-400 mt-1 text-sm sm:text-base">Production-grade web architecture</p>
                        </div>
                    </div>

                    {/* LIVE URL ACTION */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-[#059669] dark:bg-gradient-to-r dark:from-[#4895ef] dark:to-fuchsia-600 dark:hover:from-[#4361ee] dark:hover:to-fuchsia-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/20 dark:shadow-violet-600/20 dark:hover:shadow-violet-600/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Globe size={16} />
                            Launch Live Deployment
                            <ExternalLink size={13} />
                        </a>
                    </div>
                </motion.div>

                {/* DYNAMIC TWO-COLUMN SHOWCASE LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT SIDE: VISUAL DISPLAY & COPY OVERVIEW */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* HERO IMAGE BANNER (No dynamic scaling - flat & crispy presentation) */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#E5E7EB] dark:border-slate-800 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm dark:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-slate-950/30 dark:via-transparent dark:to-transparent z-10 pointer-events-none" />
                            <Image
                                src={project.image}
                                alt={`${project.title} Full Interface Screenshot`}
                                fill
                                className="object-cover object-top"
                                priority
                                sizes="(max-width: 1200px) 100vw, 800px"
                            />
                        </motion.div>

                        {/* DESCRIPTION BLOCK */}
                        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-white dark:bg-slate-900/40 backdrop-blur-md border border-[#E5E7EB] dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm dark:shadow-none">
                            <h2 className="text-lg font-bold text-[#111827] dark:text-white flex items-center gap-2 tracking-wide uppercase">
                                <Layout size={18} className="text-emerald-600 dark:text-violet-400" />
                                Project Core Overview
                            </h2>
                            <p className="text-[#374151] dark:text-slate-300 text-base leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: CONTROL RIG / REPOS & STACK SUMMARY */}
                    <div className="space-y-6">

                        {/* TARGETED REPOSITORY ENGINE */}
                        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-white dark:bg-slate-900/40 backdrop-blur-md border border-[#E5E7EB] dark:border-slate-800/60 rounded-2xl p-6 space-y-4 shadow-sm dark:shadow-xl">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] dark:text-slate-400 flex items-center gap-2">
                                <Terminal size={15} className="text-emerald-600 dark:text-cyan-400" />
                                Source Management
                            </h3>

                            <div className="space-y-3 pt-1">
                                {/* ALWAYS RENDER CLIENT OR STANDARD MAIN REPO */}
                                <a
                                    href={project.githubClientUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3.5 bg-[#F8FAFC] hover:bg-[#ECFDF5] dark:bg-slate-950/40 dark:hover:bg-slate-950 border border-[#E5E7EB] dark:border-slate-800/60 hover:border-[#A7F3D0] dark:hover:border-violet-500/40 rounded-xl transition-all duration-300 group"
                                >
                                    <div className="flex items-center gap-3">
                                        <FaGithub size={18} className="text-[#6B7280] group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-white transition-colors" />
                                        <div>
                                            <p className="text-sm font-semibold text-[#111827] dark:text-white">
                                                {project.githubServerUrl ? "Client Repository" : "Source Code"}
                                            </p>
                                            <p className="text-xs text-[#6B7280] dark:text-slate-500">
                                                {project.githubServerUrl ? "UI & State Architecture" : "View complete codebase"}
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink size={13} className="text-[#94A3B8] group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-violet-400 transition-colors" />
                                </a>

                                {/* SMART CONDITIONAL RENDERING FOR SERVER-SIDE CODES */}
                                {project.githubServerUrl && (
                                    <a
                                        href={project.githubServerUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3.5 bg-[#F8FAFC] hover:bg-[#ECFDF5] dark:bg-slate-950/40 dark:hover:bg-slate-950 border border-[#E5E7EB] dark:border-slate-800/60 hover:border-[#A7F3D0] dark:hover:border-violet-500/40 rounded-xl transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaCode size={18} className="text-[#6B7280] group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-white transition-colors" />
                                            <div>
                                                <p className="text-sm font-semibold text-[#111827] dark:text-white">Server Repository</p>
                                                <p className="text-xs text-[#6B7280] dark:text-slate-500">API, Routing & Control Logic</p>
                                            </div>
                                        </div>
                                        <ExternalLink size={13} className="text-[#94A3B8] group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-violet-400 transition-colors" />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        {/* SYSTEM ENGINE STACK CORE */}
                        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-white dark:bg-slate-900/40 backdrop-blur-md border border-[#E5E7EB] dark:border-slate-800/60 rounded-2xl p-6 space-y-4 shadow-sm dark:shadow-xl">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] dark:text-slate-400 flex items-center gap-2">
                                <Server size={15} className="text-emerald-600 dark:text-violet-400" />
                                Core Technologies Used
                            </h3>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-[11px] font-medium px-3 py-1 rounded-lg border border-transparent dark:border-slate-800 bg-[#F3F4F6] dark:bg-slate-950/40 text-[#374151] dark:text-slate-400 hover:border-[#A7F3D0] dark:hover:border-violet-500/30 hover:bg-[#ECFDF5] hover:text-[#047857] dark:hover:text-violet-200 transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}