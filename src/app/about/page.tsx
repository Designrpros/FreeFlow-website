// src/app/about/page.tsx
'use client';

import Link from 'next/link';
import styled from 'styled-components';

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
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  max-width: 650px;
  margin-bottom: 3rem;
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

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  margin-top: 2.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <Title>About Free Flow</Title>
      <Subtitle>
        A private, distraction-free workspace built for freestyling, writing
        bars, and practicing over instrumentals.
      </Subtitle>

      <TextContent>
        <h3>The Vision: Your Creative Partner</h3>
        <p>
          Free Flow was born from a simple idea: to eliminate creative friction.
          For rappers, poets, and songwriters, inspiration is fleeting. The
          moment a great line or a perfect rhyme comes to mind, you need tools
          that are fast, intuitive, and get out of your way. Free Flow is
          designed to be that seamless partner, helping you capture, craft, and
          perfect your work without ever losing your rhythm.
        </p>
        <p>
          Our philosophy is built on a minimalist, dark-mode-first design that
          keeps you focused on your art. Every feature is designed to be
          frictionless, keeping you in a state of creative flow.
        </p>

        <h3>A Tour of Your Toolkit</h3>
        <p>
          The app is structured around a handful of focused tools, each serving
          a distinct purpose in your creative process:
        </p>
        <ul>
          <li>
            <strong>Flow Tab: The Spark of Inspiration</strong>
            <br />
            This is where your session begins. The Flow tab provides random
            keyword prompts to kickstart your creativity, lets you choose from a
            set of instrumental beats, and captures your freestyle with a single
            tap.
          </li>
          <li>
            <strong>Rhymes & Explore Tabs: The Art of Craftsmanship</strong>
            <br />
            Once you have an idea, it is time to refine it. The Rhymes tab is a
            fast rhyming dictionary, while the Explore tab acts as a conceptual
            thesaurus. Use the built-in offline vocabulary wherever you are, or
            switch on the Datamuse API source for online suggestions.
          </li>
          <li>
            <strong>Studio Player: Control the Sound</strong>
            <br />
            Play factory beats or import your own MP3/M4A instrumentals. Adjust
            playback speed and transpose the key with independent pitch control,
            loop a track, or advance automatically to the next beat.
          </li>
          <li>
            <strong>Notepad & Recordings: Your Digital Workspace</strong>
            <br />
            Never lose a great idea again. The Notepad saves your lyrics and
            text notes, while the Recordings tab keeps your freestyle takes
            organized and ready to export.
          </li>
        </ul>

        <h3>Privacy-First by Design</h3>
        <p>
          Your audio files and lyrics live in your device sandbox or your
          private iCloud container. No user accounts, no analytics inside the
          app, and no third-party servers touching your creative work.
        </p>

        <Link href="/download" passHref legacyBehavior>
          <CTAButton>Download Free Flow</CTAButton>
        </Link>
      </TextContent>
    </AboutContainer>
  );
}
