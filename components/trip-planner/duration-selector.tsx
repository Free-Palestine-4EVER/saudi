"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TripPlan } from "@/components/trip-planner-form"

interface DurationSelectorProps {
  tripPlan: TripPlan
  updateTripPlan: (updates: Partial<TripPlan>) => void
}

const durationOptions = [
  {
    days: 3,
    title: "Quick Getaway",
    description: "Perfect for a weekend escape to Saudi Arabia",
    highlights: ["Riyadh city tour", "Diriyah UNESCO site", "Local cuisine"],
    price: "From $899",
    popular: false,
  },
  {
    days: 5,
    title: "Saudi Highlights",
    description: "See the best of Saudi Arabia in under a week",
    highlights: ["AlUla heritage sites", "Riyadh modern attractions", "Traditional markets"],
    price: "From $1,299",
    popular: true,
  },
  {
    days: 7,
    title: "Classic Explorer",
    description: "Our most popular duration for first-time visitors",
    highlights: ["AlUla & Hegra", "Riyadh & Diriyah", "Jeddah historic district"],
    price: "From $1,699",
    popular: true,
  },
  {
    days: 10,
    title: "Grand Adventure",
    description: "Comprehensive Saudi Arabia experience",
    highlights: ["Multiple regions", "Desert adventures", "Cultural immersion"],
    price: "From $2,299",
    popular: false,
  },
  {
    days: 14,
    title: "Ultimate Journey",
    description: "Complete Saudi Arabia discovery",
    highlights: ["All major destinations", "Red Sea coast", "Mountain regions"],
    price: "From $2,999",
    popular: false,
  },
]

export function DurationSelector({ tripPlan, updateTripPlan }: DurationSelectorProps) {
  const selectDuration = (days: number) => {
    updateTripPlan({ duration: days })
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">How long is your Saudi Arabia adventure?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Choose the duration that best fits your schedule and travel goals
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {durationOptions.map((option) => (
          <Card
            key={option.days}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg",
              tripPlan.duration === option.days
                ? "ring-2 ring-orange-500 bg-orange-50 dark:bg-orange-900/20"
                : "hover:bg-gray-50 dark:hover:bg-gray-800",
            )}
            onClick={() => selectDuration(option.days)}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{option.days}</div>
                      <div className="text-xs text-orange-600">days</div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold">{option.title}</h4>
                      {option.popular && (
                        <Badge className="bg-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{option.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Recommended for {option.days === 3 ? "first-time" : "experienced"} travelers</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Includes {Math.ceil(option.days / 2)} destinations</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Highlights include:</p>
                      <div className="flex flex-wrap gap-2">
                        {option.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-orange-600">{option.price}</p>
                  <p className="text-xs text-gray-500">per person</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Custom Duration Option */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardContent className="p-6 text-center">
          <h4 className="font-semibold mb-2">Need a custom duration?</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We can create a personalized itinerary for any length of stay in Saudi Arabia
          </p>
          <Badge variant="outline" className="border-orange-600 text-orange-600">
            Contact our Saudi Arabia specialists
          </Badge>
        </CardContent>
      </Card>

      {/* Selection Summary */}
      {tripPlan.duration > 0 && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p className="text-green-800 dark:text-green-200 text-center">
            Perfect! You've selected a <strong>{tripPlan.duration}-day</strong> Saudi Arabia adventure
          </p>
        </div>
      )}
    </div>
  )
}
