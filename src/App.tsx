/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#E5E5E5] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Navigation */}
      <Navbar activeSection={activeSection} />

      <main className="flex-1 w-full">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Scrolling marquee / visual strip */}
        <MarqueeStrip />

        {/* 4. About (with Education) */}
        <AboutSection />

        {/* 5. Skills / Currently Learning (Contrasting Light Section) */}
        <SkillsSection />

        {/* 6. Projects (Sticky Stacking Cards) */}
        <ProjectsSection />

        {/* 7. Journey (Minimal Timeline) */}
        <JourneySection />

        {/* 8. Contact */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
