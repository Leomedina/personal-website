import React from 'react';
import './style.css';


function ProjectInfo() {
  return(
    <div className="p-info">
      <h2>Considered Collectively</h2>
      <p>A web app that allows you to track and follow the bills in Congress that matter to you. Built using Python, Flask, Bootstrap 5, and deployed on Heroku using a PostgreSQL database.</p>
      <span className="p-view-link">View Project</span>
    </div>
  );
};

export default ProjectInfo;