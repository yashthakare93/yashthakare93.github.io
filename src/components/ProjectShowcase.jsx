import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Calendar,
  CheckCircle,
  Globe,
  Bot,
  Terminal,
  UserSquare,
  Code2
} from 'lucide-react';

const projectsData = {
  projects: [
    {
      id: 1,
      title: 'FlexLingo: Sign Language Translator',
      description: 'IoT-based smart glove translating sign language into text and speech using ML and sensors.',
      startDate: 'Jan 2025',
      status: 'Completed',
      techStack: ['Arduino', 'Flex Sensors', 'MPU6050', 'Random Forest', 'BiLSTM', 'React.js', 'Express.js'],
      hasDemo: false,
      category: 'AI/ML',
      codeUrl: 'https://github.com/yashthakare93/flexlingo'
    },
    {
      id: 2,
      title: 'Algorithm Visualizer',
      description: 'Interactive tool to visualize sorting and searching algorithms with speed control.',
      startDate: 'Oct 2024',
      status: 'Completed',
      techStack: ['React', 'Tailwind CSS'],
      hasDemo: true,
      category: 'Web',
      demoUrl: 'https://algorithm-visualizer-hub.vercel.app/',
      codeUrl: 'https://github.com/yashthakare93/Visualizer'
    },
    {
      id: 3,
      title: 'URL Shortener & Analytics Tracker',
      description: 'A full-stack app for shortening URLs with secure login and usage tracking.',
      startDate: 'Feb 2024',
      status: 'Completed',
      techStack: ['Node.js', 'Express.js', 'EJS', 'JWT'],
      hasDemo: true,
      demoUrl: 'https://url-shortner-zq7h.onrender.com',
      category: 'Web',
      codeUrl: 'https://github.com/yashthakare93/url-shortener'
    },
    {
      id: 4,
      title: 'Developer Portfolio Website',
      description: 'Personal portfolio to showcase projects, skills, and experiences with interactive UI and animations.',
      startDate: 'Jul 2025',
      status: 'In Progress',
      techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'OGL', 'React Bits'],
      hasDemo: true,
      category: 'Portfolio',
      codeUrl: 'https://github.com/yashthakare93/portfolio'
    },
    {
      id: 5,
      title: 'Git Functionality Using JavaScript',
      description: 'A custom implementation of core Git operations using Node.js, replicating features like init, hash-object, cat-file, ls-tree, commit-tree, and clone.',
      startDate: 'Jul 2024',
      status: 'Completed',
      techStack: ['Node.js', 'JavaScript', 'SHA1 Hashing'],
      hasDemo: false,
      category: 'CLI Tool',
      codeUrl: 'https://github.com/yashthakare93/git-using-javascript'
    }
  ],
  filters: ['All', 'Web', 'AI/ML', 'CLI Tool', 'Portfolio']
};

const iconComponents = {
  Web: Globe,
  AI: Bot,
  'CLI Tool': Terminal,
  Portfolio: UserSquare,
  Default: Code2
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconComponents[project.category] || iconComponents['Default'];

  return (
    <div
      className="relative bg-trasparent/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
      </div>

      {/* Icon */}
      <div className="relative mb-6 flex justify-center">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Title & Description */}
      <div className="relative text-center text-white mb-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/80 text-sm">{project.description}</p>
      </div>

      {/* Metadata */}
      <div className="flex justify-center gap-4 text-xs text-white/70 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{project.startDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3" />
          <span className="px-2 py-1 bg-green-500/20 rounded-full">{project.status}</span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-auto">
        <button
          onClick={() => window.open(project.codeUrl, '_blank')}
          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition hover:bg-white/30 hover:scale-105"
        >
          <Github className="w-4 h-4" />
          Code
        </button>
        {project.hasDemo && (
          <button
            onClick={() => window.open(project.demoUrl, '_blank')}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg transition hover:bg-white/90 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </button>
        )}
      </div>

      {/* Overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          } pointer-events-none`}
      />
    </div>
  );
};

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
  >
    {label}
  </button>
);

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData.projects
      : projectsData.projects.filter((project) => project.category === activeFilter);

  return (
    <section id='projects' className="min-h-screen bg-black py-12 px-4">
      <div className="relative min-h-screen bg-black text-slate-100 font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 bg-indigo-900/40 rounded-full blur-[150px] animate-pulse" />
        <div className="relative z-10 w-full max-w-7xl">



          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-6">
              <p className="inline-block bg-cyan-800/30 text-lime-300 px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md">
                Projects That Reflect My Journey
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Project Showcase
              </h2>
            </div>

            {/* Filter */}
            <div className="flex justify-center gap-4 mb-12">
              {projectsData.filters.map((filter) => (
                <FilterButton
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>

            {/* Cards Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto space-y-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="break-inside-avoid">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
