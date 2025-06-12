
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const BioSection = () => {
  return (
    <section className="relative py-20 px-6 section-accent overflow-hidden">
      <Meteors number={10} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="animate-slide-in-left">
            <div className="portfolio-card ">
              <img 
                src="/images/bio-img.jpg"
                alt="Featured Work"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right side - Bio and Approach */}
          <div className="space-y-12 animate-slide-in-right">
            {/* Bio */}
            <div className="animate-fade-in">
              <h3 className="font-benguiat text-3xl md:text-5xl font-bold text-gold mb-6">
                BIO
              </h3>
              <p className="body-text text-xl leading-relaxed mb-6">
                Kundan Upadhyay is a visionary director whose cinematic journey has been marked by a profound exploration of human emotions and narratives. With a unique blend of artistry and storytelling, he has captivated audiences across the globe.
              </p>
              
            </div>

            {/* Approach */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-benguiat text-3xl md:text-5xl font-bold text-gold mb-6">
                MY APPROACH
              </h3>
              
              <p className="body-text">
                Film, for me, has always been more than just a visual medium; it's a canvas where human emotions, landscapes, and stories converge. Every frame I craft is a blend of my experiences, dreams, and the myriad tales I've encountered on my journey. With each film, I aim to bridge the gap between reality and artistry, taking audiences on an immersive journey that resonates deep within.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
