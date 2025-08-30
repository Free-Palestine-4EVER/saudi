"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Users, Heart, Share2 } from "lucide-react"
import { useCurrency } from "@/contexts/currency-context"
import { formatPrice } from "@/utils/currency"

interface TourCardProps {
  tour: {
    id: string
    title: string
    slug: string
    description: string
    image: string
    price: number
    originalPrice?: number
    duration: number
    groupSize: number
    rating: number
    reviewCount: number
    category: string[]
    destinations: string[]
    featured?: boolean
    discount?: number
  }
}

export default function TourCard({ tour }: TourCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const { currency } = useCurrency()

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tour.title,
          text: tour.description,
          url: `/tours/${tour.slug}`,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${window.location.origin}/tours/${tour.slug}`)
    }
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
      <div className="relative overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={tour.image || "/placeholder.svg?height=200&width=300"}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {tour.featured && <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">Featured</Badge>}
            {tour.discount && <Badge className="bg-red-500 text-white hover:bg-red-600">{tour.discount}% OFF</Badge>}
            {tour.category && tour.category.length > 0 && (
              <Badge variant="secondary" className="bg-white/90 text-gray-800">
                {tour.category[0]}
              </Badge>
            )}
          </div>

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-white/90 hover:bg-white"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-white/90 hover:bg-white"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 text-gray-600" />
            </Button>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-primary text-primary-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {tour.duration} Days
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <div className="space-y-3">
            {/* Title and Rating */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {tour.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({tour.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2">{tour.description}</p>

            {/* Destinations */}
            {tour.destinations && tour.destinations.length > 0 && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="line-clamp-1">
                  {tour.destinations.slice(0, 2).join(", ")}
                  {tour.destinations.length > 2 && ` +${tour.destinations.length - 2} more`}
                </span>
              </div>
            )}

            {/* Group Size */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Max {tour.groupSize} people</span>
            </div>
          </div>
        </div>

        {/* Price and CTA - Always at bottom */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{formatPrice(tour.price, currency)}</span>
                {tour.originalPrice && tour.originalPrice > tour.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(tour.originalPrice, currency)}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">per person</p>
            </div>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 w-full">
            <Link href={`/tours/${tour.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
