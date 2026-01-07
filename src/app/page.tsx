"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/navbar";
import Marquee from "@/components/ui/infinite_marque";
import TestimonialsSection from "@/components/ui/bento";
import RecommendationsList from "@/components/ui/animbox";
import FAQ from "@/components/ui/faqboard";
import StatsBanner from "@/components/ui/statsboard";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroInputRef = useRef(null);
  const marqueeRef = useRef(null);
  
  const section1Ref = useRef(null);
  const section1TitleRef = useRef(null);
  const section1ContentRef = useRef(null);
  
  const section2Ref = useRef(null);
  const section2TitleRef = useRef(null);
  const section2Col1Ref = useRef(null);
  const section2Col2Ref = useRef(null);
  
  const section3Ref = useRef(null);
  const section3TitleRef = useRef(null);
  const section3InputRef = useRef(null);
  const section3StatsRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      heroSubtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      heroInputRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      }
    );

  
    gsap.fromTo(
      marqueeRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      }
    );

    // Section 1 - Excel in AI-Driven Growth
    gsap.fromTo(
      section1TitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      section1ContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section 2 - Know More About Us
    gsap.fromTo(
      section2TitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      section2Col1Ref.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      section2Col2Ref.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section 3 - Audit Your AD Account
    gsap.fromTo(
      section3TitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      section3InputRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      section3StatsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main
          ref={heroRef}
          className="bg-linear-to-b from-[#e6894f] to-[#ffffff] items-center justify-center text-center flex flex-col w-full min-h-screen px-8"
        >
          <div className="flex flex-col items-center justify-center flex-1 px-8 text-center mt-20">
            <h1
              ref={heroTitleRef}
              className="text-7xl font-bold text-white mb-2"
            >
              Let AI Elevate Your <span className="">Agency</span>
            </h1>
            <p
              ref={heroSubtitleRef}
              className="text-4xl font-semibold text-white max-w-4xl mb-10 font-bricolage-grotesque"
            >
              Next generation AI assistant to create ads and help growth.
            </p>

            <div
              ref={heroInputRef}
              className="flex justify-center items-center max-w-xl mx-auto w-full relative"
            >
              <Input className="w-full px-6 py-4 rounded-md bg-white/30 text-zinc-900 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300 border-none text-2xl" placeholder="Email" />
              <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-linear-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
                Get Started
              </Button>
            </div>
            
          </div>
        
            <TextHoverEffect text="RYZE"  />
          
        
          <div ref={marqueeRef}>
            <Marquee />
          </div>
        </main>

        <div
          ref={section1Ref}
          className="min-h-screen mx-auto flex flex-col px-8 mt-12 bg-linear-to-b from-white to-amber-50 py-20"
        >
          <div
            ref={section1TitleRef}
            className="flex flex-col justify-start items-center mx-auto text-center mb-2 gap-4"
          >
            <h1 className="text-6xl font-bold text-zinc-900">
              We Excel in AI-Driven Growth
            </h1>
            <span className="text-lg font-medium text-zinc-500">
              Why just speak! when we can outperform?
            </span>
          </div>

          <div ref={section1ContentRef}>
            <TestimonialsSection />
          </div>
        </div>

        <div
          ref={section2Ref}
          className="min-h-screen bg-linear-to-b from-amber-50 to-[#ffddc2] px-8 py-4"
        >
          <div
            ref={section2TitleRef}
            className="flex flex-col justify-start items-center mx-auto text-center mb-2 gap-4"
          >
            <h1 className="text-6xl font-bold text-zinc-900">
              Know More About Us
            </h1>
            <span className="text-lg font-medium text-zinc-500">
              Discover how Ryze can transform your agency&apos;s growth trajectory.
            </span>
          </div>

          <div className="grid md:grid-cols-2 col-span-1 gap-12 items-start">
            <div
              ref={section2Col1Ref}
              className="flex flex-col justify-center items-start md:px-8 mt-10 mb-2 mx-auto w-full"
            >
              <h1 className="text-4xl font-bold px-8 mb-2 text-zinc-800">
                Autonomous AI Marketeers for Agencies
              </h1>
              <ul className="px-12 list-decimal gap-4 space-y-2 flex flex-col text-zinc-700">
                <li>
                  <span className="font-semibold text-zinc-800">
                    24/7 performance audits
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-zinc-800">
                    AI creative generation
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-zinc-800">
                    Suggests tweaks to improve ROAS
                  </span>
                </li>
              </ul>
              <div className="min-h-105 w-full flex items-center justify-center">
                <RecommendationsList />
              </div>
            </div>

            <div
              ref={section2Col2Ref}
              className="flex flex-col justify-center items-start md:px-8 mt-10 mb-2 mx-auto w-full"
            >
              <h1 className="text-6xl font-bold">
                Frequently Asked Question!
              </h1>
              <p className="font-medium text-zinc-600">
                These are most requested questions we often hear from our
                customers!
              </p>
              <div className="min-h-105 w-full flex items-center justify-center">
                <FAQ />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={section3Ref}
          className="h-auto mx-auto flex flex-col justify-center items-center px-8 bg-linear-to-b from-[#ffddc2] to-amber-50 py-20"
        >
          <div>
            <div
              ref={section3TitleRef}
              className="flex flex-col justify-start items-center mx-auto text-center mb-2 gap-4"
            >
              <h1 className="text-6xl font-bold text-zinc-900">
                Audit Your AD account instantly
              </h1>
              <span className="text-lg font-medium text-zinc-500">
                Just provide your email and feel the impact.
              </span>
            </div>

            <div
              ref={section3InputRef}
              className="flex justify-center items-center max-w-xl mx-auto w-full relative"
            >
              <Input className="w-full px-6 py-4 rounded-md bg-white/30 text-zinc-900 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300 border-none text-2xl" placeholder="Email" />
              <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-linear-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
                Get Started
              </Button>
            </div>
          </div>

          <div ref={section3StatsRef}>
            <StatsBanner />
          </div>
        </div>
      </div>
    </>
  );
}