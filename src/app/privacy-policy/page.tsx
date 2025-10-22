// src/app/privacy-policy/page.tsx
'use client';

import styled from 'styled-components';

const LegalContainer = styled.main`
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

const LegalContent = styled.section`
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
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 1rem;
  }
`;

export default function PrivacyPolicyPage() {
  return (
    <LegalContainer>
      <Title>Privacy Policy</Title>
      <LegalContent>
        <p><em>Last Updated: October 22, 2025</em></p>

        <p>
          Your privacy is important to us. This Privacy Policy explains how we handle your information when you use the Free Flow application ("App") and its related website ("Website").
        </p>

        <h3>Information We Do Not Collect</h3>
        <p>
          We want to be clear about what we don't do. We do not create user accounts, and we do not have a central server that collects or stores your personal data.
        </p>

        <h3>Data Stored on Your Device and in Your iCloud</h3>
        <p>
          The text notes and audio recordings you create in the Notepad are stored locally on your device. If you have iCloud enabled, this data is automatically and privately synced across your devices using Apple’s CloudKit service. 
        </p>
        <ul>
            <li>
                Your Notepad content (text and recordings) is stored in your private iCloud container (`iCloud.freeflow`).
            </li>
            <li>
                We, the developers of Free Flow, do not have access to any of the content you create and store in the App. It is under your control and protected by your Apple ID's security.
            </li>
        </ul>

        <h3>Information Sent to Third-Party Services</h3>
        <p>
          To provide its powerful word-finding features, the App sends the words you type to third-party services. This is only done when you actively perform a search in the "Rhymes" or "Explore" tabs.
        </p>
        <ul>
            <li>
                <strong>Datamuse API:</strong> When you search for rhymes, synonyms, or related words using the "Datamuse API" source, your search query is sent to `api.datamuse.com` to retrieve results.
            </li>
            <li>
                <strong>OpenRouter AI:</strong> For experimental AI features, your prompts are sent to the OpenRouter API to generate results.
            </li>
        </ul>
        <p>
          These services have their own privacy policies. We do not send any personally identifiable information along with these search requests.
        </p>
        
        <h3>Website Analytics</h3>
        <p>
          Our Website uses Google Analytics to help us understand how visitors use the site. This service collects information such as your IP address, browser type, and pages visited. This data is used in an aggregated form to improve our website.
        </p>

        <h3>In-App Purchases</h3>
        <p>
            Free Flow offers optional "Pro" subscriptions. All payments are processed securely by Apple through the App Store. We do not collect, receive, or store any of your payment information.
        </p>
        
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at: [Your Contact Email Address]
        </p>
      </LegalContent>
    </LegalContainer>
  );
}