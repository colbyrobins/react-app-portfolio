// AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <div className="content-container">
        <img
          src="./images/about-me.jpg"
          alt="Placeholder"
          className="profile-image"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
