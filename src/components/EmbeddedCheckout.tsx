"use client";

import { loadWhop } from "@whop/elements";
import { Checkout, CheckoutElement, WhopElements } from "@whop/elements-react";

const elements = loadWhop();

export default function EmbeddedCheckout({
  planId,
  returnUrl,
}: {
  planId: string;
  returnUrl?: string;
}) {
  return (
    <WhopElements elements={elements}>
      <Checkout plan={planId} returnUrl={returnUrl}>
        <CheckoutElement />
      </Checkout>
    </WhopElements>
  );
}
