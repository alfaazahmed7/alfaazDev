import { Cascadia_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SmoothScroll from "@/components/animations/Lenis/SmoothScroll";
import Footer from "@/components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./providers/theme-provider";

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
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#F6F7FB] text-[#374151] dark:bg-[#020817] dark:text-white"
      >
        <ThemeProvider>
        <SmoothScroll>
          <Navbar />
          <main className="antialiased">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}