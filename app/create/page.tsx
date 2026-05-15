"use client";
import { Navbar } from "../../components/Navbar";
import { Image as ImageIcon, Code, Globe, Hash, X, Plus } from "lucide-react";
import { useState } from "react";

export default function CreatePostPage() {
  const [postType, setPostType] = useState("text");

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE]">
      <Navbar />
      
      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <button 
              onClick={() => setPostType("text")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${postType === 'text' ? 'bg-[#22D3EE] text-black' : 'bg-white/5 text-slate-400'}`}
            >
              نص
            </button>
            <button 
              onClick={() => setPostType("code")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${postType === 'code' ? 'bg-[#22D3EE] text-black' : 'bg-white/5 text-slate-400'}`}
            >
              كود
            </button>
          </div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-[#22D3EE]">New Orbit</h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          {/* منطقة النص */}
          <textarea 
            placeholder="شارك العالم أفكارك البرمجية..."
            className="w-full bg-transparent border-none outline-none text-xl resize-none min-h-[200px] text-right placeholder:text-slate-700"
          />

          {/* إذا اختار المستخدم نوع "كود" يظهر هذا المربع */}
          {postType === "code" && (
            <div className="mt-4 bg-black/50 rounded-2xl p-4 border border-[#22D3EE]/20">
              <div className="flex justify-between mb-2 border-b border-white/5 pb-2">
                <span className="text-[10px] text-[#22D3EE] font-mono">index.tsx</span>
                <span className="text-[10px] text-slate-500 font-mono">TypeScript</span>
              </div>
              <textarea 
                placeholder="// الصق كودك هنا..."
                className="w-full bg-transparent border-none outline-none font-mono text-sm text-[#22D3EE] h-32 resize-none"
              />
            </div>
          )}

          {/* أدوات إضافية */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl">
                <ImageIcon size={18} />
                <span className="text-xs font-bold">صورة</span>
              </button>
              <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl">
                <Hash size={18} />
                <span className="text-xs font-bold">هاشتاق</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-slate-500">
              <span className="text-xs font-bold">الخصوصية: الجميع</span>
              <Globe size={16} />
            </div>
          </div>
        </div>

        <button className="w-full mt-6 bg-[#22D3EE] text-black font-black py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all active:scale-[0.98]">
          نشر في المدار
        </button>
      </div>
    </main>
  );
}