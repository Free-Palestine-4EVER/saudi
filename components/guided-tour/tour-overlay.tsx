"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, SkipForward } from "lucide-react"
import { useTour } from "./tour-provider"

export function TourOverlay() {
  const { isActive, currentStep, steps, nextStep, prevStep, endTour } = useTour()
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)
  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 })

  const currentTourStep = steps[currentStep]

  useEffect(() => {
    if (!isActive || !currentTourStep) return

    const findTarget = () => {
      const element = document.querySelector(`[data-tour-id="${currentTourStep.target}"]`) as HTMLElement
      if (element) {
        setTargetElement(element)

        // Calculate overlay position
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

        let top = rect.top + scrollTop
        let left = rect.left + scrollLeft

        // Adjust position based on preferred position
        switch (currentTourStep.position) {
          case "top":
            top = rect.top + scrollTop - 20
            left = rect.left + scrollLeft + rect.width / 2
            break
          case "bottom":
            top = rect.bottom + scrollTop + 20
            left = rect.left + scrollLeft + rect.width / 2
            break
          case "left":
            top = rect.top + scrollTop + rect.height / 2
            left = rect.left + scrollLeft - 20
            break
          case "right":
            top = rect.top + scrollTop + rect.height / 2
            left = rect.right + scrollLeft + 20
            break
        }

        setOverlayPosition({ top, left })

        // Scroll element into view
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }

    // Try to find target immediately
    findTarget()

    // If not found, try again after a short delay (for dynamic content)
    const timeout = setTimeout(findTarget, 100)

    return () => clearTimeout(timeout)
  }, [isActive, currentStep, currentTourStep])

  // Handle tour step actions
  useEffect(() => {
    if (!isActive || !currentTourStep?.action) return

    if (currentTourStep.action === "nextStep") {
      // Auto-advance to next form step if needed
      const nextButton = document.querySelector('[data-tour-action="next-step"]') as HTMLButtonElement
      if (nextButton && !nextButton.disabled) {
        setTimeout(() => {
          nextButton.click()
        }, 1000)
      }
    }
  }, [currentStep, currentTourStep, isActive])

  if (!isActive || !currentTourStep) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Highlight */}
      {targetElement && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 8,
            left: targetElement.getBoundingClientRect().left + window.pageXOffset - 8,
            width: targetElement.offsetWidth + 16,
            height: targetElement.offsetHeight + 16,
            border: "3px solid #3b82f6",
            borderRadius: "12px",
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
          }}
        />
      )}

      {/* Tour Card */}
      <div
        className="fixed z-50 w-80 max-w-[90vw]"
        style={{
          top: Math.max(20, Math.min(overlayPosition.top, window.innerHeight - 300)),
          left: Math.max(20, Math.min(overlayPosition.left - 160, window.innerWidth - 340)),
        }}
      >
        <Card className="shadow-2xl border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">
                Step {currentStep + 1} of {steps.length}
              </Badge>
              <Button variant="ghost" size="sm" onClick={endTour} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="text-lg">{currentTourStep.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{currentTourStep.content}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={endTour} className="text-gray-500">
                  <SkipForward className="h-4 w-4 mr-1" />
                  Skip Tour
                </Button>

                <Button size="sm" onClick={nextStep} className="flex items-center gap-1">
                  {currentStep === steps.length - 1 ? (
                    "Finish"
                  ) : (
                    <>
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
