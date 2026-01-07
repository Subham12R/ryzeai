"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RecommendationsList() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [loop, setLoop] = useState(0);
    const recommendations = [
        {
            id: 1,
            text: "Pause 27 queries burning $1.8k with 0 conversions (30d)",
            savings: "+$2.5k/mo",
            applied: false
        },
        {
            id: 2,
            text: "Split Brand (ROAS 8.2) from Non-Brand (ROAS 1.6); separate ...",
            savings: "+$3.7k/mo",
            applied: false
        },
        {
            id: 3,
            text: 'Isolate "project management software" ($3.4k, ROAS 0.9); ow...',
            savings: "+$5.8k/mo",
            applied: false
        },
        {
            id: 4,
            text: "Raise cap on Brand US (Lost IS Budget 62%, ROAS 9.1)",
            savings: "+$3.2k/mo",
            applied: false
        },
        {
            id: 5,
            text: 'Add 85 negatives ("jobs", "free", "tutorial") to block waste ter...',
            savings: "+$4.6k/mo",
            applied: false
        },
        {
            id: 6,
            text: "Fix tracking: use one conversion set per campaign; dedupe r...",
            savings: "+$5.9k/mo",
            applied: false
        }
    ];
    const [items, setItems] = useState(recommendations);

    useEffect(() => {
        if (activeIndex === -1) {
            const timer = setTimeout(() => {
                setActiveIndex(0);
            }, 500);
            return () => clearTimeout(timer);
        }
        if (activeIndex < items.length) {
            const timer = setTimeout(() => {
                setItems(prev => prev.map((item, idx) =>
                    idx === activeIndex ? { ...item, applied: true } : item
                ));
                setTimeout(() => {
                    setActiveIndex(prev => prev + 1);
                }, 200); 
            }, 1200); 
            return () => clearTimeout(timer);
        } else {
            // Reset for infinite loop
            setTimeout(() => {
                setItems(recommendations);
                setActiveIndex(-1);
                setLoop(l => l + 1);
            }, 1200);
        }
    }, [activeIndex, items.length, loop]);

    return (
        <div className="w-full mx-auto p-4 flex items-center justify-center ">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-4 space-y-3 w-full">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex items-center justify-between gap-2 p-2 rounded-xl transition-all duration-500 ${
                            item.applied
                                ? 'bg-white border border-orange-100'
                                : index === activeIndex
                                ? 'bg-white border-2 border-orange-300 shadow-md scale-[1.02]'
                                : 'bg-white/50 border border-transparent'
                        }`}
                    >
                        <div className="flex items-center gap-2 flex-1">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                                item.applied
                                    ? 'bg-orange-500'
                                    : 'bg-white border-2 border-zinc-300'
                            }`}>
                                {item.applied && (
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <p className={`text-sm flex-1 transition-colors duration-300 ${
                                item.applied ? 'text-zinc-800' : 'text-zinc-600'
                            }`}>
                                {item.text}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-base font-semibold transition-colors duration-300 ${
                                item.applied ? 'text-green-600' : 'text-zinc-400'
                            }`}>
                                {item.savings}
                            </span>
                            <button
                                className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                                    item.applied
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-white text-orange-500 border-2 border-orange-200 hover:border-orange-300'
                                }`}
                            >
                                {item.applied ? 'Applied' : 'Apply'}
                            </button>
                        </div>
                        {index === activeIndex && !item.applied && (
                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 transition-transform duration-500" style={{transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)'}}>
                                <Image 
                                    src="/image/pointer.svg"
                                    alt="pointer"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rotate-[-15deg] animate-[cursorMove_0.6s_ease-in-out]"
                                />
                                <style>{`
                                    @keyframes cursorMove {
                                        0% { transform: translateY(-50%) scale(1) rotate(-15deg); }
                                        50% { transform: translateY(-60%) scale(1.1) rotate(-10deg); }
                                        100% { transform: translateY(-50%) scale(1) rotate(-15deg); }
                                    }
                                `}</style>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}