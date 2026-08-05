'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const contactDetails = [
    {
        icon: <FaEnvelope className="text-cyan-400 text-lg" />,
        label: "Email",
        value: "alfaazahmed010@gmail.com",
        href: "mailto:alfaazahmed010@gmail.com",
    },
    {
        icon: <FaPhoneAlt className="text-cyan-400 text-lg" />,
        label: "Phone",
        value: "+880 1610 197258",
        href: "tel:+8801610197258",
    },
    {
        icon: <FaLinkedin className="text-cyan-400 text-lg" />,
        label: "LinkedIn",
        value: "linkedin.com/in/alfaazahmed7",
        href: "https://www.linkedin.com/in/alfaazahmed7",
    },
    {
        icon: <FaGithub className="text-cyan-400 text-lg" />,
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(99,102,241,0.1) 70%, transparent 100%)",
                }}
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
                    <h2 className="text-4xl font-black text-white leading-tight mb-4">
                        Let’s{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Connect
                        </span>
                    </h2>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
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
                                className="flex items-center gap-4 p-4 rounded-xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-300 group shadow-lg"
                            >
                                <div className="w-11 h-11 rounded-lg border border-slate-700/60 bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                                        {item.label}
                                    </p>
                                    <p className="text-slate-200 text-sm sm:text-base font-medium truncate group-hover:text-cyan-400 transition-colors">
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
                        className="relative rounded-2xl border border-slate-700/60 bg-slate-900/50 backdrop-blur-xl p-6 sm:p-10 shadow-2xl space-y-6"
                        style={{
                            boxShadow: "0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.05)",
                        }}
                    >
                        {/* Header bar indicator */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="text-xs font-mono text-slate-400 tracking-wide uppercase">
                                    Send a message
                                </span>
                            </div>
                            <span className="text-xs font-mono text-slate-600">Available for hire</span>
                        </div>

                        {/* Name Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                required
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.01, filter: "brightness(1.1)" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-white cursor-pointer transition-all shadow-lg"
                            style={{
                                background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
                                boxShadow: "0 0 25px rgba(14,165,233,0.25)",
                            }}
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