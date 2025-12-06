import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">
          © 2025 Muhammad Hasbuna. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Dibuat dengan React, Tailwind CSS & Vibe Coding spirit.
        </p>
      </div>
    </footer>
  );
};

export default Footer;