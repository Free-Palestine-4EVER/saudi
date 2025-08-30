"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type CurrencyCode, currencies, convertPrice, formatPrice } from "@/utils/currency"

interface CurrencyContextType {
  currency: CurrencyCode
  setCurrency: (currency: CurrencyCode) => void
  convertPrice: (priceInUSD: number) => number
  formatPrice: (priceInUSD: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Default to USD, but try to get from localStorage on client
  const [currency, setCurrency] = useState<CurrencyCode>("USD")

  // Initialize from localStorage on client side
  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency") as CurrencyCode | null
    if (savedCurrency && currencies[savedCurrency]) {
      setCurrency(savedCurrency)
    }
  }, [])

  // Save to localStorage when currency changes
  useEffect(() => {
    localStorage.setItem("currency", currency)
  }, [currency])

  // Convert price from USD to current currency
  const convert = (priceInUSD: number) => {
    return convertPrice(priceInUSD, currency)
  }

  // Format price with current currency symbol
  const format = (priceInUSD: number) => {
    const convertedPrice = convert(priceInUSD)
    return formatPrice(convertedPrice, currency)
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice: convert,
        formatPrice: format,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

// Custom hook to use the currency context
export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
