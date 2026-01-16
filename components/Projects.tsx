
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-xs mb-4">Selected Works</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter">Membangun Solusi Berbasis Data.</h3>
          </div>
          <p className="max-w-md text-slate-400 text-lg leading-relaxed">
            Kombinasi antara algoritma cerdas dan antarmuka yang responsif untuk kebutuhan bisnis modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`reveal stagger-${(idx % 3) + 1} group relative glass-card rounded-[32px] overflow-hidden transition-all duration-700`}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-white text-slate-950 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wider">Detail Proyek</span>
                  </div>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-indigo-300 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-slate-800/50">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest group/link hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    Selengkapnya 
                    <i className="fas fa-arrow-right text-indigo-400 transition-transform group-hover/link:translate-x-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;
