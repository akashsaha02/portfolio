import React from "react";

// Project Card Component
const ProjectCard = ({ title, description, link, repoLink, image }) => (
  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
    <div className="mb-4">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
    </div>
    <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex gap-4">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
        >
          Live Demo
        </a>
      )}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
        >
          GitHub Repo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div id="projects" className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <ProjectCard
            title="Personal Portfolio"
            description="A personal portfolio website to showcase my web development skills, projects, and achievements."
            link="https://example.com" // Replace with actual link
            repoLink="https://github.com/yourusername/portfolio" // Replace with actual GitHub repo link
            image="https://via.placeholder.com/400" // Replace with actual image
          />
          {/* Project 2 */}
          <ProjectCard
            title="E-commerce Platform"
            description="A fully functional e-commerce website with product catalog, shopping cart, and payment integration."
            link="https://example.com" // Replace with actual link
            repoLink="https://github.com/yourusername/e-commerce" // Replace with actual GitHub repo link
            image="https://via.placeholder.com/400" // Replace with actual image
          />
          {/* Project 3 */}
          <ProjectCard
            title="Weather App"
            description="A weather app that fetches data from a weather API and displays the current weather in your city."
            link="https://example.com" // Replace with actual link
            repoLink="https://github.com/yourusername/weather-app" // Replace with actual GitHub repo link
            image="https://via.placeholder.com/400" // Replace with actual image
          />
          {/* Add more projects here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
