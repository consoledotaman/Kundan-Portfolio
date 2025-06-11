
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
      <DirectorialSection />
      <BioSection />
      <EducationSection />
      <WorkSection />
      <TestimonialsSection />
      <FeaturedWorksSection />
      <ContactSection />
    </div>
  );
};

export default Index;
