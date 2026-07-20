'use client';

import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F0F4F8;
  color: #1A202C;
  padding: 8rem 2rem 4rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`;

const DownloadContainer = styled.div`
  width: 100%;
  max-width: 600px;
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
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #718096;
  }
`;

const AppStoreMessage = styled.div`
  padding: 1.5rem;
  background: #EBF8FF;
  border-radius: 12px;
  color: #2C5282;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export default function DownloadPage() {
  return (
    <PageWrapper>
      <DownloadContainer>
        <Header>
          <h1>Download Free Flow</h1>
          <p>Get ready to unlock your freestyle sessions.</p>
        </Header>

        <AppStoreMessage>
          Free Flow is coming to the App Store soon. Check back here for the
          download link once it is live.
        </AppStoreMessage>
      </DownloadContainer>
    </PageWrapper>
  );
}
