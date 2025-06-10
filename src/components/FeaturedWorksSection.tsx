
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedWorksSection = () => {
  const featuredWorks = [
    {
      title: 'Award-Winning Documentary',
      description: 'A powerful narrative exploring human resilience through intimate storytelling and innovative editing techniques.',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop',
      category: 'Documentary'
    },
    {
      title: 'Global Brand Campaign',
      description: 'Multi-platform visual identity and motion graphics package for international luxury brand launch.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      category: 'Commercial'
    },
    {
      title: 'Experimental Art Film',
      description: 'Pushing boundaries of visual expression through abstract storytelling and cutting-edge post-production.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
      category: 'Art Film'
    }
  ];

  return (
    <section className="py-20 px-6 bg-olive">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-vanilla text-center mb-16 animate-fade-in">
          FEATURED WORKS
        </h2>

        <div className="space-y-16">
          {featuredWorks.map((work, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="portfolio-card overflow-hidden">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 animate-slide-in-${index % 2 === 0 ? 'right' : 'left'} ${
                index % 2 === 1 ? 'lg:order-first' : ''
              }`}>
                <div className="inline-block bg-gold text-earth px-4 py-2 rounded-full">
                  <span className="font-times text-sm font-semibold">
                    {work.category}
                  </span>
                </div>

                <h3 className="font-benguiat text-3xl md:text-4xl font-bold text-vanilla">
                  {work.title}
                </h3>

                <p className="body-text text-vanilla text-lg leading-relaxed">
                  {work.description}
                </p>

                <Button 
                  className="bg-vanilla text-earth hover:bg-cream transition-colors duration-300 font-times font-semibold px-8 py-3"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 animate-fade-in">
          <p className="body-text text-vanilla text-lg mb-8">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
          <Button 
            size="lg"
            className="bg-gold text-earth hover:bg-rust hover:text-vanilla transition-all duration-300 font-benguiat text-lg px-12 py-4"
          >
            START A PROJECT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSection;
