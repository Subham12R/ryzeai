"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Marquee from "@/components/ui/infinite_marque";

export default function AboutPage() {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroInputRef = useRef(null);
 
  const marqueeRef = useRef(null);
  
  const image1Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const image2Ref = useRef(null);
  const text3Ref = useRef(null);
  const finalCtaRef = useRef(null);

  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline();
    
    heroTl.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    
    heroTl.fromTo(
      heroSubtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
    
    heroTl.fromTo(
      heroInputRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
      "-=0.6"
    );
    

    
    heroTl.fromTo(
      marqueeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Simple fade in animations without scroll triggers
    gsap.fromTo(
      image1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      text1Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      text2Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.4,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      image2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 1.6,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      text3Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      finalCtaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power3.out",
      }
    );

    return () => {
      // Cleanup if needed
    };
  }, []);

  const galleryImages = [
    "/image/1.jpeg",
    "/image/2.webp", 
    "/image/3.webp",
    "/image/san.png",
    "/image/5.png",
    "/image/founder.png",
  ];

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
          About Ryze
        </h1>
        
        <p
          ref={heroSubtitleRef}
          className="text-2xl font-semibold text-white max-w-4xl mb-10 font-bricolage-grotesque"
          style={{ opacity: 0 }}
        >
          The AI-powered platform transforming how agencies run ads
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

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        
        {/* Section 1 */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <h2 
              ref={text1Ref}
              className="text-6xl font-bold text-zinc-900 leading-none"
              style={{ opacity: 0 }}
            >
              We've run ads at Google, DTC brands, big companies, small agencies.
            </h2>
            <p 
              ref={text2Ref}
              className="text-xl text-zinc-700 leading-relaxed self-end"
              style={{ opacity: 0 }}
            >
              Late nights. Tight budgets. Impossible targets. We know the truth: most ads lose money. Not because people are bad at marketing. Because the work is too manual, too slow, too scattered.
            </p>
          </div>
          
          <div 
            ref={image1Ref}
            className="w-full h-[500px] relative"
            style={{ opacity: 0 }}
          >
            <Image
              src="/image/intro.png"
              alt="Team at Google"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-zinc-600 mt-4">Office gathering</p>
        </div>

        {/* Section 2 */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div 
              ref={image2Ref}
              className="w-full h-[600px] relative"
              style={{ opacity: 0 }}
            >
              <Image
                src="/image/office.png"
                alt="Office gathering"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 
                ref={text3Ref}
                className="text-3xl font-bold text-zinc-900 leading-none"
                style={{ opacity: 0 }}
              >
                So we built Ryze. An AI that never sleeps, constantly optimizing, always learning. It handles the grunt work - auditing campaigns, generating creatives, suggesting improvements - so you can focus on strategy and growth.
              </h2>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div 
          ref={finalCtaRef}
          className="bg-zinc-900 rounded-md p-16 text-center mb-20"
          style={{ opacity: 0 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to elevate your agency?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who've transformed their ad management with AI
          </p>
          <div className="flex justify-center items-center max-w-xl mx-auto w-full relative">
            <Input 
              className="w-full px-6 py-4 rounded-md bg-white/30 text-zinc-900 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300 border-none text-2xl" 
              placeholder="Enter your email" 
            />
            <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-linear-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
              Get Started
            </Button>
          </div>
        </div>

        {/* Infinite Scrolling Gallery */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll-gallery {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-gallery {
              animation: scroll-gallery 40s linear infinite;
            }
          `}</style>
          
          <div className="animate-scroll-gallery flex gap-6">
            {/* Duplicate images for seamless loop */}
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 h-96 relative"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}