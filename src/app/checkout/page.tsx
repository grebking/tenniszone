"use client";

import { getPlanByName } from "@/lib/plans";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

const EmbeddedCheckout = dynamic(() => import("@/components/EmbeddedCheckout"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center text-gray-400">
      Loading checkout…
    </div>
  ),
});

function CheckoutStatus({
  status,
  planName,
}: {
  status: string | null;
  planName: string;
}) {
  if (status === "succeeded" || status === "success") {
    return (
      <div className="rounded-2xl bg-white/5 border border-[#C8E620]/30 p-8 text-center">
        <h2 className="text-2xl font-black text-white mb-2">You&apos;re in</h2>
        <p className="text-gray-400 mb-6">
          Your {planName} membership is confirmed. Check your email for the receipt
          and access details.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-[#C8E620] text-black font-bold rounded-full hover:bg-[#d4f026] transition-all"
        >
          Back to home
        </a>
      </div>
    );
  }

  if (status === "failed" || status === "canceled" || status === "error") {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Payment did not go through</h2>
        <p className="text-gray-400">
          No charge was made. You can try again with another payment method below.
        </p>
      </div>
    );
  }

  return null;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const selected = getPlanByName(searchParams.get("plan"));
  const status = searchParams.get("status");

  const returnUrl = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    if (window.location.protocol !== "https:") return undefined;
    const url = new URL("/checkout", window.location.origin);
    url.searchParams.set("plan", selected.name);
    return url.toString();
  }, [selected.name]);

  const showCheckout = status !== "succeeded" && status !== "success";

  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 px-4 flex items-start justify-center">
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <p className="text-[#C8E620] text-sm font-bold tracking-widest uppercase mb-2">
            Checkout
          </p>
          <h1 className="text-3xl font-black text-white">{selected.name} plan</h1>
          <p className="text-gray-400 mt-2">
            ${selected.price}
            {selected.period} · cancel anytime
          </p>
        </div>

        <CheckoutStatus status={status} planName={selected.name} />

        {showCheckout && (
          <div className="rounded-2xl overflow-hidden bg-white p-2 sm:p-4">
            <EmbeddedCheckout
              key={selected.whopPlanId}
              planId={selected.whopPlanId}
              returnUrl={returnUrl}
            />
          </div>
        )}

        <p className="text-center text-gray-500 text-sm mt-6">
          Need help?{" "}
          <a
            href="https://t.me/andrewcormic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8E620] hover:underline"
          >
            Message us on Telegram
          </a>
        </p>
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
