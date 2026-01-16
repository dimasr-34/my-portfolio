
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import ConstellationBackground from './components/ConstellationBackground';
import { useReveal } from './hooks/useReveal';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  useReveal();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <ConstellationBackground />
      <Navbar activeSection={activeSection} />
      
      <main>
        {/* Section Home */}
        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>
        
        {/* Section Projects */}
        <section id="projects" className="py-24 reveal scroll-mt-20">
          <Projects />
        </section>
        
        {/* Section Skills */}
        <section id="skills" className="py-24 reveal scroll-mt-20">
          <Skills />
        </section>
        
        {/* Section Experience */}
        <section id="experience" className="py-24 bg-slate-900/10 reveal scroll-mt-20">
          <Experience />
        </section>
        
        {/* Section Contact */}
        <section id="contact" className="py-24 reveal scroll-mt-20">
          <Contact />
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800/50 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Dimas Rokhim Dwi Saputra. Portfolio Updated 2026.</p>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
