'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WaveformContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 120px;
  width: 100%;
  max-width: 700px;
  margin-top: 4rem;
  opacity: 0;
  animation: fadeIn 0.8s 0.6s ease-out forwards;
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;

const Bar = styled.div<{ $height: number }>`
  width: 12px;
  height: ${({ $height }) => $height}px;
  border-radius: 999px;
  /* UPDATED: Black bars for light theme */
  background-color: ${({ theme }) => theme.colors.text};
  transition: height 0.35s ease-in-out;
`;

const initialHeights = [40, 60, 30, 80, 50, 70, 45, 40, 60, 30, 80, 50, 70, 45];

const Waveform: React.FC<{ isAnimating?: boolean }> = ({ isAnimating = true }) => {
  const [barHeights, setBarHeights] = useState(initialHeights);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      const newHeights = Array.from({ length: initialHeights.length }, () => 
        Math.floor(Math.random() * 101) + 20
      );
      setBarHeights(newHeights);
    }, 350);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <WaveformContainer>
      {barHeights.map((height, index) => (
        <Bar key={index} $height={height} />
      ))}
    </WaveformContainer>
  );
};

export default Waveform;
