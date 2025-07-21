import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import Aurora from './Aurora';
import Navbar from './Navbar';

const skills = [
  { name: 'React', color: '#61dafb' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Node.js', color: '#3c873a' },
  { name: 'Next.js', color: '#000' },
  { name: 'MongoDB', color: '#47A248' },
];

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section id='home' className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden cursor-default">
      <Aurora className="absolute top-0 left-0 w-full h-full z-0" colorStops={["#7CFF67", "#B19EEF", "#5227FF"]} blend={0.5} amplitude={1.0} speed={0.5} />
      <Navbar />

      <main className="relative w-full h-screen">
        <motion.div
          className="absolute top-1/2 left-1/2 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
          }}
        >
          {/* Text Content */}
          <motion.div className="text-center lg:text-left lg:w-1/2" variants={itemVariants}>
            <h2 className="text-lg text-slate-400 mb-2 font-medium">Hello 👋</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              I'm <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-600 bg-clip-text text-transparent animate-pulse">Yash Thakare</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-300 mt-4 tracking-wide">
              PESMCOE Student · Developer · Coder
            </h2>
            <p className="text-base md:text-lg text-slate-400 mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              I create fast, beautiful websites that put people first. Let’s build something meaningful.
            </p>
            <motion.div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" variants={itemVariants}>
              <a
                href="#projects"
                className="group bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Explore Project</span>
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="src/assets/cv/Yash_Thakare_9356978166.pdf"
                download="Yash_Thakare_Resume.pdf"
                className="group border-2 border-slate-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image without hover effects */}
          <motion.div
            className="relative w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0"
            style={{ transformStyle: 'preserve-3d', transform: `perspective(1000px) rotateY(${imageX}deg) rotateX(${imageY}deg)` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } } }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-slate-900/50">
              <img src="https://yashthakare.vercel.app/_next/image?url=%2Fprofile-pic.png&w=1920&q=75" alt="Yash" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="hidden sm:flex absolute bottom-12 right-8 md:right-12 flex-col gap-6 z-40" variants={itemVariants}>
          {[{ icon: Github, href: 'https://github.com/yashthakare93', label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/yash-thakare01/', label: 'LinkedIn' },
          { icon: Mail, href: 'mailto:thakareyash74@gmail.com', label: 'Email' }].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} className="group text-slate-400 hover:text-orange-400 transition-colors duration-300" aria-label={label}>
              <Icon className="w-7 h-7 transform hover:scale-125" />
            </a>
          ))}
        </motion.div>
      </main>
    </section>
  );
}

export default Hero;
