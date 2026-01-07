"use client";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { MouseEvent } from "react";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function TransitionLink({ 
  href, 
  children, 
  className,
  ...props 
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Create overlay element
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 z-[9999] bg-gradient-to-br from-orange-100 to-white";
    overlay.style.opacity = "0";
    overlay.style.filter = "blur(0px)";
    overlay.style.pointerEvents = "all";
    document.body.appendChild(overlay);

    // Get current page content
    const content = document.querySelector("body > div");

    // Create timeline
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    // Animate overlay in with blur
    tl.to(overlay, {
      opacity: 1,
      filter: "blur(20px)",
      duration: 0.6,
      ease: "power2.inOut",
    });

    // Blur and fade out current content
    if (content) {
      tl.to(
        content,
        {
          opacity: 0.7,
          filter: "blur(10px)",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      );
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleTransition} 
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

// Hook version for programmatic navigation
export function usePageTransition() {
  const router = useRouter();

  const transitionTo = (href: string) => {
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 z-[9999] bg-gradient-to-br from-orange-100 to-white";
    overlay.style.opacity = "0";
    overlay.style.filter = "blur(0px)";
    document.body.appendChild(overlay);

    const content = document.querySelector("body > div");

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    tl.to(overlay, {
      opacity: 1,
      filter: "blur(20px)",
      duration: 0.6,
      ease: "power2.inOut",
    });

    if (content) {
      tl.to(
        content,
        {
          opacity: 0.7,
          filter: "blur(10px)",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      );
    }
  };

  return { transitionTo };
}