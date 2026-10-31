'use client';
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiBetterauth,
    SiHeroui,
    SiDaisyui,
    SiFigma,
    SiGit,
    SiGithub,
    SiNpm,
    SiEslint,
    SiPrettier,
    SiVercel,
    SiNetlify,
    SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { KeyRound, ShieldCheck, ShieldUser, MonitorSmartphone, Globe } from "lucide-react";

const categories = [
    {
        title: "Languages",
        items: [
            { icon: <SiJavascript />, name: "JavaScript (ES6+)" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <SiHtml5 />, name: "HTML5" },
            { icon: <SiCss />, name: "CSS3" },
        ],
    },
    {
        title: "Frontend",
        items: [
            { icon: <SiReact />, name: "React.js" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <MonitorSmartphone />, name: "Responsive Design" },
        ],
    },
    {
        title: "Backend",
        items: [
            { icon: <SiNodedotjs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <Globe />, name: "RESTful APIs" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMongoose />, name: "Mongoose" },
        ],
    },
    {
        title: "Authentication & Security",
        items: [
            { icon: <SiBetterauth />, name: "Better Auth" },
            { icon: <KeyRound />, name: "JWT" },
            { icon: <ShieldCheck />, name: "Authorization" },
            { icon: <ShieldUser />, name: "RBAC" },
        ],
    },
    {
        title: "UI & Tools",
        items: [
            { icon: <SiHeroui />, name: "HeroUI" },
            { icon: <SiDaisyui />, name: "DaisyUI" },
            { icon: <SiFigma />, name: "Figma" },
            { icon: <SiGit />, name: "Git" },
            { icon: <SiGithub />, name: "GitHub" },
            { icon: <VscVscode />, name: "VS Code" },
            { icon: <SiNpm />, name: "npm" },
            { icon: <SiEslint />, name: "ESLint" },
            { icon: <SiPrettier />, name: "Prettier" },
        ],
    },
    {
        title: "Deployment",
        items: [
            { icon: <SiVercel />, name: "Vercel" },
            { icon: <SiNetlify />, name: "Netlify" },
            { icon: <SiRender />, name: "Render" },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TechStack() {
    return (
        <section
            id="skills"
            className="w-full px-6 sm:px-10 lg:px-20 pb-32 lg:pb-52 max-w-[1500px] mx-auto scroll-mt-40"
        >
            <motion.h2
                className="text-4xl font-bold text-[#111827] dark:text-white mb-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Tech <span className="text-emerald-600 dark:text-[#4895ef]">Stack</span>
            </motion.h2>

            <motion.p
                className="text-[#6B7280] dark:text-gray-400 mb-10 max-w-[700px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                I use modern full-stack web technologies like React.js, Next.js, Node.js, Express, and MongoDB to build fast and scalable applications.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {categories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={cardVariants}
                        className="rounded-2xl border border-[#E5E7EB] dark:border-slate-700/60 bg-white dark:bg-[#0b1221] p-6 shadow-sm dark:shadow-md hover:border-emerald-400/60 dark:hover:border-[#4895ef]/60 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[#111827] dark:text-white">
                                {category.title}
                            </h3>
                            <span className="text-xs font-medium text-[#6B7280] dark:text-gray-400">
                                {category.items.length}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {category.items.map((tech) => (
                                <motion.div
                                    key={tech.name}
                                    className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-[#E5E7EB] dark:border-slate-700/50 bg-[#F9FAFB] dark:bg-slate-900/40 hover:bg-emerald-50 dark:hover:bg-[#111a2e] hover:border-emerald-400/70 dark:hover:border-[#4895ef]/60 transition-colors cursor-default"
                                    whileHover={{ y: -2, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <span
                                        className="text-xl text-emerald-600 dark:text-[#4895ef] shrink-0"
                                        aria-hidden="true"
                                    >
                                        {tech.icon}
                                    </span>
                                    <span className="text-sm font-medium text-[#374151] dark:text-gray-300 truncate">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
