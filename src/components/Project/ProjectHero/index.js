import React from 'react';
import downArrow from '../../../assets/images/down-arrow.png';
import './style.css';

function ProjectHero({ image, type, tech }) {
  return (
    <div className="p-hero">
      <img src={image} className="blackandwhite" alt="project"/>
      <div className="p-meta">
        <ul>
          <li>{`Type: ${type}`}</li>
          <li>{`Technologies: ${tech}`}</li>
        </ul>
        <div className="p-next">
          <a href="">NEXT PROJECT</a>
          <img src={downArrow} alt="Next Project Button" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;