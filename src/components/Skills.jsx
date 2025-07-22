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

// Custom SVG Icons
const JsIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M1,1h22v22H1V1z M21,21V3H3v18H21z M15.6,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8
         c-0.4,0.3-0.9,0.4-1.4,0.4c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8
         c0.5,0,1,0.2,1.3,0.4L17.3,9c-0.4-0.3-1-0.5-1.8-0.5
         c-2,0-3.4,1.5-3.4,3.5C12.1,14.4,13.5,15.9,15.6,15.9z
         M9.9,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8C10.7,13.9,10.2,14,9.7,14
         c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8
         c0.5,0,1,0.2,1.3,0.4L11.6,9C11.2,8.7,10.6,8.5,9.8,8.5
         c-2,0-3.4,1.5-3.4,3.5C6.4,14.4,7.8,15.9,9.9,15.9z"
        />
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
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M22.2,14.7l-8.9,5.2c-0.6,0.3-1.3,0.3-1.9,0
         l-8.9-5.2c-0.6-0.3-1-1-1-1.7V6.9c0-0.7,0.4-1.4,1-1.7l8.9-5.2
         c0.6-0.3,1.3-0.3,1.9,0l8.9,5.2c0.6,0.3,1,1,1,1.7v6.1
         C23.2,13.7,22.8,14.4,22.2,14.7z M12,19.3l7.9-4.6V7.4L12,2.8
         L4.1,7.4v7.3L12,19.3z"
        />
    </svg>
);

const TailwindIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8
         c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12
         c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8
         c-0.913-0.228-1.565-0.89-2.288-1.624C16.334,6.182,14.973,4.8,12.001,4.8z
         M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8
         c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576
         c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8
         c-0.913-0.228-1.565-0.89-2.288-1.624C10.334,13.382,8.973,12,6.001,12z"
        />
    </svg>
);

const SupabaseIcon = (props) => (
    <svg
        {...props}
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M134.7 20.8a12 12 0 0 1 21.2 0l71.1 123.4a12 12 0 0 1-10.5 18H152v61.1a12 12 0 0 1-21.2 0L59.7 99.9a12 12 0 0 1 10.6-18h64.4V20.8z" />
    </svg>
);


// Skill categories
const frontendLanguages = [
    { name: 'Java', icon: FaJava },
    { name: 'JavaScript', icon: JsIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'HTML5', icon: FileCode2 },
    { name: 'CSS3', icon: Code2 },
    { name: 'Tailwind CSS', icon: TailwindIcon },
];

const backendDatabase = [
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Express.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Supabase', icon: SupabaseIcon },
];

const toolsMethodologies = [
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: Github },
    { name: 'VS Code', icon: Terminal },
    { name: 'Postman', icon: FileSearch },
    { name: 'Arduino', icon: Cpu },
    { name: 'Machine Learning', icon: Boxes },
];

// Animation variants
const containerVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Skills component
const Skills = () => {
    const renderSkills = (title, list) => (
        <motion.div
            className="bg-transparent/10 backdrop-blur-xl border border-white/20 p-6 rounded-lg w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-xl font-bold mb-4 text-teal-300">{title}</h2>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
                {list.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            variants={cardVariant}
                            key={skill.name}
                            className="flex flex-col items-center justify-center p-4 bg-slate-900 backdrop-blur-xl border border-white/20  rounded-lg hover:bg-slate-700 transform hover:scale-105 transition-all duration-300"
                        >
                            <Icon className="w-10 h-10 mb-2 text-teal-400" />
                            <span className="text-sm font-semibold text-slate-100">{skill.name}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 py-16">
            <div className="text-center mb-6">
                <p className="inline-block bg-cyan-800/30 text-cyan-300 px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md">
                    My Development Toolkit
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                    My Skills
                </h2>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg text-slate-300 mb-12 text-center max-w-3xl leading-relaxed"
            >
                A curated set of technologies, languages, and tools I leverage to build fast, scalable, and impactful digital products.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
                {renderSkills("Frontend & Languages", frontendLanguages)}
                {renderSkills("Backend & Database", backendDatabase)}
                {renderSkills("Tools & Technologies", toolsMethodologies)}
            </div>
        </div>

    );
};

export default Skills;
