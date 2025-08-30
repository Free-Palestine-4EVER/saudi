import type { Metadata } from "next"
import { TripPlannerForm } from "@/components/trip-planner-form"
import { TourProvider } from "@/components/guided-tour/tour-provider"
import { TourOverlay } from "@/components/guided-tour/tour-overlay"
import { TourTrigger } from "@/components/guided-tour/tour-trigger"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Start Planning Your Saudi Arabia Adventure | Saudi Explorer",
  description:
    "Plan your perfect trip to Saudi Arabia with our advanced trip planner. Select destinations, activities, accommodations, and get instant pricing.",
}

export default function StartPlanningPage() {
  return (
    <TourProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Start Planning Your
              <span className="text-orange-600 dark:text-orange-400"> Saudi Arabia Adventure</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Create your perfect Saudi Arabia itinerary with our advanced trip planner. Select destinations,
              activities, accommodations, and get instant pricing for your dream vacation.
            </p>
          </div>

          <TripPlannerForm />
        </div>

        <TourOverlay />
        <TourTrigger />
      </div>
    </TourProvider>
  )
}
