import React from 'react';
import './style.css';

function Nav() {

  return (
    <nav>
      <ul>
        <li><a
          className="connect"
          href="https://www.linkedin.com/in/medinaleonardo/"
          target="_blank"
          rel="noopener noreferrer"  >CONNECT</a>
        </li>
        <li><a className="link" href="#project"> Considered Collectively</a></li>
        <li><a className="link" href="#project-1"> Journey-Pal</a></li>
        <li><a className="link" href="#project-2"> Open-Source</a></li>
      </ul>
    </nav>
  );
};

export default Nav;