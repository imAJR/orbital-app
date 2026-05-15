"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-48 pb-10 px-6 overflow-hidden">
      <div className="absolute top-0 -z-10 h-full w-full bg-[#020617]">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(34,211,238,0.15)] opacity-50 blur-[80px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6">
          اكتشف مدارك <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-indigo-400">
            في أوربيتال
          </span>
        </h1>
        <p className="max-w-[600px] text-lg text-slate-400 mb-10 leading-relaxed mx-auto">
          أول منصة تواصل اجتماعي تعيد تعريف الخصوصية والإبداع. انضم إلى آلاف المطورين في رحلة نحو المستقبل.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login" className="px-8 py-4 bg-[#22D3EE] text-black font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all active:scale-95 text-center">
            ابدأ رحلتك الآن
          </Link>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
            شاهد العرض التجريبي
          </button>
        </div>
      </motion.div>
    </section>
  );
};