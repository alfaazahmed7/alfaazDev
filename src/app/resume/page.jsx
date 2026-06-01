"use client";

import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { outfit } from "@/lib/fonts";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
    return (
        <div className={`w-10/12 lg:w-7/12 mx-auto min-h-screen pt-28 text-white py-16 ${outfit.className}`}>

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className={`text-4xl md:text-5xl font-bold tracking-tight`}>
                    ALFAAZ AHMED
                </h1>

                <div className="mt-4 text-gray-300 space-y-1">
                    <p className="flex justify-center items-center gap-2">
                        <FaEnvelope /> alfaazahmed010@gmail.com
                    </p>
                    <p className="flex justify-center items-center gap-2">
                        <FaPhone /> +880 1610197258
                    </p>

                    <div className="flex justify-center gap-6 mt-2 text-blue-400">
                        <Link href="https://github.com/alfaazahmed7" target="_blank">
                            GitHub
                        </Link>
                        <Link href="https://linkedin.com/in/alfaazahmed7" target="_blank">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
                    Summary
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    Full Stack MERN Developer skilled in building responsive and scalable
                    web applications using React, Next.js, Node.js, Express.js, and
                    MongoDB. Passionate about creating modern user-focused applications
                    with clean code and secure backend systems.
                </p>
            </section>

            {/* Skills */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                    {[
                        "HTML",
                        "CSS",
                        "JavaScript (ES6+)",
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Git & GitHub",
                        "REST API",
                        "Problem Solving",
                        "Communication",
                        "Adaptability",
                    ].map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-[#111827] border border-gray-700 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    Projects
                </h2>

                <div className="space-y-6">
                    {/* Project 1 */}
                    <div className="p-5 bg-[#111827] rounded-xl border border-gray-800">
                        <h3 className="text-xl font-semibold">NEOMOTORS</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Next.js, React, Node.js, Express.js, MongoDB
                        </p>

                        <p className="text-gray-300 mt-3">
                            A full-stack luxury car booking platform with secure
                            authentication, dynamic car management, and responsive modern UI.
                        </p>

                        <Link
                            href="https://github.com/alfaazahmed7/neomotors-client"
                            target="_blank"
                            className="text-blue-400 mt-3 inline-block"
                        >
                            View Code →
                        </Link>
                    </div>

                    {/* Project 2 */}
                    <div className="p-5 bg-[#111827] rounded-xl border border-gray-800">
                        <h3 className="text-xl font-semibold">TILIX</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Next.js, React, MongoDB, Better-Auth
                        </p>

                        <p className="text-gray-300 mt-3">
                            A modern tile showcase platform built with Next.js, enabling users
                            to explore curated collections and view detailed product
                            information.
                        </p>

                        <Link
                            href="https://github.com/alfaazahmed7/tilix"
                            target="_blank"
                            className="text-blue-400 mt-3 inline-block"
                        >
                            View Code →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
                    Education
                </h2>

                <div className="text-gray-300">
                    <p className="font-semibold">HSC</p>
                    <p>Government Mujib College</p>
                    <p className="text-sm text-gray-400">
                        2022–2024 | Noakhali, Bangladesh
                    </p>
                </div>
            </section>

            {/* Languages */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
                    Languages
                </h2>

                <ul className="text-gray-300 list-disc ml-5">
                    <li>Bengali (Native)</li>
                    <li>English (Conversational)</li>
                </ul>
            </section>

            {/* Download Button */}
            <div className="text-center">
                <a
                    href="/resume.pdf"
                    download="Alfaaz_Ahmed_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
                >
                    <FaDownload />
                    Download Resume
                </a>
            </div>
        </div>
    );
}