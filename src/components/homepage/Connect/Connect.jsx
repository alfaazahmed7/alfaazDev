'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const contactDetails = [
    {
        icon: <FaEnvelope className="text-emerald-600 dark:text-cyan-400 text-lg" />,
        label: "Email",
        value: "alfaazahmed010@gmail.com",
        href: "mailto:alfaazahmed010@gmail.com",
    },
    {
        icon: <FaPhoneAlt className="text-emerald-600 dark:text-cyan-400 text-lg" />,
        label: "Phone",
        value: "+880 1610 197258",
        href: "tel:+8801610197258",
    },
    {
        icon: <FaLinkedin className="text-emerald-600 dark:text-cyan-400 text-lg" />,
        label: "LinkedIn",
        value: "linkedin.com/in/alfaazahmed7",
        href: "https://www.linkedin.com/in/alfaazahmed7",
    },
    {
        icon: <FaGithub className="text-emerald-600 dark:text-cyan-400 text-lg" />,
        label: "GitHub",
        value: "github.com/alfaazahmed7",
        href: "https://github.com/alfaazahmed7",
    },
];

export default function Connect() {
    return (
        <section
            id="contact"
            className="relative w-full px-6 sm:px-10 lg:px-20 pb-32 lg:pb-52 max-w-[1500px] mx-auto scroll-mt-40 overflow-hidden"
        >
            {/* Ambient Background Glow (Transparent overlay - no base bg color override) */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 dark:opacity-20 blur-3xl glow-connect-themed"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* LEFT CONTENT — Glassmorphic Info Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-5 flex flex-col justify-center"
                >

                    {/* Section Title */}
                    <h2 className="text-4xl font-black text-[#111827] dark:text-white leading-tight mb-4">
                        Let’s{" "}
                        <span className="accent-gradient-text"
                        >
                            Connect
                        </span>
                    </h2>

                    <p className="text-[#6B7280] dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
                        I’d love to hear from you! Whether it’s a project idea, collaboration, or just a friendly hello, feel free to reach out.
                    </p>

                    {/* Interactive Glass Cards */}
                    <div className="space-y-4">
                        {contactDetails.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 6, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-[#E5E7EB] dark:border-slate-700/50 bg-white dark:bg-slate-900/40 backdrop-blur-md hover:border-emerald-500 dark:hover:border-cyan-500/40 hover:bg-[#FCFCFD] dark:hover:bg-slate-800/60 transition-all duration-300 group shadow-sm dark:shadow-lg"
                            >
                                <div className="w-11 h-11 rounded-lg border border-[#E5E7EB] dark:border-slate-700/60 bg-[#F8FAFC] dark:bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 dark:group-hover:border-cyan-500/50 group-hover:bg-[#ECFDF5] dark:group-hover:bg-slate-800/80 transition-colors">
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wider text-[#6B7280] dark:text-slate-500 font-medium">
                                        {item.label}
                                    </p>
                                    <p className="text-[#1F2937] dark:text-slate-200 text-sm sm:text-base font-medium truncate group-hover:text-emerald-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {item.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT CONTENT — Sleek Glass Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-7"
                >
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="relative rounded-2xl border border-[#E5E7EB] dark:border-slate-700/60 bg-white dark:bg-slate-900/50 backdrop-blur-xl p-6 sm:p-10 shadow-sm dark:shadow-2xl space-y-6"
                    >
                        {/* Header bar indicator */}
                        <div className="flex items-center justify-between pb-4 border-b border-[#EDF1F5] dark:border-slate-800/80 mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-cyan-400 animate-pulse" />
                                <span className="text-xs font-mono text-[#6B7280] dark:text-slate-400 tracking-wide uppercase">
                                    Send a message
                                </span>
                            </div>
                            <span className="text-xs font-mono text-[#94A3B8] dark:text-slate-600">Available for hire</span>
                        </div>

                        {/* Name Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/50 border border-[#D1D5DB] dark:border-slate-800 text-[#1F2937] dark:text-slate-100 placeholder-[#94A3B8] dark:placeholder-slate-600 text-sm focus:outline-none focus:border-[#10B981] dark:focus:border-cyan-500/60 focus:ring-2 focus:ring-[#D1FAE5] dark:focus:ring-cyan-500/50 dark:focus:ring-1 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/50 border border-[#D1D5DB] dark:border-slate-800 text-[#1F2937] dark:text-slate-100 placeholder-[#94A3B8] dark:placeholder-slate-600 text-sm focus:outline-none focus:border-[#10B981] dark:focus:border-cyan-500/60 focus:ring-2 focus:ring-[#D1FAE5] dark:focus:ring-cyan-500/50 dark:focus:ring-1 transition-all"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                required
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/50 border border-[#D1D5DB] dark:border-slate-800 text-[#1F2937] dark:text-slate-100 placeholder-[#94A3B8] dark:placeholder-slate-600 text-sm focus:outline-none focus:border-[#10B981] dark:focus:border-cyan-500/60 focus:ring-2 focus:ring-[#D1FAE5] dark:focus:ring-cyan-500/50 dark:focus:ring-1 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.01, filter: "brightness(1.1)" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="btn-primary-themed w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase cursor-pointer transition-all"
                        >
                            <span>Send Message</span>
                            <FaPaperPlane className="text-xs" />
                        </motion.button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}