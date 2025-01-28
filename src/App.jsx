import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import StarryBackground from './components/StarryBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

const Section = styled(motion.div)`
  margin: 4rem 0;
  
  @media (min-width: 768px) {
    margin: 6rem 0;
  }
`;

function App() {
  return (
    <AppContainer>
      <StarryBackground />
      <MainContent>
        <Section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </Section>
        

        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </Section>

        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </Section>

        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Testimonials />
        </Section>
        
        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </Section>
      </MainContent>
    </AppContainer>
  );
}

export default App;
