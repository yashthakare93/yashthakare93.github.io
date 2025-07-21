import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home', href: '#home' },
  { id: 'about', icon: User, label: 'About', href: '#about' },
  { id: 'projects', icon: Briefcase, label: 'Projects', href: '#projects' },
  { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
];

// ========== Desktop Top Navbar ==========
const TopNavbar = () => (
  <motion.nav
    exit={{ opacity: 0, y: -20 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="hidden sm:flex fixed top-4 inset-x-0 z-50 justify-center"
  >
    <div className="w-max bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-10 py-4 relative hover:cursor-pointer">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="hidden sm:inline text-base">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </motion.nav>
);

// ========== Desktop Left Sidebar ==========
// ========== Desktop Left Bottom Navbar ==========

const LeftNavbar = () => (
  <motion.nav
    exit={{ opacity: 0, x: -20 }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="hidden sm:flex fixed bottom-4 left-4 z-50"
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-4 flex flex-col items-center gap-4">
      {navItems.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          whileHover={{ scale: 1.15 }}
          className="text-white hover:text-cyan-300 transition-colors"
        >
          <item.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  </motion.nav>
);

// ========== Mobile Bottom Navbar (Always visible on mobile) ==========
const BottomNavbarMobile = () => (
  <motion.nav
    exit={{ opacity: 0, y: 20 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="sm:hidden fixed bottom-4 inset-x-4 z-50"
  >
    <div className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-6 py-3">
      {navItems.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          whileHover={{ scale: 1.1 }}
          className="text-white hover:text-blue-400 transition-colors"
        >
          <item.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  </motion.nav>
);

// ========== Main Navbar Component ==========
const Navbar = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Desktop Center Nav only on hero */}
        {isHeroVisible && <TopNavbar key="top" />}
        {/* Desktop Left Nav only on scroll */}
        {!isHeroVisible && <LeftNavbar key="left" />}
      </AnimatePresence>

      {/* Mobile Bottom Nav always visible */}
      <BottomNavbarMobile />
    </>
  );
};

export default Navbar;
