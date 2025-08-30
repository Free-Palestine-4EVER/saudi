"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const slideshowItems = [
  // Tours
  {
    id: "tour-1",
    type: "tour",
    title: "Saudi Arabia 5 Days - History & Culture",
    description: "Explore ancient Nabataean tombs and Saudi heritage",
    image: "/images/saudi-5d-history-culture.jpg",
    link: "/tours/saudi-5d-history-culture",
    price: "$1,899",
    category: "Cultural",
  },
  {
    id: "tour-2",
    type: "tour",
    title: "Saudi Arabia 7 Days - Adventure & Hiking",
    description: "Multi-region adventure with desert activities",
    image: "/images/saudi-7d-adventure-hiking.jpg",
    link: "/tours/saudi-7d-adventure-hiking",
    price: "$2,999",
    category: "Adventure",
  },
  {
    id: "tour-3",
    type: "tour",
    title: "Saudi Arabia 10 Days - Ultimate Adventure",
    description: "Ultimate active adventure across Saudi Arabia",
    image: "/images/saudi-10d-ultimate-adventure.png",
    link: "/tours/saudi-10d-ultimate-adventure",
    price: "$4,499",
    category: "Adventure",
  },
  // Events
  {
    id: "event-1",
    type: "event",
    title: "SOUNDSTORM 25",
    description: "Flagship mega-festival (EDM, hip-hop, pop)",
    image: "/music-festival-stage-lights.png",
    link: "/events/10",
    price: "From $200",
    category: "Music",
  },
  {
    id: "event-2",
    type: "event",
    title: "AZIMUTH AlUla 2025",
    description: "Boutique desert music/art festival",
    image: "/desert-music-festival-alula.png",
    link: "/events/2",
    price: "$1,899",
    category: "Music",
  },
  {
    id: "event-3",
    type: "event",
    title: "Formula 1 Saudi Arabian Grand Prix 2025",
    description: "High-speed racing in Jeddah",
    image: "/formula-1-racing-jeddah-night.png",
    link: "/events/15",
    price: "From $150",
    category: "Sports",
  },
  // Cities
  {
    id: "city-1",
    type: "city",
    title: "Riyadh",
    description: "Modern capital with rich history",
    image: "/riyadh-skyline-modern-city.png",
    link: "/destinations/riyadh",
    price: "Explore",
    category: "Capital",
  },
  {
    id: "city-2",
    type: "city",
    title: "AlUla",
    description: "Ancient Nabataean heritage site",
    image: "/alula-hegra-ancient-tombs.png",
    link: "/destinations/alula",
    price: "Discover",
    category: "Heritage",
  },
  {
    id: "city-3",
    type: "city",
    title: "Jeddah",
    description: "Historic Red Sea port city",
    image: "/jeddah-old-town-balad-historic.png",
    link: "/destinations/jeddah",
    price: "Visit",
    category: "Historic",
  },
  {
    id: "city-4",
    type: "city",
    title: "Edge of the World",
    description: "Dramatic cliff formations and views",
    image: "/edge-of-the-world-cliff-saudi-arabia.png",
    link: "/destinations/edge-of-world",
    price: "Adventure",
    category: "Nature",
  },
]

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "cultural":
    case "heritage":
    case "historic":
      return "bg-purple-500"
    case "adventure":
    case "nature":
      return "bg-orange-500"
    case "music":
      return "bg-pink-500"
    case "sports":
      return "bg-red-500"
    case "capital":
      return "bg-blue-500"
    default:
      return "bg-sand-500"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "tour":
      return "bg-sand-600"
    case "event":
      return "bg-purple-600"
    case "city":
      return "bg-blue-600"
    default:
      return "bg-gray-600"
  }
}

export default function DualSlideshow() {
  // Duplicate items for seamless loop
  const row1Items = [...slideshowItems, ...slideshowItems]
  const row2Items = [...slideshowItems.slice().reverse(), ...slideshowItems.slice().reverse()]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-sand-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200">Featured Experiences</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">Discover Saudi Arabia's Best</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient heritage sites to modern adventures, explore our curated selection of tours and events.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Row 1 - Sliding Right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 w-fit animate-slide-right">
            {row1Items.map((item, index) => (
              <SlideCard
                key={`row1-${index}`}
                item={item}
                getCategoryColor={getCategoryColor}
                getTypeColor={getTypeColor}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Sliding Left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 w-fit animate-slide-left">
            {row2Items.map((item, index) => (
              <SlideCard
                key={`row2-${index}`}
                item={item}
                getCategoryColor={getCategoryColor}
                getTypeColor={getTypeColor}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/destinations">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg transition-all duration-300 hover:scale-105">
              Explore Destinations
            </Button>
          </Link>
          <Link href="/tours">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg transition-all duration-300 hover:scale-105">
              View All Tours
            </Button>
          </Link>
          <Link href="/events">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg transition-all duration-300 hover:scale-105">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function SlideCard({
  item,
  getCategoryColor,
  getTypeColor,
}: {
  item: any
  getCategoryColor: (category: string) => string
  getTypeColor: (type: string) => string
}) {
  return (
    <Link href={item.link}>
      <Card className="w-80 h-64 flex-shrink-0 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-none shadow-md">
        <div className="relative h-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" sizes="320px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className={`${getTypeColor(item.type)} text-white text-xs font-bold uppercase`}>{item.type}</Badge>
            <Badge className={`${getCategoryColor(item.category)} text-white text-xs`}>{item.category}</Badge>
          </div>

          {/* Price */}
          <div className="absolute top-3 right-3">
            <Badge className="bg-white/90 text-gray-800 font-bold">{item.price}</Badge>
          </div>

          {/* Content */}
          <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}
