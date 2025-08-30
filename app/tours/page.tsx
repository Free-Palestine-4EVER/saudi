"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Star, Clock, Users, Mountain, Heart, Share2, CheckCircle } from "lucide-react"

// Tour data with comprehensive information
const tours = [
  {
    id: "saudi-5d-history-culture",
    title: "Saudi Arabia 5 Days - History & Culture",
    slug: "saudi-5d-history-culture",
    category: "History & Culture",
    duration: 5,
    difficulty: "Easy",
    groupSize: "2-15",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviewCount: 127,
    image: "/images/saudi-heritage-journey.png",
    description:
      "Immerse yourself in Saudi Arabia's rich history and vibrant culture. Visit UNESCO World Heritage sites, explore ancient ruins, and experience traditional Saudi hospitality.",
    highlights: [
      "UNESCO World Heritage Sites",
      "Traditional Saudi Culture",
      "Historic Diriyah",
      "Local Cuisine Experience",
      "Expert Cultural Guide",
    ],
    sampleReview: {
      author: "Sarah Johnson",
      rating: 5,
      text: "An incredible journey through Saudi history! The guide was knowledgeable and the sites were breathtaking.",
    },
    features: ["Free Cancellation", "Instant Confirmation", "Small Groups"],
  },
  {
    id: "saudi-5d-adventure-hiking",
    title: "Saudi Arabia 5 Days - Adventure & Hiking",
    slug: "saudi-5d-adventure-hiking",
    category: "Adventure & Hiking",
    duration: 5,
    difficulty: "Moderate",
    groupSize: "4-12",
    price: 1399,
    originalPrice: 1599,
    rating: 4.7,
    reviewCount: 89,
    image: "/images/desert-mountains.png",
    description:
      "Experience the thrill of Saudi Arabia's diverse landscapes. From desert adventures to mountain hiking, this tour offers the perfect blend of excitement and natural beauty.",
    highlights: [
      "Desert Camping Experience",
      "Mountain Hiking Trails",
      "Rock Climbing Activities",
      "Stargazing Sessions",
      "Adventure Photography",
    ],
    sampleReview: {
      author: "Mike Chen",
      rating: 5,
      text: "Perfect for adventure lovers! The hiking trails were challenging but rewarding with stunning views.",
    },
    features: ["Free Cancellation", "Equipment Included", "Expert Guides"],
  },
  {
    id: "saudi-5d-mixed-explorer",
    title: "Saudi Arabia 5 Days - Mixed Explorer",
    slug: "saudi-5d-mixed-explorer",
    category: "Mixed Explorer",
    duration: 5,
    difficulty: "Easy",
    groupSize: "2-16",
    price: 1349,
    originalPrice: 1549,
    rating: 4.8,
    reviewCount: 156,
    image: "/images/alula-hegra-explorer.png",
    description:
      "The perfect introduction to Saudi Arabia combining cultural heritage with outdoor adventures. Ideal for first-time visitors wanting to experience it all.",
    highlights: [
      "AlUla Archaeological Sites",
      "Desert Safari Experience",
      "Cultural Workshops",
      "Traditional Markets",
      "Scenic Landscapes",
    ],
    sampleReview: {
      author: "Emma Wilson",
      rating: 5,
      text: "Best of both worlds! Great mix of culture and adventure. Highly recommend for first-time visitors.",
    },
    features: ["Free Cancellation", "All-Inclusive", "Photography Tours"],
  },
  {
    id: "saudi-7d-history-culture",
    title: "Saudi Arabia 7 Days - History & Culture",
    slug: "saudi-7d-history-culture",
    category: "History & Culture",
    duration: 7,
    difficulty: "Easy",
    groupSize: "2-15",
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    reviewCount: 203,
    image: "https://www.leaders-mena.com/leaders/uploads/2024/01/1686470249536.jpg",
    description:
      "Dive deeper into Saudi Arabia's fascinating history and rich cultural heritage. This extended tour covers more UNESCO sites and cultural experiences.",
    highlights: [
      "Extended UNESCO Tour",
      "Traditional Craft Workshops",
      "Historical Museums",
      "Cultural Performances",
      "Local Family Visits",
    ],
    sampleReview: {
      author: "David Rodriguez",
      rating: 5,
      text: "Comprehensive cultural experience! Seven days allowed us to really understand Saudi heritage.",
    },
    features: ["Free Cancellation", "Cultural Immersion", "Expert Historians"],
  },
  {
    id: "saudi-7d-adventure-hiking",
    title: "Saudi Arabia 7 Days - Adventure & Hiking",
    slug: "saudi-7d-adventure-hiking",
    category: "Adventure & Hiking",
    duration: 7,
    difficulty: "Challenging",
    groupSize: "4-10",
    price: 1999,
    originalPrice: 2299,
    rating: 4.8,
    reviewCount: 134,
    image: "https://www.arabianbusiness.com/wp-content/uploads/sites/3/cloud/2022/12/06/Red-Sea-Grand-Hyatt.jpg",
    description:
      "For serious adventurers seeking the ultimate Saudi Arabia outdoor experience. Challenging hikes, extreme sports, and unforgettable wilderness encounters.",
    highlights: [
      "Multi-day Hiking Expeditions",
      "Rock Climbing & Rappelling",
      "Desert Survival Skills",
      "Wildlife Photography",
      "Extreme Sports Activities",
    ],
    sampleReview: {
      author: "Lisa Thompson",
      rating: 5,
      text: "Challenging but absolutely worth it! The guides were professional and safety was top priority.",
    },
    features: ["Free Cancellation", "Professional Equipment", "Safety Certified"],
  },
  {
    id: "saudi-7d-mixed-explorer",
    title: "Saudi Arabia 7 Days - Mixed Explorer",
    slug: "saudi-7d-mixed-explorer",
    category: "Mixed Explorer",
    duration: 7,
    difficulty: "Moderate",
    groupSize: "2-14",
    price: 1949,
    originalPrice: 2249,
    rating: 4.9,
    reviewCount: 178,
    image: "/images/saudi-heritage-journey.png",
    description:
      "The ultimate balanced Saudi Arabia experience. Perfect combination of cultural immersion and outdoor adventures over seven memorable days.",
    highlights: [
      "Balanced Culture & Adventure",
      "Multiple Regions Covered",
      "Diverse Activities",
      "Flexible Itinerary",
      "Photography Opportunities",
    ],
    sampleReview: {
      author: "James Park",
      rating: 5,
      text: "Perfect balance! Something for everyone in our group. Great variety of activities and experiences.",
    },
    features: ["Free Cancellation", "Flexible Options", "All Skill Levels"],
  },
  {
    id: "saudi-10d-full-heritage",
    title: "Saudi Arabia 10 Days - Full Heritage Journey",
    slug: "saudi-10d-full-heritage-journey",
    category: "History & Culture",
    duration: 10,
    difficulty: "Easy",
    groupSize: "2-12",
    price: 2799,
    originalPrice: 3199,
    rating: 4.9,
    reviewCount: 95,
    image: "/images/alula-hegra-explorer.png",
    description:
      "The most comprehensive cultural journey through Saudi Arabia. Explore every major historical site and immerse yourself completely in Saudi heritage.",
    highlights: [
      "Complete Heritage Circuit",
      "All UNESCO Sites",
      "Archaeological Expeditions",
      "Cultural Masterclasses",
      "VIP Access Tours",
    ],
    sampleReview: {
      author: "Maria Garcia",
      rating: 5,
      text: "The ultimate cultural experience! Ten days of pure historical immersion. Unforgettable!",
    },
    features: ["Free Cancellation", "VIP Access", "Cultural Experts"],
  },
  {
    id: "saudi-10d-ultimate-adventure",
    title: "Saudi Arabia 10 Days - Ultimate Adventure",
    slug: "saudi-10d-ultimate-adventure",
    category: "Adventure & Hiking",
    duration: 10,
    difficulty: "Expert",
    groupSize: "4-8",
    price: 2899,
    originalPrice: 3299,
    rating: 4.8,
    reviewCount: 67,
    image: "/images/desert-mountains.png",
    description:
      "For extreme adventure enthusiasts only. The most challenging and comprehensive outdoor experience Saudi Arabia has to offer.",
    highlights: [
      "Extreme Adventure Activities",
      "Multi-terrain Expeditions",
      "Survival Challenges",
      "Professional Training",
      "Exclusive Access Areas",
    ],
    sampleReview: {
      author: "Alex Turner",
      rating: 5,
      text: "Incredible adventure! Pushed my limits and exceeded all expectations. Professional guides throughout.",
    },
    features: ["Free Cancellation", "Expert Level", "Premium Equipment"],
  },
  {
    id: "saudi-10d-complete-experience",
    title: "Saudi Arabia 10 Days - Complete Experience",
    slug: "saudi-10d-complete-experience",
    category: "Mixed Explorer",
    duration: 10,
    difficulty: "Moderate",
    groupSize: "2-12",
    price: 2849,
    originalPrice: 3249,
    rating: 4.9,
    reviewCount: 142,
    image: "https://www.arabianbusiness.com/wp-content/uploads/sites/3/cloud/2022/12/06/Red-Sea-Grand-Hyatt.jpg",
    description:
      "The ultimate Saudi Arabia experience combining everything - culture, adventure, luxury, and authentic local experiences in one comprehensive journey.",
    highlights: [
      "Complete Saudi Experience",
      "Luxury & Adventure Combined",
      "Cultural & Natural Wonders",
      "Exclusive Experiences",
      "Personalized Service",
    ],
    sampleReview: {
      author: "Sophie Brown",
      rating: 5,
      text: "The perfect Saudi Arabia experience! Everything was included and exceeded our expectations.",
    },
    features: ["Free Cancellation", "All-Inclusive", "Luxury Service"],
  },
]

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [priceRange, setPriceRange] = useState([1000, 3500])

  // Filter tours based on search criteria
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory
      const matchesDuration = selectedDuration === "all" || tour.duration.toString() === selectedDuration
      const matchesDifficulty = selectedDifficulty === "all" || tour.difficulty === selectedDifficulty
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesDuration && matchesDifficulty && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedDuration, selectedDifficulty, priceRange])

  const categories = ["History & Culture", "Adventure & Hiking", "Mixed Explorer"]
  const durations = ["5", "7", "10"]
  const difficulties = ["Easy", "Moderate", "Challenging", "Expert"]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Saudi Arabia Tours</h1>
            <p className="text-xl opacity-90">Discover the Kingdom's hidden treasures with our expert-guided tours</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Duration Filter */}
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  {durations.map((duration) => (
                    <SelectItem key={duration} value={duration}>
                      {duration} Days
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Difficulty Filter */}
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={3500}
                  min={1000}
                  step={100}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTours.length} of {tours.length} tours
          </p>
        </div>

        {/* Tours Grid */}
        <div className="space-y-6">
          {filteredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                {/* Tour Image */}
                <div className="relative md:w-80 h-64 md:h-auto">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {tour.originalPrice > tour.price && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-red-500 text-white">Save ${tour.originalPrice - tour.price}</Badge>
                    </div>
                  )}
                </div>

                {/* Tour Content */}
                <CardContent className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 hover:text-amber-600 transition-colors">
                        <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tour.duration} days
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {tour.groupSize} people
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="h-4 w-4" />
                          {tour.difficulty}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tour.rating}</span>
                        <span className="text-sm text-gray-600">({tour.reviewCount})</span>
                      </div>
                      <div className="text-right">
                        {tour.originalPrice > tour.price && (
                          <div className="text-sm text-gray-500 line-through">${tour.originalPrice}</div>
                        )}
                        <div className="text-2xl font-bold text-amber-600">${tour.price}</div>
                        <div className="text-sm text-gray-600">per person</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {tour.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{tour.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Sample Review */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(tour.sampleReview.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{tour.sampleReview.author}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{tour.sampleReview.text}"</p>
                  </div>

                  {/* Features and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {tour.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href={`/tours/${tour.slug}`}>View Details</Link>
                      </Button>
                      <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                        <Link href={`/tours/${tour.slug}#booking`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No tours found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all tours</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedDuration("all")
                setSelectedDifficulty("all")
                setPriceRange([1000, 3500])
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
