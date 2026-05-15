"use client";
import { Heart, MessageCircle, Share2, Music, Plus, Bookmark, Play, Flame as Fire } from "lucide-react";

export default function ShortsPage() {
  return (
    <div className="h-screen bg-black flex justify-center overflow-hidden">
      <div className="relative w-full max-w-[450px] h-full bg-slate-900 border-x border-white/10 overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
           <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159" className="w-full h-full object-cover opacity-60" alt="Video" />
           <Play className="text-white/50 opacity-0 group-hover:opacity-100 transition-all" size={60} />
        </div>
        <div className="absolute top-8 left-0 right-0 flex justify-center gap-6 z-20">
          <button className="text-white/60 font-black text-sm uppercase">متابعة</button>
          <div className="w-[2px] h-4 bg-white/20 self-center"></div>
          <button className="text-white font-black text-sm uppercase border-b-2 border-[#22D3EE] pb-1">لك (For You)</button>
        </div>
        <aside className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-20">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-2 border-white bg-[#22D3EE] flex items-center justify-center font-black text-black text-xl">ع</div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#22D3EE] rounded-full p-0.5 text-black"><Plus size={14} strokeWidth={3} /></div>
          </div>
          <div className="flex flex-col items-center"><button className="text-white hover:text-red-500 transition-all"><Heart size={32} fill="currentColor" /></button><span className="text-white text-[10px] font-black mt-1">12.5k</span></div>
          <div className="flex flex-col items-center"><button className="text-white hover:text-[#22D3EE] transition-all"><MessageCircle size={32} fill="currentColor" /></button><span className="text-white text-[10px] font-black mt-1">458</span></div>
          <div className="flex flex-col items-center"><button className="text-white hover:text-yellow-500 transition-all"><Bookmark size={32} fill="currentColor" /></button><span className="text-white text-[10px] font-black mt-1">1.2k</span></div>
          <button className="text-white hover:scale-110 transition-all"><Share2 size={32} fill="currentColor" /></button>
          <div className="w-10 h-10 rounded-full bg-slate-800 border-4 border-white/20 animate-spin flex items-center justify-center mt-4"><Music size={16} className="text-white" /></div>
        </aside>
        <footer className="absolute bottom-0 left-0 right-0 p-6 pt-20 bg-gradient-to-t from-black/80 to-transparent text-right z-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-black text-lg flex items-center justify-end gap-2">@ali_aljabarti <Fire size={18} className="text-orange-500" /></h3>
            <p className="text-white/90 text-sm font-bold leading-relaxed">كيف تبني نظام الـ Feed في ٦٠ ثانية؟ #برمجة #Orbital #NextJS 💻🚀</p>
            <div className="flex items-center justify-end gap-2 text-white/70 text-xs font-bold"><span>Original Sound - Ali Aljabarti</span><Music size={14} /></div>
          </div>
        </footer>
      </div>
    </div>
  );
}