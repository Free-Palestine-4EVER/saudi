"use client"

import {
  ChevronRight,
  Check,
  Clock,
  Info,
  Shield,
  Star,
  Phone,
  Mail,
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
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

// Dynamically import the TourMapPreview component with no SSR
const TourMapPreview = dynamic(() => import("@/components/tour-map-preview"), {
  ssr: false,
})

import { getTourBySlug } from "@/data/saudi-tours"
import { notFound } from "next/navigation"

interface TourPageProps {
  params: {
    slug: string
  }
}

// Define types for our data structures
interface Review {
  id: number
  name: string
  country: string
  avatar: string
  rating: number
  date: string
  title: string
  text: string
}

interface ReviewStats {
  overall: number
  count: number
  breakdown: {
    [key: number]: number
  }
  categories: {
    [key: string]: number
  }
}

interface WeatherInfo {
  months: string
  temperature: string
  description: string
  recommendation: string
}

interface TourData {
  title: string
  slug: string
  duration: number
  price: number
  rating: number
  reviews: number
  description: string
  highlights: string[]
  includes: string[]
  excludes: string[]
  itinerary: {
    day: number
    title: string
    description: string
    image: string
    activities: string[]
    meals: string[]
    accommodation: string
  }[]
  images: string[]
  gallery: {
    src: string
    alt: string
    caption: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  weatherInfo: {
    spring: WeatherInfo
    summer: WeatherInfo
    autumn: WeatherInfo
    winter: WeatherInfo
  }
  reviewItems: Review[]
  reviewStats: ReviewStats
  upcomingDates: {
    date: string
    spotsLeft: number
    price: number
  }[]
}

export default function TourPage({ params }: TourPageProps) {
  const tour = getTourBySlug(params.slug)

  if (!tour) {
    notFound()
  }

  const tourData: TourData = {
    title: tour.title,
    slug: tour.slug,
    duration: tour.duration,
    price: tour.price,
    rating: tour.rating,
    reviews: tour.reviewCount || 0,
    description: tour.longDescription || tour.description,
    highlights: tour.highlights || [],
    includes: tour.included || [],
    excludes: tour.excluded || [],
    itinerary:
      tour.itinerary?.map((item) => ({
        day: item.day,
        title: item.title,
        description: item.description,
        image: `/images/day-${item.day}.png`,
        activities: item.activities || [],
        meals: item.meals || [],
        accommodation: item.accommodation || "Standard accommodation",
      })) || [],
    images: tour.gallery || [tour.image],
    gallery: (tour.gallery || [tour.image]).map((src, index) => ({
      src,
      alt: `${tour.title} - Image ${index + 1}`,
      caption: `Experience ${tour.title}`,
    })),
    faqs: tour.faqs || [
      {
        question: "What is the group size for this tour?",
        answer: "Our tours typically accommodate 8-12 travelers to ensure a personalized experience.",
      },
      {
        question: "What is included in the tour price?",
        answer:
          "The tour includes accommodation, transportation, guided tours, and most meals as specified in the itinerary.",
      },
      {
        question: "What should I pack for this tour?",
        answer:
          "We recommend comfortable walking shoes, weather-appropriate clothing, sunscreen, and a camera. A detailed packing list will be provided upon booking.",
      },
    ],
    weatherInfo: tour.weatherInfo || {
      spring: {
        months: "March - May",
        temperature: "20-28°C",
        description: "Pleasant temperatures with mild weather",
        recommendation: "Ideal for outdoor activities",
      },
      summer: {
        months: "June - August",
        temperature: "30-40°C",
        description: "Hot and dry weather",
        recommendation: "Early morning and evening activities recommended",
      },
      autumn: {
        months: "September - November",
        temperature: "22-30°C",
        description: "Comfortable temperatures return",
        recommendation: "Perfect weather for sightseeing",
      },
      winter: {
        months: "December - February",
        temperature: "15-25°C",
        description: "Mild and pleasant weather",
        recommendation: "Great time to visit",
      },
    },
    reviewItems: tour.reviewItems || [
      {
        id: 1,
        name: "Sarah Johnson",
        country: "United States",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "2 weeks ago",
        title: "Amazing Experience!",
        text: "This tour exceeded all my expectations. The guides were knowledgeable and the sites were breathtaking.",
      },
      {
        id: 2,
        name: "Ahmed Al-Rashid",
        country: "UAE",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "1 month ago",
        title: "Highly Recommended",
        text: "Perfect organization and incredible destinations. Would definitely book again!",
      },
    ],
    reviewStats: tour.reviewStats || {
      overall: tour.rating,
      count: tour.reviewCount || 0,
      breakdown: {
        5: Math.floor((tour.reviewCount || 0) * 0.7),
        4: Math.floor((tour.reviewCount || 0) * 0.2),
        3: Math.floor((tour.reviewCount || 0) * 0.08),
        2: Math.floor((tour.reviewCount || 0) * 0.02),
        1: 0,
      },
      categories: {
        guide: tour.rating,
        value: tour.rating - 0.1,
        organization: tour.rating + 0.1,
        accommodation: tour.rating - 0.2,
        transportation: tour.rating,
      },
    },
    upcomingDates: tour.upcomingDates || [
      {
        date: "March 15, 2024",
        spotsLeft: 5,
        price: tour.price,
      },
      {
        date: "April 12, 2024",
        spotsLeft: 3,
        price: tour.price,
      },
      {
        date: "May 20, 2024",
        spotsLeft: 8,
        price: tour.price,
      },
    ],
  }

  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("itinerary")
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const { formatPrice } = useCurrency()

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [imageKey]: true,
    }))
  }

  // Calculate review percentage for progress bars
  const calculateReviewPercentage = (rating: number) => {
    const count = tourData.reviewStats.breakdown[rating] || 0
    return (count / tourData.reviewStats.count) * 100
  }

  // Handle gallery navigation
  const nextGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev === tourData.gallery.length - 1 ? 0 : prev + 1))
  }

  const prevGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev === 0 ? tourData.gallery.length - 1 : prev - 1))
  }

  // Scroll to booking form
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-form")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track when user has scrolled past the hero section
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden" id="tour-hero">
        <div className="absolute inset-0">
          <img
            src={tourData.images[0] || "/placeholder.svg"}
            alt={tourData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-16">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {tourData.duration} Days
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{tourData.rating}</span>
                <span className="text-white/80">({tourData.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">{tourData.title}</h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">{tourData.description}</p>
            <div className="flex items-center gap-6">
              <div className="text-3xl font-bold">
                {formatPrice(tourData.price)}
                <span className="text-lg font-normal text-white/80 ml-2">per person</span>
              </div>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA button */}
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-lg md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-orange-600">{formatPrice(tourData.price)}</div>
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
              <ChevronRight className="h-4 w-4" />
              <Link href="/tours" className="hover:underline">
                Tours
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{tourData.title}</span>
            </div>

            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="itinerary">
                  <CalendarDays className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="overview">
                  <Info className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="inclusions">
                  <Check className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="reviews">
                  <Star className="h-5 w-5" />
                </TabsTrigger>
              </TabsList>

              {/* Itinerary Tab */}
              <TabsContent value="itinerary">
                <div className="space-y-6">
                  {tourData.itinerary.map((day) => (
                    <Card key={day.day} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
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
                            <div
                              className={`absolute inset-0 animate-pulse bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 bg-[length:400%_100%] ${loadedImages[`day-${day.day}`] ? "hidden" : "block"}`}
                            />
                            <Image
                              src={day.image || "/placeholder.svg?height=300&width=400&query=jordan landscape"}
                              alt={day.title}
                              fill
                              className={`object-cover ${loadedImages[`day-${day.day}`] ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                              onLoad={() => handleImageLoad(`day-${day.day}`)}
                              loading="lazy"
                            />
                          </div>
                          <div className="p-4 md:w-2/3">
                            <p className="mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <div>
                                <h4 className="text-sm font-medium text-orange-600 mb-2">Today's Activities:</h4>
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
                                  <h4 className="text-sm font-medium text-orange-600 mb-1">Meals Included:</h4>
                                  <div className="flex gap-2">
                                    {day.meals.map((meal, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {meal}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium text-orange-600 mb-1">Accommodation:</h4>
                                  <p className="text-sm">{day.accommodation}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-orange-600">
                      About the Tour
                    </h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">{tourData.description}</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-orange-600">
                      Highlights
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                      {tourData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-orange-600">
                      Good to Know
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(tourData.weatherInfo).map(([season, info]) => (
                        <div key={season} className="border rounded-lg shadow-sm overflow-hidden">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3">
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
                              <CalendarDays className="h-4 w-4 text-sky-500" />
                              <span className="text-sm font-medium">{info.recommendation}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Inclusions Tab */}
              <TabsContent value="inclusions">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-600">
                      <Check className="h-5 w-5 text-primary" />
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {tourData.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 bg-white p-2 rounded-lg shadow-sm">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
                      {tourData.excludes.map((item, index) => (
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
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-center bg-white p-4 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md">
                          <div className="text-5xl font-bold text-orange-600">{tourData.reviewStats.overall}</div>
                          <div className="text-sm text-muted-foreground">out of 5</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-6 w-6 ${i < Math.floor(tourData.reviewStats.overall) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                          </div>
                          <div className="text-lg font-medium text-orange-600">Exceptional</div>
                          <div className="text-sm text-muted-foreground">
                            Based on {tourData.reviewStats.count} verified reviews
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-2">
                            <div className="w-12 text-sm text-right">{rating} stars</div>
                            <Progress value={calculateReviewPercentage(rating)} className="h-2" />
                            <div className="text-sm text-muted-foreground w-12">
                              {tourData.reviewStats.breakdown[rating] || 0}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl p-6">
                      <h3 className="font-medium mb-4">Rating Categories</h3>
                      <div className="space-y-3">
                        {Object.entries(tourData.reviewStats.categories).map(([category, rating]) => (
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
                              <span className="text-sm font-medium">{Number(rating).toFixed(1)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sample reviews */}
                  <div className="space-y-6">
                    {tourData.reviewItems.map((review) => (
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
                          <h4 className="font-bold text-lg mb-2 text-orange-600">{review.title}</h4>
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

                {/* Review submission form */}
                <ReviewForm />
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
                    <BookingForm tourTitle={tourData.title} tourPrice={tourData.price} />
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
    </div>
  )
}
