import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-12 flex items-center justify-center gap-3">
          📬 Contact Me
        </h2>
        
        <p className="text-xl text-slate-300 mb-12">
          Let's build something cool together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a 
            href="mailto:jaisrikar.m@gmail.com"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
          >
            <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-blue-600 transition-colors">
              <Mail size={24} />
            </div>
            <span className="text-lg">Gmail</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jai-srikar-medarametla-1a42b4320/" // Replace 'your-linkedin-username' with your actual LinkedIn username
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
          >
            <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-blue-600 transition-colors">
              <Linkedin size={24} />
            </div>
            <span className="text-lg">LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/Jai496" // Replace 'your-github-username' with your actual GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors group"
          >
            <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-green-600 transition-colors">
              <Github size={24} />
            </div>
            <span className="text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;