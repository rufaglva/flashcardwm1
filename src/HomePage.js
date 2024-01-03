import React from 'react';

const projects = [
  {
    title: 'Flashcard App',
    description: 'A flashcard management app with React.',
    link: 'https://github.com/your-username/flashcard-app',
  },
  // Add more projects as needed
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>
        This is a showcase of the projects I've worked on. Explore each project
        to learn more.
      </p>
      <h2>Projects:</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
