import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Facebook } from 'lucide-react';

export function GlobalControls() {
  const [showTop, setShowTop] = useState(false);
  
  useEffect(() => {
    const toggle = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-[#C9A227] text-[#04060b] rounded-full shadow-2xl z-40 hover:bg-[#FFD700] transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      <motion.a 
        href="#" animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="fixed bottom-6 left-6 w-14 h-14 flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-2xl z-40 hover:bg-[#166fe5] transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </motion.a>
    </>
  );
}
