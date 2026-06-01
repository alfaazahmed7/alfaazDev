import AboutPage from "@/components/Homepage/AboutPage/AboutPage";
import Banner from "@/components/Homepage/Banner/Banner";
import Connect from "@/components/Homepage/Connect/Connect";
import Footer from "@/components/Shared/Footer/Footer";
import ProjectCard from "@/components/Project/ProjectCard";
import TechStack from "@/components/Homepage/TechStack/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <AboutPage />
      <TechStack />
      <ProjectCard />
      <Connect />
      <Footer />
    </div>
  );
}
