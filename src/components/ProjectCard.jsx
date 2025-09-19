import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags, githubUrl, demoUrl, isComingSoon }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 transition-all duration-300 group border border-slate-700">      
      <h3 className="text-xl font-bold text-blue-400 mb-3">{title}</h3>
      <p className="text-slate-300 mb-4 min-h-[80px] leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {githubUrl && !isComingSoon && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {demoUrl && !isComingSoon && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
        {isComingSoon && (
          <span className="text-slate-500 italic">Code coming soon...</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;