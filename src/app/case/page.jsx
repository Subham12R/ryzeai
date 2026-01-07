import Navbar from "@/components/ui/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CasePage() {
    return (
        <div className="w-full h-screen  bg-linear-to-b  from-[#e6894f]  to-white">
            <Navbar />

            <div className="px-8 max-w-6xl py-8 flex w-full flex-col">

                <h1 className="text-6xl font-bold text-zinc-900">Know About our Work.</h1>
                <span className="font-medium text-lg text-zinc-600">
                    We have helped numerous agencies to optimize their ad accounts and boost their revenue <br /> through our AI-powered solutions. Here are some of our success stories.
                </span>

                    <div className="flex justify-center items-center max-w-xl mx-auto w-full relative">
                          <Input className="w-full px-6 py-4 rounded-md bg-white/30 text-zinc-900 focus:outline-none focus:shadow-none focus:bg-white focus:placeholder:text-zinc-700 transition-all ease-linear duration-300  border-none text-2xl" placeholder="Email" />
                          <Button className="w-[30%] absolute right-0 top-1/2 -translate-y-1/2 h-full px-8 bg-linear-to-r from-[#1a1a1a] via-[#222222] to-[#282828] hover:bg-gray-500 cursor-pointer active:scale-95 rounded-md transition-all duration-300 ease-linear text-white font-semibold shadow-lg text-md">
                            Get Started
                          </Button>
                        </div>
            </div>


        </div>
    );
}