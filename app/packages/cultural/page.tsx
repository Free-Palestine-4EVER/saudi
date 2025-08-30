"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, BookOpen, Palette, Music, Coffee } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCurrency } from "@/contexts/currency-context"
import { formatPrice } from "@/utils/currency"

export default function CulturalPackagesPage() {
  const { currency } = useCurrency()

  const culturalPackages = [
    {
      id: "heritage-immersion-tour",
      title: "Heritage Immersion Tour",
      description:
        "Deep dive into Saudi Arabia's rich cultural heritage with visits to UNESCO sites, traditional crafts, and cultural performances.",
      duration: 10,
      price: 2299,
      originalPrice: 2699,
      image: "/images/heritage-immersion.jpg",
      rating: 4.9,
      reviews: 67,
      culturalFocus: "Historical Heritage",
      highlights: [
        "UNESCO World Heritage sites",
        "Traditional craft workshops",
        "Cultural performances",
        "Historical storytelling",
        "Authentic cuisine experiences",
      ],
      experiences: [
        "Pottery making workshops",
        "Traditional weaving",
        "Calligraphy classes",
        "Folk music performances",
        "Historical reenactments",
      ],
    },
    {
      id: "bedouin-culture-experience",
      title: "Bedouin Culture Experience",
      description:
        "Authentic immersion into traditional Bedouin life with desert camping, camel herding, and traditional storytelling.",
      duration: 7,
      price: 1899,
      originalPrice: 2199,
      image: "/images/bedouin-culture.jpg",
      rating: 4.8,
      reviews: 54,
      culturalFocus: "Bedouin Traditions",
      highlights: [
        "Traditional Bedouin camps",
        "Camel herding experience",
        "Desert survival skills",
        "Storytelling under stars",
        "Traditional Bedouin cuisine",
      ],
      experiences: [
        "Tent weaving workshops",
        "Traditional cooking",
        "Desert navigation",
        "Falconry demonstrations",
        "Poetry recitations",
      ],
    },
    {
      id: "arts-crafts-journey",
      title: "Arts & Crafts Journey",
      description:
        "Explore Saudi Arabia's artistic heritage through hands-on workshops with master craftsmen and visits to art galleries.",
      duration: 8,
      price: 1799,
      originalPrice: 2099,
      image: "/images/arts-crafts.jpg",
      rating: 4.7,
      reviews: 43,
      culturalFocus: "Traditional Arts",
      highlights: [
        "Master craftsman workshops",
        "Traditional art galleries",
        "Handicraft markets",
        "Textile weaving",
        "Jewelry making",
      ],
      experiences: [
        "Carpet weaving",
        "Metalwork crafting",
        "Traditional painting",
        "Embroidery workshops",
        "Ceramic pottery",
      ],
    },
    {
      id: "culinary-cultural-tour",
      title: "Culinary Cultural Tour",
      description:
        "Discover Saudi Arabia through its flavors with cooking classes, spice market visits, and traditional dining experiences.",
      duration: 6,
      price: 1599,
      originalPrice: 1899,
      image: "/images/culinary-culture.jpg",
      rating: 4.9,
      reviews: 78,
      culturalFocus: "Culinary Heritage",
      highlights: [
        "Traditional cooking classes",
        "Spice market tours",
        "Family dining experiences",
        "Regional cuisine tasting",
        "Coffee ceremony participation",
      ],
      experiences: [
        "Bread making workshops",
        "Spice blending classes",
        "Traditional coffee roasting",
        "Date preparation",
        "Regional specialties",
      ],
    },
    {
      id: "music-poetry-culture",
      title: "Music & Poetry Culture",
      description:
        "Experience Saudi Arabia's rich musical and poetic traditions through performances, workshops, and cultural gatherings.",
      duration: 5,
      price: 1399,
      originalPrice: 1699,
      image: "/images/music-poetry.jpg",
      rating: 4.6,
      reviews: 32,
      culturalFocus: "Musical Heritage",
      highlights: [
        "Traditional music performances",
        "Poetry recitation sessions",
        "Instrument making workshops",
        "Cultural music gatherings",
        "Folk dance demonstrations",
      ],
      experiences: [
        "Oud playing lessons",
        "Traditional drumming",
        "Poetry writing workshops",
        "Folk dance classes",
        "Cultural storytelling",
      ],
    },
    {
      id: "complete-cultural-immersion",
      title: "Complete Cultural Immersion",
      description:
        "Comprehensive cultural journey covering all aspects of Saudi heritage, from ancient traditions to contemporary culture.",
      duration: 14,
      price: 3299,
      originalPrice: 3799,
      image: "/images/complete-cultural.jpg",
      rating: 4.9,
      reviews: 89,
      culturalFocus: "Complete Heritage",
      highlights: [
        "All cultural aspects covered",
        "Multiple regional traditions",
        "Contemporary culture",
        "Historical perspectives",
        "Modern Saudi society",
      ],
      experiences: [
        "Regional cultural variations",
        "Modern art galleries",
        "Contemporary workshops",
        "Cultural fusion experiences",
        "Traditional meets modern",
      ],
    },
  ]

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="absolute inset-0">
          <Image
            src="/images/cultural-hero.jpg"
            alt="Cultural Saudi Arabia"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <Badge className="bg-purple-400 text-purple-900 hover:bg-purple-500">Cultural Collection</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Cultural Saudi Arabia</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Immerse yourself in the rich cultural tapestry of Saudi Arabia. Experience authentic traditions, master
                ancient crafts, and connect with local communities through our carefully curated cultural tours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Cultural Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent"
                >
                  Cultural Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Cultural Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Cultural Tours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Authentic experiences with local artisans, historians, and cultural experts who share their knowledge and
              passion for Saudi heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Expert Guides",
                description: "Local historians and cultural experts as your guides",
              },
              {
                icon: Palette,
                title: "Hands-on Workshops",
                description: "Learn traditional crafts from master artisans",
              },
              {
                icon: Music,
                title: "Live Performances",
                description: "Experience authentic music and storytelling",
              },
              {
                icon: Coffee,
                title: "Cultural Immersion",
                description: "Participate in daily cultural practices",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Cultural Tour Packages</h2>
            <p className="text-xl text-muted-foreground">Authentic cultural experiences for every interest</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {culturalPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-purple-600 text-white">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Cultural
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-800">{pkg.culturalFocus}</Badge>
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
                      <Star className="h-4 w-4 fill-purple-400 text-purple-400" />
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
                      <span>Max 15 people</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Cultural Experiences:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.experiences.slice(0, 3).map((experience, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Palette className="h-3 w-3 text-purple-600" />
                          {experience}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-purple-600">{formatPrice(pkg.price, currency)}</span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-lg text-muted-foreground line-through">
                            {formatPrice(pkg.originalPrice, currency)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link href={`/packages/cultural/${pkg.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural Learning */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-muted-foreground">
              Gain deep insights into Saudi culture through hands-on experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Traditional Crafts",
                description: "Master ancient techniques passed down through generations",
                skills: ["Pottery making", "Textile weaving", "Metalwork", "Calligraphy"],
              },
              {
                title: "Cultural Practices",
                description: "Participate in authentic cultural ceremonies and traditions",
                skills: ["Coffee ceremonies", "Traditional cooking", "Folk dances", "Storytelling"],
              },
              {
                title: "Historical Context",
                description: "Understand the rich history behind cultural practices",
                skills: [
                  "Archaeological insights",
                  "Historical narratives",
                  "Cultural evolution",
                  "Modern adaptations",
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="bg-white border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <ul className="space-y-1">
                    {section.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-3 w-3 text-purple-600" />
                        {skill}
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Saudi Culture?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our cultural specialists will help you choose the perfect cultural experience based on your interests.
            Connect with Saudi Arabia's living heritage through authentic encounters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <BookOpen className="h-5 w-5 mr-2" />
              Contact Cultural Specialist
            </Button>
            <Button size="lg" variant="outline">
              Download Cultural Guide
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
