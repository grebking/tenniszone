"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "Pro";
  const price = searchParams.get("price") || "99";

  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 px-4 flex items-start justify-center">
      <div className="w-full max-w-lg relative">
        {/* Blurred Stripe-like checkout form */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* The blurred form behind */}
          <div className="bg-white rounded-2xl p-8 filter blur-[6px] pointer-events-none select-none">
            {/* Fake Stripe header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#635BFF] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">TennisZone</div>
                  <div className="text-gray-500 text-sm">Subscribe to {plan}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">${price}.00</div>
                <div className="text-gray-500 text-sm">per month</div>
              </div>
            </div>

            {/* Fake form fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 flex items-center">
                  <span className="text-gray-400">you@example.com</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card information</label>
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <div className="w-full h-11 bg-white px-3 flex items-center justify-between border-b border-gray-300">
                    <span className="text-gray-400">1234 1234 1234 1234</span>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 rounded bg-blue-600" />
                      <div className="w-8 h-5 rounded bg-red-500" />
                      <div className="w-8 h-5 rounded bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2 h-11 bg-white px-3 flex items-center border-r border-gray-300">
                      <span className="text-gray-400">MM / YY</span>
                    </div>
                    <div className="w-1/2 h-11 bg-white px-3 flex items-center">
                      <span className="text-gray-400">CVC</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
                <div className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 flex items-center">
                  <span className="text-gray-400">John Smith</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country or region</label>
                <div className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 flex items-center justify-between">
                  <span className="text-gray-400">United States</span>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>

              <button className="w-full h-12 bg-[#635BFF] text-white font-semibold rounded-md mt-4">
                Subscribe
              </button>

              <p className="text-center text-gray-400 text-xs mt-2">
                Powered by <span className="font-bold">stripe</span>
              </p>
            </div>
          </div>

          {/* Overlay with "Out of Service" */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-2xl">
            <div className="bg-[#111] border border-white/10 rounded-2xl px-10 py-8 text-center max-w-sm mx-4 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-white mb-2">Out of Service</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Online payments are currently unavailable. To purchase any plan or if you have any questions, please contact us directly.
              </p>
              <a
                href="https://t.me/andrewcormic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8E620] text-black font-bold rounded-full hover:bg-[#d4f026] transition-all hover:scale-105 text-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                DM on Telegram
              </a>
              <p className="text-gray-500 text-sm mt-4">
                t.me/andrewcormic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
