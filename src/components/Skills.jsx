import {
    Github,
    GitBranch,
    FileCode2,
    Code2,
    Terminal,
    Database,
    Cpu,
    Server,
    LayoutPanelTop,
    Boxes,
    MousePointerClick,
    FileSearch,
} from 'lucide-react';

import Cursorpointer from './Cursorpointer';

const JsIcon = (props) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M1,1h22v22H1V1z M21,21V3H3v18H21z M15.6,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8c-0.4,0.3-0.9,0.4-1.4,0.4c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8c0.5,0,1,0.2,1.3,0.4L17.3,9c-0.4-0.3-1-0.5-1.8-0.5c-2,0-3.4,1.5-3.4,3.5c0,2,1.4,3.5,3.5,3.5z M9.9,15.9c0.7,0,1.3-0.2,1.8-0.5l-0.6-1.8C10.7,13.9,10.2,14,9.7,14c-0.9,0-1.6-0.7-1.6-1.8c0-1.1,0.7-1.8,1.6-1.8c0.5,0,1,0.2,1.3,0.4L11.6,9C11.2,8.7,10.6,8.5,9.8,8.5c-2,0-3.4,1.5-3.4,3.5C6.4,14.4,7.8,15.9,9.9,15.9z" /></svg>;
const ReactIcon = (props) => <svg {...props} viewBox="-11.5 -10.23 23 20.46"><circle r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>;
const NodeIcon = (props) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M22.2,14.7l-8.9,5.2c-0.6,0.3-1.3,0.3-1.9,0l-8.9-5.2c-0.6-0.3-1-1-1-1.7V6.9c0-0.7,0.4-1.4,1-1.7l8.9-5.2c0.6-0.3,1.3-0.3,1.9,0l8.9,5.2c0.6,0.3,1,1,1,1.7v6.1C23.2,13.7,22.8,14.4,22.2,14.7z M12,19.3l7.9-4.6V7.4L12,2.8L4.1,7.4v7.3L12,19.3z" /></svg>;
const TailwindIcon = (props) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.334,13.382,8.973,12,6.001,12z"></path></svg>;


const mySkillsList = [
    { name: 'Java', icon: () => <span className="font-bold text-xl">J</span> },
    { name: 'JavaScript', icon: JsIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'HTML5', icon: FileCode2 },
    { name: 'CSS3', icon: Code2 },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Express.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Supabase', icon: () => <span className="font-semibold text-green-400 text-base">SB</span> },
    { name: 'n8n', icon: () => <span className="font-semibold text-orange-400 text-base">n8n</span> },
    { name: 'Arduino', icon: Cpu },
    { name: 'Machine Learning', icon: Boxes },
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: Github },
    { name: 'VS Code', icon: Terminal },
    { name: 'Postman', icon: FileSearch },
];

const Skills = () => {
    return (
        <div className="h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* <Cursorpointer
                spinDuration={20}
                hideDefaultCursor={true}
            /> */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-teal-300 mb-4 tracking-wider">
                    My Skills
                </h1>
                <p className="text-lg text-slate-300 mb-12 max-w-2xl">
                    A collection of technologies and tools I work with to bring ideas to life.
                </p>

                {/* Grid container for the skills */}
                <div className="w-full px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 md:gap-6">

                        {mySkillsList.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                // Each individual skill item
                                <div
                                    key={skill.name}
                                    className="cursor-target bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 hover:bg-slate-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-teal-400/20"
                                >
                                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 mb-3 text-teal-400" />
                                    <span className="font-semibold text-sm md:text-base text-slate-100">{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;