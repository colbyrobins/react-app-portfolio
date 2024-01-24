import React from 'react';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'Football Database',
    description: `REST API`,
    image: './images/FootballDatabase.png', 
    repoLink: 'https://github.com/colbyrobins/project-one-team4?tab=readme-ov-file#project-one-team4', 
  },
  {
    id: 2,
    title: 'PlanIt',
    description: 'Full Stack Application',
    image: './images/PlanIt.png', 
    repoLink: 'https://github.com/colbyrobins/PlanIt?tab=readme-ov-file#planit', 
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
