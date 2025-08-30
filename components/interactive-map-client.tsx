"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, Navigation, Layers } from "lucide-react"
import type { TourRoute } from "@/data/tour-routes"

interface InteractiveMapClientProps {
  routes?: TourRoute[]
}

export default function InteractiveMapClient({ routes = [] }: InteractiveMapClientProps) {
  const [selectedRoute, setSelectedRoute] = useState<TourRoute | null>(null)
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleRouteSelect = (route: TourRoute) => {
    setSelectedRoute(route)
  }

  const toggleMapType = () => {
    setMapType((prev) => (prev === "roadmap" ? "satellite" : "roadmap"))
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-orange-700">Loading Saudi Arabia Map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Map Area */}
      <div className="lg:col-span-2">
        <div className="relative">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button variant="outline" size="sm" onClick={toggleMapType} className="bg-white/90 backdrop-blur-sm">
              <Layers className="h-4 w-4 mr-2" />
              {mapType === "roadmap" ? "Satellite" : "Road"}
            </Button>
          </div>

          <div
            className={`w-full h-[600px] rounded-lg overflow-hidden ${
              mapType === "satellite"
                ? "bg-gradient-to-br from-amber-900 via-orange-800 to-red-900"
                : "bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
            }`}
          >
            {/* Simulated Map with Saudi Arabia outline */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center text-orange-800">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-orange-600" />
                <h3 className="text-2xl font-bold mb-2">Saudi Arabia Interactive Map</h3>
                <p className="text-lg">Explore tour routes across the Kingdom</p>

                {/* Sample route markers */}
                <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer"
                    title="Riyadh"
                    onClick={() => routes[0] && handleRouteSelect(routes[0])}
                  ></div>
                </div>
                <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-4 h-4 bg-blue-500 rounded-full animate-pulse cursor-pointer"
                    title="AlUla"
                    onClick={() => routes[1] && handleRouteSelect(routes[1])}
                  ></div>
                </div>
                <div className="absolute top-2/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-4 h-4 bg-green-500 rounded-full animate-pulse cursor-pointer"
                    title="Jeddah"
                    onClick={() => routes[2] && handleRouteSelect(routes[2])}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Selection Panel */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              Tour Routes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {routes && routes.length > 0 ? (
                routes.map((route) => (
                  <div
                    key={route.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedRoute?.id === route.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300 hover:bg-orange-25"
                    }`}
                    onClick={() => handleRouteSelect(route)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{route.name}</h4>
                      <Badge
                        variant={
                          route.difficulty === "Easy"
                            ? "secondary"
                            : route.difficulty === "Moderate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {route.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {route.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />${route.price}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No tour routes available</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Selected Route Details */}
        {selectedRoute && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">{selectedRoute.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{selectedRoute.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                  <div className="font-medium">{selectedRoute.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Price</div>
                  <div className="font-medium">${selectedRoute.price}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Start</div>
                  <div className="font-medium">{selectedRoute.startLocation}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">End</div>
                  <div className="font-medium">{selectedRoute.endLocation}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-muted-foreground mb-2">Highlights</div>
                <div className="space-y-1">
                  {selectedRoute.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Star className="h-3 w-3 text-yellow-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Book This Tour</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
