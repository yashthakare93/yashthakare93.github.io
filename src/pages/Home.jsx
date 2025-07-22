import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectShowcase from '../components/ProjectShowcase';
import GithubContribution from '../components/GithubContribution';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div >
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectShowcase />
      <GithubContribution/>
      <Footer/>
    </div>
  );
};

export default Home;


