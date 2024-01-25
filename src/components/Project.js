import React from 'react';

const Project = ({ title, description, image, deployedUrl, repoLink }) => {
  const handleTitleClick = () => {
    window.open(deployedUrl, '_blank');
  };
  
  const handleGithubClick = () => {
    window.open(repoLink, '_blank');
  };

  return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
          <div className="project-details">
            <div className="project-header">
              <h3 onClick={handleTitleClick}>{title}</h3>
              <div onClick={handleGithubClick}>
                <img 
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                  alt="GitHub" 
                  className='github-icon'
                />
              </div>
            </div>
            <p> {description}</p>
          </div>
      </div>

  );
}

export default Project;
