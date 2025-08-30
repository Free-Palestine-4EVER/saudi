"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TripPlan } from "@/components/trip-planner-form"

interface AccommodationSelectorProps {
  tripPlan: TripPlan
  updateTripPlan: (updates: Partial<TripPlan>) => void
}

const accommodationTypes = [
  {
    id: "budget",
    name: "Budget Hotels",
    description: "Comfortable 3-star hotels with essential amenities",
    icon: "🏨",
    priceRange: "$50-80 per night",
    features: ["Free WiFi", "Air conditioning", "Daily housekeeping", "24/7 reception"],
    locations: ["City centers", "Near attractions", "Transportation hubs"],
    popular: false,
    examples: ["Ibis Hotels", "Holiday Inn Express", "Local boutique hotels"],
  },
  {
    id: "mid-range",
    name: "Mid-Range Hotels",
    description: "4-star hotels with excellent service and amenities",
    icon: "🏩",
    priceRange: "$100-200 per night",
    features: ["Restaurant & bar", "Fitness center", "Business center", "Room service"],
    locations: ["Prime locations", "Business districts", "Tourist areas"],
    popular: true,
    examples: ["Marriott", "Hilton", "Radisson Blu", "Movenpick"],
  },
  {
    id: "luxury",
    name: "Luxury Hotels",
    description: "5-star luxury with world-class service and facilities",
    icon: "🏰",
    priceRange: "$300-600 per night",
    features: ["Multiple restaurants", "Spa & wellness", "Concierge service", "Premium amenities"],
    locations: ["Exclusive areas", "Waterfront", "Historic districts"],
    popular: true,
    examples: ["Ritz-Carlton", "Four Seasons", "St. Regis", "Edition Hotels"],
  },
  {
    id: "desert-camps",
    name: "Desert Camps",
    description: "Authentic Bedouin-style camps in the Saudi desert",
    icon: "🏕️",
    priceRange: "$150-400 per night",
    features: ["Traditional tents", "Stargazing", "Camel experiences", "Cultural activities"],
    locations: ["AlUla desert", "Empty Quarter", "Red Sand Dunes"],
    popular: false,
    examples: ["Habitas AlUla", "Desert luxury camps", "Eco-friendly glamping"],
  },
  {
    id: "resorts",
    name: "Beach & Mountain Resorts",
    description: "All-inclusive resorts in scenic locations",
    icon: "🏖️",
    priceRange: "$200-500 per night",
    features: ["All-inclusive dining", "Water sports", "Spa services", "Entertainment"],
    locations: ["Red Sea coast", "Mountain regions", "Oasis locations"],
    popular: false,
    examples: ["Red Sea resorts", "Taif mountain lodges", "NEOM developments"],
  },
  {
    id: "heritage",
    name: "Heritage Hotels",
    description: "Historic properties showcasing Saudi culture",
    icon: "🕌",
    priceRange: "$120-300 per night",
    features: ["Traditional architecture", "Cultural experiences", "Local cuisine", "Historic significance"],
    locations: ["Old quarters", "UNESCO sites", "Cultural districts"],
    popular: false,
    examples: ["Diriyah heritage hotels", "Jeddah historic properties", "AlUla cultural lodges"],
  },
]

export function AccommodationSelector({ tripPlan, updateTripPlan }: AccommodationSelectorProps) {
  const selectAccommodation = (accommodationId: string) => {
    updateTripPlan({ accommodation: accommodationId })
  }

  const getRecommendedAccommodation = () => {
    if (tripPlan.budget < 1500) return ["budget", "mid-range"]
    if (tripPlan.budget < 3000) return ["mid-range", "luxury"]
    return ["luxury", "resorts", "heritage"]
  }

  const recommendedTypes = getRecommendedAccommodation()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Where would you like to stay?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Choose accommodation that matches your style and budget for your Saudi Arabia trip
        </p>
      </div>

      {/* Recommended Section */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Recommended for your budget
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {accommodationTypes
            .filter((type) => recommendedTypes.includes(type.id))
            .map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
                isSelected={tripPlan.accommodation === accommodation.id}
                onSelect={selectAccommodation}
                isRecommended={true}
              />
            ))}
        </div>
      </div>

      {/* All Accommodations */}
      <div>
        <h4 className="font-semibold mb-4">All Accommodation Types</h4>
        <div className="grid grid-cols-1 gap-4">
          {accommodationTypes.map((accommodation) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
              isSelected={tripPlan.accommodation === accommodation.id}
              onSelect={selectAccommodation}
              isRecommended={recommendedTypes.includes(accommodation.id)}
            />
          ))}
        </div>
      </div>

      {/* Selection Summary */}
      {tripPlan.accommodation && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p className="text-green-800 dark:text-green-200 text-center">
            Great choice! You've selected{" "}
            <strong>{accommodationTypes.find((a) => a.id === tripPlan.accommodation)?.name || "accommodation"}</strong>{" "}
            for your Saudi Arabia stay
          </p>
        </div>
      )}
    </div>
  )
}

function AccommodationCard({ accommodation, isSelected, onSelect, isRecommended }) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        isSelected
          ? "ring-2 ring-orange-500 bg-orange-50 dark:bg-orange-900/20"
          : "hover:bg-gray-50 dark:hover:bg-gray-800",
      )}
      onClick={() => onSelect(accommodation.id)}
    >
      <CardContent className="p-4 md:p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{accommodation.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h5 className="font-semibold text-lg">{accommodation.name}</h5>
              {accommodation.popular && <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>}
              {isRecommended && <Badge className="bg-blue-500 text-white text-xs">Recommended</Badge>}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{accommodation.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-medium text-orange-600 mb-2">{accommodation.priceRange}</p>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Features:</p>
                  {accommodation.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Typical Locations:</p>
                <div className="flex flex-wrap gap-1">
                  {accommodation.locations.map((location) => (
                    <Badge key={location} variant="outline" className="text-xs">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Examples in Saudi Arabia:</p>
              <div className="flex flex-wrap gap-1">
                {accommodation.examples.map((example) => (
                  <Badge key={example} variant="secondary" className="text-xs">
                    {example}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
