const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    desc: "Pick a subscription that fits your bankroll. From casual bettors to high rollers, we have a plan for everyone.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Receive Daily Picks",
    desc: "Get expert picks delivered straight to your phone via SMS and email before every major match. Never miss a play.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Place Your Bets",
    desc: "Use any legal US sportsbook — DraftKings, FanDuel, BetMGM, or your preferred platform. We provide the edge.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Stack Your Profits",
    desc: "Watch your bankroll grow with our data-driven approach. Average members see 20%+ monthly ROI on their wagers.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8E620] text-sm font-bold tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Four Simple Steps
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From sign-up to profit in minutes. No complicated systems, no guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C8E620]/30 transition-all group"
            >
              <span className="absolute -top-4 -right-2 text-6xl font-black text-white/5 group-hover:text-[#C8E620]/10 transition-colors">
                {step.num}
              </span>
              <div className="w-14 h-14 rounded-xl bg-[#C8E620]/10 text-[#C8E620] flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
