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
import ReviewForm from "@/components/review-form"
import { useState, useEffect } from "react"
import { useCurrency } from "@/contexts/currency-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Saudi10DUltimateAdventurePage() {
  const [activeTab, setActiveTab] = useState("itinerary")
  const { formatPrice } = useCurrency()

  const tour = {
    title: "Saudi Arabia 10 Days - Ultimate Adventure",
    slug: "saudi-10d-ultimate-adventure",
    duration: 10,
    price: 2999,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 156,
    description:
      "Push your limits on the most extreme adventure Saudi Arabia has to offer! This 10-day ultimate adventure combines multiple high-adrenaline activities across the kingdom's most spectacular landscapes. From rock climbing on dramatic cliffs to scuba diving in pristine Red Sea waters, this expedition is designed for serious adventure seekers ready to conquer Saudi Arabia's wildest terrains.",
    highlights: [
      "Multi-sport adventure activities across diverse landscapes",
      "Rock climbing in AlUla's sandstone formations",
      "Scuba diving in pristine Red Sea waters",
      "Desert trekking and extreme sandboarding",
      "Mountain hiking and peak climbing in Asir region",
      "Wadi exploration and technical canyoning",
      "Extreme sports and adrenaline activities",
      "Professional adventure guides and safety equipment",
    ],
    includes: [
      "9 nights adventure accommodation (camps and lodges)",
      "All meals with high-energy sports nutrition",
      "Professional adventure guides for each activity",
      "All specialized equipment and safety gear",
      "All domestic flights and 4WD transportation",
      "Comprehensive adventure insurance coverage",
      "Emergency support and medical kit",
      "Adventure photography and video documentation",
    ],
    excludes: [
      "International flights",
      "Saudi visa fees",
      "Personal adventure equipment",
      "Comprehensive travel insurance",
      "Tips for adventure guides",
      "Optional extreme activities",
      "Personal expenses and gear",
    ],
    itinerary: [
      {
        day: 1,
        title: "Riyadh - Adventure Briefing",
        description:
          "Arrive in Riyadh, meet your adventure team, equipment check, and safety briefing. Evening team building and preparation for the ultimate adventure.",
        image: "https://hub.wtm.com/wp-content/uploads/2020/11/SAUDI-1-1200x675.jpg",
        activities: [
          "Airport pickup and transfer",
          "Adventure team meeting and introductions",
          "Equipment fitting and safety checks",
          "Comprehensive safety briefing and training",
          "Team building dinner and preparation",
        ],
        meals: ["Dinner"],
        accommodation: "Adventure base hotel in Riyadh",
      },
      {
        day: 2,
        title: "Edge of the World - Rock Climbing",
        description:
          "Drive to Edge of the World for spectacular rock climbing on limestone cliffs. Multiple routes for different skill levels with breathtaking views.",
        image: "https://www.uta.com.sa/wp-content/uploads/2023/05/Edge-of-world-Gallery-5.jpg",
        activities: [
          "Rock climbing instruction and techniques",
          "Multi-pitch climbing on limestone cliffs",
          "Advanced rappelling sessions",
          "Cliff-top camping setup and preparation",
          "Sunset photography from cliff edge",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Cliff-top adventure camping",
      },
      {
        day: 3,
        title: "Desert Adventure - Sandboarding & Trekking",
        description:
          "Extreme desert activities including sandboarding down massive dunes, desert trekking, and navigation challenges in the vast Arabian desert.",
        image: "https://blog.umrahme.com/wp-content/uploads/2023/09/sand_bord-1.jpg",
        activities: [
          "Extreme sandboarding lessons and practice",
          "Long-distance desert trekking",
          "Desert navigation challenges",
          "Dune camping and stargazing",
          "Traditional Bedouin cultural exchange",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Desert adventure camp",
      },
      {
        day: 4,
        title: "Flight to AlUla - Canyon Exploration",
        description:
          "Fly to AlUla and begin canyon exploration and technical climbing in the unique sandstone formations of this UNESCO region.",
        image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/8ef133549d24106c0c29f25b2c1ea9c874dc6f0a51e11d0ac6e7ad63d3814360.jpg",
        activities: [
          "Morning flight to AlUla",
          "Canyon exploration and mapping",
          "Technical rock climbing on sandstone",
          "Via ferrata experience",
          "Evening equipment preparation",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Adventure desert lodge",
      },
      {
        day: 5,
        title: "AlUla Multi-Sport Adventure",
        description:
          "Full day of varied adventure activities including mountain biking through ancient landscapes, zip-lining, and adventure photography.",
        image: "https://365adventures.me/wp-content/uploads/2023/10/UTV-BUGGY-1-550x550.jpg",
        activities: [
          "Mountain biking through ancient trails",
          "High-speed zip-lining adventures",
          "Adventure photography workshop",
          "Night climbing with headlamps",
          "Equipment maintenance and preparation",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Adventure desert lodge",
      },
      {
        day: 6,
        title: "Travel to Abha - Mountain Adventures",
        description:
          "Journey to Abha in the Asir Mountains for high-altitude adventures including paragliding and mountain trekking preparation.",
        image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeSDV8GM5imc-QHaJf--bQCf7AmEEFxp6pm4ljjP0UPCgi0mFzuzyc9N5NTPqwvHBJsFcK4G36pOnv9jEFL8N2E52ejH6hfh3Xqus8MXXKWRiHhf9yxoOcMW2HBkhbL_aQA4XMaTYFQ4dGAVkYrnkwIEotM?key=bY5tKzyWx1aHPde27mCz5nRn",
        activities: [
          "Travel to Abha mountains",
          "Paragliding experience and training",
          "High-altitude acclimatization",
          "Mountain equipment preparation",
          "Local mountain culture exploration",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain adventure lodge",
      },
      {
        day: 7,
        title: "Jabal Sawda Summit & Extreme Sports",
        description:
          "Summit attempt of Saudi Arabia's highest peak followed by extreme sports activities including mountain biking and zip-lining.",
        image: "https://i0.wp.com/outqore.com/wp-content/uploads/2025/01/Jabal-Sawda-hiking-trail-in-saudi-arabia.jpg?resize=668%2C446&ssl=1",
        activities: [
          "Early morning summit attempt Jabal Sawda",
          "Technical mountain biking descent",
          "Extreme zip-lining through valleys",
          "Mountain rescue training",
          "Summit celebration dinner",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Mountain adventure lodge",
      },
      {
        day: 8,
        title: "Wadi Adventure & Canyoning",
        description:
          "Technical canyoning through spectacular wadis, including rappelling down waterfalls and swimming through natural pools.",
        image: "https://www.abouther.com/sites/default/files/2020/12/10/adventures_tourism_saudi_arabia.jpg",
        activities: [
          "Technical canyoning instruction",
          "Waterfall rappelling techniques",
          "Natural pool swimming and diving",
          "Wadi exploration and mapping",
          "Adventure camping setup",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Wadi adventure camp",
      },
      {
        day: 9,
        title: "Red Sea Diving Adventure",
        description:
          "Fly to the Red Sea coast for world-class scuba diving and water sports. Explore pristine coral reefs and marine life.",
        image: "https://images.ctfassets.net/vy53kjqs34an/7g17sXheOmruhnksOxYM7E/1f4ddc16b2a8bc5c8e02f77ab50b4003/red-sea-diving-adventure-carousal-1-resized.jpeg?fm=webp&w=600&h=600",
        activities: [
          "Flight to Red Sea coast",
          "Scuba diving certification/advanced training",
          "Coral reef exploration and diving",
          "Water sports and marine activities",
          "Underwater photography session",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Beachfront adventure resort",
      },
      {
        day: 10,
        title: "Final Adventure & Departure",
        description:
          "Morning water sports and final adventure activities. Celebration ceremony and departure transfers with unforgettable memories.",
        image: "https://cdn.britannica.com/14/189714-050-0A674D18/Kingdom-Centre-Riyadh-Saudi-Arabia.jpg",
        activities: [
          "Final water sports session",
          "Adventure completion ceremony",
          "Team celebration and awards",
          "Equipment return and packing",
          "Airport transfer and departure",
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
        question: "What fitness level is required for this ultimate adventure?",
        answer:
          "This tour requires a very high fitness level and previous adventure sports experience. Participants should be comfortable with heights, water activities, and physically demanding challenges. We recommend regular fitness training before the trip.",
      },
      {
        question: "Are all adventure activities suitable for beginners?",
        answer:
          "While we provide professional instruction, this is an advanced adventure tour. Some activities require previous experience or certification (like scuba diving). We offer training sessions, but basic fitness and adventure readiness are essential.",
      },
      {
        question: "What safety measures are in place for extreme activities?",
        answer:
          "We maintain the highest safety standards with certified guides, professional equipment, comprehensive insurance, and emergency protocols. All activities are conducted with safety briefings and proper supervision.",
      },
      {
        question: "Can activities be modified based on weather conditions?",
        answer:
          "Yes, we have alternative activities and flexible itineraries to ensure safety while maintaining the adventure experience. Weather-dependent activities may be rescheduled or substituted with equally exciting alternatives.",
      },
    ],
    reviewItems: [
      {
        id: 1,
        name: "Marcus Thompson",
        country: "Australia",
        avatar: "/images/avatar-1.png",
        rating: 5,
        date: "2 weeks ago",
        title: "Ultimate adrenaline rush!",
        text: "This was hands down the most intense and rewarding adventure I've ever experienced! The variety of activities, professional guides, and stunning locations made this trip absolutely unforgettable. Every day brought new challenges and incredible memories.",
      },
      {
        id: 2,
        name: "Sarah Mitchell",
        country: "Canada",
        avatar: "/images/avatar-2.png",
        rating: 5,
        date: "1 month ago",
        title: "Adventure of a lifetime",
        text: "From rock climbing at Edge of the World to diving in the Red Sea, this tour exceeded all expectations. The guides were incredibly skilled and safety-focused. Perfect for serious adventure seekers looking for the ultimate challenge!",
      },
    ],
    reviewStats: {
      overall: 4.8,
      count: 156,
      breakdown: { 5: 132, 4: 18, 3: 4, 2: 1, 1: 1 },
      categories: {
        value: 4.7,
        guide: 4.9,
        itinerary: 4.8,
        accommodation: 4.6,
        transportation: 4.7,
        adventure: 4.9,
      },
    },
    upcomingDates: [
      { date: "March 15, 2025", spotsLeft: 3, price: 2999 },
      { date: "April 12, 2025", spotsLeft: 5, price: 2999 },
      { date: "May 10, 2025", spotsLeft: 2, price: 3199 },
      { date: "June 7, 2025", spotsLeft: 6, price: 3199 },
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-red-50 to-orange-50">
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-red-700">{formatPrice(tour.price)}</div>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800">{tour.title}</h1>
              <div className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 fill-red-500 text-red-500" />
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
                <span>Max 8 adventurers</span>
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
              <h2 className="text-xl md:text-2xl font-bold text-white">Ultimate Multi-Sport Adventure</h2>
              <p className="text-sm md:text-base text-white/90">
                Extreme activities across Saudi Arabia's most spectacular landscapes
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
                  <h2 className="text-2xl font-bold mb-6 text-red-700">Ultimate Adventure Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <Card
                        key={day.day}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4">
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
                                  <h4 className="text-sm font-medium text-red-700 mb-2">Adventure Activities:</h4>
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
                                    <h4 className="text-sm font-medium text-red-700 mb-1">Meals Included:</h4>
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
                                      <h4 className="text-sm font-medium text-red-700 mb-1">Accommodation:</h4>
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
                  <h2 className="text-2xl font-bold mb-4 text-red-700">Ultimate Adventure Overview</h2>
                  <p className="text-lg mb-6">{tour.description}</p>

                  <div className="my-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl"></div>
                    <div className="relative p-6">
                      <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-500" /> Adventure Highlights
                      </h3>
                      <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                            <Check className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-red-700">Upcoming Adventure Departures</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-red-50">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-medium text-red-700">Departure Date</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-red-700">Price</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-red-700">Availability</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-red-700"></th>
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
                                className="text-red-700 border-red-700 hover:bg-red-50 bg-transparent"
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
                  <h2 className="text-2xl font-bold mb-6 text-red-700">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-700">
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
                  <h2 className="text-2xl font-bold mb-6 text-red-700">Ultimate Adventure Route</h2>
                  <p className="mb-6 text-muted-foreground">
                    Follow the ultimate adventure route of our {tour.title} tour, covering extreme activities across
                    Saudi Arabia's most spectacular landscapes.
                  </p>
                  <div className="bg-red-50 p-8 rounded-lg text-center">
                    <MapIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Adventure Map Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're developing an interactive map showcasing your ultimate adventure journey through Saudi
                      Arabia's most extreme locations.
                    </p>
                  </div>
                  <div className="mt-6 bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Adventure Route</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Riyadh: Edge of the World rock climbing</li>
                      <li>Desert: Extreme sandboarding and trekking</li>
                      <li>AlUla: Canyon exploration and technical climbing</li>
                      <li>Asir Mountains: Peak climbing and paragliding</li>
                      <li>Red Sea: Scuba diving and water sports</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 text-red-700">Ultimate Adventure Reviews</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                            <div className="text-5xl font-bold text-red-600">{tour.reviewStats.overall}</div>
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
                            <div className="text-lg font-medium text-red-700">Outstanding</div>
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
                            <h4 className="font-bold text-lg mb-2 text-red-700">{review.title}</h4>
                            <p className="mb-4">{review.text}</p>
                            <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
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
                  <h2 className="text-2xl font-bold mb-6 text-red-700">Frequently Asked Questions</h2>
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
                  <div className="mt-8 bg-red-50 p-6 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Adventure Specialists</h3>
                    <p className="text-muted-foreground mb-4">
                      Our adventure specialists are here to help you prepare for the ultimate challenge. Contact us for
                      detailed adventure requirements and training recommendations.
                    </p>
                    <BubbleButton variant="outline" className="w-full">
                      <Link href="/contact">Contact Adventure Team</Link>
                    </BubbleButton>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8 mt-12">
            {/* Booking Form Section */}
            <div id="booking-form" className="w-full">
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-red-50 via-orange-50 to-red-100 py-16">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-red-600 mb-4">Ready to Book Your Ultimate Adventure?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Secure your spot on this incredible adventure journey with our easy 3-step booking process
                    </p>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <BookingForm tourTitle={tour.title} tourPrice={tour.price} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <Clock className="h-8 w-8 text-red-500" />
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
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                <h3 className="font-bold text-2xl">Why Book With Us</h3>
                <p className="text-white/80 text-lg">Your trusted adventure partner</p>
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
                      <h4 className="font-semibold mb-1">Professional Equipment</h4>
                      <p className="text-muted-foreground text-sm">Top-quality adventure gear included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Guides</h4>
                      <p className="text-muted-foreground text-sm">Certified adventure professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Small Groups</h4>
                      <p className="text-muted-foreground text-sm">Maximum 8 adventurers per group</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Us Section */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                <h3 className="font-bold text-2xl">Need Help?</h3>
                <p className="text-white/80 text-lg">We're here to assist you</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 bg-red-50 p-6 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Call us</div>
                      <a href="tel:+966123456789" className="font-semibold text-lg hover:underline text-red-600">
                        +966 12 345 6789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-red-50 p-6 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Email us</div>
                      <a
                        href="mailto:adventure@saudiexplorer.com"
                        className="font-semibold text-lg hover:underline text-red-600"
                      >
                        adventure@saudiexplorer.com
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
