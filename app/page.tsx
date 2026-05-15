"use client";
import { useState } from "react";
import Image from "next/image";
import {
  MessageSquare, PlayCircle, User, Ghost, Search, Trophy, ShoppingBag,
  Moon, Sun, Languages, Flame, Hash, Image as ImageIcon, Play, Share2, Heart, MessageCircle, Sparkles, Zap
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

const translations = {
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
    desc: "تجربة واجهة الفيديو الجديدة في أوربيتال! ما رأيكم؟ ✨🚀",
    timeAgo: "منذ ساعتين",
    trendingCategory: "تقنية",
    trendingLabel: "ترند",
    addImage: "إضافة صورة",
    addVideo: "إضافة فيديو",
    like: "إعجاب",
    comment: "تعليق",
    share: "مشاركة",
    welcome: "مرحباً بك في Orbital",
    subtitle: "منصة التواصل الاجتماعي الحديثة",
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
    desc: "Testing the new video UI on Orbital! What do you think? ✨🚀",
    timeAgo: "2 hours ago",
    trendingCategory: "Tech",
    trendingLabel: "Trending",
    addImage: "Add image",
    addVideo: "Add video",
    like: "Like",
    comment: "Comment",
    share: "Share",
    welcome: "Welcome to Orbital",
    subtitle: "The Modern Social Platform",
  }
};

function Navbar({ t, lang, setLang, isDark, setIsDark }) {
  return (
    <nav className="fixed top-0 w-full h-16 border-b border-border-light dark:border-border-dark z-50 px-6 flex items-center justify-between backdrop-blur-xl bg-background-light/80 dark:bg-background-dark/80 transition-all duration-300">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-primary font-black text-xl italic tracking-tighter">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-background-dark shadow-orbital-cyan">
            <Ghost size={20} />
          </div>
          ORBITAL
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs uppercase font-bold text-muted-foreground">
          <button className="hover:text-primary flex items-center gap-1 transition-all duration-300" aria-label={t.explore}><Search size={14}/> {t.explore}</button>
          <button className="hover:text-primary flex items-center gap-1 transition-all duration-300" aria-label={t.ranks}><Trophy size={14}/> {t.ranks}</button>
          <button className="hover:text-primary flex items-center gap-1 transition-all duration-300" aria-label={t.store}><ShoppingBag size={14}/> {t.store}</button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-light dark:border-border-dark text-xs font-black transition-all duration-300 hover:bg-muted-light dark:hover:bg-muted-dark" aria-label="Toggle language">
          <Languages size={14} /> {t.langBtn}
        </button>
        <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg transition-all duration-300 ${isDark ? 'hover:bg-muted-dark text-yellow-400' : 'hover:bg-muted-light'}`} aria-label="Toggle dark mode">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-orbital-blue">
          <div className={`w-full h-full rounded-full flex items-center justify-center text-xs font-black ${isDark ? 'bg-background-dark' : 'bg-background-light'}`}>
            {lang === 'ar' ? 'ع' : 'AJ'}
          </div>
        </div>
      </div>
    </nav>
  );
}

function CreatePost({ t, isDark }) {
  return (
    <div className="p-6 rounded-2xl border border-border-light dark:border-border-dark mb-8 bg-card-light dark:bg-card-dark shadow-soft-md hover:shadow-soft-lg transition-all duration-300">
      <div className="flex gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-black border border-primary/10">ع</div>
        <textarea placeholder={t.placeholder} className="flex-1 bg-transparent border-none outline-none resize-none pt-3 text-sm placeholder:text-muted-foreground" rows={2} />
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-border-light dark:border-border-dark">
        <div className="flex gap-4 text-muted-foreground hover:text-primary transition-all duration-300">
          <button className="hover:text-primary transition-all duration-300" aria-label={t.addImage}><ImageIcon size={20}/></button>
          <button className="hover:text-primary transition-all duration-300" aria-label={t.addVideo}><Play size={20}/></button>
        </div>
        <button className="bg-primary text-background-dark px-8 py-2.5 rounded-xl font-black text-xs hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-orbital-cyan">
          {t.postBtn}
        </button>
      </div>
    </div>
  );
}

function PostCard({ t, isDark, lang }) {
  return (
    <div className="rounded-2xl border border-border-light dark:border-border-dark overflow-hidden bg-card-light dark:bg-card-dark shadow-soft-md hover:shadow-soft-lg transition-all duration-300">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-background-dark font-black shadow-orbital-cyan"> ع </div>
            <div>
              <h4 className="font-black text-sm tracking-tight">{t.name}</h4>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-0.5">{t.timeAgo}</p>
            </div>
          </div>
          <div className="bg-orange-500/10 text-orange-500 px-4 py-1.5 rounded-full text-xs font-black border border-orange-500/20 flex items-center gap-2 shadow-soft-sm">
             <Flame size={14}/> 24 {t.streak}
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-6 text-muted-foreground">{t.desc}</p>
        <div className="aspect-video rounded-xl overflow-hidden relative group border border-border-light dark:border-border-dark shadow-soft-md">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" alt="post"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-orbital-cyan group-hover:scale-110 transition-all duration-300"><Play size={28} fill="currentColor"/></div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-8 pt-6 border-t border-border-light dark:border-border-dark text-muted-foreground">
          <button className="flex items-center gap-2 hover:text-red-500 transition-all duration-300" aria-label={t.like}><Heart size={20}/></button>
          <button className="flex items-center gap-2 hover:text-primary transition-all duration-300" aria-label={t.comment}><MessageCircle size={20}/></button>
          <button className={`${lang === 'ar' ? 'mr-auto' : 'ml-auto'} hover:text-primary transition-all duration-300`} aria-label={t.share}><Share2 size={20}/></button>
        </div>
      </div>
    </div>
  );
}

function Trends({ t, isDark }) {
  return (
    <aside className="hidden lg:flex flex-col gap-6 w-72">
      <div className="p-8 border border-border-light dark:border-border-dark rounded-2xl bg-card-light dark:bg-card-dark shadow-soft-md">
        <h3 className="font-black text-sm mb-6 text-primary flex items-center gap-2 uppercase tracking-tighter">{t.trends} <Hash size={18}/></h3>
        <div className="space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="cursor-pointer group">
              <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t.trendingCategory} · {t.trendingLabel}</p>
              <h4 className="font-bold text-xs group-hover:text-primary transition-all duration-300 tracking-tight">#Orbital_Beta_Test_2026</h4>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function OrbitalApp() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isDark, setIsDark] = useState(true);

  const t = translations[lang];

  return (
    <div className={`min-h-screen transition-all duration-300 font-sans ${isDark ? 'bg-background-dark text-foreground-dark' : 'bg-background-light text-foreground-light'}`} dir={t.dir}>
      
      <Navbar t={t} lang={lang} setLang={setLang} isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content Grid */}
      <div className="pt-24 pb-12 flex justify-center gap-8 px-6 max-w-[1400px] mx-auto">
        
        <Sidebar />

        {/* Feed الرئيسي */}
        <main className="flex-1 max-w-[600px]">
          <CreatePost t={t} isDark={isDark} />
          <PostCard t={t} isDark={isDark} lang={lang} />
        </main>

        <Trends t={t} isDark={isDark} />
      </div>
    </div>
  );
}
