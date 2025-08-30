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

export default function Saudi7DAdventureHikingPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("itinerary")
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 7 Days - Adventure & Hiking",
    slug: "saudi-7d-adventure-hiking",
    duration: 7,
    price: 1899,
    originalPrice: 2199,
    rating: 4.7,
    reviews: 89,
    description:
      "Ultimate adventure tour covering Saudi Arabia's diverse landscapes from desert dunes to mountain peaks, including challenging hikes and outdoor activities across the kingdom's most spectacular terrains.",
    highlights: [
      "Multi-day desert trekking expedition",
      "Asir Mountains peak climbing adventures",
      "Edge of the World cliff hiking experience",
      "Wadi exploration and canyoning activities",
      "Desert camping under starlit skies",
      "Rock climbing and rappelling sessions",
      "Traditional Bedouin cultural experiences",
    ],
    includes: [
      "6 nights mixed accommodation (hotels and camps)",
      "All meals during adventure activities",
      "Professional adventure guides",
      "All climbing and hiking equipment",
      "4WD transportation",
      "Domestic flights",
      "Safety equipment and first aid",
      "Desert and mountain camping gear",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Personal adventure gear",
      "Travel and adventure insurance",
      "Tips for guides",
      "Optional extreme activities",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Riyadh - Edge of the World Trek",
        description: "Begin with the iconic Edge of the World cliff formations and hiking experience.",
        image: "https://www.timeoutriyadh.com/cloud/timeoutriyadh/2024/05/06/Edge-of-the-World-1024x768.jpg",
        activities: [
          "Early departure to Jebel Fihrayn",
          "Challenging cliff-edge hiking",
          "Photography and exploration",
          "Desert camping setup",
          "Stargazing and night activities",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert camping",
      },
      {
        day: 2,
        title: "Desert Trekking Adventure",
        description: "Multi-day desert trekking experience with Bedouin culture.",
        image: "https://gulfmagazine.co/wp-content/uploads/2025/06/62-1536x640.webp",
        activities: [
          "Desert navigation training",
          "Camel trekking experience",
          "Traditional Bedouin skills",
          "Desert survival techniques",
          "Evening around campfire",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert camping",
      },
      {
        day: 3,
        title: "Wadi Hanifah Adventure",
        description: "Rock climbing and nature activities in Riyadh's green corridor.",
        image: "https://www.cuddlynest.com/blog/wp-content/uploads/2024/06/wadi_hanifa-.png",
        activities: [
          "Return to Riyadh area",
          "Rock climbing sessions",
          "Wadi exploration and hiking",
          "Rappelling activities",
          "Hotel rest and recovery",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Adventure lodge",
      },
      {
        day: 4,
        title: "Flight to Asir Mountains",
        description: "Travel to the cool highlands for mountain adventures.",
        image: "https://www.corinthiantravel.co.uk/app/uploads/2024/04/Mecca-Taif.-Jabal-Daka-Saudi-Arabia-DT-307371169-1.jpg",
        activities: [
          "Morning flight to Abha",
          "Acclimatization hike",
          "Green Mountain cable car",
          "Mountain village visit",
          "Preparation for peak climbing",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain lodge",
      },
      {
        day: 5,
        title: "Asir Peak Climbing",
        description: "Challenge yourself with peak climbing in the Asir Mountains.",
        image: "https://saudipedia.com/en/saudipediaen/uploads/images/2024/05/29/66884.jpg",
        activities: [
          "Early morning peak ascent",
          "Technical climbing sections",
          "Summit achievement",
          "Panoramic mountain views",
          "Descent and celebration",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain lodge",
      },
      {
        day: 6,
        title: "Canyoning and Adventure Sports",
        description: "Final adventure activities in the mountain region.",
        image: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2018/11/05/376a0320-a405-4c44-8534-cec6c7c8e02d/canyoning-spain",
        activities: [
          "Canyoning in mountain wadis",
          "Zip-lining activities",
          "Mountain biking trails",
          "Traditional village exploration",
          "Farewell adventure dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain lodge",
      },
      {
        day: 7,
        title: "Return Journey",
        description: "Final activities and return to Riyadh for departure.",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/231006161801-01-body-saudi-arabia-tourism-basics-riyadh.jpg?c=16x9&q=w_800,c_fill",
        activities: [
          "Morning nature walk",
          "Equipment return and packing",
          "Flight to Riyadh",
          "Adventure summary session",
          "Airport transfer",
        ],
        meals: ["Breakfast", "Lunch"],
      },
    ],
    images: [
      "https://www.abouther.com/sites/default/files/2020/12/10/adventures_tourism_saudi_arabia.jpg",
      "https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/04/Adventure-Tourism-In-Saudi-Arabia-840x473.jpg",
      "https://ramsestours.com/wp-content/uploads/2019/11/Saudi-Arabia-Day-Tours.jpg",
      "https://in.musafir.com/uploads/Hiking_3ae647735c.webp",
    ],
    gallery: [
      {
        src: "/images/saudi-hero.jpg",
        alt: "Edge of the World",
        caption: "Dramatic cliff formations for challenging hikes",
      },
      {
        src: "/images/petra-hero.png",
        alt: "Asir Mountains",
        caption: "Highland region for peak climbing and mountain sports",
      },
      { src: "/images/wadi-rum-hero.png", alt: "Desert Adventure", caption: "Multi-day desert trekking and camping" },
      { src: "/images/dead-sea-hero.png", alt: "Rock Climbing", caption: "Technical climbing in stunning landscapes" },
    ],
    faqs: [
      {
        question: "What fitness level is required for this adventure tour?",
        answer:
          "This tour requires a high fitness level as it includes challenging hiking, rock climbing, and multi-day trekking. Participants should be comfortable with strenuous physical activities.",
      },
      {
        question: "What equipment is provided vs. what should I bring?",
        answer:
          "We provide all technical equipment including climbing gear, safety equipment, and camping gear. You should bring personal items like hiking boots, weather-appropriate clothing, and personal care items.",
      },
      {
        question: "Is this tour suitable for beginners?",
        answer:
          "While we provide instruction, this tour is designed for those with some outdoor experience. Complete beginners should consider our mixed explorer tours first.",
      },
      {
        question: "What are the weather conditions like?",
        answer:
          "Weather varies by region and season. Desert areas can be hot during the day and cool at night, while mountain areas are generally cooler. We provide detailed packing lists based on travel dates.",
      },
    ],
    weatherInfo: {
      spring: {
        months: "March to May",
        temperature: "20°C to 35°C (68°F to 95°F)",
        description: "Perfect weather for outdoor activities with mild temperatures and clear skies.",
        recommendation: "Highly Recommended",
      },
      summer: {
        months: "June to August",
        temperature: "35°C to 50°C (95°F to 122°F)",
        description:
          "Very hot in desert areas. Mountain regions are more comfortable. Early morning activities recommended.",
        recommendation: "Challenging",
      },
      autumn: {
        months: "September to November",
        temperature: "25°C to 40°C (77°F to 104°F)",
        description: "Excellent weather for adventure activities with comfortable temperatures.",
        recommendation: "Highly Recommended",
      },
      winter: {
        months: "December to February",
        temperature: "15°C to 25°C (59°F to 77°F)",
        description: "Cool and perfect for all outdoor activities. Mountain areas can be quite cold.",
        recommendation: "Recommended",
      },
    },
    reviewItems: [
      {
        id: 1,
        name: "Mike Thompson",
        country: "Canada",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Epic adventure experience!",
        text: "This was the adventure of a lifetime! The guides were professional and safety-focused while pushing us to achieve amazing things. The Edge of the World hike was absolutely incredible.",
      },
      {
        id: 2,
        name: "Elena Rodriguez",
        country: "Spain",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Challenging but rewarding",
        text: "Tough but so worth it! The variety of activities and landscapes was amazing. The desert camping and mountain climbing were highlights. Great for adventure seekers!",
      },
    ],
    reviewStats: {
      overall: 4.7,
      count: 89,
      breakdown: { 5: 62, 4: 19, 3: 6, 2: 1, 1: 1 },
      categories: {
        value: 4.6,
        guide: 4.8,
        itinerary: 4.7,
        accommodation: 4.4,
        transportation: 4.6,
        food: 4.5,
      },
    },
    upcomingDates: [
      { date: "March 20, 2025", spotsLeft: 4, price: 1899 },
      { date: "April 3, 2025", spotsLeft: 6, price: 1899 },
      { date: "April 17, 2025", spotsLeft: 2, price: 1999 },
      { date: "May 1, 2025", spotsLeft: 8, price: 1999 },
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
                <h2 className="text-xl md:text-2xl font-bold text-white">Ultimate Saudi Adventure</h2>
                <p className="text-sm md:text-base text-white/90">
                  Conquer mountains, deserts, and cliffs across the kingdom
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 md:mb-8">
              {tour.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    setActiveGalleryImage(index + 1)
                    setShowGalleryModal(true)
                  }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Tour image ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      View Gallery
                    </div>
                  </div>
                </div>
              ))}
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
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Detailed Itinerary</h2>
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
                                    <h4 className="text-sm font-medium text-orange-700 mb-2">Today's Activities:</h4>
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
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-4 text-orange-700">Tour Overview</h2>
                      <p className="text-lg">{tour.description}</p>

                      <div className="my-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl"></div>
                        <div className="relative p-6">
                          <h3 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
                            <Star className="h-5 w-5 mr-2 text-yellow-500" /> Tour Highlights
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

                      <h3 className="text-xl font-bold mb-4 text-orange-700">Best Time to Visit</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {Object.entries(tour.weatherInfo).map(([season, info]) => (
                          <div key={season} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3">
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
                                <Thermometer className="h-4 w-4 text-red-500" />
                                <span className="text-sm">{info.temperature}</span>
                              </div>
                              <p className="text-sm mb-3">{info.description}</p>
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-orange-500" />
                                <span className="text-sm font-medium">{info.recommendation}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-orange-700">Upcoming Departures</h3>
                      <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden">
                          <thead className="bg-orange-50">
                            <tr>
                              <th className="py-3 px-4 text-left text-sm font-medium text-orange-700">
                                Departure Date
                              </th>
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
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Tour Route Map</h2>
                    <p className="mb-6 text-muted-foreground">
                      Explore the route of our {tour.title} tour. This map shows all the destinations you'll visit
                      during your {tour.duration}-day adventure through Saudi Arabia.
                    </p>
                    <div className="bg-orange-50 p-8 rounded-lg text-center">
                      <MapIcon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Interactive Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're working on an interactive map to show your adventure route through Saudi Arabia's most
                        spectacular landscapes.
                      </p>
                    </div>
                    <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Adventure Highlights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Edge of the World cliff formations and desert camping</li>
                        <li>Asir Mountains peak climbing and highland adventures</li>
                        <li>Wadi exploration and technical rock climbing</li>
                        <li>Multi-day desert trekking with Bedouin experiences</li>
                        <li>Professional adventure guides and safety equipment</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Traveler Reviews</h2>
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
                      <BubbleButton variant="outline" className="w-full">
                        View All Reviews
                      </BubbleButton>
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
                      <h3 className="font-medium text-lg mb-3">Have more questions?</h3>
                      <p className="text-muted-foreground mb-4">
                        Our adventure specialists are here to help you plan your perfect Saudi Arabia adventure. Feel
                        free to contact us with any questions you may have.
                      </p>
                      <BubbleButton variant="outline" className="w-full">
                        <Link href="/contact">Contact Us</Link>
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
                  <p className="text-white/80">Secure your spot today!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-orange-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                    {tour.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{formatPrice(tour.originalPrice)}</span>
                    )}
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-orange-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium">Limited spots available for upcoming dates!</span>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Free cancellation up to 30 days before departure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                  <h3 className="font-bold text-xl">Need Help?</h3>
                  <p className="text-white/80">We're here to assist you</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Call us</div>
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
                        <div className="text-sm text-muted-foreground">Email us</div>
                        <a href="mailto:info@saudiexplorer.com" className="font-medium hover:underline text-orange-700">
                          info@saudiexplorer.com
                        </a>
                      </div>
                    </div>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </BubbleButton>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-orange-700">Why Book With Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Best price guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Free cancellation options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Expert adventure guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Professional safety equipment</span>
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
