import React from "react";

const projects = [
  {
    name: "Project 1",
    description: "This is a brief description of Project 1.",
    demoLink: "https://your-live-demo-link.com", // Replace with actual Live Demo link
    githubLink: "https://github.com/yourusername/project1", // Replace with actual GitHub link
  },
  {
    name: "Project 2",
    description: "This is a brief description of Project 2.",
    demoLink: "https://your-live-demo-link.com", // Replace with actual Live Demo link
    githubLink: "https://github.com/yourusername/project2", // Replace with actual GitHub link
  },
  {
    name: "Project 3",
    description: "This is a brief description of Project 3.",
    demoLink: "https://your-live-demo-link.com", // Replace with actual Live Demo link
    githubLink: "https://github.com/yourusername/project3", // Replace with actual GitHub link
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#575656] rounded-lg shadow-lg p-6 transition transform hover:scale-95 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-center mb-4">
              {project.name}
            </h3>
            <p className="text-sm text-center mb-6">{project.description}</p>

            <div className="flex justify-center space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-6 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-6 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
