import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="relative group p-1">
            {/* CRAZY HOVER EFFECT: Glowing Background Aura */}
            <div className="absolute inset-0 project-aura rounded-2xl blur-xl transition-all duration-500 scale-95 group-hover:scale-105" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="project-card-themed relative h-full max-w-[350px] md:max-w-[400px] rounded-2xl overflow-hidden 
                           bg-white hover:bg-[#FCFCFD] dark:bg-slate-900/80 dark:hover:bg-slate-900/80 backdrop-blur-md border border-[#E5E7EB] dark:border-slate-800 
                           group-hover:border-emerald-500 dark:group-hover:border-violet-500/50 group-hover:-translate-y-2 
                           transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                           shadow-sm"
            >
                {/* IMAGE CONTAINER (Scale animation removed to protect uneven aspect ratios) */}
                <div className="relative h-[200px] w-full overflow-hidden">
                    {/* Dark overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority={false}
                    />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-6 relative z-20">
                    {/* TITLE + BADGE */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <div className="relative p-1 bg-[#F3F4F6] dark:bg-slate-800 rounded-lg border border-[#E5E7EB] dark:border-slate-700 group-hover:border-emerald-500/50 dark:group-hover:border-violet-400/50 transition-colors duration-300">
                                <Image
                                    src={project.icon}
                                    alt={project.title}
                                    width={36}
                                    height={36}
                                    className="rounded-md"
                                />
                            </div>
                            <h3 className="text-[#111827] dark:text-white font-bold text-xl tracking-tight group-hover:text-[#047857] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-white dark:group-hover:to-violet-300 transition-all duration-300">
                                {project.title}
                            </h3>
                        </div>

                        {project.featured && (
                            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#ECFDF5] dark:bg-transparent dark:bg-gradient-to-r dark:from-violet-500/20 dark:to-fuchsia-500/20 text-emerald-700 dark:text-violet-300 rounded-full border border-[#A7F3D0] dark:border-violet-500/30 dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                Featured
                            </span>
                        )}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-[#6B7280] dark:text-slate-400 mb-5 line-clamp-3 leading-relaxed group-hover:text-[#6B7280] dark:group-hover:text-slate-300 transition-colors duration-300">
                        {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 6).map((tag, index) => (
                            <span
                                key={index}
                                className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-transparent dark:border-slate-800 text-[#374151] dark:text-slate-400 bg-[#F3F4F6] dark:bg-slate-950/40 group-hover:border-[#A7F3D0] dark:group-hover:border-violet-500/20 group-hover:bg-[#ECFDF5] dark:group-hover:bg-slate-950/40 group-hover:text-[#047857] dark:group-hover:text-violet-200 transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}

                        {project.tags.length > 6 && (
                            <span className="text-[#94A3B8] dark:text-slate-500 text-[12px] font-medium py-1 px-1">
                                +{project.tags.length - 6}
                            </span>
                        )}
                    </div>

                    {/* LIKES & ACTIONS */}
                    <div className="flex justify-between items-center pt-4 border-t border-[#EDF1F5] dark:border-slate-800/60 group-hover:border-[#A7F3D0] dark:group-hover:border-violet-500/20 transition-colors duration-500">
                        <div className="flex gap-4 text-[#6B7280] dark:text-slate-400">
                            {/* LIVE */}
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-emerald-500 rounded-xl text-white hover:bg-[#059669] border border-emerald-500 hover:border-[#059669] dark:bg-slate-950/40 dark:text-slate-400 dark:hover:text-white dark:hover:bg-violet-600 dark:border-slate-800 dark:hover:border-violet-500 transition-all duration-300"
                                title="Live Demo"
                            >
                                <ExternalLink size={18} />
                            </a>

                            {/* GITHUB CLIENT */}
                            <a
                                href={project.githubClientUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-xl text-[#374151] hover:text-emerald-600 hover:bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#CBD5E1] dark:bg-slate-950/40 dark:text-slate-400 dark:hover:text-white dark:hover:bg-violet-600 dark:border-slate-800 dark:hover:border-violet-500 transition-all duration-300"
                                title="Client Repository"
                            >
                                <FaGithub size={18} />
                            </a>

                            {/* GITHUB SERVER */}
                            {project.githubServerUrl && (
                                <a
                                    href={project.githubServerUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white rounded-xl text-[#374151] hover:text-emerald-600 hover:bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#CBD5E1] dark:bg-slate-950/40 dark:text-slate-400 dark:hover:text-white dark:hover:bg-violet-600 dark:border-slate-800 dark:hover:border-violet-500 transition-all duration-300"
                                    title="Server Repository"
                                >
                                    <FaCode size={18} />
                                </a>
                            )}
                        </div>

                        {/* VIEW BUTTON */}
                        <Link href={`/projects/${project.id}`} className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-[#4895ef] group-hover:text-[#047857] dark:group-hover:text-violet-300 group-hover:gap-2.5 transition-all duration-300">
                            <span>View Project</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;