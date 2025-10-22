// src/components/Hero.tsx
'use client';

import styled, { keyframes } from 'styled-components';
import { Apple } from 'lucide-react';
import Waveform from './Waveform';
import Image from 'next/image';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// NEW: Multiple keyframe animations for varied movement
const float1 = keyframes`
  0% { transform: translate(0,  0px); }
  50% { transform: translate(-10px, -15px); }
  100% { transform: translate(0, 0px); }
`;

const float2 = keyframes`
  0% { transform: translate(0, 0px); }
  50% { transform: translate(15px, -10px); }
  100% { transform: translate(0, 0px); }
`;

const float3 = keyframes`
  0% { transform: translate(0, 0px); }
  50% { transform: translate(-5px, 20px); }
  100% { transform: translate(0, 0px); }
`;

const float4 = keyframes`
  0% { transform: translate(0, 0px); }
  50% { transform: translate(10px, 5px); }
  100% { transform: translate(0, 0px); }
`;

const animations = [float1, float2, float3, float4];

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const WordsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

// UPDATED: The Word component now accepts an animation property
const Word = styled.span<{ $x: number, $y: number, $size: number, $opacity: number, $duration: number, $delay: number, $animation: any }>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  font-size: ${({ $size }) => $size}px;
  font-weight: 900;
  color: rgba(0, 0, 0, ${({ $opacity }) => $opacity});
  user-select: none;
  font-family: 'Inter', sans-serif;
  animation: ${({ $animation }) => $animation} ${({ $duration }) => $duration}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: clamp(3.5rem, 10vw, 7rem);
    font-weight: normal;
    margin-bottom: 1rem;
    animation: ${fadeIn} 0.8s ease-out forwards;
    letter-spacing: 0.02em;
    line-height: 1.1;
  }

  p {
    font-size: clamp(1.2rem, 3vw, 1.5rem); 
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 600px;
    margin-bottom: 2.5rem;
    animation: ${fadeIn} 0.8s 0.2s ease-out forwards;
    opacity: 0;
  }
`;

const AppStoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: bold;
  animation: ${fadeIn} 0.8s 0.4s ease-out forwards;
  opacity: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const words = ["River", "Mountain", "Whisper", "Flow", "Rise", "Conquer", "Dream", "Cityscape", "Rhythm", "Silence", "Legacy", "Climb", "Shatter", "Ignite", "Throne", "Abyss", "Genesis", "Vortex", "Glory", "Grit", "Time"];

export default function Hero() {
  return (
    <HeroContainer>
      <WordsBackground>
        {Array.from({ length: 60 }).map((_, i) => (
          <Word
            key={i}
            $x={Math.random() * 100}
            $y={Math.random() * 100}
            $size={12 + Math.random() * 48}
            $opacity={0.1 + Math.random() * 0.2}
            $duration={8 + Math.random() * 8} // Slower, more ambient movement (8-16s)
            $delay={Math.random() * 10}      // Staggered start times
            // UPDATED: Randomly assign one of the float animations
            $animation={animations[i % animations.length]}
          >
            {words[i % words.length]}
          </Word>
        ))}
      </WordsBackground>
      <Content>
        <h1>Free Flow</h1>
        <p>
          The ultimate toolkit for rappers, poets, and songwriters to spark ideas and perfect their craft.
        </p>
        <AppStoreButton href="https://apps.apple.com/..." target="_blank" rel="noopener noreferrer">
          <Apple /> Download on the App Store
        </AppStoreButton>
        <Waveform />
      </Content>
    </HeroContainer>
  );
}