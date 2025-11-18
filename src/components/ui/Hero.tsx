import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Logo from "@/assets/Logo.png";

const statHighlights = [
  { label: "Median SF Price", value: "$1.28M", detail: "+6.3% YoY" },
  { label: "Luxury Cohorts", value: "14", detail: "Houston micro-markets" },
  { label: "Price Bands", value: "9", detail: "$500k to $5M+" },
  { label: "Refresh Rate", value: "< 60m", detail: "Live MLS mirror" },
];


const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F3] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(230,227,220,0.7))]" />
      <div className="absolute -top-20 -right-32 h-72 w-72 rounded-full bg-white/70 blur-[120px]" />
      <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#E6DFD3] blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col gap-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl space-y-10">
            <div className="flex items-center justify-center gap-3 text-[11px] tracking-[0.35em] uppercase text-slate-500">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white font-semibold">
                RR
              </span>
              <span>Market intelligence studio</span>
            </div>

            <div className="space-y-8">
              <h1>
                <Link
                  to="/"
                  className="block text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight leading-snug text-slate-900"
                >
                  A precision lens on Houston's ultra-luxury real estatetranslating complex market data into clear,
                  actionable intelligence.
                </Link>
              </h1>

              <p className="text-base md:text-lg text-slate-600 italic">
                Methodology based on MLS data for Single-Family Homes and Condominiums in Houston, updated hourly.
              </p>

              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-slate-500 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
                Focused on Houston's established luxury neighborhoods
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
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

            <div className="flex items-center justify-center gap-3 pt-6">
              <img
                src={Logo}
                alt="The Refined Report logo"
                className="h-12 w-auto"
              />
              <p className="text-[11px] uppercase tracking-[0.5em] text-slate-500">Houston • Single-Family • Condo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
