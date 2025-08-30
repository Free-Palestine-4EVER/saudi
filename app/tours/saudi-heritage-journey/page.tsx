"use client"

import { ChevronRight, Calendar, Check, Clock, Globe, Info, MapPin, Shield, Star, Users, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import BookingForm from "@/components/booking-form"
import BubbleButton from "@/components/bubble-button"
import { useState } from "react"
import { useCurrency } from "@/contexts/currency-context"

export default function SaudiHeritageJourneyPage() {
  const tour = {
    title: "Saudi Heritage Journey",
    slug: "saudi-heritage-journey",
    duration: 7,
    price: 1699,
    rating: 4.9,
    reviews: 134,
    description:
      "Embark on a cultural odyssey through Saudi Arabia's most significant heritage sites. This 7-day journey takes you from the birthplace of the Saudi state in Diriyah to the ancient trading posts of AlUla, showcasing the Kingdom's rich history and cultural evolution.",
    highlights: [
      "Explore Diriyah UNESCO World Heritage Site",
      "Visit the National Museum and King Abdulaziz Historical Center",
      "Discover the ancient city of Hegra in AlUla",
      "Experience traditional Saudi architecture in At-Turaif",
      "Learn about the unification of Saudi Arabia",
      "Visit traditional souks and craft workshops",
      "Meet local artisans and cultural experts",
      "Enjoy authentic Saudi cuisine and hospitality",
    ],
    includes: [
      "6 nights in heritage hotels and luxury accommodations",
      "All meals featuring traditional Saudi cuisine",
      "Expert cultural historian guide",
      "All entrance fees to museums and heritage sites",
      "Traditional craft workshops and demonstrations",
      "Cultural performances and entertainment",
      "All transfers in luxury vehicles",
      "Welcome and farewell ceremonies",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal shopping and souvenirs",
      "Optional cultural activities",
      "Spa treatments",
      "Room service and minibar",
    ],
    images: [
      "/images/diriyah-heritage.png",
      "/images/national-museum.png",
      "/images/traditional-architecture.png",
      "/images/cultural-performance.png",
    ],
  }

  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const { formatPrice } = useCurrency()

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [imageKey]: true,
    }))
  }

  return (
    <main className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3" />
                <Link href="/tours" className="hover:underline">
                  Tours
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span>{tour.title}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{tour.title}</h1>
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{tour.duration} days</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Riyadh, Diriyah, AlUla</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Users className="h-4 w-4" />
                  <span>Max 14 travelers</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Globe className="h-4 w-4" />
                  <span>English, Arabic</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] mb-4 md:mb-8 rounded-xl overflow-hidden shadow-lg">
              <div
                className={`absolute inset-0 animate-pulse bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 bg-[length:400%_100%] ${loadedImages["hero"] ? "hidden" : "block"}`}
              />
              <Image
                src={tour.images[0] || "/placeholder.svg?height=600&width=1200&query=saudi+heritage+diriyah"}
                alt={tour.title}
                fill
                className={`object-cover ${loadedImages["hero"] ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                onLoad={() => handleImageLoad("hero")}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Discover Saudi Heritage</h2>
                <p className="text-sm md:text-base text-white/90">From ancient civilizations to modern kingdom</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-sky-700">Cultural Journey Overview</h2>
                <p className="text-lg">{tour.description}</p>

                <div className="my-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 rounded-xl"></div>
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold mb-4 text-sky-700 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-500" /> Cultural Highlights
                    </h3>
                    <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-b from-sky-50 to-white p-6 rounded-xl border border-sky-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-sky-700">
                      <Check className="h-5 w-5 text-primary" />
                      Cultural Experience Includes
                    </h3>
                    <ul className="space-y-3">
                      {tour.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 bg-white p-2 rounded-lg shadow-sm">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-700">
                      <Info className="h-5 w-5 text-gray-500" />
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.excludes.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600 bg-white p-2 rounded-lg shadow-sm"
                        >
                          <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="mb-6 border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book Heritage Tour</h3>
                  <p className="text-white/80">Cultural immersion awaits!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-sky-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <BookingForm />

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-sky-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-sky-500" />
                      <span className="text-sm font-medium">Small group cultural experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-sky-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Expert cultural guides included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
                  <h3 className="font-bold text-xl">Cultural Experts</h3>
                  <p className="text-white/80">Learn from the best</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Heritage Hotline</div>
                        <a href="tel:+966-800-HERITAGE" className="font-medium hover:underline text-sky-700">
                          +966-800-HERITAGE
                        </a>
                      </div>
                    </div>

                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Speak to Cultural Expert</Link>
                    </BubbleButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
