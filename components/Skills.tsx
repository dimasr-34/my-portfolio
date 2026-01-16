
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-2">Expertise</h2>
          <h3 className="text-4xl font-extrabold mb-6">Technical skills</h3>
          <p className="text-slate-400">
            Continuously evolving with the industry, mastering both foundational technologies and emerging paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                    <i className={`fas ${skill.icon}`}></i>
                  </div>
                  <span className="font-bold text-slate-200">{skill.name}</span>
                </div>
                <span className="text-sm text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Responsive Design', 'Code Quality', 'Team Leadership', 'Fast Learner'].map(item => (
            <div key={item} className="p-6 glass-card rounded-2xl text-center border-dashed border-slate-700">
              <span className="text-sm font-semibold text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
