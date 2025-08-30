"use client"

import {
  ChevronRight,
  Calendar,
  Check,
  Clock,
  Globe,
  Info,
  MapPin,
  Shield,
  Star,
  Users,
  Phone,
  Waves,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import BookingForm from "@/components/booking-form"
import BubbleButton from "@/components/bubble-button"
import { useState } from "react"
import { useCurrency } from "@/contexts/currency-context"

export default function RedSeaAdventurePage() {
  const tour = {
    title: "Red Sea Adventure",
    slug: "red-sea-adventure",
    duration: 6,
    price: 1899,
    rating: 4.9,
    reviews: 167,
    description:
      "Dive into the pristine waters of the Saudi Red Sea on this 6-day marine adventure. Explore vibrant coral reefs, encounter diverse marine life, and experience the untouched beauty of one of the world's most spectacular diving destinations.",
    highlights: [
      "World-class diving in pristine coral reefs",
      "Snorkeling with dolphins and whale sharks",
      "Island hopping to untouched beaches",
      "Professional PADI diving instruction",
      "Luxury beachfront resort accommodation",
      "Traditional fishing village visits",
      "Sunset sailing and water sports",
      "Marine conservation education programs",
    ],
    includes: [
      "5 nights luxury beachfront resort",
      "All meals and premium beverages",
      "Professional diving instructor and equipment",
      "Daily diving and snorkeling excursions",
      "Island hopping boat trips",
      "Water sports equipment and activities",
      "Marine life photography workshop",
      "All transfers and boat transportation",
    ],
    excludes: [
      "International flights to Jeddah",
      "PADI certification fees (if required)",
      "Travel insurance",
      "Personal diving equipment",
      "Spa treatments and wellness services",
      "Optional helicopter tours",
    ],
    images: [
      "/images/red-sea-diving.png",
      "/images/coral-reef.png",
      "/images/marine-life.png",
      "/images/beach-resort.png",
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
                  <span>Red Sea Coast, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Users className="h-4 w-4" />
                  <span>Max 10 divers</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Globe className="h-4 w-4" />
                  <span>English, Arabic</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] mb-4 md:mb-8 rounded-xl overflow-hidden shadow-lg">
              <div
                className={`absolute inset-0 animate-pulse bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-[length:400%_100%] ${loadedImages["hero"] ? "hidden" : "block"}`}
              />
              <Image
                src={tour.images[0] || "/placeholder.svg?height=600&width=1200&query=red+sea+diving+saudi+arabia"}
                alt={tour.title}
                fill
                className={`object-cover ${loadedImages["hero"] ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                onLoad={() => handleImageLoad("hero")}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Explore the Red Sea</h2>
                <p className="text-sm md:text-base text-white/90">Pristine waters and vibrant marine life await</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-sky-700">Marine Adventure Overview</h2>
                <p className="text-lg">{tour.description}</p>

                <div className="my-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl"></div>
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold mb-4 text-sky-700 flex items-center">
                      <Waves className="h-5 w-5 mr-2 text-blue-500" /> Marine Highlights
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
                  <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-sky-700">
                      <Check className="h-5 w-5 text-primary" />
                      Marine Package Includes
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
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book Marine Adventure</h3>
                  <p className="text-white/80">Dive into paradise!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-sky-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <BookingForm />

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-blue-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-medium">Small group diving experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">PADI certified instructors</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
                  <h3 className="font-bold text-xl">Diving Experts</h3>
                  <p className="text-white/80">Professional guidance</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Diving Hotline</div>
                        <a href="tel:+966-800-REDSEA" className="font-medium hover:underline text-sky-700">
                          +966-800-REDSEA
                        </a>
                      </div>
                    </div>

                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Speak to Dive Master</Link>
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
