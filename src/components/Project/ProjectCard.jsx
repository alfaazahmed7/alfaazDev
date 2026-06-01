import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className="max-w-[350px] md:max-w-[400px] rounded-xl overflow-hidden bg-[#0f172a] border border-slate-700"
            >
                {/* IMAGE */}
                <div className="relative h-[180px]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 340px"
                        priority={false}
                    />
                </div>

                <div className="p-5">
                    {/* TITLE + BADGE */}
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-white font-semibold text-lg">
                            {project.title}
                        </h3>

                        {project.featured && (
                            <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                                Featured
                            </span>
                        )}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.slice(0, 6).map((tag, index) => (
                            <span
                                key={index}
                                className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5"
                            >
                                {tag}
                            </span>
                        ))}

                        {project.tags.length > 6 && (
                            <span className="text-[#fff3f35b] text-[12px] py-1">
                                +{project.tags.length - 6}
                            </span>
                        )}
                    </div>

                    {/* LINKS */}
                    <div className="flex justify-between items-center gap-10">
                        <div className="flex gap-3 text-slate-400">
                            {/* LIVE */}
                            <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-violet-400 transition flex items-center gap-2"
                                >
                                    <ExternalLink size={16} />
                                    <span className="font-medium text-white hover:text-violet-400 text-sm">
                                        Live
                                    </span>
                                </a>
                            </div>

                            {/* GITHUB */}
                            <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-violet-400 transition flex items-center gap-2"
                                >
                                    <FaGithub />
                                    <span className="font-medium text-white hover:text-violet-400 text-sm">
                                        Github
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* VIEW BUTTON */}
                        <button className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300">
                            View
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectCard;