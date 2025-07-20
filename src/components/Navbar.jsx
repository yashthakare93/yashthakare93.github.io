import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, ArrowRight } from 'lucide-react';

// --- Constants and Child Components (Defined Outside) ---

// Define navigation items as a constant since it doesn't change.
const navItems = [
  { id: 'home', icon: Home, label: 'Home', href: '#home' },
  { id: 'about', icon: User, label: 'About', href: '#about' },
  { id: 'projects', icon: Briefcase, label: 'Projects', href: '#projects' },
  { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
];

/**
 * Top Navbar Component
 * Moved outside the main Navbar component.
 * It now receives props for functionality.
 */
const TopNavbar = ({ onTogglePosition }) => (
  <motion.nav
    // Add exit animation for smooth transition
    exit={{ opacity: 0, y: -20 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-4 py-2">
      <div className="flex items-center justify-center space-x-2">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          </motion.a>
        ))}
        <motion.button
          onClick={() => onTogglePosition('left')}
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-blue-500/20 text-blue-400 rounded-full"
        >
          {/* Arrow points right, indicating a move to the side */}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  </motion.nav>
);

/**
 * Left Navbar Component
 * Also moved outside and receives props.
 */
const LeftNavbar = ({ onTogglePosition }) => (
  <motion.nav
    exit={{ opacity: 0, x: -20 }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-2">
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            className="p-3 text-white hover:text-blue-400 transition-colors"
          >
            <item.icon className="w-5 h-5" />
          </motion.a>
        ))}
        <motion.button
          onClick={() => onTogglePosition('top')}
          whileHover={{ scale: 1.1 }}
          className="p-3 bg-blue-500/20 text-blue-400 rounded-full"
        >
          {/* Arrow points up, indicating a move to the top */}
          <ArrowRight className="w-5 h-5 -rotate-90" />
        </motion.button>
      </div>
    </div>
  </motion.nav>
);


// --- Main Parent Component ---

const Navbar = () => {
  const [position, setPosition] = useState('top');

  return (
    <AnimatePresence mode="wait">
      {position === 'top' ? (
        // Add a unique key to help AnimatePresence
        <TopNavbar key="top" onTogglePosition={setPosition} />
      ) : (
        <LeftNavbar key="left" onTogglePosition={setPosition} />
      )}
    </AnimatePresence>
  );
};

export default Navbar;