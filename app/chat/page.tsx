"use client";
import { 
  Hash, Plus, Search, Phone, Video, Info, 
  Image as ImageIcon, StickyNote, Smile, Send,
  Mic, Circle, Shield
} from "lucide-react";

export default function ChatPage() {
  const channels = [
    { id: 1, name: "المطورين", type: "public", active: true },
    { id: 2, name: "الأفكار-والاقتراحات", type: "public", active: false },
    { id: 3, name: "غرفة-التصميم", type: "private", active: false },
  ];

  const friends = [
    { name: "سارة مبرمجة", status: "online", lastSeen: "نشط الآن" },
    { name: "أحمد مهندس", status: "idle", lastSeen: "منذ ٥ دقائق" },
    { name: "نورة مصممة", status: "offline", lastSeen: "أمس" },
  ];

  return (
    <div className="h-screen pt-16 bg-white dark:bg-[#020617] flex overflow-hidden transition-all">
      
      {/* 1. قائمة القنوات (Discord Style Sidebar) */}
      <aside className="hidden md:flex w-72 flex-col bg-slate-50 dark:bg-white/5 border-l border-slate-200 dark:border-white/10">
        <div className="p-6 border-b border-slate-200 dark:border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="البحث عن محادثة..." 
              className="w-full bg-slate-200 dark:bg-white/10 border-none rounded-xl py-2 pl-4 pr-10 text-xs font-bold outline-none dark:text-white"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          {/* قسم القنوات */}
          <div>
            <div className="flex justify-between items-center mb-4 px-2">
              <Plus size={16} className="text-slate-400 cursor-pointer hover:text-[#22D3EE]" />
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">القنوات العامة</h3>
            </div>
            <div className="space-y-1">
              {channels.map(ch => (
                <div key={ch.id} className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-all ${ch.active ? 'bg-[#22D3EE]/10 text-[#22D3EE]' : 'hover:bg-slate-200 dark:hover:bg-white/5 text-slate-500'}`}>
                   <Hash size={18} />
                   <span className="text-sm font-bold">{ch.name}</span>
                   {ch.type === "private" && <Shield size={12} className="mr-auto" />}
                </div>
              ))}
            </div>
          </div>

          {/* قسم الرسائل الخاصة (Snapchat Style) */}
          <div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2 text-right">الرسائل الخاصة</h3>
            <div className="space-y-3">
              {friends.map((f, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-white/5 cursor-pointer group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-white/10 flex items-center justify-center font-black">
                      {f.name[0]}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white dark:border-[#020617] rounded-full ${f.status === 'online' ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                  </div>
                  <div className="text-right">
                    <h4 className="text-sm font-black dark:text-white">{f.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold">{f.lastSeen}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* 2. منطقة المحادثة (Main Chat Area) */}
      <main className="flex-1 flex flex-col">
        {/* شريط رأس المحادثة */}
        <header className="h-16 px-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-white/50 dark:bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-[#22D3EE]"><Info size={20}/></button>
            <div className="flex gap-4">
               <button className="text-slate-400 hover:text-[#22D3EE]"><Phone size={20}/></button>
               <button className="text-slate-400 hover:text-[#22D3EE]"><Video size={20}/></button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h3 className="text-sm font-black dark:text-white flex items-center gap-2 justify-end">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> المطورين
              </h3>
              <p className="text-[10px] text-slate-400 font-bold">١٢ عضو متصل</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]">
              <Hash size={20} />
            </div>
          </div>
        </header>

        {/* الرسائل (Message List) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* رسالة شخص آخر */}
          <div className="flex gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-white/10 flex-shrink-0"></div>
            <div className="space-y-1">
              <h5 className="text-[10px] font-black text-slate-400 mr-2 uppercase">سارة مبرمجة <span className="text-[8px]">10:30 AM</span></h5>
              <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none text-right shadow-sm">
                <p className="text-sm leading-relaxed dark:text-slate-300">علي، هل رأيت التحديث الأخير لـ Next.js؟ مذهل!</p>
              </div>
            </div>
          </div>

          {/* رسالتك أنت */}
          <div className="flex gap-4 max-w-2xl mr-auto flex-row-reverse">
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE] flex-shrink-0"></div>
            <div className="space-y-1 text-right">
              <h5 className="text-[10px] font-black text-[#22D3EE] ml-2 uppercase">أنت <span className="text-[8px] text-slate-400">10:32 AM</span></h5>
              <div className="bg-[#22D3EE] p-4 rounded-2xl rounded-tr-none text-right shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <p className="text-sm leading-relaxed text-black font-bold">نعم! سأقوم بتجربته في مشروع Orbital اليوم 🚀</p>
              </div>
            </div>
          </div>
        </div>

        {/* مدخل الرسالة (Input Area - Snapchat Mix) */}
        <footer className="p-6">
          <div className="max-w-4xl mx-auto bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] p-2 flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-[#22D3EE] text-black flex items-center justify-center hover:scale-105 transition-all shadow-lg">
              <Send size={18} />
            </button>
            <input 
              type="text" 
              placeholder="أكتب رسالتك هنا..." 
              className="flex-1 bg-transparent border-none outline-none px-4 text-sm font-bold dark:text-white text-right"
            />
            <div className="flex gap-1 px-2">
              <button className="p-2 text-slate-400 hover:text-[#22D3EE]"><Mic size={20}/></button>
              <button className="p-2 text-slate-400 hover:text-[#22D3EE]"><ImageIcon size={20}/></button>
              <button className="p-2 text-slate-400 hover:text-[#22D3EE]"><Smile size={20}/></button>
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}