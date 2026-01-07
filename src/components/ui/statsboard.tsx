'use client';
import React, { useEffect, useState } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

const RollingNumber: React.FC<StatProps> = ({ value, suffix, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const totalFrames = 60;
    const increment = end / totalFrames;
    const intervalTime = duration / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <div className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-2">
        {label}
      </div>
    </div>
  );
};

export default function StatsBanner() {
  return (
    <div className="w-full bg-white/20 backdrop-blur-2xl rounded-md mt-20 shadow-sm max-w-2xl flex mx-auto">
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        <RollingNumber value={23} suffix="+" label="Countries" />
        <RollingNumber value={2000} suffix="+" label="Clients" />
        <RollingNumber value={50} suffix="M+" label="Ad Revenue" />
      </div>
    </div>
  );
}