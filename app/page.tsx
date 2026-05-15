"use client";
import { useState } from "react";
import { 
  MessageSquare, PlayCircle, User, Ghost, Search, Trophy, ShoppingBag, 
  Moon, Sun, Languages, Flame, Hash, Image as ImageIcon, Play, Share2, Heart, MessageCircle 
} from "lucide-react";

export default function OrbitalApp() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isDark, setIsDark] = useState(true);

  const t = {
    ar: {
      dir: "rtl" as const,
      explore: "الاستكشاف",
      ranks: "الرتب",
      store: "المتجر",
      trends: "الترندات",
      name: "علي الجبرتي",
      streak: "تفاعل",
      postBtn: "نشر",
      langBtn: "English",
      placeholder: "بماذا تفكر يا علي؟",
      desc: "تجربة واجهة الفيديو الجديدة في أوربيتال! ما رأيكم؟ ✨🚀"
    },
    en: {
      dir: "ltr" as const,
      explore: "Explore",
      ranks: "Ranks",
      store: "Store",
      trends: "Trends",
      name: "Ali Aljabarti",
      streak: "STREAK",
      postBtn: "Post",
      langBtn: "العربية",
      placeholder: "What's on your mind, Ali?",
      desc: "Testing the new video UI on Orbital! What do you think? ✨🚀"
    }
  }[lang];

  return (
    <div className={`min-h-screen transition-all duration-300 font-sans ${isDark ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`} dir={t.dir}>
      
      {/* 1. Navbar: هيكل ثابت ومنظم يمنع التداخل */}
      <nav className={`fixed top-0 w-full h-16 border-b z-50 px-6 flex items-center justify-between backdrop-blur-xl ${isDark ? 'bg-[#020617]/80 border-white/5' : 'bg-white/80 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-[#22D3EE] font-black text-xl italic tracking-tighter">
            <div className="w-9 h-9 rounded-xl bg-[#22D3EE] flex items-center justify-center text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Ghost size={20} />
            </div>
            ORBITAL
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase font-bold opacity-60">
            <button className="hover:text-[#22D3EE] flex items-center gap-1 transition-all"><Search size={14}/> {t.explore}</button>
            <button className="hover:text-[#22D3EE] flex items-center gap-1 transition-all"><Trophy size={14}/> {t.ranks}</button>
            <button className="hover:text-[#22D3EE] flex items-center gap-1 transition-all"><ShoppingBag size={14}/> {t.store}</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[10px] font-black transition-all ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-100'}`}>
            <Languages size={14} /> {t.langBtn}
          </button>
          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-xl transition-all ${isDark ? 'hover:bg-white/5 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#22D3EE] to-blue-500 p-0.5 shadow-lg shadow-blue-500/20">
            <div className={`w-full h-full rounded-full flex items-center justify-center text-[10px] font-black ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
              {lang === 'ar' ? 'ع' : 'AJ'}
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Main Content Grid */}
      <div className="pt-24 pb-12 flex justify-center gap-8 px-6 max-w-[1400px] mx-auto">
        
        {/* Sidebar الأيقونات */}
        <aside className={`hidden xl:flex flex-col gap-5 w-16 sticky top-24 h-fit items-center py-8 border rounded-[2.5rem] ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="w-10 h-10 rounded-xl bg-[#22D3EE] flex items-center justify-center text-black"><Ghost size={20}/></div>
          <div className={`w-6 h-[1px] my-2 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></div>
          <MessageSquare size={20} className="opacity-40 hover:opacity-100 cursor-pointer transition-all hover:text-[#22D3EE]"/>
          <PlayCircle size={20} className="opacity-40 hover:opacity-100 cursor-pointer transition-all hover:text-[#22D3EE]"/>
          <User size={20} className="opacity-40 hover:opacity-100 cursor-pointer transition-all hover:text-[#22D3EE] mt-20"/>
        </aside>

        {/* Feed الرئيسي */}
        <main className="flex-1 max-w-[600px]">
          {/* Create Post */}
          <div className={`p-6 rounded-[2.5rem] border mb-8 ${isDark ? 'bg-white/5 border-white/10 shadow-xl' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] font-black border border-[#22D3EE]/10">ع</div>
              <textarea placeholder={t.placeholder} className="flex-1 bg-transparent border-none outline-none resize-none pt-3 text-sm placeholder:opacity-30" rows={2} />
            </div>
            <div className={`flex justify-between items-center pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div className="flex gap-4 opacity-40">
                <button className="hover:text-[#22D3EE]"><ImageIcon size={20}/></button>
                <button className="hover:text-[#22D3EE]"><Play size={20}/></button>
              </div>
              <button className="bg-[#22D3EE] text-black px-8 py-2.5 rounded-2xl font-black text-xs hover:scale-105 transition-all shadow-lg shadow-[#22D3EE]/20">
                {t.postBtn}
              </button>
            </div>
          </div>

          {/* Post Card */}
          <div className={`rounded-[3rem] border overflow-hidden ${isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-md'}`}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#22D3EE] flex items-center justify-center text-black font-black"> ع </div>
                  <div>
                    <h4 className="font-black text-sm tracking-tight">{t.name}</h4>
                    <p className="text-[10px] opacity-40 uppercase font-bold tracking-widest mt-0.5">2 hours ago</p>
                  </div>
                </div>
                <div className="bg-orange-500/10 text-orange-500 px-4 py-1.5 rounded-full text-[10px] font-black border border-orange-500/20 flex items-center gap-2">
                   <Flame size={14}/> 24 {t.streak}
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-70">{t.desc}</p>
              <div className={`aspect-video rounded-[2rem] overflow-hidden relative group border ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000" alt="post"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#22D3EE] flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-all"><Play size={28} fill="currentColor"/></div>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-6 border-t border-current opacity-5">
                <button className="flex items-center gap-2 hover:text-red-500 transition-all"><Heart size={20}/></button>
                <button className="flex items-center gap-2 hover:text-[#22D3EE] transition-all"><MessageCircle size={20}/></button>
                <button className={`${lang === 'ar' ? 'mr-auto' : 'ml-auto'} hover:text-[#22D3EE]`}><Share2 size={20}/></button>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Trends) */}
        <aside className="hidden lg:flex flex-col gap-6 w-72">
          <div className={`p-8 border rounded-[2.5rem] ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
            <h3 className="font-black text-sm mb-6 text-[#22D3EE] flex items-center gap-2 uppercase tracking-tighter">{t.trends} <Hash size={18}/></h3>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="cursor-pointer group">
                  <p className="text-[9px] opacity-30 font-bold uppercase mb-1">Tech · Trending</p>
                  <h4 className="font-bold text-xs group-hover:text-[#22D3EE] transition-all tracking-tight">#Orbital_Beta_Test_2026</h4>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}