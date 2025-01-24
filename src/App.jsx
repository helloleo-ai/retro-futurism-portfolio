import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarryBackground from './components/StarryBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <StarryBackground />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </AppContainer>
  );
}

export default App;
