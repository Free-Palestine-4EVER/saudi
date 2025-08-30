"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, X, HelpCircle } from "lucide-react"
import { useTour } from "./tour-provider"

export function TourTrigger() {
  const { startTour } = useTour()
  const [showWelcome, setShowWelcome] = useState(false)
  const [hasSeenTour, setHasSeenTour] = useState(true)

  useEffect(() => {
    // Check if user has seen the tour before
    const tourSeen = localStorage.getItem("jordan-trip-planner-tour-seen")
    if (!tourSeen) {
      setHasSeenTour(false)
      // Show welcome card after a short delay
      const timer = setTimeout(() => {
        setShowWelcome(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleStartTour = () => {
    setShowWelcome(false)
    startTour()
  }

  const handleDismissWelcome = () => {
    setShowWelcome(false)
    localStorage.setItem("jordan-trip-planner-tour-seen", "true")
    setHasSeenTour(true)
  }

  return (
    <>
      {/* Welcome Card for First-Time Users */}
      {showWelcome && !hasSeenTour && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md shadow-2xl border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Welcome to Trip Planner! 👋</CardTitle>
                <Button variant="ghost" size="sm" onClick={handleDismissWelcome} className="h-6 w-6 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                New to our trip planner? Take a quick 2-minute guided tour to learn how to create your perfect Jordan
                adventure!
              </p>

              <div className="flex gap-3">
                <Button onClick={handleStartTour} className="flex-1 flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Start Tour
                </Button>
                <Button variant="outline" onClick={handleDismissWelcome} className="flex-1">
                  Skip for Now
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                You can always start the tour later using the help button
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Help Button (Always Available) */}
      <Button
        variant="outline"
        size="sm"
        onClick={startTour}
        className="fixed bottom-6 right-6 z-30 shadow-lg bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
        title="Take a guided tour"
      >
        <HelpCircle className="h-4 w-4 mr-2" />
        Help Tour
      </Button>
    </>
  )
}
