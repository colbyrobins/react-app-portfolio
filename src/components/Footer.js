import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <a href="https://github.com/colbyrobins" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/colby-robins" target="_blank" rel="noopener noreferrer">
            <img
              src="./images/linkedin.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png"
              alt="Stack Overflow"
              className="social-icon"
            />
          </a>
        </div>
      </div>
      <p>&copy; 2024 Colby Robins</p>
    </footer>
  );
}

export default Footer;
