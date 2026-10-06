"use client";

import Link from "next/link";
import { outfit } from "@/lib/fonts";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
    return (
        <div className={`w-11/12 lg:w-8/12 mx-auto min-h-screen pt-28 pb-16 text-[#374151] dark:text-white ${outfit.className}`}>

            {/* Container to give it that structured paper feel */}
            <div className="max-w-[800px] mx-auto text-left font-sans antialiased text-[15px] leading-normal space-y-6 bg-white dark:bg-transparent border border-[#E5E7EB] dark:border-transparent rounded-2xl p-6 sm:p-10 shadow-sm dark:shadow-none">

                {/* Header */}
                <div className="text-center space-y-1 break-words">
                    <h1 className="text-3xl font-bold tracking-wide text-black dark:text-white uppercase">
                        ALFAAZ AHMED
                    </h1>
                    <p className="text-[#111827] dark:text-white font-bold text-sm sm:text-base break-words">
                        Full-Stack MERN Developer | React.js | Next.js | Node.js | Express.js | MongoDB
                    </p>
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm break-words">
                        Noakhali, Bangladesh | +880 16101 97258 |{" "}
                        <a href="mailto:alfaazahmed010@gmail.com" className="text-emerald-600 dark:text-blue-400 underline">alfaazahmed010@gmail.com</a>{" "}
                        | <Link href="https://github.com/alfaazahmed7" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Github</Link>{" "}
                        | <Link href="https://linkedin.com/in/alfaazahmed7" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">LinkedIn</Link>{" "}
                        | <Link href="https://alfaazahmed7.github.io" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Portfolio</Link>
                    </p>
                </div>

                {/* Career Objective */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        CAREER OBJECTIVE
                    </h2>
                    <p className="text-[#374151] dark:text-gray-300 text-justify">
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
                            <h3 className="font-bold text-[#111827] dark:text-gray-100 text-[16px]">FITORA - Fitness Management Platform</h3>
                            <p className="text-sm text-[#374151] dark:text-gray-300">
                                <strong className="text-[#111827] dark:text-gray-200">Role:</strong> Full-Stack Developer | Team Project
                            </p>
                            <p className="text-sm text-[#374151] dark:text-gray-300">
                                <strong className="text-[#111827] dark:text-gray-200">Tech Stack:</strong> Next.js, TypeScript, Node.js, Express.js, MongoDB, Better Auth
                            </p>
                            <p className="text-sm text-[#6B7280] dark:text-gray-400 space-x-1">
                                <Link href="https://fit-75908.web.app" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Live Demo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/fitora-client" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">GitHub Repo</Link>
                            </p>
                            <p className="text-sm text-[#111827] dark:text-gray-200 font-semibold mt-1">Team Contributions:</p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                                <li>Collaborated on a full-stack fitness platform featuring role-based dashboards, membership management, attendance tracking, and administrative workflows.</li>
                                <li>Contributed to scalable RESTful APIs, responsive dashboard interfaces, authentication, RBAC, and real-time branch operations.</li>
                            </ul>
                            <p className="text-sm text-[#111827] dark:text-gray-200 font-semibold mt-1">Individual Contributions:</p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                                <li>Developed the Trainer Management module with Mongoose schema, CRUD APIs, validation, slug generation, soft deletion, and RBAC-protected routes.</li>
                                <li>Implemented live branch attendance and occupancy dashboards with check-in/check-out tracking, capacity monitoring, pagination, and real-time data.</li>
                            </ul>
                        </div>

                        {/* Project 2: PROMPTAI */}
                        <div>
                            <h3 className="font-bold text-[#111827] dark:text-gray-100 text-[16px]">PROMPTAI - AI Prompt Marketplace</h3>
                            <p className="text-sm text-[#374151] dark:text-gray-300">
                                <strong className="text-[#111827] dark:text-gray-200">Tech Stack:</strong> Next.js, React, Node.js, Express.js, MongoDB
                            </p>
                            <p className="text-sm text-[#6B7280] dark:text-gray-400 space-x-1">
                                <Link href="https://prompt-ai-client.vercel.app" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Live Demo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/promptAI-client" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Client Repo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/promptAI-server" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Server Repo</Link>
                            </p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 mt-1 space-y-0.5">
                                <li>Developed a full-stack AI prompt marketplace using Next.js, Express.js, MongoDB, and RESTful APIs.</li>
                                <li>Implemented authentication, protected routes, and role-based authorization for User, Creator, and Admin roles.</li>
                                <li>Integrated Stripe payments and developed RESTful APIs for prompts, reviews, bookmarks, reports, and analytics.</li>
                            </ul>
                        </div>

                        {/* Project 3: LAUNCHDECK */}
                        <div>
                            <h3 className="font-bold text-[#111827] dark:text-gray-100 text-[16px]">LAUNCHDECK - Project Showcase Platform</h3>
                            <p className="text-sm text-[#374151] dark:text-gray-300">
                                <strong className="text-[#111827] dark:text-gray-200">Tech Stack:</strong> TypeScript, Next.js, React, Node.js, Express.js, MongoDB
                            </p>
                            <p className="text-sm text-[#6B7280] dark:text-gray-400 space-x-1">
                                <Link href="https://launch-deck-fawn.vercel.app" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Live Demo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/launchDeck-client" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Client Repo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/launchDeck-server" target="_blank" className="text-emerald-600 dark:text-blue-400 underline">Server Repo</Link>
                            </p>
                            <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 mt-1 space-y-0.5">
                                <li>Developed a full-stack project showcase platform using Next.js, Express.js, TypeScript, and MongoDB.</li>
                                <li>Implemented authentication, protected routes, and project discovery with search, filtering, sorting, and pagination.</li>
                                <li>Designed RESTful APIs with Express.js and Mongoose for efficient CRUD operations and data management.</li>
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
                        <p className="text-sm text-[#6B7280] dark:text-gray-400">Noakhali, Bangladesh | 2022-2024</p>
                    </div>
                </section>

                {/* Languages */}
                <section>
                    <h2 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide mb-2">
                        LANGUAGES
                    </h2>
                    <ul className="list-disc pl-5 text-[#374151] dark:text-gray-300 space-y-0.5">
                        <li>Bengali - Native</li>
                        <li>English - Professional Working Proficiency</li>
                    </ul>
                </section>
            </div>

            {/* Action Button outside the layout container */}
            <div className="text-center mt-12">
                <a
                    href="/resume.pdf"
                    download="Alfaaz_Ahmed_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-[#059669] dark:bg-blue-600 dark:hover:bg-blue-700 transition rounded-lg font-medium text-white"
                >
                    <FaDownload />
                    Download Resume
                </a>
            </div>
        </div>
    );
}