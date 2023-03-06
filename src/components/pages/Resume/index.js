import React from 'react';
import pdf from '../../../assets/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={pdf} target='_blank' rel='noreferrer'>Download my resume</a>
      <p>Technical Skills</p>
  
    </div>
  );
}