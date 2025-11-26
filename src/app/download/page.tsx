'use client';

import styled from "styled-components";
import React from 'react';
import { Download, AlertTriangle, ChevronsRight } from 'lucide-react';


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #F0F4F8;
  color: #1A202C;
  padding: 8rem 2rem 4rem; // Extra padding at the top
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`;

const DownloadContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #E2E8F0;

  h1 {
    font-size: 2.75rem;
    font-weight: 800;
  }

  p {
    font-size: 1.2rem;
    color: #718096;
    margin-top: 0.5rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(74, 144, 226, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px 0 rgba(74, 144, 226, 0.5);
  }
`;

{/*}
const AppStoreButton = styled(DownloadButton)`
  background: transparent;
  border: 2px solid #A0AEC0; // A more muted border color
  color: #4A5568; // Muted text color
  box-shadow: none;
  margin-bottom: 0.75rem; // Less space below

  &:hover {
    background: #EDF2F7;
    border-color: #718096;
    transform: translateY(-2px);
    box-shadow: none;
  }
`;

const CaptionText = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: #718096;
  margin-bottom: 2.5rem; // Creates space before the next button
`;
*/}

const InfoBox = styled.div`
  background: #EBF8FF;
  border-left: 4px solid #4A90E2;
  color: #2C5282;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2.5rem 0;
  display: flex;
  gap: 1rem;
  
  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const InstructionStep = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p, li {
    color: #4A5568;
    line-height: 1.7;
  }
  code {
    background: #E2E8F0;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    color: #1A202C;
  }
`;

export default function DownloadPage() {
  return (
    <PageWrapper>
      <DownloadContainer>
        <Header>
          <h1>Download Free Flow</h1>
          {/* FIX 1: You're -> You&apos;re */}
          <p>You&apos;re just a few steps away from unlocking Freestyle Sessions.</p>
        </Header>
        
        <div style={{ textAlign: 'center' }}>
          {/* 
          <AppStoreButton 
            href="https://apps.apple.com/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download from App Store
          </AppStoreButton>
          <CaptionText>
            Note: This version may be discontinued. We recommend the direct download below.
          </CaptionText>
          */}

          <DownloadButton href="/freeflow.zip" download>
            <Download size={24} />
            Direct Download
          </DownloadButton>
        </div>

        <InfoBox>
          <AlertTriangle size={48} style={{ flexShrink: 0, marginTop: '5px' }}/>
          <div>
            <h4>A Quick Note on Security for Direct Downloads</h4>
            <p>Because the recommended version is distributed directly by us, macOS will show a standard security warning. This is expected. <strong>We guarantee the app is safe.</strong> Follow the steps below to approve it.</p>
          </div>
        </InfoBox>

        <SectionTitle>First-Time Installation Guide (Direct Download)</SectionTitle>

        <InstructionStep>
          <h3>Step 1: Unzip and Install</h3>
          <p>After downloading, double-click the <code>peak-browser.zip</code> file to unzip it. Then, drag the new <strong>Peak Browser</strong> icon into your <strong>Applications</strong> folder.</p>
        </InstructionStep>

        <InstructionStep>
          <h3>Step 2: Try to Open the App</h3>
          {/* FIX 2: you'll -> you&apos;ll */}
          <p>When you first double-click the app from your Applications folder, you&apos;ll see a security warning. Click <strong>OK</strong>.</p>
        </InstructionStep>

        <InstructionStep>
          <h3>Step 3: Approve in System Settings</h3>
          {/* FIX 3 & 4: "Peak Browser" -> &quot;Peak Browser&quot; */}
          <p>Go to <strong>Apple menu () &gt; System Settings &gt; Privacy & Security</strong>. Scroll down and you will see a message about &quot;Peak Browser&quot;. Click the <strong>Open Anyway</strong> button.</p>
        </InstructionStep>

        <InstructionStep>
          <h3>Step 4: Final Confirmation</h3>
          <p>A final prompt will appear. This time, it will have an <strong>Open</strong> button. Click it.</p>
          {/* FIX 5 & 6: That's -> That&apos;s and won't -> won&apos;t */}
          <p>That&apos;s it! Peak Browser will now launch, and you won&apos;t need to do this again.</p>
        </InstructionStep>
        
        <InfoBox>
          <ChevronsRight size={48} style={{ flexShrink: 0, marginTop: '5px' }}/>
          <div>
            <h4>Pro Tip: The Right-Click Method</h4>
            <p>Alternatively, you can simply <strong>right-click</strong> the app icon, select <strong>Open</strong> from the menu, and then click <strong>Open</strong> on the dialog that appears. This is a faster way to complete Step 2 & 4!</p>
          </div>
        </InfoBox>
      </DownloadContainer>
    </PageWrapper>
  );
}