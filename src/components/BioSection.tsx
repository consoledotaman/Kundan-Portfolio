
import React from 'react';

const BioSection = () => {
  return (
    <section className="py-20 px-6 bg-vanilla">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="animate-slide-in-left">
            <div className="portfolio-card">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop"
                alt="Featured Work"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right side - Bio and Approach */}
          <div className="space-y-12 animate-slide-in-right">
            {/* Bio */}
            <div>
              <h3 className="font-benguiat text-3xl md:text-4xl font-bold text-forest mb-6">
                CREATIVE BIO
              </h3>
              <p className="body-text mb-4">
                With over a decade of experience in visual storytelling, I've developed 
                a distinctive approach that blends cinematic techniques with cutting-edge 
                design principles. My journey began in traditional film editing and evolved 
                into a comprehensive creative practice.
              </p>
              <p className="body-text">
                From intimate documentaries to large-scale commercial campaigns, 
                my work spans diverse industries while maintaining a consistent focus 
                on authentic narrative and visual excellence.
              </p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="font-benguiat text-3xl md:text-4xl font-bold text-forest mb-6">
                MY APPROACH
              </h3>
              <p className="body-text mb-4">
                Every project begins with deep listening and understanding. I believe 
                that the most powerful visuals emerge from genuine connection with the 
                story being told and the audience experiencing it.
              </p>
              <p className="body-text">
                My methodology combines strategic thinking with intuitive creativity, 
                ensuring that each piece not only looks exceptional but serves its 
                intended purpose with precision and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
