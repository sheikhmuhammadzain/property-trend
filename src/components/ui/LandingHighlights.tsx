import { Link } from "react-router-dom";
import { BarChart3, Layers, Radar, Sparkles, TrendingUp } from "lucide-react";

const insightCards = [
  {
    eyebrow: "Market momentum",
    title: "Upper-tier contract velocity",
    metric: "+18.4%",
    delta: "vs. trailing 30 days",
    description: "Pent-up demand in $1M–$2M bands is translating into faster contract cadence.",
  },
  {
    eyebrow: "Inventory pressure",
    title: "Luxury months of supply",
    metric: "3.2 mos",
    delta: "balanced market",
    description: "Sub–4 months of inventory keeps sellers in control inside core ZIPs.",
  },
  {
    eyebrow: "Pricing discipline",
    title: "List-to-close delta",
    metric: "-1.8%",
    delta: "tighter spreads",
    description: "Price reductions are clustering in the $3M+ bracket while entry luxury stays firm.",
  },
];

const valueProps = [
  {
    icon: Layers,
    title: "Segmented cohorts",
    description: "Nine price bands across SF + condo inventory keep comps apples-to-apples.",
  },
  {
    icon: Radar,
    title: "Signal over noise",
    description: "Filters out broad-market MLS clutter so luxury narratives stay sharp.",
  },
  {
    icon: BarChart3,
    title: "Narrative ready",
    description: "Exports and charts designed for client decks, investment briefings, and media.",
  },
  {
    icon: TrendingUp,
    title: "Live cadence",
    description: "Hourly refresh mirrors Houston MLS so inflection points surface fast.",
  },
];

const LandingHighlights = () => {
  return (
    <section className="bg-[#F1EFED] border-b border-[#D6D1CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 space-y-20">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          <div className="flex-1 space-y-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B8379]">
              This week’s pulse
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-[#1F1F1E] leading-tight tracking-tight">
              Market intelligence designed for advisors, developers, and data-forward buyers.
            </h2>
            <p className="text-lg text-[#4B4944] leading-relaxed">
              Quickly spot momentum, stress-test pricing strategies, and brief stakeholders with conviction. We surface the
              same context analysts compile manually—without the drag.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/charts"
              className="inline-flex items-center gap-2 rounded-none bg-[#1F1F1E] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:bg-[#3A3B40]"
            >
              Launch dashboard
              <Sparkles className="h-3 w-3" />
            </Link>
            <Link
              to="/users"
              className="inline-flex items-center gap-2 rounded-none border border-[#D6D1CA] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#4B4944] hover:border-[#8B8379] hover:text-[#1F1F1E] transition-all"
            >
              Request access
            </Link>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {insightCards.map((card) => (
            <article key={card.eyebrow} className="group relative border-t border-[#D6D1CA] pt-8 transition-all hover:border-[#8B8379]">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B8379] font-medium">
                  {card.eyebrow}
                </p>
                <h3 className="text-xl font-semibold text-[#1F1F1E] leading-snug">
                  {card.title}
                </h3>
                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-4xl font-bold text-[#1F1F1E] tracking-tight">
                    {card.metric}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B8379]">
                    {card.delta}
                  </span>
                </div>
                <p className="text-sm text-[#4B4944] leading-relaxed pt-2">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Value Props */}
        <div className="pt-12 border-t border-[#D6D1CA]">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex flex-col gap-4">
                <div className="h-10 w-10 rounded-full bg-[#E6E2DD] text-[#1F1F1E] flex items-center justify-center">
                  <prop.icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#1F1F1E] uppercase tracking-wide">
                    {prop.title}
                  </p>
                  <p className="text-sm text-[#4B4944] leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingHighlights;
