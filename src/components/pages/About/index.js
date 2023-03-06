import React from 'react';
import profilep from '../../../assets/profile-p.jpg'
import './About.css';

export default function About() {
  return (
    <div className='about-card'>
      <div>
      <h1>Hello, I'm Ashlynn Wood</h1>
      <p>
        I'm super cool and you should hire me.
      </p>
      </div>
      <img src={profilep} 
          alt='ashlynn' className='profile-pic'/>
    </div>
  );
}
