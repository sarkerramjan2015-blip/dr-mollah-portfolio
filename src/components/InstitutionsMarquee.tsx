import { motion } from 'motion/react';
import { usePortfolioData } from '../hooks/useSupabaseData';

export function InstitutionsMarquee() {
  const { institutions } = usePortfolioData();

  if (!institutions || institutions.length === 0) return null;

  return (
    <section id="institutions" className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <motion.div className="flex gap-28 items-center w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 50 }}>
        {[...institutions, ...institutions].map((inst, idx) => (
          <div key={idx} className="flex flex-col items-center group cursor-pointer">
            <span className={`text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r ${inst.grad} bg-clip-text text-transparent opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 uppercase tracking-tighter italic`}>
              {inst.name}
            </span>
            <div className="h-px w-0 group-hover:w-full bg-[#C9A227]/50 transition-all duration-700 mt-2" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
