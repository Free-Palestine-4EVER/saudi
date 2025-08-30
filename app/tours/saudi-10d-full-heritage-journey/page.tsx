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
import { useCurrency } from "@/contexts/currency-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function Saudi10DFullHeritageJourneyPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 10 Days - Full Heritage Journey",
    slug: "saudi-10d-full-heritage-journey",
    duration: 10,
    price: 2299,
    originalPrice: 2699,
    rating: 4.8,
    reviews: 178,
    description:
      "The most comprehensive cultural heritage journey through Saudi Arabia's rich history. Explore all major UNESCO World Heritage sites, ancient civilizations, Islamic heritage, and traditional culture with expert historians and archaeologists. Perfect for cultural enthusiasts seeking deep understanding of the kingdom's remarkable past.",
    highlights: [
      "All major UNESCO World Heritage sites",
      "Expert archaeologist and historian guides",
      "Ancient Nabataean civilization exploration",
      "Islamic heritage and religious sites",
      "Traditional craft workshops and demonstrations",
      "Meetings with local historians and scholars",
      "Ancient trade route discoveries",
      "Comprehensive historical documentation",
    ],
    includes: [
      "9 nights heritage accommodation",
      "All meals including traditional cuisine",
      "Expert historian and archaeologist guides",
      "All domestic flights and transportation",
      "Cultural workshops and educational activities",
      "Entrance fees to all historical sites",
      "Educational materials and documentation",
      "Traditional entertainment and performances",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Personal expenses and shopping",
      "Travel insurance",
      "Optional cultural activities",
      "Tips for guides and drivers",
      "Souvenirs and personal purchases",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Riyadh - Kingdom's Foundation",
        description:
          "Begin your heritage journey in Riyadh with comprehensive introduction to Saudi Arabia's founding history.",
        image: "https://pre-webunwto.s3.eu-west-1.amazonaws.com/2024-02/100mtourist.jpg?VersionId=GwYtZ3jO4.ueJPLUlfAkderHlUaFIu_6",
        activities: [
          "VIP airport reception and transfer",
          "National Museum comprehensive guided tour",
          "Kingdom's foundation history presentation",
          "Traditional welcome dinner with cultural performance",
          "Heritage hotel check-in and orientation",
        ],
        meals: ["Dinner"],
        accommodation: "Heritage hotel in Riyadh",
      },
      {
        day: 2,
        title: "Diriyah UNESCO - First Saudi State",
        description:
          "Explore Diriyah, the birthplace of the Saudi state, with detailed archaeological and historical tours.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/At-Turaif_District_of_Diriyah%2C_Saudi_Arabia.jpg",
        activities: [
          "Diriyah UNESCO World Heritage comprehensive tour",
          "At-Turaif District archaeological exploration",
          "Traditional Najdi architecture detailed study",
          "Historical documentation and photography",
          "Meeting with local historians and experts",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Riyadh",
      },
      {
        day: 3,
        title: "Riyadh Heritage & Traditional Crafts",
        description:
          "Deep dive into Riyadh's cultural heritage with traditional markets, craft centers, and artisan workshops.",
        image: "https://www.abouther.com/sites/default/files/2019/05/29/main_-_saudi_old_market.jpg",
        activities: [
          "Traditional Souq Al-Zal exploration",
          "Traditional craft workshops with master artisans",
          "Meetings with local craftspeople and historians",
          "Cultural center visits and exhibitions",
          "Traditional music and poetry evening",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Riyadh",
      },
      {
        day: 4,
        title: "Flight to AlUla - Ancient Civilizations",
        description: "Fly to AlUla and begin exploring the magnificent ancient Nabataean civilization at Hegra.",
        image: "https://www.entrepreneurshipksa.com/wp-content/uploads/2025/05/AlUla-Goes-Digital-Where-Ancient-Civilizations-Meet-the-Future-of-Influence-780x470.webp",
        activities: [
          "Morning flight to AlUla",
          "Hegra UNESCO site with expert archaeologist",
          "Nabataean civilization comprehensive study",
          "Ancient inscriptions and tomb exploration",
          "Archaeological documentation session",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage desert lodge in AlUla",
      },
      {
        day: 5,
        title: "AlUla Historical Deep Dive",
        description: "Continue exploring AlUla's rich history including Dadan, ancient inscriptions, and trade routes.",
        image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/10/08/1789256-590105704.jpg?itok=FEYZ820Q",
        activities: [
          "Dadan ancient city archaeological tour",
          "Jabal Ikmah inscriptions detailed study",
          "Ancient incense trade route exploration",
          "AlUla Old Town historical tour",
          "Traditional storytelling evening",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage desert lodge in AlUla",
      },
      {
        day: 6,
        title: "AlUla to Medina - Islamic Heritage",
        description: "Travel to Medina to explore the profound Islamic heritage and visit significant religious sites.",
        image: "https://digital.ihg.com/is/image/ihg/intercontinental-madinah-9047763518-4x3",
        activities: [
          "Scenic journey to Medina",
          "Prophet's Mosque visit and historical tour",
          "Islamic heritage sites exploration",
          "Religious history comprehensive study",
          "Meeting with Islamic scholars",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Medina",
      },
      {
        day: 7,
        title: "Medina Islamic History Deep Dive",
        description:
          "Comprehensive exploration of Medina's Islamic history with historical mosques and heritage centers.",
        image: "https://www.kashmirica.com/wp-content/uploads/2023/10/Downloader-La-53CZfu9Jjt-1024x660.jpg",
        activities: [
          "Historical mosques comprehensive tour",
          "Islamic heritage centers and museums",
          "Meetings with religious scholars and historians",
          "Islamic art and calligraphy workshops",
          "Traditional Islamic architecture study",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Medina",
      },
      {
        day: 8,
        title: "Jeddah - Red Sea Trading Heritage",
        description: "Explore Jeddah's Al-Balad UNESCO district and the city's rich Red Sea trading heritage.",
        image: "https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/07/Red-Sea-Project.jpg",
        activities: [
          "Flight to Jeddah",
          "Al-Balad UNESCO World Heritage comprehensive tour",
          "Traditional coral architecture detailed study",
          "Red Sea trade history exploration",
          "Traditional merchant houses visits",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Al-Balad",
      },
      {
        day: 9,
        title: "Jeddah Cultural Heritage & Traditions",
        description: "Final day exploring Jeddah's cultural traditions, crafts, and role as gateway to Mecca.",
        image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/07/17/1669811-902770465.jpg?itok=2Eyc6xpi",
        activities: [
          "Traditional Hijazi craft workshops",
          "Cultural traditions and customs study",
          "Historical Jeddah comprehensive tour",
          "Traditional architecture documentation",
          "Farewell cultural performance dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heritage hotel in Al-Balad",
      },
      {
        day: 10,
        title: "Heritage Journey Completion & Departure",
        description: "Final heritage activities, journey review, and departure with complete cultural understanding.",
        image: "https://static.srpcdigital.com/styles/1037xauto/public/2025-03/1005871_0.jpeg.webp",
        activities: [
          "Final heritage site visit",
          "Journey documentation review and presentation",
          "Cultural completion ceremony",
          "Traditional farewell gathering",
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
    gallery: [
      { src: "/images/saudi-hero.jpg", alt: "Heritage sites", caption: "UNESCO World Heritage exploration" },
      { src: "/images/petra-hero.png", alt: "Ancient ruins", caption: "Archaeological discoveries" },
      { src: "/images/wadi-rum-hero.png", alt: "Traditional crafts", caption: "Cultural workshops" },
      { src: "/images/dead-sea-hero.png", alt: "Islamic heritage", caption: "Religious and cultural sites" },
    ],
    faqs: [
      {
        question: "What makes this the 'Full Heritage Journey' tour?",
        answer:
          "This tour covers all major UNESCO World Heritage sites in Saudi Arabia, ancient civilizations from Nabataean to Islamic periods, and provides the most comprehensive cultural education available. You'll work with expert historians and archaeologists throughout the journey.",
      },
      {
        question: "Do I need prior knowledge of Saudi history?",
        answer:
          "No prior knowledge is required. Our expert historians and archaeologists provide comprehensive education throughout the tour, making complex historical concepts accessible to all participants. Educational materials are provided to enhance your understanding.",
      },
      {
        question: "What level of physical activity is involved?",
        answer:
          "This tour is designed for easy to moderate physical activity. Most sites involve walking on relatively flat terrain. The focus is on cultural education rather than physical challenges, making it suitable for most fitness levels.",
      },
      {
        question: "Will I meet local historians and scholars?",
        answer:
          "Yes, meetings with local historians, archaeologists, scholars, and traditional craftspeople are integral parts of this heritage journey. These interactions provide authentic insights into Saudi Arabia's rich cultural heritage and traditions.",
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
        name: "Dr. Patricia Williams",
        country: "United Kingdom",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "3 weeks ago",
        title: "Exceptional heritage education!",
        text: "As a history professor, I was thoroughly impressed by the depth and authenticity of this heritage tour. The expert guides, comprehensive site visits, and meetings with local scholars provided unparalleled insights into Saudi Arabia's rich cultural heritage. Highly educational and inspiring!",
      },
      {
        id: 2,
        name: "Ahmed Hassan",
        country: "Egypt",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Comprehensive cultural journey",
        text: "This heritage journey exceeded all expectations. From ancient Nabataean sites to Islamic heritage and traditional crafts, every aspect was expertly presented. The archaeological insights and historical documentation made this an unforgettable educational experience.",
      },
    ],
    reviewStats: {
      overall: 4.8,
      count: 178,
      breakdown: { 5: 165, 4: 11, 3: 2, 2: 0, 1: 0 },
      categories: {
        value: 4.7,
        guide: 4.9,
        itinerary: 4.8,
        accommodation: 4.6,
        transportation: 4.7,
        education: 5.0,
      },
    },
    upcomingDates: [
      { date: "March 20, 2025", spotsLeft: 5, price: 2299 },
      { date: "April 17, 2025", spotsLeft: 7, price: 2299 },
      { date: "May 15, 2025", spotsLeft: 3, price: 2499 },
      { date: "June 12, 2025", spotsLeft: 9, price: 2499 },
    ],
  }

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageKey]: true }))
  }

  const calculateReviewPercentage = (rating: number) => {
    const count = tour.reviewStats.breakdown[rating] || 0
    return (count / tour.reviewStats.count) * 100
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
              <h2 className="text-xl md:text-2xl font-bold text-white">Complete Heritage Journey</h2>
              <p className="text-sm md:text-base text-white/90">
                Comprehensive exploration of Saudi Arabia's rich cultural heritage
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
                    <h2 className="text-4xl font-bold text-orange-600 mb-4">Ready to Book Your Heritage Journey?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Secure your spot on this incredible cultural journey with our easy 3-step booking process
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
