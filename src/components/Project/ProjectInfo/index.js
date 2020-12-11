import React from 'react';
import './style.css';


function ProjectInfo({ title, description, live }) {
  return (
    <div className="p-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        className="p-view-link"
        href={live}
        target="_blank"
        rel="noopener noreferrer">
        VIEW PROJECT</a>
    </div>
  );
};

export default ProjectInfo;