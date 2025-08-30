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
  Mountain,
  Compass,
  Gift,
  MessageCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import BookingForm from "@/components/booking-form"
import BubbleButton from "@/components/bubble-button"
import { useState, useEffect } from "react"
import { useCurrency } from "@/contexts/currency-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Saudi10DCompleteExperiencePage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 10 Days - Complete Experience",
    slug: "saudi-10d-complete-experience",
    duration: 10,
    price: 2599,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 234,
    description:
      "The ultimate Saudi Arabia journey combining luxury, culture, adventure, and relaxation. Experience UNESCO World Heritage sites, thrilling adventures, traditional culture, and modern luxury in one comprehensive 10-day expedition through the kingdom's most spectacular destinations.",
    highlights: [
      "Complete Saudi Arabia experience in one journey",
      "Four UNESCO World Heritage sites",
      "Luxury accommodations and fine dining",
      "Adventure activities and cultural immersion",
      "VIP access to exclusive locations",
      "Professional photography service",
      "Desert adventures and Red Sea relaxation",
      "Traditional and modern Saudi experiences",
    ],
    includes: [
      "9 nights luxury accommodation",
      "All meals including fine dining experiences",
      "Expert cultural and adventure guides",
      "All domestic flights and premium transportation",
      "VIP access and exclusive experiences",
      "Cultural workshops and adventure activities",
      "Professional photography service",
      "Comprehensive travel insurance and support",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Personal shopping and expenses",
      "Travel insurance",
      "Optional luxury activities",
      "Tips for guides and drivers",
      "Spa treatments and extras",
    ],
    itinerary: [
      {
        day: 1,
        title: "Royal Welcome in Riyadh",
        description: "VIP arrival in Riyadh with luxury transfer and royal welcome experience.",
        image: "https://cdn.britannica.com/14/189714-050-0A674D18/Kingdom-Centre-Riyadh-Saudi-Arabia.jpg",
        activities: [
          "VIP airport reception and luxury transfer",
          "National Museum private guided tour",
          "Traditional palace dinner experience",
          "Welcome ceremony with cultural performance",
          "Luxury hotel check-in and orientation",
        ],
        meals: ["Dinner"],
        accommodation: "Luxury heritage hotel in Riyadh",
      },
      {
        day: 2,
        title: "Diriyah UNESCO & Modern Riyadh",
        description: "Explore the birthplace of Saudi Arabia and modern capital highlights.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/At-Turaif_District_of_Diriyah%2C_Saudi_Arabia.jpg/960px-At-Turaif_District_of_Diriyah%2C_Saudi_Arabia.jpg",
        activities: [
          "Diriyah UNESCO World Heritage site tour",
          "At-Turaif District comprehensive exploration",
          "Kingdom Centre Tower visit and observation",
          "Luxury shopping experience at high-end malls",
          "Fine dining dinner at renowned restaurant",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury heritage hotel in Riyadh",
      },
      {
        day: 3,
        title: "Edge of the World Adventure",
        description: "Adventure day at the dramatic Edge of the World with luxury desert camping.",
        image: "https://riyadhdesert.com/wp-content/uploads/2023/10/edge-of-the-world-1024x576.jpeg",
        activities: [
          "Edge of the World hiking and exploration",
          "Professional photography session",
          "Luxury desert camping setup",
          "Stargazing with professional astronomer",
          "Traditional Bedouin dinner under stars",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury desert camp experience",
      },
      {
        day: 4,
        title: "AlUla - Ancient Wonders",
        description: "Fly to AlUla and explore the magnificent Hegra UNESCO site.",
        image: "https://www.afalula.com/wp-content/uploads/2019/04/ALULA-CF004733010718.jpg",
        activities: [
          "Morning flight to AlUla",
          "Hegra UNESCO site with archaeologist guide",
          "Nabataean tombs and ancient inscriptions",
          "Luxury spa treatments at desert resort",
          "Gourmet dinner with local specialties",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Ultra-luxury desert resort",
      },
      {
        day: 5,
        title: "AlUla Cultural & Adventure Mix",
        description: "Perfect blend of cultural workshops and adventure activities.",
        image: "https://wondersofneom.com/storage/2023/12/image-1024x683.png",
        activities: [
          "Traditional craft workshops with artisans",
          "Hot air balloon ride over AlUla",
          "Rock climbing experience (optional)",
          "AlUla Old Town exploration",
          "Cultural performance dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Ultra-luxury desert resort",
      },
      {
        day: 6,
        title: "Abha Mountain Retreat",
        description: "Travel to the cool mountains of Asir and traditional villages.",
        image: "https://c.regencyholidays.com/blog/2023/8/101759_Places%20to%20Visit%20Near%20Green%20Mountain.webp",
        activities: [
          "Scenic flight to Abha",
          "Traditional Asir village tour",
          "Mountain hiking with spectacular views",
          "Local cultural immersion experiences",
          "Traditional mountain cuisine dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain luxury resort",
      },
      {
        day: 7,
        title: "Asir Cultural Heritage",
        description: "Deep dive into Asir cultural heritage and traditional crafts.",
        image: "https://www.abouther.com/sites/default/files/2018/10/18/jarash_1.jpg",
        activities: [
          "Traditional markets and souks tour",
          "Handicraft workshops with local artisans",
          "Meetings with traditional craftspeople",
          "Traditional music and dance performance",
          "Cultural center visits and exhibitions",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain luxury resort",
      },
      {
        day: 8,
        title: "Red Sea Paradise - Jeddah",
        description: "Fly to Jeddah and explore the historic Al-Balad UNESCO district.",
        image: "https://blog.umrahme.com/wp-content/uploads/2023/09/visit_jeddah-1024x576.jpg",
        activities: [
          "Flight to Jeddah",
          "Al-Balad UNESCO World Heritage tour",
          "Traditional Hijazi architecture exploration",
          "Red Sea beach activities and relaxation",
          "Fresh seafood dinner by the sea",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury beachfront resort",
      },
      {
        day: 9,
        title: "Red Sea Adventure & Relaxation",
        description: "Choose your Red Sea adventure and enjoy luxury spa treatments.",
        image: "https://www.abouther.com/sites/default/files/2018/09/03/shutterstock_520257568.jpg",
        activities: [
          "Red Sea diving or snorkeling experience",
          "Yacht excursion with water sports",
          "Luxury spa treatments and wellness",
          "Jeddah luxury shopping tour",
          "Farewell gala dinner celebration",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury beachfront resort",
      },
      {
        day: 10,
        title: "Final Experiences & Departure",
        description: "Last cultural experiences and VIP departure from your complete journey.",
        image: "https://static.toiimg.com/photo/122748606.cms",
        activities: [
          "Final cultural tour and experiences",
          "Souvenir shopping at traditional markets",
          "Journey completion ceremony",
          "VIP airport transfer and departure",
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
        question: "What makes this the 'Complete Experience' tour?",
        answer:
          "This tour combines every aspect of Saudi Arabia - UNESCO World Heritage sites, cultural immersion, adventure activities, luxury accommodations, and modern experiences. It's designed to showcase the full spectrum of what the kingdom offers in one comprehensive 10-day journey.",
      },
      {
        question: "What level of luxury can I expect?",
        answer:
          "We provide 5-star accommodations throughout, including luxury heritage hotels, ultra-luxury desert resorts, mountain retreats, and beachfront properties. All experiences include VIP access, premium services, and professional photography documentation.",
      },
      {
        question: "Is this tour suitable for all fitness levels?",
        answer:
          "The tour is designed for moderate fitness levels. While there are adventure activities like hiking and optional rock climbing, alternatives are always available for those who prefer cultural experiences. All activities can be adapted to your comfort level.",
      },
      {
        question: "How many people are typically in the group?",
        answer:
          "Groups are limited to 6-16 people to ensure personalized attention and exclusive experiences. This intimate group size allows for flexibility, premium service, and access to locations that larger groups cannot visit.",
      },
    ],
    reviewItems: [
      {
        id: 1,
        name: "Sarah Johnson",
        country: "United States",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Absolutely incredible complete experience!",
        text: "This tour exceeded all expectations! The luxury accommodations, expert guides, and perfect blend of culture and adventure made this the trip of a lifetime. Every detail was perfectly planned and executed. The professional photography service was an amazing bonus!",
      },
      {
        id: 2,
        name: "Michael Chen",
        country: "Australia",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Ultimate Saudi Arabia journey",
        text: "The complete experience tour truly lives up to its name. From UNESCO sites to luxury desert camps, from mountain retreats to Red Sea adventures - this tour showcases everything Saudi Arabia has to offer. The VIP treatment and exclusive access made it unforgettable.",
      },
    ],
    reviewStats: {
      overall: 4.9,
      count: 234,
      breakdown: { 5: 220, 4: 12, 3: 2, 2: 0, 1: 0 },
      categories: {
        value: 4.8,
        guide: 4.9,
        itinerary: 5.0,
        accommodation: 4.9,
        transportation: 4.8,
        luxury: 5.0,
      },
    },
    upcomingDates: [
      { date: "March 15, 2025", spotsLeft: 4, price: 2599 },
      { date: "April 12, 2025", spotsLeft: 6, price: 2599 },
      { date: "May 10, 2025", spotsLeft: 3, price: 2799 },
      { date: "June 7, 2025", spotsLeft: 8, price: 2799 },
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-indigo-50">
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-purple-700">{formatPrice(tour.price)}</div>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800">{tour.title}</h1>
              <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 fill-purple-500 text-purple-500" />
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
              <h2 className="text-xl md:text-2xl font-bold text-white">Ultimate Complete Saudi Experience</h2>
              <p className="text-sm md:text-base text-white/90">
                Luxury, culture, adventure, and relaxation in one comprehensive journey
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
                  <h2 className="text-2xl font-bold mb-6 text-purple-700">Complete Experience Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <Card
                        key={day.day}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
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
                                  <h4 className="text-sm font-medium text-purple-700 mb-2">Activities:</h4>
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
                                    <h4 className="text-sm font-medium text-purple-700 mb-1">Meals Included:</h4>
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
                                      <h4 className="text-sm font-medium text-purple-700 mb-1">Accommodation:</h4>
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
                  <h2 className="text-2xl font-bold mb-4 text-purple-700">Complete Experience Overview</h2>
                  <p className="text-lg mb-6">{tour.description}</p>

                  <div className="my-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl"></div>
                    <div className="relative p-6">
                      <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-500" /> Complete Experience Highlights
                      </h3>
                      <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                            <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-purple-700">Upcoming Complete Experience Departures</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-purple-50">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-medium text-purple-700">Departure Date</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-purple-700">Price</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-purple-700">Availability</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-purple-700"></th>
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
                                className="text-purple-700 border-purple-700 hover:bg-purple-50 bg-transparent"
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
                  <h2 className="text-2xl font-bold mb-6 text-purple-700">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-700">
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
                  <h2 className="text-2xl font-bold mb-6 text-purple-700">Complete Experience Route</h2>
                  <p className="mb-6 text-muted-foreground">
                    Follow the comprehensive route of our {tour.title} tour, covering all major destinations and
                    experiences across Saudi Arabia.
                  </p>
                  <div className="bg-purple-50 p-8 rounded-lg text-center">
                    <MapIcon className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Complete Experience Map Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're developing an interactive map showcasing your complete journey through Saudi Arabia's most
                      spectacular destinations.
                    </p>
                  </div>
                  <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Complete Experience Route</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Riyadh: Royal capital and modern Saudi Arabia</li>
                      <li>Edge of the World: Dramatic desert adventure</li>
                      <li>AlUla: UNESCO Hegra and luxury desert experience</li>
                      <li>Abha: Mountain retreat and traditional villages</li>
                      <li>Jeddah: Red Sea paradise and Al-Balad heritage</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 text-purple-700">Complete Experience Reviews</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                            <div className="text-5xl font-bold text-purple-600">{tour.reviewStats.overall}</div>
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
                            <div className="text-lg font-medium text-purple-700">Outstanding</div>
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
                            <h4 className="font-bold text-lg mb-2 text-purple-700">{review.title}</h4>
                            <p className="mb-4">{review.text}</p>
                            <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
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
              </TabsContent>

              <TabsContent value="faq" className="mt-0">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-purple-700">Frequently Asked Questions</h2>
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
                  <div className="mt-8 bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Complete Experience Specialists</h3>
                    <p className="text-muted-foreground mb-4">
                      Our complete experience specialists are here to help you plan the ultimate Saudi Arabia journey.
                      Contact us for detailed information about luxury accommodations and exclusive experiences.
                    </p>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Experience Team</Link>
                    </BubbleButton>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8 mt-12">
            {/* Booking Form Section */}
            <div id="booking-form" className="w-full">
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-16">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-purple-600 mb-4">Ready to Book Your Complete Experience?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Secure your spot on this incredible luxury journey with our easy 3-step booking process
                    </p>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <BookingForm tourTitle={tour.title} tourPrice={tour.price} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <Clock className="h-8 w-8 text-purple-500" />
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
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                <h3 className="font-bold text-2xl">Why Book With Us</h3>
                <p className="text-white/80 text-lg">Your trusted luxury travel partner</p>
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
                      <h4 className="font-semibold mb-1">Luxury Accommodations</h4>
                      <p className="text-muted-foreground text-sm">5-star hotels and resorts throughout</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">VIP Access</h4>
                      <p className="text-muted-foreground text-sm">Exclusive experiences and locations</p>
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
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                <h3 className="font-bold text-2xl">Need Help?</h3>
                <p className="text-white/80 text-lg">We're here to assist you</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 bg-purple-50 p-6 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Call us</div>
                      <a href="tel:+966123456789" className="font-semibold text-lg hover:underline text-purple-600">
                        +966 12 345 6789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-purple-50 p-6 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Email us</div>
                      <a
                        href="mailto:luxury@saudiexplorer.com"
                        className="font-semibold text-lg hover:underline text-purple-600"
                      >
                        luxury@saudiexplorer.com
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
