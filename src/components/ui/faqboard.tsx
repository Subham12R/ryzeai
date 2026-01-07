'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What platforms does Ryze AI support?",
    answer: "Ryze AI manages ads across Google Ads, Meta (Facebook & Instagram), ChatGPT, Perplexity, LinkedIn, Reddit, Amazon, and X (Twitter). Our AI seamlessly integrates with all major advertising platforms to optimize your campaigns 24/7."
  },
  {
    id: 2,
    question: "How does the AI improve my ROAS?",
    answer: "Our autonomous AI marketer continuously analyzes your campaigns, identifies wasted spend, suggests budget reallocations, optimizes keywords, and generates high-performing creatives. Clients typically see 45-63% better ROAS after switching to AI-powered optimization."
  },
  {
    id: 3,
    question: "Can I get a free account audit?",
    answer: "Absolutely. Get an instant account audit that analyzes your ad performance, identifies optimization opportunities, and shows you exactly where you're leaving money on the table. Our AI completes audits 5x faster than manual reviews."
  },
  {
    id: 4,
    question: "What's included in the platform?",
    answer: "Ryze AI includes 24/7 performance monitoring, AI creative generation and analysis, automated budget reallocation, keyword optimization, campaign setup, detailed reporting, and a ChatGPT-style interface where you can ask questions about your ad performance anytime."
  },
  {
    id: 5,
    question: "How quickly can I get started?",
    answer: "Most teams are up and running within a day. Simply connect your ad accounts, and our AI immediately begins analyzing your campaigns and suggesting optimizations. No complex setup or training required—it's designed for immediate impact."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(3);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full ">
        <div className="space-y-0">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div
                key={faq.id}
                className="backdrop-blur-3xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 md:px-8 py-4 flex items-center justify-between text-left hover:bg-zinc-750 transition-colors"
                >
                  <span
                    className={`text-lg md:text-xl font-medium transition-colors ${
                      isOpen ? 'text-yellow-500' : 'text-zinc-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <X className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 text-zinc-900 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}