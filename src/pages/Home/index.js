import React from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Project from '../../components/Project';

function Home() {
  return (
    <main>
      <Nav />
      <Header />
      {/* <section className="about">
        <h2>What I'm Working On</h2>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
      </section> */}
      <section className="projects">
        <Project />
      </section>
    </main>
  );
};

export default Home;