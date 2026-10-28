"use client";

import { loadWhop } from "@whop/elements";
import { Checkout, CheckoutElement, WhopElements } from "@whop/elements-react";

export default function EmbeddedCheckout({
  planId,
  returnUrl,
}: {
  planId: string;
  returnUrl?: string;
}) {
  const elements = loadWhop();

  return (
    <WhopElements elements={elements}>
      <Checkout plan={planId} returnUrl={returnUrl}>
        <CheckoutElement />
      </Checkout>
    </WhopElements>
  );
}
