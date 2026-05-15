"use client";
import Link from 'next/link';
import { Orbit, Mail, Lock, UserPlus } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] px-4">
      <div className="w-full max-w-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-10 rounded-[3rem] shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <Orbit className="text-[#22D3EE] w-12 h-12 mb-4 animate-pulse" />
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Join Orbital</h1>
          <p className="text-slate-500 text-sm mt-2 font-bold">ابدأ رحلتك في المدار اليوم</p>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-slate-100 dark:bg-black/40 border-none rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 ring-[#22D3EE]/50 transition-all text-sm" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="password" placeholder="كلمة المرور" className="w-full bg-slate-100 dark:bg-black/40 border-none rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 ring-[#22D3EE]/50 transition-all text-sm" />
          </div>
          <button className="w-full bg-[#22D3EE] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all">
            <UserPlus size={20} /> إنشاء الحساب
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/login" className="text-xs font-bold text-slate-500 hover:text-[#22D3EE] transition-all">
            لديك حساب بالفعل؟ <span className="text-[#22D3EE] underline">سجل دخولك</span>
          </Link>
        </div>
      </div>
    </div>
  );
}