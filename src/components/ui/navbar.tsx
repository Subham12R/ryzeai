"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import gsap from "gsap";
import { div } from "motion/react-client";

const navlinks = [
    { href: "/case", label: "Case Studies" },
    { href: "/about", label: "About Us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const overlayRef = useRef(null);

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

    // GSAP sidebar expand from left
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            gsap.fromTo(
                dropdownRef.current,
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    // Outside click to close (fix)
    useEffect(() => {
        if (!isOpen) return;
        function handleClick(e) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                overlayRef.current &&
                overlayRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen]);

    return (
        <div>
        <nav
            className={`flex items-center px-4 py-4 sticky w-full z-50 transition-all duration-500 top-0 ease-in-out 
                ${scrolled ? "backdrop-blur-3xl shadow-lg bg-black/20" : "bg-[#e6894f]"}
            `}
        >
            <div className="px-4 w-full flex justify-between items-center">
                <Link href="/" className="text-4xl font-bold tracking-tighter font-bricolage-grotesque text-white">Ryze</Link>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center ml-auto">
                    {navlinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="mx-2 text-sm text-zinc-100 font-medium hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-300 ease-in-out "
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="ml-4 bg-gradient-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-xl transition-all duration-300 ease-linear">Get Started</Button>
                </div>
                {/* Mobile menu button */}
                <button
                    className="md:hidden flex items-center justify-center p-1 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile sidebar dropdown */}
         
        </nav>
           {isOpen && (
                <>
                    <div
                        ref={overlayRef}
                        className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm md:hidden"
                        aria-hidden="true"
                    />
                    <div
                        ref={dropdownRef}
                        className="fixed top-0 left-0 h-full w-4/5 max-w-xs backdrop-blur-xl px-8 shadow-2xl z-50 flex flex-col items-start justify-start text-start pt-20 gap-6  translate-x-0 "
                        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                    >
                        <button
                            className="absolute top-6 right-6 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-all duration-200 z-50"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {navlinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-2xl font-bold text-white font-bricolage-grotesque hover:bg-white/10 px-4 py-3 rounded-md w-full transition-all duration-200 tracking-tight"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="mt-8 px-8 w-full text-lg font-bold bg-gradient-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-xl transition-all duration-300 ease-linear shadow-lg" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                </>
            )}
           </div>
    );
}