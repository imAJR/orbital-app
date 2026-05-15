"use client";
import { Navbar } from "../../../components/Navbar";
import { Heart, MessageCircle, Share2, MoreHorizontal, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const COMMENTS = [
  { id: 1, user: "سارة أحمد", content: "اتفق معك تماماً، تجربة المستخدم هي الأهم!", time: "منذ ساعة" },
  { id: 2, user: "خالد محمد", content: "هل قمت بتجربة مكتبة Framer Motion معها؟", time: "منذ ٣٠ دقيقة" },
];

export default function PostDetailsPage() {
  const [comment, setComment] = useState("");

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE]">
      <Navbar />
      
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        {/* زر العودة */}
        <Link href="/feed" className="flex items-center gap-2 text-slate-500 hover:text-[#22D3EE] mb-8 transition-colors group w-fit">
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          <span className="text-sm font-bold">العودة للخلاصة</span>
        </Link>

        {/* المنشور الأساسي */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#22D3EE] to-indigo-600 rounded-2xl flex items-center justify-center font-black text-black">
                AJ
              </div>
              <div className="text-left">
                <h4 className="font-bold text-md">علي الجبرتي</h4>
                <p className="text-[10px] text-slate-500">منذ ساعتين • عام</p>
              </div>
            </div>
            <MoreHorizontal className="text-slate-500 cursor-pointer" />
          </div>

          <p className="text-slate-200 leading-relaxed text-right mb-8 text-lg font-medium">
            اليوم قمت بتحديث هيكلية "أوربيتال" بالكامل. نحن ننتقل من مرحلة التصميم إلى مرحلة التفاعل الحقيقي. القادم مذهل! 🚀
          </p>

          <div className="flex justify-between pt-6 border-t border-white/5">
            <div className="flex gap-8">
              <button className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors group">
                <Heart size={22} className="group-hover:fill-red-500" />
                <span className="font-bold">١٥٤</span>
              </button>
              <div className="flex items-center gap-2 text-[#22D3EE]">
                <MessageCircle size={22} />
                <span className="font-bold">١٢</span>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Share2 size={22} />
            </button>
          </div>
        </div>

        {/* صندوق إضافة تعليق */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-10 flex gap-4 items-center">
           <button className="bg-[#22D3EE] text-black p-2 rounded-xl hover:scale-105 transition-all">
            <Send size={18} />
          </button>
          <input 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="اكتب تعليقك هنا..."
            className="flex-1 bg-transparent border-none outline-none text-right text-sm py-2"
          />
        </div>

        {/* قسم التعليقات */}
        <div className="space-y-6">
          <h3 className="text-slate-500 text-sm font-bold text-right mb-4">التعليقات</h3>
          {COMMENTS.map((c) => (
            <div key={c.id} className="flex gap-4 justify-end">
              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl rounded-tr-none flex-1 text-right">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-slate-600">{c.time}</span>
                  <span className="font-bold text-xs">{c.user}</span>
                </div>
                <p className="text-sm text-slate-300">{c.content}</p>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex-shrink-0"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}