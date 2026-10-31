"use client";

import Link from "next/link";
import { outfit } from "@/lib/fonts";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
    return (
        <div className={`w-11/12 lg:w-8/12 mx-auto min-h-screen pt-28 pb-16 text-[#374151] dark:text-white ${outfit.className}`}>

            {/* Container to give it that structured paper feel */}
            <div className="max-w-[800px] mx-auto text-left font-sans antialiased text-[15px] leading-normal space-y-6 bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm dark:shadow-none">

                {/* Header */}
                <div className="text-center space-y-1 break-words">
                    <h1 className="text-3xl font-bold tracking-wide text-black dark:text-white uppercase">
                        ALFAAZ AHMED
                    </h1>
                    <p className="text-[#111827] dark:text-white font-bold text-sm sm:text-base break-words">
                        Full-Stack MERN Developer
                    </p>
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm break-words">
                        Noakhali, Bangladesh | +880 16101 97258 |{" "}
                        <a href="mailto:alfaazahmed010@gmail.com" className="text-emerald-600 dark:text-blue-400">alfaazahmed010@gmail.com</a>{" "}
                        | <Link href="https://github.com/alfaazahmed7" target="_blank" className="text-emerald-600 dark:text-blue-400">Github</Link>{" "}
                        | <Link href="https://linkedin.com/in/alfaazahmed7" target="_blank" className="text-emerald-600 dark:text-blue-400">LinkedIn</Link>{" "}
                        | <Link href="https://alfaazdev.vercel.app" target="_blank" className="text-emerald-600 dark:text-blue-400">Portfolio</Link>
                    </p>
                </div>

                {/* Career Objective */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        CAREER OBJECTIVE
                    </h2>
                    <p className="text-[#374151] dark:text-gray-300">
                        To leverage expertise in React.js, Next.js, Node.js, Express.js, and MongoDB to develop scalable, secure, and user-focused web applications while applying strong problem-solving skills and modern software development practices.
                    </p>
                </section>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        TECHNICAL SKILLS
                    </h2>
                    <div className="text-[#374151] dark:text-gray-300 space-y-0.5">
                        <p><strong className="text-[#111827] dark:text-gray-200">Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
                        <p><strong className="text-[#111827] dark:text-gray-200">Frontend:</strong> React.js, Next.js, Tailwind CSS, Responsive Design</p>
                        <p><strong className="text-[#111827] dark:text-gray-200">Backend:</strong> Node.js, Express.js, RESTful APIs, MongoDB, Mongoose</p>
                        <p><strong className="text-[#111827] dark:text-gray-200">Authentication & Security:</strong> Better Auth, JWT, Authorization, RBAC</p>
                        <p><strong className="text-[#111827] dark:text-gray-200">UI & Tools:</strong> HeroUI, DaisyUI, Figma, Git, GitHub, VS Code, npm, ESLint, Prettier</p>
                        <p><strong className="text-[#111827] dark:text-gray-200">Deployment:</strong> Vercel, Netlify, Render</p>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-3">
                        PROJECTS
                    </h2>

                    <div className="space-y-4">
                        {/* Project 1: FITORA */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-y-1 gap-x-4 items-baseline">
                                <h3 className="font-bold text-[#111827] dark:text-gray-100 text-[16px]">FITORA — Fitness Management Platform</h3>
                                <div className="flex flex-wrap items-center gap-x-1 text-sm text-[#6B7280] dark:text-gray-400 sm:justify-self-end">
                                    <Link href="https://fitora-fitness.vercel.app" target="_blank" className="text-emerald-600 dark:text-blue-400">Live Demo</Link>
                                    <span>|</span>
                                    <Link href="https://github.com/Developer-Moy/Fitora" target="_blank" className="text-emerald-600 dark:text-blue-400">GitHub Repo</Link>
                                </div>
                            </div>
                            <p className="text-sm text-[#374151] dark:text-gray-300 mt-1">
                                <strong className="text-[#111827] dark:text-gray-200">Role:</strong> Full-Stack Developer | Team Project
                            </p>
                            <p className="text-sm text-[#374151] dark:text-gray-300">
                                <strong className="text-[#111827] dark:text-gray-200">Tech Stack:</strong> Next.js, TypeScript, Node.js, Express.js, MongoDB, Better Auth
                            </p>
                            <p className="text-sm text-[#111827] dark:text-gray-200 font-semibold mt-1">Team Contributions:</p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                                <li>Provides members with accessible fitness tools, clear membership plans, workout statistics, and streamlined subscription and billing experiences.</li>
                                <li>Enables administrators to monitor branch occupancy, track attendance, manage users and memberships, and oversee operations through role-based dashboards.</li>
                            </ul>
                            <p className="text-sm text-[#111827] dark:text-gray-200 font-semibold mt-1">Individual Contributions:</p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                                <li>Helps members discover trainers through public profiles featuring professional backgrounds, specializations, experience, ratings, and availability.</li>
                                <li>Enables branch administrators to track live attendance, monitor gym capacity, view available spots, and review paginated daily check-in records.</li>
                            </ul>
                        </div>

                        {/* Project 2: PROMPTAI */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-y-1 gap-x-4 items-baseline">
                                <h3 className="font-bold text-[#111827] dark:text-gray-100 text-[16px]">PROMPTAI — AI Prompt Marketplace</h3>
                                <div className="flex flex-wrap items-center gap-x-1 text-sm text-[#6B7280] dark:text-gray-400 sm:justify-self-end">
                                    <Link href="https://prompt-ai-client.vercel.app" target="_blank" className="text-emerald-600 dark:text-blue-400">Live Demo</Link>
                                    <span>|</span>
                                    <Link href="https://github.com/alfaazahmed7/promptAI-client" target="_blank" className="text-emerald-600 dark:text-blue-400">Client Repo</Link>
                                    <span>|</span>
                                    <Link href="https://github.com/alfaazahmed7/promptAI-server" target="_blank" className="text-emerald-600 dark:text-blue-400">Server Repo</Link>
                                </div>
                            </div>
                            <p className="text-sm text-[#374151] dark:text-gray-300 mt-1">
                                <strong className="text-[#111827] dark:text-gray-200">Tech Stack:</strong> Next.js, React, Node.js, Express.js, MongoDB
                            </p>
                            <p className="text-sm text-[#111827] dark:text-gray-200 font-semibold mt-1">Responsibilities:</p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                                <li>Enables users to discover, purchase, bookmark, and review AI prompts in one marketplace.</li>
                                <li>Helps creators publish prompts, track performance, and monitor earnings through dedicated dashboards.</li>
                                <li>Supports secure purchases and role-based access, while enabling admins to manage users, prompts, reports, and platform analytics.</li>
                            </ul>
                        </div>

                        {/* Project 3: LAUNCHDECK */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-y-1 gap-x-4 items-baseline">
                                <h3 className="font-bold text-[#111827] dark:text-gray-100 text-[16px]">LAUNCHDECK — Project Showcase Platform</h3>
                                <div className="flex flex-wrap items-center gap-x-1 text-sm text-[#6B7280] dark:text-gray-400 sm:justify-self-end">
                                    <Link href="https://launch-deck-fawn.vercel.app" target="_blank" className="text-emerald-600 dark:text-blue-400">Live Demo</Link>
                                    <span>|</span>
                                    <Link href="https://github.com/alfaazahmed7/launchDeck-client" target="_blank" className="text-emerald-600 dark:text-blue-400">Client Repo</Link>
                                    <span>|</span>
                                    <Link href="https://github.com/alfaazahmed7/launchDeck-server" target="_blank" className="text-emerald-600 dark:text-blue-400">Server Repo</Link>
                                </div>
                            </div>
                            <p className="text-sm text-[#374151] dark:text-gray-300 mt-1">
                                <strong className="text-[#111827] dark:text-gray-200">Tech Stack:</strong> TypeScript, Next.js, React, Node.js, Express.js, MongoDB
                            </p>
                            <p className="text-sm text-[#111827] dark:text-gray-200 font-semibold mt-1">Responsibilities:</p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                                <li>Helped developers discover relevant projects through search, filtering, sorting, and pagination.</li>
                                <li>Enabled authenticated developers to publish new projects and manage their own submissions.</li>
                                <li>Helped developers explore project information through dedicated detail pages.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        EDUCATION
                    </h2>
                    <div className="text-[#374151] dark:text-gray-300">
                        <p className="font-bold text-[#111827] dark:text-gray-100">HSC | GOVERNMENT MUJIB COLLEGE</p>
                        <p className="text-sm text-[#6B7280] dark:text-gray-400">Noakhali, Bangladesh | 2022–2024</p>
                    </div>
                </section>

                {/* Languages */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        LANGUAGES
                    </h2>
                    <p className="text-[#374151] dark:text-gray-300">
                        <strong className="text-[#111827] dark:text-gray-200">Bengali</strong> — Native | <strong className="text-[#111827] dark:text-gray-200">English</strong> — Professional Working Proficiency
                    </p>
                </section>
            </div>

            {/* Action Button outside the layout container */}
            <div className="text-center mt-12">
                <a
                    href="/Alfaaz_Ahmed_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-[#059669] dark:bg-blue-600 dark:hover:bg-blue-700 transition rounded-lg font-medium text-white"
                >
                    <FaDownload />
                    Preview Resume
                </a>
            </div>
        </div>
    );
}