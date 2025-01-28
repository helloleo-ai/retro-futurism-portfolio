import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--neon-purple) 0%, transparent 70%);
    opacity: 0.15;
    top: -300px;
    right: -300px;
    filter: blur(50px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--neon-blue) 0%, transparent 70%);
    opacity: 0.15;
    bottom: -300px;
    left: -300px;
    filter: blur(50px);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  font-weight: 900;
  background: linear-gradient(to right, #fff 20%, #666 40%, #888 60%, #fff 80%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
  
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 3rem;
  color: var(--neon-blue);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letter-spacing: 0.2em;
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  background: linear-gradient(45deg, var(--neon-purple), var(--neon-pink));
  border: none;
  color: white;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  box-shadow: 0 5px 15px rgba(255,0,255,0.2);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, var(--neon-purple), var(--neon-pink), var(--neon-blue));
    border-radius: 6px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255,0,255,0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

function Hero() {
  return (
    <HeroSection id="home">
      <Navigation />
      <Title
        className="chrome-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        JOHN DOE
      </Title>
      <Subtitle
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        FULL STACK DEVELOPER
      </Subtitle>
      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        VIEW MY WORK
      </CTAButton>
    </HeroSection>
  );
}

export default Hero;
