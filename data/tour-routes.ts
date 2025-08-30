export interface TourRoute {
  id: string
  name: string
  description: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  highlights: string[]
  coordinates: [number, number][]
  startLocation: string
  endLocation: string
  price: number
  image: string
}

export const tourRoutes: TourRoute[] = [
  {
    id: "alula-heritage-circuit",
    name: "AlUla Heritage Circuit",
    description: "Explore the ancient Nabataean city of Hegra and the stunning rock formations of AlUla.",
    duration: "5 days",
    difficulty: "Easy",
    highlights: [
      "Hegra Archaeological Site",
      "Elephant Rock",
      "AlUla Old Town",
      "Maraya Concert Hall",
      "Dadan Ancient City",
    ],
    coordinates: [
      [26.6094, 37.9217], // AlUla
      [26.7856, 37.9547], // Hegra
      [26.6333, 37.8833], // Elephant Rock
      [26.5833, 37.9167], // Dadan
      [26.6094, 37.9217], // Return to AlUla
    ],
    startLocation: "AlUla",
    endLocation: "AlUla",
    price: 1299,
    image: "/images/alula-heritage-circuit.png",
  },
  {
    id: "riyadh-to-edge-of-world",
    name: "Riyadh to Edge of the World",
    description: "Journey from the modern capital to the dramatic cliffs of Jebel Fihrayn.",
    duration: "3 days",
    difficulty: "Moderate",
    highlights: [
      "Riyadh City Tour",
      "Diriyah Historic District",
      "Edge of the World Cliffs",
      "Desert Camping",
      "Camel Riding",
    ],
    coordinates: [
      [24.7136, 46.6753], // Riyadh
      [24.7324, 46.5704], // Diriyah
      [25.0833, 45.8333], // Edge of the World
      [24.7136, 46.6753], // Return to Riyadh
    ],
    startLocation: "Riyadh",
    endLocation: "Riyadh",
    price: 899,
    image: "/images/riyadh-edge-world.png",
  },
  {
    id: "red-sea-coastal-adventure",
    name: "Red Sea Coastal Adventure",
    description: "Discover the pristine waters and coral reefs of Saudi Arabia's Red Sea coast.",
    duration: "7 days",
    difficulty: "Easy",
    highlights: ["NEOM Future City", "Yanbu Historic Port", "Farasan Islands", "Coral Reef Diving", "Red Sea Beaches"],
    coordinates: [
      [21.4858, 39.1925], // Jeddah
      [24.0896, 38.0618], // Yanbu
      [28.0, 34.4333], // NEOM area
      [16.7, 42.1167], // Farasan Islands
      [21.4858, 39.1925], // Return to Jeddah
    ],
    startLocation: "Jeddah",
    endLocation: "Jeddah",
    price: 1799,
    image: "https://www.arabianbusiness.com/wp-content/uploads/sites/3/cloud/2022/12/06/Red-Sea-Grand-Hyatt.jpg",
  },
  {
    id: "asir-mountains-trek",
    name: "Asir Mountains Trek",
    description: "Hike through the green highlands of southwestern Saudi Arabia.",
    duration: "6 days",
    difficulty: "Challenging",
    highlights: ["Jabal Sawda Peak", "Abha City", "Rijal Almaa Village", "Habala Hanging Village", "Al-Baha Forests"],
    coordinates: [
      [18.2164, 42.5047], // Abha
      [18.2667, 42.3667], // Jabal Sawda
      [17.9333, 42.2333], // Rijal Almaa
      [18.1167, 42.4], // Habala
      [20.0129, 41.4687], // Al-Baha
      [18.2164, 42.5047], // Return to Abha
    ],
    startLocation: "Abha",
    endLocation: "Abha",
    price: 1599,
    image: "/images/asir-mountains.png",
  },
  {
    id: "eastern-province-oasis",
    name: "Eastern Province Oasis Tour",
    description: "Explore the oil-rich Eastern Province and its historic oases.",
    duration: "4 days",
    difficulty: "Easy",
    highlights: [
      "Al-Ahsa Oasis",
      "Qatif Historic Sites",
      "Dammam Corniche",
      "King Fahd Causeway",
      "Traditional Markets",
    ],
    coordinates: [
      [26.3927, 49.9777], // Dammam
      [25.4167, 49.6167], // Al-Ahsa
      [26.5667, 49.9667], // Qatif
      [26.2361, 50.0444], // Khobar
      [26.3927, 49.9777], // Return to Dammam
    ],
    startLocation: "Dammam",
    endLocation: "Dammam",
    price: 1099,
    image: "/images/eastern-province.png",
  },
  {
    id: "northern-borders-expedition",
    name: "Northern Borders Expedition",
    description: "Venture into Saudi Arabia's northern frontiers and ancient sites.",
    duration: "8 days",
    difficulty: "Moderate",
    highlights: ["Sakaka Rock Art", "Dumat Al-Jandal", "Rajajil Stone Columns", "Al-Jouf Oasis", "Desert Landscapes"],
    coordinates: [
      [29.9697, 40.2064], // Sakaka
      [29.8167, 39.8667], // Dumat Al-Jandal
      [29.7833, 40.1], // Rajajil
      [29.7833, 39.95], // Al-Jouf
      [29.9697, 40.2064], // Return to Sakaka
    ],
    startLocation: "Sakaka",
    endLocation: "Sakaka",
    price: 1699,
    image: "/images/northern-borders.png",
  },
  {
    id: "grand-saudi-circuit",
    name: "Grand Saudi Circuit",
    description: "The ultimate Saudi Arabia experience covering all major regions.",
    duration: "14 days",
    difficulty: "Moderate",
    highlights: [
      "All Major Cities",
      "UNESCO World Heritage Sites",
      "Desert and Mountain Landscapes",
      "Red Sea Coast",
      "Cultural Immersion",
    ],
    coordinates: [
      [24.7136, 46.6753], // Riyadh (start)
      [26.6094, 37.9217], // AlUla
      [21.4858, 39.1925], // Jeddah
      [18.2164, 42.5047], // Abha
      [26.3927, 49.9777], // Dammam
      [29.9697, 40.2064], // Sakaka
      [24.7136, 46.6753], // Return to Riyadh
    ],
    startLocation: "Riyadh",
    endLocation: "Riyadh",
    price: 2999,
    image: "/images/grand-saudi-circuit.png",
  },
  {
    id: "desert-adventure-trail",
    name: "Desert Adventure Trail",
    description: "Experience the vast deserts of Saudi Arabia including the Empty Quarter.",
    duration: "10 days",
    difficulty: "Challenging",
    highlights: [
      "Rub' al Khali (Empty Quarter)",
      "Red Sand Dunes",
      "Bedouin Culture",
      "Desert Camping",
      "Camel Trekking",
    ],
    coordinates: [
      [24.7136, 46.6753], // Riyadh
      [23.0, 48.0], // Red Sand Dunes
      [19.0, 50.0], // Empty Quarter
      [22.0, 47.0], // Desert region
      [24.7136, 46.6753], // Return to Riyadh
    ],
    startLocation: "Riyadh",
    endLocation: "Riyadh",
    price: 2199,
    image: "/images/desert-adventure.png",
  },
]

export const getRouteById = (id: string): TourRoute | undefined => {
  return tourRoutes.find((route) => route.id === id)
}

export const getRoutesByDifficulty = (difficulty: TourRoute["difficulty"]): TourRoute[] => {
  return tourRoutes.filter((route) => route.difficulty === difficulty)
}

export const getRoutesByPriceRange = (minPrice: number, maxPrice: number): TourRoute[] => {
  return tourRoutes.filter((route) => route.price >= minPrice && route.price <= maxPrice)
}
