import React from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Project from '../../components/Project';

function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <section className="projects">
        <Project />
      </section>
    </main>
  );
};

export default Home;