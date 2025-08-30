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
  Camera,
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

export default function AlUlaHegraExplorerPage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "AlUla & Hegra Explorer",
    slug: "alula-hegra-explorer",
    duration: 5,
    price: 1299,
    rating: 4.8,
    reviews: 89,
    description:
      "Discover the ancient wonders of AlUla and the UNESCO World Heritage site of Hegra on this immersive 5-day journey. Explore well-preserved Nabataean tombs, stunning rock formations, and learn about the rich history of this remarkable region.",
    highlights: [
      "Explore Hegra Archaeological Site with over 100 Nabataean tombs",
      "Visit the iconic Elephant Rock at sunset",
      "Discover AlUla Old Town and its traditional architecture",
      "Experience the modern Maraya Concert Hall",
      "Learn about ancient Dadanite and Lihyanite civilizations",
      "Enjoy luxury desert camping under the stars",
      "Take guided tours with expert archaeologists",
      "Photography workshops in stunning landscapes",
    ],
    includes: [
      "4 nights accommodation in luxury desert resort",
      "All meals (breakfast, lunch, dinner)",
      "Professional archaeological guide",
      "All entrance fees to sites and attractions",
      "Desert camping experience with traditional dinner",
      "Photography workshop and equipment",
      "All transfers in air-conditioned vehicles",
      "Bottled water and refreshments during tours",
    ],
    excludes: [
      "International flights to AlUla",
      "Travel insurance",
      "Personal expenses and souvenirs",
      "Optional helicopter tour",
      "Spa treatments at resort",
      "Alcoholic beverages",
    ],
    images: [
      "/images/alula-hegra.png",
      "/images/elephant-rock.png",
      "/images/alula-old-town.png",
      "/images/maraya-hall.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in AlUla",
        description: "Begin your archaeological journey in the ancient oasis of AlUla with sunset at Elephant Rock.",
        image: "/images/alula-hegra.png",
        activities: [
          "Airport pickup and transfer to luxury desert resort",
          "Welcome lunch featuring local cuisine",
          "Orientation session about AlUla's history and significance",
          "Sunset visit to Elephant Rock with photography session",
          "Traditional dinner at the resort",
        ],
        meals: ["Lunch", "Dinner"],
        accommodation: "Luxury desert resort in AlUla",
      },
      {
        day: 2,
        title: "Hegra Archaeological Site",
        description: "Explore the UNESCO World Heritage site of Hegra with its magnificent Nabataean tombs.",
        image: "/images/alula-hegra.png",
        activities: [
          "Early morning departure to Hegra UNESCO World Heritage Site",
          "Guided tour of Nabataean tombs with expert archaeologist",
          "Explore the ancient city's water systems and inscriptions",
          "Lunch at visitor center with panoramic views",
          "Visit to Jabal Ithlib and the Diwan",
          "Return to resort for dinner and stargazing",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury desert resort in AlUla",
      },
      {
        day: 3,
        title: "AlUla Old Town & Dadan",
        description: "Discover the traditional architecture and ancient kingdoms of the AlUla region.",
        image: "/images/alula-old-town.png",
        activities: [
          "Morning exploration of AlUla Old Town",
          "Visit traditional mud-brick houses and narrow alleys",
          "Tour of Dadan, capital of the Dadanite Kingdom",
          "Lunch at local restaurant",
          "Visit to Jabal Ikmah, the 'open library' of inscriptions",
          "Photography workshop in golden hour light",
        ],
        meals: ["Breakfast", "Lunch"],
        accommodation: "Luxury desert resort in AlUla",
      },
      {
        day: 4,
        title: "Maraya & Desert Experience",
        description: "Experience modern AlUla and traditional desert camping under the stars.",
        image: "/images/maraya-hall.png",
        activities: [
          "Visit to Maraya Concert Hall, world's largest mirrored building",
          "Tour of Winter at Tantora festival grounds",
          "Desert camping setup with traditional Bedouin tents",
          "Camel riding experience at sunset",
          "Traditional dinner around campfire with local entertainment",
          "Night under the stars with astronomy session",
        ],
        meals: ["Breakfast", "Dinner"],
        accommodation: "Traditional desert camp",
      },
      {
        day: 5,
        title: "Final Explorations & Departure",
        description: "Last morning in AlUla with artisan visits before departure.",
        image: "/images/alula-hegra.png",
        activities: [
          "Sunrise photography session in the desert",
          "Visit to local artisan workshops",
          "Shopping for authentic souvenirs and crafts",
          "Farewell lunch at resort",
          "Transfer to AlUla Airport for departure",
        ],
        meals: ["Breakfast", "Lunch"],
      },
    ],
  }

  const upcomingDepartures = [
    { date: "March 15, 2024", price: 1299, availability: "3 spots left" },
    { date: "March 29, 2024", price: 1299, availability: "Available" },
    { date: "April 12, 2024", price: 1399, availability: "Available" },
    { date: "April 26, 2024", price: 1399, availability: "2 spots left" },
  ]

  return (
    <main className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white">
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
                  <span>AlUla, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Max 12 travelers</span>
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
                src={tour.images[0] || "/placeholder.svg?height=600&width=1200&query=alula+hegra+saudi+arabia"}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-2xl font-bold text-white mb-2">Discover Ancient AlUla</h2>
                <p className="text-white/90">Journey through 200,000 years of human history</p>
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
                  <h2 className="text-2xl font-bold mb-6 text-sky-700">Archaeological Journey Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <Card
                        key={day.day}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
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
                                  <h4 className="text-sm font-medium text-sky-700 mb-2">Today's Experiences:</h4>
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
                                    <h4 className="text-sm font-medium text-sky-700 mb-1">Meals Included:</h4>
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
                                      <h4 className="text-sm font-medium text-sky-700 mb-1">Accommodation:</h4>
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
                  <h3 className="text-2xl font-bold mb-4 text-sky-700">Tour Overview</h3>
                  <p className="text-lg mb-6">{tour.description}</p>

                  <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-4 text-sky-700 flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-yellow-500" />
                      Tour Highlights
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
                  <h2 className="text-2xl font-bold mb-6 text-sky-700">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-b from-sky-50 to-white p-6 rounded-xl border border-sky-100">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-sky-700">
                        <Check className="h-5 w-5 text-green-600" />
                        What's Included
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
                        What's Not Included
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
                  <h3 className="text-2xl font-bold mb-4 text-sky-700">Tour Route</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive map will be displayed here</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 text-sky-700">Customer Reviews</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Sarah M.</span>
                        <span className="text-sm text-gray-500">March 2024</span>
                      </div>
                      <p className="text-gray-700">
                        "Absolutely incredible experience! The archaeological sites were breathtaking and our guide was
                        extremely knowledgeable."
                      </p>
                    </div>
                  </div>
                  <ReviewForm />
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 text-sky-700">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">What is the best time to visit AlUla?</h4>
                      <p className="text-gray-700">
                        The best time to visit AlUla is during the cooler months from October to March, when
                        temperatures are more comfortable for outdoor exploration.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">Is this tour suitable for all fitness levels?</h4>
                      <p className="text-gray-700">
                        This tour involves moderate walking and some uneven terrain. A basic level of fitness is
                        recommended, but the pace is leisurely and suitable for most travelers.
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
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book This Tour</h3>
                  <p className="text-white/80">Limited availability!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-sky-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-2 bg-sky-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-sky-500" />
                      <span className="text-sm font-medium">Book 30 days in advance for best rates</span>
                    </div>
                    <div className="flex items-center gap-2 bg-sky-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Free cancellation up to 14 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Departures */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Upcoming Departures</h3>
                  <div className="space-y-3">
                    {upcomingDepartures.map((departure, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{departure.date}</div>
                          <div className="text-sm text-gray-600">{departure.availability}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-sky-700">{formatPrice(departure.price)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
                  <h3 className="font-bold text-xl">Need Help?</h3>
                  <p className="text-white/80">Contact our experts</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Call us</div>
                        <a href="tel:+966-800-ALULA" className="font-medium hover:underline text-sky-700">
                          +966-800-ALULA
                        </a>
                      </div>
                    </div>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Get Expert Advice</Link>
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
