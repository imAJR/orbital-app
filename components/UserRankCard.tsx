"use client";
import { Award, Zap, Star, ShieldCheck } from "lucide-react";

interface UserStats {
  name: string;
  xp: number;
  projects: number;
}

export const UserRankCard = ({ stats }: { stats: UserStats }) => {
  // حساب الرتبة والنسبة المئوية للتقدم
  const getRankDetails = (xp: number) => {
    if (xp < 500) return { label: "مكتشف", color: "text-slate-400", bg: "bg-slate-400/10", next: 500 };
    if (xp < 1500) return { label: "مبرمج مداري", color: "text-emerald-400", bg: "bg-emerald-400/10", next: 1500 };
    if (xp < 3000) return { label: "مهندس الأنظمة", color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", next: 3000 };
    return { label: "سيد المدار", color: "text-purple-400", bg: "bg-purple-400/10", next: 5000 };
  };

  const rank = getRankDetails(stats.xp);
  const progress = (stats.xp / rank.next) * 100;

  return (
    <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden group">
      {/* تأثير ضوئي في الخلفية */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[100px] opacity-20 transition-all duration-500 group-hover:opacity-40 ${rank.bg}`}></div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-widest">رتبة العضو</h3>
          <div className={`flex items-center gap-2 text-2xl font-black ${rank.color}`}>
            {rank.label} <ShieldCheck size={24} />
          </div>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-white/40">
          <Award size={32} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
          <span className="text-slate-400">التقدم للمستوى التالي</span>
          <span className={rank.color}>{stats.xp} / {rank.next} XP</span>
        </div>
        
        {/* شريط التقدم */}
        <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-out rounded-full ${rank.color.replace('text', 'bg')}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
          <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
            <Zap size={10} className="text-yellow-500" /> إجمالي التفاعل
          </div>
          <div className="text-xl font-black dark:text-white text-slate-900">{stats.xp}</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
          <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
            <Star size={10} className="text-[#22D3EE]" /> المشاريع
          </div>
          <div className="text-xl font-black dark:text-white text-slate-900">{stats.projects}</div>
        </div>
      </div>
    </div>
  );
};