import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { usePortfolioData } from '../hooks/useSupabaseData';

export function AestheticGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { institutions } = usePortfolioData();

  return (
    <section id="gallery" className="py-32 px-8 overflow-hidden bg-black/20">
      <div className="container mx-auto max-w-7xl text-center mb-16">
         <h2 className="text-amber-500 font-black tracking-[0.5em] text-xs uppercase mb-4">Aesthetic Gallery</h2>
         <h3 className="text-4xl md:text-6xl font-serif font-bold text-white">Moments of Leadership</h3>
      </div>
      <motion.div className="flex gap-12 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 80 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15, scale: 1.02 }}
            onClick={() => setSelectedImg(`https://picsum.photos/seed/acad${i+50}/800/1000`)}
            className="w-80 h-[480px] rounded-[3.5rem] overflow-hidden border border-white/5 cursor-pointer shadow-2xl relative group bg-white/5"
          >
            <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {institutions && institutions.length > 0 ? institutions[i % institutions.length].name : 'Institution'}
              </span>
            </div>
            <img src={`https://picsum.photos/seed/acad${i+50}/800/1000`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-[#C9A227]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6" onClick={() => setSelectedImg(null)}>
            <button className="absolute top-10 right-10 text-white bg-white/5 p-5 rounded-full hover:bg-[#C9A227] hover:text-black transition-all" onClick={() => setSelectedImg(null)}><X size={32} /></button>
            <motion.img initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} src={selectedImg} className="max-w-full max-h-[90vh] rounded-[3rem] shadow-[0_0_100px_rgba(201,162,39,0.2)] border border-white/10 object-contain" referrerPolicy="no-referrer" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
