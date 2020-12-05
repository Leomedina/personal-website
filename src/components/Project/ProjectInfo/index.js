import React from 'react';
import './style.css';


function ProjectInfo({ title, description, live }) {
  return (
    <div className="p-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="p-view-link"><a href={live} target="_blank" rel="noopener noreferrer"  >VIEW PROJECT</a></span>
    </div>
  );
};

export default ProjectInfo;