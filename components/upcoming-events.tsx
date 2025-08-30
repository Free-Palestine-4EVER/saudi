"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BubbleButton from "@/components/bubble-button"
import { saudiEvents } from "@/data/saudi-events"

export default function UpcomingEvents() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }

    updateItemsPerSlide()
    window.addEventListener("resize", updateItemsPerSlide)
    return () => window.removeEventListener("resize", updateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(saudiEvents.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const getCurrentEvents = () => {
    const startIndex = currentSlide * itemsPerSlide
    const endIndex = startIndex + itemsPerSlide
    return saudiEvents.slice(startIndex, endIndex)
  }

  return (
    <div className="relative">
      {totalSlides > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {getCurrentEvents().map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`
                w-4 h-4 rounded-full transition-all duration-300 border-0 cursor-pointer
                ${currentSlide === index ? "bg-purple-600" : "bg-purple-200 hover:bg-purple-300"}
              `}
              onClick={() => goToSlide(index)}
              style={{ minWidth: "16px", minHeight: "16px" }}
            />
          ))}
        </div>
      )}

      {/* View All Events Button */}
      <div className="text-center mt-10">
        <BubbleButton
          asChild
          variant="outline"
          size="lg"
          className="gap-2 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
        >
          <Link href="/events">
            View All Events
            <ChevronRight className="h-4 w-4" />
          </Link>
        </BubbleButton>
      </div>
    </div>
  )
}

function EventCard({ event }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-[400px] flex flex-col">
      <div className="relative h-[140px] bg-purple-100 flex-shrink-0">
        <Image
          src={
            imageError
              ? `/placeholder.svg?height=140&width=400&query=${encodeURIComponent(event.title + " Saudi Arabia event")}`
              : event.image ||
                `/placeholder.svg?height=140&width=400&query=${encodeURIComponent(event.title + " Saudi Arabia event")}`
          }
          alt={event.title}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute top-3 left-3">
          <Badge className="bg-purple-600 text-white hover:bg-purple-700">{event.category}</Badge>
        </div>

        {event.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-yellow-500 text-white">Featured</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-3 flex flex-col flex-1">
        <div className="flex-1 space-y-2">
          <h3 className="text-sm font-bold text-purple-800 line-clamp-2 leading-tight h-[2.5rem]">{event.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed h-[2rem] overflow-hidden">
            {event.description}
          </p>

          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2 text-purple-600">
              <Calendar className="h-3 w-3 flex-shrink-0" />
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="font-medium">{event.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-gray-100">
          <Button
            asChild
            className="w-full bg-purple-600 hover:bg-purple-700 text-white h-8 text-xs font-semibold rounded-lg"
          >
            <Link href={event.bookingLink} target="_blank" rel="noopener noreferrer">
              VIEW EVENT
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
