"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experienceData";
import { Calendar, MapPin, CheckCircle2, ExternalLink, Code2 } from "lucide-react";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const typeStyles = {
    Internship:
        "bg-sky-500/10 text-sky-600 border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30",
    "Full-time":
        "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30",
    Freelance:
        "bg-amber-500/10 text-amber-600 border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
    Contract:
        "bg-indigo-500/10 text-indigo-600 border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30",
};

const experiences = [...experienceData].sort((a, b) => b.id - a.id);

export default function Experience() {
    return (
        <section
            id="experience"
            className="w-full px-6 sm:px-10 lg:px-20 pb-32 lg:pb-52 max-w-[1500px] mx-auto scroll-mt-40 overflow-x-hidden"
        >
            <motion.h2
                className="text-4xl font-bold text-[#111827] dark:text-white mb-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Professional{" "}
                <span className="text-emerald-600 dark:text-[#4895ef]">
                    Experience
                </span>
            </motion.h2>

            <motion.p
                className="text-[#6B7280] dark:text-slate-400 mb-10 max-w-[700px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                My professional journey, where I collaborate with teams, build
                real-world applications, and continuously grow as a Full-Stack
                engineer.
            </motion.p>

            <div className="relative">
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute left-4 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-emerald-500/70 via-emerald-500/30 to-transparent dark:from-cyan-400/70 dark:via-indigo-400/30 dark:to-transparent"
                    aria-hidden="true"
                />

                <motion.ol
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {experiences.map((exp, index) => (
                        <motion.li
                            key={exp.id}
                            variants={itemVariants}
                            className="relative pl-12 sm:pl-16"
                        >
                            <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2 + index * 0.15,
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 18,
                                }}
                                className="absolute left-4 top-6 -translate-x-1/2"
                                aria-hidden="true"
                            >
                                <span className="relative flex h-4 w-4">
                                    {exp.endDate === "Present" && (
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 dark:bg-cyan-400" />
                                    )}
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 dark:bg-cyan-400 border-2 border-white dark:border-slate-900 shadow" />
                                </span>
                            </motion.span>

                            <motion.article
                                whileHover={{ y: -4 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="group rounded-2xl border border-[#E5E7EB] dark:border-slate-700/60 bg-white dark:bg-[#0b1221] p-5 sm:p-6 shadow-sm dark:shadow-md hover:border-emerald-400/60 dark:hover:border-[#4895ef]/60 transition-colors"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                    <div className="min-w-0">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white leading-tight">
                                            {exp.role}
                                        </h3>
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-1.5 text-sm font-semibold text-emerald-600 dark:text-[#4895ef] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                                        >
                                            {exp.company}
                                            <ExternalLink
                                                size={13}
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </div>
                                    <span
                                        className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                                            typeStyles[exp.type] ||
                                            "bg-gray-500/10 text-gray-600 border-gray-500/30 dark:text-gray-400"
                                        }`}
                                    >
                                        {exp.type}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#6B7280] dark:text-slate-400 mb-4">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Calendar
                                            size={14}
                                            className="text-emerald-600 dark:text-cyan-400 shrink-0"
                                            aria-hidden="true"
                                        />
                                        <span>{exp.startDate}</span>
                                        <span
                                            className="text-[#9CA3AF] dark:text-slate-600"
                                            aria-hidden="true"
                                        >
                                            —
                                        </span>
                                        <span
                                            className={
                                                exp.endDate === "Present"
                                                    ? "text-emerald-600 dark:text-cyan-400 font-medium"
                                                    : ""
                                            }
                                        >
                                            {exp.endDate}
                                        </span>
                                    </span>

                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin
                                            size={14}
                                            className="text-emerald-600 dark:text-cyan-400 shrink-0"
                                            aria-hidden="true"
                                        />
                                        {exp.location}
                                    </span>
                                </div>

                                <p className="text-[#374151] dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {exp.responsibilities?.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-slate-500 mb-2">
                                            Responsibilities
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map(
                                                (item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2 text-sm text-[#374151] dark:text-slate-300"
                                                    >
                                                        <CheckCircle2
                                                            size={15}
                                                            className="mt-0.5 shrink-0 text-emerald-600 dark:text-cyan-400"
                                                            aria-hidden="true"
                                                        />
                                                        <span>{item}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {exp.techStack?.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {exp.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border border-[#E5E7EB] dark:border-slate-700/60 bg-[#F9FAFB] dark:bg-slate-900/40 text-[#374151] dark:text-slate-300"
                                            >
                                                <Code2
                                                    size={12}
                                                    className="text-emerald-600 dark:text-cyan-400"
                                                    aria-hidden="true"
                                                />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.article>
                        </motion.li>
                    ))}
                </motion.ol>
            </div>
        </section>
    );
}
