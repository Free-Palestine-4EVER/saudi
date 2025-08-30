"use client"

import { Calendar } from "@/components/ui/calendar"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Cloud, Thermometer, Droplets, Wind, Eye, Umbrella, Shirt, Mountain, Waves, MapPin } from "lucide-react"

export default function WeatherPage() {
  const monthlyData = [
    {
      month: "January",
      temp: "15-25°C (59-77°F)",
      rainfall: "Low",
      humidity: "50-60%",
      description: "Cool and pleasant, perfect for sightseeing",
      clothing: "Light layers, jacket for evenings",
      activities: "Ideal for all outdoor activities",
    },
    {
      month: "February",
      temp: "17-27°C (63-81°F)",
      rainfall: "Low",
      humidity: "45-55%",
      description: "Mild temperatures, excellent weather",
      clothing: "Light clothing, light jacket",
      activities: "Perfect for desert tours and hiking",
    },
    {
      month: "March",
      temp: "22-32°C (72-90°F)",
      rainfall: "Low",
      humidity: "40-50%",
      description: "Warm days, comfortable evenings",
      clothing: "Light summer clothes",
      activities: "Great for all activities",
    },
    {
      month: "April",
      temp: "27-37°C (81-99°F)",
      rainfall: "Very Low",
      humidity: "35-45%",
      description: "Getting warmer, still comfortable",
      clothing: "Light, breathable fabrics",
      activities: "Good for morning and evening tours",
    },
    {
      month: "May",
      temp: "32-42°C (90-108°F)",
      rainfall: "Very Low",
      humidity: "30-40%",
      description: "Hot days, warm evenings",
      clothing: "Lightweight, sun protection",
      activities: "Early morning or late afternoon best",
    },
    {
      month: "June",
      temp: "35-45°C (95-113°F)",
      rainfall: "None",
      humidity: "25-35%",
      description: "Very hot, dry heat",
      clothing: "Minimal, breathable clothing",
      activities: "Indoor attractions recommended",
    },
    {
      month: "July",
      temp: "37-47°C (99-117°F)",
      rainfall: "None",
      humidity: "25-35%",
      description: "Peak summer heat",
      clothing: "Light colors, sun protection essential",
      activities: "Air-conditioned venues preferred",
    },
    {
      month: "August",
      temp: "37-46°C (99-115°F)",
      rainfall: "None",
      humidity: "30-40%",
      description: "Very hot, slightly more humid",
      clothing: "Breathable fabrics, hat essential",
      activities: "Indoor activities recommended",
    },
    {
      month: "September",
      temp: "33-43°C (91-109°F)",
      rainfall: "Very Low",
      humidity: "35-45%",
      description: "Still hot but improving",
      clothing: "Light clothing, sun protection",
      activities: "Late afternoon tours possible",
    },
    {
      month: "October",
      temp: "28-38°C (82-100°F)",
      rainfall: "Low",
      humidity: "40-50%",
      description: "Pleasant return of good weather",
      clothing: "Light summer clothes",
      activities: "Excellent for outdoor activities",
    },
    {
      month: "November",
      temp: "22-32°C (72-90°F)",
      rainfall: "Low",
      humidity: "45-55%",
      description: "Ideal weather returns",
      clothing: "Light layers recommended",
      activities: "Perfect for all tours",
    },
    {
      month: "December",
      temp: "17-27°C (63-81°F)",
      rainfall: "Low",
      humidity: "50-60%",
      description: "Cool and comfortable",
      clothing: "Light layers, jacket for evenings",
      activities: "Excellent for sightseeing",
    },
  ]

  const regionalWeather = [
    {
      region: "Riyadh (Central)",
      climate: "Desert Continental",
      summer: "Very hot (45°C+), dry",
      winter: "Mild (15-25°C), pleasant",
      rainfall: "Minimal year-round",
      bestTime: "October to March",
      icon: Sun,
    },
    {
      region: "Jeddah (Red Sea Coast)",
      climate: "Hot Desert Coastal",
      summer: "Hot (35-40°C), humid",
      winter: "Warm (20-30°C), comfortable",
      rainfall: "Very low, occasional showers",
      bestTime: "November to March",
      icon: Waves,
    },
    {
      region: "AlUla (Northwest)",
      climate: "Desert",
      summer: "Very hot (40°C+), dry",
      winter: "Cool (10-25°C), ideal",
      rainfall: "Minimal",
      bestTime: "October to March",
      icon: Mountain,
    },
    {
      region: "Abha (Southwest Mountains)",
      climate: "Highland Subtropical",
      summer: "Mild (20-30°C), some rain",
      winter: "Cool (5-20°C), pleasant",
      rainfall: "Highest in Saudi Arabia",
      bestTime: "March to October",
      icon: Mountain,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Saudi Arabia Weather Guide
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Plan your perfect trip with our comprehensive weather guide. Discover the best times to visit different
            regions of Saudi Arabia and what to expect throughout the year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
              <Sun className="h-4 w-4 mr-2" />
              Year-Round Sunshine
            </Badge>
            <Badge className="bg-cyan-600 text-white px-4 py-2 text-sm">
              <Thermometer className="h-4 w-4 mr-2" />
              Desert Climate
            </Badge>
            <Badge className="bg-teal-600 text-white px-4 py-2 text-sm">
              <Mountain className="h-4 w-4 mr-2" />
              Regional Variations
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Best Time to Visit */}
        <Card className="mb-8 border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="text-2xl text-center">Best Time to Visit Saudi Arabia</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-bold text-green-800 mb-2">Peak Season</h3>
                <p className="text-green-700 font-medium mb-2">November - February</p>
                <p className="text-sm text-green-600">
                  Perfect weather with mild temperatures (15-30°C). Ideal for all outdoor activities and sightseeing.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="text-4xl mb-3">☀️</div>
                <h3 className="font-bold text-yellow-800 mb-2">Good Season</h3>
                <p className="text-yellow-700 font-medium mb-2">March - April, October</p>
                <p className="text-sm text-yellow-600">
                  Warm but comfortable (20-35°C). Great for most activities with some planning around midday heat.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="font-bold text-orange-800 mb-2">Hot Season</h3>
                <p className="text-orange-700 font-medium mb-2">May - September</p>
                <p className="text-sm text-orange-600">
                  Very hot (35-45°C+). Best for indoor attractions, early morning, or late evening activities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Monthly Weather */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Monthly Weather Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="jan-mar" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="jan-mar">Jan-Mar</TabsTrigger>
                    <TabsTrigger value="apr-jun">Apr-Jun</TabsTrigger>
                    <TabsTrigger value="jul-sep">Jul-Sep</TabsTrigger>
                    <TabsTrigger value="oct-dec">Oct-Dec</TabsTrigger>
                  </TabsList>

                  <TabsContent value="jan-mar" className="mt-6">
                    <div className="grid gap-4">
                      {monthlyData.slice(0, 3).map((month, index) => (
                        <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-blue-800">{month.month}</h3>
                            <Badge className="bg-blue-600 text-white">{month.temp}</Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-blue-700 mb-1">Weather</p>
                              <p className="text-blue-600">{month.description}</p>
                            </div>
                            <div>
                              <p className="font-medium text-blue-700 mb-1">What to Wear</p>
                              <p className="text-blue-600">{month.clothing}</p>
                            </div>
                            <div>
                              <p className="font-medium text-blue-700 mb-1">Best Activities</p>
                              <p className="text-blue-600">{month.activities}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="apr-jun" className="mt-6">
                    <div className="grid gap-4">
                      {monthlyData.slice(3, 6).map((month, index) => (
                        <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-yellow-800">{month.month}</h3>
                            <Badge className="bg-yellow-600 text-white">{month.temp}</Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-yellow-700 mb-1">Weather</p>
                              <p className="text-yellow-600">{month.description}</p>
                            </div>
                            <div>
                              <p className="font-medium text-yellow-700 mb-1">What to Wear</p>
                              <p className="text-yellow-600">{month.clothing}</p>
                            </div>
                            <div>
                              <p className="font-medium text-yellow-700 mb-1">Best Activities</p>
                              <p className="text-yellow-600">{month.activities}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="jul-sep" className="mt-6">
                    <div className="grid gap-4">
                      {monthlyData.slice(6, 9).map((month, index) => (
                        <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-red-800">{month.month}</h3>
                            <Badge className="bg-red-600 text-white">{month.temp}</Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-red-700 mb-1">Weather</p>
                              <p className="text-red-600">{month.description}</p>
                            </div>
                            <div>
                              <p className="font-medium text-red-700 mb-1">What to Wear</p>
                              <p className="text-red-600">{month.clothing}</p>
                            </div>
                            <div>
                              <p className="font-medium text-red-700 mb-1">Best Activities</p>
                              <p className="text-red-600">{month.activities}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="oct-dec" className="mt-6">
                    <div className="grid gap-4">
                      {monthlyData.slice(9, 12).map((month, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-green-800">{month.month}</h3>
                            <Badge className="bg-green-600 text-white">{month.temp}</Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-green-700 mb-1">Weather</p>
                              <p className="text-green-600">{month.description}</p>
                            </div>
                            <div>
                              <p className="font-medium text-green-700 mb-1">What to Wear</p>
                              <p className="text-green-600">{month.clothing}</p>
                            </div>
                            <div>
                              <p className="font-medium text-green-700 mb-1">Best Activities</p>
                              <p className="text-green-600">{month.activities}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Regional Weather */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Regional Weather Differences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {regionalWeather.map((region, index) => {
                    const IconComponent = region.icon
                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-cyan-100 rounded-full">
                            <IconComponent className="h-6 w-6 text-cyan-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-cyan-800">{region.region}</h3>
                            <p className="text-sm text-cyan-600">{region.climate}</p>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Sun className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                <strong>Summer:</strong> {region.summer}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Cloud className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">
                                <strong>Winter:</strong> {region.winter}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Droplets className="h-4 w-4 text-blue-400" />
                              <span className="text-sm">
                                <strong>Rainfall:</strong> {region.rainfall}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Eye className="h-4 w-4 text-green-500" />
                              <span className="text-sm">
                                <strong>Best Time:</strong> {region.bestTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Packing Guide */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shirt className="h-6 w-6" />
                  Seasonal Packing Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <Cloud className="h-5 w-5" />
                      Cool Season (Nov-Mar)
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Light layers for daytime</li>
                      <li>• Warm jacket or sweater for evenings</li>
                      <li>• Long pants and comfortable shoes</li>
                      <li>• Light scarf for desert areas</li>
                      <li>• Sunglasses and sunscreen</li>
                      <li>• Hat for sun protection</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                      <Sun className="h-5 w-5" />
                      Hot Season (Apr-Oct)
                    </h3>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Lightweight, breathable fabrics</li>
                      <li>• Light-colored clothing</li>
                      <li>• Wide-brimmed hat essential</li>
                      <li>• High SPF sunscreen</li>
                      <li>• Comfortable walking shoes</li>
                      <li>• Portable fan or cooling towel</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Weather Quick Facts */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Weather Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Thermometer className="h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Average:</strong> 25°C (77°F)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sun className="h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Sunshine:</strong> 300+ days/year
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Droplets className="h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Rainfall:</strong> 50-100mm/year
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wind className="h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Humidity:</strong> 20-60%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Weather Warnings */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Umbrella className="h-5 w-5" />
                  Weather Warnings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <div className="text-sm">
                  <p className="font-medium text-orange-800 mb-2">Summer Heat (Jun-Aug)</p>
                  <ul className="text-orange-700 space-y-1 text-xs">
                    <li>• Temperatures can exceed 45°C (113°F)</li>
                    <li>• Stay hydrated and seek shade</li>
                    <li>• Avoid midday outdoor activities</li>
                    <li>• Heat exhaustion risk is high</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-orange-800 mb-2">Sandstorms</p>
                  <ul className="text-orange-700 space-y-1 text-xs">
                    <li>• Occasional dust storms</li>
                    <li>• Reduced visibility</li>
                    <li>• Stay indoors when possible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Best Activities by Season */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Best Activities by Season</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Cool Season (Nov-Mar)</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Desert camping and stargazing</li>
                    <li>• Hiking and outdoor adventures</li>
                    <li>• Archaeological site visits</li>
                    <li>• City walking tours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800 mb-2">Hot Season (Jun-Sep)</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Indoor museums and attractions</li>
                    <li>• Shopping malls and markets</li>
                    <li>• Early morning activities</li>
                    <li>• Air-conditioned cultural sites</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Weather Apps */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Recommended Weather Apps</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <div className="text-sm">
                  <p className="font-medium">AccuWeather</p>
                  <p className="text-gray-600">Detailed forecasts and alerts</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Weather.com</p>
                  <p className="text-gray-600">Hourly and 10-day forecasts</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Saudi Weather</p>
                  <p className="text-gray-600">Local weather service app</p>
                </div>
              </CardContent>
            </Card>

            {/* Need Help? */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Weather Questions?</h3>
                <p className="text-green-700 text-sm mb-4">
                  Get personalized weather advice for your Saudi Arabia trip dates.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Ask Our Experts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
