import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const activities = [
  {
    id: 1,
    title: "Desert Safari Adventure",
    description: "Experience the thrill of dune bashing and traditional Bedouin culture in the Arabian Desert.",
    image: "/desert-safari.png",
    duration: "6 hours",
    location: "Riyadh Desert",
    groupSize: "8-12 people",
    rating: 4.8,
    price: 299,
    category: "Adventure",
  },
  {
    id: 2,
    title: "Historical Diriyah Tour",
    description: "Explore the birthplace of the Saudi Kingdom and UNESCO World Heritage site.",
    image: "/diriyah-historical-site.png",
    duration: "4 hours",
    location: "Diriyah",
    groupSize: "6-15 people",
    rating: 4.9,
    price: 199,
    category: "Cultural",
  },
  {
    id: 3,
    title: "Red Sea Diving",
    description: "Discover pristine coral reefs and marine life in the crystal-clear waters of the Red Sea.",
    image: "/red-sea-diving.png",
    duration: "Full day",
    location: "Jeddah Coast",
    groupSize: "4-8 people",
    rating: 4.7,
    price: 449,
    category: "Water Sports",
  },
  {
    id: 4,
    title: "AlUla Rock Art Tour",
    description: "Marvel at ancient Nabataean tombs and rock formations in this archaeological wonder.",
    image: "/alula-rock-formations.png",
    duration: "8 hours",
    location: "AlUla",
    groupSize: "10-16 people",
    rating: 4.9,
    price: 349,
    category: "Cultural",
  },
  {
    id: 5,
    title: "Asir Mountains Hiking",
    description: "Trek through the green mountains and traditional villages of the Asir region.",
    image: "/asir-mountains-hiking.png",
    duration: "2 days",
    location: "Asir Province",
    groupSize: "6-12 people",
    rating: 4.6,
    price: 599,
    category: "Adventure",
  },
  {
    id: 6,
    title: "Traditional Souq Experience",
    description: "Immerse yourself in local culture at traditional markets and spice bazaars.",
    image: "/traditional-saudi-market.png",
    duration: "3 hours",
    location: "Jeddah Old Town",
    groupSize: "8-20 people",
    rating: 4.5,
    price: 149,
    category: "Cultural",
  },
]

const categories = ["All", "Adventure", "Cultural", "Water Sports"]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/saudi-arabia-activities.png" alt="Saudi Arabia Activities" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Activities & Experiences</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover unique adventures and cultural experiences across Saudi Arabia
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filter Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-orange-500">{activity.category}</Badge>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{activity.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{activity.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-orange-600">
                    ${activity.price}
                    <span className="text-sm font-normal text-muted-foreground ml-1">per person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can create custom activities and experiences tailored to your interests and preferences.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Contact Us for Custom Activities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
