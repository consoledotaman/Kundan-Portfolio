
import React, { useState } from 'react';
import { AppleHelloEnglishEffect } from '@/components/ui/apple-hello-effect';
import { Meteors } from '@/components/ui/meteors';

const LoaderSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (!isLoading) {
    return null;
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center section-dark overflow-hidden">
      <Meteors number={20} />
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        <AppleHelloEnglishEffect 
          speed={1.1} 
          className="h-24 md:h-32 lg:h-40 text-gold"
          onAnimationComplete={handleAnimationComplete}
        />
        
        <div className="text-center">
          <h2 className="font-benguiat text-2xl md:text-3xl font-bold text-gold mb-2">
            PATRICK MEMPHIS
          </h2>
          <p className="body-text text-light-cream">
            Loading Portfolio...
          </p>
        </div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 gradient-overlay opacity-80"></div>
    </section>
  );
};

export default LoaderSection;
