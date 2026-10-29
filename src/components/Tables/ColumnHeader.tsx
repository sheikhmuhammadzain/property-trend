import { Info } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { COLUMN_METADATA, MarketColumnKey } from './columnMetadata'

interface ColumnHeaderProps {
  columnKey: MarketColumnKey
  label: string
}

export const ColumnHeader = ({ columnKey, label }: ColumnHeaderProps) => {
  const meta = COLUMN_METADATA[columnKey]

  if (!meta) {
    return <span className="uppercase tracking-wide">{label}</span>
  }

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <span
          tabIndex={0}
          className="inline-flex items-center justify-center gap-1 text-inherit uppercase tracking-wide cursor-help focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
        >
          {label}
          <Info className="h-3.5 w-3.5 text-slate-600 hover:text-slate-900 transition-colors" />
        </span>
      </TooltipTrigger>
      <TooltipContent 
        side="top"
        className="!max-w-xs !bg-white !border !border-gray-300 !shadow-xl !z-[9999] !text-slate-800 !px-4 !py-3"
        sideOffset={8}
      >
        <p className="!text-sm !font-semibold !text-slate-900 !mb-2">{meta.title}</p>
        <p className="!text-xs !leading-relaxed !text-slate-700">{meta.description}</p>
      </TooltipContent>
    </Tooltip>
  )
}

