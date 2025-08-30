import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, MapPin, Clock, Users, Camera, Mountain, Utensils, Car } from "lucide-react"
import TourCard from "@/components/tour-card"

// Saudi destinations data
const destinations = {
  riyadh: {
    name: "Riyadh",
    description: "The vibrant capital of Saudi Arabia, where modern skyscrapers meet traditional architecture",
    longDescription:
      "Riyadh, the capital and largest city of Saudi Arabia, is a fascinating blend of ancient heritage and modern innovation. Home to over 7 million people, this bustling metropolis offers visitors a unique glimpse into both traditional Saudi culture and the kingdom's ambitious vision for the future. From the historic Diriyah district to the towering Kingdom Centre, Riyadh presents an unforgettable urban experience.",
    image: "/images/riyadh-skyline.png",
    heroImage: "/images/riyadh-hero.png",
    highlights: [
      "Kingdom Centre Tower and Sky Bridge",
      "Historic Diriyah UNESCO World Heritage Site",
      "National Museum of Saudi Arabia",
      "Masmak Fortress",
      "King Abdulaziz Historical Center",
      "Al Murabba Palace",
      "Souq Al Zal Traditional Market",
      "Edge of the World (Jebel Fihrayn)",
    ],
    bestTimeToVisit: "November to March",
    averageTemperature: "15-25°C (Winter), 35-45°C (Summer)",
    activities: ["Historical Tours", "Shopping", "Desert Excursions", "Cultural Experiences"],
    cuisine: ["Kabsa", "Mandi", "Jareesh", "Ma'amoul"],
    transportation: ["Metro System", "Taxis", "Car Rentals", "Buses"],
    coordinates: [24.7136, 46.6753],
  },
  "edge-of-world": {
    name: "Edge of the World",
    description: "A breathtaking cliff formation offering spectacular views of the endless horizon",
    longDescription:
      "The Edge of the World (Jebel Fihrayn) is one of Saudi Arabia's most spectacular natural wonders, located about 90 kilometers northwest of Riyadh. This dramatic cliff formation rises 300 meters above the surrounding plains, offering visitors breathtaking panoramic views that stretch to the horizon. The site is part of the larger Tuwaiq Escarpment and provides an unforgettable experience of Saudi Arabia's raw natural beauty and geological history.",
    image: "/images/edge-of-world.png",
    heroImage: "/images/edge-of-world-hero.png",
    highlights: [
      "Dramatic 300-meter cliff views",
      "Tuwaiq Escarpment geological formations",
      "Sunset and sunrise viewing points",
      "Fossil discoveries in rock formations",
      "Desert camping experiences",
      "Photography opportunities",
      "Hiking trails along the escarpment",
      "Star gazing at night",
    ],
    bestTimeToVisit: "October to April",
    averageTemperature: "10-20°C (Winter), 30-40°C (Summer)",
    activities: ["Hiking", "Photography", "Desert Camping", "Stargazing"],
    cuisine: ["Packed Meals", "Traditional Bedouin Food", "Dates", "Arabic Coffee"],
    transportation: ["4WD Vehicles", "Guided Tours", "Private Cars", "Hiking"],
    coordinates: [24.9167, 46.1333],
  },
  diriyah: {
    name: "Diriyah",
    description: "The birthplace of the Saudi Kingdom and a UNESCO World Heritage Site",
    longDescription:
      "Diriyah, located on the outskirts of Riyadh, is the historic home of the Saudi royal family and the birthplace of the first Saudi state. This UNESCO World Heritage Site represents the cradle of the Kingdom of Saudi Arabia and showcases traditional Najdi architecture. The At-Turaif district, with its mud-brick buildings and narrow alleyways, offers visitors a journey through Saudi Arabia's founding history and cultural heritage.",
    image: "/images/diriyah.png",
    heroImage: "/images/diriyah-hero.png",
    highlights: [
      "At-Turaif UNESCO World Heritage Site",
      "Salwa Palace ruins",
      "Traditional Najdi architecture",
      "Diriyah Museum",
      "Historic mosques and buildings",
      "Wadi Hanifah views",
      "Cultural performances",
      "Traditional crafts workshops",
    ],
    bestTimeToVisit: "November to March",
    averageTemperature: "15-25°C (Winter), 35-45°C (Summer)",
    activities: ["Historical Tours", "Cultural Experiences", "Architecture Photography", "Museum Visits"],
    cuisine: ["Traditional Najdi Dishes", "Kabsa", "Jareesh", "Ma'amoul"],
    transportation: ["Car Rentals", "Taxis", "Guided Tours", "Walking Tours"],
    coordinates: [24.7324, 46.5692],
  },
  "red-sea": {
    name: "Red Sea Coast",
    description: "Pristine coral reefs, luxury resorts, and world-class diving destinations",
    longDescription:
      "Saudi Arabia's Red Sea Coast is emerging as one of the world's premier luxury tourism destinations. With over 450 kilometers of pristine coastline, the region boasts some of the most untouched coral reefs on the planet, crystal-clear waters, and diverse marine life. The ambitious Red Sea Project is developing sustainable luxury resorts while preserving the natural environment, making it a perfect destination for eco-luxury tourism.",
    image: "/images/red-sea.png",
    heroImage: "/images/red-sea-hero.png",
    highlights: [
      "Pristine coral reefs",
      "Luxury eco-resorts",
      "World-class diving sites",
      "Untouched islands",
      "Marine wildlife sanctuary",
      "Sustainable tourism projects",
      "Water sports activities",
      "Desert-meets-sea landscapes",
    ],
    bestTimeToVisit: "October to April",
    averageTemperature: "20-30°C (Winter), 30-40°C (Summer)",
    activities: ["Scuba Diving", "Snorkeling", "Water Sports", "Island Hopping"],
    cuisine: ["Fresh Seafood", "International Cuisine", "Traditional Arabian", "Coastal Specialties"],
    transportation: ["Seaplanes", "Boats", "4WD Vehicles", "Helicopter Tours"],
    coordinates: [22.3964, 39.0404],
  },
  "eastern-province": {
    name: "Eastern Province",
    description: "The oil-rich region with modern cities, cultural heritage, and Gulf coastline",
    longDescription:
      "The Eastern Province of Saudi Arabia is the kingdom's largest province and the heart of its oil industry. Home to modern cities like Dammam, Dhahran, and Al Khobar, the region combines industrial significance with rich cultural heritage. The province features beautiful Gulf coastlines, traditional markets, modern shopping centers, and important historical sites, offering visitors a unique blend of contemporary Saudi life and ancient traditions.",
    image: "/images/eastern-province.png",
    heroImage: "/images/eastern-province-hero.png",
    highlights: [
      "King Fahd Causeway to Bahrain",
      "Al Khobar Corniche",
      "Tarout Island historical sites",
      "Dhahran Hills Park",
      "Traditional souqs in Qatif",
      "Modern shopping malls",
      "Oil industry heritage sites",
      "Gulf coastline beaches",
    ],
    bestTimeToVisit: "November to March",
    averageTemperature: "18-28°C (Winter), 35-45°C (Summer)",
    activities: ["City Tours", "Beach Activities", "Shopping", "Cultural Experiences"],
    cuisine: ["Gulf Seafood", "Kabsa", "Machboos", "Traditional Sweets"],
    transportation: ["Taxis", "Car Rentals", "Buses", "Causeway Bridge"],
    coordinates: [26.4282, 50.0888],
  },
  makkah: {
    name: "Makkah",
    description: "The holiest city in Islam and the spiritual center for Muslims worldwide",
    longDescription:
      "Makkah (Mecca) is the holiest city in Islam and the birthplace of Prophet Muhammad. Home to the Great Mosque of Mecca and the Kaaba, it is the destination for the annual Hajj pilgrimage and the direction of prayer for Muslims worldwide. The city has undergone massive development to accommodate millions of pilgrims while preserving its spiritual significance and Islamic heritage.",
    image: "/images/makkah.png",
    heroImage: "/images/makkah-hero.png",
    highlights: [
      "The Great Mosque (Masjid al-Haram)",
      "The Kaaba",
      "Abraj Al-Bait Clock Tower",
      "Mount Arafat",
      "Jabal al-Nour (Cave of Hira)",
      "Mina and Muzdalifah",
      "Zamzam Well",
      "Islamic museums and heritage sites",
    ],
    bestTimeToVisit: "November to March",
    averageTemperature: "20-30°C (Winter), 35-45°C (Summer)",
    activities: ["Religious Pilgrimage", "Islamic Heritage Tours", "Spiritual Experiences", "Historical Sites"],
    cuisine: ["Traditional Arabian Dishes", "International Halal Cuisine", "Dates", "Zamzam Water"],
    transportation: ["Haramain High-Speed Railway", "Buses", "Taxis", "Walking"],
    coordinates: [21.3891, 39.8579],
  },
  tabuk: {
    name: "Tabuk",
    description: "A northern gateway with ancient history, stunning landscapes, and archaeological wonders",
    longDescription:
      "Tabuk, located in northwestern Saudi Arabia, is a region of diverse landscapes and rich history. From the ancient Nabataean city of Tayma to the stunning rock formations of Wadi Al-Disah, Tabuk offers visitors a journey through millennia of human civilization. The region features dramatic mountains, lush oases, archaeological sites, and is becoming increasingly popular for adventure tourism and cultural exploration.",
    image: "/images/tabuk.png",
    heroImage: "/images/tabuk-hero.png",
    highlights: [
      "Ancient city of Tayma",
      "Wadi Al-Disah (Valley of Palm Trees)",
      "Tabuk Castle",
      "Al-Bad' (Magna) archaeological site",
      "Jabal Al-Lawz mountains",
      "Red Sea coastline access",
      "Rock art and petroglyphs",
      "Traditional oasis settlements",
    ],
    bestTimeToVisit: "October to April",
    averageTemperature: "10-20°C (Winter), 25-35°C (Summer)",
    activities: ["Archaeological Tours", "Mountain Hiking", "Desert Safari", "Cultural Exploration"],
    cuisine: ["Bedouin Traditional Food", "Dates", "Camel Milk", "Mountain Herbs"],
    transportation: ["Car Rentals", "4WD Vehicles", "Guided Tours", "Domestic Flights"],
    coordinates: [28.3998, 36.57],
  },
  alula: {
    name: "AlUla",
    description: "An ancient oasis city home to spectacular rock formations and archaeological wonders",
    longDescription:
      "AlUla is Saudi Arabia's crown jewel of archaeological and natural wonders. This ancient oasis city, located in the northwest of the kingdom, has been a crossroads of civilizations for thousands of years. Home to the magnificent Hegra (Mada'in Salih), Saudi Arabia's first UNESCO World Heritage Site, AlUla offers visitors an extraordinary journey through time, showcasing Nabataean tombs, ancient trade routes, and breathtaking desert landscapes.",
    image: "/images/alula-landscape.png",
    heroImage: "/images/alula-hero.png",
    highlights: [
      "Hegra (Mada'in Salih) UNESCO World Heritage Site",
      "Elephant Rock (Jabal AlFil)",
      "AlUla Old Town",
      "Dadan Ancient City",
      "Jabal Ikmah Open Library",
      "Maraya Concert Hall",
      "Desert X AlUla Art Installation",
      "AlUla Oasis",
    ],
    bestTimeToVisit: "October to April",
    averageTemperature: "10-20°C (Winter), 30-40°C (Summer)",
    activities: ["Archaeological Tours", "Rock Climbing", "Stargazing", "Desert Safari"],
    cuisine: ["Traditional Bedouin Dishes", "Dates", "Camel Milk", "Desert Herbs"],
    transportation: ["Tour Buses", "4WD Vehicles", "Helicopter Tours", "Camel Trekking"],
    coordinates: [26.6094, 37.9217],
  },
  jeddah: {
    name: "Jeddah",
    description: "The gateway to Mecca and a vibrant coastal city with rich maritime heritage",
    longDescription:
      "Jeddah, known as the 'Bride of the Red Sea,' is Saudi Arabia's second-largest city and its principal gateway to the holy cities of Mecca and Medina. This cosmopolitan port city beautifully blends its rich Islamic heritage with modern urban development. The historic Al-Balad district, a UNESCO World Heritage Site, showcases traditional Hijazi architecture, while the modern waterfront offers world-class dining, shopping, and entertainment.",
    image: "/images/jeddah-corniche.png",
    heroImage: "/images/jeddah-hero.png",
    highlights: [
      "Historic Al-Balad UNESCO World Heritage Site",
      "King Fahd Fountain",
      "Jeddah Corniche",
      "Floating Mosque",
      "Red Sea Mall",
      "Abdul Raouf Khalil Museum",
      "Jeddah Sculpture Museum",
      "Traditional Souqs",
    ],
    bestTimeToVisit: "November to March",
    averageTemperature: "20-30°C (Winter), 30-40°C (Summer)",
    activities: ["Historical Walking Tours", "Red Sea Diving", "Shopping", "Cultural Experiences"],
    cuisine: ["Mandi", "Kabsa", "Ful Medames", "Fresh Seafood"],
    transportation: ["Taxis", "Uber/Careem", "Car Rentals", "Public Buses"],
    coordinates: [21.4858, 39.1925],
  },
  medina: {
    name: "Medina",
    description: "The second holiest city in Islam, rich in Islamic history and spiritual significance",
    longDescription:
      "Medina, officially known as Al-Madinah Al-Munawwarah (The Enlightened City), is the second holiest city in Islam and holds profound spiritual significance for Muslims worldwide. It was here that Prophet Muhammad established the first Islamic community and is buried in the Prophet's Mosque. While primarily a pilgrimage destination, Medina also offers visitors insights into early Islamic history and beautiful Islamic architecture.",
    image: "/images/medina-mosque.png",
    heroImage: "/images/medina-hero.png",
    highlights: [
      "Prophet's Mosque (Al-Masjid an-Nabawi)",
      "Quba Mosque",
      "Mount Uhud",
      "Jannat al-Baqi Cemetery",
      "Islamic University of Medina",
      "Dar Al Madinah Museum",
      "Al-Madinah Museum",
      "Traditional Markets",
    ],
    bestTimeToVisit: "November to March",
    averageTemperature: "15-25°C (Winter), 35-45°C (Summer)",
    activities: ["Religious Tours", "Historical Sites", "Islamic Architecture", "Cultural Learning"],
    cuisine: ["Traditional Arabian Dishes", "Dates", "Zamzam Water", "Local Sweets"],
    transportation: ["Haramain High-Speed Railway", "Taxis", "Buses", "Walking"],
    coordinates: [24.4539, 39.604],
  },
  taif: {
    name: "Taif",
    description: "The summer capital known for its cool climate, roses, and mountain scenery",
    longDescription:
      "Taif, known as the 'City of Roses,' is a mountainous city located in the Sarawat Mountains of western Saudi Arabia. Famous for its pleasant climate, beautiful rose gardens, and agricultural terraces, Taif serves as a popular summer retreat. The city is renowned for its rose water production, honey, and traditional crafts, offering visitors a refreshing escape from the desert heat.",
    image: "/images/taif-roses.png",
    heroImage: "/images/taif-hero.png",
    highlights: [
      "Taif Rose Gardens",
      "Al-Rudaf Park",
      "Shubra Palace",
      "Al-Hada Mountain",
      "Souq Okaz",
      "Al-Kar Tourist Village",
      "Traditional Rose Water Factories",
      "Cable Car Rides",
    ],
    bestTimeToVisit: "April to October",
    averageTemperature: "15-25°C (Summer), 5-15°C (Winter)",
    activities: ["Rose Garden Tours", "Mountain Hiking", "Cable Car Rides", "Traditional Crafts"],
    cuisine: ["Honey", "Rose Water", "Mountain Fruits", "Traditional Sweets"],
    transportation: ["Car Rentals", "Taxis", "Cable Cars", "Walking Tours"],
    coordinates: [21.2703, 40.4158],
  },
  abha: {
    name: "Abha",
    description: "The jewel of the south with lush green mountains and cool climate",
    longDescription:
      "Abha, the capital of the Asir Province, is often called the 'Bride of the Mountain' due to its stunning location in the Sarawat Mountains. This high-altitude city offers a dramatically different landscape from the rest of Saudi Arabia, with lush green terraces, cool temperatures, and traditional stone architecture. Abha is a gateway to exploring the diverse ecosystems and rich cultural heritage of southern Saudi Arabia.",
    image: "/images/abha-mountains.png",
    heroImage: "/images/abha-hero.png",
    highlights: [
      "Asir National Park",
      "Jabal Sawda (Highest Peak)",
      "Habala Hanging Village",
      "Al-Muftaha Village",
      "Rijal Almaa Heritage Village",
      "Green Mountain (Al-Jabal Al-Akhdar)",
      "Asir Regional Museum",
      "Traditional Architecture",
    ],
    bestTimeToVisit: "March to October",
    averageTemperature: "15-25°C (Summer), 5-15°C (Winter)",
    activities: ["Mountain Hiking", "Village Tours", "Photography", "Cultural Experiences"],
    cuisine: ["Asiri Honey", "Mountain Vegetables", "Traditional Bread", "Herbal Teas"],
    transportation: ["Car Rentals", "4WD Vehicles", "Cable Cars", "Hiking"],
    coordinates: [18.2164, 42.5047],
  },
}

