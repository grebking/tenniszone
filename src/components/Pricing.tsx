const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/month",
    desc: "Perfect for bettors who want daily action.",
    features: [
      "Daily picks (5-7 per week)",
      "Telegram group delivery",
      "Basic match analysis",
      "Monthly performance report",
      "Money-back guarantee",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "99",
    period: "/month",
    desc: "Our most popular plan for serious bettors.",
    features: [
      "Daily picks (8-12 per week)",
      "Telegram group delivery",
      "In-depth match breakdowns",
      "Live betting alerts",
      "Bankroll management tips",
      "Monthly performance report",
      "Money-back guarantee",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "VIP",
    price: "249",
    period: "/month",
    desc: "Maximum edge for high-volume bettors.",
    features: [
      "All Pro features",
      "15+ picks per week",
      "1-on-1 Telegram support",
      "Pre-match & live picks",
      "Exclusive high-confidence plays",
      "Custom bankroll strategy",
      "Early access to picks",
      "Money-back guarantee",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a2e05_0%,_transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8E620] text-sm font-bold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Invest in Winning
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your style. Cancel anytime, no questions asked.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all ${
                plan.popular
                  ? "bg-[#C8E620]/5 border-[#C8E620]/40 scale-105 shadow-2xl shadow-[#C8E620]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C8E620] text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-gray-500 text-lg">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-300">
                    <svg
                      className="w-5 h-5 text-[#C8E620] mt-0.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`/checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.price}`}
                className={`block w-full text-center py-3.5 rounded-full font-bold text-lg transition-all ${
                  plan.popular
                    ? "bg-[#C8E620] text-black hover:bg-[#d4f026]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          All prices in USD. Secure payment via Stripe. Money-back guarantee on all plans.
        </p>
      </div>
    </section>
  );
}
