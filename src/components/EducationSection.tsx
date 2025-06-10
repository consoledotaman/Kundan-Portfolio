
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const EducationSection = () => {
  const education = [
    {
      year: '2004-2008',
      title: 'Elmswood Film Academy, New York',
      subtitle: 'Bachelor of Fine Arts in Film Direction',
      description: 'Under the guidance of renowned filmmakers, Patrick honed his directorial vision and craft, culminating in his acclaimed thesis film, "Shadows of Tomorrow."'
    },
    {
      year: '2000-2002',
      title: 'Greenwood College, California',
      subtitle: "Associate's Degree in Screenwriting",
      description: 'It was here that Patrick\'s passion for cinema transformed from a hobby into a career aspiration. His first screenplay, "Lost Letters," won the college\'s prestigious Silver Pen Award.'
    },
    {
      year: '2002-2003',
      title: 'Lyon Workshop for Visual Storytelling, Paris France',
      subtitle: 'Advanced Certificate in Visual Narrative',
      description: 'A transformative three-month intensive where Patrick was introduced to avant-garde European cinema techniques, forever shaping his storytelling.'
    },
    {
      year: '2002-2003',
      title: 'Advanced Workshop in Comedy Direction',
      subtitle: 'Humorville Film Institute, Sydney',
      description: 'Focused on modern comedic narratives and the art of comedic timing in storytelling.'
    }
  ];

  return (
    <section className="relative py-20 px-6 section-dark overflow-hidden">
      <Meteors number={8} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="section-heading text-center mb-4 animate-fade-in">
            EDUCATION
          </h2>
          <div className="w-full h-0.5 bg-gold animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {education.map((item, index) => (
            <div 
              key={index}
              className="space-y-6 animate-slide-in-left hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-gold font-benguiat text-2xl font-bold animate-glow">
                {item.year}
              </div>
              
              <div>
                <h3 className="font-benguiat text-xl font-bold text-gold mb-2">
                  {item.title}
                </h3>
                <h4 className="body-text text-lg font-semibold mb-4">
                  {item.subtitle}
                </h4>
                <p className="body-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom atmospheric image */}
        <div className="mt-16 w-full h-48 overflow-hidden rounded-lg opacity-40 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <img 
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=400&fit=crop"
            alt="Atmospheric background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
