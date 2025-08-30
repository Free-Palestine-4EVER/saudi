"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import TourCard from "@/components/tour-card"
import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import FeaturedDestinations from "@/components/featured-destinations"
import NewsletterSection from "@/components/newsletter-section"
import BubbleButton from "@/components/bubble-button"
import UpcomingEvents from "@/components/upcoming-events"
import DualSlideshow from "@/components/dual-slideshow"
import Image from "next/image"

// Saudi Arabia Tour Packages (9 total)
const saudiTours = [
  // 5-Day Tours
  {
    id: "saudi-5d-history-culture",
    title: "Saudi Arabia 5 Days - History & Culture",
    slug: "saudi-5d-history-culture",
    description:
      "Explore the birthplace of the Saudi state in Diriyah, discover ancient Nabataean tombs in Hegra, and experience the dramatic Edge of the World.",
    image:
      "https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/05/Culute-of-Saudi-Arabia-840x450.jpg",
    duration: 5,
    groupSize: 12,
    price: 1899,
    rating: 4.8,
    reviewCount: 89,
    category: ["Cultural", "History"],
    destinations: ["Riyadh", "Diriyah", "AlUla", "Hegra"],
    featured: true,
  },
  {
    id: "saudi-5d-adventure-hiking",
    title: "Saudi Arabia 5 Days - Adventure & Hiking",
    slug: "saudi-5d-adventure-hiking",
    description:
      "Active adventure with Edge of the World hiking, Red Sand Dunes quad biking, AlUla ziplines, and sunrise at Hegra.",
    image:
      "https://www.frasershospitality.com/en/saudi-arabia/riyadh/fraser-suites-riyadh/city-guide/riyadh-hiking/_jcr_content/root/container/column_controller/column-1-wrapper/image.coreimg.jpeg/1684942074186/edge-of-the-world.jpeg",
    duration: 5,
    groupSize: 8,
    price: 2199,
    rating: 4.9,
    reviewCount: 67,
    category: ["Adventure", "Active"],
    destinations: ["Riyadh", "Edge of the World", "AlUla", "Red Sand Dunes"],
  },
  {
    id: "saudi-5d-mixed-explorer",
    title: "Saudi Arabia 5 Days - Mixed Explorer",
    slug: "saudi-5d-mixed-explorer",
    description:
      "Perfect first-time visitor experience combining UNESCO sites, camel rides, and the stunning landscapes of AlUla.",
    image: "https://www.sleepermagazine.com/wp-content/uploads/2023/11/habitas-alula.jpg",
    duration: 5,
    groupSize: 10,
    price: 1999,
    rating: 4.7,
    reviewCount: 124,
    category: ["Mixed", "Explorer"],
    destinations: ["Riyadh", "Diriyah", "AlUla", "Hegra"],
  },
  // 7-Day Tours
  {
    id: "saudi-7d-history-culture",
    title: "Saudi Arabia 7 Days - History & Culture",
    slug: "saudi-7d-history-culture",
    description:
      "Extended heritage journey through Riyadh's museums, AlUla's ancient sites, and Jeddah's UNESCO Al-Balad district.",
    image: "https://i0.wp.com/emanalhussein.com/wp-content/uploads/2018/02/Area-C-at-dusk.jpg?resize=640%2C427&ssl=1",
    duration: 7,
    groupSize: 12,
    price: 2699,
    rating: 4.8,
    reviewCount: 156,
    category: ["Cultural", "Heritage"],
    destinations: ["Riyadh", "AlUla", "Jeddah", "Al-Balad"],
    featured: true,
  },
  {
    id: "saudi-7d-adventure-hiking",
    title: "Saudi Arabia 7 Days - Adventure & Hiking",
    slug: "saudi-7d-adventure-hiking",
    description:
      "Multi-region adventure including desert activities, mountain climbing in AlUla, and Taif's rose farms and cable car.",
    image: "https://www.abouther.com/sites/default/files/2020/12/10/adventures_tourism_saudi_arabia.jpg",
    duration: 7,
    groupSize: 8,
    price: 2999,
    rating: 4.9,
    reviewCount: 78,
    category: ["Adventure", "Mountains"],
    destinations: ["Riyadh", "AlUla", "Taif", "Jeddah"],
  },
  {
    id: "saudi-7d-mixed-explorer",
    title: "Saudi Arabia 7 Days - Mixed Explorer",
    slug: "saudi-7d-mixed-explorer",
    description:
      "Culture and soft adventure combination with UNESCO sites, camel experiences, and Red Sea coastal exploration.",
    image:
      "https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/04/Desert-Adventure-In-Saudi-Arabia.jpg",
    duration: 7,
    groupSize: 10,
    price: 2499,
    rating: 4.6,
    reviewCount: 203,
    category: ["Mixed", "Culture"],
    destinations: ["Riyadh", "AlUla", "Jeddah", "Red Sea"],
  },
  // 10-Day Tours
  {
    id: "saudi-10d-history-culture",
    title: "Saudi Arabia 10 Days - Full Heritage Journey",
    slug: "saudi-10d-history-culture",
    description:
      "Comprehensive UNESCO and heritage immersion including Medina day trip, complete AlUla exploration, and Jeddah's cultural sites.",
    image:
      "https://www.timeoutriyadh.com/cloud/timeoutriyadh/2024/08/04/alula-moments-hegra-after-dark-1-copy-1024x768-1.jpg",
    duration: 10,
    groupSize: 12,
    price: 3999,
    rating: 4.9,
    reviewCount: 145,
    category: ["Heritage", "UNESCO"],
    destinations: ["Riyadh", "AlUla", "Medina", "Jeddah"],
    featured: true,
  },
  {
    id: "saudi-10d-adventure-hiking",
    title: "Saudi Arabia 10 Days - Ultimate Adventure",
    slug: "saudi-10d-adventure-hiking",
    description:
      "Ultimate active adventure covering Edge of the World, AlUla adventures, Taif mountains, Abha hiking, and Red Sea diving.",
    image:
      "https://i0.wp.com/outqore.com/wp-content/uploads/2025/01/AlUla-Hidden-Valley-best-hiking-trails-in-saudia-arabia.jpg?resize=669%2C446&ssl=1",
    duration: 10,
    groupSize: 8,
    price: 4499,
    rating: 4.8,
    reviewCount: 89,
    category: ["Adventure", "Multi-Region"],
    destinations: ["Riyadh", "AlUla", "Taif", "Abha", "Jeddah"],
  },
  {
    id: "saudi-10d-mixed-explorer",
    title: "Saudi Arabia 10 Days - Complete Experience",
    slug: "saudi-10d-mixed-explorer",
    description:
      "Perfect for couples and families with moderate pace, combining culture, soft adventure, and optional activities throughout Saudi Arabia.",
    image: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_870,h_580,c_lfill,g_auto/exodus-web/2022/07/hegra_alula_saudi_arabia_shutterstock.jpg",
    duration: 10,
    groupSize: 10,
    price: 3799,
    rating: 4.7,
    reviewCount: 167,
    category: ["Family", "Mixed"],
    destinations: ["Riyadh", "AlUla", "Medina", "Jeddah", "Red Sea"],
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sand-50 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200">Vision 2030</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">Saudi Arabia's Modern Renaissance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the Kingdom's incredible transformation as it opens its doors to the world, blending ancient
              heritage with cutting-edge innovation and ambitious mega-projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ModernRenaissanceCarousel />
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sand-700">A Kingdom Transformed</h3>
              <p className="text-lg">
                Saudi Arabia is undergoing an unprecedented transformation under Vision 2030, creating world-class
                destinations, entertainment hubs, and sustainable cities while preserving its rich cultural heritage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">NEOM</h4>
                  <p>Futuristic mega-city in the northwest</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">Red Sea Project</h4>
                  <p>Luxury tourism destination</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">Qiddiya</h4>
                  <p>Entertainment and sports capital</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">AlUla</h4>
                  <p>Living museum of heritage</p>
                </div>
              </div>
              <BubbleButton asChild>
                <Link href="/destinations">Discover Modern Saudi</Link>
              </BubbleButton>
            </div>
          </div>
        </div>
      </section>

      <DualSlideshow />

      <section className="container mx-auto py-12 px-4 md:py-24 bg-gradient-to-b from-white to-sand-50 overflow-x-hidden">
        <div className="overflow-x-hidden">
          <Tabs defaultValue="popular" className="w-full">
            <div className="flex flex-col gap-6 mb-12 text-center">
              <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200 mx-auto">Tour Packages</Badge>
              <h3 className="text-4xl md:text-6xl font-bold text-sand-800 mb-4">Our Tour Packages</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Discover Saudi Arabia through our carefully curated tour experiences, from quick getaways to
                comprehensive adventures
              </p>
              <div className="flex justify-center">
                <TabsList className="bg-sand-100 w-full max-w-2xl overflow-x-auto">
                  <TabsTrigger
                    value="popular"
                    className="data-[state=active]:bg-sand-500 data-[state=active]:text-white flex-1 text-sm md:text-base px-6 py-3"
                  >
                    Popular
                  </TabsTrigger>
                  <TabsTrigger
                    value="luxury"
                    className="data-[state=active]:bg-sand-500 data-[state=active]:text-white flex-1 text-sm md:text-base px-6 py-3"
                  >
                    Luxury
                  </TabsTrigger>
                  <TabsTrigger
                    value="adventure"
                    className="data-[state=active]:bg-sand-500 data-[state=active]:text-white flex-1 text-sm md:text-base px-6 py-3"
                  >
                    Adventure
                  </TabsTrigger>
                  <TabsTrigger
                    value="cultural"
                    className="data-[state=active]:bg-sand-500 data-[state=active]:text-white flex-1 text-sm md:text-base px-6 py-3"
                  >
                    Cultural
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {saudiTours.slice(0, 6).map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
              <div className="text-center mt-10">
                <BubbleButton asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/tours">
                    View All Tours
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </BubbleButton>
              </div>
            </TabsContent>

            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {saudiTours
                  .filter((tour) => tour.price >= 3000)
                  .map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
              </div>
              <div className="text-center mt-10">
                <BubbleButton asChild variant="outline" size="lg" className="gap-2 px-8 py-4 text-lg">
                  <Link href="/tours?category=luxury">
                    View All Luxury Tours
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </BubbleButton>
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {saudiTours
                  .filter((tour) => tour.category.includes("Adventure"))
                  .map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
              </div>
              <div className="text-center mt-10">
                <BubbleButton asChild variant="outline" size="lg" className="gap-2 px-8 py-4 text-lg">
                  <Link href="/tours?category=adventure">
                    View All Adventure Tours
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </BubbleButton>
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {saudiTours
                  .filter(
                    (tour) =>
                      tour.category.includes("Cultural") ||
                      tour.category.includes("Heritage") ||
                      tour.category.includes("Culture"),
                  )
                  .map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
              </div>
              <div className="text-center mt-10">
                <BubbleButton asChild variant="outline" size="lg" className="gap-2 px-8 py-4 text-lg">
                  <Link href="/tours?category=cultural">
                    View All Cultural Tours
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </BubbleButton>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto py-12 px-4 md:py-24 bg-gradient-to-b from-sand-50 to-white overflow-x-hidden">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Upcoming Events</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">
            Experience Saudi Arabia's Vibrant Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From world-class concerts and festivals to traditional camel races and cultural celebrations, discover the
            exciting events happening across the Kingdom.
          </p>
        </div>

        <UpcomingEvents />
      </section>

      <WhyChooseUs />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sand-50 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200">Explore Saudi Arabia</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">Discover Saudi Arabia's Rich Heritage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Saudi Arabia is home to some of the world's most remarkable historical sites, from ancient Nabataean
              cities to Islamic landmarks and UNESCO World Heritage sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl bg-sand-100">
              <Image
                src="https://media.cntraveler.com/photos/642b28a95e21b50e5b47c370/master/pass/Banyan%20Tree%20AlUla%20_LEDE%20%20MND_7247(2).jpg"
                alt="Historical Saudi Arabia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sand-700">A Journey Through Time</h3>
              <p className="text-lg">
                Saudi Arabia's history spans thousands of years, with influences from ancient Nabataean civilizations,
                Islamic empires, and Bedouin traditions. Each era has left its mark on this incredible land.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">AlUla</h4>
                  <p>Ancient Nabataean city with stunning tombs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">Diriyah</h4>
                  <p>Birthplace of the Saudi state</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">Jeddah</h4>
                  <p>Historic Red Sea port city</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-sand-600">Medina</h4>
                  <p>Second holiest city in Islam</p>
                </div>
              </div>
              <BubbleButton asChild>
                <Link href="/destinations">Explore Historical Sites</Link>
              </BubbleButton>
            </div>
          </div>
        </div>
      </section>

      <FeaturedDestinations />

      <section className="py-16 md:py-24 bg-gradient-to-b from-sand-50 to-white overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200">Tour Duration</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">Choose Your Perfect Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for a quick getaway or an extended adventure, we have the perfect tour duration for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <div className="h-40 bg-gradient-to-r from-sand-400 to-desert-400 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">5 Days</h3>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-sand-700">Quick Explorer</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Perfect for travelers with limited time who want to see the highlights of Saudi Arabia.
                </p>
                <BubbleButton asChild variant="outline" className="w-full">
                  <Link href="/tours?duration=5">View 5-Day Tours</Link>
                </BubbleButton>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <div className="h-40 bg-gradient-to-r from-desert-400 to-sand-400 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">7 Days</h3>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-sand-700">Classic Journey</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Our most popular duration, balancing comprehensive experiences with reasonable time.
                </p>
                <BubbleButton asChild variant="outline" className="w-full">
                  <Link href="/tours?duration=7">View 7-Day Tours</Link>
                </BubbleButton>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <div className="h-40 bg-gradient-to-r from-sand-500 to-desert-500 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">10 Days</h3>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-sand-700">Complete Experience</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  The ultimate Saudi Arabia journey with time to experience everything at a relaxed pace.
                </p>
                <BubbleButton asChild variant="outline" className="w-full">
                  <Link href="/tours?duration=10">View 10-Day Tours</Link>
                </BubbleButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sand-50 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sand-100 text-sand-700 hover:bg-sand-200">Travel Tips</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sand-800">Prepare for Your Saudi Adventure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Make the most of your journey with these helpful tips and insights about traveling in Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TravelTipCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGRtFCHa_y32-acqa9Omx_7JmYKhh-D94hA&s"
              title="Cultural Etiquette"
              description="Saudi Arabia is a welcoming country with rich traditions. Learn about local customs and etiquette to enhance your experience."
            />

            <TravelTipCard
              image="https://www.newarab.com/sites/default/files/1245050999.jpeg"
              title="Weather & Packing"
              description="Saudi Arabia's climate varies by region and season. Find out what to pack and when to visit for ideal conditions."
            />

            <TravelTipCard
              image="https://www.abouther.com/sites/default/files/2018/08/08/main123456789.jpg"
              title="Cuisine & Dining"
              description="Saudi cuisine offers delicious flavors and unique dishes. Discover what to try during your visit."
            />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  )
}

function ModernRenaissanceCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "https://gulfbusiness.com/wp-content/uploads/2023/05/Saudi-Arabia-tourism.-Image-by-Getty-Images.jpeg",
      alt: "Modern Saudi Arabia - NEOM and Vision 2030",
    },
    {
      src: "https://www.domusweb.it/content/dam/domusweb/it/news/2025/02/17/neom-gli-ultimi-aggiornamenti-sulla-citt-del-futuro-in-arabia-saudita/domushidden-marina-34.jpg.foto.rbig.jpg",
      alt: "NEOM - The Line futuristic city",
    },
    {
      src: "https://www.visitredsea.com/content/dam/red-sea/en/master/resort/nujuma/Nujuma-headerx.jpg/jcr:content/renditions/cq5dam.web.2880.0.webp?ts=1737819581611",
      alt: "Red Sea Project - Luxury resort destination",
    },
  ]

  // Auto-switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl bg-sand-100">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      ))}

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Separate component for travel tip cards
function TravelTipCard({ image, title, description }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 bg-sand-100">
        {!isImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-sand-100 via-sand-200 to-sand-100 bg-[length:400%_100%]" />
        )}

        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover ${isImageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setIsImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-sand-700">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <BubbleButton asChild variant="outline" className="w-full">
          <Link href="/travel-tips">Read More</Link>
        </BubbleButton>
      </CardContent>
    </Card>
  )
}
