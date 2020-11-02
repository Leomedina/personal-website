import React from 'react';
import COPY from '../../assets/copy';
import './style.css';

function Header() {
  const { bio } = COPY.home;
  const linkedIn = "https://www.linkedin.com/in/medinaleonardo/";
  return (
    <header>
      <h2>{bio}</h2>
    </header>
  );
};

export default Header;