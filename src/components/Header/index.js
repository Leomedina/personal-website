import React from 'react';
import './style.css';

function Header() {
  const linkedIn = "https://www.linkedin.com/in/medinaleonardo/";
  return (
    <header>
      <h1>I'm Leo Medina, a software engineer building things at <a href={linkedIn} target="_blank"><code>NULL</code></a>.</h1>
    </header>
  );
};

export default Header;