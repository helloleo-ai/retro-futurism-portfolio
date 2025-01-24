import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--neon-blue);
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  background: transparent;
  border: 2px solid var(--neon-pink);
  color: var(--neon-pink);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: var(--neon-pink);
    color: var(--primary-dark);
    box-shadow: 0 0 20px var(--neon-pink);
  }
`;

function Hero() {
  return (
    <HeroSection>
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
