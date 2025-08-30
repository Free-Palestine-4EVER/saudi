import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayoutWrapper from "./client-layout-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saudi Explorer | Your Ultimate Saudi Arabia Travel Experience",
  description:
    "Discover the wonders of Saudi Arabia with our expertly crafted tour packages. From AlUla to the Red Sea, experience the best of Saudi Arabia with our all-inclusive travel services.",
  openGraph: {
    title: "Saudi Explorer | Your Ultimate Saudi Arabia Travel Experience",
    description:
      "Discover the wonders of Saudi Arabia with our expertly crafted tour packages. From AlUla to the Red Sea, experience the best of Saudi Arabia with our all-inclusive travel services.",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "Saudi Explorer",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Saudi Explorer - Discover the wonders of Saudi Arabia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi Explorer | Your Ultimate Saudi Arabia Travel Experience",
    description:
      "Discover the wonders of Saudi Arabia with our expertly crafted tour packages. From AlUla to the Red Sea, experience the best of Saudi Arabia with our all-inclusive travel services.",
    images: ["/images/social-share.jpeg"],
  },
  // Additional metadata for better SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}