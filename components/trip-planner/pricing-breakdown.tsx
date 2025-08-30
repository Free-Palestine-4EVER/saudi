"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown, Info } from "lucide-react"
import type { TripPlan } from "@/components/trip-planner-form"

interface PricingBreakdownProps {
  tripPlan: TripPlan
}

export function PricingBreakdown({ tripPlan }: PricingBreakdownProps) {
  const pricing = calculateDetailedPricing(tripPlan)

  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader className="bg-green-600 text-white">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Estimated Pricing
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-800">${pricing.total.toLocaleString()}</div>
          <div className="text-sm text-green-600">Total for {tripPlan.groupSize} travelers</div>
          <div className="text-lg font-semibold text-green-700 mt-1">
            ${Math.round(pricing.total / tripPlan.groupSize)} per person
          </div>
        </div>

        <div className="space-y-3 border-t pt-4">
          <h4 className="font-semibold text-green-800">Price Breakdown</h4>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Base tour ({tripPlan.duration} days)</span>
              <span>${pricing.baseTour.toLocaleString()}</span>
            </div>

            {pricing.destinations > 0 && (
              <div className="flex justify-between text-sm">
                <span>Destinations ({tripPlan.destinations.length})</span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-orange-500" />${pricing.destinations.toLocaleString()}
                </span>
              </div>
            )}

            {pricing.activities > 0 && (
              <div className="flex justify-between text-sm">
                <span>Activities ({tripPlan.activities.length})</span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-orange-500" />${pricing.activities.toLocaleString()}
                </span>
              </div>
            )}

            {pricing.accommodation !== 0 && (
              <div className="flex justify-between text-sm">
                <span>Accommodation upgrade</span>
                <span className="flex items-center gap-1">
                  {pricing.accommodation > 0 ? (
                    <>
                      <TrendingUp className="w-3 h-3 text-orange-500" />
                      +${pricing.accommodation.toLocaleString()}
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-3 h-3 text-green-500" />${pricing.accommodation.toLocaleString()}
                    </>
                  )}
                </span>
              </div>
            )}

            {pricing.transportation !== 0 && (
              <div className="flex justify-between text-sm">
                <span>Transportation</span>
                <span className="flex items-center gap-1">
                  {pricing.transportation > 0 ? (
                    <>
                      <TrendingUp className="w-3 h-3 text-orange-500" />
                      +${pricing.transportation.toLocaleString()}
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-3 h-3 text-green-500" />${pricing.transportation.toLocaleString()}
                    </>
                  )}
                </span>
              </div>
            )}

            {pricing.groupDiscount < 0 && (
              <div className="flex justify-between text-sm">
                <span>Group discount</span>
                <span className="flex items-center gap-1 text-green-600">
                  <TrendingDown className="w-3 h-3 text-green-500" />${Math.abs(pricing.groupDiscount).toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 border border-green-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-500 mt-0.5" />
            <div className="text-xs text-gray-600">
              <p className="font-medium mb-1">What's Included:</p>
              <ul className="space-y-0.5">
                <li>• Accommodation for {tripPlan.duration - 1} nights</li>
                <li>• Transportation as selected</li>
                <li>• Professional Saudi guide</li>
                <li>• All entrance fees</li>
                <li>• Daily breakfast</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Badge className="bg-blue-600 text-white">Final quote within 24 hours</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function calculateDetailedPricing(tripPlan: TripPlan) {
  const baseDailyRate = 150
  const baseTour = tripPlan.duration * baseDailyRate * tripPlan.groupSize

  // Destination costs
  const destinationCost = tripPlan.destinations.length * 200 * tripPlan.groupSize

  // Activity costs
  const activityCost = tripPlan.activities.length * 150 * tripPlan.groupSize

  // Accommodation adjustments
  const accommodationMultipliers = {
    budget: -0.2,
    "mid-range": 0,
    luxury: 0.8,
    "desert-camps": 0.4,
    resorts: 0.6,
    heritage: 0.3,
  }
  const accommodationAdjustment = baseTour * (accommodationMultipliers[tripPlan.accommodation] || 0)

  // Transportation adjustments
  const transportationMultipliers = {
    "private-car": 0.2,
    "domestic-flights": 0.4,
    "luxury-coach": -0.2,
    "rental-car": -0.1,
    "mixed-transport": 0.1,
  }
  const transportationAdjustment = baseTour * (transportationMultipliers[tripPlan.transportation] || 0)

  // Group discount
  const groupDiscount = tripPlan.groupSize > 2 ? -(baseTour * 0.05 * (tripPlan.groupSize - 2)) : 0

  const total = Math.round(
    baseTour + destinationCost + activityCost + accommodationAdjustment + transportationAdjustment + groupDiscount,
  )

  return {
    baseTour: Math.round(baseTour),
    destinations: Math.round(destinationCost),
    activities: Math.round(activityCost),
    accommodation: Math.round(accommodationAdjustment),
    transportation: Math.round(transportationAdjustment),
    groupDiscount: Math.round(groupDiscount),
    total,
  }
}
