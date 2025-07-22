import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <h1 className="text-xl font-semibold tracking-wide">
          Yash Thakare
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yasthakare93"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/yashthakare93"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:thakareyash74@gmail.com"
            className="hover:text-gray-400 transition duration-300"
          >
            <Mail />
          </a>
          <a
            href="src\assets\cv\Yash_Thakare_9356978166.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FileText />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Yash Thakare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
