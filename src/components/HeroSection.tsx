
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-12">
        <div className="mb-8">
          <h1 className="hero-text animate-fade-in">
            PATRICK
            <br />
            MEMPHIS
          </h1>
        </div>

        {/* Top right navigation */}
        <div className="absolute top-12 right-12">
          <span className="body-text text-2xl text-light-cream">Portfolio</span>
        </div>
        
        {/* Bottom left text */}
        <div className="absolute bottom-12 left-12 max-w-md animate-slide-in-left">
          <p className="body-text text-light-cream text-xl">
            Crafting tales that transcend time, genre, and expectation.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-1 h-16 bg-gold rounded-full opacity-70 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
