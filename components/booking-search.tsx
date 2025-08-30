"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BookingSearch() {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    destination: "",
    duration: "",
    travelers: "",
    startDate: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchData.destination) params.append("destination", searchData.destination)
    if (searchData.duration) params.append("duration", searchData.duration)
    if (searchData.travelers) params.append("travelers", searchData.travelers)
    if (searchData.startDate) params.append("startDate", searchData.startDate)

    router.push(`/tours?${params.toString()}`)
  }

  return (
    <Card className="shadow-lg border-none bg-white/95 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-600" />
              Destination
            </Label>
            <Select
              value={searchData.destination}
              onValueChange={(value) => setSearchData((prev) => ({ ...prev, destination: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="riyadh">Riyadh</SelectItem>
                <SelectItem value="alula">AlUla</SelectItem>
                <SelectItem value="jeddah">Jeddah</SelectItem>
                <SelectItem value="diriyah">Diriyah</SelectItem>
                <SelectItem value="taif">Taif</SelectItem>
                <SelectItem value="abha">Abha</SelectItem>
                <SelectItem value="edge-of-world">Edge of the World</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-sky-600" />
              Duration
            </Label>
            <Select
              value={searchData.duration}
              onValueChange={(value) => setSearchData((prev) => ({ ...prev, duration: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 Days</SelectItem>
                <SelectItem value="5">5 Days</SelectItem>
                <SelectItem value="7">7 Days</SelectItem>
                <SelectItem value="10">10 Days</SelectItem>
                <SelectItem value="14">14 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelers" className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-sky-600" />
              Travelers
            </Label>
            <Select
              value={searchData.travelers}
              onValueChange={(value) => setSearchData((prev) => ({ ...prev, travelers: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4 Travelers</SelectItem>
                <SelectItem value="5">5+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-sm font-medium">
              Start Date
            </Label>
            <Input
              type="date"
              id="startDate"
              value={searchData.startDate}
              onChange={(e) => setSearchData((prev) => ({ ...prev, startDate: e.target.value }))}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="flex items-end">
            <Button onClick={handleSearch} className="w-full h-10 bg-sky-600 hover:bg-sky-700">
              <Search className="h-4 w-4 mr-2" />
              Search Tours
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
