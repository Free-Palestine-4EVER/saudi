"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, Cloud, Sparkles, Waves } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    setSubscriptionStatus("idle")

    try {
      // Simulate API call - replace with actual newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubscriptionStatus("success")
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => setSubscriptionStatus("idle"), 3000)
    } catch (error) {
      setSubscriptionStatus("error")
      setTimeout(() => setSubscriptionStatus("idle"), 3000)
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="relative overflow-hidden footer-gradient-bg">
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating clouds */}
        <div className="footer-cloud absolute top-10 left-10 opacity-10">
          <Cloud className="h-16 w-16 text-blue-300" />
        </div>
        <div className="footer-cloud absolute top-20 right-20 opacity-15">
          <Cloud className="h-12 w-12 text-blue-200" />
        </div>
        <div className="footer-cloud absolute bottom-32 left-1/4 opacity-10">
          <Cloud className="h-20 w-20 text-blue-100" />
        </div>

        {/* Sparkle effects */}
        <div className="footer-sparkle absolute top-16 left-1/3 opacity-20">
          <Sparkles className="h-6 w-6 text-blue-400" />
        </div>
        <div className="footer-sparkle absolute top-40 right-1/3 opacity-25">
          <Sparkles className="h-4 w-4 text-blue-300" />
        </div>
        <div className="footer-sparkle absolute bottom-20 left-2/3 opacity-20">
          <Sparkles className="h-5 w-5 text-blue-400" />
        </div>

        {/* Wave elements */}
        <div className="footer-wave absolute bottom-0 left-0 opacity-5">
          <Waves className="h-32 w-32 text-blue-200" />
        </div>
        <div className="footer-wave absolute bottom-0 right-0 opacity-5">
          <Waves className="h-24 w-24 text-blue-300" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="footer-glass-effect rounded-2xl p-6 shadow-xl">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/saudi-explorer-logo.png"
                alt="Saudi Explorer"
                className="h-14 w-auto md:h-18 drop-shadow-lg"
              />
            </Link>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              Your one-stop solution for unforgettable Saudi Arabia adventures. We handle everything from flights to
              accommodations, so you can focus on creating memories.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-500 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-500 hover:text-white hover:bg-blue-400 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-500 hover:text-white hover:bg-red-500 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="footer-glass-effect rounded-2xl p-6 shadow-xl">
            <h3 className="font-bold text-lg md:text-xl mb-6 text-gray-800 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tours"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/info/faq"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-glass-effect rounded-2xl p-6 shadow-xl">
            <h3 className="font-bold text-lg md:text-xl mb-6 text-gray-800 flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">
                  123 King Fahd Road, Riyadh, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <a
                  href="tel:+966123456789"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  +966 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-purple-600" />
                </div>
                <a
                  href="mailto:info@saudiexplorer.com"
                  className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  info@saudiexplorer.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-glass-effect rounded-2xl p-6 shadow-xl">
            <h3 className="font-bold text-lg md:text-xl mb-6 text-gray-800 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              Newsletter
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              Subscribe to receive special offers and travel inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubscribing}
                className="bg-white/80 border-gray-200 text-gray-800 placeholder:text-gray-500 h-12 rounded-xl shadow-inner focus:shadow-lg transition-all duration-300"
              />
              <Button
                type="submit"
                disabled={isSubscribing || !email}
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe Now"}
              </Button>
              {subscriptionStatus === "success" && (
                <p className="text-green-600 text-sm text-center font-medium">✅ Successfully subscribed! Thank you!</p>
              )}
              {subscriptionStatus === "error" && (
                <p className="text-red-600 text-sm text-center font-medium">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="footer-glass-effect rounded-2xl mt-12 p-6 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} Saudi Explorer. All rights reserved.
            </p>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link
                href="/terms"
                className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
