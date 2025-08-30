"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, Star, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { saudiEvents } from "@/data/saudi-events"

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCity, setSelectedCity] = useState("all")

  const categories = [
    "all",
    "Sports",
    "Entertainment",
    "Culture",
    "Traditional",
    "Film",
    "Music",
    "Awards",
    "Arts",
    "Esports",
    "Wellness",
    "Fashion",
  ]
  const cities = ["all", "Riyadh", "Jeddah", "AlUla", "Multiple Cities"]

  const filteredEvents = saudiEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesCity = selectedCity === "all" || event.city === selectedCity

    return matchesSearch && matchesCategory && matchesCity
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      Sports: "bg-blue-100 text-blue-700 border-blue-200",
      Entertainment: "bg-purple-100 text-purple-700 border-purple-200",
      Culture: "bg-green-100 text-green-700 border-green-200",
      Traditional: "bg-amber-100 text-amber-700 border-amber-200",
      Film: "bg-red-100 text-red-700 border-red-200",
      Music: "bg-pink-100 text-pink-700 border-pink-200",
      Awards: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Arts: "bg-indigo-100 text-indigo-700 border-indigo-200",
      Esports: "bg-cyan-100 text-cyan-700 border-cyan-200",
      Wellness: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Fashion: "bg-rose-100 text-rose-700 border-rose-200",
    }
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-sand-600 via-desert-600 to-amber-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Upcoming Events</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Saudi Arabia Events</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover the most exciting events happening across the Kingdom - from world-class entertainment to
              traditional celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Filter by:</span>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city === "all" ? "All Cities" : city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{filteredEvents.length} Events Found</h2>
            <p className="text-gray-600">
              {searchTerm && `Results for "${searchTerm}"`}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
              {selectedCity !== "all" && ` in ${selectedCity}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg?height=200&width=300"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg animate-pulse">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className={cn("text-xs font-medium border", getCategoryColor(event.category))}>
                        {event.category}
                      </Badge>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-3 right-3">
                      <Badge className="bg-white/90 text-gray-800 border-0 shadow-md">{event.price}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg leading-tight text-gray-800 group-hover:text-sand-700 transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 text-sand-600" />
                          <span>{event.date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-sand-600" />
                          <span className="line-clamp-1">
                            {event.location}, {event.city}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">Check Official Website</span>
                        </div>

                        <Button size="sm" className="bg-sand-600 hover:bg-sand-700 text-white text-xs px-4 py-1 h-8">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
