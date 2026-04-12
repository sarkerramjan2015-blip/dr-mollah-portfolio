import { motion, useInView, animate, AnimatePresence } from 'motion/react';
import { 
  Download, Mail, Award, BookOpen, Users, GraduationCap, 
  Calendar, ChevronRight, Newspaper, Flag, PenTool, 
  ArrowRight, Facebook, ArrowUp, Send, MapPin, Phone, Target, Lightbulb, TrendingUp,
  Volume2, VolumeX, ExternalLink, Menu, X, ChevronDown, ChevronUp,
  Tent, Microscope, Globe, MessageSquare, Music, Trophy, Code, Camera, Calculator, Leaf, Palette,
  Quote, Star, Moon, Sun, Languages, Medal, Shield
} from 'lucide-react';
import { useRef, useEffect, useState, ReactNode, createContext, useContext } from 'react';
import { useTheme } from 'next-themes';

// --- CONTEXTS ---
type Language = 'en' | 'bn';
const LanguageContext = createContext<{ lang: Language; toggleLang: () => void }>({ lang: 'bn', toggleLang: () => {} });
export const useLanguage = () => useContext(LanguageContext);

// --- DATA ARRAYS ---
const HERO_ROLES = {
  bn: [
    "প্রিন্সিপাল, সামসুল হক খান স্কুল অ্যান্ড কলেজ",
    "প্রতিষ্ঠাতা, ড. মাহবুবুর রহমান মোল্লা কলেজ",
    "প্রেসিডিয়াম সদস্য, বাংলাদেশ কলেজ শিক্ষক সমিতি",
    "চেয়ারম্যান, ড. মাহবুবুর রহমান মোল্লা এডুকেশন ভিলেজ"
  ],
  en: [
    "Principal, Shamsul Hoque Khan School & College",
    "Founder, Dr. Mahbubur Rahman Mollah College",
    "Presidium Member, Bangladesh College Teachers Association",
    "Chairman, Dr. Mahbubur Rahman Mollah Education Village"
  ]
};

const INSTITUTIONS = [
  { name: "Shamsul Hoque Khan School & College", role: "Principal", url: "https://shksc.edu.bd", img: "inst1", achievements: ["Top in National Board Results", "Excellence in Co-curriculars"] },
  { name: "Dr. Mahbubur Rahman Mollah College", role: "Founder", url: "#", img: "inst2", achievements: ["100% Passing Rate", "State-of-the-art Campus"] },
  { name: "MRIST", role: "Founder", url: "#", img: "inst3", achievements: ["Pioneering Tech Education", "Global Partnerships"] },
  { name: "Turning Point International", role: "Founder", url: "#", img: "inst4", achievements: ["International Curriculum", "Holistic Development"] }
];

const ACTIVITIES = [
  { date: "Oct 15, 2023", title: "National Education Seminar", desc: "Keynote speaker discussing the future of secondary education in Bangladesh.", img: "act1" },
  { date: "Sep 28, 2023", title: "Science Lab Inauguration", desc: "Inaugurated the new state-of-the-art science laboratory at SHKSC.", img: "act2" },
  { date: "Aug 12, 2023", title: "Teachers' Training Workshop", desc: "Led a comprehensive workshop on modern pedagogical approaches.", img: "act3" },
  { date: "Jul 05, 2023", title: "HWPL Peace Summit", desc: "Represented Bangladesh as an Ambassador of HWPL in South Korea.", img: "act4" }
];

