'use client'
// pages/page.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import SpeechBubble from '../components/SpeechBubble';
import Hero from '../components/Hero';
import BackgroundBlur from '../components/BackgroundBlur.client'; // Achten Sie auf die .client Erweiterung

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Ihr Seitentitel</title>
        <style>
          {`
            .blur {
              filter: blur(8px); // Passen Sie die Stärke des Blur-Effekts an
            }
          `}
        </style>
      </Head>
      <BackgroundBlur>
        <Navbar />
        <main className="overflow-hidden">
          <Hero />
          <SpeechBubble />
          {/* Weitere Inhalte... */}
        </main>
      </BackgroundBlur>
    </>
  );
}
