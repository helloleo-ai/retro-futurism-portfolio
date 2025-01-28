import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(180deg, rgba(3, 0, 20, 0.9) 0%, rgba(3, 0, 20, 0) 100%);
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(3, 0, 20, 0.95);
  padding: 2rem;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled.a`
  color: var(--chrome);
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    color: var(--neon-blue);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--neon-blue);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--chrome);
  z-index: 100;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 8px;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 24px;
    height: 2px;
    background-color: var(--chrome);
    margin: 5px 0;
    transition: 0.3s;

    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
    }
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Height of the fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <Nav>
        <NavList>
          <NavItem whileHover={{ y: -2 }}>
            <NavLink href="#home" onClick={handleClick}>HOME</NavLink>
          </NavItem>
          <NavItem whileHover={{ y: -2 }}>
            <NavLink href="#projects" onClick={handleClick}>PROJECTS</NavLink>
          </NavItem>
          <NavItem whileHover={{ y: -2 }}>
            <NavLink href="#skills" onClick={handleClick}>SKILLS</NavLink>
          </NavItem>
          <NavItem whileHover={{ y: -2 }}>
            <NavLink href="#testimonials" onClick={handleClick}>TESTIMONIALS</NavLink>
          </NavItem>
          <NavItem whileHover={{ y: -2 }}>
            <NavLink href="#contact" onClick={handleClick}>CONTACT</NavLink>
          </NavItem>
        </NavList>
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </MenuButton>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <MobileNav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavList>
              <NavItem>
                <NavLink href="#home" onClick={handleClick}>HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" onClick={handleClick}>PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills" onClick={handleClick}>SKILLS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#testimonials" onClick={handleClick}>TESTIMONIALS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" onClick={handleClick}>CONTACT</NavLink>
              </NavItem>
            </MobileNavList>
          </MobileNav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
