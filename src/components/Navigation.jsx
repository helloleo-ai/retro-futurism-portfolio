import styled from 'styled-components';
import { motion } from 'framer-motion';

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

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem whileHover={{ y: -2 }}>
          <NavLink href="#home">HOME</NavLink>
        </NavItem>
        <NavItem whileHover={{ y: -2 }}>
          <NavLink href="#projects">PROJECTS</NavLink>
        </NavItem>
        <NavItem whileHover={{ y: -2 }}>
          <NavLink href="#skills">SKILLS</NavLink>
        </NavItem>
        <NavItem whileHover={{ y: -2 }}>
          <NavLink href="#contact">CONTACT</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;
