import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/ProjectsComponents/Projects';
import Contact from '../../components/Contact/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default HomePage