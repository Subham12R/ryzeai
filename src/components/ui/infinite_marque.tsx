"use client";

import Image from "next/image";

export default function Marquee() {
  const logos = [
    { src: "/logo/1.png", alt: "Logo 1" },
    { src: "/logo/2.png", alt: "Logo 2" },
    { src: "/logo/3.png", alt: "Logo 3" },
    { src: "/logo/4.png", alt: "Logo 4" },
    { src: "/logo/5.png", alt: "Logo 5" },
    { src: "/logo/6.png", alt: "Logo 6" },
    { src: "/logo/7.png", alt: "Logo 7" },
    { src: "/logo/8.png", alt: "Logo 8" },
    { src: "/logo/9.png", alt: "Logo 9" },
  ];

  return (
    <div className="overflow-hidden w-full py-8 bg-transparent">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="relative w-full flex items-center">
       
        <div className="flex marquee gap-16 whitespace-nowrap min-w-[200%]">
  
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="object-contain h-12 w-24"
            />
          ))}

       
          {logos.map((logo, index) => (
            <Image
              key={`dup-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="object-contain h-12 w-24"
            />
          ))}

        </div>
      </div>
    </div>
  );
}
