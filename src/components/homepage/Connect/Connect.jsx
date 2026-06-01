'use client';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Connect() {
    return (
        <section
            id="contact"
            className="w-full px-6 sm:px-10 lg:px-20 pb-52 max-w-[1500px] mx-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-white"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Let’s <span className="text-pink-500">Connect</span>
                    </h2>
                    <p className="text-gray-400 mb-6">
                        I’d love to hear from you! Whether it’s a project idea, collaboration, or just a friendly hello.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                            <FaEnvelope className="text-pink-500 text-xl" />
                            <span>alfaazahmed010@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <FaPhoneAlt className="text-pink-500 text-xl" />
                            <span>+880 1610 197258</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <FaLinkedin className="text-pink-500 text-xl" />
                            <span>linkedin.com/in/alfaazahmed7</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <FaGithub className="text-pink-500 text-xl" />
                            <span>github.com/alfaazahmed7</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Form */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-[#0b1221] rounded-xl shadow-lg p-8 space-y-6"
                >
                    <div>
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-lg bg-[#111a2e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-lg bg-[#111a2e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-4 py-2 rounded-lg bg-[#111a2e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
