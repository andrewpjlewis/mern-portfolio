import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectIds = [
      '683b3a3c22a727d772146c4f',
      '683b3a4822a727d772146c53',
      '683b3a4d22a727d772146c55'
    ];

    api.get(`/projects?ids=${projectIds.join(',')}`)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id='featured-project' className='project-container'>
      <h2>Featured Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            {project.image && (
              <img
                src={`${BASE_URL}${project.image}`}
                alt={`${project.title} image`}
              />
            )}
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
      <Link to="/projects">View all projects →</Link>
    </section>
  );
};

export default FeaturedProjects;