const STRATEGIC_DIALOGUES = [
  { img: "sd1", caption: "শিক্ষানীতি নিয়ে আলোচনা", details: "জাতীয় শিক্ষানীতি বাস্তবায়ন ও আধুনিকায়ন নিয়ে নীতিনির্ধারকদের সাথে বিশেষ মতবিনিময়।" },
  { img: "sd2", caption: "আন্তর্জাতিক সেমিনার", details: "দক্ষিণ কোরিয়ায় অনুষ্ঠিত আন্তর্জাতিক শান্তি ও শিক্ষা সেমিনারে বাংলাদেশের প্রতিনিধিত্ব।" },
  { img: "sd3", caption: "শিক্ষক প্রশিক্ষণ কর্মশালা", details: "আধুনিক শিক্ষাদান পদ্ধতি ও শিক্ষকদের পেশাগত মান উন্নয়নে দিকনির্দেশনামূলক বক্তব্য।" },
  { img: "sd4", caption: "উচ্চশিক্ষা বিষয়ক গোলটেবিল", details: "মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষার গুণগত মান বৃদ্ধিতে বিশ্ববিদ্যালয়গুলোর সাথে সমন্বয়।" },
  { img: "sd5", caption: "ডিজিটাল ক্লাসরুম উদ্বোধন", details: "একুশ শতকের চ্যালেঞ্জ মোকাবেলায় প্রযুক্তিভিত্তিক শিক্ষার প্রসার ও ডিজিটাল ক্লাসরুম স্থাপন।" },
  { img: "sd6", caption: "অভিভাবক সমাবেশ", details: "শিক্ষার্থীদের সার্বিক বিকাশে শিক্ষক ও অভিভাবকদের সমন্বিত ভূমিকা নিয়ে আলোচনা।" }
];

const TRIBUTES = [
  { day: "21st February", title: "International Mother Language Day", msg: "We honor the martyrs who gave their lives for our mother tongue. Their sacrifice echoes in every Bengali word we speak.", img: "language" },
  { day: "26th March", title: "Independence Day", msg: "Paying homage to the brave souls who fought for our freedom. May their courage inspire our future generations.", img: "independence" },
  { day: "16th December", title: "Victory Day", msg: "Celebrating the triumph of justice and the birth of our nation. A day of immense pride and reflection.", img: "victory" }
];

const ARTICLES = [
  { title: "The Future of Secondary Education", tag: "The Daily Star", excerpt: "Exploring the necessary reforms to prepare our students for the 21st-century global landscape." },
  { title: "Empowering Educators", tag: "Prothom Alo", excerpt: "Why investing in teachers' rights and dignity is the fundamental building block of a successful nation." },
  { title: "Digital Classrooms in Bangladesh", tag: "Education Blog", excerpt: "Transitioning from traditional methods to interactive, technology-driven learning environments." }
];

// --- HELPERS ---
const FadeIn = ({ children, delay = 0, className = "", ...props }: { children: ReactNode, delay?: number, className?: string, [key: string]: any }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay }} className={className} {...props}>
    {children}
  </motion.div>
);

