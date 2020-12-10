import React from 'react';
import ProjectInfo from './ProjectInfo';
import ProjectHero from './ProjectHero';
import './style.css';

function Project({ project, projectInfo, nextProject }) {
  const { title, description, image, live, type, tech } = projectInfo;
  return (
    <article className={project} id={project}>
      <ProjectInfo
        title={title}
        description={description}
        live={live} />
      <ProjectHero
        image={image}
        type={type}
        tech={tech}
        nextProject={nextProject} />
    </article>
  );
};

export default Project;