import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-blue-400 font-bold text-xl">Jai Srikar</div>
          <div className="flex space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-slate-300 hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('resume')} className="text-slate-300 hover:text-blue-400 transition-colors">Resume</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-blue-400 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;