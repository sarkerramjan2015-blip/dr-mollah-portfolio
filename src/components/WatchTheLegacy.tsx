import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function WatchTheLegacy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32 px-5 lg:px-8 bg-[#04060b] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <FadeIn>
          <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">Watch the Legacy</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-12">A Journey of Excellence</h3>
          
          <div 
            className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-pointer group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            onClick={() => setIsOpen(true)}
          >
            <img 
              src="https://picsum.photos/seed/legacy/1280/720" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#04060b]/40 group-hover:bg-[#04060b]/20 transition-colors" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#C9A227] rounded-full flex items-center justify-center text-[#04060b] pl-1 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(201,162,39,0.5)]">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#04060b]/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#C9A227] bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-50"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(201,162,39,0.2)] border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
