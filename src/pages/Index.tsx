
import React from 'react';
import LoaderSection from '../components/LoaderSection';
import HeroSection from '../components/HeroSection';
import DirectorialSection from '../components/DirectorialSection';
import BioSection from '../components/BioSection';
import EducationSection from '../components/EducationSection';
import WorkSection from '../components/WorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturedWorksSection from '../components/FeaturedWorksSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-forest">
      <LoaderSection />
      <HeroSection />
      <div id="directorial">
        <DirectorialSection />
      </div>
      <div id="bio">
        <BioSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="featured">
        <FeaturedWorksSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
