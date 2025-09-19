import React from 'react';

// Animated Circuit Background Component
const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8">
              <animate attributeName="stopOpacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.6">
              <animate attributeName="stopOpacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.4">
              <animate attributeName="stopOpacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Circuit Lines */}
        <g stroke="url(#circuitGlow)" strokeWidth="2" fill="none">
          <path d="M100 200 L300 200 L300 400 L500 400">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M600 100 L800 100 L800 300 L900 300">
            <animate attributeName="stroke-dasharray" values="0,800;800,0" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M200 600 L400 600 L400 800 L700 800">
            <animate attributeName="stroke-dasharray" values="0,900;900,0" dur="7s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Circuit Nodes */}
        <g fill="#3B82F6">
          <circle cx="300" cy="200" r="4">
            <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="100" r="4">
            <animate attributeName="r" values="2;6;2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="600" r="4">
            <animate attributeName="r" values="2;6;2" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <CircuitBackground />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
          Hi, I'm <span className="text-blue-400">Jai</span> —
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-4">
          Electronics & Communication Student @ IIIT Hyderabad
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Exploring VLSI and Embedded Systems through hands-on projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('resume')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;