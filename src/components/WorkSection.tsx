
import React from 'react';

const WorkSection = () => {
  const works = [
    {
      title: 'Commercial Campaign',
      description: 'Brand storytelling through dynamic motion graphics',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop'
    },
    {
      title: 'Documentary Edit',
      description: 'Emotional narrative construction and pacing',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    },
    {
      title: 'Music Video',
      description: 'Rhythmic editing synchronized with audio',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
    },
    {
      title: 'Corporate Identity',
      description: 'Complete visual branding system design',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      title: 'Event Coverage',
      description: 'Live event documentation and highlights',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'
    },
    {
      title: 'Social Media Content',
      description: 'Engaging short-form video content',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-20 px-6 section-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center mb-16 animate-fade-in">
          BODY OF WORK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={index}
              className="portfolio-card animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-forest bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-benguiat text-xl font-bold text-gold mb-3">
                  {work.title}
                </h3>
                <p className="body-text text-sm">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
