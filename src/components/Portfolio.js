import React from 'react';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'Football Database',
    description: `REST API`,
    image: './images/FootballDatabase.png', 
    deployedUrl: 'https://raythomass.github.io/project-one-team4/',
    repoLink: 'https://github.com/colbyrobins/project-one-team4?tab=readme-ov-file#project-one-team4', 
  },
  {
    id: 2,
    title: 'PlanIt',
    description: 'Full Stack Application',
    image: './images/PlanIt.png', 
    deployedUrl: 'https://plan1t-5fa59fd2b161.herokuapp.com/',
    repoLink: 'https://github.com/colbyrobins/PlanIt?tab=readme-ov-file#planit', 
  },
  {
    id: 3,
    title: 'Tech Blog',
    description: 'Full Stack Application',
    image: './images/tech-blog-colbyrobins-d6beef3371e6.herokuapp.com_.png', 
    deployedUrl: 'https://tech-blog-colbyrobins-d6beef3371e6.herokuapp.com/',
    repoLink: 'https://github.com/colbyrobins/tech-blog?tab=readme-ov-file#tech-blog'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Front End Application',
    image: './images/weather-dashboard.png', 
    deployedUrl: 'https://colbyrobins.github.io/weather-dashboard/',
    repoLink: 'https://github.com/colbyrobins/weather-dashboard?tab=readme-ov-file#weather-dashboard'
  }
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
            deployedUrl={project.deployedUrl}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
