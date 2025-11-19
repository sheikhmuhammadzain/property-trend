import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.png";

const Hero = () => {
  return (
    <section className="relative bg-[#F1EFED] text-[#1F1F1E] pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Main Title Area */}
          <div className="w-full max-w-5xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-area-extended tracking-[0.15em] text-[#1F1F1E] uppercase text-center">
              The Refined Report
            </h1>

            <div className="w-full h-px bg-[#D6D1CA]" />

            <p className="text-lg md:text-xl text-[#4B4944] max-w-3xl mx-auto font-light leading-relaxed px-4">
              A focused look at Houston's ultra-luxury market, providing data-driven insights on
              single-family homes and condominiums priced at $2M and above.
            </p>

            <div className="w-full h-px bg-[#D6D1CA]" />
          </div>



        </div>
      </div>
    </section>
  );
};

export default Hero;
