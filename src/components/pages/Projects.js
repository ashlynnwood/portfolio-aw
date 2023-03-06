import React from 'react';
import img from '../../assets/github.png'


export default function Projects() {
  const data = [
    {title: 'test',
    github: 'test',
    image: img 
    }
  ]
  return (
    <div>
      <h1>Projects</h1>
      {data.map(project => (
        <div>
          <p>{project.title}</p>
          <a href={project.github}>{project.github}</a>
          <img src={project.image} alt='img'></img>
        </div>
      ))}
    </div>
  );
}
