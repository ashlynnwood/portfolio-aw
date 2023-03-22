import React from 'react';
import paw from '../../../assets/pawpath.jpeg'
import garage from '../../../assets/garagesale.png'
import note from '../../../assets/notetaker.png'
import jate from '../../../assets/jate.png'
import anythm from '../../../assets/anthym.jpeg'
import mongomate from '../../../assets/mongoose.jpeg'
import './Projects.css';

export default function Projects() {
  const data = [
    {
      title: 'The Paw Path',
      github: 'https://github.com/unnamedmistress/thepawpath',
      live: 'unnamedmistress.github.io/thepawpath/',
      image: paw
    },
    {
      title: 'Garage Sale Junkies',
      github: 'https://github.com/unnamedmistress/GarageJunkies',
      live: 'garagesalejunkies.herokuapp.com/',
      image: garage 
    },
    {
      title: 'JATExt',
      github: 'https://github.com/ashlynnwood/JATExt',
      live: 'still-beach-37954.herokuapp.com/',
      image: jate
    },
    {
      title: 'Note Taker',
      github: 'https://github.com/ashlynnwood/express-note-taker',
      live: 'https://salty-bastion-86727.herokuapp.com/',
      image: note 
    },
    {
      title: 'Anthym',
      github: 'https://github.com/AlexNash91/Beat-Bots',
      live: 'https://anthym.herokuapp.com/',
      image: anythm 
    },
    {
      title: 'Mongo Mate',
      github: 'https://github.com/ashlynnwood/mongo-mate',
      image: mongomate
    }
  ]

  return (
    <div className='heading'>
      <h1>Projects</h1>
      <h5>Check out my work!</h5>
    <div className='project-container'>
      {data.map(project => (
        <div className='project-card'>
          <div className="image-container">
            <a href={project.live}
                className="project-link"
                target="_blank" rel='noreferrer'
                >
                <img src={project.image} 
                    alt={project.title}
                    className="project-image"
                    />
            </a>
        </div>
        <div className="project-details-container">
          <h2 className='project-title'>{project.title}</h2>
          <a href={project.github} target='_blank' rel='noreferrer' className='link'>Github</a>
          {/* <a href={project.live} target='_blank' rel='noreferrer' className='link'>Check me out</a> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
