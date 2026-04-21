export default function CTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a2e05_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Ready to Start{" "}
          <span className="text-[#C8E620]">Winning?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join 12,000+ members who trust TennisZone for their tennis betting picks.
          Start your 7-day free trial today — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-10 py-4 bg-[#C8E620] text-black font-bold text-lg rounded-full hover:bg-[#d4f026] transition-all hover:scale-105 shadow-lg shadow-[#C8E620]/20"
          >
            Claim Your Free Trial
          </a>
          <a
            href="mailto:support@tenniszone.xyz"
            className="px-10 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-full hover:border-[#C8E620]/50 hover:text-[#C8E620] transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
