import React from 'react';
import Section from './Section';
import { PORTFOLIO_DATA } from '../constants';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" title="Portfolio Project" light>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="relative h-48 overflow-hidden bg-slate-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-white bg-navy-900 px-3 py-2 rounded hover:bg-navy-800 transition-colors"
                >
                  LIVE DEMO <ExternalLink size={12} />
                </a>

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded hover:bg-slate-200 transition-colors"
                >
                  GITHUB <Github size={12} />
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;