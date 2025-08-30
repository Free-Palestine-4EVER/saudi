"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CurrencyProvider } from "@/contexts/currency-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import AnimatedBackgroundWrapper from "@/components/animated-background-wrapper"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // <CHANGE> Added loading state management
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // <CHANGE> Prevent scrolling during loading
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CurrencyProvider>
            {/* <CHANGE> Added loading screen that shows before main content */}
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

            <AnimatedBackgroundWrapper />
            <Header />
            <div className="pt-0">{children}</div>
            <Footer />
            <Toaster />
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
