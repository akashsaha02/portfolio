import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Project Card Component
const ProjectCard = ({id, title, description, link, repoLink, image }) => (
  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
    <div className="mb-4">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
    </div>
    <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
    <div className="flex gap-4">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 hover:underline"
        >
          Live Demo
        </a>
      )}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 hover:underline"
        >
          GitHub Repo
        </a>
      )}
      <Link
        to={`/project/${id}`}
        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 hover:underline">
        View Details
        </Link>
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulating a fetch request to load the JSON data (e.g., from a local file or API)
    const loadProjects = async () => {
      const response = await fetch('./projects.json'); // Replace with the actual path
      const data = await response.json();
      setProjects(data);
    };

    loadProjects();
  }, []);

  return (
    <div id="projects" className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
           <Link key={project.id} to={`/project/${project.id}`} >
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              repoLink={project.repoLink}
              image={project.image}
            />
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
