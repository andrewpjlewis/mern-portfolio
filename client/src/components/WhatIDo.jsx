const WhatIDo = () => (
  <section id="what-i-do" className="what-i-do">
    <h2>What I Do</h2>
    <hr />
    {["Web Development", "UI / UX Design", "Prototyping / Wireframing"].map((title, i) => (
      <div className="service" key={i}>
        <h3>{title}</h3>
        <p>...</p>
      </div>
    ))}
  </section>
);

export default WhatIDo;