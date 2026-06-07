'use client'
import ProjectCard from "@/components/Project/ProjectCard";
import ProjectTabs from "@/components/Project/ProjectTabs";
import projects from "@/data/projectsData";
import { outfit } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = projects.filter((project) => {
        if (activeTab === "All") return true;
        return project.stack === activeTab;
    });

    return (
        <div className="pt-36 w-full px-6 sm:px-10 lg:px-20 max-w-[1500px] mx-auto pb-20">

            {/* Heading */}
            <section className="mb-10">
                <div className="max-w-4xl">

                    <div className="relative mb-3">
                        <motion.h2
                            className="text-white text-4xl lg:text-5xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Projects
                        </motion.h2>
                        <div className="h-1.5 w-16 bg-blue-500 mt-2 rounded-full"></div>
                    </div>

                    <motion.p
                        className="text-slate-400 text-lg leading-relaxed max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Here are some of the projects I have worked on, showcasing my skills in
                        various technologies and problem domains.
                    </motion.p>
                </div>
            </section>

            {/* Project Tabs */}
            <ProjectTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                projects={projects}
            />

            {/* Card */}
            <div className={`grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 ${outfit.className}`}>

                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>
        </div>
    );
};

export default ProjectsPage;