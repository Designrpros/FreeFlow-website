'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface ToolbarProps {
  $scrolled: boolean;
}
interface StyledLinkProps {
  $active: boolean;
}

const Toolbar = styled.header<ToolbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  
  /* UPDATED: Styles for light theme */
  background-color: ${({ $scrolled }) => $scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled }) => $scrolled ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-size: 1.5rem;
  z-index: 1001;
  font-weight: normal;
  letter-spacing: 0.05em;
`;

const NavLinks = styled.nav`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transition: background-color 0.2s ease-in-out;
  position: relative;
  letter-spacing: 0.05em;

  background-color: ${({ $active }) => ($active ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/flow", label: "Flow Demo" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms-of-service", label: "Terms" },
  ];

  return (
    <Toolbar $scrolled={scrolled}>
      <LogoLink href="/">
        <Image src="/app-icon.png" alt="Free Flow Logo" width={36} height={36} />
        Free Flow
      </LogoLink>

      <NavLinks>
        {navItems.map((item) => (
          <StyledLink 
            key={item.href} 
            href={item.href} 
            $active={pathname === item.href}
          >
            {item.label}
          </StyledLink>
        ))}
      </NavLinks>
    </Toolbar>
  );
};

export default Navbar;
