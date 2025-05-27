import React from 'react';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
      </main>
    </>
  );
};

export default Home;