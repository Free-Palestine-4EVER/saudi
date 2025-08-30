"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  MapPin,
  Star,
  Sparkles,
  Camera,
  Shield,
  Award,
  Plane,
  Mountain,
  Calendar,
  Play,
} from "lucide-react"

export default function AlUlaHelicopterRide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-amber-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/alula-helicopter-aerial-view.png"
          alt="AlUla Helicopter Ride"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-black/50 to-amber-900/70" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-purple-300/40 animate-bounce delay-500">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="absolute top-32 right-20 text-amber-300/40 animate-bounce delay-1000">
            <Star className="h-5 w-5" />
          </div>
          <div className="absolute bottom-32 left-16 text-purple-400/40 animate-bounce delay-1500">
            <Plane className="h-7 w-7" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-amber-400 animate-pulse" />
              <Badge className="bg-gradient-to-r from-purple-600 to-amber-600 text-white px-4 py-2 text-lg font-bold">
                EXCLUSIVE EXPERIENCE
              </Badge>
              <Sparkles className="h-8 w-8 text-purple-400 animate-pulse delay-500" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-white to-amber-200 bg-clip-text text-transparent drop-shadow-2xl">
              Al Ula Helicopter Ride
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-purple-100 drop-shadow-lg max-w-3xl mx-auto">
              Soar above the ancient wonders of AlUla and witness the breathtaking landscapes from a bird's eye view
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/966123456789?text=I%20would%20like%20to%20book%20the%20AlUla%20Helicopter%20Ride%20experience",
                    "_blank",
                  )
                }
              >
                Book Now - From $1200
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-20 relative z-10">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <p className="text-muted-foreground">45 Minutes</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Capacity</h3>
                <p className="text-muted-foreground">Up to 6 Guests</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">AlUla, Saudi Arabia</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Rating</h3>
                <p className="text-muted-foreground">5.0 ★★★★★</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-amber-700 bg-clip-text text-transparent">
              Experience the Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our exclusive helicopter tour and see what awaits you above AlUla's magnificent landscapes
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-amber-900">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 mx-auto w-fit">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AlUla Helicopter Experience</h3>
                <p className="text-lg opacity-90">Click to watch the full journey</p>
              </div>
            </div>
            <Image
              src="/alula-helicopter-flying-over-desert-landscape-vide.png"
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-amber-700 bg-clip-text text-transparent">
              An Unforgettable Journey Above AlUla
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the magic of AlUla from above as you soar over ancient Nabataean tombs, dramatic rock
              formations, and the stunning desert landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-amber-100 rounded-lg">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Spectacular Photo Opportunities</h3>
                  <p className="text-muted-foreground">
                    Capture breathtaking aerial shots of Hegra's ancient tombs and AlUla's unique rock formations from
                    angles impossible to achieve on ground.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-amber-100 to-purple-100 rounded-lg">
                  <Mountain className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">UNESCO World Heritage Views</h3>
                  <p className="text-muted-foreground">
                    Soar above Saudi Arabia's first UNESCO World Heritage Site and witness 2,000-year-old Nabataean
                    architecture from a unique perspective.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-amber-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Safety Standards</h3>
                  <p className="text-muted-foreground">
                    Our experienced pilots and state-of-the-art helicopters ensure the highest safety standards for your
                    exclusive aerial adventure.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/alula-helicopter-interior.png"
                alt="Helicopter Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-amber-600 text-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="font-bold">Premium Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 via-black to-amber-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready for Your Exclusive Adventure?</h2>

          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-amber-700 bg-clip-text text-transparent">
                  AlUla Helicopter Experience
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    45-minute scenic flight
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-amber-600" />
                    Up to 6 passengers
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-purple-600" />
                    Professional photo opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-amber-600" />
                    Premium safety standards
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-800 to-amber-700 bg-clip-text text-transparent">
                  From $1200
                </div>
                <p className="text-muted-foreground mb-6">per person</p>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4"
                  onClick={() =>
                    window.open(
                      "https://wa.me/966123456789?text=I%20would%20like%20to%20book%20the%20AlUla%20Helicopter%20Ride%20experience",
                      "_blank",
                    )
                  }
                >
                  Book Your Flight Now
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://wa.me/966123456789?text=I%20would%20like%20to%20inquire%20about%20group%20bookings%20for%20the%20AlUla%20Helicopter%20Ride",
                      "_blank",
                    )
                  }
                >
                  Contact for Group Bookings
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
