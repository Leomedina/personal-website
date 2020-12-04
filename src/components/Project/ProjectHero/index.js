import React from 'react';
import stock from '../../../assets/images/stock-1.png';
import downArrow from '../../../assets/images/down-arrow.png';
import './style.css';

function ProjectHero() {
  return (
    <div className="p-hero">
      <img src={stock} alt="project" />
      <div className="p-meta">
        <ul>
          <li>Type: Full-Stack Project.</li>
          <li>Technologies: Python, Flask, PostgreSLQ.</li>
        </ul>
        <div className="p-next">
          <p>NEXT PROJECT</p>
          <img src={downArrow} alt="Next Project Button" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;