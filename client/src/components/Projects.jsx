import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import '../css/Projects.css';
import { Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const BASE_URL = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/projects')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main id='all-project' className='project-container'>
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>All Projects</h1>

      {loading ? (
        <div className="loading-wrapper"><LoadingDots /></div>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project._id} className='project-item'>
              <a href={project.link} target="_blank" rel="noreferrer">
                <a>{project.title}</a>
                <p>{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <ul className="tags-list">
                    {project.tags.map((tag, index) => (
                      <li key={index} className="tag-item">{tag}</li>
                    ))}
                  </ul>
                )}
                {project.image && (
                  <img
                    src={`${BASE_URL}${project.image}`}
                    alt={`${project.title} image`}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Projects;