// --- COMPONENTS ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => setMounted(true), []);

  const navLinks = {
    en: { vision: "Vision", inst: "Institutions", act: "Activities", contact: "Contact" },
    bn: { vision: "ভিশন", inst: "প্রতিষ্ঠানসমূহ", act: "কার্যক্রম", contact: "যোগাযোগ" }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <div className="text-gold-600 dark:text-gold-500 font-serif font-bold text-xl tracking-wide">Dr. M. R. Mollah</div>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#vision" className="hover:text-gold-600 dark:hover:text-gold-500 transition-colors">{navLinks[lang].vision}</a>
          <a href="#institutions" className="hover:text-gold-600 dark:hover:text-gold-500 transition-colors">{navLinks[lang].inst}</a>
          <a href="#activities" className="hover:text-gold-600 dark:hover:text-gold-500 transition-colors">{navLinks[lang].act}</a>
          
          <div className="flex items-center gap-4 ml-4 border-l border-slate-200 dark:border-white/10 pl-8">
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 transition-colors font-bold"
              aria-label="Toggle Language"
            >
              <Languages className="w-5 h-5" />
              <span className="text-xs uppercase">{lang === 'en' ? 'BN' : 'EN'}</span>
            </button>
            <a href="#contact" className="px-6 py-2.5 bg-gold-500 text-navy-900 rounded-lg hover:bg-gold-400 transition-colors font-bold">{navLinks[lang].contact}</a>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <button 
            onClick={toggleLang}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 transition-colors font-bold flex items-center gap-1"
          >
            <span className="text-xs uppercase">{lang === 'en' ? 'BN' : 'EN'}</span>
          </button>
          <button className="p-2 -mr-2 text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-500 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-6 gap-2 text-slate-600 dark:text-slate-300 font-medium">
              <a href="#vision" onClick={() => setIsOpen(false)} className="py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:text-gold-600 dark:hover:text-gold-500 transition-colors">{navLinks[lang].vision}</a>
              <a href="#institutions" onClick={() => setIsOpen(false)} className="py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:text-gold-600 dark:hover:text-gold-500 transition-colors">{navLinks[lang].inst}</a>
              <a href="#activities" onClick={() => setIsOpen(false)} className="py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:text-gold-600 dark:hover:text-gold-500 transition-colors">{navLinks[lang].act}</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="py-4 mt-4 bg-gold-500 text-navy-900 text-center rounded-xl font-bold">{navLinks[lang].contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function AnimatedRoles() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = HERO_ROLES[lang];
    const currentRole = roles[index % roles.length];
    const typeSpeed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, lang]);

  return (
    <div className="h-12 md:h-14 relative w-full flex items-center justify-center lg:justify-start mb-8 lg:mb-10">
      <div className={`text-lg md:text-xl lg:text-2xl font-medium text-gold-600 dark:text-gold-400 text-center lg:text-left ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-5 md:h-6 bg-gold-600 dark:bg-gold-400 ml-1 align-middle"
        />
      </div>
    </div>
  );
}

function AestheticGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  // Using portrait aspect ratio for high-quality placeholder images
  const images = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/portrait${i}/600/800`);

  return (
    <>
      <div className="w-full overflow-hidden bg-navy-950 py-12 border-y border-white/5 relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...images, ...images].map((src, idx) => (
            <div 
              key={idx} 
              className="w-48 h-72 md:w-64 md:h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-gold-500/50 transition-all shrink-0 shadow-lg"
              onClick={() => setSelectedImg(src)}
            >
              <img src={src} alt="Aesthetic Portrait" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gold-500 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-md z-[101]"
              onClick={() => setSelectedImg(null)}
              aria-label="Close modal"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg} alt="Enlarged Portrait" 
              className="max-w-full max-h-[90vh] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 object-contain" 
              onClick={e => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BiographySection() {
  const { lang } = useLanguage();

  const ACADEMICS = [
    { year: "1986", degree: "SSC", inst: "Matuail High School" },
    { year: "1988", degree: "HSC", inst: "Notre Dame College" },
    { year: "1990", degree: "BSC", inst: "Shahid Suhrawardy College" },
    { year: "1996, 1998", degree: "B.Ed & M.Ed", inst: "Dhaka University" },
    { year: "Ph.D.", degree: "Doctorate", inst: "State University of New York" }
  ];

  return (
    <section id="biography" className="py-20 lg:py-32 px-5 lg:px-8 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10 opacity-80" />
              <img
                src="https://picsum.photos/seed/chairmanbio/800/1000"
                alt="Dr. Mahbubur Rahman Mollah"
                className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Dr. M. R. Mollah</h3>
                <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-6">Founder & Chairman</p>
                {/* Digital Signature */}
                <div className="font-serif italic text-3xl text-white/80 opacity-90">
                  M. R. Mollah
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-500 uppercase mb-3">
                {lang === 'en' ? "The Life Journey" : "জীবন সংগ্রাম ও সাফল্য"}
              </h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                A Legacy of Education
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                Born in 1971 in the historic area of Matuail, Dr. Mahbubur Rahman Mollah grew up with a profound dedication to learning. Guided by the values instilled by his parents, he embarked on a lifelong journey to transform the educational landscape of Bangladesh.
              </p>
            </FadeIn>

            {/* Academic Timeline */}
            <div className="relative pl-6 border-l-2 border-gold-500/20 mb-12 space-y-8">
              {ACADEMICS.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gold-500 border-4 border-slate-50 dark:border-navy-900 shadow-sm" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-gold-600 dark:text-gold-400 font-bold text-lg min-w-[100px]">{item.year}</span>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 dark:text-white">{item.degree}</h4>
                      <p className="text-slate-500 dark:text-slate-400">{item.inst}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Message Card */}
            <FadeIn delay={0.3}>
              <div className="relative bg-gradient-to-br from-gold-500/10 to-gold-600/5 dark:from-gold-500/20 dark:to-gold-600/5 backdrop-blur-xl border border-gold-500/30 p-8 md:p-10 rounded-3xl shadow-xl">
                <Quote className="absolute top-6 left-6 w-16 h-16 text-gold-500/10 dark:text-gold-500/20 transform -scale-x-100" />
                <h4 className="text-2xl font-hind font-bold text-navy-900 dark:text-gold-400 mb-6 relative z-10">অধ্যক্ষের বাণী</h4>
                <p className="font-hind text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200 relative z-10 italic">
                  "প্রাতিষ্ঠানিক পড়াশোনার লক্ষ্য আগের মতো নেই। পড়াশোনার উদ্দেশ্য হচ্ছে শিক্ষার্থীকে কালসচেতন করে তাকে জীবনমুখী করে তোলা... আদর্শ ও উন্নত মানুষ গড়তে প্রতিষ্ঠানের নিজস্ব দৃষ্টিভঙ্গি থাকাও জরুরি। সামসুল হক খান স্কুল অ্যান্ড কলেজ নির্ধারিত পাঠ্যসূচির মধ্যে থেকেই সময়োপযোগী শিক্ষার্থী গঠনে যত্নশীল।"
                </p>
                <div className="mt-8 text-right relative z-10">
                  <span className="font-hind text-2xl font-bold text-gold-600 dark:text-gold-400">
                    - মো. মাহবুবুর রহমান মোল্লা
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransformationStory() {
  const { lang } = useLanguage();
  const [count, setCount] = useState(157);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(157, 20000, {
        duration: 3,
        onUpdate: (latest) => setCount(Math.round(latest))
      });
    }
  }, [isInView]);

  return (
    <section className="py-20 lg:py-32 px-5 lg:px-8 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-500 uppercase mb-3">
            A Visionary Leadership that redefined Education in Bangladesh.
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white">
            From Ordinary to the Best: The SHKSC Transformation Story
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Narrative Timeline */}
          <div className="relative pl-8 border-l-2 border-gold-500/30">
            {[
              { year: "১৮৮৯", title: "The Humble Beginning", desc: "টিনের ঘর আর মাত্র ১৫৭ জন শিক্ষার্থী নিয়ে শুরু হওয়া সেই স্বপ্ন..." },
              { year: "১৯৯৩-২০০৩", title: "The Turning Point", desc: "১৯৯৩ সালে সরকারি স্বীকৃতি, ১৯৯৫ সালে এমপিওভুক্তি এবং ২০০৩ সালে কলেজ শাখার উদ্বোধন।" },
              { year: "২০১২-২০১৫", title: "The Pinnacle of Success", desc: "২০১২ এবং ২০১৫ সালে ঢাকা বোর্ডের এসএসসি ফলাফলে যথাক্রমে ২য় ও ১ম স্থান অর্জন।" },
              { year: "বর্তমান", title: "The Present Glory", desc: "আজ ২০,০০০ শিক্ষার্থীর এক বিশাল পরিবার এবং আধুনিক স্থাপত্যের এক অনন্য বিদ্যাপীঠ।" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="mb-10 relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950" />
                <div className="text-gold-600 dark:text-gold-500 font-bold text-lg mb-1">{item.year}</div>
                <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 font-bengali leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          {/* Right Side: Visual Growth */}
          <div ref={ref} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl transform rotate-3" />
            <div className="bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 lg:p-12 rounded-3xl shadow-2xl relative">
              <div className="mb-12">
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">1989 - The Beginning</div>
                <div className="flex items-end gap-4">
                  <div className="text-5xl font-bold text-navy-900 dark:text-white">157</div>
                  <div className="text-xl text-slate-600 dark:text-slate-300 mb-1">Students</div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-2">
                  <Tent className="w-4 h-4" /> Tinshed Campus
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent mb-12" />

              <div>
                <div className="text-sm font-bold text-gold-600 dark:text-gold-500 mb-2 uppercase tracking-wider">2026 - The Present</div>
                <div className="flex items-end gap-4">
                  <div className="text-6xl lg:text-7xl font-bold text-gold-600 dark:text-gold-500">
                    {count.toLocaleString()}+
                  </div>
                  <div className="text-2xl text-slate-600 dark:text-slate-300 mb-2">Students</div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Modern Mega Campus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategicDialogues() {
  const [selectedDialogue, setSelectedDialogue] = useState<any | null>(null);
  const row1 = STRATEGIC_DIALOGUES.slice(0, 3);
  const row2 = STRATEGIC_DIALOGUES.slice(3, 6);

  const Row = ({ items, direction }: { items: any[], direction: "left" | "right" }) => (
    <motion.div 
      className="flex gap-6 w-max mb-6"
      animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
    >
      {[...items, ...items, ...items].map((item, idx) => (
        <div key={idx} className="w-80 bg-navy-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shrink-0 group hover:border-gold-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col">
          <div className="h-48 overflow-hidden relative shrink-0 border-b border-white/5">
            <img src={`https://picsum.photos/seed/${item.img}/600/400`} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between bg-navy-800/30">
            <h4 className="font-bengali text-lg font-bold text-white mb-5 line-clamp-2 group-hover:text-gold-400 transition-colors">{item.caption}</h4>
            <button 
              onClick={() => setSelectedDialogue(item)}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 bg-gold-500 hover:bg-gold-400 px-5 py-2.5 rounded-lg transition-colors self-start shadow-lg"
            >
              আরও দেখুন <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-20 lg:py-32 bg-navy-950 text-white overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-5 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Strategic Dialogues</h2>
        <h3 className="text-4xl lg:text-5xl font-bengali font-bold">কৌশলগত সংলাপ</h3>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
        <Row items={row1} direction="left" />
        <Row items={row2} direction="right" />
      </div>

      <AnimatePresence>
        {selectedDialogue && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedDialogue(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-navy-800 border border-white/10 rounded-3xl max-w-4xl w-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-64 md:h-auto md:w-1/2 relative shrink-0">
                <img src={`https://picsum.photos/seed/${selectedDialogue.img}/800/800`} alt={selectedDialogue.caption} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent md:hidden" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center relative md:w-1/2 bg-navy-900/50">
                <button 
                  onClick={() => setSelectedDialogue(null)} 
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-gold-500 bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-12 h-1 bg-gold-500 mb-6 rounded-full" />
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

function GlobalControls() {
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
            className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-gold-500 text-navy-900 rounded-full shadow-2xl z-40 hover:bg-gold-400 transition-colors"
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

function AwardsAndLeadershipSection() {
  const { lang } = useLanguage();

  const AWARDS_DATA = [
    { title: "Best Principal", year: "2005 & 2006", body: "Bangladesh Teacher’s Association (World Teachers' Day)", icon: Trophy },
    { title: "Best Institution & Principal", year: "2007", body: "BSB Foundation", icon: Award },
    { title: "Ekushe Medal", year: "Honorary", body: "Geipsam Association, Dhaka", icon: Medal },
    { title: "Man of the Year Award '90", year: "1990", body: "Journalist Association for Child Welfare", icon: Star },
    { title: "Special Recognition", year: "2009", body: "Dhaka-5 Parliamentary recognition by Alhaz Habibur Rahman Mollah", icon: Award }
  ];

  const LEADERSHIP_DATA = [
    { role: "General Secretary", org: "Bangladesh Principal’s Association", icon: Users },
    { role: "Secretary", org: "Higher Secondary Teacher’s Association", icon: BookOpen },
    { role: "Member", org: "Bangladesh Scout (Dhaka Area)", icon: Flag },
    { role: "Advocacy", org: "A fearless soldier for Non-Government teachers' rights, gratuity, and professional dignity.", icon: Shield, special: true }
  ];

  return (
    <section id="awards" className="py-20 lg:py-32 px-5 lg:px-8 bg-navy-950 text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">
            {lang === 'en' ? "Recognition & Accolades" : "স্বীকৃতি ও সম্মাননা"}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold">
            {lang === 'en' ? "Awards Showcase" : "পুরস্কারসমূহ"}
          </h3>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {AWARDS_DATA.map((award, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center hover:border-gold-500/50 hover:bg-navy-900/80 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-500 group flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center text-gold-500 mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-500 border border-white/5 group-hover:border-gold-500/30">
                <award.icon className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-gold-400 transition-colors">{award.title}</h4>
              <div className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-bold text-sm mb-4">
                {award.year}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{award.body}</p>
            </FadeIn>
          ))}
        </div>

        {/* Leadership Roles */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            {lang === 'en' ? "Leadership & Advocacy" : "নেতৃত্ব ও সম্পৃক্ততা"}
          </h3>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_DATA.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${item.special ? 'bg-gradient-to-br from-gold-500/20 to-navy-900 border-gold-500/50 shadow-[0_0_20px_rgba(234,179,8,0.15)]' : 'bg-navy-900/50 border-white/10 hover:border-gold-500/30 hover:bg-navy-800'}`}>
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.special ? 'bg-gold-500 text-navy-900' : 'bg-navy-800 text-gold-500'}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className={`font-bold mb-2 ${item.special ? 'text-gold-400 text-lg' : 'text-white text-base'}`}>{item.role}</h4>
              <p className={`text-sm ${item.special ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>{item.org}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MAIN APP ---
export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const toggleLang = () => setLang(prev => prev === 'en' ? 'bn' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      <div className="min-h-screen bg-slate-50 dark:bg-navy-900 font-sans selection:bg-gold-500/30 text-slate-800 dark:text-slate-200 overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <GlobalControls />

        {/* 2. Hero Section */}
        <section className="relative bg-navy-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gold-500/10 blur-[100px]" />
          </div>
          <div className="container mx-auto px-5 lg:px-8 relative z-10 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <FadeIn className="flex-1 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                  Dr. Mahbubur <br className="hidden lg:block" />
                  <span className="text-gold-500">Rahman Mollah</span>
                </h1>
                <AnimatedRoles />
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                    <Download className="w-5 h-5" /> {lang === 'en' ? "Download Profile" : "প্রোফাইল ডাউনলোড"}
                  </button>
                  <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-gold-500/50">
                    <Mail className="w-5 h-5" /> {lang === 'en' ? "Contact Me" : "যোগাযোগ করুন"}
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-gold-500/30 to-gold-500/80 shadow-[0_0_50px_rgba(234,179,8,0.5)]">
                  <div className="w-full h-full rounded-full bg-navy-800 overflow-hidden border-4 border-navy-900 relative z-10">
                    <img src="https://picsum.photos/seed/principal/800/800" alt="Dr. Mahbubur Rahman Mollah" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. Post-Hero Aesthetic Image Showcase */}
        <AestheticGallery />
        
        {/* Transformation Story */}
        <TransformationStory />

        {/* Biography Section */}
        <BiographySection />

      {/* 4. Vision & Mission */}
      <section id="vision" className="py-20 lg:py-32 px-5 lg:px-8 bg-navy-900 text-white relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl hover:border-gold-500/50 transition-colors group">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-gold-500 mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">To create a generation of enlightened, skilled, and morally grounded individuals who will lead the nation towards a prosperous and sustainable future.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl hover:border-gold-500/50 transition-colors group">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-gold-500 mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">Providing world-class education, fostering innovation, and ensuring holistic development through modern pedagogy and unwavering dedication to excellence.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Institution Network & Achievements (Standard Grid) */}
      <section id="institutions" className="py-20 lg:py-32 px-5 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">The Empire of Education</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900">Legacy Institutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INSTITUTIONS.map((inst, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-gold-500/50 hover:shadow-2xl transition-all group relative">
                <a href={inst.url} className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-5 h-5 text-gold-500" /></a>
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-50 rounded-full p-2 shadow-inner border border-slate-100">
                  <img src={`https://picsum.photos/seed/${inst.img}/100/100`} alt={inst.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-center mb-6">
                  <span className="text-gold-600 text-xs font-bold uppercase tracking-wider">{inst.role}</span>
                  <h4 className="text-xl font-serif font-bold mt-2 text-navy-900">{inst.name}</h4>
                </div>
                <ul className="space-y-3 border-t border-slate-100 pt-6">
                  {inst.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <TrendingUp className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> {ach}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Social Activities (Latest Updates) */}
      <section id="activities" className="py-20 lg:py-32 px-5 lg:px-8 relative bg-navy-950 border-t border-white/5 overflow-hidden">
        {/* Subtle background pattern & gradient */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Latest Updates</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white">Social Activities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACTIVITIES.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-500 group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/${item.img}/600/400`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                      <Calendar className="w-3 h-3 text-gold-500" />
                      <span className="text-xs font-bold text-white">{item.date}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-300 flex-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Strategic Dialogues */}
      <StrategicDialogues />

      {/* 8. National Day Greetings */}
      <section className="py-20 lg:py-32 px-5 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">National Tributes</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900">Day Greetings</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRIBUTES.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] group">
                  <img src={`https://picsum.photos/seed/${item.img}/600/800`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-gold-400 font-bold tracking-wider uppercase text-sm mb-2">{item.day}</span>
                    <h4 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h4>
                    <p className="text-slate-300 mb-6">{item.msg}</p>
                    <div className="font-serif text-gold-500 italic text-xl border-t border-white/20 pt-4">Dr. M. R. Mollah</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Insights & Columns */}
      <section className="py-20 lg:py-32 px-5 lg:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Publications</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900">Insights & Columns</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-6">
                  <Newspaper className="w-5 h-5 text-gold-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{article.tag}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">{article.title}</h4>
                <p className="text-slate-600 mb-6">{article.excerpt}</p>
                <button className="text-navy-900 font-bold flex items-center gap-2 hover:text-gold-600 transition-colors">Read Article <ArrowRight className="w-4 h-4" /></button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Awards Showcase */}
      <AwardsAndLeadershipSection />

      {/* 11. Contact Section & Dark Footer */}
      <section id="contact" className="py-20 lg:py-32 px-5 lg:px-8 bg-navy-900 text-white border-t border-white/5">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Get in Touch</h3>
            <p className="text-slate-300 text-lg mb-10">For official inquiries, appointments, or institutional matters, please reach out to the principal's office.</p>
            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Location", val: "Demra, Dhaka, Bangladesh" },
                { icon: Phone, label: "Phone", val: "+880 1234 567890" },
                { icon: Mail, label: "Email", val: "principal@shksc.edu.bd" }
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors"><c.icon className="w-6 h-6" /></div>
                  <div><p className="text-sm text-slate-400 mb-1">{c.label}</p><p className="font-medium text-lg">{c.val}</p></div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h4 className="text-2xl font-serif font-bold text-white mb-8">Send a Message</h4>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-navy-900/50 border border-white/10 text-white focus:border-gold-500 outline-none transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-navy-900/50 border border-white/10 text-white focus:border-gold-500 outline-none transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 rounded-xl bg-navy-900/50 border border-white/10 text-white focus:border-gold-500 outline-none resize-none transition-colors" />
              <button className="w-full py-4 bg-gold-500 text-navy-900 rounded-xl font-bold hover:bg-gold-400 transition-colors text-lg">Send Message</button>
            </form>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-navy-950 text-slate-400 py-8 text-center border-t border-white/5 px-5">
        <div className="container mx-auto">
          <p className="text-sm">© {new Date().getFullYear()} Dr. Mahbubur Rahman Mollah. All rights reserved. | Designed for Excellence.</p>
        </div>
      </footer>
    </div>
    </LanguageContext.Provider>
  );
}
