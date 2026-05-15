"use client";
import { Trophy, ShieldCheck, Zap } from "lucide-react";

export default function RanksPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-white dark:bg-[#020617]">
      <div className="max-w-4xl mx-auto text-right">
        <h1 className="text-4xl font-black italic uppercase mb-10 text-center">Orbital Ranks <span className="text-[#22D3EE]">الرتب</span></h1>
        
        <div className="p-10 rounded-[3.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <Trophy className="text-[#22D3EE]" size={60} />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase mb-1">المستوى الحالي</p>
              <h2 className="text-3xl font-black text-[#22D3EE] flex items-center gap-2 justify-end">
                مهندس الأنظمة <ShieldCheck />
              </h2>
            </div>
          </div>
          
          <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full mb-4">
            <div className="h-full bg-[#22D3EE] w-[60%] rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          </div>
          <p className="text-xs font-bold text-slate-400">تحتاج إلى 1150 XP للوصول للرتبة التالية</p>
        </div>
      </div>
    </div>
  );
}