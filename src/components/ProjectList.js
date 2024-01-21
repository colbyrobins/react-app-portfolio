// ProjectList.js
import React from 'react';
import Project from './Project';

const ProjectList = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      link: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      link: 'https://example.com/project2'
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
