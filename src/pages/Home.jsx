import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectShowcase from '../components/ProjectShowcase';
import GithubContribution from '../components/GithubContribution';

const Home = () => {
  return (
    <div >
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectShowcase />
      <GithubContribution/>
    </div>
  );
};

export default Home;


