import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Navbar />
      <Hero />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;