import React from 'react';
import downArrow from '../../../assets/images/down-arrow.png';
import './style.css';

function ProjectHero({ image, type, tech, nextProject }) {
  return (
    <div className="p-hero">
      <img src={image} className="filter" alt="project" />
      <div className="p-meta">
        <ul>
          <li><p className="meta-font">{`${type}`}</p></li>
          <li><p className="meta-font">{`${tech}`}</p></li>
        </ul>
        {nextProject ? <div className="p-next">
          <a href={`#${nextProject}`}>NEXT PROJECT
          <img src={downArrow} alt="Next Project Button" /></a>
        </div> : <div />}
      </div>
    </div>
  );
};

export default ProjectHero;