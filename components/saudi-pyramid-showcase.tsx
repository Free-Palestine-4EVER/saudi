"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const saudiHighlights = [
  {
    id: 1,
    title: "AlUla - Hegra",
    description: "Ancient Nabataean city with stunning rock-cut tombs",
    image: "/images/alula-hegra.png",
    category: "UNESCO Heritage",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "Riyadh - Edge of the World",
    description: "Dramatic cliff formations with breathtaking views",
    image: "/images/edge-of-world.png",
    category: "Natural Wonder",
    featured: true,
    size: "medium",
  },
  {
    id: 3,
    title: "Jeddah - Al-Balad",
    description: "Historic Red Sea port with traditional architecture",
    image: "/images/jeddah-balad.png",
    category: "Historic City",
    featured: true,
    size: "medium",
  },
  {
    id: 4,
    title: "Diriyah",
    description: "Birthplace of the Saudi state",
    image: "/images/diriyah-heritage.png",
    category: "Heritage Site",
    featured: false,
    size: "small",
  },
  {
    id: 5,
    title: "Red Sea Coast",
    description: "Pristine coral reefs and crystal waters",
    image: "/images/red-sea-coast.png",
    category: "Marine Paradise",
    featured: false,
    size: "small",
  },
  {
    id: 6,
    title: "Asir Mountains",
    description: "Green highlands and traditional villages",
    image: "/images/asir-mountains.png",
    category: "Mountain Region",
    featured: false,
    size: "small",
  },
  {
    id: 7,
    title: "Empty Quarter",
    description: "World's largest continuous sand desert",
    image: "/images/empty-quarter.png",
    category: "Desert Adventure",
    featured: false,
    size: "small",
  },
]

export default function SaudiPyramidShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const getCategoryColor = (category: string) => {
    const colors = {
      "UNESCO Heritage": "bg-amber-100 text-amber-700 border-amber-200",
      "Natural Wonder": "bg-green-100 text-green-700 border-green-200",
      "Historic City": "bg-blue-100 text-blue-700 border-blue-200",
      "Heritage Site": "bg-purple-100 text-purple-700 border-purple-200",
      "Marine Paradise": "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Mountain Region": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Desert Adventure": "bg-orange-100 text-orange-700 border-orange-200",
    }
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sand-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200">Discover Saudi Arabia</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">Best of Saudi Arabia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient UNESCO World Heritage sites to stunning natural wonders, explore the diverse beauty and rich
            heritage of the Kingdom.
          </p>
        </div>

        {/* Pyramid Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Pyramid Layout */}
          <div className="hidden lg:block">
            {/* Top Row - Large Featured Item */}
            <div className="flex justify-center mb-6">
              <div className="w-96 h-80">
                <ShowcaseCard
                  item={saudiHighlights[0]}
                  isHovered={hoveredId === saudiHighlights[0].id}
                  onHover={setHoveredId}
                  getCategoryColor={getCategoryColor}
                />
              </div>
            </div>

            {/* Middle Row - Two Medium Items */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="w-72 h-64">
                <ShowcaseCard
                  item={saudiHighlights[1]}
                  isHovered={hoveredId === saudiHighlights[1].id}
                  onHover={setHoveredId}
                  getCategoryColor={getCategoryColor}
                />
              </div>
              <div className="w-72 h-64">
                <ShowcaseCard
                  item={saudiHighlights[2]}
                  isHovered={hoveredId === saudiHighlights[2].id}
                  onHover={setHoveredId}
                  getCategoryColor={getCategoryColor}
                />
              </div>
            </div>

            {/* Bottom Row - Four Small Items */}
            <div className="flex justify-center gap-4">
              {saudiHighlights.slice(3, 7).map((item) => (
                <div key={item.id} className="w-56 h-48">
                  <ShowcaseCard
                    item={item}
                    isHovered={hoveredId === item.id}
                    onHover={setHoveredId}
                    getCategoryColor={getCategoryColor}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Pyramid - Stacked */}
            <div className="space-y-4">
              {/* Large Featured */}
              <div className="w-full">
                <ShowcaseCard
                  item={saudiHighlights[0]}
                  isHovered={hoveredId === saudiHighlights[0].id}
                  onHover={setHoveredId}
                  getCategoryColor={getCategoryColor}
                />
              </div>

              {/* Two Medium Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ShowcaseCard
                  item={saudiHighlights[1]}
                  isHovered={hoveredId === saudiHighlights[1].id}
                  onHover={setHoveredId}
                  getCategoryColor={getCategoryColor}
                />
                <ShowcaseCard
                  item={saudiHighlights[2]}
                  isHovered={hoveredId === saudiHighlights[2].id}
                  onHover={setHoveredId}
                  getCategoryColor={getCategoryColor}
                />
              </div>

              {/* Four Small in Grid */}
              <div className="grid grid-cols-2 gap-3">
                {saudiHighlights.slice(3, 7).map((item) => (
                  <ShowcaseCard
                    key={item.id}
                    item={item}
                    isHovered={hoveredId === item.id}
                    onHover={setHoveredId}
                    getCategoryColor={getCategoryColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-sand-600 hover:bg-sand-700 text-white px-8 py-3 rounded-full">
            <Link href="/destinations" className="flex items-center gap-2">
              Explore All Destinations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Showcase Card Component
function ShowcaseCard({ item, isHovered, onHover, getCategoryColor }) {
  return (
    <Card
      className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full cursor-pointer"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-full overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg?height=400&width=600"}
          alt={item.title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110 brightness-110" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg animate-pulse">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={`text-xs font-medium border ${getCategoryColor(item.category)}`}>{item.category}</Badge>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg md:text-xl mb-2 leading-tight group-hover:text-sand-200 transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed mb-3 line-clamp-2">{item.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-white/80">
              <MapPin className="h-3 w-3" />
              <span>Saudi Arabia</span>
            </div>
            <div
              className={`transform transition-transform duration-300 ${isHovered ? "translate-x-1" : "translate-x-0"}`}
            >
              <ArrowRight className="h-4 w-4 text-sand-300" />
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div
          className={`absolute inset-0 bg-sand-600/20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </Card>
  )
}
