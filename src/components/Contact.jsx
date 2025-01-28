import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactSection = styled.section`
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactForm = styled(motion.form)`
  background: rgba(13, 13, 13, 0.7);
  border: 1px solid rgba(0, 255, 157, 0.1);
  border-radius: 1rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.2), transparent);
  }
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #00ff9d;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid rgba(0, 255, 157, 0.2);
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 157, 0.5);
    box-shadow: 0 0 15px rgba(0, 255, 157, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid rgba(0, 255, 157, 0.2);
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 157, 0.5);
    box-shadow: 0 0 15px rgba(0, 255, 157, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 255, 157, 0.4);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: #00ff9d;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00ffff;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactSection>
      <ContactContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '3.5rem',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(to right, #00ff9d, #00ffff)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Get In Touch
        </motion.h2>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <InputGroup>
            <Label>Name</Label>
            <Input 
              type="text" 
              required 
              placeholder="Enter your name"
            />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input 
              type="email" 
              required 
              placeholder="Enter your email"
            />
          </InputGroup>

          <InputGroup>
            <Label>Subject</Label>
            <Input 
              type="text" 
              required 
              placeholder="What's this about?"
            />
          </InputGroup>

          <InputGroup>
            <Label>Message</Label>
            <TextArea 
              required 
              placeholder="Your message here..."
            />
          </InputGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>

          <SocialLinks>
            <SocialLink 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink 
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
