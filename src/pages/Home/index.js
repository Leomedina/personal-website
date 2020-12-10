import React from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Project from '../../components/Project';
import LineBreak from '../../components/Linebreak';
import Footer from '../../components/Footer';
import { projectInfo, project1Info, project2Info } from '../../assets/projects';

function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <LineBreak />
      <Project
        project="project"
        projectInfo={projectInfo}
        nextProject="project-1" />
      <Project
        project="project-1"
        projectInfo={project1Info}
        nextProject='project-2' />
      <Project
        project="project-2"
        projectInfo={project2Info}
        nextProject={false} />
      <Footer />
    </main>
  );
};

export default Home;