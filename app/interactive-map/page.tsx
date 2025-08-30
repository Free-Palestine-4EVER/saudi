import { Suspense } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { tourRoutes } from "@/data/tour-routes"
import InteractiveMapClient from "@/components/interactive-map-client"

export default function InteractiveMapPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>Interactive Map</span>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            Explore Saudi Arabia Interactive Map
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover our tour routes across Saudi Arabia. Click on any route to see detailed information about
            destinations, highlights, and pricing.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="w-full h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
                <p className="text-orange-700">Loading Interactive Map...</p>
              </div>
            </div>
          }
        >
          <InteractiveMapClient routes={tourRoutes} />
        </Suspense>

        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Saudi Adventure?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Use our interactive map to explore different tour routes and find the perfect Saudi Arabia experience for
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Browse All Tours
            </Link>
            <Link
              href="/start-planning"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
