"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface TourStep {
  id: string
  title: string
  content: string
  target: string
  position: "top" | "bottom" | "left" | "right"
  action?: string
}

interface TourContextType {
  isActive: boolean
  currentStep: number
  steps: TourStep[]
  startTour: () => void
  endTour: () => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
}

const TourContext = createContext<TourContextType | undefined>(undefined)

const tourSteps: TourStep[] = [
  {
    id: "welcome",
    title: "Welcome to Saudi Trip Planner! 🎉",
    content:
      "Let's take a quick tour to show you how easy it is to plan your perfect Saudi Arabia adventure. This will only take 2 minutes!",
    target: "trip-planner-form",
    position: "bottom",
  },
  {
    id: "progress",
    title: "Track Your Progress",
    content:
      "This progress bar shows you exactly where you are in the planning process. You can click on any step to jump ahead or go back.",
    target: "progress-indicator",
    position: "bottom",
  },
  {
    id: "duration",
    title: "Choose Your Trip Duration",
    content:
      "Start by selecting how long you'd like to stay in Saudi Arabia. We'll recommend the best destinations based on your time available.",
    target: "duration-selector",
    position: "right",
  },
  {
    id: "live-pricing",
    title: "Live Pricing Updates",
    content:
      "Watch your trip cost update in real-time as you make selections. No surprises - you'll always know exactly what you're paying for!",
    target: "live-pricing",
    position: "left",
  },
  {
    id: "destinations",
    title: "Select Your Destinations",
    content:
      "Choose from Saudi Arabia's most incredible destinations. We'll show you recommended combinations based on your trip length.",
    target: "destination-selector",
    position: "right",
    action: "nextStep",
  },
  {
    id: "activities",
    title: "Pick Your Adventures",
    content:
      "From exploring Hegra to experiencing the Edge of the World - select the activities that match your interests and adventure level.",
    target: "activity-selector",
    position: "right",
    action: "nextStep",
  },
  {
    id: "accommodation",
    title: "Choose Your Comfort Level",
    content:
      "Select from budget-friendly guesthouses to ultra-luxury resorts. Your choice affects both experience and pricing.",
    target: "accommodation-selector",
    position: "right",
    action: "nextStep",
  },
  {
    id: "transportation",
    title: "Plan Your Transportation",
    content:
      "Decide how you want to travel - from guided tours with local experts to self-drive adventures with rental cars.",
    target: "transportation-selector",
    position: "right",
    action: "nextStep",
  },
  {
    id: "summary",
    title: "Review & Book",
    content:
      "See your complete itinerary, final pricing, and book your dream Saudi Arabia adventure. You can always go back to make changes!",
    target: "trip-summary",
    position: "right",
    action: "nextStep",
  },
  {
    id: "complete",
    title: "You're All Set! 🚀",
    content:
      "Now you know how to use our trip planner! Start creating your perfect Saudi Arabia adventure. Need help? Our team is always here to assist you.",
    target: "trip-planner-form",
    position: "bottom",
  },
]

interface TourProviderProps {
  children: ReactNode
}

export function TourProvider({ children }: TourProviderProps) {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hasSeenTour, setHasSeenTour] = useState(false)

  useEffect(() => {
    // Check if user has seen the tour before
    const tourSeen = localStorage.getItem("saudi-trip-planner-tour-seen")
    if (tourSeen) {
      setHasSeenTour(true)
    }
  }, [])

  const startTour = () => {
    setIsActive(true)
    setCurrentStep(0)
  }

  const endTour = () => {
    setIsActive(false)
    setCurrentStep(0)
    localStorage.setItem("saudi-trip-planner-tour-seen", "true")
    setHasSeenTour(true)
  }

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      endTour()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    if (step >= 0 && step < tourSteps.length) {
      setCurrentStep(step)
    }
  }

  return (
    <TourContext.Provider
      value={{
        isActive,
        currentStep,
        steps: tourSteps,
        startTour,
        endTour,
        nextStep,
        prevStep,
        goToStep,
      }}
    >
      {children}
    </TourContext.Provider>
  )
}

export function useTour() {
  const context = useContext(TourContext)
  if (context === undefined) {
    throw new Error("useTour must be used within a TourProvider")
  }
  return context
}
