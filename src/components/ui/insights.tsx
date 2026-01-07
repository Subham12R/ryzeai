"ise client";
import React from 'react';
    
const insights = [
  {
    category: "LEARN",
    title: "AdGent — the first AI agent to manage paid ads",
    excerpt: "Discover how AdGent transforms paid media management.",
    date: "Jan 15, 2025"
  },
  {
    category: "LEARN",
    title: "Account Structure in 2025: Simplify, Don't Complicate",
    excerpt: "The traditional Alpha/Beta account structure is dead. Learn how to restructure for machine learning.",
    date: "2025"
  },
  {
    category: "LEARN",
    title: "Ad Creative for AI Search: Earning Clicks When AI Answers First",
    excerpt: "Your creative has to work harder when CTRs are down 40-80%.",
    date: "2025"
  },
    {
    category: "LEARN",
    title: "Ad Creative for AI Search: Earning Clicks When AI Answers First",
    excerpt: "Your creative has to work harder when CTRs are down 40-80%.",
    date: "2025"
  },
    {
    category: "LEARN",
    title: "Ad Creative for AI Search: Earning Clicks When AI Answers First",
    excerpt: "Your creative has to work harder when CTRs are down 40-80%.",
    date: "2025"
  },
    {
    category: "LEARN",
    title: "Ad Creative for AI Search: Earning Clicks When AI Answers First",
    excerpt: "Your creative has to work harder when CTRs are down 40-80%.",
    date: "2025"
  },
];

export const Insights = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      <h2 className="text-5xl font-bold mb-16 text-slate-900">Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {insights.map((post, i) => (
          <div key={i} className="flex flex-col border-t border-orange-500 pt-6">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 mb-4 uppercase">
              {post.category}
            </span>
            <h4 className="text-xl font-bold mb-4 text-slate-900 leading-snug min-h-[3rem]">
              {post.title}
            </h4>
            <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">
                R
              </div>
              <div className="text-[11px] font-semibold text-slate-700">
                Ryze Team <span className="mx-2 text-slate-300">|</span> 
                <span className="text-slate-400 font-normal">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors flex items-center justify-center mx-auto gap-2">
          See more <span>→</span>
        </button>
      </div>
    </section>
  );
};