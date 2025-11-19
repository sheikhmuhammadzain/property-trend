import React from 'react'
import { Link } from 'react-router-dom'
import Footer_Icon from "@/assets/landing-footer.png"
import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#F7F6F3] border-t border-white/60 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-center">
        <img src={Footer_Icon} alt="Footer decorative mark" className="mx-auto w-auto max-w-[240px]" />

        <div className="flex flex-col items-center gap-3">
          <img src={Logo} alt="Logo" className="h-8 w-auto opacity-90" />
          <div className="text-center">
            <h3 className="text-sm md:text-base font-normal tracking-[0.15em] text-[#4B4944] uppercase">
              Mark Menendez
            </h3>
            <p className="text-[10px] tracking-[0.2em] text-[#8B8379] uppercase mt-1">
              At Douglas Elliman Real Estate
            </p>
          </div>
        </div>

        <div className="space-y-3 bg-white border border-gray-200 rounded-3xl px-6 py-5 shadow-[0_12px_30px_rgba(15,15,10,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Data Integrity Statement
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The Refined Report aggregates verified Houston MLS data filtered for Single-Family and Condominium properties only. Figures auto-refresh monthly. Discrepancies with HAR.com reflect property-type alignment, timing of extraction, and active-status definitions.
          </p>
        </div>

        <div className="text-sm text-gray-700">
          <Link to="/methodology" className="underline underline-offset-4 hover:text-black transition-colors">
            Methodology & Transparency
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
