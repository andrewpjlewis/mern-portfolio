import '../css/Hero.css';

const Hero = () => {
  // Here you can add your scroll effect in useEffect if you want parallax

  return (
    <>
      <section id="hero" className="hero-section">
        <h1 className="hero-title">Andrew Lewis</h1>
        <p className="hero-subtitle">FRONT END WEB DEVELOPER</p>
        <button id="scroll-btn" aria-label="Scroll to next section">
          {/* Scroll icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="m7 10l5 5m0 0l5-5"
            />
          </svg>
        </button>
      </section>

      <section className="gradient"></section>
    </>
  );
};

export default Hero;
