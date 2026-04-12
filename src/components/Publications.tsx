import { Newspaper, ArrowRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/useSupabaseData';
import { FadeIn } from './FadeIn';

export function Publications() {
  const { articles } = usePortfolioData();

  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-20 lg:py-32 px-5 lg:px-8 bg-[#04060b] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">Publications</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white">Insights & Columns</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-[#C9A227]/50 hover:shadow-[0_0_30px_rgba(201,162,39,0.2)] transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="w-5 h-5 text-[#C9A227]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{article.tag}</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">{article.title}</h4>
              <p className="text-slate-300 mb-6">{article.excerpt}</p>
              <button className="text-[#C9A227] font-bold flex items-center gap-2 hover:text-[#FFD700] transition-colors">Read Article <ArrowRight className="w-4 h-4" /></button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
