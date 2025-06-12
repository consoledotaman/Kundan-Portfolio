
import React from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, User, Briefcase, FileText } from 'lucide-react';

const HeroSection = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#bio', icon: User },
    { name: 'Work', url: '#work', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: FileText }
  ];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/website kundan.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 "></div>
      </div>

      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-12">
        <div className="mb-8">
          <h1 className="hero-text animate-fade-in">
            KUNDAN
            <br />
            UPADHYAY
          </h1>
        </div>
        
        {/* Bottom left text */}
        <div className="absolute bottom-12 left-12 max-w-md animate-slide-in-left">
          <p className="body-text text-light-cream text-l ml-4">
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
