"use client";
import { Navbar } from "../../components/Navbar";
import { User, Lock, Bell, Eye, Shield, LogOut, ChevronLeft } from "lucide-react";
import Link from "next/link";

const SETTING_OPTIONS = [
  { id: 1, title: "تعديل الملف الشخصي", icon: <User size={20} />, desc: "تغيير الصورة، الاسم، والنبذة الشخصية" },
  { id: 2, title: "الأمان والخصوصية", icon: <Lock size={20} />, desc: "تغيير كلمة المرور وإعدادات الخصوصية" },
  { id: 3, title: "التنبيهات", icon: <Bell size={20} />, desc: "التحكم في إشعارات البريد والهاتف" },
  { id: 4, title: "العرض واللغة", icon: <Eye size={20} />, desc: "الوضع الليلي ولغة التطبيق" },
  { id: 5, title: "مركز المساعدة", icon: <Shield size={20} />, desc: "الدعم الفني وشروط الاستخدام" },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE] selection:text-black">
      <Navbar />
      
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        <h2 className="text-3xl font-black text-[#22D3EE] mb-10 text-right uppercase italic">Settings</h2>
        
        <div className="space-y-4">
          {SETTING_OPTIONS.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center justify-between hover:bg-white/[0.08] transition-all cursor-pointer group">
              <ChevronLeft size={18} className="text-slate-600 group-hover:text-[#22D3EE] transition-colors" />
              
              <div className="flex items-center gap-4 text-right">
                <div>
                  <h4 className="font-bold text-md">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}

          <button className="w-full mt-10 bg-red-500/10 border border-red-500/20 text-red-500 p-5 rounded-3xl flex items-center justify-center gap-3 font-bold hover:bg-red-500 hover:text-white transition-all group">
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </button>
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-700 text-[10px]">Orbital Version 1.0.4 - Build 2026</p>
        </div>
      </div>
    </main>
  );
}