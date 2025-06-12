
import React from 'react';
import { Button } from '@/components/ui/button';
import { Meteors } from '@/components/ui/meteors';

const ContactSection = () => {
  return (
    <section className="relative py-20 px-6 section-dark overflow-hidden">
      <Meteors number={15} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="section-heading mb-8 animate-fade-in">
          LET'S CREATE TOGETHER
        </h2>
        
        <div className="w-32 h-0.5 bg-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="animate-slide-in-left">
            <h3 className="font-benguiat text-2xl font-bold text-gold mb-4">
              Get In Touch
            </h3>
            <p className="body-text mb-6">
              Ready to bring your vision to life? Let's discuss how we can create 
              something extraordinary together.
            </p>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="body-text">kundanlodu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="body-text">+91 91141 36575</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="body-text">Bilaspur, Chhattisgarh</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="font-benguiat text-2xl font-bold text-gold mb-4">
              Services
            </h3>
            <div className="space-y-3 text-left">
              <div className="body-text">• Video Editing & Post-Production</div>
              <div className="body-text">• Graphic Design & Branding</div>
              <div className="body-text">• Motion Graphics & Animation</div>
              <div className="body-text">• Commercial & Documentary Work</div>
              <div className="body-text">• Creative Direction</div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            className="bg-gold text-dark-forest hover:bg-gold/90 font-benguiat font-bold text-lg px-12 py-4 transition-all duration-300 hover:scale-105"
          >
            START A PROJECT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
