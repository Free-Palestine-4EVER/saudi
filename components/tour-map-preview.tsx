"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Map } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import the InteractiveMap component with no SSR
const InteractiveMap = dynamic(() => import("@/components/interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 animate-pulse rounded-lg">
      <p>Loading map...</p>
    </div>
  ),
})

interface TourMapPreviewProps {
  tourId: string
  height?: string
}

export default function TourMapPreview({ tourId, height = "300px" }: TourMapPreviewProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="space-y-4">
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200" style={{ height }}>
        {isMounted ? (
          <InteractiveMap selectedTourId={tourId} showPopups={false} zoom={6} />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100 animate-pulse">
            <p>Loading map...</p>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" className="gap-2">
          <Link href="/interactive-map">
            <Map className="h-4 w-4" />
            <span>View Full Interactive Map</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
