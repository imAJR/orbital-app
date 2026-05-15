"use client";
import { Navbar } from "../../components/Navbar";
import { Orbit } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE] selection:text-black">
      <Navbar />
      
      <div className="flex items-center justify-center pt-40 pb-20 px-6">
        <div className="w-full max-w-md bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl text-right">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-[#22D3EE]/20 rounded-2xl flex items-center justify-center mb-4">
              <Orbit className="text-[#22D3EE] w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold">تسجيل الدخول</h2>
            <p className="text-slate-400 text-sm mt-2 font-medium text-center">مرحباً بك مجدداً في مدارك</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">البريد الإلكتروني</label>
              <input 
                type="email" 
                placeholder="ali@example.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#22D3EE] transition-colors text-left"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">كلمة المرور</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#22D3EE] transition-colors text-left"
              />
            </div>

            <Link 
              href="/feed" 
              className="w-full bg-[#22D3EE] text-black font-extrabold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all active:scale-95 text-center block"
            >
              دخول
            </Link>
          </form>

          <p className="text-center mt-8 text-sm text-slate-500">
            ليس لديك حساب؟ <span className="text-[#22D3EE] cursor-pointer hover:underline font-bold">أنشئ حساباً الآن</span>
          </p>
          
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-white transition-colors">
              ← العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}