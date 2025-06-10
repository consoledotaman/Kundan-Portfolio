
import React from 'react';

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
    <section className="py-20 px-6 section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading text-center mb-4 animate-fade-in">
            EDUCATION
          </h2>
          <div className="w-full h-0.5 bg-gold"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {education.map((item, index) => (
            <div 
              key={index}
              className="space-y-6 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-gold font-benguiat text-2xl font-bold">
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
        <div className="mt-16 w-full h-48 overflow-hidden rounded-lg opacity-40">
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
