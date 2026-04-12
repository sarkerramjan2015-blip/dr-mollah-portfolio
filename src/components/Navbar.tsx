import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) {
  const { lang, toggleLang } = useLanguage();

  const navLinks = [
    { id: 'home', en: 'Home', bn: 'হোম' },
    { id: 'vision', en: 'Vision', bn: 'ভিশন' },
    { id: 'institutions', en: 'Institutions', bn: 'প্রতিষ্ঠানসমূহ' },
    { id: 'activities', en: 'Activities', bn: 'কার্যক্রম' },
    { id: 'contact', en: 'Contact', bn: 'যোগাযোগ' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 flex justify-center">
      <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-[#C9A227] font-serif font-bold text-lg tracking-tighter italic border-r border-white/10 pr-4">DR. M. R. MOLLAH</div>
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setActiveSection(link.id)}
               className={`relative px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all group
               ${activeSection === link.id ? 'text-white bg-white/10 shadow-lg' : 'text-slate-400 hover:text-white'}`}>
              {lang === 'en' ? link.en : link.bn}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C9A227] transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </div>
        <button onClick={toggleLang} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-all shadow-lg">
           {lang === 'en' ? 'BN' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
