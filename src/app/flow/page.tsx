// src/app/flow/page.tsx
'use client';

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Waveform from '../../components/Waveform';
import { Play, SkipForward, Shuffle } from 'lucide-react';

// --- Data setup (mimicking the app's WordBank and BeatBank) ---

const wordBank = [
  "River", "Mountain", "Shadow", "Starlight", "Cityscape", "Heartbeat",
  "Whisper", "Future", "Silence", "Moment", "Horizon", "Echo", "Dream",
  "Journey", "Genesis", "Vortex", "Mirage", "Legacy", "Truth", "Kingdom",
  "Throne", "Castle", "Crown", "Anchor", "Phoenix", "War", "Battle", "Scepter",
  "Climb", "Shatter", "Ignite", "Flow", "Rise", "Fall", "Conquer", "Build",
  "Destroy", "Weave", "Chase", "Escape", "Become", "Evolve", "Fade", "Glow"
];

const beats = [
  { src: '/beat1.mp3', title: 'Soldiers', artist: 'Anabolic Beatz' },
  { src: '/beat2.mp3', title: 'Bang First', artist: 'Anabolic Beatz' },
];

// --- Styled Components ---

const FlowContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 8rem 2rem 4rem 2rem;
  text-align: center;
`;

const KeywordsDisplay = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Keyword = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: 1px solid var(--button-secondary-border);
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--button-secondary-hover);
  }
`;

const BeatInfo = styled.div`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-height: 40px;
`;

// --- The Page Component ---

export default function FlowDemoPage() {
  const [keywords, setKeywords] = useState<string[]>(['Tap "Generate"', 'to start']);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const generateNewWords = () => {
    const shuffled = wordBank.sort(() => 0.5 - Math.random());
    setKeywords(shuffled.slice(0, 4));
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // This is a "Next Beat" action if already playing
        const nextIndex = (currentBeatIndex + 1) % beats.length;
        setCurrentBeatIndex(nextIndex);
        audioRef.current.src = beats[nextIndex].src;
        audioRef.current.play();
      } else {
        // This is a "Play" action
        audioRef.current.src = beats[currentBeatIndex].src;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <FlowContainer>
      <KeywordsDisplay>
        {keywords.map((word) => <Keyword key={word}>{word}</Keyword>)}
      </KeywordsDisplay>

      <Waveform isAnimating={isPlaying} />

      <BeatInfo>
        {isPlaying && (
          <>
            <p><strong>{beats[currentBeatIndex].title}</strong></p>
            <p>{beats[currentBeatIndex].artist}</p>
          </>
        )}
      </BeatInfo>

      <ControlsContainer>
        <ControlButton onClick={generateNewWords}>
          <Shuffle size={20} /> Generate Words
        </ControlButton>
        <ControlButton onClick={handlePlayPause}>
          {isPlaying ? <SkipForward size={20} /> : <Play size={20} />}
          {isPlaying ? 'Next Beat' : 'Play Beat'}
        </ControlButton>
      </ControlsContainer>
      
      {/* Hidden audio element to control playback */}
      <audio 
        ref={audioRef} 
        onEnded={() => setIsPlaying(false)}
        loop={false}
      />
    </FlowContainer>
  );
}