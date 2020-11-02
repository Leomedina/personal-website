import React from 'react';
import COPY from '../../assets/copy';
import './style.css';

function Header() {
  const { header, subheader } = COPY.home;
  const linkedIn = "https://www.linkedin.com/in/medinaleonardo/";
  return (
    <header>
      <h2>{header}</h2>
      <p>{subheader}</p>
    </header>
  );
};

export default Header;