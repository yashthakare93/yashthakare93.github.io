// Hero.jsx
import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import { useScroll, useTransform, motion } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import { Code, Target, BookOpen } from 'lucide-react';
import { Eye } from 'lucide-react';
import Lightning from './Lightning';
const ExternalLinkIcon = () => (
  <ArrowUpRight className="inline-block h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
);



function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const fadeOutOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    scrollYProgress.onChange((val) => console.log('Scroll progress:', val));
  }, [scrollYProgress]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const socialLinks = [
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/yash-thakare01/' },
    { name: 'GITHUB', href: 'https://github.com/yashthakare93' },
    { name: 'INSTAGRAM', href: '#' },
    { name: 'GMAIL', href: 'mailto:thakareyash74@gmail.com' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col min-h-screen w-full justify-between px-6 py-10 md:px-12 lg:px-20  text-white font-sans overflow-hidden"
    >
      <Navbar />

      {/* Lightning Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none ">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      <motion.div style={{ opacity: fadeOutOpacity }} className="flex flex-col gap-10 pt-20 pl-10">


        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <Eye className="w-6 h-6 text-lime-400" />
          <span className="text-gray-300">Hey! It's me Yash Thakare,</span>
        </motion.div>

        {/* Text + Cards */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Section */}
          <div className="flex-1 max-w-7xl ">
            <a
              href="#about"
              className="group inline-block rounded-full border border-gray-500 px-6 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white hover:bg-white hover:text-black mb-5"
            >
              Know me better <ExternalLinkIcon />
            </a>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-balance">
              <motion.span variants={itemVariants}>
                Building <span className="text-lime-400">intelligent web</span> applications
              </motion.span>{" "}
              <motion.span variants={itemVariants}>
                and <span className="text-lime-400">smart IoT</span> solutions
              </motion.span>{" "}
              <motion.span variants={itemVariants}>
                that make life easier.
              </motion.span>
            </h1>


          </div>


          {/* CardSwap */}
          <motion.div variants={itemVariants} className="flex-1 w-full">
            <div className="w-full max-w-xl mx-auto min-h-[480px]">
              <CardSwap cardDistance={60} verticalDistance={70} height={350} delay={5000} pauseOnHover={false}>
                {/* Why I Code */}
                <Card className="p-6 rounded-xl bg-[#1a1a1a] space-y-4 overflow-hidden flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <Code size={20} className="text-gray-400" />
                      <h3 className="text-xl font-semibold text-white">Why I Code</h3>
                    </div>
                    <ul className="text-gray-300 text-base list-disc list-inside space-y-2">
                      <li>I love turning ideas into tangible digital solutions.</li>
                      <li>Solving logical challenges gives me a sense of achievement.</li>
                      <li>I enjoy the creativity and precision coding demands.</li>
                      <li>It’s my medium to make a positive impact through tech.</li>
                    </ul>
                  </div>
                  <p className="text-xs text-lime-500 pt-4 italic">
                    Solving real problems with real code.
                  </p>
                </Card>

                {/* My Mission */}
                <Card className="p-6 rounded-xl bg-[#1a1a1a] space-y-4 overflow-hidden flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <Target size={20} className="text-gray-400" />
                      <h3 className="text-xl font-semibold text-white">My Mission</h3>
                    </div>
                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                      <li>To simplify complex ideas through clear design.</li>
                      <li>Build tools that are scalable, fast, and user-friendly.</li>
                      <li>Empower people with intuitive digital experiences.</li>
                      <li>Create software that solves real-world problems.</li>
                    </ul>
                  </div>
                  <p className="text-xs text-lime-500 pt-4 italic">
                    Purpose-driven tech solutions, always.
                  </p>
                </Card>

                {/* How I Learn */}
                <Card className="p-6 rounded-xl bg-[#1a1a1a] space-y-4 overflow-hidden flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <BookOpen size={20} className="text-gray-400" />
                      <h3 className="text-xl font-semibold text-white">How I Learn</h3>
                    </div>
                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                      <li>I learn by doing — building projects and prototypes.</li>
                      <li>Experimentation helps me explore new technologies.</li>
                      <li>I absorb better through failure and iteration.</li>
                      <li>Community feedback plays a key role in improvement.</li>
                    </ul>
                  </div>
                  <p className="text-xs text-lime-500 pt-4 italic">
                    Learning is building, breaking, and evolving.
                  </p>
                </Card>
              </CardSwap>

            </div>
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        <motion.div className="flex flex-col items-center justify-center text-center gap-4 sm:flex-row sm:justify-between sm:text-left sm:items-center flex-wrap w-full  px-2">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 w-full">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm font-bold text-white transition-colors duration-300"
              >
                {link.name} <ExternalLinkIcon />
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10" />

    </section>
  );
}

export default Hero;
