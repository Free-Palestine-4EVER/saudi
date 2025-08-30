"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BubbleButton from "@/components/bubble-button"

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      name: "AlUla",
      description: "Ancient Nabataean city with UNESCO World Heritage sites",
      image: "/images/alula-hegra.png",
      duration: "2-3 days",
      highlights: ["Hegra tombs", "Elephant Rock", "Old Town"],
      visitors: "50k+ annually",
      slug: "alula",
    },
    {
      id: 2,
      name: "Riyadh",
      description: "Modern capital city with rich history and culture",
      image: "/images/riyadh-skyline.png",
      duration: "2-4 days",
      highlights: ["Kingdom Tower", "Diriyah", "National Museum"],
      visitors: "100k+ annually",
      slug: "riyadh",
    },
    {
      id: 3,
      name: "Jeddah",
      description: "Historic Red Sea port with UNESCO Al-Balad district",
      image: "/images/jeddah-balad.png",
      duration: "2-3 days",
      highlights: ["Al-Balad", "Red Sea", "Corniche"],
      visitors: "75k+ annually",
      slug: "jeddah",
    },
    {
      id: 4,
      name: "Edge of the World",
      description: "Dramatic cliff formations at Tuwaiq Escarpment",
      image: "/images/edge-of-world.png",
      duration: "1 day",
      highlights: ["Hiking trails", "Desert views", "Photography"],
      visitors: "25k+ annually",
      slug: "edge-of-world",
    },
    {
      id: 5,
      name: "Taif",
      description: "Mountain city famous for roses and cool climate",
      image: "/images/taif-mountains.png",
      duration: "1-2 days",
      highlights: ["Rose farms", "Cable car", "Mountain views"],
      visitors: "30k+ annually",
      slug: "taif",
    },
    {
      id: 6,
      name: "Abha",
      description: "Asir Mountains with traditional villages",
      image: "/images/abha-mountains.png",
      duration: "2-3 days",
      highlights: ["Mountain hiking", "Traditional villages", "Cool climate"],
      visitors: "20k+ annually",
      slug: "abha",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">Featured Destinations</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sky-800">Discover Saudi Arabia's Wonders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient archaeological sites to modern cities, explore the diverse landscapes and rich heritage of
            Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <BubbleButton asChild variant="outline" size="lg">
            <Link href="/destinations">View All Destinations</Link>
          </BubbleButton>
        </div>
      </div>
    </section>
  )
}

function DestinationCard({ destination }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 bg-blue-100">
        {!isImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-[length:400%_100%]" />
        )}

        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className={`object-cover ${isImageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setIsImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
          <p className="text-white/90 text-sm">{destination.description}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{destination.visitors}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.map((highlight, index) => (
            <Badge key={index} variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
              {highlight}
            </Badge>
          ))}
        </div>

        <BubbleButton asChild className="w-full">
          <Link href={`/destinations/${destination.slug}`}>
            <MapPin className="h-4 w-4 mr-2" />
            Explore Destination
          </Link>
        </BubbleButton>
      </CardContent>
    </Card>
  )
}
