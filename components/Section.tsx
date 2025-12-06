import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, className = "", children, light = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${light ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center relative inline-block w-full">
            <span className="relative z-10">{title}</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500 rounded-full mt-2"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;