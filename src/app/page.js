import AboutPage from "@/components/homepage/AboutPage/AboutPage";
import Banner from "@/components/homepage/Banner/Banner";
import Connect from "@/components/homepage/Connect/Connect";
import Experience from "@/components/homepage/Experience/Experience";
import GithubContributions from "@/components/homepage/GithubContribution/GithubContribution";
import TechStack from "@/components/homepage/TechStack/TechStack";
import Projects from "@/components/Project/Projects";

export default function Home() {
  return (
    <div >
      <Banner />
      <AboutPage />
      <TechStack />
      <Projects />
      <Experience />
      <GithubContributions />
      <Connect />
    </div>
  );
}
