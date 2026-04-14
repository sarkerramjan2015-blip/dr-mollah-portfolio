import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react'; 

// 👇 লোকাল অ্যাসেট থেকে লোগোগুলো ইমপোর্ট করা হচ্ছে
import tpLogo from '../asset/turning_point_logo.jpg';
import shkscLogo from '../asset/shksc_logo.jpg';
import mristLogo from '../asset/mrist_logo.jpg';
import dmrcLogo from '../asset/dmrc_logo.jpg';

export function InstitutionsMarquee() {
  
  // DMRC এবং DMRC Education Village আলাদা করা হয়েছে
  const institutions = [
    { name: "Turning Point International School", logo: tpLogo, grad: "from-[#FFD700] to-[#C9A227]", role: "Founder" },
    { name: "SHKSC", logo: shkscLogo, grad: "from-[#10B981] to-[#34D399]", role: "Principal" },
    { name: "MRIST", logo: mristLogo, grad: "from-[#6366F1] to-[#8B5CF6]", role: "Founder" },
    { name: "DMRC", logo: dmrcLogo, grad: "from-[#3B82F6] to-[#8B5CF6]", role: "Founder" }, // DMRC (লোগো সহ)
    { name: "DMRC Education Village", logo: null, grad: "from-[#F5E6C8] to-[#FFD700]", role: "Founder" } // DMRC Education Village (লোগো ছাড়া, আইকন বসবে)
  ];

  return (
    <section id="institutions" className="relative py-24 overflow-hidden bg-[#04060b]">
      
      {/* 🌟 Background Visual Shape */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="w-[900px] h-[400px] bg-gradient-to-r from-[#3B82F6]/20 via-[#8B5CF6]/20 to-[#C9A227]/20 blur-[130px] rounded-full animate-pulse" />
      </div>

      {/* 🌟 Center Glass Box: Fixed Box with Moving Border & Typing Text */}
      <div className="relative z-10 flex justify-center mb-10"> 
        <div className="relative p-[1.5px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(201,162,39,0.15)] group flex items-center justify-center min-w-[280px]">
          
          {/* ✨ Moving Shining Border Effect (চারপাশে ঘুরবে) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-[conic-gradient(transparent_70%,#FFD700_100%)] origin-center"
          />
          
          <div className="relative px-8 md:px-12 py-3 bg-[#04060b]/95 backdrop-blur-3xl rounded-full w-full flex items-center justify-center">
             
             {/* ✨ Typing Animation Effect */}
             <motion.div
               initial={{ clipPath: "inset(0 100% 0 0)" }}
               animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)"] }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 1] }} // টাইপ হওয়ার পর কিছুক্ষণ থেমে আবার শুরু হবে
               className="whitespace-nowrap"
             >
               <h2 className="text-sm md:text-base font-extrabold tracking-[0.4em] uppercase text-center bg-gradient-to-r from-[#FFD700] via-[#F5E6C8] to-[#C9A227] bg-clip-text text-transparent">
                 Partnering Excellence
               </h2>
             </motion.div>
             
          </div>
        </div>
      </div>

      {/* 🌟 Moving Marquee: Slower & Smoother */}
      <div className="relative border-y border-[#C9A227]/20 bg-gradient-to-r from-white/[0.01] via-white/[0.04] to-white/[0.01] py-8 backdrop-blur-xl overflow-hidden shadow-[inset_0_0_30px_rgba(255,255,255,0.02)]">
        <motion.div 
          className="flex gap-20 md:gap-32 items-center w-max will-change-transform pr-20 md:pr-32" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }} // 40 থেকে 60 করেছি, মুভিং স্লো এবং স্মুথ হবে
        >
          {[...institutions, ...institutions].map((inst, idx) => (
            <div key={idx} className="flex items-center gap-6 group cursor-pointer">
              
              {/* লোগো সেকশন */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-[#04060b] border border-white/10 overflow-hidden group-hover:border-[#C9A227]/50 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]">
                {inst.logo ? (
                  <img 
                    src={inst.logo} 
                    alt={inst.name} 
                    // object-contain এবং p-1 অ্যাড করা হয়েছে যাতে লোগো কাটা না পড়ে
                    className="w-full h-full object-contain p-1.5 transition-all duration-700 scale-100 group-hover:scale-110" 
                  />
                ) : (
                  <div className="flex flex-col items-center text-[#C9A227] group-hover:text-white transition-colors">
                    <GraduationCap size={40} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* প্রতিষ্ঠানের নাম ও পদবি */}
              <div className="flex flex-col justify-center">
                <span className={`text-2xl md:text-4xl font-serif font-black bg-gradient-to-r ${inst.grad} bg-clip-text text-transparent opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 uppercase tracking-tighter italic origin-left`}>
                  {inst.name}
                </span>
                
                {/* 🌟 Shape for Founder / Principal */}
                <div className="mt-1 flex">
                  <span className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 rounded-full text-white/50 group-hover:text-white group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10 transition-all duration-500">
                    {inst.role}
                  </span>
                </div>

                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A227] to-transparent transition-all duration-700 mt-2 rounded-full" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* নিচে হালকা একটা শাইনিং বর্ডার ইফেক্ট */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
    </section>
  );
}