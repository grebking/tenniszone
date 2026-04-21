const stats = [
  { value: "Proven", label: "Win Rate", sub: "Verified since 2023" },
  { value: "2,400+", label: "Winning Picks", sub: "Across all tournaments" },
  { value: "$2.1M+", label: "Member Profits", sub: "Combined earnings" },
  { value: "12K+", label: "Active Members", sub: "Across the whole world" },
];

const recentPicks = [
  { match: "Rune vs Berrettini", pick: "Berrettini ML", odds: "12.00", result: "W", event: "ATP Barcelona" },
  { match: "Paolini vs Andreeva", pick: "Andreeva ML", odds: "11.50", result: "W", event: "WTA Stuttgart" },
  { match: "Sinner vs Tsitsipas", pick: "Sinner ML", odds: "1.72", result: "W", event: "ATP Barcelona" },
  { match: "Sabalenka vs Keys", pick: "Sabalenka -3.5", odds: "1.68", result: "W", event: "WTA Stuttgart" },
  { match: "Alcaraz vs Auger-Aliassime", pick: "Over 22.5 Games", odds: "1.75", result: "W", event: "ATP Barcelona" },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Recent picks table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">Recent Winning Picks</h3>
            <span className="text-[#C8E620] text-sm font-semibold">Last 5 picks</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-sm border-b border-white/5">
                  <th className="px-6 py-3 font-medium">Match</th>
                  <th className="px-6 py-3 font-medium">Event</th>
                  <th className="px-6 py-3 font-medium">Pick</th>
                  <th className="px-6 py-3 font-medium">Odds</th>
                  <th className="px-6 py-3 font-medium">Result</th>
                </tr>
              </thead>
              <tbody>
                {recentPicks.map((pick, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-white font-medium">{pick.match}</td>
                    <td className="px-6 py-4 text-gray-400">{pick.event}</td>
                    <td className="px-6 py-4 text-white">{pick.pick}</td>
                    <td className="px-6 py-4 text-gray-300">{pick.odds}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold">
                        {pick.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
