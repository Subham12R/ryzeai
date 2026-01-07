"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./button";


const navlinks = [
    { href: "/case", label: "Case Studies" },
    { href: "/about", label: "About Us" },
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

        return (
            <nav
                className={`flex items-center px-4 py-4 sticky w-full z-50 transition-all duration-500 top-0 ease-in-out 
                    ${scrolled
                        ? " backdrop-blur-3xl shadow-lg bg-black/20 "
                        : "bg-[#e6894f]"}
                `}
            
            >
                <div className="px-4  w-full flex justify-start items-center text-center">

                    <Link href={"/"} className="text-4xl font-bold tracking-tighter font-bricolage-grotesque text-white ">Ryze</Link>
                    <div className="flex items-center justify-center ml-auto">
                        {navlinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="mx-2 text-sm text-zinc-100 font-medium hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-300 ease-in-out "
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="ml-4 bg-gradient-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-xl transition-all  duration-300 ease-linear">Get Started</Button>
                        
                    </div>
                </div>
            </nav>
        );
    
}