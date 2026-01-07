"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const transitionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
   
      isFirstRender.current = false;
      gsap.set(transitionRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(contentRef.current, { opacity: 1, filter: "blur(0px)" });
      return;
    }

    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

  
      gsap.set(contentRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        y: 30,
      });

      gsap.set(transitionRef.current, {
        opacity: 1,
        filter: "blur(20px)",
        pointerEvents: "all",
      });

      tl.to(transitionRef.current, {
        opacity: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          if (transitionRef.current) {
            transitionRef.current.style.pointerEvents = "none";
          }
        },
      });

      tl.to(
        contentRef.current,
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
 
      <div
        ref={transitionRef}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-orange-100 to-white"
        style={{
          opacity: 0,
          filter: "blur(0px)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={contentRef}
        style={{
          opacity: 1,
          filter: "blur(0px)",
        }}
      >
        {children}
      </div>
    </>
  );
}