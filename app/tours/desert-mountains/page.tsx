"use client"

import { useState } from "react"
import {
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Globe,
  Star,
  Clock,
  Shield,
  Phone,
  Map,
  MessageSquare,
  HelpCircle,
  Mountain,
  Compass,
  Check,
  Info,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import BookingForm from "@/components/booking-form"
import BubbleButton from "@/components/bubble-button"
import ReviewForm from "@/components/review-form"
import { useCurrency } from "@/contexts/currency-context"

export default function DesertMountainsPage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Desert & Mountains",
    slug: "desert-mountains",
    duration: 8,
    price: 1999,
    rating: 4.8,
    reviews: 112,
    description:
      "Experience the dramatic contrasts of Saudi Arabia's landscapes on this 8-day adventure. From the vast deserts of the Empty Quarter to the green mountains of Asir, discover the Kingdom's incredible natural diversity and outdoor adventures.",
    highlights: [
      "Explore the vast Empty Quarter (Rub' al Khali) desert",
      "Hike in the green mountains of Asir Province",
      "Visit traditional mountain villages and terraced farms",
      "Experience desert camping under starlit skies",
      "Discover unique flora and fauna of different regions",
      "Adventure activities: sandboarding, rock climbing, hiking",
      "Meet Bedouin communities and learn desert survival",
      "Photography workshops in stunning landscapes",
    ],
    includes: [
      "7 nights mixed accommodation (desert camps & mountain lodges)",
      "All meals featuring regional specialties",
      "Professional adventure guide and equipment",
      "4WD desert vehicles and mountain transport",
      "All adventure activities and equipment",
      "Desert camping with traditional entertainment",
      "Hiking guides and safety equipment",
      "Photography workshop and equipment",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal adventure gear",
      "Optional helicopter tours",
      "Spa treatments",
      "Alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Desert Introduction",
        description: "Begin your adventure with traditional Bedouin hospitality and desert survival techniques.",
        image: "/saudi-desert-camp.png",
        activities: [
          "Airport pickup in Riyadh and transfer to desert camp",
          "Welcome lunch with traditional Bedouin hospitality",
          "Introduction to desert survival techniques",
          "Sunset camel ride and sandboarding experience",
          "Traditional dinner around campfire with local entertainment",
        ],
        meals: ["Lunch", "Dinner"],
        accommodation: "Traditional desert camp",
      },
      {
        day: 2,
        title: "Empty Quarter Exploration",
        description: "Journey into the world's largest continuous sand desert for an unforgettable 4WD adventure.",
        image: "/empty-quarter-desert-dunes.png",
        activities: [
          "Early morning departure to Rub' al Khali (Empty Quarter)",
          "4WD adventure through massive sand dunes",
          "Visit to ancient caravan routes and archaeological sites",
          "Lunch in the heart of the world's largest sand desert",
          "Photography workshop during golden hour",
          "Night camping under the stars with astronomy session",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert camp under stars",
      },
      {
        day: 3,
        title: "Desert to Mountains Transition",
        description: "Travel from the endless sands to the cool mountain air of Asir Province.",
        image: "/saudi-oasis-town.png",
        activities: [
          "Sunrise photography in the desert",
          "Journey south towards Asir Province",
          "Stop at traditional oasis towns along the way",
          "Lunch in Najran with local specialties",
          "Arrival in Abha, the mountain capital",
          "Evening exploration of Abha's cool mountain air",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain lodge in Abha",
      },
      {
        day: 4,
        title: "Asir Mountains Adventure",
        description: "Explore the green mountains with hiking, village visits, and rock climbing activities.",
        image: "/asir-mountains-green-hiking.png",
        activities: [
          "Morning hike in Asir National Park",
          "Visit to traditional mountain villages",
          "Explore terraced farms and ancient irrigation systems",
          "Lunch with local families in mountain village",
          "Rock climbing and rappelling activities",
          "Evening at mountain lodge with panoramic views",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain lodge with views",
      },
      {
        day: 5,
        title: "Green Mountains & Culture",
        description: "Discover the heritage village of Rijal Almaa and traditional mountain crafts.",
        image: "/rijal-almaa-heritage-village.png",
        activities: [
          "Visit to Rijal Almaa heritage village",
          "Explore traditional stone houses and museums",
          "Meet local artisans and learn traditional crafts",
          "Hiking through juniper forests and mountain trails",
          "Traditional mountain lunch with local families",
          "Evening cultural performance and storytelling",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage mountain lodge",
      },
      {
        day: 6,
        title: "Adventure Activities Day",
        description: "Experience thrilling mountain adventures including zip-lining and paragliding.",
        image: "/al-soudah-park-cable-car.png",
        activities: [
          "Morning zip-lining and adventure park activities",
          "Mountain biking through scenic trails",
          "Visit to Al-Soudah Park, Saudi's highest peak",
          "Cable car ride with spectacular mountain views",
          "Paragliding experience (weather permitting)",
          "Farewell dinner at mountain resort",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain resort",
      },
      {
        day: 7,
        title: "Cultural Immersion",
        description: "Immerse yourself in local culture with markets, coffee ceremonies, and ancient art.",
        image: "/saudi-mountain-market-spices.png",
        activities: [
          "Visit to local markets and spice souks",
          "Traditional coffee ceremony and cultural exchange",
          "Exploration of ancient petroglyphs and rock art",
          "Lunch at traditional mountain restaurant",
          "Shopping for local handicrafts and souvenirs",
          "Final night celebration with group",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain lodge",
      },
      {
        day: 8,
        title: "Departure",
        description: "Final mountain sunrise before departure with unforgettable memories.",
        image: "/mountain-sunrise-saudi.png",
        activities: [
          "Sunrise viewing from mountain peak",
          "Final breakfast at lodge",
          "Transfer to Abha Airport",
          "Departure with unforgettable memories",
        ],
        meals: ["Breakfast"],
      },
    ],
  }

  const upcomingDepartures = [
    { date: "March 20, 2024", price: 1999, availability: "2 spots left" },
    { date: "April 3, 2024", price: 1999, availability: "Available" },
    { date: "April 17, 2024", price: 2099, availability: "Available" },
    { date: "May 1, 2024", price: 2099, availability: "1 spot left" },
  ]

  return (
    <main className="pt-24 pb-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/tours" className="hover:underline">
            Tours
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>{tour.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold">{tour.title}</h1>
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-primary" />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{tour.duration} days</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Desert & Mountains, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Max 8 adventurers</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span>English, Arabic</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-2xl font-bold text-white mb-2">Desert & Mountain Adventure</h2>
                <p className="text-white/90">From endless sands to green peaks</p>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-8">
                <TabsTrigger value="itinerary" className="flex items-center gap-2">
                  <Mountain className="h-4 w-4" />
                  Itinerary
                </TabsTrigger>
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Compass className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="includes" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Includes
                </TabsTrigger>
                <TabsTrigger value="map" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  Map
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Reviews
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-orange-700">Adventure Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <Card
                        key={day.day}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-lg">Day {day.day}</h3>
                            <Badge variant="secondary" className="bg-white/20">
                              {day.title}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-48 md:h-auto">
                              <Image
                                src={day.image || "/placeholder.svg"}
                                alt={day.title}
                                fill
                                className="object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-4 md:w-2/3">
                              <p className="mb-4">{day.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h4 className="text-sm font-medium text-orange-700 mb-2">Today's Adventures:</h4>
                                  <ul className="space-y-1">
                                    {day.activities.map((activity, index) => (
                                      <li key={index} className="flex items-center gap-2 text-sm">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>{activity}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <div className="mb-3">
                                    <h4 className="text-sm font-medium text-orange-700 mb-1">Meals Included:</h4>
                                    <div className="flex gap-2">
                                      {day.meals.map((meal, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                          {meal}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  {day.accommodation && (
                                    <div>
                                      <h4 className="text-sm font-medium text-orange-700 mb-1">Accommodation:</h4>
                                      <p className="text-sm">{day.accommodation}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="overview" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-4 text-orange-700">Adventure Overview</h3>
                  <p className="text-lg mb-6">{tour.description}</p>

                  <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
                      <Mountain className="h-5 w-5 mr-2 text-orange-500" />
                      Adventure Highlights
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                          <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="includes" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-orange-700">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-700">
                        <Check className="h-5 w-5 text-green-600" />
                        Adventure Package Includes
                      </h3>
                      <ul className="space-y-3">
                        {tour.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 bg-white p-2 rounded-lg shadow-sm">
                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-700">
                        <Info className="h-5 w-5 text-gray-500" />
                        Not Included
                      </h3>
                      <ul className="space-y-3">
                        {tour.excludes.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600 bg-white p-2 rounded-lg shadow-sm"
                          >
                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="map" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-4 text-orange-700">Adventure Route</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive map will be displayed here</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 text-orange-700">Adventure Reviews</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Mike R.</span>
                        <span className="text-sm text-gray-500">February 2024</span>
                      </div>
                      <p className="text-gray-700">
                        "Epic adventure from desert to mountains! The contrast in landscapes was incredible and the
                        guides were fantastic."
                      </p>
                    </div>
                  </div>
                  <ReviewForm />
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 text-orange-700">Adventure FAQ</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">What fitness level is required for this adventure?</h4>
                      <p className="text-gray-700">
                        This tour requires a good level of fitness as it includes hiking, rock climbing, and outdoor
                        activities. Participants should be comfortable with moderate physical exertion.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">What should I pack for the desert and mountains?</h4>
                      <p className="text-gray-700">
                        Pack layers for temperature variations, sturdy hiking boots, sun protection, and personal
                        adventure gear. We provide a detailed packing list upon booking.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book Adventure</h3>
                  <p className="text-white/80">Epic landscapes await!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-orange-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium">Small group adventure</span>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Professional adventure guides</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Departures */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Upcoming Adventures</h3>
                  <div className="space-y-3">
                    {upcomingDepartures.map((departure, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{departure.date}</div>
                          <div className="text-sm text-gray-600">{departure.availability}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-orange-700">{formatPrice(departure.price)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white p-4">
                  <h3 className="font-bold text-xl">Adventure Experts</h3>
                  <p className="text-white/80">Safety first, adventure always</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Adventure Line</div>
                        <a href="tel:+966-800-ADVENTURE" className="font-medium hover:underline text-orange-700">
                          +966-800-ADVENTURE
                        </a>
                      </div>
                    </div>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Speak to Adventure Guide</Link>
                    </BubbleButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
