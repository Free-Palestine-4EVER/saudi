import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Clock, Star, Globe, ExternalLink, ArrowLeft } from "lucide-react"
import { saudiEvents } from "@/data/saudi-events"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const eventId = Number.parseInt(params.id)
  const event = saudiEvents.find((e) => e.id === eventId)

  if (!event) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Sports: "bg-blue-500 text-white",
      Entertainment: "bg-purple-500 text-white",
      Culture: "bg-green-500 text-white",
      Traditional: "bg-amber-500 text-white",
      Film: "bg-red-500 text-white",
      Music: "bg-pink-500 text-white",
      Awards: "bg-yellow-500 text-black",
      Arts: "bg-indigo-500 text-white",
      Esports: "bg-cyan-500 text-white",
      Wellness: "bg-emerald-500 text-white",
      Fashion: "bg-rose-500 text-white",
    }
    return colors[category] || "bg-purple-500 text-white"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/events">
          <Button variant="ghost" className="mb-6 text-sand-600 hover:text-sand-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg?height=500&width=1200"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Event Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className={`${getCategoryColor(event.category)} text-sm font-bold`}>{event.category}</Badge>
              {event.featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold">
                  <Star className="h-3 w-3 mr-1" />
                  FEATURED
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{event.title}</h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span className="text-lg">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-lg">
                  {event.location}, {event.city}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-sand-800">About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{event.description}</p>

                {/* Highlights */}
                {event.highlights && event.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-sand-700 mb-4">Event Highlights</h3>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Venue Information */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-sand-800">Venue Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-sand-700 mb-2">{event.venue.name}</h4>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue.address}</span>
                    </div>
                    {event.venue.capacity && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="font-medium">Capacity:</span>
                        <span>{event.venue.capacity}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            {event.schedule && (
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-sand-800">Event Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {event.schedule.doors && (
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">Doors Open:</span>
                        <span>{event.schedule.doors}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Event Start:</span>
                      <span>{event.schedule.start}</span>
                    </div>
                    {event.schedule.end && (
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-red-500" />
                        <span className="font-medium">Event End:</span>
                        <span>{event.schedule.end}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="border-none shadow-lg sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl text-sand-800">Event Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{event.ticketPrice}</div>
                  <p className="text-gray-600 text-sm">Ticket prices vary by category</p>
                </div>

                <Separator />

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-lg py-6"
                >
                  <Link href={event.bookingLink} target="_blank" rel="noopener noreferrer">
                    Book Tickets
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  You will be redirected to the official booking platform
                </p>
              </CardContent>
            </Card>

            {/* Organizer Info */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-sand-800">Event Organizer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-sand-700 mb-3">{event.organizer.name}</h4>

                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={event.organizer.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Official Website
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-sand-800">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <Badge className={`${getCategoryColor(event.category)} text-xs`}>{event.category}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium">{event.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className="bg-blue-500 text-white text-xs">Check Official Website</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
