import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="glass-card rounded-3xl max-w-2xl max-h-[90vh] overflow-y-auto relative border border-indigo-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        {/* Image */}
        <div className="relative h-96 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-4xl font-black mb-6 text-white">{project.title}</h2>

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Details Section */}
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 mb-8">
            <h3 className="text-indigo-300 font-bold text-sm uppercase tracking-wider mb-4">Detail Proyek</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <span className="text-slate-400">Status</span>
                <span className="text-white font-semibold">Selesai</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <span className="text-slate-400">Teknologi</span>
                <span className="text-white font-semibold">{project.tags.join(', ')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Tipe Proyek</span>
                <span className="text-white font-semibold">
                  {project.tags[0] === 'PHP' ? 'Backend Development' : 'Full Stack'}
                </span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
