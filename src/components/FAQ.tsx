"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I receive my picks?",
    a: "Picks are delivered via email and SMS (Pro & VIP plans). You'll receive them 2-4 hours before match start, giving you plenty of time to place your bets on any legal US sportsbook.",
  },
  {
    q: "Which sportsbooks can I use?",
    a: "You can use any legal US sportsbook — DraftKings, FanDuel, BetMGM, Caesars, PointsBet, and more. We provide picks with American odds so you can place them anywhere.",
  },
  {
    q: "What is your win rate?",
    a: "Our verified win rate is 67% since 2019, tracked and documented across all picks. We publish monthly transparency reports so you can verify our results independently.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. All plans are month-to-month with no long-term commitment. Cancel through your dashboard anytime before your next billing cycle — no questions asked.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes! All plans come with a 7-day free trial. VIP members also get a 30-day money-back guarantee. If you're not profitable in your first month on VIP, we'll refund you in full.",
  },
  {
    q: "What tournaments do you cover?",
    a: "We cover all major tennis events including ATP Tour, WTA Tour, Grand Slams (Australian Open, French Open, Wimbledon, US Open), ATP Masters 1000, and select Challenger events.",
  },
  {
    q: "Is sports betting legal in my state?",
    a: "Sports betting is legal in 30+ US states. We recommend checking your local state laws. Our service provides analysis and picks — you are responsible for compliance with local regulations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#111]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8E620] text-sm font-bold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Got Questions?
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#C8E620] shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
