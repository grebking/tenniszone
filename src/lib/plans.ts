export const plans = [
  {
    name: "Pro",
    price: "60",
    period: "/month",
    desc: "Our most popular plan for serious bettors.",
    features: [
      "Daily picks (8-12 per week)",
      "Telegram group delivery",
      "Live betting alerts",
      "Monthly performance report",
      "1-on-1 Telegram support",
      "Money-back guarantee",
    ],
    cta: "Get Started",
    popular: false,
    whopPlanId: "plan_5qowsZXj3eOxu",
    availability: { text: "46/300", color: "green" },
  },
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
    popular: true,
    whopPlanId: "plan_akaR1lpSKr2L5",
    availability: { text: "242/500", color: "green" },
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
    availability: { text: "0/50", color: "red" },
  },
] as const;

export type PlanName = (typeof plans)[number]["name"];

export function getPlanByName(name: string | null) {
  const match = plans.find(
    (plan) => plan.name.toLowerCase() === name?.toLowerCase()
  );
  return match ?? plans.find((plan) => plan.name === "Pro") ?? plans[0];
}
