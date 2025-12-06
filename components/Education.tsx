import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Riwayat Pendidikan">
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Dot Indicator */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-slate-300 group-hover:border-gold-500 transition-colors duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {edu.school}
                    </h3>
                    <div className="text-gold-600 font-medium text-sm mb-2 sm:mb-0 flex items-center gap-2">
                        <GraduationCap size={16} />
                        {edu.level}
                    </div>
                </div>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              
              {edu.description && (
                <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-lg mt-2 border border-slate-100">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;