"use client"

import {
  ChevronRight,
  Calendar,
  Check,
  Clock,
  Globe,
  Info,
  MapPin,
  Shield,
  Star,
  Users,
  Phone,
  Mail,
  Compass,
  Mountain,
  Gift,
  MessageCircle,
  MapIcon,
  Sun,
  Cloud,
  Wind,
  Thermometer,
  CalendarDays,
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
import dynamic from "next/dynamic"
import { useCurrency } from "@/contexts/currency-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

// Dynamically import the TourMapPreview component with no SSR
const TourMapPreview = dynamic(() => import("@/components/tour-map-preview"), {
  ssr: false,
})

export default function Saudi5DHistoryCulturePage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("itinerary")
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 5 Days - History & Culture",
    slug: "saudi-5d-history-culture",
    duration: 5,
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 127,
    description:
      "Immerse yourself in Saudi Arabia's rich heritage with UNESCO Diriyah, National Museum, traditional souqs, and comprehensive cultural experiences. Perfect for history enthusiasts seeking authentic cultural immersion.",
    highlights: [
      "UNESCO World Heritage site of Diriyah (At-Turaif District)",
      "National Museum and King Abdulaziz Historical Center",
      "Traditional Souq Al-Zal marketplace experience",
      "Ancient Nabataean city of Hegra with expert guides",
      "AlUla Old Town heritage lanes and architecture",
      "Elephant Rock natural formation",
      "Traditional Saudi cuisine experiences",
    ],
    includes: [
      "4 nights accommodation in 4-star hotels",
      "Daily breakfast and 3 dinners",
      "Professional English-speaking guide",
      "All entrance fees and permits",
      "Transportation in air-conditioned vehicles",
      "Domestic flights (Riyadh-AlUla-Riyadh)",
      "Cultural performances and demonstrations",
      "Traditional Saudi welcome ceremony",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Lunches (except where specified)",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Tips for guides and drivers",
      "Optional activities not mentioned in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Riyadh - Capital Discovery",
        description:
          "Arrive in Riyadh and begin your Saudi adventure with a comprehensive city tour of the modern capital.",
        image: "/riyadh-city-skyline-with-modern-buildings-and-trad.png",
        activities: [
          "Airport pickup and hotel check-in",
          "Visit King Abdulaziz Historical Center",
          "Explore National Museum of Saudi Arabia",
          "Walk through Souq Al-Zal traditional market",
          "Welcome dinner with traditional Saudi cuisine",
        ],
        meals: ["Dinner"],
        accommodation: "4-star hotel in Riyadh",
      },
      {
        day: 2,
        title: "Diriyah - Birthplace of Saudi Arabia",
        description:
          "Discover the historic Diriyah, a UNESCO World Heritage site and the original home of the Saudi royal family.",
        image: "/historic-diriyah-ruins-with-traditional-najdi-mud-.png",
        activities: [
          "Full day tour of At-Turaif District",
          "Visit Salwa Palace ruins",
          "Explore traditional Najdi architecture",
          "Learn about Saudi history at Diriyah Museum",
          "Traditional lunch in historic setting",
        ],
        meals: ["Breakfast", "Lunch"],
        accommodation: "4-star hotel in Riyadh",
      },
      {
        day: 3,
        title: "Flight to AlUla - Ancient Wonders",
        description:
          "Fly to AlUla and begin exploring this archaeological treasure trove with its ancient Nabataean heritage.",
        image: "/alula-desert-landscape-with-ancient-rock-formation.png",
        activities: [
          "Morning flight to AlUla",
          "Visit AlUla Old Town",
          "Explore Dadan archaeological site",
          "Sunset at Elephant Rock",
          "Traditional Bedouin dinner under stars",
        ],
        meals: ["Breakfast", "Dinner"],
        accommodation: "4-star resort in AlUla",
      },
      {
        day: 4,
        title: "Hegra - Saudi Arabia's Petra",
        description: "Full day exploring Hegra (Mada'in Salih), Saudi Arabia's first UNESCO World Heritage site.",
        image: "/ancient-nabataean-tombs-carved-into-sandstone-clif.png",
        activities: [
          "Guided tour of Hegra tombs",
          "Visit Qasr al-Farid (Lonely Castle)",
          "Explore Nabataean inscriptions",
          "Learn about ancient trade routes",
          "Photography session at golden hour",
        ],
        meals: ["Breakfast"],
        accommodation: "4-star resort in AlUla",
      },
      {
        day: 5,
        title: "Return to Riyadh - Departure",
        description: "Final morning in AlUla before returning to Riyadh for departure.",
        image: "/traditional-saudi-marketplace-with-spices-and-hand.png",
        activities: [
          "Visit AlUla Farmers Market",
          "Last-minute souvenir shopping",
          "Flight back to Riyadh",
          "Airport transfer for departure",
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
    gallery: [
      { src: "/images/saudi-hero.jpg", alt: "Riyadh skyline", caption: "Modern Riyadh with traditional heritage" },
      { src: "/images/petra-hero.png", alt: "Diriyah ruins", caption: "Historic At-Turaif District in Diriyah" },
      { src: "/images/wadi-rum-hero.png", alt: "AlUla landscape", caption: "The stunning landscapes of AlUla" },
      { src: "/images/dead-sea-hero.png", alt: "Hegra tombs", caption: "Ancient Nabataean tombs at Hegra" },
    ],
    faqs: [
      {
        question: "What is the best time to visit Saudi Arabia?",
        answer:
          "The best time to visit Saudi Arabia is during the cooler months from October to March when temperatures are more comfortable for sightseeing and outdoor activities.",
      },
      {
        question: "Do I need a visa to visit Saudi Arabia?",
        answer:
          "Most nationalities can obtain a Saudi tourist visa online or on arrival. The process has been simplified significantly in recent years to promote tourism.",
      },
      {
        question: "What should I wear in Saudi Arabia?",
        answer:
          "Modest clothing is required. For men: long pants and shirts with sleeves. For women: loose-fitting clothes covering arms and legs, with a headscarf recommended for certain sites.",
      },
      {
        question: "Is Saudi Arabia safe for tourists?",
        answer:
          "Yes, Saudi Arabia is very safe for tourists. The country has invested heavily in tourism infrastructure and security, making it one of the safest destinations in the Middle East.",
      },
    ],
    weatherInfo: {
      spring: {
        months: "March to May",
        temperature: "20°C to 35°C (68°F to 95°F)",
        description: "Pleasant weather with mild temperatures, perfect for outdoor activities and sightseeing.",
        recommendation: "Highly Recommended",
      },
      summer: {
        months: "June to August",
        temperature: "35°C to 50°C (95°F to 122°F)",
        description: "Very hot and dry. Indoor activities and early morning/evening tours recommended.",
        recommendation: "Not Recommended",
      },
      autumn: {
        months: "September to November",
        temperature: "25°C to 40°C (77°F to 104°F)",
        description: "Warm but manageable temperatures, good for most activities.",
        recommendation: "Recommended",
      },
      winter: {
        months: "December to February",
        temperature: "15°C to 25°C (59°F to 77°F)",
        description: "Cool and pleasant, ideal for all outdoor activities and sightseeing.",
        recommendation: "Highly Recommended",
      },
    },
    reviewItems: [
      {
        id: 1,
        name: "Ahmed Al-Rashid",
        country: "United States",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Incredible cultural journey!",
        text: "This tour opened my eyes to Saudi Arabia's rich history and culture. The guides were knowledgeable and passionate about their heritage. Diriyah and Hegra were absolutely breathtaking!",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        country: "United Kingdom",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Perfect introduction to Saudi Arabia",
        text: "As a first-time visitor to Saudi Arabia, this tour was perfect. Well-organized, informative, and the cultural experiences were authentic and memorable.",
      },
    ],
    reviewStats: {
      overall: 4.8,
      count: 127,
      breakdown: { 5: 98, 4: 23, 3: 4, 2: 1, 1: 1 },
      categories: {
        value: 4.7,
        guide: 4.9,
        itinerary: 4.8,
        accommodation: 4.6,
        transportation: 4.7,
        food: 4.8,
      },
    },
    upcomingDates: [
      { date: "March 15, 2025", spotsLeft: 6, price: 1299 },
      { date: "March 29, 2025", spotsLeft: 8, price: 1299 },
      { date: "April 12, 2025", spotsLeft: 4, price: 1399 },
      { date: "April 26, 2025", spotsLeft: 10, price: 1399 },
    ],
  }

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageKey]: true }))
  }

  const calculateReviewPercentage = (rating: number) => {
    const count = tour.reviewStats.breakdown[rating] || 0
    return (count / tour.reviewStats.count) * 100
  }

  const nextGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev === tour.gallery.length - 1 ? 0 : prev + 1))
  }

  const prevGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev === 0 ? tour.gallery.length - 1 : prev - 1))
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-amber-50 to-orange-50">
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-amber-700">{formatPrice(tour.price)}</div>
              <div className="text-xs text-muted-foreground">per person</div>
            </div>
            <BubbleButton onClick={scrollToBooking}>Book Now</BubbleButton>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800">{tour.title}</h1>
              <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
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
                <span>Max 16 travelers</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Globe className="h-4 w-4" />
                <span>English, Arabic</span>
              </div>
            </div>
          </div>

          <div id="tour-hero" className="relative aspect-[16/9] mb-4 md:mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">Discover Saudi Arabia's Rich Heritage</h2>
              <p className="text-sm md:text-base text-white/90">
                A journey through UNESCO sites and ancient civilizations
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
                  <h2 className="text-2xl font-bold mb-6 text-amber-700">Detailed Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <Card
                        key={day.day}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
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
                                  <h4 className="text-sm font-medium text-amber-700 mb-2">Today's Activities:</h4>
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
                                    <h4 className="text-sm font-medium text-amber-700 mb-1">Meals Included:</h4>
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
                                      <h4 className="text-sm font-medium text-amber-700 mb-1">Accommodation:</h4>
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
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4 text-amber-700">Tour Overview</h2>
                    <p className="text-lg">{tour.description}</p>

                    <div className="my-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl"></div>
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold mb-4 text-amber-700 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Tour Highlights
                        </h3>
                        <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                          {tour.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                              <Check className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-amber-700">Best Time to Visit</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {Object.entries(tour.weatherInfo).map(([season, info]) => (
                        <div key={season} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3">
                            <h4 className="font-bold text-lg capitalize flex items-center">
                              {season === "spring" && <Sun className="h-5 w-5 mr-2" />}
                              {season === "summer" && <Thermometer className="h-5 w-5 mr-2" />}
                              {season === "autumn" && <Wind className="h-5 w-5 mr-2" />}
                              {season === "winter" && <Cloud className="h-5 w-5 mr-2" />}
                              {season}
                            </h4>
                            <p className="text-sm text-white/80">{info.months}</p>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Thermometer className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">{info.temperature}</span>
                            </div>
                            <p className="text-sm mb-3">{info.description}</p>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4 text-amber-500" />
                              <span className="text-sm font-medium">{info.recommendation}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-amber-700">Upcoming Departures</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-amber-50">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-amber-700">Departure Date</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-amber-700">Price</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-amber-700">Availability</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-amber-700"></th>
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
                                  className="text-amber-700 border-amber-700 hover:bg-amber-50 bg-transparent"
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
                </div>
              </TabsContent>

              <TabsContent value="includes" className="mt-0">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-amber-700">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl border border-amber-100">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-700">
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
                  <h2 className="text-2xl font-bold mb-6 text-amber-700">Tour Route Map</h2>
                  <p className="mb-6 text-muted-foreground">
                    Explore the route of our {tour.title} tour. This map shows all the destinations you'll visit during
                    your {tour.duration}-day journey through Saudi Arabia.
                  </p>
                  <div className="bg-amber-50 p-8 rounded-lg text-center">
                    <MapIcon className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're working on an interactive map to show your tour route through Saudi Arabia's amazing
                      destinations.
                    </p>
                  </div>
                  <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Tour Highlights</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Start your journey in Riyadh, Saudi Arabia's modern capital</li>
                      <li>Explore the UNESCO World Heritage site of Diriyah</li>
                      <li>Discover the ancient Nabataean city of Hegra in AlUla</li>
                      <li>Experience traditional Saudi culture and cuisine</li>
                      <li>Visit archaeological sites and museums</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 text-amber-700">Traveler Reviews</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                            <div className="text-5xl font-bold text-amber-600">{tour.reviewStats.overall}</div>
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
                            <div className="text-lg font-medium text-amber-700">Excellent</div>
                            <div className="text-sm text-muted-foreground">
                              Based on {tour.reviewStats.count} verified reviews
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-2">
                              <div className="w-12 text-sm text-right">{rating} stars</div>
                              <Progress value={calculateReviewPercentage(rating)} className="h-2" />
                              <div className="text-sm text-muted-foreground w-12">
                                {tour.reviewStats.breakdown[rating] || 0}
                              </div>
                            </div>
                          ))}
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
                            <h4 className="font-bold text-lg mb-2 text-amber-700">{review.title}</h4>
                            <p className="mb-4">{review.text}</p>
                            <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
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
                    <BubbleButton variant="outline" className="w-full">
                      View All Reviews
                    </BubbleButton>
                  </div>
                </div>
                <ReviewForm />
              </TabsContent>

              <TabsContent value="faq" className="mt-0">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-amber-700">Frequently Asked Questions</h2>
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
                  <div className="mt-8 bg-amber-50 p-6 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Have more questions?</h3>
                    <p className="text-muted-foreground mb-4">
                      Our travel specialists are here to help you plan your perfect Saudi Arabia adventure. Feel free to
                      contact us with any questions you may have.
                    </p>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </BubbleButton>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8 mt-12">
            {/* Booking Form Section */}
            <div id="booking-form" className="w-full">
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 py-16">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-orange-600 mb-4">Ready to Book Your Adventure?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Secure your spot on this incredible journey with our easy 3-step booking process
                    </p>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <BookingForm tourTitle={tour.title} tourPrice={tour.price} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <Clock className="h-8 w-8 text-orange-500" />
                      <div>
                        <h4 className="font-bold text-lg">Limited Availability</h4>
                        <p className="text-sm text-gray-600">Only a few spots left for upcoming dates</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <Shield className="h-8 w-8 text-green-500" />
                      <div>
                        <h4 className="font-bold text-lg">Secure Booking</h4>
                        <p className="text-sm text-gray-600">SSL encrypted & PCI compliant</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <Check className="h-8 w-8 text-blue-500" />
                      <div>
                        <h4 className="font-bold text-lg">Best Price Guarantee</h4>
                        <p className="text-sm text-gray-600">We'll match any competitor's price</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Book With Us Section */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                <h3 className="font-bold text-2xl">Why Book With Us</h3>
                <p className="text-white/80 text-lg">Your trusted travel partner</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Best Price Guarantee</h4>
                      <p className="text-muted-foreground text-sm">We match any competitor's price</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Free Cancellation</h4>
                      <p className="text-muted-foreground text-sm">Cancel up to 30 days before departure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-muted-foreground text-sm">Round-the-clock customer assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Handpicked Hotels</h4>
                      <p className="text-muted-foreground text-sm">Carefully selected accommodations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Guides</h4>
                      <p className="text-muted-foreground text-sm">Knowledgeable local professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Small Groups</h4>
                      <p className="text-muted-foreground text-sm">Intimate and personalized experiences</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Us Section */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                <h3 className="font-bold text-2xl">Need Help?</h3>
                <p className="text-white/80 text-lg">We're here to assist you</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 bg-orange-50 p-6 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Call us</div>
                      <a href="tel:+966123456789" className="font-semibold text-lg hover:underline text-orange-600">
                        +966 12 345 6789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-orange-50 p-6 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Email us</div>
                      <a
                        href="mailto:info@saudiexplorer.com"
                        className="font-semibold text-lg hover:underline text-orange-600"
                      >
                        info@saudiexplorer.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
