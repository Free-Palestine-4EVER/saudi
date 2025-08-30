"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { getTourBySlug, type Tour } from "@/data/saudi-tours"

interface InteractiveMapProps {
  selectedTourSlug?: string
}

export default function InteractiveMap({ selectedTourSlug }: InteractiveMapProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [currentStopIndex, setCurrentStopIndex] = useState(0)

  useEffect(() => {
    if (selectedTourSlug) {
      const tour = getTourBySlug(selectedTourSlug)
      if (tour) {
        setSelectedTour(tour)
        setCurrentStopIndex(0)
      }
    }
  }, [selectedTourSlug])

  // Fallback tour data if no tour is selected or found
  const fallbackTour: Tour = {
    id: "saudi-explorer-map",
    slug: "saudi-explorer-map",
    title: "Explore Saudi Arabia",
    category: "Mixed Explorer",
    duration: 7,
    difficulty: "Moderate" as const,
    price: 1799,
    rating: 4.8,
    reviewCount: 150,
    image: "/images/saudi-hero.jpg",
    gallery: ["/images/saudi-hero.jpg"],
    shortDescription: "Discover the wonders of Saudi Arabia",
    longDescription: "Experience the best of Saudi Arabia with our comprehensive tours",
    highlights: ["UNESCO Sites", "Desert Adventures", "Cultural Experiences"],
    included: ["Accommodation", "Meals", "Transportation"],
    excluded: ["International flights", "Visa fees"],
    itinerary: [],
    stops: [
      {
        id: "riyadh",
        name: "Riyadh",
        description: "Modern capital city with rich history",
        coordinates: [24.7136, 46.6753],
        duration: "2 days",
        activities: ["City tour", "Museum visits", "Traditional markets"],
        highlights: ["Kingdom Centre", "Masmak Fortress", "National Museum"],
      },
      {
        id: "alula",
        name: "AlUla",
        description: "Ancient oasis with UNESCO heritage",
        coordinates: [26.6084, 37.9216],
        duration: "2 days",
        activities: ["Archaeological tours", "Desert exploration"],
        highlights: ["Hegra", "Elephant Rock", "AlUla Old Town"],
      },
      {
        id: "jeddah",
        name: "Jeddah",
        description: "Historic Red Sea port city",
        coordinates: [21.4858, 39.1925],
        duration: "2 days",
        activities: ["Historic district tours", "Cultural experiences"],
        highlights: ["Al-Balad", "Red Sea Corniche", "Traditional souqs"],
      },
    ],
    bestTime: ["October", "November", "December", "January", "February", "March"],
    groupSize: { min: 2, max: 16 },
    languages: ["English", "Arabic"],
    meetingPoint: "King Khalid International Airport, Riyadh",
    tags: ["Culture", "Adventure", "Heritage"],
  }

  const displayTour = selectedTour || fallbackTour
  const stops = displayTour.stops || []
  const currentStop = stops[currentStopIndex]

  const nextStop = () => {
    setCurrentStopIndex((prev) => (prev + 1) % stops.length)
  }

  const prevStop = () => {
    setCurrentStopIndex((prev) => (prev - 1 + stops.length) % stops.length)
  }

  if (!displayTour || stops.length === 0) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map</h3>
          <p className="text-gray-600">Select a tour to explore destinations</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-6">
      {/* Tour Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{displayTour.title}</h2>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{displayTour.duration} days</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>
              {displayTour.groupSize.min}-{displayTour.groupSize.max} people
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>
              {displayTour.rating} ({displayTour.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 min-h-96">
        <div className="absolute inset-0 bg-[url('/images/saudi-map.png')] bg-cover bg-center opacity-20 rounded-lg"></div>

        {/* Route Line */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {stops.map((_, index) => {
            if (index === stops.length - 1) return null
            const x1 = 20 + (index * (100 - 40)) / (stops.length - 1)
            const y1 = 30 + Math.sin(index * 0.5) * 20
            const x2 = 20 + ((index + 1) * (100 - 40)) / (stops.length - 1)
            const y2 = 30 + Math.sin((index + 1) * 0.5) * 20

            return (
              <line
                key={`route-${index}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#routeGradient)"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
            )
          })}
        </svg>

        {/* Stop Markers */}
        {stops.map((stop, index) => {
          const x = 20 + (index * (100 - 40)) / (stops.length - 1)
          const y = 30 + Math.sin(index * 0.5) * 20
          const isActive = index === currentStopIndex

          return (
            <div
              key={stop.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                isActive ? "scale-125 z-20" : "scale-100 z-10 hover:scale-110"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => setCurrentStopIndex(index)}
            >
              <div
                className={`w-8 h-8 rounded-full border-3 flex items-center justify-center ${
                  isActive
                    ? "bg-amber-500 border-white shadow-lg"
                    : "bg-white border-amber-500 shadow-md hover:bg-amber-50"
                }`}
              >
                <MapPin className={`h-4 w-4 ${isActive ? "text-white" : "text-amber-500"}`} />
              </div>
              <div
                className={`absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap ${
                  isActive ? "block" : "hidden"
                }`}
              >
                <div className="bg-white px-2 py-1 rounded shadow-lg border text-xs font-medium">{stop.name}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Current Stop Details */}
      {currentStop && (
        <Card className="border-amber-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                {currentStop.name}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={prevStop} disabled={stops.length <= 1}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-gray-500">
                  {currentStopIndex + 1} of {stops.length}
                </span>
                <Button variant="outline" size="sm" onClick={nextStop} disabled={stops.length <= 1}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">{currentStop.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Duration</h4>
                <Badge variant="secondary">{currentStop.duration}</Badge>
              </div>

              <div>
                <h4 className="font-medium mb-2">Activities</h4>
                <div className="flex flex-wrap gap-1">
                  {currentStop.activities.slice(0, 3).map((activity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {activity}
                    </Badge>
                  ))}
                  {currentStop.activities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{currentStop.activities.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Highlights</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {currentStop.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tour Action */}
      <div className="text-center">
        <Link href={`/tours/${displayTour.slug}`}>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">View Full Tour Details</Button>
        </Link>
      </div>
    </div>
  )
}
