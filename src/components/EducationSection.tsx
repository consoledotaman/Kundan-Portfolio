
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      year: '2023',
      title: 'Advanced Motion Graphics Certification',
      institution: 'Creative Institute of Design',
      description: 'Specialized in complex animation techniques and visual effects'
    },
    {
      year: '2019',
      title: 'Master of Fine Arts in Digital Media',
      institution: 'Art University',
      description: 'Focus on experimental video art and interactive design'
    },
    {
      year: '2017',
      title: 'Professional Video Editing Certificate',
      institution: 'Film Academy',
      description: 'Comprehensive training in industry-standard editing software'
    },
    {
      year: '2015',
      title: 'Bachelor of Arts in Visual Communication',
      institution: 'Design College',
      description: 'Foundation in graphic design principles and visual storytelling'
    }
  ];

  return (
    <section className="py-20 px-6 bg-sage">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-vanilla text-center mb-16 animate-fade-in">
          EDUCATION & CREDENTIALS
        </h2>

        <div className="space-y-12">
          {education.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Year */}
              <div className="md:col-span-2">
                <div className="font-benguiat text-4xl font-bold text-gold">
                  {item.year}
                </div>
              </div>

              {/* Line connector */}
              <div className="md:col-span-1 hidden md:block">
                <div className="w-full h-0.5 bg-gold"></div>
              </div>

              {/* Content */}
              <div className="md:col-span-9 bg-vanilla rounded-lg p-8 portfolio-card">
                <h3 className="font-benguiat text-2xl font-bold text-forest mb-2">
                  {item.title}
                </h3>
                <h4 className="font-times text-lg font-semibold text-rust mb-4">
                  {item.institution}
                </h4>
                <p className="body-text">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
