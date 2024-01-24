import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>Colby Robins</h1>
      </div>
      <div className="header-right">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
