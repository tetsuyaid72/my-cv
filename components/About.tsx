import React from 'react';
import Section from './Section';
import { PERSONAL_DATA } from '../constants';
import { MapPin, Mail, Phone, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="Tentang Saya" light>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Narrative Column */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Profil Profesional</h3>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            {PERSONAL_DATA.about}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="font-semibold text-navy-900 mb-1">Dedikasi</h4>
               <p className="text-sm text-slate-500">Berkomitmen pada pelayanan publik yang prima.</p>
            </div>
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="font-semibold text-navy-900 mb-1">Adaptif</h4>
               <p className="text-sm text-slate-500">Cepat belajar teknologi baru untuk efisiensi desa.</p>
            </div>
          </div>
        </div>

        {/* Data Column */}
        <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl"></div>
          
          <h3 className="text-xl font-bold text-white mb-6 relative z-10">Data Pribadi</h3>
          
          <ul className="space-y-5 relative z-10">
            <li className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">Profesi</span>
                <span className="text-slate-100 font-medium">{PERSONAL_DATA.role}</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">Domisili</span>
                <span className="text-slate-100 font-medium">{PERSONAL_DATA.location}</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">Email</span>
                <a href={`mailto:${PERSONAL_DATA.email}`} className="text-slate-100 hover:text-gold-500 transition-colors break-all">
                  {PERSONAL_DATA.email}
                </a>
              </div>
            </li>
             <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">WhatsApp</span>
                <a href={PERSONAL_DATA.whatsappUrl} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-gold-500 transition-colors">
                  {PERSONAL_DATA.whatsapp}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;