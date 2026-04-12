import { motion } from 'motion/react';
import { Lightbulb, Target } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function VisionMission() {
  return (
    <section id="vision-mission" className="py-20 lg:py-32 px-5 lg:px-8 bg-[#04060b] text-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl hover:border-[#C9A227]/50 transition-colors group">
            <div className="w-16 h-16 bg-[#04060b] rounded-full flex items-center justify-center text-[#C9A227] mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(201,162,39,0.2)]">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">To create a generation of enlightened, skilled, and morally grounded individuals who will lead the nation towards a prosperous and sustainable future.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl hover:border-[#C9A227]/50 transition-colors group">
            <div className="w-16 h-16 bg-[#04060b] rounded-full flex items-center justify-center text-[#C9A227] mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(201,162,39,0.2)]">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
            <p className="text-slate-300 text-lg leading-relaxed">Providing world-class education, fostering innovation, and ensuring holistic development through modern pedagogy and unwavering dedication to excellence.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
