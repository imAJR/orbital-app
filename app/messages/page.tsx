"use client";
import { Hash, Plus, Search, Phone, Video, Info, Image as ImageIcon, Smile, Send, Mic, Shield } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="h-screen pt-16 bg-white dark:bg-[#020617] flex overflow-hidden">
      <aside className="hidden md:flex w-72 flex-col bg-slate-50 dark:bg-white/5 border-l border-slate-200 dark:border-white/10">
        <div className="p-6 border-b dark:border-white/10"><div className="relative"><Search className="absolute left-3 top-2.5 text-slate-400" size={16} /><input type="text" placeholder="البحث..." className="w-full bg-slate-200 dark:bg-white/10 rounded-xl py-2 pl-4 pr-10 text-xs font-bold outline-none dark:text-white" /></div></div>
        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          <div><div className="flex justify-between items-center mb-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><span>القنوات العامة</span><Plus size={16} /></div><div className="space-y-1"><div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#22D3EE]/10 text-[#22D3EE] font-bold text-sm"><Hash size={18} />المطورين</div></div></div>
          <div><h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2 text-right">الرسائل الخاصة</h3><div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 cursor-pointer group"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black">س</div><div className="text-right"><h4 className="text-sm font-black dark:text-white">سارة مبرمجة</h4><p className="text-[10px] text-green-500 font-bold">نشط الآن</p></div></div></div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="h-16 px-6 border-b dark:border-white/10 flex items-center justify-between bg-black/20 backdrop-blur-md">
          <div className="flex gap-4 text-slate-400"><Info size={20}/><Phone size={20}/><Video size={20}/></div>
          <div className="flex items-center gap-3 text-right"><div><h3 className="text-sm font-black dark:text-white"># المطورين</h3><p className="text-[10px] text-slate-400 font-bold">١٢ عضو متصل</p></div><div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]"><Hash size={20} /></div></div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex gap-4 max-w-2xl"><div className="w-10 h-10 rounded-xl bg-white/10 flex-shrink-0"></div><div className="bg-white/5 p-4 rounded-2xl rounded-tl-none text-right shadow-sm text-sm dark:text-slate-300">علي، هل رأيت التحديث الأخير لـ Next.js؟ مذهل!</div></div>
          <div className="flex gap-4 max-w-2xl mr-auto flex-row-reverse"><div className="w-10 h-10 rounded-xl bg-[#22D3EE] flex-shrink-0"></div><div className="bg-[#22D3EE] p-4 rounded-2xl rounded-tr-none text-right shadow-lg text-sm text-black font-bold">نعم! سأقوم بتجربته في مشروع Orbital اليوم 🚀</div></div>
        </div>
        <footer className="p-6"><div className="max-w-4xl mx-auto bg-white/5 border dark:border-white/10 rounded-[2rem] p-2 flex items-center gap-2"><button className="w-10 h-10 rounded-full bg-[#22D3EE] text-black flex items-center justify-center"><Send size={18} /></button><input type="text" placeholder="أكتب رسالتك..." className="flex-1 bg-transparent border-none outline-none px-4 text-sm font-bold dark:text-white text-right"/><div className="flex gap-1"><Mic size={20} className="text-slate-400"/><ImageIcon size={20} className="text-slate-400"/><Smile size={20} className="text-slate-400"/></div></div></footer>
      </main>
    </div>
  );
}