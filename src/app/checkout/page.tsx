"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const WHOP_CHECKOUT: Record<string, string> = {
  starter: "https://whop.com/tenniszone/starter-1month/",
  pro: "https://whop.com/tenniszone/pro-1month/",
  vip: "https://whop.com/tenniszone/vip-1month-2f/",
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = (searchParams.get("plan") || "Pro").toLowerCase();
  const href = WHOP_CHECKOUT[plan] || WHOP_CHECKOUT.pro;

  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 px-4 flex items-start justify-center">
      <div className="text-center">
        <p className="text-gray-400 mb-6">Redirecting to Whop checkout...</p>
        <a
          href={href}
          className="inline-flex items-center px-8 py-3.5 bg-[#C8E620] text-black font-bold rounded-full hover:bg-[#d4f026] transition-all"
        >
          Continue to checkout
        </a>
      </div>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
