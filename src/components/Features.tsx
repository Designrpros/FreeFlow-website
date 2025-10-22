// app/components/Features.tsx
'use client';

import styled from 'styled-components';
// CORRECTED: Changed Waveform to AudioWaveform
import { AudioWaveform, BookText, Sparkles, NotebookText } from 'lucide-react';

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin-top: 6rem;
`;

const FeatureCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const featuresData = [
  {
    // CORRECTED: Changed Waveform to AudioWaveform
    icon: <AudioWaveform color="#8A2BE2" />,
    title: "Flow",
    description: "Main freestyle screen with random keywords, instrumental beats, and one-tap audio recording."
  },
  {
    icon: <BookText color="#32CD32" />,
    title: "Rhymes",
    description: "A powerful and fast rhyming dictionary to discover perfect and near rhymes."
  },
  {
    icon: <Sparkles color="#FFD700" />,
    title: "Explore",
    description: "A thesaurus and conceptual search engine to find synonyms and related words."
  },
  {
    icon: <NotebookText color="#1E90FF" />,
    title: "Notepad",
    description: "A dedicated workspace for saving and organizing your lyrics and freestyle recordings."
  }
];

export default function Features() {
  return (
    <FeaturesContainer>
      {featuresData.map((feature) => (
        <FeatureCard key={feature.title}>
          <h3>{feature.icon}{feature.title}</h3>
          <p>{feature.description}</p>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
}