// src/app/layout.tsx
import ThemeRegistry from './ThemeRegistry';
import Navbar from '../components/Navbar';
import GoogleAnalytics from '../components/GoogleAnalytics';

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 

export const metadata = {
  title: 'Free Flow | Your Digital Freestyle & Lyricism Partner',
  description: 'The ultimate app for rappers, poets, and songwriters. Get inspired, find rhymes, and capture your ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* UPDATED: Added 'Permanent+Marker' to the font import */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeRegistry>
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}