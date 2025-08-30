"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Star, Users, ChevronLeft, ChevronRight, Zap, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Combined data for events and packages
const showcaseItems = [
  // Events
  {
    id: "event-1",
    type: "event",
    title: "Formula 1 Saudi Arabian Grand Prix",
    date: "March 7-9, 2025",
    location: "Jeddah Corniche Circuit",
    city: "Jeddah",
    category: "Sports",
    price: "From $150",
    image: "/images/f1-saudi-gp.png",
    description: "Experience the thrill of Formula 1 racing under the lights at the stunning Jeddah Corniche Circuit.",
    featured: true,
    link: "/events/1",
  },
  {
    id: "tour-1",
    type: "tour",
    title: "Saudi Arabia 5 Days - History & Culture",
    duration: "5 Days",
    location: "Riyadh, AlUla, Diriyah",
    city: "Multiple Cities",
    category: "Cultural",
    price: "$1,899",
    image: "/images/saudi-5d-history-culture.png",
    description: "Explore the birthplace of the Saudi state in Diriyah, discover ancient Nabataean tombs in Hegra.",
    featured: true,
    groupSize: 12,
    rating: 4.8,
    link: "/tours/saudi-5d-history-culture",
  },
  {
    id: "event-2",
    type: "event",
    title: "Winter at Tantora Festival",
    date: "December 21, 2024 - February 23, 2025",
    location: "AlUla",
    city: "AlUla",
    category: "Culture",
    price: "From $75",
    image: "/images/winter-tantora.png",
    description: "A celebration of arts, culture, and heritage in the stunning ancient city of AlUla.",
    featured: true,
    link: "/events/3",
  },
  {
    id: "tour-2",
    type: "tour",
    title: "Saudi Arabia 7 Days - Adventure & Hiking",
    duration: "7 Days",
    location: "Riyadh, AlUla, Taif",
    city: "Multiple Cities",
    category: "Adventure",
    price: "$2,999",
    image: "/images/saudi-7d-adventure-hiking.png",
    description: "Multi-region adventure including desert activities, mountain climbing in AlUla.",
    featured: false,
    groupSize: 8,
    rating: 4.9,
    link: "/tours/saudi-7d-adventure-hiking",
  },
  {
    id: "event-3",
    type: "event",
    title: "MDL Beast Soundstorm",
    date: "December 12-14, 2024",
    location: "Banban",
    city: "Riyadh",
    category: "Music",
    price: "From $200",
    image: "/images/mdl-beast.png",
    description: "The biggest music festival in the Middle East featuring top international DJs and artists.",
    featured: true,
    link: "/events/7",
  },
  {
    id: "tour-3",
    type: "tour",
    title: "Saudi Arabia 10 Days - Full Heritage Journey",
    duration: "10 Days",
    location: "Riyadh, AlUla, Medina, Jeddah",
    city: "Multiple Cities",
    category: "Heritage",
    price: "$3,999",
    image: "/images/saudi-10d-history-culture.png",
    description: "Comprehensive UNESCO and heritage immersion including Medina day trip.",
    featured: true,
    groupSize: 12,
    rating: 4.9,
    link: "/tours/saudi-10d-full-heritage-journey",
  },
  {
    id: "event-4",
    type: "event",
    title: "Saudi Cup",
    date: "February 29, 2025",
    location: "King Abdulaziz Racetrack",
    city: "Riyadh",
    category: "Sports",
    price: "From $100",
    image: "/images/saudi-cup.png",
    description: "The world's richest horse race with a $20 million prize purse.",
    featured: false,
    link: "/events/6",
  },
  {
    id: "tour-4",
    type: "tour",
    title: "Saudi Arabia 5 Days - Mixed Explorer",
    duration: "5 Days",
    location: "Riyadh, Diriyah, AlUla",
    city: "Multiple Cities",
    category: "Mixed",
    price: "$1,999",
    image: "/images/saudi-5d-mixed-explorer.png",
    description: "Perfect first-time visitor experience combining UNESCO sites, camel rides.",
    featured: false,
    groupSize: 10,
    rating: 4.7,
    link: "/tours/saudi-5d-mixed-explorer",
  },
]

