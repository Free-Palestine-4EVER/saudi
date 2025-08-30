"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Our Saudi Arabia adventure exceeded all expectations! The AlUla tour was absolutely breathtaking, and our guide's knowledge of the history was incredible. The organization was flawless from start to finish.",
      image: "/images/avatar-1.png",
      tour: "Best of Saudi Arabia - 10 Days",
    },
    {
      id: 2,
      name: "Mohammed Al-Rashid",
      location: "London, UK",
      rating: 5,
      text: "As someone who has traveled extensively, I can say this was one of the most well-organized tours I've experienced. The Red Sea diving was spectacular, and Jeddah's historic district was fascinating.",
      image: "/images/avatar-2.png",
      tour: "Red Sea Adventure - 7 Days",
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "The cultural immersion was incredible! From the traditional markets in Riyadh to the ancient tombs of Hegra, every moment was educational and inspiring. Our guide made Saudi culture come alive.",
      image: "/images/avatar-3.png",
      tour: "Saudi Heritage Journey - 5 Days",
    },
    {
      id: 4,
      name: "David Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "The adventure activities were thrilling! Edge of the World hiking was unforgettable, and the desert camping under the stars was magical. Perfect blend of adventure and cultural discovery.",
      image: "/images/avatar-4.png",
      tour: "Desert & Mountains - 8 Days",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sky-800">What Our Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers who have experienced the magic of Saudi Arabia with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-sky-700">4.9/5</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
            {!isImageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 bg-[length:400%_100%]" />
            )}
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className={`object-cover ${isImageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
              onLoad={() => setIsImageLoaded(true)}
              sizes="48px"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sky-700">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <Quote className="h-8 w-8 text-sky-200 flex-shrink-0" />
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>

        <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
          {testimonial.tour}
        </Badge>
      </CardContent>
    </Card>
  )
}
