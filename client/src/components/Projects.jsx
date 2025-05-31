import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import '../css/Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main id='all-project' className='project-container'>
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>All Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            {project.image && <img src={project.image} alt={`${project.title} image`} />}
            <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
            <p>{project.description}</p>
            {project.tags && project.tags.length > 0 && (
              <ul className="tags-list">
                {project.tags.map((tag, index) => (
                  <li key={index} className="tag-item">{tag}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Projects;
