import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(13, 13, 13, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #00ff9d, #00ffff);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time training data representation.",
      tech: ["Three.js", "TensorFlow.js", "WebGL"],
    },
    {
      title: "Quantum Computing Simulator",
      description: "Browser-based quantum circuit simulator with visual programming interface.",
      tech: ["React", "WebAssembly", "Python"],
    },
    {
      title: "AI Music Composer",
      description: "Generate original music using machine learning algorithms and synthesizer integration.",
      tech: ["TensorFlow", "Web Audio API", "Node.js"],
    }
  ];

  return (
    <ProjectsSection>
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
        Featured Projects
      </motion.h2>
      
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <p style={{ color: '#a0a0a0', marginBottom: '1.5rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(0, 255, 157, 0.1)',
                    border: '1px solid rgba(0, 255, 157, 0.2)',
                    borderRadius: '2rem',
                    color: '#00ff9d',
                    fontSize: '0.875rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
