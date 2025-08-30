"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { CurrencyProvider } from "@/contexts/currency-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import AnimatedBackgroundWrapper from "@/components/animated-background-wrapper"
import LoadingScreen from "@/components/loading-screen"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <CurrencyProvider>
        {/* Loading screen that shows before main content */}
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

        <AnimatedBackgroundWrapper />
        <Header />
        <div className="pt-0">{children}</div>
        <Footer />
        <Toaster />
        <FloatingWhatsApp />
      </CurrencyProvider>
    </ThemeProvider>
  )
}
