const stats = [
  { value: "Proven", label: "Win Rate", sub: "Verified since 2023" },
  { value: "$850K+", label: "Last 6 Months Profit", sub: "Combined member earnings" },
  { value: "$2.1M+", label: "Member Profits", sub: "Combined earnings" },
  { value: "800", label: "Active Members", sub: "Across the whole world" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-[#111] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#1a2e05_0%,_transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8E620] text-sm font-bold tracking-widest uppercase">
            Our Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Numbers Don&apos;t Lie
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent, verified results since 2023. Every pick tracked, every result published.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#C8E620]/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-[#C8E620] mb-2">
                {stat.value}
              </div>
              <div className="text-white font-bold text-lg">{stat.label}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
