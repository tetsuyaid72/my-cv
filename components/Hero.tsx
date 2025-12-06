import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Terbuka untuk Peluang Kerja
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Halo, Saya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-800">
                {PERSONAL_DATA.name}
              </span>
            </h1>

            <p className="text-xl text-gold-600 font-medium">
              {PERSONAL_DATA.role}
            </p>

            <h2 className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-lg mx-auto md:mx-0">
              {PERSONAL_DATA.heroHeadline}
            </h2>

            <p className="text-slate-500 leading-relaxed max-w-lg mx-auto md:mx-0">
              {PERSONAL_DATA.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
              <a
                href={PERSONAL_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-navy-900 text-white rounded-lg font-semibold shadow-lg shadow-navy-900/20 hover:bg-navy-800 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Hubungi via WhatsApp <ArrowRight size={18} />
              </a>

              <a
                href="/CV-MuhammadHasbuna.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-white text-navy-900 border border-navy-900 rounded-lg font-medium hover:bg-slate-100 transition flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hasbunstore72@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 text-slate-600 font-medium hover:text-navy-900 transition flex items-center gap-2"
              >
                Email Saya <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-full h-full bg-gold-500/10 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy-900/10 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>

              {/* Main Image */}
              <div className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-10 bg-slate-200">
                <img
                  src="/images/foto.png"
                  alt="Muhammad Hasbuna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/10 hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce-slow">
                <span className="text-2xl"></span>
                <span className="text-sm font-bold text-navy-900">Siap Berkerja</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;