import { useState, useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';
import { Tent, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function TransformationStory() {
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
    <section className="py-20 lg:py-32 px-5 lg:px-8 bg-[#04060b] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">
            A Visionary Leadership that redefined Education in Bangladesh.
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white">
            From Ordinary to the Best: The SHKSC Transformation Story
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Narrative Timeline */}
          <div className="relative pl-8 border-l-2 border-[#C9A227]/30">
            {[
              { year: "১৮৮৯", title: "The Humble Beginning", desc: "টিনের ঘর আর মাত্র ১৫৭ জন শিক্ষার্থী নিয়ে শুরু হওয়া সেই স্বপ্ন..." },
              { year: "১৯৯৩-২০০৩", title: "The Turning Point", desc: "১৯৯৩ সালে সরকারি স্বীকৃতি, ১৯৯৫ সালে এমপিওভুক্তি এবং ২০০৩ সালে কলেজ শাখার উদ্বোধন।" },
              { year: "২০১২-২০১৫", title: "The Pinnacle of Success", desc: "২০১২ এবং ২০১৫ সালে ঢাকা বোর্ডের এসএসসি ফলাফলে যথাক্রমে ২য় ও ১ম স্থান অর্জন।" },
              { year: "বর্তমান", title: "The Present Glory", desc: "আজ ২০,০০০ শিক্ষার্থীর এক বিশাল পরিবার এবং আধুনিক স্থাপত্যের এক অনন্য বিদ্যাপীঠ।" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="mb-10 relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#C9A227] border-4 border-[#04060b]" />
                <div className="text-[#C9A227] font-bold text-lg mb-1">{item.year}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-300 font-bengali leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          {/* Right Side: Visual Growth */}
          <div ref={ref} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A227]/10 to-transparent rounded-3xl transform rotate-3" />
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl shadow-2xl relative">
              <div className="mb-12">
                <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">1989 - The Beginning</div>
                <div className="flex items-end gap-4">
                  <div className="text-5xl font-bold text-white">157</div>
                  <div className="text-xl text-slate-300 mb-1">Students</div>
                </div>
                <div className="text-sm text-slate-400 mt-2 flex items-center gap-2">
                  <Tent className="w-4 h-4" /> Tinshed Campus
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

              <div>
                <div className="text-sm font-bold text-[#C9A227] mb-2 uppercase tracking-wider">2026 - The Present</div>
                <div className="flex items-end gap-4">
                  <div className="text-6xl lg:text-7xl font-bold text-[#C9A227]">
                    {count.toLocaleString()}+
                  </div>
                  <div className="text-2xl text-slate-300 mb-2">Students</div>
                </div>
                <div className="text-sm text-slate-400 mt-2 flex items-center gap-2">
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
