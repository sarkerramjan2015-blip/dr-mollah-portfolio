import { FadeIn } from './FadeIn';

const TRIBUTES = [
  { day: "21st February", title: "International Mother Language Day", msg: "We honor the martyrs who gave their lives for our mother tongue. Their sacrifice echoes in every Bengali word we speak.", img: "language" },
  { day: "26th March", title: "Independence Day", msg: "Paying homage to the brave souls who fought for our freedom. May their courage inspire our future generations.", img: "independence" },
  { day: "16th December", title: "Victory Day", msg: "Celebrating the triumph of justice and the birth of our nation. A day of immense pride and reflection.", img: "victory" }
];

export function NationalTributes() {
  return (
    <section className="py-20 lg:py-32 px-5 lg:px-8 bg-[#04060b] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#C9A227] uppercase mb-3">National Tributes</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white">Day Greetings</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRIBUTES.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] group border border-white/10">
                <img src={`https://picsum.photos/seed/${item.img}/600/800`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/60 to-transparent opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-2">{item.day}</span>
                  <h4 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-slate-300 mb-6">{item.msg}</p>
                  <div className="font-serif text-[#C9A227] italic text-xl border-t border-white/20 pt-4">Dr. M. R. Mollah</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
