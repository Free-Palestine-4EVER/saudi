// Define supported currencies with their symbols and exchange rates (relative to USD)
export type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD" | "JOD" | "SAR"

export interface Currency {
  code: CurrencyCode
  name: string
  symbol: string
  rate: number // Exchange rate relative to USD
  position: "before" | "after" // Symbol position
}

export const currencies: Record<CurrencyCode, Currency> = {
  USD: {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    rate: 1,
    position: "before",
  },
  EUR: {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    rate: 0.92, // 1 USD = 0.92 EUR
    position: "before",
  },
  GBP: {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    rate: 0.79, // 1 USD = 0.79 GBP
    position: "before",
  },
  JPY: {
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    rate: 150.59, // 1 USD = 150.59 JPY
    position: "before",
  },
  AUD: {
    code: "AUD",
    name: "Australian Dollar",
    symbol: "A$",
    rate: 1.52, // 1 USD = 1.52 AUD
    position: "before",
  },
  CAD: {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    rate: 1.37, // 1 USD = 1.37 CAD
    position: "before",
  },
  JOD: {
    code: "JOD",
    name: "Jordanian Dinar",
    symbol: "JD",
    rate: 0.71, // 1 USD = 0.71 JOD
    position: "before",
  },
  SAR: {
    code: "SAR",
    name: "Saudi Riyal",
    symbol: "SR",
    rate: 3.75, // 1 USD = 3.75 SAR
    position: "before",
  },
}

// Convert price from USD to target currency
export function convertPrice(priceInUSD: number, targetCurrency: CurrencyCode): number {
  const currency = currencies[targetCurrency]
  return priceInUSD * currency.rate
}

// Format price with currency symbol
export function formatPrice(price: number, currencyCode: CurrencyCode): string {
  const currency = currencies[currencyCode]

  // Round to 2 decimal places for most currencies, 0 for JPY
  const roundedPrice = currencyCode === "JPY" ? Math.round(price) : Math.round(price * 100) / 100

  // Format the number with appropriate decimal places
  const formattedNumber =
    currencyCode === "JPY"
      ? roundedPrice.toLocaleString()
      : roundedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  // Return formatted price with currency symbol in correct position
  return currency.position === "before"
    ? `${currency.symbol}${formattedNumber}`
    : `${formattedNumber} ${currency.symbol}`
}
