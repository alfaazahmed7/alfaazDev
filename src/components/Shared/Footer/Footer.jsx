import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        { href: "https://github.com/alfaazahmed7", icon: <FaGithub />, label: "GitHub" },
        { href: "https://linkedin.com/in/alfaazahmed7", icon: <FaLinkedin />, label: "LinkedIn" },
        { href: "https://twitter.com/alfaazahmed7", icon: <FaTwitter />, label: "Twitter" },
        { href: "mailto:alfaazahmed010@gmail.com", icon: <FaEnvelope />, label: "Email" },
    ];

    return (
        <footer className="relative w-full overflow-hidden bg-[#030712] text-white pt-12 pb-8 px-6 sm:px-10 lg:px-20">
            {/* Top Border Glow Divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            {/* Ambient Radial Bottom Glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] pointer-events-none opacity-20 blur-3xl"
                style={{
                    background: "radial-gradient(ellipse at bottom, rgba(56,189,248,0.4) 0%, rgba(99,102,241,0.1) 70%, transparent 100%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="text-center md:text-left space-y-1">
                    <h3 className="text-lg font-bold tracking-wide">
                        My{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Portfolio
                        </span>
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                        © {new Date().getFullYear()} Alfaaz Ahmed. Built with precision & passion.
                    </p>
                </div>

                {/* Right Content: Social Links */}
                <div className="flex items-center gap-3">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-300 shadow-md group"
                        >
                            <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}