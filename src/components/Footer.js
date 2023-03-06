import React from 'react';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='stripe yellow'></div>
      <div className='stripe pink'></div>
      <div className='stripe orange'></div>
      <div className='stripe blue'></div>
      <a href="mailto:ashlynnwood@gmail.com">ashlynnwood@gmail.com</a>
    <div className='social'>
      <a href="https://www.linkedin.com/in/ashlynn-wood-b15b75258/" 
        target="_blank" rel="noreferrer">
        <img src={linkedIn} alt="Linkedin icon"/>
      </a>
      <a href="https://github.com/ashlynnwood" 
        target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub icon"/>
      </a>
    </div>
    <p>Copyright &copy; Ashlynn Wood 2023</p>
    </div>
  );
}