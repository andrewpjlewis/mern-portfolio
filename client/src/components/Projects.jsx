import React from 'react';
import '../css/Projects.css'

function Projects() {
  return (
    <main style={{ padding: '2rem', color: '#fff', backgroundColor: '#0D4579', minHeight: '100vh' }}>
      <h1>My Projects</h1>
      <ul>
        <li><a href="https://github.com/yourusername/project1" target="_blank" rel="noreferrer">Project 1</a></li>
        <li><a href="https://github.com/yourusername/project2" target="_blank" rel="noreferrer">Project 2</a></li>
        <li><a href="https://github.com/yourusername/project3" target="_blank" rel="noreferrer">Project 3</a></li>
        {/* Add as many projects as you want */}
      </ul>
    </main>
  );
}

export default Projects;
