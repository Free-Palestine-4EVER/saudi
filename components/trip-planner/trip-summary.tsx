"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Activity, Bed, Car, Users, DollarSign, Send } from "lucide-react"
import type { TripPlan } from "@/components/trip-planner-form"

interface TripSummaryProps {
  tripPlan: TripPlan
  updateTripPlan: (updates: Partial<TripPlan>) => void
}

const destinationNames = {
  riyadh: "Riyadh",
  alula: "AlUla",
  jeddah: "Jeddah",
  diriyah: "Diriyah",
  "edge-of-world": "Edge of the World",
  "red-sand-dunes": "Red Sand Dunes",
  taif: "Taif",
  abha: "Abha",
}

const activityNames = {
  "heritage-tours": "Heritage & Culture",
  "desert-adventures": "Desert Adventures",
  "mountain-hiking": "Mountain Hiking",
  "red-sea-activities": "Red Sea Activities",
  "adventure-sports": "Adventure Sports",
  "culinary-experiences": "Culinary Experiences",
  "photography-tours": "Photography Tours",
  "wellness-relaxation": "Wellness & Relaxation",
}

const accommodationNames = {
  budget: "Budget Hotels",
  "mid-range": "Mid-Range Hotels",
  luxury: "Luxury Hotels",
  "desert-camps": "Desert Camps",
  resorts: "Beach & Mountain Resorts",
  heritage: "Heritage Hotels",
}

const transportationNames = {
  "private-car": "Private Car with Driver",
  "domestic-flights": "Domestic Flights",
  "luxury-coach": "Luxury Coach",
  "rental-car": "Self-Drive Rental",
  "mixed-transport": "Mixed Transportation",
}

export function TripSummary({ tripPlan, updateTripPlan }: TripSummaryProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const estimatedPrice = calculateEstimatedPrice(tripPlan)

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Trip Request Sent!</h3>
          <p className="text-gray-600">
            Thank you for planning your Saudi Arabia adventure with us. Our travel experts will contact you within 24
            hours with a detailed itinerary and pricing.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-800 font-medium">What happens next?</p>
          <ul className="text-sm text-green-700 mt-2 space-y-1">
            <li>• Our Saudi Arabia specialists will review your preferences</li>
            <li>• We'll create a detailed day-by-day itinerary</li>
            <li>• You'll receive a comprehensive quote within 24 hours</li>
            <li>• We'll be available to make any adjustments you need</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Your Saudi Arabia Adventure Summary</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Review your trip details and provide your contact information to receive a detailed quote
        </p>
      </div>

      {/* Trip Overview */}
      <Card className="border-orange-200">
        <CardHeader className="bg-orange-50">
          <CardTitle className="text-orange-800">Trip Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium">Duration</p>
                <p className="text-sm text-gray-600">{tripPlan.duration} days in Saudi Arabia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium">Group Size</p>
                <p className="text-sm text-gray-600">{tripPlan.groupSize} travelers</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-orange-600 mt-1" />
            <div>
              <p className="font-medium mb-2">Destinations</p>
              <div className="flex flex-wrap gap-2">
                {tripPlan.destinations.map((dest) => (
                  <Badge key={dest} className="bg-orange-100 text-orange-800">
                    {destinationNames[dest] || dest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Activity className="w-5 h-5 text-orange-600 mt-1" />
            <div>
              <p className="font-medium mb-2">Activities</p>
              <div className="flex flex-wrap gap-2">
                {tripPlan.activities.map((activity) => (
                  <Badge key={activity} variant="outline" className="border-orange-600 text-orange-700">
                    {activityNames[activity] || activity}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Bed className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium">Accommodation</p>
                <p className="text-sm text-gray-600">{accommodationNames[tripPlan.accommodation] || "Not selected"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium">Transportation</p>
                <p className="text-sm text-gray-600">
                  {transportationNames[tripPlan.transportation] || "Not selected"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t">
            <DollarSign className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium">Estimated Price</p>
              <p className="text-lg font-bold text-green-600">${estimatedPrice.toLocaleString()} total</p>
              <p className="text-sm text-gray-600">${Math.round(estimatedPrice / tripPlan.groupSize)} per person</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-orange-200">
        <CardHeader className="bg-orange-50">
          <CardTitle className="text-orange-800">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="Your full name" className="border-orange-200" />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="border-orange-200" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" className="border-orange-200" />
            </div>
            <div>
              <Label htmlFor="startDate">Preferred Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={tripPlan.startDate}
                onChange={(e) => updateTripPlan({ startDate: e.target.value })}
                className="border-orange-200"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="requests">Special Requests or Questions</Label>
            <Textarea
              id="requests"
              placeholder="Any special requirements, dietary restrictions, accessibility needs, or questions about your Saudi Arabia trip..."
              value={tripPlan.specialRequests}
              onChange={(e) => updateTripPlan({ specialRequests: e.target.value })}
              className="border-orange-200"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Sending Request...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Trip Request
            </>
          )}
        </Button>
        <p className="text-sm text-gray-600 mt-2">Our Saudi Arabia travel experts will contact you within 24 hours</p>
      </div>
    </div>
  )
}

function calculateEstimatedPrice(tripPlan: TripPlan): number {
  let basePrice = tripPlan.duration * 150 // Base daily rate

  // Destination multiplier
  const destinationMultiplier = Math.max(1, tripPlan.destinations.length * 0.3)
  basePrice *= destinationMultiplier

  // Activity multiplier
  const activityMultiplier = Math.max(1, tripPlan.activities.length * 0.2)
  basePrice *= activityMultiplier

  // Accommodation multiplier
  const accommodationMultipliers = {
    budget: 0.8,
    "mid-range": 1.0,
    luxury: 1.8,
    "desert-camps": 1.4,
    resorts: 1.6,
    heritage: 1.3,
  }
  basePrice *= accommodationMultipliers[tripPlan.accommodation] || 1.0

  // Transportation multiplier
  const transportationMultipliers = {
    "private-car": 1.2,
    "domestic-flights": 1.4,
    "luxury-coach": 0.8,
    "rental-car": 0.9,
    "mixed-transport": 1.1,
  }
  basePrice *= transportationMultipliers[tripPlan.transportation] || 1.0

  // Group size adjustment
  const groupDiscount = Math.max(0.7, 1 - (tripPlan.groupSize - 1) * 0.05)
  basePrice *= groupDiscount

  return Math.round(basePrice * tripPlan.groupSize)
}
