"use client";
import { Navbar } from "../../components/Navbar";
import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const DUMMY_POSTS = [
  { id: 1, user: "علي الجبرتي", content: "اليوم بدأت ببناء منصة أوربيتال، الشعور رهيب! 🚀", time: "منذ ساعتين" },
  { id: 2, user: "سارة أحمد", content: "واجهة المستخدم في Next.js ممتعة جداً، خاصة مع Tailwind CSS.", time: "منذ ٥ ساعات" },
];

export default function FeedPage() {
  const [postText, setPostText] = useState("");

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE] selection:text-black">
      <Navbar />
      
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        {/* صندوق كتابة منشور جديد */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10 backdrop-blur-sm">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#22D3EE] rounded-2xl flex-shrink-0 flex items-center justify-center font-black text-black">
              AJ
            </div>
            <textarea 
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="بماذا تفكر يا علي؟"
              className="w-full bg-transparent border-none outline-none text-lg resize-none pt-2 placeholder:text-slate-600 text-right"
              rows={3}
            />
          </div>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
            <button 
              disabled={!postText}
              className="bg-[#22D3EE] text-black px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] disabled:opacity-50 transition-all active:scale-95"
            >
              <span>نشر</span>
              <Send size={18} />
            </button>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6 text-slate-400 text-right">آخر التحديثات</h2>
        
        {/* قائمة المنشورات */}
        <div className="space-y-6">
          {DUMMY_POSTS.map((post) => (
            <Link href={`/post/${post.id}`} key={post.id} className="block group">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/[0.07] transition-all border-transparent hover:border-[#22D3EE]/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center text-left">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#22D3EE] to-indigo-500 rounded-full flex items-center justify-center font-bold text-black text-sm">
                      {post.user[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{post.user}</h4>
                      <p className="text-[10px] text-slate-500">{post.time}</p>
                    </div>
                  </div>
                  <MoreHorizontal className="text-slate-500 cursor-pointer" />
                </div>
                
                <p className="text-slate-200 leading-relaxed text-right mb-6 text-md font-medium">
                  {post.content}
                </p>
                
                <div className="flex justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-red-500 transition-colors">
                      <Heart size={18} /> 
                      <span className="text-xs">٢٤</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-[#22D3EE] transition-colors">
                      <MessageCircle size={18} /> 
                      <span className="text-xs">٥</span>
                    </div>
                  </div>
                  <Share2 size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}