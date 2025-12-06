import React from 'react';
import Section from './Section';
import { HARD_SKILLS, SOFT_SKILLS } from '../constants';
import { MessageCircle, Users, Puzzle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'MessageCircle': <MessageCircle size={20} />,
  'Users': <Users size={20} />,
  'Puzzle': <Puzzle size={20} />,
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skill & Keahlian">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Hard Skills */}
        <div>
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-gold-500 rounded-full"></span>
            Technical Skills
          </h3>
          <div className="space-y-6">
            {HARD_SKILLS.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700">{skill.name}</span>
                  <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-navy-900 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-green-500 rounded-full"></span>
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {SOFT_SKILLS.map((skill, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-green-600">
                  {iconMap[skill.icon]}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{skill.name}</h4>
                  <p className="text-sm text-slate-600 mt-1">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default Skills;