const testimonials = [
  {
    name: "Mike Johnson",
    location: "New York, NY",
    text: "I've been a member for 8 months now and my bankroll has grown 340%. The picks are incredibly well-researched. TennisZone changed how I bet on tennis.",
    rating: 5,
    plan: "VIP Member",
  },
  {
    name: "Sarah Williams",
    location: "Los Angeles, CA",
    text: "Went from losing money on tennis bets to consistent profits. The US Open picks alone paid for a full year subscription. Absolutely worth every penny.",
    rating: 5,
    plan: "Pro Member",
  },
  {
    name: "David Chen",
    location: "Chicago, IL",
    text: "The analysis is top notch. It's not just picks — they explain the reasoning behind every play. I've learned so much about tennis betting strategy.",
    rating: 5,
    plan: "Pro Member",
  },
  {
    name: "James Rodriguez",
    location: "Miami, FL",
    text: "Best investment I've made. The VIP Telegram group is insane — live picks during matches have been absolute money. 5 stars isn't enough.",
    rating: 5,
    plan: "VIP Member",
  },
  {
    name: "Emily Thompson",
    location: "Houston, TX",
    text: "Started with the Starter plan and upgraded to Pro within 2 weeks. The daily picks are consistent and the win rate speaks for itself.",
    rating: 5,
    plan: "Pro Member",
  },
  {
    name: "Chris Anderson",
    location: "Phoenix, AZ",
    text: "As a former college tennis player, I appreciate the depth of analysis. These guys really know the sport. My ROI has been incredible since joining.",
    rating: 5,
    plan: "VIP Member",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8E620] text-sm font-bold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            What Our Members Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied members across the United States.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C8E620]/20 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#C8E620]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.location}</div>
                </div>
                <span className="text-xs font-semibold text-[#C8E620] bg-[#C8E620]/10 px-3 py-1 rounded-full">
                  {t.plan}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
