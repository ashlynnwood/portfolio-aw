import React from 'react';
import pdf from '../../../assets/resume.pdf';
import './Resume.css';

export default function Resume() {
  return (
    <div>
      <div className='box'><span className="shape-text">HTML</span></div>
      <h1>Resume</h1>
      <a href={pdf} target='_blank' rel='noreferrer'>Download my resume</a>
      <h4>Here's what I can do:</h4>
      <div className='skills-container'>
      <div className="circle">
        <span className="shape-text">HTML</span>
        </div>
      <div className="triangle">
        <span className="shape-text">CSS</span>
        </div>
      <div className="diamond">
        <span className="shape-text">JavaScript</span>
        </div>
      <div className="circle">
        <span className="shape-text">React</span>
      </div>
      <div className="cloud">
        <span className="shape-text">Bootstrap</span>
      </div>
      <div className="shape">
        <span className="shape-text">Node.js</span>
      </div>
      <div className="shape">
        <span class="shape-text">Express.js</span>
      </div>
      <div className="shape">
        <span className="shape-text">MongoDB</span>
      </div>
      <div className="shape">
        <span className="shape-text">APIs</span>
      </div>
      <div className="shape">
        <span className="shape-text">mySQL, Sequelize</span>
      </div>
      <div className="shape">
        <span className="shape-text">PWA</span>
      </div>
      <div className="shape">
        <span className="shape-text">MERN</span>
      </div>
      </div>
    </div>
  );
}