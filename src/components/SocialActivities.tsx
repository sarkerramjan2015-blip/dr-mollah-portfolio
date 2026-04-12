import { Calendar } from 'lucide-react';
import { usePortfolioData } from '../hooks/useSupabaseData';
import { FadeIn } from './FadeIn';

export function SocialActivities() {
  const { activities } = usePortfolioData();

  if (!activities || activities.length === 0) return null;

  return (
    <section id="activities" className="py-20 lg:py-32 px-5 lg:px-8 relative bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C9A227]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">Latest Updates</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white">Social Activities</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A227]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(201,162,39,0.2)] transition-all duration-500 group h-full flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-[#04060b]/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                    <Calendar className="w-3 h-3 text-[#C9A227]" />
                    <span className="text-xs font-bold text-white">{item.date}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">{item.title}</h4>
                  <p className="text-slate-300 flex-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
