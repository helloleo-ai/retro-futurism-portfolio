import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsSection = styled.section`
  id="skills"
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(13, 13, 13, 0.7);
  border: 1px solid rgba(0, 255, 157, 0.1);
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
    background: linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.2), transparent);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(to right, #00ff9d, #00ffff);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillBar = styled(motion.div)`
  width: 100%;
  height: 4px;
  background: rgba(0, 255, 157, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React & React Native", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Modern CSS & Animation", level: 88 },
        { name: "Web Performance", level: 82 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "API Architecture", level: 87 },
        { name: "Cloud Services", level: 78 }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git & Version Control", level: 92 },
        { name: "CI/CD Pipelines", level: 83 },
        { name: "Testing & Debug", level: 85 },
        { name: "Dev Environment", level: 88 }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
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
        Technical Expertise
      </motion.h2>
      
      <SkillsGrid>
        {skillCategories.map((category, categoryIndex) => (
          <SkillCard
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(0, 255, 157, 0.3)',
              transition: { duration: 0.2 }
            }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            {category.skills.map((skill, index) => (
              <div key={skill.name}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                  color: '#a0a0a0'
                }}>
                  <span>{skill.name}</span>
                  <span style={{ color: '#00ff9d' }}>{skill.level}%</span>
                </div>
                <SkillBar>
                  <SkillProgress
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1,
                      delay: (categoryIndex * 0.2) + (index * 0.1),
                      ease: "easeOut"
                    }}
                  />
                </SkillBar>
              </div>
            ))}
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
