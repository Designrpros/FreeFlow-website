// src/app/terms-of-service/page.tsx
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
`;

export default function TermsOfServicePage() {
  return (
    <LegalContainer>
      <Title>Terms of Service</Title>
      <LegalContent>
        <p><em>Last Updated: October 22, 2025</em></p>
        
        <p>
            By downloading or using the Free Flow application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
        </p>

        <h3>1. The Service</h3>
        <p>
            Free Flow is an application designed to assist with creative writing, such as lyricism, poetry, and freestyling. It provides tools including keyword generators, a rhyming dictionary, and a notepad for saving text and audio recordings.
        </p>

        <h3>2. User-Generated Content</h3>
        <p>
            You are solely responsible for the content you create, including any text notes and audio recordings ("User Content"). You retain all ownership rights to your User Content. We have no access to and take no responsibility for your User Content.
        </p>
        
        <h3>3. Pro Subscriptions</h3>
        <p>
            The App offers optional paid "Pro" subscriptions that unlock additional features, such as access to the Datamuse API and an expanded beat library.
        </p>
        <ul>
            <li>Payments will be charged to your Apple ID account at the confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless they are canceled at least 24 hours before the end of the current period.</li>
            <li>You can manage and cancel your subscriptions by going to your App Store account settings after purchase.</li>
        </ul>

        <h3>4. Intellectual Property</h3>
        <p>
            The App, including its design, branding, and the instrumental beats provided within it, are the property of the App's developers and are protected by copyright laws. You are granted a license to use the App as intended but not to reproduce, distribute, or create derivative works from it.
        </p>

        <h3>5. Disclaimer of Warranties</h3>
        <p>
            The App is provided "as is" without any warranties. We do not guarantee that the App will always be available, error-free, or that the word suggestions provided by any third-party APIs will be accurate or suitable for any purpose.
        </p>
        
        <h3>6. Governing Law</h3>
        <p>
            These Terms shall be governed by the laws of Norway.
        </p>
        
        <h3>7. Changes to These Terms</h3>
        <p>
            We may update our Terms from time to time. We will notify you of any changes by posting the new Terms on this page.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about these Terms, you can contact us at: Designr.pros@gmail.com
        </p>
      </LegalContent>
    </LegalContainer>
  );
}