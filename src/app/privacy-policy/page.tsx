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
        <p><em>Last Updated: July 20, 2026</em></p>

        <p>
          Your privacy is important to us. This Privacy Policy explains how we handle your information when you use the Free Flow application ("App") and its related website ("Website").
        </p>

        <h3>Information We Do Not Collect</h3>
        <p>
          We want to be clear about what we don't do. We do not create user accounts, and we do not have a central server that collects or stores your personal data.
        </p>

        <h3>Data Stored on Your Device and in Your iCloud</h3>
        <p>
          Content you create in the App is stored locally on your device. If you have iCloud enabled, it is synced privately across your devices using Apple’s iCloud services.
        </p>
        <ul>
            <li>
                <strong>Notepad content:</strong> Text notes are stored in Core Data and synced via your private CloudKit container (`iCloud.freeflow`).
            </li>
            <li>
                <strong>Audio recordings and imported instrumentals:</strong> These are stored as files in the App’s documents folder and synced through your private iCloud Documents container.
            </li>
            <li>
                We, the developers of Free Flow, do not have access to any of the content you create and store in the App. It is under your control and protected by your Apple ID's security.
            </li>
        </ul>

        <h3>Information Sent to Third-Party Services</h3>
        <p>
          To provide word-finding features, the App sends the words you type or select to third-party services. This only happens when the "Datamuse API" word source is active.
        </p>
        <ul>
            <li>
                <strong>Datamuse API:</strong> When you search in the "Rhymes" or "Explore" tabs, or when you use "Word Flow + Rhymes" mode in the "Flow" tab, your query word is sent to `api.datamuse.com` to retrieve rhyme, synonym, or related-word results.
            </li>
        </ul>
        <p>
          These services have their own privacy policies. We do not send any personally identifiable information along with these search requests.
        </p>
        
        <h3>Website Analytics</h3>
        <p>
          Our Website uses Google Analytics to help us understand how visitors use the site. This service collects information such as your IP address, browser type, and pages visited. This data is used in an aggregated form to improve our website.
        </p>
        
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at: Designr.pros@gmail.com
        </p>
      </LegalContent>
    </LegalContainer>
  );
}