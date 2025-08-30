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
  Compass,
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

export default function Saudi5DMixedExplorerPage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 5 Days - Mixed Explorer",
    slug: "saudi-5d-mixed-explorer",
    duration: 5,
    price: 1349,
    rating: 4.9,
    reviews: 156,
    description:
      "Perfect blend of culture, history, and adventure combining Riyadh's modern attractions with AlUla's ancient wonders and outdoor activities. Ideal for first-time visitors seeking diverse experiences with moderate pacing.",
    highlights: [
      "Modern Riyadh city exploration",
      "Ancient Hegra archaeological site",
      "Desert safari and camel riding",
      "Traditional Saudi cultural experiences",
      "Elephant Rock sunset viewing",
      "Local cuisine tasting",
      "Mix of history and adventure",
    ],
    includes: [
      "4 nights accommodation in selected hotels",
      "Daily breakfast and 3 dinners",
      "Professional bilingual guide",
      "All entrance fees and activities",
      "Desert safari experience",
      "Domestic flights",
      "Cultural performances",
      "Camel riding experience",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Some meals as specified",
      "Personal expenses",
      "Travel insurance",
      "Optional activities",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Riyadh Modern & Traditional",
        description: "Explore both modern and traditional aspects of Saudi Arabia's capital city.",
        image: "https://welcomesaudi-media.s3.me-south-1.amazonaws.com/0000/64/2024/11/26/9-saudi-to-launch-first-phase-of-riyadh-metro-on-november-27-2024.jpg",
        activities: [
          "Visit Kingdom Centre Tower",
          "Explore Masmak Fortress",
          "Walk through Souq Al-Zal",
          "National Museum visit",
          "Traditional Saudi dinner",
        ],
        meals: ["Dinner"],
        accommodation: "4-star hotel in Riyadh",
      },
      {
        day: 2,
        title: "Diriyah Heritage & Culture",
        description: "Discover the historical roots of Saudi Arabia in the UNESCO site of Diriyah.",
        image: "https://whc.unesco.org/uploads/thumbs/site_1329_0027-1200-630-20230113124527.jpg",
        activities: [
          "At-Turaif District exploration",
          "Traditional architecture tour",
          "Cultural center visits",
          "Handicrafts demonstration",
          "Historical storytelling session",
        ],
        meals: ["Breakfast", "Lunch"],
        accommodation: "4-star hotel in Riyadh",
      },
      {
        day: 3,
        title: "AlUla Ancient Wonders",
        description: "Fly to AlUla and begin exploring its archaeological treasures.",
        image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/01/07/3618116-1044730491.jpeg?itok=bKcqpbjS",
        activities: [
          "Flight to AlUla",
          "AlUla Old Town tour",
          "Dadan archaeological site",
          "Elephant Rock sunset",
          "Bedouin-style dinner",
        ],
        meals: ["Breakfast", "Dinner"],
        accommodation: "Desert resort in AlUla",
      },
      {
        day: 4,
        title: "Hegra & Desert Adventure",
        description: "Combine historical exploration with desert adventure activities.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReV5Bvh47YY14agAoegQEsMHdkJ1vxoRLIfg&s",
        activities: [
          "Hegra (Mada'in Salih) tour",
          "Desert safari experience",
          "Camel riding session",
          "Traditional crafts workshop",
          "Stargazing experience",
        ],
        meals: ["Breakfast", "Lunch"],
        accommodation: "Desert resort in AlUla",
      },
      {
        day: 5,
        title: "Final Exploration & Departure",
        description: "Last activities in AlUla before returning to Riyadh.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvjv3rj3d_0BBfmzvIX9eJ0ESqEti-ilLRA&s",
        activities: [
          "Morning desert walk",
          "Local market visit",
          "Souvenir shopping",
          "Flight to Riyadh",
          "Departure transfer",
        ],
        meals: ["Breakfast"],
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
        question: "Is this tour suitable for families?",
        answer:
          "Yes! This mixed explorer tour is perfect for families with children. The activities are moderate and suitable for all ages, with a good balance of culture and gentle adventure.",
      },
      {
        question: "What's the difference between this and other Saudi tours?",
        answer:
          "This tour offers the perfect balance between cultural exploration and adventure activities. It's ideal for first-time visitors who want to experience both sides of Saudi Arabia without being too focused on just culture or just adventure.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves moderate walking at archaeological sites and cultural locations. Most activities are at a comfortable pace suitable for all fitness levels.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, and halal requirements. Please inform us when booking.",
      },
    ],
    reviewItems: [
      {
        id: 1,
        name: "Jennifer Martinez",
        country: "Spain",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Perfect introduction to Saudi Arabia!",
        text: "This tour was exactly what we needed for our first visit to Saudi Arabia. The perfect mix of culture and adventure, great for our family with teenagers. The guides were excellent and the experiences were authentic.",
      },
      {
        id: 2,
        name: "Robert Kim",
        country: "South Korea",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Excellent balanced tour",
        text: "Great balance of historical sites, cultural experiences, and fun activities. The desert safari was a highlight, and Hegra was absolutely stunning. Highly recommend for anyone wanting to see the best of Saudi Arabia.",
      },
    ],
    reviewStats: {
      overall: 4.9,
      count: 156,
      breakdown: { 5: 142, 4: 12, 3: 2, 2: 0, 1: 0 },
      categories: {
        value: 4.8,
        guide: 4.9,
        itinerary: 4.9,
        accommodation: 4.7,
        transportation: 4.8,
        balance: 4.9,
      },
    },
    upcomingDates: [
      { date: "March 18, 2025", spotsLeft: 8, price: 1349 },
      { date: "April 1, 2025", spotsLeft: 12, price: 1349 },
      { date: "April 15, 2025", spotsLeft: 6, price: 1449 },
      { date: "April 29, 2025", spotsLeft: 10, price: 1449 },
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-indigo-50">
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-blue-700">{formatPrice(tour.price)}</div>
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800">{tour.title}</h1>
                <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
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
                  <span>Max 20 travelers</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Compass className="h-4 w-4" />
                  <span>Mixed Experience</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-white">Perfect Balance of Culture & Adventure</h2>
                <p className="text-sm md:text-base text-white/90">Ideal for first-time visitors to Saudi Arabia</p>
              </div>
            </div>

            <div className="mb-8">
              <Tabs defaultValue="itinerary" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-6 mb-6">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="includes">Includes</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="itinerary" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Mixed Experience Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day) => (
                        <Card
                          key={day.day}
                          className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
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
                                    <h4 className="text-sm font-medium text-blue-700 mb-2">Today's Experiences:</h4>
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
                                      <h4 className="text-sm font-medium text-blue-700 mb-1">Meals Included:</h4>
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
                                        <h4 className="text-sm font-medium text-blue-700 mb-1">Accommodation:</h4>
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
                    <h2 className="text-2xl font-bold mb-4 text-blue-700">Mixed Explorer Overview</h2>
                    <p className="text-lg mb-6">{tour.description}</p>

                    <div className="my-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl"></div>
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                          <Compass className="h-5 w-5 mr-2 text-blue-500" /> Experience Highlights
                        </h3>
                        <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                          {tour.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                              <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-blue-700">Upcoming Departures</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blue-700">Departure Date</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blue-700">Price</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blue-700">Availability</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blue-700"></th>
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
                                    date.spotsLeft <= 5
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
                                  className="text-blue-700 border-blue-700 hover:bg-blue-50 bg-transparent"
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
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">What's Included</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700">
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
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Mixed Experience Route</h2>
                    <p className="mb-6 text-muted-foreground">
                      Explore the balanced route of our {tour.title} tour, combining cultural sites with adventure
                      activities across Saudi Arabia.
                    </p>
                    <div className="bg-blue-50 p-8 rounded-lg text-center">
                      <Compass className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Interactive Route Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're creating an interactive map showing your balanced journey through Saudi Arabia's cultural
                        and adventure highlights.
                      </p>
                    </div>
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Mixed Experience Highlights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Modern Riyadh with traditional Masmak Fortress</li>
                        <li>UNESCO Diriyah heritage site exploration</li>
                        <li>Ancient AlUla with desert adventure activities</li>
                        <li>Hegra archaeological wonders and camel riding</li>
                        <li>Perfect balance of culture and adventure</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Traveler Reviews</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                              <div className="text-5xl font-bold text-blue-600">{tour.reviewStats.overall}</div>
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
                              <div className="text-lg font-medium text-blue-700">Outstanding</div>
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
                              <h4 className="font-bold text-lg mb-2 text-blue-700">{review.title}</h4>
                              <p className="mb-4">{review.text}</p>
                              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
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
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Frequently Asked Questions</h2>
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
                    <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-medium text-lg mb-3">Perfect for First-Time Visitors</h3>
                      <p className="text-muted-foreground mb-4">
                        This mixed explorer tour is designed for travelers who want to experience the best of both
                        worlds - Saudi Arabia's rich culture and exciting adventures.
                      </p>
                      <BubbleButton variant="outline" className="w-full">
                        <Link href="/contact">Plan Your Mixed Adventure</Link>
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
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book Mixed Explorer</h3>
                  <p className="text-white/80">Perfect balanced experience!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-blue-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-blue-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-medium">Popular mixed experience tour!</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Family-friendly activities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
                  <h3 className="font-bold text-xl">Mixed Experience Support</h3>
                  <p className="text-white/80">We're here to help</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Call us</div>
                        <a href="tel:+966123456789" className="font-medium hover:underline text-blue-700">
                          +966 12 345 6789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email us</div>
                        <a href="mailto:mixed@saudiexplorer.com" className="font-medium hover:underline text-blue-700">
                          mixed@saudiexplorer.com
                        </a>
                      </div>
                    </div>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Mixed Tour Team</Link>
                    </BubbleButton>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-blue-700">Why Choose Mixed Explorer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Perfect balance of culture & adventure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Suitable for all ages and fitness levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Comprehensive Saudi Arabia experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Expert bilingual guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Authentic cultural experiences</span>
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
