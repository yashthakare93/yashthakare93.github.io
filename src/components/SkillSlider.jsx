import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
];

const SkillSlider = () => {
  return (
    <div className="relative overflow-hidden py-4 bg-black w-full border-t border-b border-white/10 ">
      <div className="animate-slide flex w-max gap-4 whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            {skill.icon}
            {skill.name}
          </button>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillSlider;
