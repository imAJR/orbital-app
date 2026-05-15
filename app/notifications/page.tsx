"use client";
import { Navbar } from "../../components/Navbar";
import { Heart, UserPlus, MessageSquare, Bell } from "lucide-react";

const NOTIFICATIONS = [
  { id: 1, user: "سارة أحمد", type: "like", content: "أعجب بـ منشورك الأخير", time: "منذ دقيقتين" },
  { id: 2, user: "خالد محمد", type: "follow", content: "بدأ بمتابعتك الآن", time: "منذ ساعة" },
  { id: 3, user: "نورة علي", type: "comment", content: "علق على صورتك: 'تصميم فخم! 🔥'", time: "منذ ٣ ساعات" },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE] selection:text-black">
      <Navbar />
      
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-[#22D3EE]">الإشعارات</h2>
          <Bell className="text-slate-500" size={24} />
        </div>
        
        <div className="space-y-3">
          {NOTIFICATIONS.map((n) => (
            <div key={n.id} className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center justify-between hover:bg-white/[0.08] transition-all cursor-pointer group">
              <span className="text-[10px] text-slate-500 font-medium">{n.time}</span>
              
              <div className="flex items-center gap-4 text-right">
                <div>
                  <p className="text-sm font-bold">
                    {n.user} <span className="text-slate-400 font-normal">{n.content}</span>
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-opacity-20 ${
                  n.type === 'like' ? 'bg-red-500 text-red-500' : 
                  n.type === 'follow' ? 'bg-blue-500 text-blue-500' : 
                  'bg-green-500 text-green-500'
                }`}>
                  {n.type === 'like' && <Heart size={18} fill="currentColor" />}
                  {n.type === 'follow' && <UserPlus size={18} />}
                  {n.type === 'comment' && <MessageSquare size={18} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}