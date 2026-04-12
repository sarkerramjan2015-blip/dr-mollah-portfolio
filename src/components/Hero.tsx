import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, BookOpen, Mail, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

const principalSirPhoto = "https://picsum.photos/seed/principal/800/1000";

const HERO_ROLES = {
  bn: [
    { text: "প্রিন্সিপাল, সামসুল হক খান স্কুল অ্যান্ড কলেজ", gradient: "from-[#C9A227] via-[#FFD700] to-[#F5E6C8]" },
    { text: "প্রতিষ্ঠাতা, ড. মাহবুবুর রহমান মোল্লা কলেজ", gradient: "from-[#6366F1] via-[#8B5CF6] to-[#D946EF]" },
    { text: "চেয়ারম্যান, DMRC এডুকেশন ভিলেজ", gradient: "from-[#10B981] via-[#34D399] to-[#D1FAE5]" }
  ],
  en: [
    { text: "Principal, SHKSC", gradient: "from-[#C9A227] via-[#FFD700] to-[#F5E6C8]" },
    { text: "Founder, Dr. Mahbubur Rahman Mollah College", gradient: "from-[#6366F1] via-[#8B5CF6] to-[#D946EF]" },
    { text: "Chairman, DMRC Education Village", gradient: "from-[#10B981] via-[#34D399] to-[#D1FAE5]" }
  ]
};

export function Hero({ setSelectedImg }: { setSelectedImg: (img: string) => void }) {
  const { lang } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = HERO_ROLES[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12">
      <div className="container mx-auto px-8 max-w-7xl flex flex-col lg:flex-row items-center">
       
        {/* Left Column */}
        <div className="flex-[1.8] text-center lg:text-left lg:pr-32 order-2 lg:order-1">
          <FadeIn className="flex items-center justify-center lg:justify-start gap-3 mb-6">
             <ShieldCheck className="text-[#C9A227]" size={18} />
             <span className="text-[#C9A227] text-[10px] font-black tracking-[0.6em] uppercase italic">National Educational Architect</span>
          </FadeIn>
         
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-black text-white leading-[0.85] tracking-tighter mb-10">
            DR. MAHBUBUR <br />
            <span className="bg-gradient-to-r from-[#C9A227] via-[#FFD700] to-[#F5E6C8] bg-clip-text text-transparent">RAHMAN MOLLAH</span>
          </h1>
         
          <div className="h-16 overflow-hidden bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl px-8 flex items-center max-w-max mx-auto lg:mx-0 shadow-xl mb-12">
            <AnimatePresence mode="wait">
              <motion.p key={roleIndex} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-lg md:text-xl font-medium bg-gradient-to-r ${roles[roleIndex].gradient} bg-clip-text text-transparent italic`}
              >
                {roles[roleIndex].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a href="#vision" className="px-10 py-5 bg-gradient-to-r from-[#C9A227] to-[#FFD700] text-black font-black rounded-xl shadow-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
              <BookOpen size={20} /> READ BIOGRAPHY
            </a>
            <a href="#contact" className="px-10 py-5 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-white">
              <Mail size={20} /> GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative flex justify-center lg:justify-end order-1 lg:order-2 mb-16 lg:mb-0">
           <FadeIn delay={0.3} className="relative">
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto group cursor-pointer" onClick={() => setSelectedImg(principalSirPhoto)}>
               
                {/* Glowing Aura */}
                <div className="absolute inset-0 bg-[#C9A227]/20 rounded-full blur-[100px] animate-pulse" />
               
                {/* Rotating Dashed Ring */}
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="absolute -inset-8 border-[1.5px] border-dashed border-[#C9A227]/30 rounded-full"
                />
               
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full border-[15px] border-[#04060b] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] z-10">
                  <img
                    src={principalSirPhoto}
                    alt="Dr. Mahbubur Rahman Mollah"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060b]/40 to-transparent" />
                </div>

                {/* THE EXPERIENCE CARD */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }}
                  className="absolute -right-10 bottom-20 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border border-white/20 p-7 rounded-[2.5rem] z-20 hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#C9A227] to-[#FFD700] rounded-full flex items-center justify-center text-black shadow-xl">
                        <Trophy size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-[#C9A227] tracking-widest">Legacy</p>
                      <p className="text-4xl font-serif font-bold text-white leading-none mt-1">35+ Years</p>
                    </div>
                  </div>
                </motion.div>
              </div>
           </FadeIn>
        </div>
      </div>
    </section>
  );
}
