import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-slate-800 relative">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center flex items-center justify-center gap-3">
          📄 Resume
        </h2>
        
        <div className="bg-slate-900 rounded-lg p-8 shadow-2xl">
          {/* PDF Embed */}
          <div className="w-full h-[800px] mb-6 rounded-lg overflow-hidden">
            <iframe
              src="/resume.pdf"
              width="100%"
              height="100%"
              className="border-0 rounded-lg"
              title="Resume PDF"
            />
          </div>
          
          <div className="text-center">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;