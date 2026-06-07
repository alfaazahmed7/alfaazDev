"use client";

import Link from "next/link";
import { outfit } from "@/lib/fonts";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
    return (
        <div className={`w-11/12 lg:w-8/12 mx-auto min-h-screen pt-28 pb-16 text-white ${outfit.className}`}>

            {/* Container to give it that structured paper feel */}
            <div className="max-w-[800px] mx-auto text-left font-sans antialiased text-[15px] leading-normal space-y-6">

                {/* Header */}
                <div className="text-center space-y-1">
                    <h1 className="text-3xl font-bold tracking-wide text-[#3b82f6] uppercase">
                        ALFAAZ AHMED
                    </h1>
                    <p className="text-white dark:text-white font-bold text-base">
                        Full-Stack Developer(MERN) | React.js | Next.js | Node.js | MongoDB
                    </p>
                    <p className="text-gray-400 text-sm">
                        Noakhali, Bangladesh | +880 16101 97258 |{" "}
                        <a href="mailto:alfaazahmed010@gmail.com" className="text-blue-400 underline">alfaazahmed010@gmail.com</a>{" "}
                        | <Link href="https://github.com/alfaazahmed7" target="_blank" className="text-blue-400 underline">Github</Link>{" "}
                        | <Link href="https://linkedin.com/in/alfaazahmed7" target="_blank" className="text-blue-400 underline">LinkedIn</Link>{" "}
                    </p>
                </div>

                {/* Career Objective */}
                <section>
                    <h2 className="text-lg font-bold text-[#3b82f6] border-b-[1.5px] border-[#3b82f6] uppercase tracking-wide mb-2 pb-0.5">
                        CAREER OBJECTIVE
                    </h2>
                    <p className="text-gray-300 text-justify">
                        Motivated Full-Stack MERN Developer with hands-on experience in building responsive, scalable, and user-centric web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in developing modern frontend interfaces and secure backend systems with a strong focus on clean code, performance, and user experience. Eager to contribute to innovative development teams while continuously improving technical and problem-solving skills.
                    </p>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-lg font-bold text-[#3b82f6] border-b-[1.5px] border-[#3b82f6] uppercase tracking-wide mb-2 pb-0.5">
                        SKILLS
                    </h2>
                    <div className="text-gray-300 space-y-0.5">
                        <p><strong className="text-gray-200">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, Responsive Design</p>
                        <p><strong className="text-gray-200">Backend:</strong> Node.js, MongoDB, Better Auth, JWT, CRUD Operations</p>
                        <p><strong className="text-gray-200">UI & UX:</strong> HeroUI, DaisyUI, Figma, Figma-to-Code Workflow</p>
                        <p><strong className="text-gray-200">Tools & Deployment:</strong> Git, GitHub, VS Code, npm, ESLint, Prettier, Vercel, Netlify</p>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-lg font-bold text-[#3b82f6] border-b-[1.5px] border-[#3b82f6] uppercase tracking-wide mb-3 pb-0.5">
                        PROJECTS
                    </h2>

                    <div className="space-y-4">
                        {/* Project 1 */}
                        <div>
                            <h3 className="font-bold text-gray-100 text-[16px]">NEOMOTORS</h3>
                            <p className="text-sm text-gray-300">
                                <strong className="text-gray-200">Tech-Stack:</strong> Next.js, React, Node.js, Express.js, MongoDB
                            </p>
                            <p className="text-sm text-gray-400 space-x-1">
                                <Link href="https://neomotors-client.vercel.app/" target="_blank" className="text-blue-400 underline">Live Demo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/neomotors-client" target="_blank" className="text-blue-400 underline">Client Repo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/neomotors-server" target="_blank" className="text-blue-400 underline">Server Repo</Link>
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 mt-1 space-y-0.5">
                                <li>Built a full-stack luxury car booking platform using React, Next.js, Node.js, and MongoDB with a fully responsive modern UI.</li>
                                <li>Implemented secure authentication and protected routes using JWT-based authorization and role-based access control.</li>
                                <li>Developed dynamic car management features, including CRUD operations, booking functionality, filtering, and real-time data handling.</li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div>
                            <h3 className="font-bold text-gray-100 text-[16px]">TILIX</h3>
                            <p className="text-sm text-gray-300">
                                <strong className="text-gray-200">Tech Stack:</strong> Next.js, React, MongoDB, Better-Auth
                            </p>
                            <p className="text-sm text-gray-400 space-x-1">
                                <Link href="https://tilix-eight.vercel.app/" target="_blank" className="text-blue-400 underline">Live Demo</Link>
                                <span>|</span>
                                <Link href="https://github.com/alfaazahmed7/tilix" target="_blank" className="text-blue-400 underline">Repo</Link>
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 mt-1 space-y-0.5">
                                <li>Developed a modern tile showcase platform using Next.js with a responsive and user-friendly interface.</li>
                                <li>Built dynamic product listing and detailed product pages to enhance browsing and user engagement.</li>
                                <li>Implemented efficient data handling, filtering, and optimized UI components for smooth performance across devices.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-bold text-[#3b82f6] border-b-[1.5px] border-[#3b82f6] uppercase tracking-wide mb-2 pb-0.5">
                        EDUCATION
                    </h2>
                    <div className="text-gray-300">
                        <p className="font-bold text-gray-100">HSC | GOVERNMENT MUJIB COLLEGE</p>
                        <p className="text-sm text-gray-400">Noakhali, Bangladesh | 2022-2024</p>
                    </div>
                </section>

                {/* Languages */}
                <section>
                    <h2 className="text-lg font-bold text-[#3b82f6] border-b-[1.5px] border-[#3b82f6] uppercase tracking-wide mb-2 pb-0.5">
                        LANGUAGES
                    </h2>
                    <ul className="list-disc pl-5 text-gray-300 space-y-0.5">
                        <li>Bengali(Native)</li>
                        <li>English(Conversational)</li>
                    </ul>
                </section>
            </div>

            {/* Action Button outside the layout layout */}
            <div className="text-center mt-12">
                <a
                    href="/resume.pdf"
                    download="Alfaaz_Ahmed_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium text-white"
                >
                    <FaDownload />
                    Download Resume
                </a>
            </div>
        </div>
    );
}