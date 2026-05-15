import { Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    title: "خصوصية مطلقة",
    desc: "بياناتك مشفرة بالكامل ولا نطلع عليها أبداً.",
    icon: <Shield className="w-8 h-8 text-[#22D3EE]" />,
  },
  {
    title: "سرعة مدارية",
    desc: "تجربة تصفح فائقة السرعة بفضل تقنياتنا الحديثة.",
    icon: <Zap className="w-8 h-8 text-[#22D3EE]" />,
  },
  {
    title: "مجتمع المبدعين",
    desc: "تواصل مع مبرمجين ومصممين يشاركونك نفس الطموح.",
    icon: <Users className="w-8 h-8 text-[#22D3EE]" />,
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-6 bg-[#020617]">
      {/* إحصائيات سريعة فوق الكروت */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 mb-20 border-b border-white/5 pb-10">
          <div className="text-center"><p className="text-2xl font-bold text-white">+50K</p><p className="text-xs text-slate-500">مستخدم نشط</p></div>
          <div className="text-center"><p className="text-2xl font-bold text-[#22D3EE]">100%</p><p className="text-xs text-slate-500">خصوصية تامة</p></div>
          <div className="text-center"><p className="text-2xl font-bold text-white">24/7</p><p className="text-xs text-slate-500">دعم فني</p></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#22D3EE]/50 transition-all group">
            <div className="mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};