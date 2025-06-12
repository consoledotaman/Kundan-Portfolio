
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "“Working with Kundan was an absolute pleasure. Their eye for design, attention to detail, and ability to translate vague ideas into visually stunning graphics and videos truly elevated our brand. Whether it was social media creatives, promotional videos, or branding assets, everything was delivered on time and beyond expectations.”",
      author: "Vinita Patel",
      position: "MD & Founder",
      company: "Aarug Tales"
    },
    {
      quote: "“As a teammate, Kundan brings both creativity and clarity to the table. Their video edits are smooth, impactful, and always align perfectly with the project goals. Their ability to handle both graphic design and video workflows makes them an invaluable asset to any creative team.”",
      author: "Ananya Panda",
      position: "Communication Lead",
      company: "Aarug Tales"
    },
    {
      quote: "“We hired Kundan to help us build a visual identity from scratch. From the logo to explainer videos and brand reels, he managed everything with precision and passion. Their creativity matched with a strong sense of storytelling really helped us connect with our audience.”",
      author: "xyz xyz",
      position: "HR & Vice President ",
      company: "Basta Foundation"
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
