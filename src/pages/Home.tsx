import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion'; // note: updated to framer-motion based on standard setup
import { GraduationCap, BookOpen } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { InstitutionsMarquee } from '../components/InstitutionsMarquee';
import { TransformationStory } from '../components/TransformationStory';
import { Biography } from '../components/Biography';
import { Publications } from '../components/Publications';
import { StrategicDialogues } from '../components/StrategicDialogues';
import { NationalTributes } from '../components/NationalTributes';
import { AwardsLeadership } from '../components/AwardsLeadership';
import { AestheticGallery } from '../components/AestheticGallery';
import { WatchTheLegacy } from '../components/WatchTheLegacy';
import { ContactFooter } from '../components/ContactFooter';
import { GlobalControls } from '../components/GlobalControls';

export function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-[#04060b] text-slate-300 selection:bg-amber-500/20 font-sans overflow-x-hidden scroll-smooth relative">
      
      {/* 🌟 Dynamic Background Theme (Mesh Glow) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-40 right-10 rotate-12"><GraduationCap size={400} /></div>
          <div className="absolute bottom-20 left-10 -rotate-12"><BookOpen size={300} /></div>
        </div>
      </div>

      {/* 🌟 Scroll Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A227] to-[#F5E6C8] origin-left z-[100]" style={{ scaleX }} />

      {/* 🌟 Navigation & Controls */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <GlobalControls />

      {/* ════ ALL SECTIONS WRAPPED WITH IDs FOR NAVIGATION ════ */}
      
      <div className="relative z-10">
        <section id="home">
          <Hero setSelectedImg={setSelectedImg} />
          <InstitutionsMarquee />
        </section>

        {/* Gallery doesn't have a direct nav link right now, but keeping it in flow */}
        <AestheticGallery /> 

        <section id="biography">
          <Biography />
        </section>

        <section id="transformation">
          <TransformationStory />
        </section>

        <section id="publications">
          <Publications />
        </section>

        <section id="events">
          <StrategicDialogues />
        </section>

        <section id="tributes">
          <NationalTributes />
        </section>

        <section id="awards">
          <AwardsLeadership />
        </section>

        <section id="legacy">
          <WatchTheLegacy />
        </section>

        <section id="contact">
          <ContactFooter />
        </section>
      </div>

    </div>
  );
}