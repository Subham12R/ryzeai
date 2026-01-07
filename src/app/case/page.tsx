"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/ui/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Marquee from "@/components/ui/infinite_marque";
import { CaseStudies } from "@/components/ui/carousel";
import { Insights } from "@/components/ui/insights";

gsap.registerPlugin(ScrollTrigger);

export default function CasePage() {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroInputRef = useRef(null);

  const marqueeRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const insightsRef = useRef(null);

  useEffect(() => {
    // Hero section animations on page load
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Title animation
      tl.fromTo(
        heroTitleRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      tl.fromTo(
        heroSubtitleRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Input animation
      tl.fromTo(
        heroInputRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.6"
      );

  

      // Marquee animation
      tl.fromTo(
        marqueeRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );
    });

    // Scroll-triggered animations for Case Studies
    gsap.fromTo(
      caseStudiesRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: caseStudiesRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      }
    );

    // Scroll-triggered animations for Insights
    gsap.fromTo(
      insightsRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: insightsRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      }
    );

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-[#e6894f] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 px-8 text-center mt-20">
        <h1
          ref={heroTitleRef}
          className="text-8xl font-bold text-white mb-2 max-w-6xl"
          style={{ opacity: 0 }}
        >
          Top brands improve ROAS with Ryze
        </h1>
        
        <p
          ref={heroSubtitleRef}
          className="text-2xl font-semibold text-white max-w-4xl mb-10 font-bricolage-grotesque"
          style={{ opacity: 0 }}
        >
          Join thousands of brands simplifying ad management with AI
        </p>
        
        <div
          ref={heroInputRef}
          className="flex justify-center items-center max-w-xl mx-auto w-full relative"
          style={{ opacity: 0 }}
        >
          <Input 
            className="w-full px-6 py-4 rounded-md bg-white/30 text-zinc-900 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300 border-none text-2xl" 
            placeholder="Email" 
          />
          <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-linear-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
            Get Started
          </Button>
        </div>
      </div>
      
    
        <TextHoverEffect text="RYZE" />
    
      
    
      <div ref={marqueeRef} style={{ opacity: 0 }}>
        <Marquee />
      </div>
    
      <div className="min-h-screen mt-20 pb-20">
        <div ref={caseStudiesRef} style={{ opacity: 0 }}>
          <CaseStudies />
        </div>
        
        <div ref={insightsRef} style={{ opacity: 0 }}>
          <Insights />
        </div>
      </div>
    </div>
  );
}