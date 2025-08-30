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

export default function BestOfSaudiArabiaPage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 10 Days - Best of Saudi Arabia",
    slug: "best-of-saudi-arabia",
    duration: 10,
    price: 2299,
    originalPrice: 2599,
    rating: 4.9,
    reviews: 156,
    description:
      "Experience the very best of Saudi Arabia on this comprehensive 10-day journey. From the ancient wonders of AlUla to the modern marvels of Riyadh and the pristine waters of the Red Sea, this tour offers a perfect blend of history, culture, and natural beauty that showcases the Kingdom's incredible transformation and rich heritage.",
    highlights: [
      "Explore the ancient Nabataean city of Hegra in AlUla",
      "Discover the modern capital city of Riyadh and its landmarks",
      "Visit the historic port city of Jeddah and its UNESCO World Heritage sites",
      "Experience the dramatic landscapes of the Edge of the World",
      "Enjoy luxury accommodations and authentic Saudi cuisine",
      "Learn about Saudi culture and traditions from expert local guides",
      "Visit traditional souks and modern shopping destinations",
      "Experience the hospitality of the Saudi people",
    ],
    includes: [
      "9 nights accommodation in 4-5 star hotels",
      "All meals featuring authentic Saudi cuisine",
      "Professional English-speaking guide throughout",
      "All entrance fees to sites and attractions",
      "Domestic flights between cities",
      "All transfers in modern air-conditioned vehicles",
      "Welcome and farewell dinners",
      "Bottled water during tours",
      "All service charges and taxes",
      "Meet & assist service upon arrival and departure",
    ],
    excludes: [
      "International flight tickets",
      "Saudi visa fees",
      "Travel insurance (recommended)",
      "Personal expenses and shopping",
      "Beverages with meals (unless specified)",
      "Tips and gratuities",
      "Optional activities and excursions",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Riyadh - Welcome",
        description:
          "Arrive in Riyadh, Saudi Arabia's modern capital. Meet your guide and transfer to your hotel. Evening welcome dinner and tour briefing.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Airport pickup and transfer",
          "Hotel check-in and orientation",
          "Welcome dinner with traditional entertainment",
          "Tour briefing and preparation",
          "Rest and acclimatization",
        ],
        meals: ["Dinner"],
        accommodation: "5-star hotel in Riyadh",
      },
      {
        day: 2,
        title: "Riyadh City Tour",
        description:
          "Full day exploring Riyadh's highlights including the National Museum, Masmak Fortress, and modern landmarks.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "National Museum comprehensive tour",
          "Masmak Fortress historical exploration",
          "King Abdulaziz Historical Center",
          "Traditional Souq Al-Zal visit",
          "Modern Riyadh skyline tour",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "5-star hotel in Riyadh",
      },
      {
        day: 3,
        title: "Edge of the World Excursion",
        description:
          "Day trip to the dramatic Edge of the World cliffs, one of Saudi Arabia's most spectacular natural landmarks.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Early morning departure to Edge of the World",
          "Hiking and exploration of cliff formations",
          "Photography session at scenic viewpoints",
          "Picnic lunch with panoramic views",
          "Return to Riyadh in evening",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "5-star hotel in Riyadh",
      },
      {
        day: 4,
        title: "Flight to AlUla - Ancient Wonders",
        description:
          "Fly to AlUla and begin exploring this archaeological wonderland with its ancient Nabataean heritage.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Morning flight to AlUla",
          "AlUla Old Town guided tour",
          "Dadan ancient city exploration",
          "Jabal Ikmah inscriptions site",
          "Sunset at Elephant Rock",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury desert resort in AlUla",
      },
      {
        day: 5,
        title: "Hegra UNESCO Site",
        description:
          "Full day exploring Hegra, Saudi Arabia's first UNESCO World Heritage site with its magnificent Nabataean tombs.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Comprehensive Hegra archaeological tour",
          "Qasr al-Farid (Lonely Castle) visit",
          "Nabataean tombs and inscriptions study",
          "Ancient water systems exploration",
          "Archaeological interpretation session",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury desert resort in AlUla",
      },
      {
        day: 6,
        title: "AlUla Cultural Experiences",
        description:
          "Experience AlUla's cultural offerings including local crafts, traditional music, and desert activities.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Traditional craft workshops",
          "Local artisan demonstrations",
          "Desert adventure activities",
          "Cultural performances",
          "Stargazing experience",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Luxury desert resort in AlUla",
      },
      {
        day: 7,
        title: "Flight to Jeddah - Red Sea Gateway",
        description:
          "Fly to Jeddah, the historic gateway to Mecca, and explore the UNESCO-listed Al-Balad historic district.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Morning flight to Jeddah",
          "Historic Al-Balad district tour",
          "Traditional Hijazi architecture exploration",
          "Souq Al-Alawi traditional market",
          "Red Sea Corniche evening walk",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Historic boutique hotel in Jeddah",
      },
      {
        day: 8,
        title: "Jeddah Cultural Immersion",
        description:
          "Deep dive into Jeddah's rich cultural heritage, traditional crafts, and Red Sea maritime history.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Beit Nassif historical house museum",
          "Traditional Hijazi cooking class",
          "Local artisan workshops",
          "Historic mosques architectural tour",
          "Red Sea maritime heritage center",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Historic boutique hotel in Jeddah",
      },
      {
        day: 9,
        title: "Modern Jeddah & Red Sea",
        description: "Explore modern Jeddah's attractions and enjoy Red Sea coastal activities and relaxation.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "King Fahd Fountain visit",
          "Modern Jeddah city tour",
          "Red Sea coastal activities",
          "Shopping at traditional and modern markets",
          "Farewell dinner with cultural show",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Historic boutique hotel in Jeddah",
      },
      {
        day: 10,
        title: "Departure",
        description: "Final morning in Jeddah with last-minute shopping and cultural experiences before departure.",
        image: "/images/saudi-hero.jpg",
        activities: [
          "Final cultural experiences",
          "Last-minute souvenir shopping",
          "Cultural summary and reflection",
          "Airport transfer",
          "Departure with unforgettable memories",
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
        question: "What makes this the 'Best of Saudi Arabia' tour?",
        answer:
          "This comprehensive tour covers Saudi Arabia's most iconic destinations: modern Riyadh, ancient AlUla with UNESCO sites, and historic Jeddah. It perfectly balances history, culture, and natural beauty to showcase the Kingdom's incredible diversity.",
      },
      {
        question: "Is this tour suitable for first-time visitors to Saudi Arabia?",
        answer:
          "This tour is designed as the perfect introduction to Saudi Arabia, covering all major highlights with expert guides who provide cultural context and historical insights throughout the journey.",
      },
      {
        question: "What type of accommodations are included?",
        answer:
          "We use carefully selected 4-5 star hotels and luxury desert resorts that reflect local character while providing international comfort standards. All accommodations are chosen for their location, service, and cultural authenticity.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "The tour involves moderate walking at archaeological sites and historic districts. Most activities are suitable for travelers with average fitness levels. We provide comfortable transportation between sites and allow time for rest.",
      },
    ],
    reviewItems: [
      {
        id: 1,
        name: "Jennifer Martinez",
        country: "United States",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Perfect introduction to Saudi Arabia!",
        text: "This tour exceeded all my expectations! The combination of ancient history in AlUla, modern marvels in Riyadh, and cultural immersion in Jeddah was perfectly balanced. Our guide was incredibly knowledgeable and the accommodations were excellent throughout.",
      },
      {
        id: 2,
        name: "David Thompson",
        country: "United Kingdom",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Incredible journey through Saudi heritage",
        text: "From the moment we arrived until departure, every detail was perfectly organized. The UNESCO sites in AlUla were breathtaking, and experiencing traditional Saudi hospitality in Jeddah was unforgettable. Highly recommend this comprehensive tour!",
      },
    ],
    reviewStats: {
      overall: 4.9,
      count: 156,
      breakdown: { 5: 142, 4: 11, 3: 2, 2: 1, 1: 0 },
      categories: {
        value: 4.8,
        guide: 4.9,
        itinerary: 4.9,
        accommodation: 4.8,
        transportation: 4.8,
        experience: 4.9,
      },
    },
    upcomingDates: [
      { date: "March 20, 2025", spotsLeft: 8, price: 2299 },
      { date: "April 10, 2025", spotsLeft: 12, price: 2299 },
      { date: "May 1, 2025", spotsLeft: 6, price: 2499 },
      { date: "May 22, 2025", spotsLeft: 14, price: 2499 },
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-blue-50">
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-sky-700">{formatPrice(tour.price)}</div>
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-800">{tour.title}</h1>
                <div className="flex items-center gap-1 bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 fill-sky-500 text-sky-500" />
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
                <h2 className="text-xl md:text-2xl font-bold text-white">Experience the Magic of Saudi Arabia</h2>
                <p className="text-sm md:text-base text-white/90">
                  A journey through ancient history, modern marvels, and natural wonders
                </p>
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
                    <h2 className="text-2xl font-bold mb-6 text-sky-700">Complete Saudi Arabia Itinerary</h2>
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
                                    <h4 className="text-sm font-medium text-sky-700 mb-2">Activities:</h4>
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

                <TabsContent value="overview" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-sky-700">Best of Saudi Arabia Overview</h2>
                    <p className="text-lg mb-6">{tour.description}</p>

                    <div className="my-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 rounded-xl"></div>
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold mb-4 text-sky-700 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Tour Highlights
                        </h3>
                        <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                          {tour.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                              <Check className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-sky-700">Upcoming Departures</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-sky-50">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-sky-700">Departure Date</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-sky-700">Price</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-sky-700">Availability</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-sky-700"></th>
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
                                    date.spotsLeft <= 8
                                      ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
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
                                  className="text-sky-700 border-sky-700 hover:bg-sky-50 bg-transparent"
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

                <TabsContent value="map" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-sky-700">Best of Saudi Arabia Route</h2>
                    <p className="mb-6 text-muted-foreground">
                      Follow the comprehensive route of our {tour.title} tour, covering the Kingdom's most iconic
                      destinations and experiences.
                    </p>
                    <div className="bg-sky-50 p-8 rounded-lg text-center">
                      <MapIcon className="h-16 w-16 text-sky-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Interactive Map Coming Soon</h3>
                      <p className="text-muted-foreground">
                        We're developing an interactive map showcasing your complete journey through Saudi Arabia's best
                        destinations.
                      </p>
                    </div>
                    <div className="mt-6 bg-sky-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Tour Route</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Riyadh: Modern capital and Edge of the World</li>
                        <li>AlUla: UNESCO Hegra site and ancient wonders</li>
                        <li>Jeddah: Historic Al-Balad and Red Sea culture</li>
                        <li>Cultural experiences and traditional hospitality</li>
                        <li>Luxury accommodations and authentic cuisine</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 text-sky-700">Best of Saudi Arabia Reviews</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                              <div className="text-5xl font-bold text-sky-600">{tour.reviewStats.overall}</div>
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
                              <div className="text-lg font-medium text-sky-700">Outstanding</div>
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
                              <h4 className="font-bold text-lg mb-2 text-sky-700">{review.title}</h4>
                              <p className="mb-4">{review.text}</p>
                              <div className="flex items-center gap-3 bg-sky-50 p-3 rounded-lg">
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
                    <h2 className="text-2xl font-bold mb-6 text-sky-700">Frequently Asked Questions</h2>
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
                    <div className="mt-8 bg-sky-50 p-6 rounded-lg">
                      <h3 className="font-medium text-lg mb-3">Travel Specialists</h3>
                      <p className="text-muted-foreground mb-4">
                        Our Saudi Arabia specialists are here to help you plan the perfect journey. Contact us for
                        personalized recommendations and detailed travel information.
                      </p>
                      <BubbleButton variant="outline" className="w-full">
                        <Link href="/contact">Contact Travel Team</Link>
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
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
                  <h3 className="font-bold text-xl">Book This Tour</h3>
                  <p className="text-white/80">Secure your spot today!</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-sky-700">{formatPrice(tour.price)}</span>
                    <span className="text-muted-foreground">per person</span>
                    {tour.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{formatPrice(tour.originalPrice)}</span>
                    )}
                  </div>
                  <BookingForm />
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4 bg-sky-50 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-sky-500" />
                      <span className="text-sm font-medium">Limited spots available!</span>
                    </div>
                    <div className="flex items-center gap-2 bg-sky-50 p-3 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Free cancellation up to 30 days before departure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4">
                  <h3 className="font-bold text-xl">Need Help?</h3>
                  <p className="text-white/80">We're here to assist you</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center shadow-sm">
                        <Phone className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Call us</div>
                        <a href="tel:+966-800-SAUDI" className="font-medium hover:underline text-sky-700">
                          +966-800-SAUDI
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center shadow-sm">
                        <Mail className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email us</div>
                        <a href="mailto:info@saudiexplorer.com" className="font-medium hover:underline text-sky-700">
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
                <h3 className="font-bold text-xl mb-4 text-sky-700">Tour Guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Expert local guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Luxury accommodations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>All UNESCO site access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Authentic cultural experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span>Small group experience</span>
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
