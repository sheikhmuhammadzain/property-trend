import { Link } from "react-router-dom";
import { BarChart3, Layers, Radar, Sparkles, TrendingUp } from "lucide-react";

const insightCards = [
  {
    eyebrow: "Market momentum",
    title: "Upper-tier contract velocity",
    metric: "+18.4%",
    delta: "vs. trailing 30 days",
    description: "Pent-up demand in $1M–$2M bands is translating into faster contract cadence.",
    accent: "bg-[#1A1B1F] text-white",
  },
  {
    eyebrow: "Inventory pressure",
    title: "Luxury months of supply",
    metric: "3.2 mos",
    delta: "balanced market",
    description: "Sub–4 months of inventory keeps sellers in control inside core ZIPs.",
    accent: "bg-white text-[#1A1B1F]",
  },
  {
    eyebrow: "Pricing discipline",
    title: "List-to-close delta",
    metric: "-1.8%",
    delta: "tighter spreads",
    description: "Price reductions are clustering in the $3M+ bracket while entry luxury stays firm.",
    accent: "bg-[#EFEAE4] text-[#1A1B1F]",
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
    <section className="bg-[#F8F7F5] border-y border-[#E3DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#6C6861]">This week’s pulse</p>
            <h2 className="font-area-extended text-3xl md:text-4xl text-[#1F1F1E] leading-tight">
              Market intelligence designed for advisors, developers, and data-forward buyers.
            </h2>
            <p className="text-base md:text-lg text-[#474641] max-w-2xl">
              Quickly spot momentum, stress-test pricing strategies, and brief stakeholders with conviction. We surface the
              same context analysts compile manually—without the drag.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/charts"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1B1F] text-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] shadow-lg shadow-black/10 hover:-translate-y-0.5 transition"
            >
              Launch dashboard
              <Sparkles className="h-4 w-4" />
            </Link>
            <Link
              to="/users"
              className="inline-flex items-center gap-2 rounded-full border border-[#C0B7AE] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B4944] hover:border-[#8B8379]"
            >
              Request access
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insightCards.map((card) => (
            <article key={card.eyebrow} className={`${card.accent} rounded-3xl p-6 shadow-[0_25px_60px_rgba(15,14,12,0.08)]`}>
              <p className="text-[10px] uppercase tracking-[0.45em] opacity-70">{card.eyebrow}</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{card.title}</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold font-area-extended">{card.metric}</span>
                <span className="text-xs uppercase tracking-[0.4em] opacity-70">{card.delta}</span>
              </div>
              <p className="mt-4 text-sm/relaxed opacity-90">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="rounded-[32px] border border-[#E3DED7] bg-white/70 p-8 shadow-[0_18px_45px_rgba(25,25,23,0.08)]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#F1ECE5] text-[#1F1F1E] flex items-center justify-center">
                  <prop.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1F1F1E]">{prop.title}</p>
                  <p className="text-sm text-[#5C5B56]">{prop.description}</p>
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
