import AboutPage from "@/components/homepage/AboutPage/AboutPage";
import Banner from "@/components/homepage/Banner/Banner";
import Connect from "@/components/homepage/Connect/Connect";
import TechStack from "@/components/homepage/TechStack/TechStack";
import Projects from "@/components/Project/Projects";

export default function Home() {
  return (
    <div >
      <Banner />
      <AboutPage />
      <TechStack />
      <Projects />
      <Connect />
    </div>
  );
}
