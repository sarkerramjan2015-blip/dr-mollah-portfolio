import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function Biography() {
  const { lang } = useLanguage();

  const ACADEMICS = [
    { year: "1986", degree: "SSC", inst: "Matuail High School" },
    { year: "1988", degree: "HSC", inst: "Notre Dame College" },
    { year: "1990", degree: "BSC", inst: "Shahid Suhrawardy College" },
    { year: "1996, 1998", degree: "B.Ed & M.Ed", inst: "Dhaka University" },
    { year: "Ph.D.", degree: "Doctorate", inst: "State University of New York" }
  ];

  return (
    <section id="vision" className="py-20 lg:py-32 px-5 lg:px-8 bg-white/[0.02] border-t border-white/5 overflow-hidden">
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
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent z-10 opacity-80" />
              <img
                src="https://picsum.photos/seed/chairmanbio/800/1000"
                alt="Dr. Mahbubur Rahman Mollah"
                className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Dr. M. R. Mollah</h3>
                <p className="text-[#C9A227] font-medium tracking-widest uppercase text-sm mb-6">Founder & Chairman</p>
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
              <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">
                {lang === 'en' ? "The Life Journey" : "জীবন সংগ্রাম ও সাফল্য"}
              </h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                A Legacy of Education
              </h3>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Born in 1971 in the historic area of Matuail, Dr. Mahbubur Rahman Mollah grew up with a profound dedication to learning. Guided by the values instilled by his parents, he embarked on a lifelong journey to transform the educational landscape of Bangladesh.
              </p>
            </FadeIn>

            {/* Academic Timeline */}
            <div className="relative pl-6 border-l-2 border-[#C9A227]/20 mb-12 space-y-8">
              {ACADEMICS.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#C9A227] border-4 border-[#04060b] shadow-sm" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-[#C9A227] font-bold text-lg min-w-[100px]">{item.year}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                      <p className="text-slate-400">{item.inst}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Message Card */}
            <FadeIn delay={0.3}>
              <div className="relative bg-gradient-to-br from-[#C9A227]/20 to-[#C9A227]/5 backdrop-blur-xl border border-[#C9A227]/30 p-8 md:p-10 rounded-3xl shadow-xl">
                <Quote className="absolute top-6 left-6 w-16 h-16 text-[#C9A227]/20 transform -scale-x-100" />
                <h4 className="text-2xl font-hind font-bold text-[#C9A227] mb-6 relative z-10">অধ্যক্ষের বাণী</h4>
                <p className="font-hind text-lg md:text-xl leading-relaxed text-slate-200 relative z-10 italic">
                  "প্রাতিষ্ঠানিক পড়াশোনার লক্ষ্য আগের মতো নেই। পড়াশোনার উদ্দেশ্য হচ্ছে শিক্ষার্থীকে কালসচেতন করে তাকে জীবনমুখী করে তোলা... আদর্শ ও উন্নত মানুষ গড়তে প্রতিষ্ঠানের নিজস্ব দৃষ্টিভঙ্গি থাকাও জরুরি। সামসুল হক খান স্কুল অ্যান্ড কলেজ নির্ধারিত পাঠ্যসূচির মধ্যে থেকেই সময়োপযোগী শিক্ষার্থী গঠনে যত্নশীল।"
                </p>
                <div className="mt-8 text-right relative z-10">
                  <span className="font-hind text-2xl font-bold text-[#C9A227]">
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
