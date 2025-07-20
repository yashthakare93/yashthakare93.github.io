import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import Aurora from './Aurora';
import Navbar from './Navbar';

// --- SVG Icons for Skills ---
const ReactIcon = (props) => (
  <svg viewBox="-11.5 -10.23 23 20.46" {...props}><circle r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);
const NodeIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M22.2,14.7l-8.9,5.2c-0.6,0.3-1.3,0.3-1.9,0l-8.9-5.2c-0.6-0.3-1-1-1-1.7V6.9c0-0.7,0.4-1.4,1-1.7l8.9-5.2c0.6-0.3,1.3-0.3,1.9,0l8.9,5.2c0.6,0.3,1,1,1,1.7v6.1C23.2,13.7,22.8,14.4,22.2,14.7z M12,19.3l7.9-4.6V7.4L12,2.8L4.1,7.4v7.3L12,19.3z"/></svg>
);
const JsIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M1,1h22v22H1V1z M21,21V3H3v18H21z M15.6,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8c-0.4,0.3-0.9,0.4-1.4,0.4c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8c0.5,0,1,0.2,1.3,0.4L17.3,9c-0.4-0.3-1-0.5-1.8-0.5c-2,0-3.4,1.5-3.4,3.5c0,2,1.4,3.5,3.5,3.5z M9.9,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8C10.7,13.9,10.2,14,9.7,14c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8c0.5,0,1,0.2,1.3,0.4L11.6,9C11.2,8.7,10.6,8.5,9.8,8.5c-2,0-3.4,1.5-3.4,3.5C6.4,14.4,7.8,15.9,9.9,15.9z"/></svg>
);

// --- Skills Array ---
const skills = [
    { name: 'React', icon: ReactIcon },
    { name: 'JavaScript', icon: JsIcon },
    { name: 'Next.js', icon: () => <span className="font-bold text-xl">N</span>},
    { name: 'MongoDB', icon: () => <span className="font-bold text-xl">M</span>},
    { name: 'Node.js', icon: NodeIcon },
];

// --- SkillIcon Component ---
const SkillIcon = ({ icon: Icon, angle, radius }) => {
  const circleRadius = 22;
  const circumference = 2 * Math.PI * circleRadius;

  const top = `calc(50% - ${radius * Math.sin(angle)}px)`;
  const left = `calc(50% + ${radius * Math.cos(angle)}px)`;

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const circleVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: { strokeDashoffset: 0 },
  };

  return (
    <motion.div
      className="absolute"
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
      variants={iconVariants}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="absolute w-full h-full" viewBox="0 0 50 50">
          <motion.circle
            cx="25" cy="25" r={circleRadius}
            stroke="#164e63"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            variants={circleVariants}
            transform="rotate(-90 25 25)"
          />
        </svg>
        <div className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-cyan-300">
           <Icon className="w-7 h-7" />
        </div>
      </div>
    </motion.div>
  );
};


function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const imageX = mousePosition.x * 12;
  const imageY = mousePosition.y * -12;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };
  
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans relative overflow-hidden">
      <Aurora
        className="absolute top-0 left-0 w-full h-full z-0"
        colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <Navbar />

      <main className="relative w-full h-screen">
        <motion.div
          className="absolute top-1/2 left-1/2 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6"
          initial="hidden"
          animate="visible"
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 }}
          }}
        >
          {/* Text Content */}
          <motion.div className="text-center lg:text-left lg:w-1/2" variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
              I'm <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Yash</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mt-4">
              Software Developer
            </h2>
            <p className="text-lg text-slate-400 mt-6 max-w-xl mx-auto lg:mx-0">
              Crafting beautiful and scalable digital experiences with modern web technologies, focusing on user-centric design and robust performance.
            </p>
          </motion.div>
          
          {/* Interactive Image Container */}
          <motion.div
            className="relative w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0"
            style={{ transformStyle: 'preserve-3d', transform: `perspective(1000px) rotateY(${imageX}deg) rotateX(${imageY}deg)` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' }}}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* The Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-slate-900/50">
              <img src="https://yashthakare.vercel.app/_next/image?url=%2Fprofile-pic.png&w=1920&q=75" alt="Yash - Software Developer" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Orbiting Skill Icons Container */}
            <motion.div 
               className="absolute top-0 left-0 w-full h-full"
               variants={skillsContainerVariants}
               initial="hidden"
               animate={isHovered ? "visible" : "hidden"}
            >
                {skills.map((skill, index) => {
                    // --- ANGLE CALCULATION CHANGED ---
                    // This now starts the animation from the bottom-right and sweeps clockwise.
                    const startAngle = 1.3 * Math.PI;  // Start at bottom-right (approx 72 degrees)
                    const sweepAngle = 1 * Math.PI;  // How far the arc should go
                    const angle = startAngle + (index / (skills.length - 1)) * sweepAngle;

                    const radius = window.innerWidth > 1024 ? 220 : 170;
                    return (
                        <SkillIcon 
                            key={skill.name} 
                            icon={skill.icon} 
                            angle={angle}
                            radius={radius}
                        />
                    )
                })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Buttons & Socials (Unchanged) */}
        <motion.div className="absolute bottom-12 left-8 md:left-12 flex flex-col sm:flex-row gap-4" variants={itemVariants}>
          <a href="#project" className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"><span>Start a Project</span><ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" /></a>
          <a href="#resume" className="group border-2 border-slate-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"><Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /><span>My Resume</span></a>
        </motion.div>
        <motion.div className="absolute bottom-12 right-8 md:right-12 flex flex-row md:flex-col gap-8" variants={itemVariants}>
            {[{ icon: Github, href: '#', label: 'GitHub' }, { icon: Linkedin, href: '#', label: 'LinkedIn' }, { icon: Mail, href: '#', label: 'Email' }].map(({ icon: Icon, href, label }) => (<a key={label} href={href} className="group text-slate-400 hover:text-orange-400 transition-colors duration-300" aria-label={label}><Icon className="w-7 h-7 transform hover:scale-125" /></a>))}
        </motion.div>
      </main>
    </div>
  );
}

export default Hero;