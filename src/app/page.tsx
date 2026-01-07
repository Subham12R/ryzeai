import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/navbar";
import Marquee from "@/components/ui/infinite_marque";


export default function Home() {
  return (
    <>
    
    <main className="min-h-screen bg-gradient-to-b  from-[#e6894f]  to-white  items-center pt-0">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 px-8 text-center mt-20 ">
        <h1 className="text-7xl font-bold text-white mb-2 font-bricolage-grotesque leading-tight">
          Let AI Elevate Your <span className="">Agency</span>
        </h1>
        <p className="text-4xl font-semibold text-white max-w-4xl mb-10 font-bricolage-grotesque">
          Next generation AI assistant to create ads and help growth.
        </p>

        <div className="flex justify-center items-center max-w-xl mx-auto w-full relative">
          <Input className="w-[100%] px-6 py-4 rounded-md bg-white/30 text-zinc-900 placeholder:text-white/70 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300  border-none text-2xl" placeholder="Email" />
          <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-gradient-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
            Get Started
          </Button>
        </div>
        </div>


    
          <TextHoverEffect text="RYZE" />
    </main>
      <Marquee />
    
      <div className="min-h-screen mx-auto flex px-8  mt-12  bg-gradient-to-b from-white to-amber-50 py-20">
        <div className="flex flex-col justify-start items-center mx-auto text-start">
           <h1 className="text-6xl font-bold text-zinc-900">Why US?</h1>
          <span className="text-lg font-medium text-zinc-500">Why just speak! when we can outperform? </span>
        </div>

        
      </div>
    </>
  );
}
