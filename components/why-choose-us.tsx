import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, MapPin, Clock, Star, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed tour operator with comprehensive insurance coverage for your peace of mind.",
    },
    {
      icon: Users,
      title: "Expert Local Guides",
      description: "Our knowledgeable Saudi guides bring history and culture to life with authentic insights.",
    },
    {
      icon: MapPin,
      title: "Unique Destinations",
      description: "Access to exclusive locations and hidden gems throughout Saudi Arabia.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Customizable itineraries that adapt to your preferences and travel style.",
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Premium accommodations and exceptional service throughout your Saudi adventure.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your Saudi Arabia journey is seamless.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sky-800">Your Trusted Saudi Arabia Partner</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With years of experience and deep local knowledge, we create unforgettable Saudi Arabia experiences that
            exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-sky-700">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">500+</div>
              <p className="text-muted-foreground">Happy Travelers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">50+</div>
              <p className="text-muted-foreground">Saudi Destinations</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">4.9</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