// Helper function to get tour description based on destination
function getTourDescription(destination: string, tourType: string): string {
  const descriptions = {
    cultural: `Immerse yourself in the rich cultural heritage of ${destination}, exploring historical sites, traditional architecture, and local customs.`,
    adventure: `Experience thrilling adventures in ${destination}, from outdoor activities to unique natural landscapes and exciting excursions.`,
    luxury: `Enjoy a premium experience in ${destination} with luxury accommodations, exclusive access, and personalized service.`,
    family: `Perfect for families visiting ${destination}, with activities and attractions suitable for all ages and interests.`,
  }
  return (
    descriptions[tourType as keyof typeof descriptions] ||
    `Discover the wonders of ${destination} with this carefully crafted tour experience.`
  )
}

// Helper function to get tour category
function getTourCategory(tourType: string): string[] {
  const categories = {
    cultural: ["cultural"],
    adventure: ["adventure"],
    luxury: ["luxury", "cultural"],
    family: ["standard", "family"],
  }
  return categories[tourType as keyof typeof categories] || ["standard"]
}

// Sample tours for each destination
function getDestinationTours(destinationSlug: string, destinationName: string) {
  // Map of actual existing tours by destination - only real tours that exist
  const existingTours: { [key: string]: any[] } = {
    alula: [
      {
        id: "alula-hegra-explorer",
        title: "AlUla Hegra Explorer",
        slug: "alula-hegra-explorer",
        description: "Explore the magnificent Hegra archaeological site and AlUla's ancient wonders",
        duration: 4,
        price: 1299,
        image: "/images/alula-hegra.png",
        rating: 4.9,
        reviewCount: 156,
        groupSize: 12,
        category: ["cultural"],
        destinations: ["alula"],
        featured: true,
      },
    ],
    "red-sea": [
      {
        id: "red-sea-adventure",
        title: "Red Sea Adventure",
        slug: "red-sea-adventure",
        description: "Discover pristine coral reefs and luxury coastal experiences",
        duration: 6,
        price: 1899,
        image: "/images/red-sea-diving.png",
        rating: 4.8,
        reviewCount: 124,
        groupSize: 8,
        category: ["adventure"],
        destinations: ["red-sea"],
        featured: true,
      },
    ],
    // Only show real existing Saudi tours for other destinations
    default: [
      {
        id: "saudi-5d-mixed-explorer",
        title: "Saudi Arabia 5 Days Mixed Explorer",
        slug: "saudi-5d-mixed-explorer",
        description: "Experience the best of Saudi Arabia's culture and adventure",
        duration: 5,
        price: 1299,
        image: "/images/saudi-mixed-explorer.png",
        rating: 4.8,
        reviewCount: 198,
        groupSize: 12,
        category: ["cultural", "adventure"],
        destinations: ["riyadh", "alula"],
        featured: true,
      },
      {
        id: "saudi-5d-history-culture",
        title: "Saudi Arabia 5 Days History & Culture",
        slug: "saudi-5d-history-culture",
        description: "Immerse yourself in Saudi Arabia's rich cultural heritage",
        duration: 5,
        price: 1199,
        image: "/images/saudi-history-culture.png",
        rating: 4.7,
        reviewCount: 142,
        groupSize: 15,
        category: ["cultural"],
        destinations: ["riyadh", "diriyah"],
        featured: false,
      },
      {
        id: "best-of-saudi-arabia",
        title: "Best of Saudi Arabia",
        slug: "best-of-saudi-arabia",
        description: "Discover the highlights of the Kingdom in one comprehensive tour",
        duration: 10,
        price: 2499,
        image: "https://www.leaders-mena.com/leaders/uploads/2024/01/1686470249536.jpg",
        rating: 4.9,
        reviewCount: 89,
        groupSize: 16,
        category: ["cultural", "adventure"],
        destinations: ["riyadh", "alula", "jeddah"],
        featured: false,
      },
    ],
  }

  // Return destination-specific tours or default Saudi tours
  return existingTours[destinationSlug] || existingTours.default
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations[params.slug as keyof typeof destinations]

  if (!destination) {
    notFound()
  }

  const tours = getDestinationTours(params.slug, destination.name)

  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/destinations" className="hover:underline">
            Destinations
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>{destination.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
              <p className="text-lg md:text-xl opacity-90">{destination.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{destination.longDescription}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Top Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Popular Activities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      {index === 0 && <Camera className="h-6 w-6 text-primary" />}
                      {index === 1 && <Mountain className="h-6 w-6 text-primary" />}
                      {index === 2 && <Car className="h-6 w-6 text-primary" />}
                      {index === 3 && <Users className="h-6 w-6 text-primary" />}
                    </div>
                    <span className="text-sm font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tours */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Tours to {destination.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Best Time to Visit</div>
                      <div className="text-sm text-muted-foreground">{destination.bestTimeToVisit}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-primary rounded-full mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Average Temperature</div>
                      <div className="text-sm text-muted-foreground">{destination.averageTemperature}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Cuisine */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Utensils className="h-5 w-5" />
                  Local Cuisine
                </h3>
                <div className="space-y-2">
                  {destination.cuisine.map((dish, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {dish}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Transportation
                </h3>
                <div className="space-y-2">
                  {destination.transportation.map((transport, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {transport}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Ready to Explore?</h3>
                <p className="text-sm opacity-90 mb-4">Start planning your journey to {destination.name}</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/start-planning">Plan Your Trip</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
