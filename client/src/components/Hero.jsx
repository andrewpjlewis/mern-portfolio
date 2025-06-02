import '../css/Hero.css';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.querySelector('.about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero" className="hero-section">
        <h1 className="hero-title">Andrew Lewis</h1>
        <p className="hero-subtitle">FRONT END WEB DEVELOPER</p>
          <button id="scroll-btn" aria-label="Scroll to next section" onClick={handleScroll}>

          <img src="/favicon.svg" alt="Scroll down" />
          </button>
      </section>

      <section className="gradient"></section>
    </>
  );
};

export default Hero;
