import Navbar from "@/components/ui/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import Marquee from "@/components/ui/infinite_marque";
import { CaseStudies } from "@/components/ui/carousel";
import { Insights } from "@/components/ui/insights";

export default function CasePage() {
    return (
        <div className="w-full min-h-screen  bg-linear-to-b  from-[#e6894f]  to-white">
            <Navbar />

            <div className="flex flex-col items-center justify-center flex-1 px-8 text-center mt-20">
            <h1
              className="text-8xl font-bold text-white mb-2 max-w-6xl"
            >
               Top brands improve ROAS with Ryze
            </h1>
            <p
              className="text-2xl font-semibold text-white max-w-4xl mb-10 font-bricolage-grotesque"
            >
              Join thousands of brands simplifying ad management with AI
            </p>

            <div
              className="flex justify-center items-center max-w-xl mx-auto w-full relative"
            >
              <Input className="w-full px-6 py-4 rounded-md bg-white/30 text-zinc-900 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300 border-none text-2xl" placeholder="Email" />
              <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-linear-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
                Get Started
              </Button>
            </div>
          </div>

          <div >
            <TextHoverEffect text="RYZE" />
          </div>
          <div >
            <Marquee />
          </div>


            <div className="min-h-screen mt-20 pb-20">

              <CaseStudies />
              <Insights />
            </div>
        </div>
    );
}