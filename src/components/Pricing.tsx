"use client";

import { useState, useEffect, useMemo } from "react";
import { plans } from "@/lib/plans";
import EmbeddedCheckout from "./EmbeddedCheckout";

export default function Pricing() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const returnUrl = useMemo(() => {
    if (typeof window === "undefined" || window.location.protocol !== "https:") return undefined;
    const url = new URL("/checkout", window.location.origin);
    url.searchParams.set("plan", selectedPlan === "plan_akaR1lpSKr2L5" ? "Starter" : "Pro");
    return url.toString();
  }, [selectedPlan]);

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
  useEffect(() => {
    if (!showCheckout) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowCheckout(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showCheckout]);

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#111]" />

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

              {"availability" in plan && (
                <div className="mb-4 text-center">
                  <span
                    className={`text-sm font-bold ${
                      plan.availability.color === "red" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {plan.availability.text}
                  </span>
                </div>
              )}

              {(plan.name === "Starter" || plan.name === "Pro") ? (
                <button
                  onClick={() => {
                    setSelectedPlan(plan.whopPlanId);
                    setShowCheckout(true);
                  }}
                  className="block w-full text-center py-3.5 rounded-full font-bold text-lg transition-all bg-[#C8E620] text-black hover:bg-[#d4f026] relative overflow-hidden"
                >
                  <span className="relative z-10">{plan.cta}</span>
                </button>
              ) : (
                <div
                  className={`block w-full text-center py-3.5 rounded-full font-bold text-lg transition-all cursor-not-allowed opacity-60 ${
                    plan.popular
                      ? "bg-[#C8E620] text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {plan.cta}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          All prices in USD. Secure checkout via Whop. Money-back guarantee on all plans.
        </p>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 p-3 sm:p-6 transition-opacity duration-200 ${showCheckout ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setShowCheckout(false)}
        aria-hidden={!showCheckout}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Secure Whop checkout"
          className="relative my-auto w-full max-w-lg rounded-2xl bg-white p-2 sm:p-4 shadow-2xl max-h-[94vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowCheckout(false)}
            aria-label="Close checkout"
            className="sticky top-0 z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl font-bold text-white transition-colors hover:bg-gray-700"
          >
            ✕
          </button>
          {showCheckout && selectedPlan && (
            <EmbeddedCheckout key={selectedPlan} planId={selectedPlan} returnUrl={returnUrl} />
          )}
        </div>
      </div>
    </section>
  );
}
