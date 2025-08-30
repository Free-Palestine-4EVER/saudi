"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { TripPlan } from "@/components/trip-planner-form"

interface DestinationSelectorProps {
  tripPlan: TripPlan
  updateTripPlan: (updates: Partial<TripPlan>) => void
}

const destinations = [
  {
    id: "riyadh",
    name: "Riyadh",
    description: "Modern capital with rich history",
    image: "/images/riyadh-skyline.png",
    duration: "2-3 days",
    highlights: ["Kingdom Tower", "Diriyah UNESCO", "National Museum"],
    difficulty: "Easy",
    mustSee: true,
  },
  {
    id: "alula",
    name: "AlUla",
    description: "UNESCO World Heritage site with ancient Nabataean tombs",
    image: "/images/alula-hegra.png",
    duration: "2-3 days",
    highlights: ["Hegra", "Elephant Rock", "Old Town"],
    difficulty: "Moderate",
    mustSee: true,
  },
  {
    id: "jeddah",
    name: "Jeddah",
    description: "Historic Red Sea port city",
    image: "/images/jeddah-balad.png",
    duration: "2-3 days",
    highlights: ["Al-Balad UNESCO", "Corniche", "Red Sea"],
    difficulty: "Easy",
    mustSee: true,
  },
  {
    id: "diriyah",
    name: "Diriyah",
    description: "Birthplace of the Saudi state",
    image: "/images/diriyah-unesco.png",
    duration: "1 day",
    highlights: ["Al-Turaif District", "Mud-brick architecture", "Museums"],
    difficulty: "Easy",
    mustSee: false,
  },
  {
    id: "edge-of-world",
    name: "Edge of the World",
    description: "Dramatic cliff formations",
    image: "/images/edge-of-world.png",
    duration: "1 day",
    highlights: ["Tuwaiq Escarpment", "Hiking trails", "Desert views"],
    difficulty: "Moderate",
    mustSee: false,
  },
  {
    id: "red-sand-dunes",
    name: "Red Sand Dunes",
    description: "Adventure playground in the desert",
    image: "/images/red-sand-dunes.png",
    duration: "Half day",
    highlights: ["Quad biking", "Sandboarding", "Desert camping"],
    difficulty: "Moderate",
    mustSee: false,
  },
  {
    id: "taif",
    name: "Taif",
    description: "Mountain city famous for roses",
    image: "/images/taif-mountains.png",
    duration: "1-2 days",
    highlights: ["Rose farms", "Cable car", "Mountain views"],
    difficulty: "Easy",
    mustSee: false,
  },
  {
    id: "abha",
    name: "Abha",
    description: "Asir Mountains and cool climate",
    image: "/images/abha-mountains.png",
    duration: "2-3 days",
    highlights: ["Asir National Park", "Mountain hiking", "Traditional villages"],
    difficulty: "Challenging",
    mustSee: false,
  },
]

export function DestinationSelector({ tripPlan, updateTripPlan }: DestinationSelectorProps) {
  const toggleDestination = (destinationId: string) => {
    const currentDestinations = tripPlan.destinations
    const isSelected = currentDestinations.includes(destinationId)

    let newDestinations
    if (isSelected) {
      newDestinations = currentDestinations.filter((id) => id !== destinationId)
    } else {
      newDestinations = [...currentDestinations, destinationId]
    }

    updateTripPlan({ destinations: newDestinations })
  }

  const getRecommendedDestinations = () => {
    if (tripPlan.duration <= 3) return ["riyadh"]
    if (tripPlan.duration <= 5) return ["riyadh", "alula"]
    if (tripPlan.duration <= 7) return ["riyadh", "alula", "jeddah"]
    return ["riyadh", "alula", "jeddah", "diriyah"]
  }

  const recommendedDestinations = getRecommendedDestinations()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Where would you like to go?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Select the destinations you'd like to visit during your {tripPlan.duration}-day trip
        </p>
      </div>

      {/* Recommended Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Recommended for {tripPlan.duration} days
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {destinations
            .filter((dest) => recommendedDestinations.includes(dest.id))
            .map((destination) => (
              <Card
                key={destination.id}
                className={cn(
                  "cursor-pointer transition-all duration-200 hover:shadow-md",
                  tripPlan.destinations.includes(destination.id)
                    ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800",
                )}
                onClick={() => toggleDestination(destination.id)}
              >
                <CardContent className="p-0">
                  <div className="relative h-24 md:h-32 w-full">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    {destination.mustSee && <Badge className="absolute top-2 right-2 bg-orange-500">Must See</Badge>}
                  </div>
                  <div className="p-2 md:p-4">
                    <h5 className="font-semibold mb-1">{destination.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{destination.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {destination.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Destinations */}
      <div>
        <h4 className="font-semibold mb-4">All Destinations</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {destinations.map((destination) => {
            const isSelected = tripPlan.destinations.includes(destination.id)
            const isRecommended = recommendedDestinations.includes(destination.id)

            return (
              <Card
                key={destination.id}
                className={cn(
                  "cursor-pointer transition-all duration-200 hover:shadow-md",
                  isSelected
                    ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800",
                )}
                onClick={() => toggleDestination(destination.id)}
              >
                <CardContent className="p-0">
                  <div className="relative h-24 md:h-32 w-full">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {destination.mustSee && <Badge className="bg-orange-500 text-xs">Must See</Badge>}
                      {isRecommended && <Badge className="bg-blue-500 text-xs">Recommended</Badge>}
                    </div>
                    {isSelected && (
                      <div className="absolute inset-0 bg-blue-600/20 rounded-t-lg flex items-center justify-center">
                        <div className="bg-blue-600 text-white rounded-full p-2">
                          <MapPin className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-2 md:p-4">
                    <h5 className="font-semibold mb-1">{destination.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{destination.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {destination.duration}
                        <span className="mx-1">•</span>
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs",
                            destination.difficulty === "Easy" && "bg-green-100 text-green-700",
                            destination.difficulty === "Moderate" && "bg-yellow-100 text-yellow-700",
                            destination.difficulty === "Challenging" && "bg-red-100 text-red-700",
                          )}
                        >
                          {destination.difficulty}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.slice(0, 2).map((highlight) => (
                          <Badge key={highlight} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {destination.highlights.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{destination.highlights.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Selection Summary */}
      {tripPlan.destinations.length > 0 && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p className="text-green-800 dark:text-green-200 text-center">
            Great choice! You've selected <strong>{tripPlan.destinations.length}</strong> destinations
            {tripPlan.destinations.length > 0 && (
              <span className="block mt-1 text-sm">
                {destinations
                  .filter((d) => tripPlan.destinations.includes(d.id))
                  .map((d) => d.name)
                  .join(", ")}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  )
}
