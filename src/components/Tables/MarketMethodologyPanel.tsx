import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MethodologyDoc from "@/assets/Methodology.docx"

const MarketMethodologyPanel = () => {
  return (
    <div className="mb-12">
      <Accordion type="single" collapsible className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
        <AccordionItem value="market-methodology" className="border-none">
          <AccordionTrigger className="flex flex-col items-start gap-1 px-6 py-4 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Market Summary Methodology
            </span>
            <span className="text-sm text-gray-800 font-medium">
              Data reflects monthly market activity for Single-Family Homes and Condominiums priced above $1M.
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 text-sm text-gray-700 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>"New Listings"</strong> = properties that came to market this month.</li>
              <li><strong>"Pending"</strong> = properties under contract during the selected month.</li>
              <li><strong>"Sold"</strong> = closed transactions this month.</li>
              <li><strong>"DOM"</strong> = median days on market for closed sales only.</li>
              <li><strong>"Last Month / Quarter / Year"</strong> = comparative lookback metrics.</li>
            </ul>
            <p className="mt-4 text-sm">
              Data sourced from Houston MLS; differences from HAR.com reflect narrower property filters, price banding, and snapshot timing.
            </p>
            <p className="mt-4 text-xs italic text-gray-500">
              For a full explanation of how The Refined Report compiles and validates its data,{" "}
              <a
                href={MethodologyDoc}
                download="Methodology.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-gray-700 transition-colors"
              >
                download the full methodology PDF
              </a>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default MarketMethodologyPanel

