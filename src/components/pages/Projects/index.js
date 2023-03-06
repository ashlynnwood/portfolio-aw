import React from 'react';
import img from '../../../assets/github.png';
import './Projects.css';


export default function Projects() {
  const data = [
    {
      title: 'The Paw Path',
      github: 'https://github.com/unnamedmistress/thepawpath',
      live: 'unnamedmistress.github.io/thepawpath/',
      image: img 
    },
    {
      title: 'Garage Sale Junkies',
      github: 'https://github.com/unnamedmistress/GarageJunkies',
      live: 'garagesalejunkies.herokuapp.com/',
      image: img 
    },
    {
      title: 'JATExt',
      github: 'https://github.com/ashlynnwood/JATExt',
      live: 'still-beach-37954.herokuapp.com/',
      image: img 
    },
    {
      title: 'Note Taker',
      github: 'https://github.com/ashlynnwood/express-note-taker',
      live: 'https://salty-bastion-86727.herokuapp.com/',
      image: img 
    },
    {
      title: 'README Generator',
      github: 'https://github.com/ashlynnwood/README-generator',
      image: img 
    },
    {
      title: 'Mongo Mate',
      github: 'https://github.com/ashlynnwood/mongo-mate',
      image: img 
    }
  ]
  return (
    <div>
      <h1>Projects</h1>
      {data.map(project => (
        <div className='project-card'>
          <p>{project.title}</p>
          <a href={project.github} target='_blank' rel='noreferrer'>Github</a>
          <a href={project.live} target='_blank' rel='noreferrer'>Check me out</a>
          <img src={project.image} alt='img'></img>
        </div>
      ))}
    </div>
  );
}
