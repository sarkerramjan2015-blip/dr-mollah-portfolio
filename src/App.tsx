import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Download, Trophy, Building2, Menu, X, GraduationCap, 
  BookOpen, ShieldCheck, Mail, ArrowRight, Sun, Moon,
  Star, Globe, Target, Award, Quote, Home
} from 'lucide-react';
import { useEffect, useState, createContext, useContext } from 'react';

// তোমার কম্পিউটারের ছবি ইম্পোর্ট করা হলো
import principalSirPhoto from './assets/principal_sir.jpg.jpg';

// --- contexts ---
const LanguageContext = createContext({ lang: "bn", toggleLang: () => {} });
const useLanguage = () => useContext(LanguageContext);

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

const INSTITUTIONS = [
  { name: "SHKSC", grad: "from-[#C9A227] to-[#F5E6C8]" },
  { name: "DMRC", grad: "from-[#6366F1] to-[#D946EF]" },
  { name: "MRIST", grad: "from-[#10B981] to-[#D1FAE5]" },
  { name: "DMRC Village", grad: "from-[#F43F5E] to-[#FFF1F2]" }
];

// --- Sub-Components ---
function FadeIn({ children, delay = 0, className = "" }: { children: any, delay?: number, className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }} viewport={{ once: true }} className={className}>
      {children}
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState('bn');
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(prev => (prev + 1) % HERO_ROLES.en.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'bn' : 'en');
  const roles = HERO_ROLES[lang as keyof typeof HERO_ROLES];

  // হোম মেনু সহ নতুন নেভিগেশন লিংক
  const navLinks = [
    { id: "home", en: "Home", bn: "হোম" },
    { id: "vision", en: "Vision", bn: "ভিশন" },
    { id: "institutions", en: "Institutions", bn: "প্রতিষ্ঠান" },
    { id: "activities", en: "Activities", bn: "কার্যক্রম" },
    { id: "contact", en: "Contact", bn: "যোগাযোগ" }
  ];

  return (
    <LanguageContext.Provider value={{ lang: lang as any, toggleLang }}>
      <div className="min-h-screen bg-[#04060b] text-slate-300 selection:bg-amber-500/20 font-sans overflow-x-hidden scroll-smooth">
        
        {/* 1. Dynamic Background Theme (Mesh Glow) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
          <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-40 right-10 rotate-12"><GraduationCap size={400} /></div>
            <div className="absolute bottom-20 left-10 -rotate-12"><BookOpen size={300} /></div>
          </div>
        </div>

        {/* 2. Scroll Progress */}
        <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A227] to-[#F5E6C8] origin-left z-[100]" style={{ scaleX }} />

        {/* 3. Navbar (Premium Floating Glass) */}
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

        {/* 4. Hero Section (Home) */}
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12">
          <div className="container mx-auto px-8 max-w-7xl flex flex-col lg:flex-row items-center">
            
            {/* Left Column (Shifted further left with huge gap) */}
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

              {/* Updated Buttons with Icons & Links */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a href="#vision" className="px-10 py-5 bg-gradient-to-r from-[#C9A227] to-[#FFD700] text-black font-black rounded-xl shadow-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
                  <BookOpen size={20} /> READ BIOGRAPHY
                </a>
                <a href="#contact" className="px-10 py-5 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                  <Mail size={20} /> GET IN TOUCH
                </a>
              </div>
            </div>

            {/* Right Column (Royal Image with Local Photo) */}
            <div className="flex-1 relative flex justify-center lg:justify-end order-1 lg:order-2 mb-16 lg:mb-0">
               <FadeIn delay={0.3} className="relative">
                  <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto group cursor-pointer" onClick={() => setSelectedImg(principalSirPhoto)}>
                    
                    {/* Glowing Aura */}
                    <div className="absolute inset-0 bg-[#C9A227]/20 rounded-full blur-[100px] animate-pulse" />
                    
                    {/* Rotating Dashed Ring */}
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                      className="absolute -inset-8 border-[1.5px] border-dashed border-[#C9A227]/30 rounded-full"
                    />
                    
                    {/* Main Image Container (Local Photo) */}
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

        {/* 5. Smooth Marquee Section (Institutions) */}
        <section id="institutions" className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <motion.div className="flex gap-28 items-center w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 50 }}>
            {[...INSTITUTIONS, ...INSTITUTIONS].map((inst, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <span className={`text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r ${inst.grad} bg-clip-text text-transparent opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 uppercase tracking-tighter italic`}>
                  {inst.name}
                </span>
                <div className="h-px w-0 group-hover:w-full bg-[#C9A227]/50 transition-all duration-700 mt-2" />
              </div>
            ))}
          </motion.div>
        </section>

        {/* 6. Vision / Biography Dummy Section */}
        <section id="vision" className="py-32 px-8">
           <div className="container mx-auto max-w-4xl text-center bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem]">
              <Quote className="text-[#C9A227] w-12 h-12 mx-auto mb-6 opacity-50" />
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Visionary Biography</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Detailed biography section goes here. Dr. Mahbubur Rahman Mollah has dedicated his life to building a robust educational framework...
              </p>
           </div>
        </section>

        {/* 7. Parallax Gallery (Cinematic) */}
        <section id="activities" className="py-32 px-8 overflow-hidden bg-black/20">
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
                <img src={`https://picsum.photos/seed/acad${i+50}/800/1000`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-[#C9A227]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 8. Full-Screen Premium Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6" onClick={() => setSelectedImg(null)}>
              <button className="absolute top-10 right-10 text-white bg-white/5 p-5 rounded-full hover:bg-[#C9A227] hover:text-black transition-all" onClick={() => setSelectedImg(null)}><X size={32} /></button>
              <motion.img initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} src={selectedImg} className="max-w-full max-h-[90vh] rounded-[3rem] shadow-[0_0_100px_rgba(201,162,39,0.2)] border border-white/10 object-contain" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 9. Contact & Footer */}
        <footer id="contact" className="py-24 text-center border-t border-white/5">
          <div className="mb-8 flex justify-center gap-6">
             <a href="mailto:principal@shksc.edu.bd" className="p-4 bg-white/5 rounded-full hover:bg-[#C9A227] hover:text-black transition-all"><Mail size={20}/></a>
             <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-[#C9A227] hover:text-black transition-all"><Globe size={20}/></a>
          </div>
          <p className="text-[10px] font-bold text-slate-600 tracking-[0.5em] uppercase italic">
            © {new Date().getFullYear()} DR. MAHBUBUR RAHMAN MOLLAH | NATIONAL LEGACY PORTFOLIO
          </p>
        </footer>

      </div>
    </LanguageContext.Provider>
  );
}