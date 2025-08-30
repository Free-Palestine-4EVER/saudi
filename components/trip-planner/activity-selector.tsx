"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, Clock, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TripPlan } from "@/components/trip-planner-form"

interface ActivitySelectorProps {
  tripPlan: TripPlan
  updateTripPlan: (updates: Partial<TripPlan>) => void
}

const activityCategories = [
  {
    id: "heritage-tours",
    name: "Heritage & Culture",
    description: "Explore Saudi Arabia's rich history and UNESCO sites",
    icon: "🏛️",
    difficulty: "Easy",
    duration: "2-6 hours",
    groupSize: "1-20 people",
    popular: true,
    activities: ["Diriyah UNESCO tours", "Al-Balad heritage walks", "Traditional craft workshops", "Museum visits"],
  },
  {
    id: "desert-adventures",
    name: "Desert Adventures",
    description: "Experience the magic of Saudi's vast deserts",
    icon: "🏜️",
    difficulty: "Moderate",
    duration: "4-8 hours",
    groupSize: "2-12 people",
    popular: true,
    activities: ["Edge of the World hiking", "Red Sand Dunes", "Desert camping", "Camel riding"],
  },
  {
    id: "mountain-hiking",
    name: "Mountain Hiking",
    description: "Explore the stunning Asir Mountains and escarpments",
    icon: "⛰️",
    difficulty: "Challenging",
    duration: "3-8 hours",
    groupSize: "2-10 people",
    popular: false,
    activities: ["Asir National Park", "Taif mountain trails", "Rock climbing", "Cable car rides"],
  },
  {
    id: "red-sea-activities",
    name: "Red Sea Activities",
    description: "Discover the pristine waters of the Red Sea",
    icon: "🌊",
    difficulty: "Easy",
    duration: "2-6 hours",
    groupSize: "2-15 people",
    popular: true,
    activities: ["Snorkeling", "Diving", "Boat trips", "Marine life watching"],
  },
  {
    id: "adventure-sports",
    name: "Adventure Sports",
    description: "Thrilling activities for adrenaline seekers",
    icon: "🪂",
    difficulty: "Challenging",
    duration: "3-8 hours",
    groupSize: "2-8 people",
    popular: false,
    activities: ["Zipline experiences", "Quad biking", "Sandboarding", "Rock climbing"],
  },
  {
    id: "culinary-experiences",
    name: "Culinary Experiences",
    description: "Taste authentic Saudi cuisine and traditional cooking",
    icon: "🍽️",
    difficulty: "Easy",
    duration: "2-5 hours",
    groupSize: "2-15 people",
    popular: true,
    activities: ["Traditional cooking classes", "Food tours", "Bedouin meals", "Date farm visits"],
  },
  {
    id: "photography-tours",
    name: "Photography Tours",
    description: "Capture Saudi Arabia's stunning landscapes and culture",
    icon: "📸",
    difficulty: "Easy",
    duration: "3-8 hours",
    groupSize: "2-8 people",
    popular: false,
    activities: [
      "Sunrise/sunset shoots",
      "Portrait sessions with locals",
      "Landscape photography",
      "Night sky photography",
    ],
  },
  {
    id: "wellness-relaxation",
    name: "Wellness & Relaxation",
    description: "Rejuvenate with traditional and modern wellness experiences",
    icon: "🧘",
    difficulty: "Easy",
    duration: "1-4 hours",
    groupSize: "1-10 people",
    popular: false,
    activities: ["Spa treatments", "Desert meditation", "Yoga sessions", "Traditional healing"],
  },
]

export function ActivitySelector({ tripPlan, updateTripPlan }: ActivitySelectorProps) {
  const toggleActivity = (activityId: string) => {
    const currentActivities = tripPlan.activities
    const isSelected = currentActivities.includes(activityId)

    let newActivities
    if (isSelected) {
      newActivities = currentActivities.filter((id) => id !== activityId)
    } else {
      newActivities = [...currentActivities, activityId]
    }

    updateTripPlan({ activities: newActivities })
  }

  const popularActivities = activityCategories.filter((activity) => activity.popular)
  const allActivities = activityCategories

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">What activities interest you?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Choose the types of experiences you'd like to have in Saudi Arabia
        </p>
      </div>

      {/* Popular Activities */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Most Popular Activities
        </h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {popularActivities.map((activity) => (
            <Card
              key={activity.id}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md",
                tripPlan.activities.includes(activity.id)
                  ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800",
              )}
              onClick={() => toggleActivity(activity.id)}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-2 md:gap-4">
                  <div className="text-2xl md:text-3xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1 flex items-center gap-2">
                      {activity.name}
                      {tripPlan.activities.includes(activity.id) && <Activity className="w-4 h-4 text-blue-600" />}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{activity.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {activity.groupSize}
                        </div>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            activity.difficulty === "Easy" && "border-green-300 text-green-700",
                            activity.difficulty === "Moderate" && "border-yellow-300 text-yellow-700",
                            activity.difficulty === "Challenging" && "border-red-300 text-red-700",
                          )}
                        >
                          {activity.difficulty}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {activity.activities.slice(0, 2).map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                        {activity.activities.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{activity.activities.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Activities */}
      <div>
        <h4 className="font-semibold mb-4">All Activity Categories</h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {allActivities.map((activity) => {
            const isSelected = tripPlan.activities.includes(activity.id)

            return (
              <Card
                key={activity.id}
                className={cn(
                  "cursor-pointer transition-all duration-200 hover:shadow-md",
                  isSelected
                    ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800",
                )}
                onClick={() => toggleActivity(activity.id)}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="text-2xl md:text-3xl">{activity.icon}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1 flex items-center gap-2">
                        {activity.name}
                        {activity.popular && <Badge className="bg-orange-500 text-xs">Popular</Badge>}
                        {isSelected && <Activity className="w-4 h-4 text-blue-600" />}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{activity.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {activity.groupSize}
                          </div>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-xs",
                              activity.difficulty === "Easy" && "border-green-300 text-green-700",
                              activity.difficulty === "Moderate" && "border-yellow-300 text-yellow-700",
                              activity.difficulty === "Challenging" && "border-red-300 text-red-700",
                            )}
                          >
                            {activity.difficulty}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {activity.activities.slice(0, 3).map((item) => (
                            <Badge key={item} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                          {activity.activities.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{activity.activities.length - 3} more
                            </Badge>
                          )}
                        </div>
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
      {tripPlan.activities.length > 0 && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p className="text-green-800 dark:text-green-200 text-center">
            Excellent! You've selected <strong>{tripPlan.activities.length}</strong> activity categories
            {tripPlan.activities.length > 0 && (
              <span className="block mt-1 text-sm">
                {activityCategories
                  .filter((a) => tripPlan.activities.includes(a.id))
                  .map((a) => a.name)
                  .join(", ")}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  )
}
