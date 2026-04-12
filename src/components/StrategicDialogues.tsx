import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { usePortfolioData } from '../hooks/useSupabaseData';

export function StrategicDialogues() {
  const { dialogues } = usePortfolioData();
  const [selectedDialogue, setSelectedDialogue] = useState<any | null>(null);

  if (!dialogues || dialogues.length === 0) return null;

  const row1 = dialogues.slice(0, 3);
  const row2 = dialogues.slice(3, 6);

  const Row = ({ items, direction }: { items: any[], direction: "left" | "right" }) => (
    <motion.div 
      className="flex gap-6 w-max mb-6"
      animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
    >
      {[...items, ...items, ...items].map((item, idx) => (
        <div key={idx} className="w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shrink-0 group hover:border-[#C9A227]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col">
          <div className="h-48 overflow-hidden relative shrink-0 border-b border-white/5">
            <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between bg-[#04060b]/30">
            <h4 className="font-bengali text-lg font-bold text-white mb-5 line-clamp-2 group-hover:text-[#C9A227] transition-colors">{item.caption}</h4>
            <button 
              onClick={() => setSelectedDialogue(item)}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#04060b] bg-[#C9A227] hover:bg-[#FFD700] px-5 py-2.5 rounded-lg transition-colors self-start shadow-lg"
            >
              আরও দেখুন <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-20 lg:py-32 bg-[#04060b] text-white overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-5 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">Strategic Dialogues</h2>
        <h3 className="text-4xl lg:text-5xl font-bengali font-bold">কৌশলগত সংলাপ</h3>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#04060b] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#04060b] to-transparent z-10 pointer-events-none" />
        <Row items={row1} direction="left" />
        <Row items={row2} direction="right" />
      </div>

      <AnimatePresence>
        {selectedDialogue && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#04060b]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedDialogue(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#04060b] border border-white/10 rounded-3xl max-w-4xl w-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-64 md:h-auto md:w-1/2 relative shrink-0">
                <img src={selectedDialogue.img} alt={selectedDialogue.caption} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b]/80 to-transparent md:hidden" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center relative md:w-1/2 bg-white/5">
                <button 
                  onClick={() => setSelectedDialogue(null)} 
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-[#C9A227] bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-12 h-1 bg-[#C9A227] mb-6 rounded-full" />
                <h3 className="font-bengali text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{selectedDialogue.caption}</h3>
                <p className="font-bengali text-slate-300 text-base md:text-lg leading-relaxed">{selectedDialogue.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
