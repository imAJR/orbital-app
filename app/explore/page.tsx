"use client";
import { useState } from "react";
import { Code, Play, Terminal, Search, Sparkles } from "lucide-react";

export default function ExplorePage() {
  const [code, setCode] = useState("// اكتب كود Javascript هنا...\nconsole.log('مرحباً بك في مدار أوربيتال!');");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      setOutput("جاري التنفيذ... \n" + "النتيجة: تم تشغيل الكود بنجاح في بيئة Orbital");
    } catch (err) {
      setOutput("خطأ في الكود!");
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-12 px-6 md:px-12 bg-white dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#22D3EE]/10 rounded-lg text-[#22D3EE]">
              <Search size={24} />
            </div>
            <h1 className="text-4xl font-black dark:text-white text-slate-900 italic tracking-tighter uppercase">
              Explore <span className="text-[#22D3EE]">الاستكشاف</span>
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">مرحباً بك في مختبر المدار لتجربة الأكواد.</p>
        </div>

        {/* محاكي الأكواد */}
        <div className="dark:bg-black/40 bg-white border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center bg-slate-100 dark:bg-white/5 px-8 py-4 border-b dark:border-white/10">
            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-widest">
              <Code size={14} className="text-[#22D3EE]" /> JavaScript Playground
            </span>
            <button onClick={runCode} className="bg-[#22D3EE] text-black px-6 py-2 rounded-2xl text-[11px] font-black flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              RUN CODE <Play size={12} fill="black" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 h-[400px]">
            <textarea 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="p-8 bg-transparent outline-none resize-none font-mono text-sm text-slate-700 dark:text-[#22D3EE] border-l dark:border-white/5"
            />
            <div className="bg-slate-50 dark:bg-black/20 p-8 font-mono text-sm">
              <pre className="text-emerald-500 whitespace-pre-wrap">{output || "// في انتظار تشغيل الكود..."}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}