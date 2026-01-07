export default function Footer() {
    return (
        <footer className="w-full bg-black py-12 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Logo on top for mobile */}
                <div className="w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <div className="text-[80px] md:text-[120px] leading-none font-bold text-white tracking-tight mb-6">
                        <h1>Ryze</h1>
                    </div>
                    {/* Contact & Socials below logo on mobile */}
                    <div className="w-full flex flex-col gap-8">
                        <div>
                            <h3 className="text-zinc-500 text-xs font-mono mb-4 tracking-wider">CONTACT:</h3>
                            <a 
                                href="mailto:hello@ryze.com" 
                                className="inline-flex items-center gap-2 text-zinc-300 text-sm font-mono hover:text-white transition-colors border border-zinc-800 px-3 py-1.5 hover:border-zinc-600 w-full md:w-fit"
                            >
                                EMAIL ↗
                            </a>
                        </div>
                        <div>
                            <h3 className="text-zinc-500 text-xs font-mono mb-4 tracking-wider">SOCIALS:</h3>
                            <div className="flex flex-col gap-2">
                                {['TWITTER', 'INSTAGRAM', 'LINKEDIN', 'GITHUB'].map((social) => (
                                    <a 
                                        key={social}
                                        href="#" 
                                        className="inline-flex items-center gap-2 text-zinc-300 text-sm font-mono hover:text-white transition-colors border border-zinc-800 px-3 py-1.5 hover:border-zinc-600 w-full md:w-fit"
                                    >
                                        {social} ↗
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Info Box */}
                <div className="w-full md:w-auto text-center md:text-right space-y-6 flex flex-col items-center md:items-end">
                    <div className="border border-zinc-800 bg-zinc-950 p-6 space-y-3 w-full md:w-80">
                        <p className="text-zinc-400 text-xs font-mono tracking-wider">
                            The next generation AI assistant.
                        </p>
                        <p className="text-zinc-400 text-xs font-mono tracking-wider">
                            Helping Your Agency Grow Faster
                        </p>
                        <p className="text-zinc-500 text-xs font-mono tracking-wider mt-4">
                            EST. 2025
                        </p>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-zinc-600 text-xs font-mono tracking-wider">
                    ALL RIGHTS RESERVED.
                </p>
                <p className="text-zinc-600 text-xs font-mono tracking-wider">
                    DESIGN & DEV BY Subham12r
                </p>
            </div>
        </footer>
    );
}