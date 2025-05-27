import '../css/WhatIDo.css'


const services = [
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M20 10.128c0-3.832 0-5.747-1.172-6.938S15.771 2 12 2h-2C6.229 2 4.343 2 3.172 3.19S2 6.296 2 10.128s0 5.747 1.172 6.938c.47.477 1.054.763 1.828.934"/><path d="M22 17.5c0-1.875 0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553C20.312 13 19.375 13 17.5 13h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C8 14.689 8 15.626 8 17.5s0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C9.688 22 10.625 22 12.5 22h5c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 20.312 22 19.375 22 17.5"/><path d="m16.5 16l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L16.5 19m-3-3l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707l.92.793M2.5 6h17"/></g></svg>',
    title: 'Web Development',
    description: 'I have been learning web development for the past year and a half and have made great strides in my progress. Starting out I learned HTML and CSS. After that, I got the IBM Frontend Professional Certificate to continue my learning outside of college. I have since been learning backend services and full stack with the MERN stack primarily.',
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"/></svg>',
    title: 'UI / UX Design',
    description: 'While completing my IBM Certificate, I learned a lot about modern UI / UX standards and how to improve from experts. After that, I have continued to learn about this topic, including how to do research and improve design with user testing.',
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M7 9V7h14v2zm0 4v-2h14v2zm0 4v-2h14v2zM4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17"/></svg>',
    title: 'Prototyping / Wireframing',
    description: 'I create both simple wireframes and detailed, interactive prototypes in Figma. Starting with basic layouts to map user flow, I then build high-fidelity prototypes to test and refine designs before development.',
  }
]
const WhatIDo = () => (
  <section id="what-i-do" className="what-i-do">
    <h2>What I Do</h2>
    <hr />
    {services.map((service, i) => (
      <div className="service" key={i}>
        <h3 className="service-title">
          <span className="icon" dangerouslySetInnerHTML={{ __html: service.svg }} />
          {service.title}
        </h3>
        <p>{service.description}</p>
      </div>
    ))}
  </section>
);

export default WhatIDo;