"use client";
import { ShoppingBag, Sparkles, Zap } from "lucide-react";

const items = [
  { id: 1, name: "ثيم النجم", price: 1000, desc: "توهج ذهبي للملف الشخصي", color: "from-yellow-400 to-orange-500" },
  { id: 2, name: "شارة خبير", price: 500, desc: "شارة توثيق بجانب اسمك", color: "from-blue-400 to-cyan-500" },
  { id: 3, name: "الخلفية المتحركة", price: 2500, desc: "فضاء متحرك لصفحتك", color: "from-purple-500 to-pink-600" },
];

export default function StorePage() {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-white dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-6 py-3 rounded-2xl flex items-center gap-3">
            <Zap className="text-[#22D3EE]" size={20} />
            <span className="text-2xl font-black text-[#22D3EE]">1850 XP</span>
          </div>
          <h1 className="text-4xl font-black italic uppercase">Store <span className="text-[#22D3EE]">المتجر</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          {items.map((item) => (
            <div key={item.id} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 hover:scale-105 transition-all">
              <div className={`w-full h-1 mb-6 bg-gradient-to-r ${item.color} rounded-full`}></div>
              <h3 className="text-2xl font-black mb-2">{item.name}</h3>
              <p className="text-sm text-slate-500 mb-8">{item.desc}</p>
              <button className="w-full py-4 rounded-2xl bg-[#22D3EE] text-black font-black hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                شراء بـ {item.price} XP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}