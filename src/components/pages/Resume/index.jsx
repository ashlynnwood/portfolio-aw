import React from 'react';
import pdf from '../../../assets/resume.pdf';
import './Resume.css';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={pdf} target='_blank' rel='noreferrer'>Download my resume</a>
      <p>Technical Skills</p>
      <div class="circle">
        <span class="shape-text">HTML</span>
        </div>
      <div class="triangle">
        <span class="shape-text">CSS</span>
        </div>
      <div class="diamond">
        <span class="shape-text">JavaScript</span>
        </div>
      <div class="circle">
        <span class="shape-text">React</span>
      </div>
      <div class="shape">
        <span class="shape-text">Bootstrap</span>
      </div>
      <div class="shape">
        <span class="shape-text">Node.js</span>
      </div>
      <div class="shape">
        <span class="shape-text">Express.js</span>
      </div>
      <div class="shape">
        <span class="shape-text">MongoDB</span>
      </div>
      <div class="shape">
        <span class="shape-text">APIs</span>
      </div>
      <div class="shape">
        <span class="shape-text">mySQL, Sequelize</span>
      </div>
      <div class="shape">
        <span class="shape-text">PWA</span>
      </div>
      <div class="shape">
        <span class="shape-text">MERN</span>
      </div>
    </div>
  );
}