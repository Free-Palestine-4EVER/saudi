"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Car, Bus, Users, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TripPlan } from "@/components/trip-planner-form"

interface TransportationSelectorProps {
  tripPlan: TripPlan
  updateTripPlan: (updates: Partial<TripPlan>) => void
}

const transportationOptions = [
  {
    id: "private-car",
    name: "Private Car with Driver",
    description: "Comfortable private vehicle with professional Saudi driver",
    icon: Car,
    duration: "Door-to-door",
    groupSize: "1-6 people",
    comfort: "High",
    flexibility: "Maximum",
    price: "$80-120 per day",
    pros: ["Complete flexibility", "Air-conditioned comfort", "Local driver knowledge", "Stop anywhere"],
    cons: ["Higher cost", "Traffic in cities"],
    bestFor: ["Families", "Luxury travelers", "Custom itineraries"],
    popular: true,
  },
  {
    id: "domestic-flights",
    name: "Domestic Flights",
    description: "Quick flights between major Saudi cities",
    icon: Plane,
    duration: "1-2 hours",
    groupSize: "Any size",
    comfort: "High",
    flexibility: "Scheduled",
    price: "$100-300 per flight",
    pros: ["Fastest option", "Comfortable", "Reliable schedules", "Skip long drives"],
    cons: ["Airport procedures", "Limited destinations", "Weather dependent"],
    bestFor: ["Time-conscious travelers", "Long distances", "Business trips"],
    popular: true,
  },
  {
    id: "luxury-coach",
    name: "Luxury Coach",
    description: "Premium bus service between major destinations",
    icon: Bus,
    duration: "3-8 hours",
    groupSize: "20-50 people",
    comfort: "Medium-High",
    flexibility: "Scheduled",
    price: "$30-60 per trip",
    pros: ["Cost-effective", "Comfortable seating", "Scenic routes", "WiFi available"],
    cons: ["Fixed schedules", "Longer travel time", "Less privacy"],
    bestFor: ["Budget travelers", "Solo travelers", "Scenic journeys"],
    popular: false,
  },
  {
    id: "rental-car",
    name: "Self-Drive Rental",
    description: "Rent a car and explore Saudi Arabia at your own pace",
    icon: Car,
    duration: "Your schedule",
    groupSize: "2-7 people",
    comfort: "Medium",
    flexibility: "Maximum",
    price: "$40-80 per day",
    pros: ["Complete freedom", "Cost-effective for groups", "Explore off-beaten paths", "No waiting"],
    cons: ["Need international license", "Navigation challenges", "Parking in cities", "Fuel costs"],
    bestFor: ["Experienced drivers", "Adventure seekers", "Extended stays"],
    popular: false,
  },
  {
    id: "mixed-transport",
    name: "Mixed Transportation",
    description: "Combination of flights, private cars, and local transport",
    icon: Users,
    duration: "Varies",
    groupSize: "Any size",
    comfort: "Variable",
    flexibility: "High",
    price: "$60-150 per day",
    pros: ["Optimized for each route", "Balance cost and time", "Experience variety", "Efficient"],
    cons: ["More complex planning", "Multiple bookings", "Coordination needed"],
    bestFor: ["Multi-destination trips", "Balanced travelers", "Longer stays"],
    popular: true,
  },
]

export function TransportationSelector({ tripPlan, updateTripPlan }: TransportationSelectorProps) {
  const selectTransportation = (transportationId: string) => {
    updateTripPlan({ transportation: transportationId })
  }

  const getRecommendedTransportation = () => {
    if (tripPlan.duration <= 5) return ["private-car", "domestic-flights"]
    if (tripPlan.destinations.length >= 3) return ["mixed-transport", "domestic-flights"]
    return ["private-car", "mixed-transport"]
  }

  const recommendedOptions = getRecommendedTransportation()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">How would you like to travel around Saudi Arabia?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Choose transportation that best fits your itinerary and travel style
        </p>
      </div>

      {/* Recommended Section */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Recommended for your itinerary
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {transportationOptions
            .filter((option) => recommendedOptions.includes(option.id))
            .map((option) => (
              <TransportationCard
                key={option.id}
                option={option}
                isSelected={tripPlan.transportation === option.id}
                onSelect={selectTransportation}
                isRecommended={true}
              />
            ))}
        </div>
      </div>

      {/* All Options */}
      <div>
        <h4 className="font-semibold mb-4">All Transportation Options</h4>
        <div className="grid grid-cols-1 gap-4">
          {transportationOptions.map((option) => (
            <TransportationCard
              key={option.id}
              option={option}
              isSelected={tripPlan.transportation === option.id}
              onSelect={selectTransportation}
              isRecommended={recommendedOptions.includes(option.id)}
            />
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Transportation Tips for Saudi Arabia</h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• International driving license required for car rentals</li>
          <li>• Domestic flights connect all major Saudi cities</li>
          <li>• Private drivers are familiar with local customs and attractions</li>
          <li>• Traffic can be heavy in Riyadh and Jeddah during peak hours</li>
          <li>• Desert roads require experienced drivers and proper vehicles</li>
        </ul>
      </div>

      {/* Selection Summary */}
      {tripPlan.transportation && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p className="text-green-800 dark:text-green-200 text-center">
            Excellent choice! You've selected{" "}
            <strong>
              {transportationOptions.find((t) => t.id === tripPlan.transportation)?.name || "transportation"}
            </strong>{" "}
            for getting around Saudi Arabia
          </p>
        </div>
      )}
    </div>
  )
}

function TransportationCard({ option, isSelected, onSelect, isRecommended }) {
  const IconComponent = option.icon

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        isSelected
          ? "ring-2 ring-orange-500 bg-orange-50 dark:bg-orange-900/20"
          : "hover:bg-gray-50 dark:hover:bg-gray-800",
      )}
      onClick={() => onSelect(option.id)}
    >
      <CardContent className="p-4 md:p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
            <IconComponent className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h5 className="font-semibold text-lg">{option.name}</h5>
              {option.popular && <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>}
              {isRecommended && <Badge className="bg-blue-500 text-white text-xs">Recommended</Badge>}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-gray-500" />
                  <span>{option.duration}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
                  <span>{option.groupSize}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-orange-600">{option.price}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pros:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {option.pros.slice(0, 2).map((pro) => (
                    <li key={pro} className="flex items-start">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2 mt-1.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Best for:</p>
                <div className="flex flex-wrap gap-1">
                  {option.bestFor.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
