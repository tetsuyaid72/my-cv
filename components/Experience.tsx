import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Pengalaman & Kegiatan" light>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-gold-200 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-900 transition-colors duration-300">
                <Briefcase className="text-navy-900 group-hover:text-white transition-colors duration-300" size={24} />
            </div>
            
            <h3 className="text-lg font-bold text-navy-900 mb-1 h-auto min-h-[56px] flex items-center">
                {exp.role}
            </h3>
            
            <div className="text-sm font-semibold text-gold-600 mb-4 uppercase tracking-wide">
                {exp.period}
            </div>
            
            <ul className="space-y-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;