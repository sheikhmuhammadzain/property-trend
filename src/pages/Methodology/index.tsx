import { Database, Download, Filter, Layers, LineChart } from "lucide-react"

import Navbar from "@/components/containers/Navbar"
import Footer from "@/components/containers/Footer"
import { Button } from "@/components/ui/button"
import methodologyDoc from "@/assets/Methodology.docx"

const flowSteps = [
  {
    title: "MLS Feed",
    description: "Secure pull from Houston MLS focusing on single-family homes and condominiums above $1M.",
    icon: Database,
  },
  {
    title: "Filtering",
    description: "Limit to the city’s established luxury neighborhoods to remove broad-market volatility.",
    icon: Filter,
  },
  {
    title: "Segmentation",
    description: "Price-band categorization for apples-to-apples comparisons ($1M-$2M, $2M-$3M, $3M+).",
    icon: Layers,
  },
  {
    title: "Refined Report Dashboard",
    description: "Hourly aggregation into the tables, charts, and commentary you see across the platform.",
    icon: LineChart,
  },
]

const Methodology = () => {
  return (
    <div className="min-h-screen bg-[#F1EFED] text-slate-900">
      <Navbar />
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <header className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Methodology & Transparency</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Market Summary Methodology</h1>
          <p className="text-base text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · Data Sources: Houston MLS, HAR historical archives
          </p>
        </header>

        <section className="bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-3xl p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Scope & Intent</h2>
          <p className="text-gray-700 leading-relaxed">
            The Refined Report isolates Houston’s established luxury neighborhoods—River Oaks, Tanglewood, Memorial, West University, The Museum District, Uptown high-rises, and similar enclaves. By filtering for price point ($1M+) and geography, we eliminate the noise created by the total MLS so advisors can strategize around the actual ultra-luxury marketplace rather than the averages found on HAR.com or consumer portals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each metric is refreshed hourly to reflect listing and contract changes in near real time. Monthly and quarterly comparisons rely on frozen snapshots that ensure continuity (once a month closes, that record stays intact, even if HAR later reclassifies a listing).
          </p>
        </section>

        <section className="bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-3xl p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.08)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Download full transparency kit</p>
            <p className="text-base text-gray-700 mt-2">
              Get the detailed methodology document (DOCX) that outlines sourcing, normalization, and QA steps line by line.
            </p>
          </div>
          <Button asChild className="bg-black text-white hover:bg-gray-900 px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <a href={methodologyDoc} download>
              <Download className="h-4 w-4" />
              Download Methodology (DOCX)
            </a>
          </Button>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-3xl p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.08)] space-y-4">
            <h3 className="text-xl font-semibold">Metric Definitions</h3>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <li><strong>New Listings:</strong> Homes and condos launched during the active month.</li>
              <li><strong>Pending / Signed Contract:</strong> Properties placed under contract during the month (cancelations removed weekly).</li>
              <li><strong>Sold / Closed:</strong> Finalized transactions recorded in MLS closing logs.</li>
              <li><strong>DOM:</strong> Median days on market for closed listings only.</li>
              <li><strong>Last Month / Quarter / Year:</strong> Comparative lookbacks that benchmark momentum across different time horizons.</li>
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-3xl p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.08)] space-y-4">
            <h3 className="text-xl font-semibold">Data Integrity Notes</h3>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <li>Listings with incomplete pricing data or outside the defined neighborhoods are excluded.</li>
              <li>Duplicate entries (e.g., relists under a new MLS number) are deduplicated before aggregation.</li>
              <li>Price-band segmentation is recalibrated quarterly to reflect the evolving luxury ceiling.</li>
              <li>Manual spot checks compare Refined Report outputs to internal brokerage dashboards each Friday.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 space-y-6 shadow-[4px_4px_0px_rgba(0,0,0,0.08)] border border-gray-200/80">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">How the data flows</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">From MLS ingest to the Refined Report</h3>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Each stage is audited hourly. Follow the path below to understand exactly how information becomes
              presentation-ready intelligence.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {flowSteps.map((step, index) => {
                const Icon = step.icon
                const isLast = index === flowSteps.length - 1
                return (
                  <div key={step.title} className="relative text-center flex flex-col items-center gap-3">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-[0_10px_30px_rgba(15,15,10,0.08)]">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Step {index + 1}</p>
                      <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {!isLast && (
                      <div className="hidden lg:flex absolute top-8 right-[-34px] items-center gap-1">
                        <span className="inline-block h-[2px] w-8 bg-gradient-to-r from-gray-200 to-gray-400" />
                        <span className="inline-block h-3 w-3 rotate-45 border-r border-t border-gray-400" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="lg:hidden flex flex-col items-center gap-6 mt-6">
              {flowSteps.map((step, index) => (
                <div key={`${step.title}-connector`} className="flex flex-col items-center">
                  {index !== 0 && (
                    <div className="flex flex-col items-center text-gray-300">
                      <span className="h-6 w-px bg-gray-200" />
                      <span className="block h-3 w-3 rotate-45 border-r border-b border-gray-300 -mt-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 shadow-[2px_2px_0px_rgba(0,0,0,0.08)] space-y-3 text-sm text-gray-700">
          <p>
            Have questions about the methodology or need programmatic access to the data? Email{" "}
            <a href="mailto:hello@refinedreport.com" className="underline underline-offset-4 font-semibold">
              hello@refinedreport.com
            </a>{" "}
            for a briefing kit.
          </p>
          <p>
            Media, institutional investors, and development teams frequently cite this report because it pairs MLS verification with a qualitative understanding of Houston’s upper-tier enclaves.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Methodology

