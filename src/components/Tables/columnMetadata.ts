export type MarketColumnKey =
  | 'priceRange'
  | 'pending'
  | 'active'
  | 'closed'
  | 'new'
  | 'changed'
  | 'dom'
  | 'lastMonth'
  | 'lastQuarter'
  | 'lastYear'

interface ColumnMetadata {
  title: string
  description: string
}

export const COLUMN_METADATA: Record<MarketColumnKey, ColumnMetadata> = {
  priceRange: {
    title: 'Price Range',
    description:
      'Refined price bands inside Houston’s established luxury neighborhoods so you can compare behavior at $1M-$2M versus $3M+ without broader-market noise.',
  },
  pending: {
    title: 'Pending / Signed Contract',
    description:
      'Properties that went under contract during the selected month—your clearest read on current demand and market velocity.',
  },
  active: {
    title: 'Total Active Listings',
    description:
      'Inventory snapshot of single-family homes and condominiums still available above $1M when the dashboard refreshed.',
  },
  closed: {
    title: 'Sold & Closed',
    description:
      'Transactions that reached the closing table during the month, validating where buyers ultimately committed.',
  },
  new: {
    title: 'New Listings',
    description:
      'Homes and condos that debuted this month, highlighting fresh supply entering the upper-tier pipeline.',
  },
  changed: {
    title: 'Price Adjustments',
    description:
      'Listings that recorded at least one price change—helpful for spotting resistance levels in each band.',
  },
  dom: {
    title: 'Days on Market (DOM)',
    description:
      'Median marketing time for closed sales only—measured from list to contract to remove languishing actives.',
  },
  lastMonth: {
    title: 'Last Month',
    description:
      'Month-over-month comparison showing how each metric shifted versus the prior refresh.',
  },
  lastQuarter: {
    title: 'Last Quarter',
    description:
      'Three-month lookback that smooths volatility and signals emerging momentum or softness.',
  },
  lastYear: {
    title: 'Last Year',
    description:
      'Year-over-year perspective (List-to-Close variance) to benchmark today’s performance against last year’s luxury cycle.',
  },
}

