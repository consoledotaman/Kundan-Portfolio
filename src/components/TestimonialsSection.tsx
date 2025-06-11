
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Exceptional creativity and technical skill. The final product exceeded all our expectations and truly captured our brand's essence.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Creative Studios"
    },
    {
      quote: "A master of visual storytelling. Every frame is carefully crafted and purposeful. Highly recommended for any serious project.",
      author: "Michael Chen",
      position: "Film Producer",
      company: "Independent Films"
    },
    {
      quote: "Professional, creative, and reliable. The attention to detail and commitment to excellence is evident in every project.",
      author: "Emma Rodriguez",
      position: "Brand Manager",
      company: "Global Brands Inc."
    }
  ];

  return (
    <section className="relative py-20 px-6 section-dark overflow-hidden">
      <Meteors number={15} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading text-center mb-16 animate-fade-in">
          TESTIMONIALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="portfolio-card p-8 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="body-text mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gold/30 pt-4">
                <p className="font-benguiat text-lg font-bold text-gold">
                  {testimonial.author}
                </p>
                <p className="body-text text-sm">
                  {testimonial.position}
                </p>
                <p className="body-text text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
