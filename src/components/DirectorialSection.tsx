
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
                A visionary artist who transforms concepts into compelling visual narratives. 
                With a unique blend of technical expertise and creative intuition, every project 
                becomes a journey through innovative storytelling and distinctive aesthetic vision.
              </p>
              <p className="body-text">
                Specializing in creating immersive experiences that bridge the gap between 
                commercial appeal and artistic integrity, bringing brands and stories to life 
                through masterful video editing and striking graphic design.
              </p>
            </div>
          </div>

          {/* Right side - Image gallery */}
          <div className="grid grid-cols-1 gap-8 animate-slide-in-right">
            <div className="portfolio-card animate-glow">
              <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop"
                alt="Graphic Design Work 1"
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="portfolio-card animate-glow" style={{ animationDelay: '1s' }}>
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
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
