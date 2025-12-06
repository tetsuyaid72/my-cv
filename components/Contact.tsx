import React from 'react';
import Section from './Section';
import { PERSONAL_DATA } from '../constants';
import { Mail, Phone, Download } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Hubungi Saya" className="pb-32">
        <div className="max-w-4xl mx-auto bg-navy-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Tertarik bekerja sama?
                </h3>
                <p className="text-slate-300 mb-10 text-lg max-w-xl mx-auto">
                    Jika Anda tertarik dengan profil saya atau ingin berdiskusi lebih lanjut mengenai peluang kerja, silakan hubungi saya.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                     <a
                        href={PERSONAL_DATA.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full md:w-auto px-8 py-4 bg-gold-500 text-navy-900 rounded-xl font-bold hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
                    >
                        <Phone size={20} /> Hubungi (WhatsApp)
                    </a>
                    <a
                        href={`mailto:${PERSONAL_DATA.email}`}
                        className="w-full md:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                    >
                        <Mail size={20} /> Email Saya
                    </a>
                    <a
                        href="#"
                        className="w-full md:w-auto px-8 py-4 bg-transparent border border-slate-600 text-slate-300 rounded-xl font-semibold hover:text-white hover:border-white transition-colors flex items-center justify-center gap-2"
                    >
                        <Download size={20} /> Download CV PDF
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base border-t border-white/10 pt-8">
                    <div className="flex items-center gap-2 text-slate-300">
                        <Mail size={16} className="text-gold-500" /> {PERSONAL_DATA.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                         <Phone size={16} className="text-gold-500" /> {PERSONAL_DATA.whatsapp}
                    </div>
                     <div className="flex items-center gap-2 text-slate-300">
                         <span className="text-gold-500">📍</span> {PERSONAL_DATA.location}
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
};

export default Contact;