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

export default function Saudi7DMixedExplorerPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("itinerary")
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 7 Days - Mixed Explorer",
    slug: "saudi-7d-mixed-explorer",
    duration: 7,
    price: 1699,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 127,
    description:
      "Perfect balance of culture, adventure and relaxation across Saudi Arabia's most iconic destinations with diverse experiences from modern Riyadh to ancient AlUla and coastal Jeddah.",
    highlights: [
      "Balanced culture and adventure mix",
      "Multiple UNESCO World Heritage sites",
      "Desert safari and cultural experiences",
      "Modern city exploration",
      "Traditional and contemporary Saudi life",
      "Diverse landscape experiences",
      "Authentic local interactions",
    ],
    includes: [
      "6 nights varied accommodation",
      "Most meals throughout the tour",
      "Bilingual professional guide",
      "All major entrance fees",
      "Desert safari and cultural activities",
      "Domestic flights",
      "Cultural performances and workshops",
      "Mixed transportation modes",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Some meals as specified",
      "Personal expenses and shopping",
      "Travel insurance",
      "Optional activities",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Riyadh - Modern Meets Traditional",
        description: "Explore the contrasts of Saudi Arabia's capital city.",
        image: "https://dom-publishers.com/cdn/shop/articles/iStock-1264361225_1024x1024.jpg?v=1709557130",
        activities: [
          "Kingdom Centre Tower visit",
          "Masmak Fortress exploration",
          "National Museum tour",
          "Traditional souq experience",
          "Modern dining experience",
        ],
        meals: ["Lunch", "Dinner"],
        accommodation: "4-star hotel in Riyadh",
      },
      {
        day: 2,
        title: "Diriyah Heritage & Edge of the World",
        description: "Combine historical exploration with natural wonders.",
        image: "https://images.ctfassets.net/9crgcb5vlu43/4kM7dz31wACsHBWG0FsB3v/9874ea31b0012016fc5d5704e52ee5a1/Diriyah_Header_4.jpg",
        activities: [
          "At-Turaif District morning tour",
          "Traditional architecture study",
          "Afternoon trip to Edge of the World",
          "Sunset viewing and photography",
          "Return to Riyadh",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "4-star hotel in Riyadh",
      },
      {
        day: 3,
        title: "Flight to AlUla - Ancient Wonders",
        description: "Begin exploring AlUla's archaeological treasures.",
        image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/fefccec7494610b744c44b388f3799feb35bb41233b09782cbcc8731ebf6d1e9.jpg",
        activities: [
          "Morning flight to AlUla",
          "AlUla Old Town guided tour",
          "Dadan archaeological site",
          "Elephant Rock sunset experience",
          "Traditional Bedouin dinner",
        ],
        meals: ["Breakfast", "Dinner"],
        accommodation: "Desert resort in AlUla",
      },
      {
        day: 4,
        title: "Hegra & Desert Adventure",
        description: "Combine UNESCO heritage with desert activities.",
        image: "https://www.corinthiantravel.co.uk/app/uploads/2024/06/Desert-Experiences-AlUla-Hegra-%C2%A9-Royal-Commission-for-AlUla.jpg",
        activities: [
          "Comprehensive Hegra tour",
          "Nabataean history and culture",
          "Desert safari experience",
          "Camel riding and traditional games",
          "Stargazing session",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert resort in AlUla",
      },
      {
        day: 5,
        title: "Flight to Jeddah - Red Sea Culture",
        description: "Explore the historic gateway and modern Red Sea city.",
        image: "https://www.kiwi.com/stories/wp-content/uploads/2024/12/untitled-1500-x-550-px-1000-x-1000-px-1500-x-550-px-1000-x-1000-px-1500-x-550-px-1000-x-1000-px-2.webp",
        activities: [
          "Flight to Jeddah",
          "Historic Al-Balad district tour",
          "Traditional Hijazi architecture",
          "Red Sea Corniche walk",
          "Local seafood dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Seaside hotel in Jeddah",
      },
      {
        day: 6,
        title: "Jeddah Cultural & Modern Mix",
        description: "Experience both traditional and contemporary Jeddah.",
        image: "https://chapman-taylor.transforms.svdcdn.com/production/uploads/Chapman-Taylor_Porta-Jeddah_v12.jpg?w=2048&h=1154&q=90&auto=format&fit=crop&dm=1682596162&s=833668062d87cef248df85ff54babf35",
        activities: [
          "Traditional souq exploration",
          "Modern art galleries visit",
          "King Fahd Fountain",
          "Cultural workshops",
          "Farewell cultural dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Seaside hotel in Jeddah",
      },
      {
        day: 7,
        title: "Final Exploration & Departure",
        description: "Last activities before departure.",
        image: "https://soulofsaudi.com/wp-content/uploads/2025/06/Saudi-Arabia-is-working-on-emerging-tourism-destinations-beyond-Riyadh-and-Jeddah-Credits-Kanebridge-News-Middle-East.png",
        activities: [
          "Final souvenir shopping",
          "Cultural center visit",
          "Airport transfer",
          "Departure assistance",
          "Tour conclusion",
        ],
        meals: ["Breakfast"],
      },
    ],
    images: [
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/1087D/production/_128690776_gettyimages-1330500785.jpg",
      "https://images.ctfassets.net/9crgcb5vlu43/4kM7dz31wACsHBWG0FsB3v/9874ea31b0012016fc5d5704e52ee5a1/Diriyah_Header_4.jpg",
      "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/fefccec7494610b744c44b388f3799feb35bb41233b09782cbcc8731ebf6d1e9.jpg",
      "https://www.corinthiantravel.co.uk/app/uploads/2024/06/Desert-Experiences-AlUla-Hegra-%C2%A9-Royal-Commission-for-AlUla.jpg",
    ],
    gallery: [
      {
        src: "/images/saudi-hero.jpg",
        alt: "Riyadh skyline",
        caption: "Capital city blending modern and traditional elements",
      },
      {
        src: "/images/petra-hero.png",
        alt: "AlUla heritage",
        caption: "Ancient oasis with heritage and adventure activities",
      },
      {
        src: "/images/wadi-rum-hero.png",
        alt: "Jeddah historic",
        caption: "Historic Red Sea port with modern developments",
      },
      { src: "/images/dead-sea-hero.png", alt: "Desert adventure", caption: "Perfect mix of culture and adventure" },
    ],
    faqs: [
      {
        question: "Is this tour suitable for families?",
        answer:
          "Yes, this mixed explorer tour is perfect for families as it combines cultural experiences with moderate adventure activities suitable for all ages.",
      },
      {
        question: "What's the difference between this and other tours?",
        answer:
          "This tour offers the perfect balance - you get cultural immersion, adventure activities, and relaxation without focusing too heavily on any single aspect.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Moderate walking is involved, mostly during city tours and archaeological site visits. All activities are designed to be accessible for most fitness levels.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, halal, and gluten-free options. Please inform us when booking.",
      },
    ],
    weatherInfo: {
      spring: {
        months: "March to May",
        temperature: "20°C to 35°C (68°F to 95°F)",
        description: "Perfect weather for all activities with comfortable temperatures and clear skies.",
        recommendation: "Highly Recommended",
      },
      summer: {
        months: "June to August",
        temperature: "35°C to 50°C (95°F to 122°F)",
        description: "Hot weather, but manageable with indoor activities and early morning/evening tours.",
        recommendation: "Possible with precautions",
      },
      autumn: {
        months: "September to November",
        temperature: "25°C to 40°C (77°F to 104°F)",
        description: "Excellent weather for mixed activities with warm but comfortable temperatures.",
        recommendation: "Highly Recommended",
      },
      winter: {
        months: "December to February",
        temperature: "15°C to 25°C (59°F to 77°F)",
        description: "Cool and perfect for all activities. Ideal for outdoor exploration and cultural visits.",
        recommendation: "Highly Recommended",
      },
    },
    reviewItems: [
      {
        id: 1,
        name: "Sarah Mitchell",
        country: "Australia",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Perfect balance of everything!",
        text: "This tour was exactly what we wanted - culture, adventure, and relaxation all in one. The guides were knowledgeable and the mix of activities kept everyone in our group happy.",
      },
      {
        id: 2,
        name: "Carlos Rodriguez",
        country: "Mexico",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Excellent introduction to Saudi Arabia",
        text: "As first-time visitors to Saudi Arabia, this tour gave us a comprehensive overview of the country. From modern Riyadh to ancient AlUla to coastal Jeddah - we saw it all!",
      },
    ],
    reviewStats: {
      overall: 4.6,
      count: 127,
      breakdown: { 5: 78, 4: 35, 3: 10, 2: 3, 1: 1 },
      categories: {
        value: 4.5,
        guide: 4.7,
        itinerary: 4.6,
        accommodation: 4.4,
        transportation: 4.5,
        food: 4.6,
      },
    },
    upcomingDates: [
      { date: "March 18, 2025", spotsLeft: 8, price: 1699 },
      { date: "April 1, 2025", spotsLeft: 12, price: 1699 },
      { date: "April 15, 2025", spotsLeft: 6, price: 1799 },
      { date: "May 6, 2025", spotsLeft: 14, price: 1799 },
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-cyan-50">
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
                  <span>Max 18 travelers</span>
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
                <h2 className="text-xl md:text-2xl font-bold text-white">Perfect Balance Explorer</h2>
                <p className="text-sm md:text-base text-white/90">Culture, adventure, and relaxation in one journey</p>
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
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Detailed Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day) => (
                        <Card
                          key={day.day}
                          className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
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
                                    <h4 className="text-sm font-medium text-blue-700 mb-2">Today's Activities:</h4>
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
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-4 text-blue-700">Tour Overview</h2>
                      <p className="text-lg">{tour.description}</p>

                      <div className="my-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl"></div>
                        <div className="relative p-6">
                          <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                            <Star className="h-5 w-5 mr-2 text-yellow-500" /> Tour Highlights
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

                      <h3 className="text-xl font-bold mb-4 text-blue-700">Best Time to Visit</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {Object.entries(tour.weatherInfo).map(([season, info]) => (
                          <div key={season} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3">
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
                                <Thermometer className="h-4 w-4 text-cyan-500" />
                                <span className="text-sm">{info.temperature}</span>
                              </div>
                              <p className="text-sm mb-3">{info.description}</p>
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-medium">{info.recommendation}</span>
                              </div>
                            </div>
                          </div>
                        ))}
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
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Tour Route Map</h2>
                    <p className="mb-6 text-muted-foreground">
                      Explore the route of our {tour.title} tour. This map shows all the destinations you'll visit
                      during your {tour.duration}-day journey through Saudi Arabia.
                    </p>
                    <div className="bg-blue-50 p-8 rounded-lg text-center">
                      <MapIcon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Interactive Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're working on an interactive map to show your mixed explorer route through Saudi Arabia's
                        diverse destinations.
                      </p>
                    </div>
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Tour Highlights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Modern Riyadh with traditional souks and contemporary attractions</li>
                        <li>UNESCO World Heritage site of Diriyah and Edge of the World</li>
                        <li>Ancient AlUla with Hegra archaeological site and desert adventures</li>
                        <li>Historic Jeddah Al-Balad district and Red Sea coastline</li>
                        <li>Perfect balance of culture, adventure, and relaxation</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Traveler Reviews</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
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
                              <div className="text-lg font-medium text-blue-700">Excellent</div>
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
                      <BubbleButton variant="outline" className="w-full">
                        View All Reviews
                      </BubbleButton>
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
                      <h3 className="font-medium text-lg mb-3">Have more questions?</h3>
                      <p className="text-muted-foreground mb-4">
                        Our travel specialists are here to help you plan your perfect Saudi Arabia mixed explorer
                        journey. Feel free to contact us with any questions you may have.
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
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book This Explorer</h3>
                  <p className="text-white/80">Secure your spot today!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-blue-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                    {tour.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{formatPrice(tour.originalPrice)}</span>
                    )}
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-blue-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-medium">Limited spots available for upcoming dates!</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Free cancellation up to 30 days before departure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
                  <h3 className="font-bold text-xl">Need Help?</h3>
                  <p className="text-white/80">We're here to assist you</p>
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
                        <a href="mailto:info@saudiexplorer.com" className="font-medium hover:underline text-blue-700">
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
                <h3 className="font-bold text-xl mb-4 text-blue-700">Why Book With Us</h3>
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
                    <span>Expert local guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Authentic experiences</span>
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
