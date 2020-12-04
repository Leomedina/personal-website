import React from 'react';
import ProjectInfo from './ProjectInfo';
import ProjectHero from './ProjectHero';
import './style.css';

function Project({project}) {
  return (
    <article className={project}>
      <ProjectInfo />
      <ProjectHero />
    </article>
  );
};

export default Project;