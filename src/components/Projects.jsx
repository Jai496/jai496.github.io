import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Highway Car Speed Detector",
      description: "Arduino-based system for detecting and measuring vehicle speeds on highways using ultrasonic sensors and real-time data processing.",
      tags: ["Arduino", "Sensors", "Embedded Systems"],
      githubUrl: "#", // Replace with actual URL
      isComingSoon: false
    },
    {
      title: "Quadrature Down Converter",
      description: "Circuit simulation and design of quadrature down converter for RF signal processing applications using LTSpice.",
      tags: ["LTSpice", "RF Design", "Signal Processing"],
      githubUrl: "#", // Replace with actual URL
      isComingSoon: false
    },
    {
      title: "Automatic Waste Sorter",
      description: "Smart waste sorting system using computer vision and sensors to automatically categorize different types of waste materials.",
      tags: ["Arduino", "Sensors", "Automation"],
      githubUrl: null,
      isComingSoon: true
    },
    {
      title: "Visibility-Triggered Car Wiper",
      description: "Intelligent windshield wiper system that automatically activates based on visibility conditions and weather sensor inputs.",
      tags: ["Arduino", "Sensors", "Automotive"],
      githubUrl: null,
      isComingSoon: true
    },
    {
      title: "Paper Analysis: InfoComm",
      description: "Comprehensive research analysis and implementation study of cutting-edge concepts from InfoComm conference papers.",
      tags: ["Research", "Communication", "Analysis"],
      githubUrl: "#", // Replace with actual URL
      isComingSoon: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
          🚀 Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;