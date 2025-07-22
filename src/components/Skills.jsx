import React from 'react';
import { motion } from "framer-motion";
import {
    Github,
    GitBranch,
    FileCode2,
    Code2,
    Terminal,
    Database,
    Cpu,
    Server,
    Boxes,
    FileSearch,
} from "lucide-react";
import { FaJava } from "react-icons/fa";

// Wrapper component to provide a consistent container and background
const PageWrapper = ({ children }) => (
    <div className="relative min-h-screen bg-black text-slate-100 font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 bg-indigo-900/40 rounded-full blur-[150px] animate-pulse" />
        <div className="relative z-10 w-full max-w-7xl">
            {children}
        </div>
    </div>
);

// Custom SVG Icons (retained from original)
const JsIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1,1h22v22H1V1z M21,21V3H3v18H21z M15.6,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8 c-0.4,0.3-0.9,0.4-1.4,0.4c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8 c0.5,0,1,0.2,1.3,0.4L17.3,9c-0.4-0.3-1-0.5-1.8-0.5 c-2,0-3.4,1.5-3.4,3.5C12.1,14.4,13.5,15.9,15.6,15.9z M9.9,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8C10.7,13.9,10.2,14,9.7,14 c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8 c0.5,0,1,0.2,1.3,0.4L11.6,9C11.2,8.7,10.6,8.5,9.8,8.5 c-2,0-3.4,1.5-3.4,3.5C6.4,14.4,7.8,15.9,9.9,15.9z" />
    </svg>
);

const ReactIcon = (props) => (
    <svg {...props} viewBox="-11.5 -10.23 23 20.46">
        <circle r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

const NodeIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2,14.7l-8.9,5.2c-0.6,0.3-1.3,0.3-1.9,0 l-8.9-5.2c-0.6-0.3-1-1-1-1.7V6.9c0-0.7,0.4-1.4,1-1.7l8.9-5.2 c0.6-0.3,1.3-0.3,1.9,0l8.9,5.2c0.6,0.3,1,1,1,1.7v6.1 C23.2,13.7,22.8,14.4,22.2,14.7z M12,19.3l7.9-4.6V7.4L12,2.8 L4.1,7.4v7.3L12,19.3z" />
    </svg>
);

const TailwindIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C10.334,13.382,8.973,12,6.001,12z" />
    </svg>
);

const SupabaseIcon = (props) => (
    <svg {...props} viewBox="0 0 256 256" fill="currentColor">
        <path d="M134.7 20.8a12 12 0 0 1 21.2 0l71.1 123.4a12 12 0 0 1-10.5 18H152v61.1a12 12 0 0 1-21.2 0L59.7 99.9a12 12 0 0 1 10.6-18h64.4V20.8z" />
    </svg>
);


// Data for skills, now including a color for visual flair
const skillCategories = [
    {
        title: "Frontend & Languages",
        skills: [
            { name: 'Java', icon: FaJava, color: '#f89820' },
            { name: 'JavaScript', icon: JsIcon, color: '#f7df1e' },
            { name: 'React', icon: ReactIcon, color: '#61dafb' },
            { name: 'HTML5', icon: FileCode2, color: '#e34f26' },
            { name: 'CSS3', icon: Code2, color: '#1572b6' },
            { name: 'Tailwind CSS', icon: TailwindIcon, color: '#38b2ac' },
        ]
    },
    {
        title: "Backend & Database",
        skills: [
            { name: 'Node.js', icon: NodeIcon, color: '#68a063' },
            { name: 'Express.js', icon: Server, color: '#ffffff' },
            { name: 'MongoDB', icon: Database, color: '#4db33d' },
            { name: 'MySQL', icon: Database, color: '#00758f' },
            { name: 'PostgreSQL', icon: Database, color: '#336791' },
            { name: 'Supabase', icon: SupabaseIcon, color: '#3ecf8e' },
        ]
    },
    {
        title: "Tools & Methodologies",
        skills: [
            { name: 'Git', icon: GitBranch, color: '#f1502f' },
            { name: 'GitHub', icon: Github, color: '#ffffff' },
            { name: 'VS Code', icon: Terminal, color: '#007acc' },
            { name: 'Postman', icon: FileSearch, color: '#ff6c37' },
            { name: 'Arduino', icon: Cpu, color: '#00979d' },
            { name: 'Machine Learning', icon: Boxes, color: '#ff9900' },
        ]
    }
];

// Animation Variants for Framer Motion
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// Component for an individual skill item
const SkillItem = ({ skill }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            variants={skillItemVariants}
            className="group relative flex flex-col items-center justify-center p-4 aspect-square rounded-xl bg-slate-800/50 border border-slate-700/80 transition-all duration-300"
        >
            {/* Background glow on hover */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
                }}
            />
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300 group-hover:text-white transition-colors duration-300" style={{ color: skill.color }} />
            <span className="mt-3 text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
            </span>
        </motion.div>
    );
};

// Component for a category of skills
const SkillCategory = ({ title, skills }) => (
    <motion.div
        variants={categoryVariants}
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
    >
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
            {title}
        </h3>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
            {skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
            ))}
        </motion.div>
    </motion.div>
);

// The main redesigned Skills component
const Skills = () => {
    return (
        <PageWrapper>
            <div className="text-center mb-12">
                <div className="text-center mb-12">
                    <p className="text-sm bg-cyan-800/40 text-lime-300 px-4 py-1 rounded-full mb-3 font-medium w-fit mx-auto">
                        My Development Toolkit
                    </p>
                
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400"
                >
                    Skills
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-slate-400 max-w-3xl mx-auto"
                >
                    A curated set of technologies I leverage to build fast, scalable, and impactful digital products.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {skillCategories.map((category) => (
                    <SkillCategory key={category.title} title={category.title} skills={category.skills} />
                ))}
            </motion.div>
        </PageWrapper>
    );
};

// Default export to be used in your application
export default function App() {
    return <Skills />;
}
