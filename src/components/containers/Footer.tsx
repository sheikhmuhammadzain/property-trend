import React from 'react'
import { Link } from 'react-router-dom'
import Footer_Icon from "@/assets/landing-footer.png"

const Footer = () => {
  return (
    <footer className="bg-[#F7F6F3] border-t border-white/60 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-center">
        <img src={Footer_Icon} alt="Footer decorative mark" className="mx-auto w-auto max-w-[240px]" />

        <div className="space-y-1 text-gray-600 text-sm">
          <p className="text-xs uppercase tracking-[0.4em]">Mark Menendez</p>
          <p>Douglas Elliman Real Estate</p>
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
