import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

// 👇 লোকাল ফোল্ডার থেকে আপনার ছবিগুলো ইমপোর্ট করা হলো
import img1 from '../asset/Aesthetic_Gallery/dr_south.jpg';
import img2 from '../asset/Aesthetic_Gallery/milon_sir.jpg';
import img3 from '../asset/Aesthetic_Gallery/prime_minister.jpg';
import img4 from '../asset/Aesthetic_Gallery/prize.jpg';
import img5 from '../asset/Aesthetic_Gallery/result_day.jpg';
import img6 from '../asset/Aesthetic_Gallery/selim_sir.jpg';
import img7 from '../asset/Aesthetic_Gallery/selimsir_2.jpg';
import img8 from '../asset/Aesthetic_Gallery/sir.jpg';
import img9 from '../asset/Aesthetic_Gallery/sir_wife.jpg';
import img10 from '../asset/Aesthetic_Gallery/south_koria.jpg';
import img11 from '../asset/Aesthetic_Gallery/spotrs_club.jpg';
import img12 from '../asset/Aesthetic_Gallery/turming_point.jpg';
import img13 from '../asset/Aesthetic_Gallery/wife.jpg';

export function AestheticGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // সব ছবির একটি অ্যারে তৈরি করা হলো
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  return (
    <section id="gallery" className="relative py-28 px-4 md:px-8 overflow-hidden bg-[#04060b]">
      
      {/* 🌟 Background Visual Glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-[#C9A227]/10 via-[#6366F1]/10 to-[#C9A227]/10 blur-[150px] rounded-full" />
      </div>

      {/* 🌟 Title Box with Moving Shining Border & Typing Effect */}
      <div className="container mx-auto max-w-7xl flex justify-center mb-20 relative z-10">
        
        {/* Animated Border Wrapper */}
        <div className="relative p-[2px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(201,162,39,0.15)] group flex items-center justify-center min-w-[300px] md:min-w-[500px]">
          
          {/* ✨ Moving Shining Effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(transparent_70%,#C9A227_100%)] origin-center"
          />
          
          {/* Inner Content Box */}
          <div className="relative w-full px-8 py-8 md:px-16 md:py-10 bg-[#04060b]/95 backdrop-blur-3xl rounded-3xl text-center">
             
             <h2 className="text-[#C9A227] font-black tracking-[0.5em] text-xs md:text-sm uppercase mb-4 drop-shadow-md">
               Aesthetic Gallery
             </h2>
             
             {/* ✨ Typing Animation Effect */}
             <motion.div
               initial={{ clipPath: "inset(0 100% 0 0)" }}
               animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)"] }}
               transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 1] }} // টাইপিং স্টাইল লুপ
               className="inline-block whitespace-nowrap"
             >
               <h3 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-white via-[#F5E6C8] to-[#C9A227] bg-clip-text text-transparent pb-2">
                 Moments of Leadership
               </h3>
             </motion.div>

          </div>
        </div>
      </div>

      {/* 🌟 Moving Gallery Marquee */}
      <div className="relative z-10 overflow-hidden py-4 -mx-4 md:-mx-8">
        <motion.div 
          className="flex gap-10 md:gap-14 w-max pr-10 md:pr-14 will-change-transform" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 120 }} // মুভিং অনেক স্লো এবং স্মুথ করা হয়েছে
        >
          {[...images, ...images].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImg(img)}
              // 🖼️ Aesthetic Frame Design - Width ব্যালেন্স করা হয়েছে (md:w-[480px])
              className="w-[320px] h-[380px] md:w-[480px] md:h-[480px] p-3 md:p-4 rounded-[2rem] bg-[#111] border border-[#C9A227]/30 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] transition-all duration-500 relative group flex-shrink-0"
            >
              {/* Inner Photo Wrapper */}
              <div className="w-full h-full rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden border border-white/10 relative bg-black">
                <img 
                  src={img} 
                  alt={`Gallery ${i}`}
                  // অবজেক্ট কভার রাখা হয়েছে, তবে উইডথ বেশি থাকায় এখন আর কাটা পড়বে না
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🌟 Fullscreen Lightbox Modal (Zoom Out/In) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10" 
            onClick={() => setSelectedImg(null)}
          >
            {/* ❌ Cross (Close) Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 bg-white/5 p-4 rounded-full border border-white/10 hover:bg-[#C9A227] hover:text-black hover:border-transparent transition-all z-50 shadow-xl" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <X size={28} />
            </button>
            
            {/* 📸 Zoom Effect on Image */}
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }} // বন্ধ করার সময় ছোট হয়ে ভ্যানিশ হবে
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-2xl md:rounded-[2rem] shadow-[0_0_80px_rgba(201,162,39,0.4)] border border-white/10 object-contain" 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}