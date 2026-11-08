import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModuleIntro } from './components/ModuleIntro';
import { OrderFlow } from './components/OrderFlow';
import { ModulesConnect } from './components/ModulesConnect';
import { StatsBand } from './components/StatsBand';
import { AboutSection } from './components/AboutSection';
import { AIAdvisorSection } from './components/AIAdvisorSection';
import { ModulesShowcase } from './components/ModulesShowcase';
import { CrossPlatformSection } from './components/CrossPlatformSection';
import { ThemeSwitcherSection } from './components/ThemeSwitcherSection';
import { OdooCalloutBanner } from './components/OdooCalloutBanner';
import { ContactFooter } from './components/ContactFooter';
import { DownloadPage } from './components/DownloadPage';
import type { Language } from './types';
import Lenis from 'lenis';

export function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [view, setView] = useState<'home' | 'download'>('home');

  // Handle URL hash changes for routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#downloads' || hash === '#download' || hash === '#/download') {
        setView('download');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Set HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Initialize Lenis smooth scroll on desktop when on home view
  useEffect(() => {
    if (view === 'home' && window.innerWidth >= 1024) {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      const animId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animId);
        lenis.destroy();
      };
    }
  }, [view]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in download view, display the Antigravity-style download page
  if (view === 'download') {
    return (
      <DownloadPage
        lang={lang}
        onBackToHome={navigateToHome}
        onToggleLang={toggleLanguage}
      />
    );
  }

  // Otherwise render full landing page
  return (
    <div className="min-h-screen bg-[#F2F7FC] text-[#0B192C] font-sans antialiased selection:bg-[#0066FF] selection:text-white">
      <Navbar lang={lang} onToggleLang={toggleLanguage} />
      <Hero lang={lang} />
      <ModuleIntro lang={lang} />
      <OrderFlow lang={lang} />
      <ModulesConnect lang={lang} />
      <AIAdvisorSection lang={lang} />
      <AboutSection lang={lang} />
      <CrossPlatformSection lang={lang} />
      <ModulesShowcase lang={lang} />
      <ThemeSwitcherSection lang={lang} />
      <StatsBand lang={lang} />
      <OdooCalloutBanner lang={lang} />
      <ContactFooter lang={lang} />
    </div>
  );
}

export default App;
