import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectShowcase from '../components/ProjectShowcase';
import GithubContribution from '../components/GithubContribution';
// import SplashCursor from '../components/SplashCursor';

const Home = () => {
  return (
    <div >
      {/* <SplashCursor /> */}
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectShowcase />
      <GithubContribution/>
    </div>
  );
};

export default Home;


