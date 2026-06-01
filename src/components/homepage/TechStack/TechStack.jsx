'use client';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

export default function TechStack() {
    const techs = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <FaGithub />, name: "GitHub" },
    ];

    return (
        <section
            id="skills"
            className="text-center w-full px-6 sm:px-10 lg:px-20 pb-32 lg:pb-52 max-w-[1500px] mx-auto">
            <motion.h2
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Tech <span className="text-pink-500">Stack</span>
            </motion.h2>

            <motion.p
                className="text-gray-400 mb-10 max-w-[700px] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                I use modern full-stack web technologies like React.js, Next.js, Node.js, Express, and MongoDB to build fast and scalable applications.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#0b1221] hover:bg-[#111a2e] transition-colors rounded-xl py-6 shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl text-pink-500 mb-2">{tech.icon}</div>
                        <p className="text-gray-300 font-medium">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
