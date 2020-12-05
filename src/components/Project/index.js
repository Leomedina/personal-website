import React from 'react';
import ProjectInfo from './ProjectInfo';
import ProjectHero from './ProjectHero';
import './style.css';

function Project({ project, projectInfo }) {
  const { title, description, image, github, live, type, tech } = projectInfo;
  return (
    <article className={project}>
      <ProjectInfo title={title} description={description} live={live}/>
      <ProjectHero image={image} type={type} tech={tech} />
    </article>
  );
};

export default Project;