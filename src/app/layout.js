import { Cascadia_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SmoothScroll from "@/components/animations/Lenis/SmoothScroll";
import Footer from "@/components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const Cascadia_Code_Font = Cascadia_Code({
  subsets: ["latin"],
});

export const metadata = {
  title: "Alfaaz Ahmed - MERN Stack Developer",
  description:
    "Portfolio of Alfaaz Ahmed, a MERN Stack Developer specializing in React, Next.js, Node.js, Express, and MongoDB. Explore my projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${Cascadia_Code_Font.className} h-full antialiased`}
    >
      <body
        className="bg-[#020817] text-white min-h-screen"
        style={{
          backgroundColor: "#020817",
          backgroundImage:
            "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(14,30,70,0.5) 0%, transparent 70%)",
        }}
      >
        <SmoothScroll>
          <Navbar />
          <main className="antialiased">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}