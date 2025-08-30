"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BubbleButton from "@/components/bubble-button"
import { useState } from "react"

export default function DestinationsPage() {
  const destinations = [
    {
      name: "AlUla",
      description: "Discover the ancient Nabataean city of Hegra and stunning rock formations",
      image: "/images/alula.jpg",
      slug: "alula",
    },
    {
      name: "Riyadh",
      description: "Explore Saudi Arabia's modern capital with its impressive skyline",
      image: "/images/riyadh.jpg",
      slug: "riyadh",
    },
    {
      name: "Jeddah",
      description: "Experience the historic Red Sea port and UNESCO World Heritage sites",
      image: "/images/jeddah.jpg",
      slug: "jeddah",
    },
    {
      name: "Diriyah",
      description: "Visit the birthplace of the Saudi state and UNESCO World Heritage site",
      image: "/images/diriyah.jpg",
      slug: "diriyah",
    },
    {
      name: "Edge of the World",
      description: "Marvel at the dramatic cliff formations and breathtaking desert views",
      image: "/images/edge-of-world.jpg",
      slug: "edge-of-world",
    },
    {
      name: "Red Sea Coast",
      description: "Dive into pristine waters and explore vibrant coral reefs",
      image: "/images/red-sea.jpg",
      slug: "red-sea",
    },
    {
      name: "Taif",
      description: "Discover the mountain city of roses and cool highland climate",
      image: "/images/taif.jpg",
      slug: "taif",
    },
    {
      name: "Abha",
      description: "Experience the green mountains and traditional villages of Asir",
      image: "/images/abha.jpg",
      slug: "abha",
    },
  ]

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>Destinations</span>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">Explore Saudi Arabia's Treasures</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            From ancient wonders to natural marvels, Saudi Arabia offers a diverse range of unforgettable destinations.
            Discover the magic of each unique location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Decide Where to Go?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Let our travel experts help you plan the perfect Saudi Arabia itinerary based on your interests, time, and
            budget.
          </p>
          <BubbleButton asChild size="lg">
            <Link href="/contact">Contact Our Travel Experts</Link>
          </BubbleButton>
        </div>
      </div>
    </main>
  )
}

function DestinationCard({ destination }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        {!isImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 bg-[length:400%_100%]" />
        )}
        <Image
          src={destination.image || "/placeholder.svg?height=300&width=400&query=saudi+arabia+destination"}
          alt={destination.name}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{destination.name}</h2>
          <p className="text-sm md:text-base text-white/90 mb-2 md:mb-4 line-clamp-2">{destination.description}</p>
          <span className="inline-flex items-center text-sm md:text-base text-white font-medium">
            Explore
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
