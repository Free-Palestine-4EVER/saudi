"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, Heart, Shield, Baby, Gamepad2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCurrency } from "@/contexts/currency-context"
import { formatPrice } from "@/utils/currency"

export default function FamilyPackagesPage() {
  const { currency } = useCurrency()

  const familyPackages = [
    {
      id: "family-discovery-tour",
      title: "Family Discovery Tour",
      description:
        "Perfect introduction to Saudi Arabia for families with children, featuring interactive museums, cultural sites, and fun activities.",
      duration: 7,
      price: 1599,
      originalPrice: 1899,
      image: "/images/family-discovery.jpg",
      rating: 4.8,
      reviews: 89,
      ageRange: "All ages",
      highlights: [
        "Interactive museums",
        "Cultural workshops for kids",
        "Family-friendly accommodations",
        "Educational activities",
        "Traditional craft making",
      ],
      kidFriendly: [
        "Children's museum visits",
        "Hands-on cultural activities",
        "Traditional games",
        "Storytelling sessions",
        "Kid-friendly restaurants",
      ],
    },
    {
      id: "desert-family-adventure",
      title: "Desert Family Adventure",
      description:
        "Experience the magic of the Arabian desert with safe, family-oriented activities including camel rides and stargazing.",
      duration: 5,
      price: 1299,
      originalPrice: 1599,
      image: "/images/family-desert.jpg",
      rating: 4.7,
      reviews: 67,
      ageRange: "6+ years",
      highlights: [
        "Gentle camel rides",
        "Desert camping experience",
        "Stargazing sessions",
        "Traditional Bedouin culture",
        "Sand dune activities",
      ],
      kidFriendly: [
        "Safe camel interactions",
        "Junior ranger programs",
        "Desert treasure hunts",
        "Astronomy for kids",
        "Traditional music shows",
      ],
    },
    {
      id: "red-sea-family-getaway",
      title: "Red Sea Family Getaway",
      description:
        "Beach and marine life adventure perfect for families, with snorkeling, beach activities, and marine education programs.",
      duration: 6,
      price: 1799,
      originalPrice: 2099,
      image: "/images/family-red-sea.jpg",
      rating: 4.9,
      reviews: 78,
      ageRange: "8+ years",
      highlights: [
        "Family snorkeling",
        "Beach resort stay",
        "Marine life education",
        "Water sports activities",
        "Coral reef exploration",
      ],
      kidFriendly: [
        "Shallow water snorkeling",
        "Marine biology for kids",
        "Beach games",
        "Junior lifeguard training",
        "Underwater photography",
      ],
    },
    {
      id: "heritage-family-journey",
      title: "Heritage Family Journey",
      description:
        "Explore Saudi Arabia's rich history and culture through family-friendly heritage sites and interactive experiences.",
      duration: 8,
      price: 1899,
      originalPrice: 2199,
      image: "/images/family-heritage.jpg",
      rating: 4.6,
      reviews: 54,
      ageRange: "All ages",
      highlights: [
        "UNESCO World Heritage sites",
        "Interactive history lessons",
        "Traditional craft workshops",
        "Cultural performances",
        "Heritage village visits",
      ],
      kidFriendly: [
        "Junior archaeologist program",
        "Traditional costume try-on",
        "Historical treasure hunts",
        "Storytelling sessions",
        "Craft making workshops",
      ],
    },
    {
      id: "mountain-family-escape",
      title: "Mountain Family Escape",
      description:
        "Cool mountain retreat in the Asir region with easy hikes, traditional villages, and family-friendly outdoor activities.",
      duration: 6,
      price: 1499,
      originalPrice: 1799,
      image: "/images/family-mountains.jpg",
      rating: 4.8,
      reviews: 43,
      ageRange: "5+ years",
      highlights: [
        "Easy mountain hikes",
        "Traditional village visits",
        "Cool mountain climate",
        "Cable car rides",
        "Local cultural experiences",
      ],
      kidFriendly: [
        "Nature scavenger hunts",
        "Traditional games",
        "Mountain wildlife spotting",
        "Local craft workshops",
        "Family picnics",
      ],
    },
    {
      id: "complete-family-saudi",
      title: "Complete Family Saudi Experience",
      description:
        "Comprehensive family tour covering all major regions of Saudi Arabia with age-appropriate activities and comfortable accommodations.",
      duration: 12,
      price: 2999,
      originalPrice: 3499,
      image: "/images/complete-family.jpg",
      rating: 4.9,
      reviews: 67,
      ageRange: "All ages",
      highlights: [
        "All major Saudi regions",
        "Diverse family activities",
        "Educational experiences",
        "Cultural immersion",
        "Comfortable family hotels",
      ],
      kidFriendly: [
        "Age-appropriate activities",
        "Educational programs",
        "Interactive experiences",
        "Family bonding activities",
        "Cultural workshops",
      ],
    },
  ]

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0">
          <Image
            src="/images/family-hero.jpg"
            alt="Family Saudi Arabia"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <Badge className="bg-blue-400 text-blue-900 hover:bg-blue-500">Family Collection</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Family Saudi Arabia</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Create unforgettable memories with your family in Saudi Arabia. Our family-friendly tours are designed
                with activities and experiences that delight both children and adults, ensuring everyone has an amazing
                time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  Explore Family Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Plan Family Adventure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Family Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Families Love Our Tours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detail is planned with families in mind, from age-appropriate activities to comfortable
              accommodations and flexible schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Child-safe activities with professional supervision",
              },
              {
                icon: Baby,
                title: "All Ages Welcome",
                description: "Activities designed for different age groups",
              },
              {
                icon: Heart,
                title: "Family Bonding",
                description: "Experiences that bring families closer together",
              },
              {
                icon: Gamepad2,
                title: "Fun & Educational",
                description: "Learning through play and interactive experiences",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Family Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Family Tour Packages</h2>
            <p className="text-xl text-muted-foreground">Adventures designed for the whole family to enjoy together</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {familyPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-blue-600 text-white">
                      <Heart className="h-3 w-3 mr-1" />
                      Family
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">{pkg.ageRange}</Badge>
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
                      <Star className="h-4 w-4 fill-blue-400 text-blue-400" />
                      <span className="font-medium">{pkg.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({pkg.reviews} family reviews)</span>
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
                      <span>Family groups</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Kid-Friendly Activities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.kidFriendly.slice(0, 3).map((activity, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Gamepad2 className="h-3 w-3 text-blue-600" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-blue-600">{formatPrice(pkg.price, currency)}</span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-lg text-muted-foreground line-through">
                            {formatPrice(pkg.originalPrice, currency)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/packages/family/${pkg.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Family Services */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Special Family Services</h2>
            <p className="text-xl text-muted-foreground">
              Additional services to make your family trip even more comfortable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Childcare Services",
                description: "Professional childcare when parents need some time",
                features: ["Qualified caregivers", "Age-appropriate activities", "Flexible hours"],
              },
              {
                title: "Family Rooms",
                description: "Spacious accommodations for the whole family",
                features: ["Connecting rooms", "Child-safe amenities", "Family-friendly facilities"],
              },
              {
                title: "Educational Programs",
                description: "Learning experiences designed for young minds",
                features: ["Interactive workshops", "Cultural education", "Fun learning activities"],
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Heart className="h-3 w-3 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Age Guidelines */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Age Guidelines for Activities</h2>
            <p className="text-xl text-muted-foreground">
              We ensure age-appropriate activities for every family member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                age: "0-4 years",
                activities: ["Gentle cultural sites", "Interactive museums", "Short walks", "Playground visits"],
                color: "bg-green-100 text-green-800",
              },
              {
                age: "5-8 years",
                activities: ["Camel rides", "Beach activities", "Craft workshops", "Nature walks"],
                color: "bg-blue-100 text-blue-800",
              },
              {
                age: "9-12 years",
                activities: ["Snorkeling", "Desert camping", "Historical sites", "Adventure activities"],
                color: "bg-purple-100 text-purple-800",
              },
              {
                age: "13+ years",
                activities: ["All activities", "Cultural immersion", "Photography", "Leadership roles"],
                color: "bg-orange-100 text-orange-800",
              },
            ].map((group, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Badge className={`mb-4 ${group.color}`}>{group.age}</Badge>
                  <ul className="space-y-2 text-sm">
                    {group.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center gap-2">
                        <Baby className="h-3 w-3 text-blue-600" />
                        {activity}
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
          <h2 className="text-3xl font-bold mb-4">Ready for a Family Adventure?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our family travel specialists understand the unique needs of traveling families. Let us help you create the
            perfect Saudi Arabian adventure for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Heart className="h-5 w-5 mr-2" />
              Contact Family Specialist
            </Button>
            <Button size="lg" variant="outline">
              Download Family Guide
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
