'use client';
import { createGlobalStyle } from 'styled-components';

// The keyframes animation is no longer needed and has been removed.

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    /* UPDATED: Plain white background */
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    letter-spacing: 0.05em;
    transition: background-color 0.3s ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.paragraph};
    line-height: 1.6;
    letter-spacing: 0.05em;
  }
  
  input, button, textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  /* Style for cards on the light theme */
  .glass-card {
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #EAEAEA;
    box-shadow: 0 4px H12px 0 rgba(0, 0, 0, 0.05);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

