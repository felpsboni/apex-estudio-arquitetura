import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'portfolio', 'sobre', 'contato'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-quartz/30 selection:text-quartz-light">
      {/* Editorial Background Grain Layer */}
      <div className="fixed inset-0 pointer-events-none bg-grain z-50 opacity-40" />

      {/* Persistent Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Semantic Content */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
