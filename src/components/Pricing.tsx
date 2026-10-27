"use client";

import { useState, useEffect } from "react";
import { plans } from "@/lib/plans";
import EmbeddedCheckout from "./EmbeddedCheckout";

export default function Pricing() {
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (showCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showCheckout]);
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
              {plan.name !== "Starter" && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -top-20 -left-20 w-[150%] h-[150%] bg-gradient-to-br from-red-500/40 via-red-500/10 to-transparent transform -rotate-45 origin-top-left" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="8" opacity="0.7" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="red" strokeWidth="8" opacity="0.7" />
                  </svg>
                </div>
              )}
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

              {plan.name === "Starter" ? (
                <button
                  onClick={() => setShowCheckout(true)}
                  className="block w-full text-center py-3.5 rounded-full font-bold text-lg transition-all bg-[#C8E620] text-black hover:bg-[#d4f026] relative overflow-hidden"
                >
                  <span className="relative z-10">{plan.cta}</span>
                </button>
              ) : (
                <div
                  className={`block w-full text-center py-3.5 rounded-full font-bold text-lg transition-all relative overflow-hidden cursor-not-allowed opacity-60 ${
                    plan.popular
                      ? "bg-[#C8E620] text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
                  <span className="relative z-10">{plan.cta}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          All prices in USD. Secure checkout via Whop. Money-back guarantee on all plans.
        </p>
      </div>

      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 transition-opacity duration-200 ${showCheckout ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowCheckout(false)}>
        <div className="relative w-full max-w-lg bg-[#111] rounded-2xl p-6 border border-white/10 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setShowCheckout(false)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl font-bold transition-colors"
          >
            ✕
          </button>
          {showCheckout && <EmbeddedCheckout planId={plans.find((p) => p.name === "Starter")?.whopPlanId || ""} />}
        </div>
      </div>
    </section>
  );
}
