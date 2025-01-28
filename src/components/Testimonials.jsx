import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(13, 13, 13, 0.7);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -1rem;
    left: 2rem;
    font-size: 8rem;
    color: rgba(0, 255, 157, 0.1);
    font-family: 'Georgia', serif;
    line-height: 1;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--neon-purple), var(--neon-blue));
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
`;

const Quote = styled.p`
  color: #a0a0a0;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  h4 {
    color: var(--neon-green);
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.875rem;
    color: #808080;
  }
`;

const testimonials = [
  {
    quote: "Working with John was an incredible experience. His technical expertise and attention to detail transformed our project into something extraordinary.",
    name: "Sarah Johnson",
    role: "CTO, TechVision",
    initials: "SJ"
  },
  {
    quote: "The level of creativity and problem-solving skills John brings to the table is unmatched. He consistently delivered beyond our expectations.",
    name: "Michael Chen",
    role: "Product Manager, InnovateLab",
    initials: "MC"
  },
  {
    quote: "John's ability to understand complex requirements and translate them into elegant solutions made our collaboration seamless and successful.",
    name: "Emma Davis",
    role: "Founder, DataFlow",
    initials: "ED"
  }
];

function Testimonials() {
  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '3.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #00ff9d, #00ffff)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Testimonials
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textAlign: 'center',
            color: '#a0a0a0',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          What others say about working with me
        </motion.p>

        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <Avatar>{testimonial.initials}</Avatar>
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
}

export default Testimonials;
