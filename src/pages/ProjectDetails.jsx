import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch('/projects.json'); // Replace with the actual path
      const data = await response.json();
      const project = data.find((proj) => proj.id === id);
      setProject(project);
    };

    loadProjects();
  }, [id]);

  if (!project) {
    return (
      <div className="text-center py-20 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-semibold">Loading Project Details...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-8">
          {project.title}
        </h1>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Image */}
          <div className="flex justify-center ">
            <img
              src={project.image || 'https://via.placeholder.com/400'}
              alt={project.title}
              className="rounded-lg shadow-lg w-full max-h-[500px] max-w-3xl object-cover"
            />
          </div>

          {/* Project Description and Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                Project Description
              </h2>
              <p className="text-lg mt-2 text-justify">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                Technologies Used
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded-full shadow-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition shadow-md"
                >
                  View Live Demo
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition shadow-md"
                >
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
