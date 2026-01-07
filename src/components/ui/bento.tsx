"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
    const testimonials = [
        {
          name: "Jane Doe",
          company: "Acme Corp",
          text: "Ryze AI helped us double our ad conversions in just one month! Highly recommended.",
          avatar: "/image/pfp4.png",
          logo: "/image/clutch.png"
        },
        {
          name: "John Smith",
          company: "Beta Agency",
          text: "The automation and creative suggestions are game changers for our team.",
          avatar: "/image/pfp3.png",
          logo: "/image/trust.png"
        },
        {
          name: "Emily Chen",
          company: "Gamma Digital",
          text: "We saved hours every week and saw instant results in campaign performance.",
          avatar: "/image/pfp1.png",
          logo: "/image/trust.png"
        }
    ];

    const targetCount = 63;
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = targetCount / steps;
        const stepDuration = duration / steps;
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetCount) {
                setCount(targetCount);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20  max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                    <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden">
                        <Image
                            src="/image/1.jpeg"
                            alt="Team collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    {testimonials.slice(0, 2).map((testimonial, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-md p-5 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex gap-3 flex-1">
                                    <Image 
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover w-10 h-10"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-zinc-900 font-semibold">{testimonial.name}</h3>
                                        <p className="text-zinc-600 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Image 
                                        src={testimonial.logo}
                                        alt={`${testimonial.company} logo`}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-zinc-700 text-sm leading-relaxed">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
                
                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                    <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden">
                        <Image
                            src="/image/2.webp"
                            alt="Success metrics"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-md p-4 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col justify-center">
                                <h2 className="text-4xl font-bold text-zinc-900 mb-2">+{count}%</h2>
                                <p className="text-zinc-600 text-sm leading-snug">
                                    better ROAS after switching to AI agents
                                </p>
                            </div>
                            
                            <div className="flex flex-col justify-center items-start">
                                <div className="w-16 h-16 mb-2 relative">
                                    <Image
                                        src="/image/speedy.svg"
                                        alt="Speedy logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-zinc-600 text-sm leading-snug">
                                    Got the whole team up and running in a day. Super easy to pick up
                                </p>
                            </div>
                        </div>

                     
                    </div>
                       <div className="bg-zinc-950 rounded-md p-6 text-white shadow-lg flex flex-col items-center justify-center text-center   ">
                          <p className="font-bold justify-center text-center">&quot;Ryze&apos;s AI-driven ads outperform human optimization by a huge margin.&quot;</p>  

                        <p className="text-sm text-zinc-500">Mathilde Biggs, CEO MotifDigital Agence</p>
                        </div>
                </div>
               
                {/* Column 3 */}
                <div className="flex flex-col gap-6">
                    {testimonials.slice(2, 3).map((testimonial, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-md p-5 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex gap-3 flex-1">
                                    <Image 
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover w-10 h-10"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-zinc-900 font-semibold">{testimonial.name}</h3>
                                        <p className="text-zinc-600 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Image 
                                        src={testimonial.logo}
                                        alt={`${testimonial.company} logo`}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-zinc-700 text-sm leading-relaxed">{testimonial.text}</p>
                        </div>
                    ))}
                    
                    <div className="relative w-full flex-1 min-h-[300px] rounded-md overflow-hidden">
                        <Image
                            src="/image/3.webp"
                            alt="Product showcase"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}