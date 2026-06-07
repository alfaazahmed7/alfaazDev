"use client";

import projects from "@/data/projectsData";
import { outfit } from "@/lib/fonts";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  return (
    <div id="projects" className="min-h-screen pb-32 lg:pb-52">
      <div className="w-full px-6 sm:px-10 lg:px-20 max-w-[1500px] mx-auto">

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

        {/* Card */}
        <div className={`grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 ${outfit.className}`}>

          {projects.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        <div className="mt-8">
          <div className="flex justify-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  group flex items-center gap-2
                  rounded-xl border border-white/10
                  bg-white/5 px-6 py-3
                  text-sm font-medium text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-white/20
                  hover:bg-white/10 cursor-pointer
                "
              >
                View All Projects

                <motion.span
                  className="text-gray-400 group-hover:text-white"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Projects;