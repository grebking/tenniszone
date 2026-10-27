export const plans = [
  {
    name: "Starter",
    price: "32",
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
    whopPlanId: "plan_akaR1lpSKr2L5",
  },
  {
    name: "Pro",
    price: "60",
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
    popular: false,
    whopPlanId: "plan_5qowsZXj3eOxu",
  },
  {
    name: "VIP",
    price: "124",
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
    whopPlanId: "plan_3KpPFBcljUcse",
  },
] as const;

export type PlanName = (typeof plans)[number]["name"];

export function getPlanByName(name: string | null) {
  const match = plans.find(
    (plan) => plan.name.toLowerCase() === name?.toLowerCase()
  );
  return match ?? plans.find((plan) => plan.name === "Pro") ?? plans[0];
}
