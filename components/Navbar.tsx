"use client";
import { Orbit, User, Sun, Moon, Search, ShoppingBag, Trophy, Languages, Ghost } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const translations = {
  ar: {
    explore: "الاستكشاف",
    ranks: "الرتب",
    store: "المتجر",
    langBtn: "English",
    toggleLang: "تبديل اللغة",
    toggleTheme: "تبديل الوضع الليلي/النهاري",
    profile: "الملف الشخصي",
  },
  en: {
    explore: "Explore",
    ranks: "Ranks",
    store: "Store",
    langBtn: "العربية",
    toggleLang: "Toggle language",
    toggleTheme: "Toggle dark/light mode",
    profile: "Profile",
  }
};

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar"); // Local language state for Navbar

  useEffect(() => setMounted(true), []);

  const t = translations[lang];

  const handleLangToggle = () => {
    setLang(prevLang => (prevLang === "ar" ? "en" : "ar"));
    // Optionally, you might want to store this preference in localStorage or a global state management solution
    // to persist across page loads or share with other components.
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-4 md:px-12 py-4 flex justify-between items-center transition-all duration-300">
      {/* Logo and Main Navigation */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-background-dark shadow-orbital-cyan">
            <Ghost size={20} />
          </div>
          <span className="text-xl font-black italic text-foreground-dark dark:text-foreground-light uppercase tracking-tighter">ORBITAL</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm uppercase font-bold text-muted-foreground">
          <Link href="/explore" className="hover:text-primary flex items-center gap-1 transition-all duration-300" aria-label={t.explore}>
            <Search size={14}/> {t.explore}
          </Link>
          <Link href="/ranks" className="hover:text-primary flex items-center gap-1 transition-all duration-300" aria-label={t.ranks}>
            <Trophy size={14}/> {t.ranks}
          </Link>
          <Link href="/store" className="hover:text-primary flex items-center gap-1 transition-all duration-300" aria-label={t.store}>
            <ShoppingBag size={14}/> {t.store}
          </Link>
        </div>
      </div>

      {/* Actions: Language, Theme, Profile */}
      <div className="flex items-center gap-4">
        <button onClick={handleLangToggle} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-light dark:border-border-dark text-xs font-black transition-all duration-300 hover:bg-muted-light dark:hover:bg-muted-dark`} aria-label={t.toggleLang}>
          <Languages size={14} /> {t.langBtn}
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`p-2 rounded-lg transition-all duration-300 hover:bg-muted-light dark:hover:bg-muted-dark ${theme === "dark" ? 'text-yellow-400' : 'text-foreground-dark'}`} aria-label={t.toggleTheme}>
          {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
        <Link href="/profile" className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-orbital-blue flex items-center justify-center" aria-label={t.profile}>
          <div className={`w-full h-full rounded-full flex items-center justify-center text-xs font-black bg-background-light dark:bg-background-dark`}>
            {lang === 'ar' ? 'ع' : 'AJ'}
          </div>
        </Link>
      </div>
    </nav>
  );
};
