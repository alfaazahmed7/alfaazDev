import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaCode, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="relative group p-1">
            {/* CRAZY HOVER EFFECT: Glowing Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500 scale-95 group-hover:scale-105" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full max-w-[350px] md:max-w-[400px] rounded-2xl overflow-hidden 
                           bg-slate-900/80 backdrop-blur-md border border-slate-800 
                           group-hover:border-violet-500/50 group-hover:-translate-y-2 
                           transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                           box-shadow shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
                {/* IMAGE CONTAINER (Scale animation removed to protect uneven aspect ratios) */}
                <div className="relative h-[200px] w-full overflow-hidden">
                    {/* Dark overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

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
                            <div className="relative p-1 bg-slate-800 rounded-lg border border-slate-700 group-hover:border-violet-400/50 transition-colors duration-300">
                                <Image
                                    src={project.icon}
                                    alt={project.title}
                                    width={36}
                                    height={36}
                                    className="rounded-md"
                                />
                            </div>
                            <h3 className="text-white font-bold text-xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-300 transition-all duration-300">
                                {project.title}
                            </h3>
                        </div>

                        {project.featured && (
                            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-300 rounded-full border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                Featured
                            </span>
                        )}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-400 mb-5 line-clamp-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 6).map((tag, index) => (
                            <span
                                key={index}
                                className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-800 text-slate-400 bg-slate-950/40 group-hover:border-violet-500/20 group-hover:text-violet-200 transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}

                        {project.tags.length > 6 && (
                            <span className="text-slate-500 text-[12px] font-medium py-1 px-1">
                                +{project.tags.length - 6}
                            </span>
                        )}
                    </div>

                    {/* LIKES & ACTIONS */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-800/60 group-hover:border-violet-500/20 transition-colors duration-500">
                        <div className="flex gap-4 text-slate-400">
                            {/* LIVE */}
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-950/40 rounded-xl text-slate-400 hover:text-white hover:bg-violet-600 border border-slate-800 hover:border-violet-500 transition-all duration-300"
                                title="Live Demo"
                            >
                                <ExternalLink size={18} />
                            </a>

                            {/* GITHUB CLIENT */}
                            <a
                                href={project.githubClientUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-950/40 rounded-xl text-slate-400 hover:text-white hover:bg-violet-600 border border-slate-800 hover:border-violet-500 transition-all duration-300"
                                title="Client Repository"
                            >
                                <FaGithub size={18} />
                            </a>

                            {/* GITHUB SERVER */}
                            <a
                                href={project.githubServerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-950/40 rounded-xl text-slate-400 hover:text-white hover:bg-violet-600 border border-slate-800 hover:border-violet-500 transition-all duration-300"
                                title="Server Repository"
                            >
                                <FaCode size={18} />
                            </a>
                        </div>

                        {/* VIEW BUTTON */}
                        <button className="flex items-center gap-1.5 text-sm font-semibold text-violet-400 group-hover:text-violet-300 group-hover:gap-2.5 transition-all duration-300">
                            <span>View Project</span>
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;