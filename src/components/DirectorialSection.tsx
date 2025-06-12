
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const DirectorialSection = () => {
  return (
    <section className="relative py-20 px-6 section-dark overflow-hidden">
      <Meteors number={12} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <h2 className="section-heading animate-slide-in-left">
                DIRECTORIAL
                <br />
                UNIVERSE
              </h2>
              <div className="hidden md:block w-32 h-0.5 bg-gold animate-fade-in"></div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="body-text text-xl leading-relaxed mb-6">
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              </p>
              <p className="body-text">
                lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
              </p>
            </div>
          </div>

          {/* Right side - Image gallery */}
          <div className="grid grid-cols-1 gap-8 animate-slide-in-right">
            <div className="portfolio-card ">
              <img 
                src="/images/graphic-design-temp1.jpg"
                alt="Graphic Design Work 1"
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="portfolio-card " style={{ animationDelay: '1s' }}>
              <img 
                src="/images/graphic-design-temp2.jpg"
                alt="Graphic Design Work 2"
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorialSection;
