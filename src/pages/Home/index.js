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
      <section className="projects">
        <Project />
      </section>
    </main>
  );
};

export default Home;