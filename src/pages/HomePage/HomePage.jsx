import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/ProjectsComponents/Projects';
import './HomePage.scss';
import Header from '../../components/Header/Header';

const HomePage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}

export default HomePage