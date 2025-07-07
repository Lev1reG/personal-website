import Education from "@/components/Home/Education";
import Hero from "@/components/Home/Hero";
import Journey from "@/components/Home/Journey";
import Projects from "@/components/Home/Projects";
import WorkExperience from "@/components/Home/WorkExperience";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <>
      <SEO type="profile" />
      <Hero />
      <WorkExperience />
      <Education />
      <Projects />
      <Journey />
    </>
  );
};

export default Home;
