
import React from 'react';
import { EXPERIENCES, ORGANIZATIONS, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Education Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-2">Academic</h2>
            <h3 className="text-4xl font-extrabold">Education</h3>
          </div>
          
          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="p-8 glass-card rounded-3xl border border-indigo-500/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <i className="fas fa-graduation-cap text-6xl text-indigo-400"></i>
                </div>
                <div className="relative z-10">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{edu.period}</span>
                  <h4 className="text-2xl font-bold mt-1">{edu.institution}</h4>
                  <p className="text-lg text-slate-200 font-semibold mb-3">{edu.degree}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/20">
                      IPK: {edu.gpa}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-2">History</h2>
            <h3 className="text-4xl font-extrabold">Professional Journey</h3>
          </div>

          <div className="relative space-y-12">
            <div className="absolute top-0 left-0 md:left-1/2 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block"></div>
            
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.company + exp.period} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute top-0 left-[-6px] md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                
                <div className="md:w-1/2 pl-6 md:pl-0">
                  <div className={`p-8 glass-card rounded-3xl ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-tighter mb-2 block">{exp.period}</span>
                    <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-slate-300 font-semibold mb-4">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Experience */}
        <div className="mt-32">
          <div className="mb-12">
            <h2 className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-2">Leadership</h2>
            <h3 className="text-3xl font-extrabold">Organizational Experience</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ORGANIZATIONS.map((org) => (
              <div key={org.name} className="p-8 glass-card rounded-3xl border-l-4 border-l-purple-500/50">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{org.period}</span>
                <h4 className="text-lg font-bold mt-2 text-indigo-300">{org.name}</h4>
                <p className="text-sm font-semibold text-slate-300 mb-3">{org.role}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
