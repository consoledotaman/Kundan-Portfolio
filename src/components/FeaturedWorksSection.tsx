
import React from 'react';
import { Button } from '@/components/ui/button';
import { Meteors } from '@/components/ui/meteors';

const FeaturedWorksSection = () => {
  const featuredWorks = [
    {
      title: 'BREAKING BOUNDARIES: PATRICK MEMPHIS TRANSFORMS INDIE CINEMA WITH WHISPERS OF THE CITY',
      description: 'A powerful narrative exploring human resilience through intimate storytelling and innovative editing techniques that push the boundaries of conventional cinema.',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop'
    },
    {
      title: 'FROM INDIE TO ICON: PATRICK MEMPHIS AND THE EVOLUTION OF BEGINNING\'S END',
      description: 'Multi-platform visual identity and motion graphics package that revolutionized how independent films approach mainstream audiences.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop'
    },
    {
      title: 'IN CONVERSATION WITH PATRICK MEMPHIS: THE ARTISTIC VISION BEHIND CHILDREN OF THE FALL',
      description: 'An intimate look into the creative process behind one of the year\'s most critically acclaimed independent films.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section className="relative py-20 px-6 section-dark overflow-hidden">
      <Meteors number={15} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="section-heading mb-4 animate-fade-in">
            FEATURED WORK
          </h2>
          <div className="w-full h-0.5 bg-gold"></div>
          
          {/* Tip box */}
          <div className="float-right mt-8 border border-gold/30 p-6 max-w-md">
            <h3 className="font-benguiat text-lg font-bold text-gold mb-2">Tip</h3>
            <p className="body-text text-sm">
              You can paste direct links on this page to show a preview of the article.
              *Delete this tip before publishing your website.
            </p>
          </div>
        </div>

        <div className="space-y-16 clear-both">
          {featuredWorks.map((work, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              {/* Image */}
              <div className="lg:col-span-1 animate-slide-in-left">
                <div className="portfolio-card overflow-hidden">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
                <h3 className="font-benguiat text-2xl font-bold text-gold leading-tight">
                  {work.title}
                </h3>

                <p className="body-text leading-relaxed">
                  {work.description}
                </p>

                <Button 
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-dark-forest transition-all duration-300 font-times font-semibold px-8 py-3 bg-transparent"
                >
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSection;
