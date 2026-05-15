"use client";
import { Orbit, User, Sun, Moon, Search, ShoppingBag, Trophy, Bell } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/10 dark:bg-[#020617]/80 bg-white/80 backdrop-blur-xl px-4 md:px-12 py-4 flex justify-between items-center transition-all">
      {/* الأدوات والروابط */}
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-xl bg-[#22D3EE]/10 text-[#22D3EE] hover:scale-110 transition-all"
        >
          {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
        </button>

        <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10 mx-2"></div>

        <div className="flex gap-5 items-center">
          <Link href="/explore" className="text-slate-400 hover:text-[#22D3EE] font-bold text-sm flex items-center gap-1">
            <Search size={18}/> <span className="hidden md:block">الاستكشاف</span>
          </Link>
          <Link href="/ranks" className="text-slate-400 hover:text-[#22D3EE] font-bold text-sm flex items-center gap-1">
            <Trophy size={18}/> <span className="hidden md:block">الرتب</span>
          </Link>
          <Link href="/store" className="text-slate-400 hover:text-[#22D3EE] font-bold text-sm flex items-center gap-1">
            <ShoppingBag size={18}/> <span className="hidden md:block">المتجر</span>
          </Link>
        </div>
      </div>

      {/* الشعار والملف الشخصي */}
      <div className="flex items-center gap-6">
        <Link href="/profile" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-transparent hover:border-[#22D3EE] transition-all">
          <User size={20} />
        </Link>
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl font-black italic dark:text-white text-slate-900 uppercase tracking-tighter">ORBITAL</span>
          <Orbit className="text-[#22D3EE] w-7 h-7 group-hover:rotate-180 transition-all duration-700" />
        </Link>
      </div>
    </nav>
  );
};