"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, Mountain, Compass, Tent, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCurrency } from "@/contexts/currency-context"
import { formatPrice } from "@/utils/currency"

export default function AdventurePackagesPage() {
  const { currency } = useCurrency()

  const adventurePackages = [
    {
      id: "empty-quarter-expedition",
      title: "Empty Quarter Expedition",
      description:
        "Venture into the world's largest continuous sand desert, the Rub' al Khali, for an unforgettable desert adventure.",
      duration: 7,
      price: 2199,
      originalPrice: 2599,
      image: "/images/empty-quarter.jpg",
      rating: 4.9,
      reviews: 34,
      difficulty: "Challenging",
      highlights: [
        "Rub' al Khali desert crossing",
        "Camel trekking expeditions",
        "Bedouin cultural immersion",
        "Desert survival skills",
        "Astronomical observations",
      ],
      activities: [
        "4WD desert navigation",
        "Sand dune climbing",
        "Traditional camping",
        "Wildlife tracking",
        "Photography workshops",
      ],
    },
    {
      id: "asir-mountains-trek",
      title: "Asir Mountains Trek",
      description:
        "Explore Saudi Arabia's green highlands with challenging hikes through terraced villages and cloud forests.",
      duration: 8,
      price: 1899,
      originalPrice: 2199,
      image: "/images/asir-trek.jpg",
      rating: 4.8,
      reviews: 42,
      difficulty: "Moderate to Challenging",
      highlights: [
        "Jabal Sawda peak ascent",
        "Traditional mountain villages",
        "Terraced agriculture tours",
        "Cloud forest exploration",
        "Cultural homestays",
      ],
      activities: ["Mountain hiking", "Rock climbing", "Village trekking", "Cultural workshops", "Nature photography"],
    },
    {
      id: "red-sea-diving-expedition",
      title: "Red Sea Diving Expedition",
      description:
        "Dive into the pristine waters of the Red Sea and explore some of the world's most spectacular coral reefs.",
      duration: 6,
      price: 1699,
      originalPrice: 1999,
      image: "/images/red-sea-diving.jpg",
      rating: 4.9,
      reviews: 56,
      difficulty: "Moderate",
      highlights: [
        "Pristine coral reefs",
        "Diverse marine life",
        "Underwater photography",
        "Night diving experiences",
        "Marine conservation",
      ],
      activities: ["Scuba diving", "Snorkeling", "Underwater photography", "Marine biology tours", "Beach camping"],
    },
    {
      id: "edge-of-world-adventure",
      title: "Edge of the World Adventure",
      description:
        "Experience the dramatic cliffs and endless desert views at one of Saudi Arabia's most spectacular natural wonders.",
      duration: 4,
      price: 899,
      originalPrice: 1099,
      image: "/images/edge-world-adventure.jpg",
      rating: 4.7,
      reviews: 67,
      difficulty: "Easy to Moderate",
      highlights: [
        "Tuwaiq Escarpment cliffs",
        "Panoramic desert views",
        "Geological formations",
        "Sunset/sunrise viewing",
        "Desert camping",
      ],
      activities: ["Cliff hiking", "Rock climbing", "Photography", "Stargazing", "Desert exploration"],
    },
    {
      id: "northern-borders-expedition",
      title: "Northern Borders Expedition",
      description:
        "Explore Saudi Arabia's remote northern regions with ancient rock art, archaeological sites, and vast desert landscapes.",
      duration: 9,
      price: 2399,
      originalPrice: 2799,
      image: "/images/northern-expedition.jpg",
      rating: 4.6,
      reviews: 23,
      difficulty: "Challenging",
      highlights: [
        "Ancient rock art sites",
        "Archaeological discoveries",
        "Remote desert regions",
        "Bedouin encounters",
        "Fossil hunting",
      ],
      activities: [
        "Archaeological exploration",
        "Desert trekking",
        "Rock art documentation",
        "Fossil hunting",
        "Cultural immersion",
      ],
    },
    {
      id: "multi-activity-adventure",
      title: "Multi-Activity Adventure",
      description:
        "The ultimate Saudi adventure combining desert, mountains, and sea activities in one comprehensive expedition.",
      duration: 12,
      price: 3299,
      originalPrice: 3799,
      image: "/images/multi-adventure.jpg",
      rating: 4.8,
      reviews: 38,
      difficulty: "Moderate to Challenging",
      highlights: [
        "Desert, mountain, and sea",
        "Multiple adventure activities",
        "Diverse landscapes",
        "Cultural experiences",
        "Professional guides",
      ],
      activities: ["Desert expeditions", "Mountain trekking", "Scuba diving", "Rock climbing", "Cultural tours"],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy to Moderate":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Moderate to Challenging":
        return "bg-orange-100 text-orange-800"
      case "Challenging":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        <div className="absolute inset-0">
          <Image
            src="/images/adventure-hero.jpg"
            alt="Adventure Saudi Arabia"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="h-8 w-8 text-green-400" />
                <Badge className="bg-green-400 text-green-900 hover:bg-green-500">Adventure Collection</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Adventure Saudi Arabia</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover Saudi Arabia's wild side with our collection of adventure tours. From the vast Empty Quarter to
                the green mountains of Asir, experience the Kingdom's most thrilling landscapes and activities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Compass className="h-5 w-5 mr-2" />
                  Explore Adventures
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
                >
                  Plan Custom Adventure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Adventure Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Adventure Tours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional guides, safety equipment, and carefully planned itineraries ensure your adventure is both
              thrilling and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mountain,
                title: "Expert Guides",
                description: "Professional adventure guides with local expertise",
              },
              {
                icon: Compass,
                title: "Safety First",
                description: "Top-quality equipment and comprehensive safety protocols",
              },
              {
                icon: Tent,
                title: "Authentic Camping",
                description: "Experience traditional desert and mountain camping",
              },
              {
                icon: Camera,
                title: "Photo Opportunities",
                description: "Capture stunning landscapes and wildlife moments",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-green-200 hover:border-green-400 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Adventure Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Adventure Tour Packages</h2>
            <p className="text-xl text-muted-foreground">Thrilling expeditions for every adventure level</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {adventurePackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-600 text-white">
                      <Mountain className="h-3 w-3 mr-1" />
                      Adventure
                    </Badge>
                    <Badge className={getDifficultyColor(pkg.difficulty)}>{pkg.difficulty}</Badge>
                  </div>
                  {pkg.originalPrice > pkg.price && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">
                        Save {formatPrice(pkg.originalPrice - pkg.price, currency)}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-green-400 text-green-400" />
                      <span className="font-medium">{pkg.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({pkg.reviews} reviews)</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration} Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Max 12 people</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Adventure Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Compass className="h-3 w-3 text-green-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-green-600">{formatPrice(pkg.price, currency)}</span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-lg text-muted-foreground line-through">
                            {formatPrice(pkg.originalPrice, currency)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href={`/packages/adventure/${pkg.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What to Expect on Your Adventure</h2>
            <p className="text-xl text-muted-foreground">
              Every adventure is carefully planned with your safety and enjoyment in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Equipment",
                description: "High-quality gear provided for all activities",
                items: ["Camping equipment", "Safety gear", "Navigation tools"],
              },
              {
                title: "Expert Leadership",
                description: "Experienced guides with wilderness training",
                items: ["First aid certified", "Local knowledge", "Adventure expertise"],
              },
              {
                title: "Small Groups",
                description: "Intimate group sizes for personalized experience",
                items: ["Max 12 participants", "Personal attention", "Flexible itineraries"],
              },
            ].map((section, index) => (
              <Card key={index} className="bg-white border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <Mountain className="h-3 w-3 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Saudi Adventure?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our adventure specialists are ready to help you plan the perfect expedition. Contact us to discuss your
            adventure goals and fitness level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Mountain className="h-5 w-5 mr-2" />
              Contact Adventure Specialist
            </Button>
            <Button size="lg" variant="outline">
              Download Adventure Guide
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
