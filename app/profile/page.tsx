"use client";
import { Grid, Bookmark, MapPin, Link as LinkIcon, Calendar, Flame as Fire, ShieldCheck, Trophy, Settings, PlayCircle, Image as ImageIcon } from "lucide-react";

export default function ProfilePage() {
  const posts = Array(9).fill(0);
  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-[#020617] transition-all">
      <div className="h-48 md:h-64 w-full bg-gradient-to-r from-[#22D3EE] to-blue-600 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        <button className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-xl border border-white/10"><Settings size={18} /></button>
      </div>
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="relative flex flex-col md:flex-row items-end gap-6 -mt-16 mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-white dark:bg-slate-900 p-1.5 shadow-2xl relative">
            <div className="w-full h-full rounded-[2.2rem] bg-slate-200 dark:bg-white/10 flex items-center justify-center text-4xl font-black text-[#22D3EE]">ع</div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full"></div>
          </div>
          <div className="flex-1 text-right md:text-right pb-2">
            <div className="flex flex-col md:flex-row md:items-center justify-end gap-3 mb-2">
               <div className="flex items-center gap-2 justify-end">
                  <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">24 🔥 Streak</span>
                  <span className="bg-[#22D3EE]/10 text-[#22D3EE] px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 uppercase">Level 15 <ShieldCheck size={14}/></span>
               </div>
               <h1 className="text-3xl font-black dark:text-white uppercase italic">علي الجبرتي</h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-4">مطور واجهات | صانع محتوى تقني 🚀 | مؤسس منصة المدار</p>
            <div className="flex flex-wrap justify-end gap-4 text-[11px] font-black text-slate-400 uppercase tracking-tighter">
              <span className="flex items-center gap-1"><Calendar size={14}/> انضم مارس 2026</span>
              <span className="flex items-center gap-1 text-[#22D3EE]"><LinkIcon size={14}/> orbital.com</span>
              <span className="flex items-center gap-1"><MapPin size={14}/> جدة، السعودية</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[{ label: "منشور", value: "128", icon: <Grid size={16}/> }, { label: "متابع", value: "12.5k", icon: <Trophy size={16}/> }, { label: "نقطة XP", value: "1,850", icon: <Fire size={16} className="text-orange-500"/> }, { label: "ترتيب", value: "#12", icon: <ShieldCheck size={16} className="text-[#22D3EE]"/> }].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-3xl text-center shadow-sm">
              <div className="flex justify-center mb-1 text-slate-400">{stat.icon}</div>
              <div className="text-xl font-black dark:text-white">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-12 mb-8 border-t dark:border-white/10 pt-4">
          <button className="flex items-center gap-2 text-[#22D3EE] font-black text-xs uppercase"><Grid size={18}/> المنشورات</button>
          <button className="flex items-center gap-2 text-slate-400 font-black text-xs uppercase"><PlayCircle size={18}/> الفيديوهات</button>
          <button className="flex items-center gap-2 text-slate-400 font-black text-xs uppercase"><Bookmark size={18}/> المحفوظات</button>
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {posts.map((_, i) => (
            <div key={i} className="aspect-square bg-slate-200 dark:bg-white/5 rounded-xl md:rounded-[2rem] overflow-hidden relative group cursor-pointer border border-transparent hover:border-[#22D3EE]/50 transition-all">
              <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-white/5 dark:to-white/10 flex items-center justify-center text-slate-500"><ImageIcon size={40} strokeWidth={1} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}