// src/app/about/page.tsx
'use client';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';

const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem 4rem 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const TextContent = styled.section`
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  h3 {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;


export default function AboutPage() {
  return (
    <>
      <AboutContainer>
        <Title>About Free Flow</Title>

        <VideoContainer>
          <video
            controls
            autoPlay
            muted
            loop
            playsInline // Important for iOS to play inline
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <source src="/FreeFlow.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>

        <TextContent>
          <h3>The Vision: Your Creative Partner</h3>
          <p>
            Free Flow was born from a simple idea: to eliminate creative friction. For rappers, poets, and songwriters, inspiration is fleeting. The moment a great line or a perfect rhyme comes to mind, you need tools that are fast, intuitive, and get out of your way. Free Flow is designed to be that seamless partner, helping you capture, craft, and perfect your work without ever losing your rhythm.
          </p>
          <p>
            Our philosophy is built on a minimalist, dark-mode-first design that keeps you focused on your art. Every feature is designed to be frictionless, keeping you in a state of creative flow.
          </p>

          <h3>A Tour of Your Toolkit</h3>
          <p>
            The app is structured around four powerful tabs, each serving a distinct purpose in your creative process:
          </p>
          <ul>
            <li>
              <strong>Flow Tab: The Spark of Inspiration</strong><br />
              This is where your session begins. The Flow tab provides an endless stream of inspiration with random keyword prompts to kickstart your creativity. Choose from a library of instrumental beats, watch the animated waveform pulse to the rhythm, and capture your freestyle with a single tap.
            </li>
            <li>
              <strong>Rhymes & Explore Tabs: The Art of Craftsmanship</strong><br />
              Once you have an idea, it's time to refine it. The Rhymes tab is a powerful, fast rhyming dictionary, while the Explore tab acts as a conceptual thesaurus to expand your vocabulary. The app intelligently uses a vast offline library and can be supercharged with a Pro subscription for even more suggestions.
            </li>
            <li>
              <strong>Notepad: Your Digital Workspace</strong><br />
              Never lose a great idea again. The Notepad automatically saves all of your audio recordings and allows you to create and edit text notes for your lyrics. It's your dedicated space to organize thoughts, pair lyrics with recordings, and build your projects from the ground up.
            </li>
          </ul>
        </TextContent>
      </AboutContainer>
    </>
  );
}