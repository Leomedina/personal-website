import React from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Project from '../../components/Project';
import LineBreak from '../../components/Linebreak';

function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <LineBreak />
      <Project project={"project"} />
      <Project project={"project-1"} />
      <Project project={"project-2"} />
    </main>
  );
};

export default Home;