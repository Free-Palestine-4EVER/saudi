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

export default function Saudi7DHistoryCulturePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 7 Days - History & Culture",
    slug: "saudi-7d-history-culture",
    duration: 7,
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 203,
    description:
      "Comprehensive cultural journey through Saudi Arabia's most significant historical sites including Riyadh, Diriyah, AlUla, and Jeddah's UNESCO heritage. Extended heritage journey with Jeddah Al-Balad for the ultimate cultural immersion.",
    highlights: [
      "Four UNESCO World Heritage sites",
      "Historic Jeddah Al-Balad district",
      "Comprehensive AlUla exploration",
      "Traditional Saudi cultural immersion",
      "Ancient trade route discoveries",
      "Authentic local cuisine experiences",
      "Traditional crafts and arts workshops",
    ],
    includes: [
      "6 nights accommodation in heritage hotels",
      "All meals throughout the tour",
      "Expert cultural guide and historian",
      "All entrance fees and permits",
      "Domestic flights between cities",
      "Traditional cultural performances",
      "Handicrafts workshops",
      "Private transportation",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Personal shopping",
      "Travel insurance",
      "Optional cultural activities",
      "Tips for local guides",
      "Spa treatments and extras",
    ],
    itinerary: [
      {
        day: 1,
        title: "Riyadh - Capital Heritage",
        description:
          "Begin your cultural journey in Saudi Arabia's modern capital with its rich historical foundations.",
        image: "https://www.bechtel.com/wp-content/uploads/2024/10/KAFD-Station-1.webp",
        activities: [
          "King Abdulaziz Historical Center",
          "National Museum comprehensive tour",
          "Masmak Fortress historical site",
          "Traditional Souq Al-Zal exploration",
          "Welcome dinner with cultural performance",
        ],
        meals: ["Lunch", "Dinner"],
        accommodation: "Heritage hotel in Riyadh",
      },
      {
        day: 2,
        title: "Diriyah - Saudi Origins",
        description: "Full day exploring the birthplace of the Saudi state and its UNESCO heritage.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1l_fcdwdjeoNXcrHRhmOgnH5sv-t9k5AXg&s",
        activities: [
          "At-Turaif District comprehensive tour",
          "Salwa Palace and royal quarters",
          "Traditional Najdi architecture study",
          "Diriyah Museum cultural exhibits",
          "Traditional crafts workshop",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Riyadh",
      },
      {
        day: 3,
        title: "Flight to AlUla - Ancient Oasis",
        description: "Travel to AlUla and begin exploring this archaeological wonderland.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMmVxw-i14BZRoaFUGyqYs8jrrQWB-n31JQ&s",
        activities: [
          "Morning flight to AlUla",
          "AlUla Old Town guided tour",
          "Dadan ancient city exploration",
          "Jabal Ikmah inscriptions site",
          "Sunset at Elephant Rock",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert heritage resort",
      },
      {
        day: 4,
        title: "Hegra - Nabataean Masterpiece",
        description: "Full day at Saudi Arabia's first UNESCO World Heritage site.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSs8NN_x86JhKszWKGJuHBMLLN7we4Nt6nw&s",
        activities: [
          "Comprehensive Hegra tour",
          "Qasr al-Farid (Lonely Castle)",
          "Nabataean tombs and inscriptions",
          "Ancient water systems study",
          "Archaeological site interpretation",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert heritage resort",
      },
      {
        day: 5,
        title: "Flight to Jeddah - Red Sea Heritage",
        description: "Travel to Jeddah to explore the historic gateway to Mecca.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-ex2u6w5NCjBWhJJo0bHqfgqfgaAh3QZRQ&s",
        activities: [
          "Flight to Jeddah",
          "Historic Al-Balad district tour",
          "Traditional Hijazi architecture",
          "Souq Al-Alawi traditional market",
          "Red Sea Corniche evening walk",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Historic hotel in Jeddah",
      },
      {
        day: 6,
        title: "Jeddah Cultural Immersion",
        description: "Deep dive into Jeddah's rich cultural heritage and traditions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfCfgYd9ovAPUcZjzcXSGLdhL5rGdtgY4XQ&s",
        activities: [
          "Beit Nassif historical house",
          "Traditional Hijazi cooking class",
          "Local artisan workshops",
          "Historic mosques tour",
          "Cultural center visits",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Historic hotel in Jeddah",
      },
      {
        day: 7,
        title: "Final Cultural Experiences",
        description: "Last cultural activities before departure.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFy6TPN2Ks92jgleUnZ1a3UoQ8BtpurGRdIw&s",
        activities: [
          "King Fahd Fountain visit",
          "Final souvenir shopping",
          "Cultural summary session",
          "Airport transfer",
          "Departure",
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
        question: "What makes this 7-day tour different from the 5-day version?",
        answer:
          "The 7-day tour includes Jeddah's historic Al-Balad district, more comprehensive exploration of each site, additional cultural workshops, and deeper immersion experiences. You'll also have more time for cultural exchanges and traditional craft learning.",
      },
      {
        question: "Are all UNESCO sites in Saudi Arabia covered?",
        answer:
          "This tour covers the major UNESCO World Heritage sites including Diriyah (At-Turaif District), Hegra (Mada'in Salih), and Historic Jeddah (Al-Balad). These represent the most significant cultural heritage sites in Saudi Arabia.",
      },
      {
        question: "What cultural workshops are included?",
        answer:
          "You'll participate in traditional crafts workshops, Hijazi cooking classes, calligraphy sessions, and traditional music experiences. These hands-on activities provide authentic insights into Saudi culture.",
      },
      {
        question: "Is this tour suitable for cultural enthusiasts?",
        answer:
          "This tour is specifically designed for travelers with a deep interest in history, culture, and heritage. Our expert guides are historians and cultural specialists who provide in-depth knowledge.",
      },
    ],
    reviewItems: [
      {
        id: 1,
        name: "Dr. Patricia Williams",
        country: "United Kingdom",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "3 weeks ago",
        title: "Exceptional cultural immersion!",
        text: "As a history professor, I was thoroughly impressed by the depth and authenticity of this cultural tour. The guides were incredibly knowledgeable, and the access to historical sites was remarkable. The traditional workshops were a highlight!",
      },
      {
        id: 2,
        name: "Ahmed Hassan",
        country: "Egypt",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Rich heritage experience",
        text: "This tour provided an incredible journey through Saudi Arabia's cultural heritage. From the ancient Nabataean sites in AlUla to the traditional architecture of Jeddah's Al-Balad, every day was filled with fascinating discoveries. The cultural workshops were authentic and engaging.",
      },
    ],
    reviewStats: {
      overall: 4.9,
      count: 203,
      breakdown: { 5: 189, 4: 12, 3: 2, 2: 0, 1: 0 },
      categories: {
        value: 4.8,
        guide: 4.9,
        itinerary: 4.9,
        accommodation: 4.7,
        transportation: 4.8,
        culture: 5.0,
      },
    },
    upcomingDates: [
      { date: "March 22, 2025", spotsLeft: 6, price: 1899 },
      { date: "April 5, 2025", spotsLeft: 8, price: 1899 },
      { date: "April 19, 2025", spotsLeft: 4, price: 1999 },
      { date: "May 3, 2025", spotsLeft: 10, price: 1999 },
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-amber-50 to-yellow-50">
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
              <Image
                src={tour.images[0] || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Comprehensive Cultural Heritage Journey</h2>
                <p className="text-sm md:text-base text-white/90">
                  Extended exploration of Saudi Arabia's UNESCO sites and traditions
                </p>
              </div>
            </div>

            <div className="mb-8">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-6 mb-6">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="includes">Includes</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-amber-700">Extended Heritage Tour Overview</h2>
                    <p className="text-lg mb-6">{tour.description}</p>

                    <div className="my-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl"></div>
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold mb-4 text-amber-700 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Cultural Heritage Highlights
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

                    <h3 className="text-xl font-bold mb-4 text-amber-700">Upcoming Cultural Departures</h3>
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
                </TabsContent>

                <TabsContent value="itinerary" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-amber-700">Cultural Heritage Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day) => (
                        <Card
                          key={day.day}
                          className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4">
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
                                    <h4 className="text-sm font-medium text-amber-700 mb-2">Cultural Activities:</h4>
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
                    <h2 className="text-2xl font-bold mb-6 text-amber-700">Cultural Heritage Route</h2>
                    <p className="mb-6 text-muted-foreground">
                      Follow the comprehensive cultural route of our {tour.title} tour, covering all major UNESCO sites
                      and cultural centers across Saudi Arabia.
                    </p>
                    <div className="bg-amber-50 p-8 rounded-lg text-center">
                      <MapIcon className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Cultural Heritage Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're developing an interactive map showcasing your cultural journey through Saudi Arabia's most
                        significant heritage sites.
                      </p>
                    </div>
                    <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Cultural Heritage Route</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Riyadh: National Museum and King Abdulaziz Historical Center</li>
                        <li>Diriyah: UNESCO At-Turaif District and Saudi origins</li>
                        <li>AlUla: Ancient Hegra and Nabataean heritage sites</li>
                        <li>Jeddah: Historic Al-Balad and Red Sea cultural traditions</li>
                        <li>Traditional workshops and cultural immersion experiences</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 text-amber-700">Cultural Heritage Reviews</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
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
                              <div className="text-lg font-medium text-amber-700">Outstanding</div>
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
                      <h3 className="font-medium text-lg mb-3">Cultural Heritage Specialists</h3>
                      <p className="text-muted-foreground mb-4">
                        Our cultural heritage specialists are here to help you understand and appreciate Saudi Arabia's
                        rich history and traditions. Contact us for detailed cultural insights.
                      </p>
                      <BubbleButton variant="outline" className="w-full">
                        <Link href="/contact">Contact Heritage Team</Link>
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
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book Heritage Tour</h3>
                  <p className="text-white/80">Extended cultural journey!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-amber-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                    {tour.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{formatPrice(tour.originalPrice)}</span>
                    )}
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-amber-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <span className="text-sm font-medium">UNESCO heritage tour - limited spots!</span>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Expert cultural guides included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4">
                  <h3 className="font-bold text-xl">Heritage Support</h3>
                  <p className="text-white/80">Cultural specialists</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Heritage Hotline</div>
                        <a href="tel:+966123456789" className="font-medium hover:underline text-amber-700">
                          +966 12 345 6789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                        <Mail className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Cultural Team</div>
                        <a
                          href="mailto:heritage@saudiexplorer.com"
                          className="font-medium hover:underline text-amber-700"
                        >
                          heritage@saudiexplorer.com
                        </a>
                      </div>
                    </div>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Heritage Team</Link>
                    </BubbleButton>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-amber-700">Heritage Guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Expert cultural historians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>UNESCO World Heritage access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Traditional workshops included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Authentic cultural experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Small group cultural immersion</span>
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
