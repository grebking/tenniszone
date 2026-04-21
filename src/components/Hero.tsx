export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a2e05_0%,_#0a0a0a_60%)]" />

      {/* Floating tennis balls decoration */}
      <div className="absolute top-32 left-[10%] w-20 h-20 rounded-full bg-[#C8E620]/10 blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-[15%] w-32 h-32 rounded-full bg-[#C8E620]/5 blur-2xl animate-pulse" />
      <div className="absolute top-1/2 right-[8%] w-16 h-16 rounded-full bg-[#C8E620]/8 blur-lg animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8E620]/10 border border-[#C8E620]/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C8E620] animate-pulse" />
          <span className="text-[#C8E620] text-sm font-semibold tracking-wide uppercase">
            Live picks available now
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
          Win Big With
          <br />
          <span className="text-[#C8E620]">Expert Tennis</span>
          <br />
          Picks
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          America&apos;s #1 tennis betting advisory. Our team of analysts delivers
          data-driven picks across ATP, WTA, and Grand Slam events with a
          proven win rate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#pricing"
            className="px-8 py-4 bg-[#C8E620] text-black font-bold text-lg rounded-full hover:bg-[#d4f026] transition-all hover:scale-105 shadow-lg shadow-[#C8E620]/20"
          >
            Start Winning Today
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-full hover:border-[#C8E620]/50 hover:text-[#C8E620] transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C8E620]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C8E620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <span>12,000+ Members</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C8E620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Verified Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}
