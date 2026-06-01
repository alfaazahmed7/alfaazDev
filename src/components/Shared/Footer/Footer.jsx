import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="py-8 px-6 text-center lg:text-left"
            style={{
                backgroundColor: "#020817",
                backgroundImage:
                    "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(14,30,70,0.5) 0%, transparent 70%)",
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
                {/* Left Content */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">My Portfolio</h3>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 text-2xl text-gray-400">
                    <a
                        href="https://github.com/alfaazahmed7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/alfaazahmed7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/alfaazahmed7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="mailto:alfaazahmed010@gmail.com"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}
