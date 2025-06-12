
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const EducationSection = () => {
  const education = [
    {
      year: '2008-2021',
      title: 'DAV Public School, Jsg, Odisha',
      subtitle: 'Student',
      description: 'I completed my schooling up to 10th grade from DAV Public School, Jsg, Odisha under the CBSE board in 2021.'
    },
    {
      year: '2021-2023',
      title: 'Vikash Residential School, Sambalpur, Odisha',
      subtitle: 'Higher Secondary Education',
      description: 'I completed my higher secondary education in the Science stream with a focus on Physics, Chemistry, and Biology.'
    },
    {
      year: '2023-2024',
      title: 'Aakash Institute, Bhilai, Chhattisgarh',
      subtitle: 'Preparation for NEET',
      description: 'Regularly taking mock tests, analyzing performance, and improving time management strategies.'
    },
    {
      year: '2024-continuing',
      title: 'GGU, Bilaspur, Chhattisgarh',
      subtitle: 'Bachelor of Science in Enthropology',
      description: 'Currently pursuing a Bachelor of Science in Enthropology, focusing on human societies and cultural development.'
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
              <div className="text-gold font-benguiat text-2xl font-bold ">
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
