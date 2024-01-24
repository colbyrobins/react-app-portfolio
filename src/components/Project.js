import React from 'react';

const Project = ({ title, description, image, repoLink }) => {
  return (
    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
