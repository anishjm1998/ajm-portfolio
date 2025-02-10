import React from 'react';
import { FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { SiPostgresql, SiDjango, SiTailwindcss, SiGooglemaps, SiJupyter, SiTableau, SiFigma, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: "💡 Idea Submission Platform",
    duration: "Sep 2024 - Dec 2024",
    organization: "Rocket Innovation Studio",
    location: "Windsor, Ontario",
    description: "A collaborative platform with secure authentication and NLP-powered categorization.",
    bgColor: "from-blue-300 to-indigo-500",
    technologies: [
      { name: "React", icon: SiTailwindcss },
      { name: "Node.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Python", icon: SiJupyter },
      { name: "Docker", icon: SiGooglemaps },
      { name: "Figma", icon: SiFigma },
    ],
    githubLink: "https://github.com/anishjm1998/mind-palace"
  },
  {
    title: "🌍 Surplus Resources Donation Platform",
    duration: "Sep 2024 - Dec 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "A donation platform connecting NGOs with surplus donors using geolocation filtering.",
    bgColor: "from-pink-300 to-purple-500",
    technologies: [
      { name: "Django", icon: SiDjango },
      { name: "React", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiGooglemaps },
      { name: "Google Maps", icon: SiGooglemaps },
    ],
    githubLink: "https://github.com/anishjm1998/samaritan-connect"
  },
  {
    title: "📊 Predictive Analysis of Employee Attrition",
    duration: "Jun 2024 - Aug 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "An AI-powered solution predicting employee turnover with 97% accuracy.",
    bgColor: "from-green-300 to-teal-500",
    technologies: [
      { name: "Python", icon: SiJupyter },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Tableau", icon: SiTableau },
    ],
    githubLink: "https://github.com/anishjm1998/EmployeeAttritionPrediction"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`rounded-3xl p-8 shadow-lg transition-transform transform hover:-translate-y-2 
                  hover:shadow-2xl bg-gradient-to-br ${project.bgColor} text-white`}
      style={{
        backdropFilter: "blur(20px)",
        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <div className="text-lg mt-2 opacity-90">
            <span>{project.duration}</span> • <span>{project.organization}</span>
          </div>
          <div className="flex items-center mt-1 opacity-90">
            <FaMapMarkerAlt className="mr-2" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Floating GitHub Button */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>

      <p className="text-lg mt-4 opacity-90">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mt-5">
        {project.technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-2 bg-white bg-opacity-20 rounded-full shadow-sm backdrop-blur-md"
          >
            <tech.icon className="mr-2" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">✨ Featured Projects ✨</h1>
          <p className="text-xl text-gray-600 mt-2">Showcasing my journey through technology & innovation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
