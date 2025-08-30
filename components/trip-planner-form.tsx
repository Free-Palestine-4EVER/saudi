"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Activity, Bed, Car, CreditCard } from "lucide-react"
import { DurationSelector } from "@/components/trip-planner/duration-selector"
import { DestinationSelector } from "@/components/trip-planner/destination-selector"
import { ActivitySelector } from "@/components/trip-planner/activity-selector"
import { AccommodationSelector } from "@/components/trip-planner/accommodation-selector"
import { TransportationSelector } from "@/components/trip-planner/transportation-selector"
import { TripSummary } from "@/components/trip-planner/trip-summary"
import { PricingBreakdown } from "@/components/trip-planner/pricing-breakdown"

export interface TripPlan {
  duration: number
  destinations: string[]
  activities: string[]
  accommodation: string
  transportation: string
  groupSize: number
  budget: number
  startDate: string
  specialRequests: string
}

const steps = [
  { id: 1, title: "Duration", icon: Calendar, description: "How long is your trip?" },
  { id: 2, title: "Destinations", icon: MapPin, description: "Where do you want to go?" },
  { id: 3, title: "Activities", icon: Activity, description: "What interests you?" },
  { id: 4, title: "Accommodation", icon: Bed, description: "Where will you stay?" },
  { id: 5, title: "Transportation", icon: Car, description: "How will you travel?" },
  { id: 6, title: "Summary", icon: CreditCard, description: "Review and book" },
]

export function TripPlannerForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [tripPlan, setTripPlan] = useState<TripPlan>({
    duration: 7,
    destinations: [],
    activities: [],
    accommodation: "",
    transportation: "",
    groupSize: 2,
    budget: 2000,
    startDate: "",
    specialRequests: "",
  })

  const updateTripPlan = (updates: Partial<TripPlan>) => {
    setTripPlan((prev) => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / steps.length) * 100

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DurationSelector tripPlan={tripPlan} updateTripPlan={updateTripPlan} />
      case 2:
        return <DestinationSelector tripPlan={tripPlan} updateTripPlan={updateTripPlan} />
      case 3:
        return <ActivitySelector tripPlan={tripPlan} updateTripPlan={updateTripPlan} />
      case 4:
        return <AccommodationSelector tripPlan={tripPlan} updateTripPlan={updateTripPlan} />
      case 5:
        return <TransportationSelector tripPlan={tripPlan} updateTripPlan={updateTripPlan} />
      case 6:
        return <TripSummary tripPlan={tripPlan} updateTripPlan={updateTripPlan} />
      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return tripPlan.duration > 0
      case 2:
        return tripPlan.destinations.length > 0
      case 3:
        return tripPlan.activities.length > 0
      case 4:
        return tripPlan.accommodation !== ""
      case 5:
        return tripPlan.transportation !== ""
      default:
        return true
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Header */}
      <Card className="mb-8 border-orange-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Saudi Arabia Trip Planner</CardTitle>
              <p className="text-orange-100">
                Step {currentStep} of {steps.length}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-orange-100">Progress</p>
              <p className="text-2xl font-bold">{Math.round(progress)}%</p>
            </div>
          </div>
          <Progress value={progress} className="mt-4 bg-orange-700" />
        </CardHeader>
      </Card>

      {/* Step Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 min-w-max px-4">
          {steps.map((step) => {
            const StepIcon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id

            return (
              <div
                key={step.id}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-orange-600 text-white shadow-lg"
                    : isCompleted
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    isActive ? "bg-white/20" : isCompleted ? "bg-green-200" : "bg-gray-200"
                  }`}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-xs opacity-80">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-6 md:p-8">{renderStepContent()}</CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={nextStep}
              disabled={currentStep === steps.length || !canProceed()}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              {currentStep === steps.length ? "Complete Planning" : "Next Step"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <PricingBreakdown tripPlan={tripPlan} />

          {/* Quick Tips */}
          <Card className="mt-6 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg">Planning Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-700 space-y-2">
              <p>• Best time to visit Saudi Arabia is October to March</p>
              <p>• AlUla and Riyadh are must-see destinations</p>
              <p>• Book accommodations early during peak season</p>
              <p>• Consider internal flights for longer distances</p>
              <p>• Respect local customs and dress modestly</p>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="mt-6 border-green-200 bg-green-50">
            <CardContent className="p-4 text-center">
              <p className="text-green-800 font-semibold mb-2">Need Help Planning?</p>
              <p className="text-green-700 text-sm mb-3">Our Saudi Arabia experts are here to help</p>
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-100 bg-transparent"
              >
                Contact Expert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
