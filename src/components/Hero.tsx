import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, BookOpen, Mail, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// 👇 তোমার লোকাল ফোল্ডার থেকে স্যারের ছবি
import principalSirPhoto from '../asset/sir heroic poster.png';

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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* ======================================= */}
        {/* বাম দিকের কলাম: টেক্সট (বাম থেকে ডান দিকে আসবে) */}
        {/* ======================================= */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-[1.8] text-center lg:text-left lg:pr-32 order-2 lg:order-1"
        >
          {/* গ্লাস শেপের ভেতরে "National Educational Architect" (শাইনিং বর্ডারসহ) */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#C9A227]/40 shadow-[0_0_20px_rgba(201,162,39,0.2)]">
               <ShieldCheck className="text-[#C9A227]" size={18} />
               <span className="text-[#C9A227] text-[10px] font-black tracking-[0.4em] uppercase italic">National Educational Architect</span>
            </div>
          </div>
          
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
        </motion.div>

        {/* ======================================= */}
        {/* ডান দিকের কলাম: ছবি (ডান থেকে বাম দিকে আসবে) */}
        {/* ======================================= */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative flex justify-center lg:justify-end order-1 lg:order-2 w-full max-w-[360px] md:max-w-[420px] mx-auto"
        >
              
          {/* aspect-[3/4] চতুর্ভুজ পোর্ট্রেট ফ্রেম */}
          <div className="relative aspect-[3/4] group cursor-pointer w-full" onClick={() => setSelectedImg(principalSirPhoto)}>
            
            {/* পেছনের সোনালী আলোর আভা */}
            <div className="absolute inset-0 bg-[#C9A227]/20 rounded-[2.5rem] blur-[80px] animate-pulse" />
            
            {/* 🌟 ৪ রঙের মুভিং ডট ম্যাজিক (স্লো স্পিড) 🌟 */}
            <div className="absolute -inset-[3px] rounded-[2.5rem] overflow-hidden bg-white/5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }} // duration 12 মানে একদম স্লো ঘুরবে
                className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] opacity-80 bg-[conic-gradient(from_0deg,transparent_0_60deg,#C9A227_90deg,transparent_90deg_150deg,#6366F1_180deg,transparent_180deg_240deg,#10B981_270deg,transparent_270deg_330deg,#D946EF_360deg)]"
              />
            </div>
            
            {/* মেইন ছবির চতুর্ভুজ ফ্রেম */}
            <div className="absolute inset-0 rounded-[2.5rem] border-[4px] border-[#04060b] overflow-hidden bg-[#04060b] shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10">
              <img
                src={principalSirPhoto}
                alt="Dr. Mahbubur Rahman Mollah Heroic Poster"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b]/50 via-transparent to-transparent" />
            </div>

            {/* THE EXPERIENCE CARD (ছোট সাইজ এবং ওয়াটার কালার গ্লাস শেপ) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -right-4 lg:-right-8 bottom-8 bg-gradient-to-br from-[#C9A227]/20 via-[#6366F1]/15 to-[#10B981]/20 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl z-20 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C9A227] to-[#FFD700] rounded-full flex items-center justify-center text-black shadow-lg">
                    <Trophy size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-[#FFD700] tracking-widest drop-shadow-md">Dedication</p>
                  <p className="text-xl font-serif font-bold text-white leading-none mt-1">35+ Years</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}