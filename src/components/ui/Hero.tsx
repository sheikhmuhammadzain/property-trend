import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "@/assets/Logo.png";

const statHighlights = [
  { label: "Median SF Price", value: "$1.28M", detail: "+6.3% YoY" },
  { label: "Luxury Cohorts", value: "14", detail: "Houston micro-markets" },
  { label: "Price Bands", value: "9", detail: "$500k to $5M+" },
  { label: "Refresh Rate", value: "< 60m", detail: "Live MLS mirror" },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Verified MLS signal",
    description: "Direct Houston MLS feed filtered for luxury inventory.",
  },
  {
    icon: Clock,
    title: "Hourly ingestion",
    description: "Snapshots roll every 60 minutes to keep pricing current.",
  },
  {
    icon: Sparkles,
    title: "Analyst-ready",
    description: "Structured for investment decks, client updates, and strategy memos.",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F3] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(230,227,220,0.7))]" />
      <div className="absolute -top-20 -right-32 h-72 w-72 rounded-full bg-white/70 blur-[120px]" />
      <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#E6DFD3] blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex-1 space-y-10">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-slate-500">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white font-semibold">
                RR
              </span>
              <span>Market intelligence studio</span>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="The Refined Report logo"
                  className="h-12 w-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
                />
                <p className="text-[11px] uppercase tracking-[0.5em] text-slate-500">Houston • Single-Family • Condo</p>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight leading-snug text-slate-900 max-w-3xl">
                A precision lens on Houston’s ultra-luxury real estate—translating complex market data into clear,
                actionable intelligence.
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-3xl italic">
                Methodology based on MLS data for Single-Family Homes and Condominiums in Houston, updated hourly.
              </p>

              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-slate-500 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
                Focused on Houston’s established luxury neighborhoods
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/charts"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold tracking-wide transition hover:-translate-y-0.5"
              >
                Explore market data
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold tracking-wide text-slate-800 transition hover:border-slate-500"
              >
                Review methodology
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statHighlights.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[420px] rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,15,10,0.08)]">
            <div className="mb-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Reliability Index</p>
              <p className="text-3xl font-semibold text-slate-900">99.2%</p>
              <p className="text-sm text-slate-500">
                Weighted confidence score blending MLS fidelity, refresh cadence, and cohort clarity.
              </p>
            </div>

            <div className="space-y-5">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <point.icon className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                    <p className="text-sm text-slate-500">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 text-sm text-slate-600">
              “We obsess over removing noise so analysts can narrate the market with conviction.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