export default function SciFiShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentItemsPerView, setCurrentItemsPerView] = useState(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1280) return 4 // xl screens
    if (window.innerWidth >= 1024) return 3 // lg screens
    if (window.innerWidth >= 640) return 2 // sm screens
    return 1 // mobile
  }

  useEffect(() => {
    const handleResize = () => {
      setCurrentItemsPerView(getItemsPerView())
    }

    setCurrentItemsPerView(getItemsPerView())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= showcaseItems.length - currentItemsPerView ? 0 : prev + 1))
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, currentItemsPerView])

  const maxIndex = Math.max(0, showcaseItems.length - currentItemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Sports: "from-blue-500 to-cyan-400",
      Entertainment: "from-purple-500 to-pink-400",
      Culture: "from-green-500 to-emerald-400",
      Cultural: "from-green-500 to-emerald-400",
      Traditional: "from-amber-500 to-yellow-400",
      Film: "from-red-500 to-orange-400",
      Music: "from-pink-500 to-rose-400",
      Awards: "from-yellow-500 to-amber-400",
      Arts: "from-indigo-500 to-purple-400",
      Adventure: "from-orange-500 to-red-400",
      Heritage: "from-teal-500 to-green-400",
      Mixed: "from-violet-500 to-purple-400",
    }
    return colors[category] || "from-gray-500 to-slate-400"
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Sci-Fi Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-cyan-400" />
            <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 shadow-lg">
              Featured Experiences
            </Badge>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Discover Saudi Arabia's Future
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of ancient heritage and modern innovation through our curated selection of
            tours and events.
          </p>
        </div>

        {/* Sci-Fi Slideshow Container */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0 shadow-lg backdrop-blur-sm h-12 w-12 rounded-full p-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 shadow-lg backdrop-blur-sm h-12 w-12 rounded-full p-0"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slideshow */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / currentItemsPerView)}%)`,
              }}
            >
              {showcaseItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 px-3" style={{ width: `${100 / currentItemsPerView}%` }}>
                  <Link href={item.link}>
                    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:from-slate-700/50 hover:to-slate-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 aspect-square">
                      {/* Holographic Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                      <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-lg" />

                      {/* Image Section */}
                      <div className="relative h-1/2 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg?height=300&width=300"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                        {/* Type Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge
                            className={cn(
                              "bg-gradient-to-r text-white border-0 shadow-lg text-xs font-bold",
                              item.type === "event" ? "from-cyan-500 to-blue-500" : "from-purple-500 to-pink-500",
                            )}
                          >
                            {item.type === "event" ? "EVENT" : "TOUR"}
                          </Badge>
                        </div>

                        {/* Featured Badge */}
                        {item.featured && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 shadow-lg text-xs font-bold animate-pulse">
                              <Star className="h-3 w-3 mr-1" />
                              FEATURED
                            </Badge>
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute bottom-3 left-3">
                          <Badge
                            className={cn(
                              "bg-gradient-to-r text-white border-0 shadow-lg text-xs",
                              getCategoryColor(item.category),
                            )}
                          >
                            {item.category}
                          </Badge>
                        </div>

                        {/* Price */}
                        <div className="absolute bottom-3 right-3">
                          <Badge className="bg-black/70 text-cyan-400 border border-cyan-500/50 shadow-lg text-xs font-bold">
                            {item.price}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <CardContent className="relative h-1/2 p-4 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="font-bold text-sm leading-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                            {item.title}
                          </h3>

                          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">{item.description}</p>

                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              {item.type === "event" ? (
                                <Calendar className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                              ) : (
                                <Clock className="h-3 w-3 text-purple-400 flex-shrink-0" />
                              )}
                              <span className="line-clamp-1">{item.type === "event" ? item.date : item.duration}</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <MapPin className="h-3 w-3 text-pink-400 flex-shrink-0" />
                              <span className="line-clamp-1">{item.location}</span>
                            </div>

                            {item.type === "tour" && item.rating && (
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Star className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                                <span>{item.rating} Rating</span>
                                {item.groupSize && (
                                  <>
                                    <Users className="h-3 w-3 text-green-400 flex-shrink-0 ml-2" />
                                    <span>Max {item.groupSize}</span>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        <Button className="mt-3 w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg text-xs font-bold h-8">
                          {item.type === "event" ? "VIEW EVENT" : "EXPLORE TOUR"}
                        </Button>
                      </CardContent>

                      {/* Sci-Fi Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sci-Fi Progress Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "relative h-2 rounded-full transition-all duration-300 border-0 outline-none focus:outline-none overflow-hidden",
                  currentIndex === index
                    ? "w-8 bg-gradient-to-r from-cyan-500 to-purple-500"
                    : "w-2 bg-gray-600 hover:bg-gray-500",
                )}
              >
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-xs text-gray-400">
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-colors duration-300",
                  isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-500",
                )}
              />
              <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg px-8 py-3 rounded-full text-base font-bold">
                Explore All Tours
              </Button>
            </Link>
            <Link href="/events">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg px-8 py-3 rounded-full text-base font-bold">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
