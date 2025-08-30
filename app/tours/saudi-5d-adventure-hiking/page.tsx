"use client"

import {
  ChevronRight,
  Calendar,
  Check,
  Clock,
  Info,
  MapPin,
  Shield,
  Star,
  Users,
  Phone,
  Mail,
  Mountain,
  Compass,
  Gift,
  MessageCircle,
  MapIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import BookingForm from "@/components/booking-form"
import BubbleButton from "@/components/bubble-button"
import ReviewForm from "@/components/review-form"
import { useState, useEffect } from "react"
import { useCurrency } from "@/contexts/currency-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Saudi5DAdventureHikingPage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 5 Days - Adventure & Hiking",
    slug: "saudi-5d-adventure-hiking",
    duration: 5,
    price: 1399,
    rating: 4.7,
    reviews: 89,
    description:
      "Active adventure tour featuring Edge of the World hikes, Red Sand Dunes activities, AlUla zipline experiences, and Hidden Valley exploration. Perfect for outdoor enthusiasts seeking thrilling experiences in Saudi Arabia's diverse landscapes.",
    highlights: [
      "2-3 hour guided hike at Edge of the World",
      "Red Sand Dunes quad biking and sandboarding",
      "AlUla zipline over stunning canyons",
      "Hidden Valley guided hiking adventure",
      "Hegra sunrise tour and photography",
      "Desert camping and outdoor experiences",
      "Rock climbing on natural formations",
    ],
    includes: [
      "4 nights mixed accommodation (hotels and desert camp)",
      "All meals during adventure activities",
      "Professional adventure guide",
      "Hiking and climbing equipment",
      "Transportation in 4WD vehicles",
      "Domestic flights (Riyadh-AlUla-Riyadh)",
      "Safety equipment and first aid",
      "Desert camping experience",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Personal hiking gear",
      "Travel insurance",
      "Tips for guides",
      "Optional extreme activities",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Riyadh - Edge of the World Adventure",
        description:
          "Begin your adventure with a trip to the famous Edge of the World cliff formations for hiking and exploration.",
        image: "https://destinationksa.com/wp-content/uploads/content/Explore-Edge-of-the-World-Riyadh-.webp",
        activities: [
          "Early morning departure to Edge of the World",
          "2-3 hour guided hiking experience",
          "Photography and cliff exploration",
          "Picnic lunch with panoramic views",
          "Return to Riyadh for overnight",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "4-star adventure hotel in Riyadh",
      },
      {
        day: 2,
        title: "Red Sand Dunes Adventure",
        description: "Experience the thrill of quad biking and sandboarding in the famous Red Sand Dunes near Riyadh.",
        image: "https://www.cairotoptours.com/storage/32234/conversions/IMG_8150-edit-webp.webp",
        activities: [
          "Morning drive to Red Sand Dunes",
          "Quad biking adventure",
          "Sandboarding lessons and practice",
          "Desert photography session",
          "Traditional Bedouin lunch",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "4-star adventure hotel in Riyadh",
      },
      {
        day: 3,
        title: "Flight to AlUla - Zipline Adventure",
        description: "Fly to AlUla and experience the world's longest zipline over stunning canyon landscapes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcJ9n8_H6E9l4dZYMKvwxoIeKdnSHrLSEzw&s",
        activities: [
          "Morning flight to AlUla",
          "AlUla zipline experience",
          "Canyon exploration and hiking",
          "Elephant Rock adventure hike",
          "Desert camping setup",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert adventure camp",
      },
      {
        day: 4,
        title: "Hidden Valley Hiking & Rock Climbing",
        description: "Explore Hidden Valley with guided hiking and try rock climbing on natural formations.",
        image: "https://dartantora.co/wp-content/uploads/2024/03/alula-stairway-experience-hero-01-1536x864.webp",
        activities: [
          "Hidden Valley guided hiking",
          "Rock climbing instruction and practice",
          "Cave exploration",
          "Hegra sunrise photography tour",
          "Adventure skills workshop",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert adventure camp",
      },
      {
        day: 5,
        title: "Final Adventure & Departure",
        description: "Last adventure activities before returning to Riyadh for departure.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcY90dashPgVb8R5QZ-hPIjMwFJF0pKwq0A&s",
        activities: [
          "Morning desert hiking",
          "Equipment packing and cleanup",
          "Flight back to Riyadh",
          "Adventure summary and photos",
          "Airport transfer for departure",
        ],
        meals: ["Breakfast", "Lunch"],
      },
    ],
    images: [
      "/images/saudi-hero.jpg",
      "/images/petra-hero.png",
      "/images/wadi-rum-hero.png",
      "/images/dead-sea-hero.png",
    ],
    faqs: [
      {
        question: "What fitness level is required for this adventure tour?",
        answer:
          "This tour requires a moderate to good fitness level. You should be comfortable with 2-3 hours of hiking and outdoor activities. Previous hiking experience is helpful but not required.",
      },
      {
        question: "What adventure equipment is provided?",
        answer:
          "We provide all necessary safety equipment including helmets, harnesses for rock climbing, and first aid supplies. You should bring comfortable hiking boots and outdoor clothing.",
      },
      {
        question: "Is the tour suitable for beginners?",
        answer:
          "Yes! Our professional guides provide instruction for all activities. We cater to different skill levels and ensure everyone can participate safely.",
      },
      {
        question: "What's the weather like during adventure activities?",
        answer:
          "We schedule activities during the best weather conditions. Desert temperatures can vary greatly, so we provide guidance on appropriate clothing for each activity.",
      },
    ],
    reviewItems: [
      {
        id: 1,
        name: "Mike Thompson",
        country: "Australia",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "3 weeks ago",
        title: "Incredible adventure experience!",
        text: "This tour exceeded all expectations! The Edge of the World hike was breathtaking, and the zipline in AlUla was absolutely thrilling. Our guide was professional and made sure we were safe while having the time of our lives.",
      },
      {
        id: 2,
        name: "Lisa Chen",
        country: "Canada",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Perfect for adventure lovers!",
        text: "As someone who loves outdoor activities, this tour was perfect. The variety of adventures from sandboarding to rock climbing kept every day exciting. The desert camping was an unforgettable experience!",
      },
    ],
    reviewStats: {
      overall: 4.7,
      count: 89,
      breakdown: { 5: 67, 4: 18, 3: 3, 2: 1, 1: 0 },
      categories: {
        value: 4.6,
        guide: 4.8,
        itinerary: 4.7,
        accommodation: 4.5,
        transportation: 4.6,
        adventure: 4.9,
      },
    },
    upcomingDates: [
      { date: "March 20, 2025", spotsLeft: 4, price: 1399 },
      { date: "April 3, 2025", spotsLeft: 6, price: 1399 },
      { date: "April 17, 2025", spotsLeft: 2, price: 1499 },
      { date: "May 1, 2025", spotsLeft: 8, price: 1499 },
    ],
  }

  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-form")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("tour-hero")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setShowFloatingCTA(heroBottom < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="pt-24 pb-16 bg-gradient-to-b from-orange-50 to-red-50">
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-orange-700">{formatPrice(tour.price)}</div>
              <div className="text-xs text-muted-foreground">per person</div>
            </div>
            <BubbleButton onClick={scrollToBooking}>Book Now</BubbleButton>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
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

              <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800">{tour.title}</h1>
                <div className="flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <span>{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{tour.duration} days</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Users className="h-4 w-4" />
                  <span>Max 12 travelers</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Mountain className="h-4 w-4" />
                  <span>Adventure Level: Active</span>
                </div>
              </div>
            </div>

            <div id="tour-hero" className="relative aspect-[16/9] mb-4 md:mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={tour.images[0] || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Adventure Awaits in Saudi Arabia</h2>
                <p className="text-sm md:text-base text-white/90">
                  Thrilling outdoor experiences and breathtaking landscapes
                </p>
              </div>
            </div>

            <div className="mb-8">
              <Tabs defaultValue="itinerary" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-6 mb-6">
                  <TabsTrigger value="itinerary" className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 md:mr-1" />
                    <span className="hidden md:inline">Itinerary</span>
                  </TabsTrigger>
                  <TabsTrigger value="overview" className="flex items-center gap-1">
                    <Compass className="h-4 w-4 md:mr-1" />
                    <span className="hidden md:inline">Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="includes" className="flex items-center gap-1">
                    <Gift className="h-4 w-4 md:mr-1" />
                    <span className="hidden md:inline">Includes</span>
                  </TabsTrigger>
                  <TabsTrigger value="map" className="flex items-center gap-1">
                    <MapIcon className="h-4 w-4 md:mr-1" />
                    <span className="hidden md:inline">Map</span>
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 md:mr-1" />
                    <span className="hidden md:inline">Reviews</span>
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="flex items-center gap-1">
                    <Info className="h-4 w-4 md:mr-1" />
                    <span className="hidden md:inline">FAQ</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="itinerary" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Adventure Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day) => (
                        <Card
                          key={day.day}
                          className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
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
                                    <h4 className="text-sm font-medium text-orange-700 mb-2">Adventure Activities:</h4>
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

                <TabsContent value="overview" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-orange-700">Adventure Tour Overview</h2>
                    <p className="text-lg mb-6">{tour.description}</p>

                    <div className="my-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl"></div>
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
                          <Mountain className="h-5 w-5 mr-2 text-orange-500" /> Adventure Highlights
                        </h3>
                        <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                          {tour.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                              <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-orange-700">Upcoming Adventure Dates</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-orange-50">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-orange-700">Departure Date</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-orange-700">Price</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-orange-700">Availability</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-orange-700"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {tour.upcomingDates.map((date, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="py-3 px-4 text-sm">{date.date}</td>
                              <td className="py-3 px-4 text-sm font-medium">{formatPrice(date.price)}</td>
                              <td className="py-3 px-4">
                                <Badge
                                  className={
                                    date.spotsLeft <= 3
                                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                                      : "bg-green-100 text-green-800 hover:bg-green-100"
                                  }
                                >
                                  {date.spotsLeft} spots left
                                </Badge>
                              </td>
                              <td className="py-3 px-4">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-orange-700 border-orange-700 hover:bg-orange-50 bg-transparent"
                                  onClick={scrollToBooking}
                                >
                                  Book Now
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="includes" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">What's Included</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-700">
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

                <TabsContent value="map" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Adventure Route Map</h2>
                    <p className="mb-6 text-muted-foreground">
                      Explore the adventure route of our {tour.title} tour. This map shows all the thrilling locations
                      you'll visit during your {tour.duration}-day adventure through Saudi Arabia.
                    </p>
                    <div className="bg-orange-50 p-8 rounded-lg text-center">
                      <Mountain className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Adventure Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're working on an interactive map to show your adventure route through Saudi Arabia's most
                        exciting destinations.
                      </p>
                    </div>
                    <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Adventure Highlights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Edge of the World cliff hiking and exploration</li>
                        <li>Red Sand Dunes quad biking and sandboarding</li>
                        <li>AlUla zipline over stunning canyon landscapes</li>
                        <li>Hidden Valley hiking and rock climbing</li>
                        <li>Desert camping under the stars</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Adventure Reviews</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                              <div className="text-5xl font-bold text-orange-600">{tour.reviewStats.overall}</div>
                              <div className="text-sm text-muted-foreground">out of 5</div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-1 mb-2">
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-6 w-6 ${i < Math.floor(tour.reviewStats.overall) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                  ))}
                              </div>
                              <div className="text-lg font-medium text-orange-700">Excellent</div>
                              <div className="text-sm text-muted-foreground">
                                Based on {tour.reviewStats.count} verified reviews
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-6">
                          <h3 className="font-medium mb-4">Rating Categories</h3>
                          <div className="space-y-3">
                            {Object.entries(tour.reviewStats.categories).map(([category, rating]) => (
                              <div key={category} className="flex items-center justify-between">
                                <div className="capitalize text-sm">{category}</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {Array(5)
                                      .fill(0)
                                      .map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-4 w-4 ${i < Math.floor(Number(rating)) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                        />
                                      ))}
                                  </div>
                                  <span className="text-sm font-medium">{rating}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        {tour.reviewItems.map((review) => (
                          <Card
                            key={review.id}
                            className="border-none shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1">
                                  {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                      />
                                    ))}
                                </div>
                                <div className="text-sm text-muted-foreground">{review.date}</div>
                              </div>
                              <h4 className="font-bold text-lg mb-2 text-orange-700">{review.title}</h4>
                              <p className="mb-4">{review.text}</p>
                              <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
                                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                                  <Image
                                    src={review.avatar || "/placeholder.svg"}
                                    alt={review.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium">{review.name}</div>
                                  <div className="text-xs text-muted-foreground">{review.country}</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ReviewForm />
                </TabsContent>

                <TabsContent value="faq" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {tour.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-8 bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-medium text-lg mb-3">Ready for Adventure?</h3>
                      <p className="text-muted-foreground mb-4">
                        Our adventure specialists are here to help you prepare for your Saudi Arabia adventure. Contact
                        us for gear recommendations and preparation tips.
                      </p>
                      <BubbleButton variant="outline" className="w-full">
                        <Link href="/contact">Contact Adventure Team</Link>
                      </BubbleButton>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card id="booking-form" className="mb-6 border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book This Adventure</h3>
                  <p className="text-white/80">Secure your adventure today!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-orange-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                  <BookingForm tourTitle={tour.title} tourPrice={tour.price} />
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-orange-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium">Limited spots for adventure groups!</span>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Adventure insurance included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                  <h3 className="font-bold text-xl">Adventure Support</h3>
                  <p className="text-white/80">We're here to help</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Adventure Hotline</div>
                        <a href="tel:+966123456789" className="font-medium hover:underline text-orange-700">
                          +966 12 345 6789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Adventure Team</div>
                        <a
                          href="mailto:adventure@saudiexplorer.com"
                          className="font-medium hover:underline text-orange-700"
                        >
                          adventure@saudiexplorer.com
                        </a>
                      </div>
                    </div>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Adventure Team</Link>
                    </BubbleButton>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-orange-700">Adventure Guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Professional adventure guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>All safety equipment provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Small group adventures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Adventure insurance included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Unforgettable experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
