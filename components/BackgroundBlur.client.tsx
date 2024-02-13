// components/BackgroundBlur.client.tsx
import { useState, useEffect, ReactNode } from 'react';

interface BackgroundBlurProps {
  children: ReactNode;
}
export default function BackgroundBlur({ children }: BackgroundBlurProps) {
  const [blur, setBlur] = useState(false);

  // Scroll-Event-Handler
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  // Event-Listener für das Scrollen hinzufügen
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup-Function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-cover bg-center flex flex-col ${blur ? 'blur' : ''}`} style={{ backgroundImage: `url('/Car.png')` }}>
      {children}
    </div>
  );
}
