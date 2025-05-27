import React from 'react';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';
import Skills from './Skills';
import Resume from './Resume';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Resume />
      </main>
    </>
  );
};

export default Home;