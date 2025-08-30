"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, Car, Utensils, Bed, Crown, Gem } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCurrency } from "@/contexts/currency-context"
import { formatPrice } from "@/utils/currency"

export default function LuxuryPackagesPage() {
  const { currency } = useCurrency()

  const luxuryPackages = [
    {
      id: "royal-saudi-experience",
      title: "Royal Saudi Experience",
      description:
        "The ultimate luxury tour of Saudi Arabia with private jets, 5-star accommodations, and exclusive access to royal sites.",
      duration: 12,
      price: 15999,
      originalPrice: 18999,
      image: "/images/luxury-royal.jpg",
      rating: 5.0,
      reviews: 28,
      highlights: [
        "Private jet transportation",
        "Royal palace visits",
        "Michelin-starred dining",
        "Personal butler service",
        "Exclusive archaeological access",
      ],
      inclusions: [
        "Private jet flights within Saudi Arabia",
        "Luxury 5-star hotel accommodations",
        "All meals at premium restaurants",
        "Private guides and drivers",
        "VIP access to all attractions",
        "Personal concierge service",
      ],
    },
    {
      id: "desert-palace-retreat",
      title: "Desert Palace Retreat",
      description:
        "Experience the magic of the Arabian desert in luxury desert resorts with world-class amenities and authentic Bedouin experiences.",
      duration: 8,
      price: 8999,
      originalPrice: 10999,
      image: "/images/luxury-desert.jpg",
      rating: 4.9,
      reviews: 45,
      highlights: [
        "Luxury desert camps",
        "Private camel expeditions",
        "Spa treatments under stars",
        "Gourmet desert dining",
        "Falconry experiences",
      ],
      inclusions: [
        "Luxury desert resort accommodation",
        "All gourmet meals and beverages",
        "Private desert activities",
        "Spa and wellness treatments",
        "Professional photography service",
        "Premium transportation",
      ],
    },
    {
      id: "red-sea-luxury-cruise",
      title: "Red Sea Luxury Cruise",
      description:
        "Sail the pristine waters of the Red Sea aboard a luxury yacht with world-class diving, gourmet cuisine, and exclusive island access.",
      duration: 10,
      price: 12999,
      originalPrice: 14999,
      image: "/images/luxury-cruise.jpg",
      rating: 4.8,
      reviews: 32,
      highlights: [
        "Private luxury yacht",
        "Professional diving crew",
        "Exclusive island visits",
        "Underwater photography",
        "Sunset champagne cruises",
      ],
      inclusions: [
        "Luxury yacht accommodation",
        "All meals by private chef",
        "Diving equipment and instruction",
        "Water sports activities",
        "Island excursions",
        "Premium beverages included",
      ],
    },
    {
      id: "heritage-luxury-collection",
      title: "Heritage Luxury Collection",
      description:
        "Explore Saudi Arabia's UNESCO World Heritage sites while staying in the finest luxury hotels and experiencing premium cultural programs.",
      duration: 14,
      price: 11999,
      originalPrice: 13999,
      image: "/images/luxury-heritage.jpg",
      rating: 4.9,
      reviews: 38,
      highlights: [
        "UNESCO World Heritage sites",
        "Luxury heritage hotels",
        "Private archaeological tours",
        "Cultural immersion programs",
        "Traditional craft workshops",
      ],
      inclusions: [
        "Luxury hotel accommodations",
        "Private expert guides",
        "All entrance fees",
        "Cultural workshops",
        "Premium dining experiences",
        "Luxury transportation",
      ],
    },
  ]

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900">
        <div className="absolute inset-0">
          <Image
            src="/images/luxury-hero.jpg"
            alt="Luxury Saudi Arabia"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="h-8 w-8 text-amber-400" />
                <Badge className="bg-amber-400 text-amber-900 hover:bg-amber-500">Premium Collection</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Luxury Saudi Arabia</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience Saudi Arabia in unparalleled luxury with our exclusive collection of premium tours, featuring
                private jets, 5-star accommodations, and VIP access to the Kingdom's most treasured sites.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Gem className="h-5 w-5 mr-2" />
                  Explore Luxury Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
                >
                  Speak to Luxury Specialist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Luxury Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Luxury Collection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detail is crafted to exceed expectations, ensuring your Saudi Arabian journey is nothing short of
              extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Crown,
                title: "VIP Access",
                description: "Exclusive access to royal sites and private locations",
              },
              {
                icon: Bed,
                title: "5-Star Luxury",
                description: "Premium accommodations and world-class amenities",
              },
              {
                icon: Car,
                title: "Private Transport",
                description: "Luxury vehicles and private jet options",
              },
              {
                icon: Utensils,
                title: "Gourmet Dining",
                description: "Michelin-starred restaurants and private chefs",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-amber-200 hover:border-amber-400 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Luxury Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Luxury Tour Packages</h2>
            <p className="text-xl text-muted-foreground">Handcrafted experiences for the most discerning travelers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {luxuryPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">
                      <Crown className="h-3 w-3 mr-1" />
                      Luxury
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white">
                      Save {formatPrice(pkg.originalPrice - pkg.price, currency)}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
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
                      <span>Max 6 guests</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Luxury Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Gem className="h-3 w-3 text-amber-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-amber-600">{formatPrice(pkg.price, currency)}</span>
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(pkg.originalPrice, currency)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    <Button asChild className="bg-amber-600 hover:bg-amber-700">
                      <Link href={`/packages/luxury/${pkg.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Luxury Services */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Exclusive Luxury Services</h2>
            <p className="text-xl text-muted-foreground">
              Additional premium services to enhance your luxury experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Private Jet Charter",
                description: "Skip commercial flights with our private jet service",
                price: "From $5,000/hour",
              },
              {
                title: "Personal Butler",
                description: "Dedicated personal service throughout your journey",
                price: "From $500/day",
              },
              {
                title: "Royal Site Access",
                description: "Exclusive access to private royal locations",
                price: "From $2,000/visit",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white border-amber-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-amber-600 font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the Ultimate Luxury Experience?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our luxury travel specialists are ready to create your perfect Saudi Arabian adventure. Contact us for a
            personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Crown className="h-5 w-5 mr-2" />
              Contact Luxury Specialist
            </Button>
            <Button size="lg" variant="outline">
              Request Custom Itinerary
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
