"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const cases = [
  {
    image: "/image/case-cover2.avif", 
    title: "Motif used Ryze audits to win new retainers",
    desc: "Turned audits into a repeatable sales asset—faster audits, clearer proof, and stronger sales conversations."
  },
  {
    image: "/image/case-cover3.avif",
    title: "Sanar AI increased Google Search ROAS to 4.3x in 8 weeks",
    desc: "Turned category momentum into predictable growth—without adding headcount or slowing product velocity."
  },
  {
    image: "/image/case-cover4.avif",
    title: "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
    desc: "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles."
  },
  {
    image: "/image/case-cover4.avif",
    title: "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
    desc: "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles."
  },
  {
    image: "/image/case-cover4.avif",
    title: "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
    desc: "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles."
  }
];

export const CaseStudies = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cases.length / itemsPerPage);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleDotClick = (idx: number) => {
    setCurrent(idx);
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setDragging(true);
    if ('touches' in e) {
      startX.current = e.touches[0].clientX;
    } else {
      startX.current = e.clientX;
    }
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!dragging || startX.current === null) return;
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const diff = clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && current < totalPages - 1) {
        setCurrent(current + 1);
        setDragging(false);
      } else if (diff > 0 && current > 0) {
        setCurrent(current - 1);
        setDragging(false);
      }
      startX.current = null;
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    startX.current = null;
  };

  const visibleCases = cases.slice(current * itemsPerPage, current * itemsPerPage + itemsPerPage);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 select-none"
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      >
        {visibleCases.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-xl font-bold leading-tight mb-3 text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${current === idx ? 'bg-orange-600' : 'bg-slate-200'}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};