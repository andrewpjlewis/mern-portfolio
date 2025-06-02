import React from 'react';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';
import Skills from './Skills';
import FeaturedProjects from './FeaturedProjects';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <FeaturedProjects />
      </main>
    </>
  );
};

export default Home;