import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) {
  const { lang, toggleLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Awards সহ সম্পূর্ণ লিস্ট
  const navLinks = [
    { id: 'home', en: 'Home', bn: 'হোম' },
    { id: 'biography', en: 'Biography', bn: 'জীবনী' },
    { id: 'transformation', en: 'History', bn: 'ইতিহাস' },
    { id: 'publications', en: 'Publications', bn: 'প্রকাশনা' },
    { id: 'events', en: 'Events', bn: 'ইভেন্ট' },
    { id: 'tributes', en: 'Tributes', bn: 'শ্রদ্ধাঞ্জলি' },
    { id: 'awards', en: 'Awards', bn: 'পুরস্কার' }, // 👈 এই যে Awards অ্যাড করা হলো
    { id: 'legacy', en: 'Legacy', bn: 'লেগাসি' },
    { id: 'contact', en: 'Contact', bn: 'যোগাযোগ' }
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-7xl px-4 flex flex-col items-center">
      
      <div className="bg-[#0a0c10]/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div 
          className="text-[#C9A227] font-serif font-black text-sm md:text-lg tracking-widest cursor-pointer md:border-r md:border-white/10 md:pr-4"
          onClick={(e) => handleNavClick('home', e)}
        >
          DR. M. R. MOLLAH
        </div>

        <div className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(link.id, e)}
              className={`relative px-3 py-2 rounded-full text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all group whitespace-nowrap
              ${activeSection === link.id ? 'text-white bg-white/10 shadow-inner' : 'text-slate-400 hover:text-white'}`}
            >
              {lang === 'en' ? link.en : link.bn}
              <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#C9A227] transition-all duration-300 ${activeSection === link.id ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleLang} 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center text-[10px] font-black text-[#C9A227] hover:bg-[#C9A227] hover:text-[#04060b] transition-all shadow-lg"
          >
            {lang === 'en' ? 'BN' : 'EN'}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#C9A227] transition-colors"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full mt-2 w-[90%] max-w-sm bg-[#0a0c10]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(link.id, e)}
                className={`px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all text-center
                ${activeSection === link.id ? 'bg-[#C9A227] text-[#04060b] shadow-[0_0_20px_rgba(201,162,39,0.3)]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                {lang === 'en' ? link.en : link.bn}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}