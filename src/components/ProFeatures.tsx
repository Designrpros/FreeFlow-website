// app/components/ProFeatures.tsx
'use client';

import styled from 'styled-components';
import { Wifi, Mic, Music } from 'lucide-react';

const ProSectionContainer = styled.section`
  width: 100%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  margin-top: 6rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
  text-align: left;
`;

const ProFeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UpgradeButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
`;

const proFeaturesData = [
  {
    icon: <Wifi />,
    title: "Datamuse API",
    description: "Access a powerful online database for superior rhymes and word exploration."
  },
  {
    icon: <Mic />,
    title: "Pro Recording",
    description: "Unlock high-quality audio to capture your freestyles with crystal clarity."
  },
  {
    icon: <Music />,
    title: "Expanded Beat Library",
    description: "Get access to more genres and a wider variety of instrumental beats."
  }
];

export default function ProFeatures() {
  return (
    <ProSectionContainer>
      <h2>Upgrade to Pro</h2>
      <p style={{ color: '#aaa', margin: '0.5rem 0 0 0' }}>Unlock the full potential of Free Flow.</p>
      <FeatureList>
        {proFeaturesData.map(feature => (
          <ProFeatureItem key={feature.title}>
            {feature.icon}
            <div>
              <strong>{feature.title}</strong>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{feature.description}</p>
            </div>
          </ProFeatureItem>
        ))}
      </FeatureList>
      <UpgradeButton href="https://apps.apple.com/..." target="_blank" rel="noopener noreferrer">
        Upgrade Now
      </UpgradeButton>
    </ProSectionContainer>
  );
}