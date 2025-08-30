"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  HelpCircle,
  Plane,
  Shield,
  CreditCard,
  MapPin,
  Users,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqCategories = {
    visa: {
      title: "Visa & Entry",
      icon: Plane,
      faqs: [
        {
          question: "Do I need a visa to visit Saudi Arabia?",
          answer:
            "Most visitors need a visa. Saudi Arabia offers tourist visas for citizens of 49 eligible countries through eVisa (online) or visa on arrival. The tourist visa costs $80 USD, is valid for 1 year with multiple entries, and allows stays up to 90 days per visit. Check the official website visa.visitsaudi.com for the latest information and to apply.",
        },
        {
          question: "How long does it take to get a Saudi tourist visa?",
          answer:
            "eVisa applications are typically processed within 5-30 minutes for most applicants. However, some applications may take up to 24 hours. It's recommended to apply at least 3 days before your travel date to allow for any potential delays or additional documentation requests.",
        },
        {
          question: "What documents do I need for a Saudi visa?",
          answer:
            "You'll need: (1) A passport valid for at least 6 months from entry date, (2) A recent passport-style photograph, (3) Proof of accommodation (hotel booking), (4) Return flight ticket, (5) Travel insurance (recommended), and (6) Completed visa application form. Additional documents may be required based on your nationality.",
        },
        {
          question: "Can I extend my tourist visa in Saudi Arabia?",
          answer:
            "Tourist visas can be extended once for an additional 90 days through the Enjaz platform or Absher app. The extension must be applied for before your current visa expires and costs approximately 2,000 SAR. Extensions are not guaranteed and are subject to approval by Saudi authorities.",
        },
        {
          question: "Are there any restrictions on who can get a Saudi tourist visa?",
          answer:
            "Yes, tourist visas are currently available to citizens of 49 eligible countries. Some nationalities may need to apply through a Saudi embassy or consulate. Additionally, individuals with certain criminal backgrounds or those who have been previously banned from Saudi Arabia may be denied entry.",
        },
      ],
    },
    travel: {
      title: "Travel & Transportation",
      icon: MapPin,
      faqs: [
        {
          question: "What's the best way to get around Saudi Arabia?",
          answer:
            "For tourists, the best options are: (1) Domestic flights between major cities (Saudia, flynas), (2) Private car with driver for flexibility and comfort, (3) Ride-sharing apps like Uber and Careem in cities, (4) Car rental with international driving license, and (5) Public transport in Riyadh (metro) and other major cities. For longer distances, flights are most efficient.",
        },
        {
          question: "Is it safe to drive in Saudi Arabia as a tourist?",
          answer:
            "Yes, it's generally safe to drive in Saudi Arabia. You'll need an International Driving Permit along with your home country license. Roads are well-maintained, and traffic rules are similar to most countries. However, be aware that driving styles can be aggressive in cities, and desert driving requires experience and proper preparation.",
        },
        {
          question: "How much should I budget for transportation in Saudi Arabia?",
          answer:
            "Budget estimates: Domestic flights: $100-300 per flight, Private car with driver: $80-120 per day, Uber/Careem in cities: $5-15 per ride, Car rental: $40-80 per day plus fuel, Metro/public transport: $1-4 per trip. For a 7-day trip, budget $300-800 for transportation depending on your choices.",
        },
        {
          question: "Are ride-sharing apps available in Saudi Arabia?",
          answer:
            "Yes, Uber and Careem (now owned by Uber) are widely available in all major Saudi cities. Both apps work similarly to other countries - you can book rides, track drivers, and pay through the app. Careem is particularly popular and offers additional services like food delivery and payments.",
        },
        {
          question: "What should I know about traveling between cities in Saudi Arabia?",
          answer:
            "Saudi Arabia is a large country with significant distances between cities. Riyadh to Jeddah is about 950km (590 miles), taking 9-10 hours by car or 1.5 hours by flight. Plan accordingly and consider domestic flights for long distances. The road network is excellent, but desert driving requires preparation and experience.",
        },
      ],
    },
    culture: {
      title: "Culture & Customs",
      icon: Users,
      faqs: [
        {
          question: "What should I wear in Saudi Arabia?",
          answer:
            "Saudi Arabia has relaxed its dress code for tourists while maintaining respect for local customs. Women should wear modest clothing covering shoulders and knees - long pants, maxi dresses, or long skirts with sleeved tops. Men should wear long pants and shirts with sleeves. For religious sites, more conservative dress is required, and women should cover their hair.",
        },
        {
          question: "Can I take photos in Saudi Arabia?",
          answer:
            "Yes, photography is generally allowed at tourist attractions, landscapes, and public areas. However, always ask permission before photographing people, especially women. Avoid photographing government buildings, military installations, or private property. Many tourist sites now encourage photography and have designated photo spots.",
        },
        {
          question: "What are the prayer times and how do they affect tourists?",
          answer:
            "Muslims pray five times daily: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Some shops and restaurants may close briefly during prayer times, especially for Maghrib prayer. Most tourist attractions remain open, but it's good to be aware of prayer times when planning your day.",
        },
        {
          question: "Is alcohol available in Saudi Arabia?",
          answer:
            "No, alcohol is not available for purchase or consumption in Saudi Arabia. This includes hotels, restaurants, and duty-free shops. The country has strict laws regarding alcohol, and attempting to bring alcohol into the country can result in serious legal consequences. Non-alcoholic alternatives are widely available.",
        },
        {
          question: "How should I interact with local people in Saudi Arabia?",
          answer:
            "Saudis are known for their hospitality and friendliness toward tourists. Use 'As-salamu alaykum' (peace be upon you) as a greeting. Shake hands with people of the same gender. Show respect for elders and Islamic customs. Accept hospitality graciously if offered. Use your right hand for eating and greeting. Most Saudis speak some English, especially in tourist areas.",
        },
      ],
    },
    money: {
      title: "Money & Costs",
      icon: CreditCard,
      faqs: [
        {
          question: "What currency is used in Saudi Arabia and what's the exchange rate?",
          answer:
            "Saudi Arabia uses the Saudi Riyal (SAR), which is pegged to the US Dollar at approximately 3.75 SAR = 1 USD. This rate has been stable for many years. You can exchange money at banks, exchange offices, or withdraw from ATMs. Credit cards are widely accepted in hotels, restaurants, and shops.",
        },
        {
          question: "How much money should I budget for a trip to Saudi Arabia?",
          answer:
            "Daily budget estimates: Budget traveler: $50-80 (accommodation, meals, local transport), Mid-range: $100-200 (3-4 star hotels, restaurant meals, some tours), Luxury: $300+ (5-star hotels, fine dining, private tours). A 7-day trip typically costs $700-2,100 per person, excluding international flights.",
        },
        {
          question: "Are credit cards widely accepted in Saudi Arabia?",
          answer:
            "Yes, credit cards (Visa, Mastercard, American Express) are widely accepted in hotels, restaurants, shopping malls, and tourist attractions. Contactless payments and mobile payments (Apple Pay, Samsung Pay) are also common. However, carry some cash for small vendors, traditional markets, and tips.",
        },
        {
          question: "Should I tip in Saudi Arabia?",
          answer:
            "Tipping is appreciated but not mandatory. General guidelines: Restaurants: 10-15% if service charge not included, Hotels: 10-20 SAR for housekeeping, 20-50 SAR for concierge, Taxis/Drivers: Round up fare or 5-10 SAR, Tour guides: 50-100 SAR per day, depending on service quality.",
        },
        {
          question: "Where can I exchange money or withdraw cash in Saudi Arabia?",
          answer:
            "ATMs are widely available and accept international cards. Banks like NCB, Rajhi Bank, and SABB offer currency exchange. Exchange offices are found in airports, malls, and city centers. Hotels may also exchange money but usually at less favorable rates. Notify your bank before traveling to avoid card blocks.",
        },
      ],
    },
    safety: {
      title: "Safety & Health",
      icon: Shield,
      faqs: [
        {
          question: "Is Saudi Arabia safe for tourists?",
          answer:
            "Yes, Saudi Arabia is considered very safe for tourists. The country has low crime rates, excellent healthcare, and a strong focus on tourist safety. Tourist police are available in major destinations. However, like any destination, use common sense: keep valuables secure, stay aware of your surroundings, and follow local laws and customs.",
        },
        {
          question: "What vaccinations do I need for Saudi Arabia?",
          answer:
            "No routine vaccinations are required for most travelers to Saudi Arabia. However, if you're coming from a yellow fever endemic area, you'll need a yellow fever certificate. COVID-19 requirements may apply depending on current regulations. Consult your doctor or a travel clinic 4-6 weeks before travel for personalized advice.",
        },
        {
          question: "What should I do in case of emergency in Saudi Arabia?",
          answer:
            "Emergency numbers: General emergency: 911, Police: 999, Fire: 998, Ambulance: 997, Tourist Police: 989. Keep your embassy contact information handy. Most hospitals have English-speaking staff. Travel insurance is highly recommended to cover medical expenses and emergency evacuation if needed.",
        },
        {
          question: "Is the tap water safe to drink in Saudi Arabia?",
          answer:
            "Tap water in major cities is generally safe to drink as it meets international standards. However, many visitors prefer bottled water due to taste preferences and to avoid any stomach upset. Bottled water is widely available and inexpensive. In remote areas, stick to bottled or properly filtered water.",
        },
        {
          question: "What health precautions should I take in Saudi Arabia?",
          answer:
            "Key health tips: Stay hydrated, especially in hot weather; Use sunscreen and protective clothing; Be cautious with street food initially; Carry basic medications; Get travel insurance; Know location of nearest hospital; Respect your physical limits in hot weather. The healthcare system is excellent, with many English-speaking medical professionals.",
        },
      ],
    },
    planning: {
      title: "Trip Planning",
      icon: Calendar,
      faqs: [
        {
          question: "When is the best time to visit Saudi Arabia?",
          answer:
            "The best time to visit Saudi Arabia is during the cooler months from November to March, when temperatures range from 15-30°C (59-86°F). This is ideal for outdoor activities and sightseeing. April and October are also good but warmer. Summer months (May-September) are very hot (35-45°C+) but suitable for indoor attractions and early morning/late evening activities.",
        },
        {
          question: "How many days do I need to see Saudi Arabia?",
          answer:
            "Minimum recommendations: 3-4 days for one city (Riyadh or Jeddah), 5-7 days for 2-3 destinations (e.g., Riyadh, AlUla, Jeddah), 10-14 days for comprehensive tour including multiple regions. First-time visitors often choose 7-10 days to see major highlights without rushing. Consider travel time between destinations when planning.",
        },
        {
          question: "What are the must-see destinations in Saudi Arabia?",
          answer:
            "Top destinations: (1) AlUla - UNESCO World Heritage site with Nabataean tombs, (2) Riyadh - modern capital with museums and culture, (3) Jeddah - historic Red Sea port with Al-Balad UNESCO site, (4) Edge of the World - dramatic cliff formations, (5) Diriyah - birthplace of Saudi state, (6) Red Sea coast - pristine beaches and diving, (7) Abha - mountain scenery in the south.",
        },
        {
          question: "Do I need a tour guide or can I travel independently in Saudi Arabia?",
          answer:
            "Both options are possible. Independent travel is increasingly easy with good infrastructure, English signage, and ride-sharing apps. However, guided tours offer valuable cultural insights, language assistance, and access to experiences you might miss alone. Many visitors choose a mix - guided tours for cultural sites and independent time for personal exploration.",
        },
        {
          question: "What should I pack for a trip to Saudi Arabia?",
          answer:
            "Essential items: Modest clothing covering shoulders and knees, comfortable walking shoes, sun protection (hat, sunglasses, sunscreen), light jacket for air conditioning and cool evenings, power adapter (Type G), any prescription medications, travel insurance documents, and copies of important documents. Pack according to the season and planned activities.",
        },
      ],
    },
  }

  const allFAQs = Object.values(faqCategories).flatMap((category) =>
    category.faqs.map((faq) => ({ ...faq, category: category.title })),
  )

  const filteredFAQs = searchTerm
    ? allFAQs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Find answers to common questions about traveling to Saudi Arabia. From visa requirements to cultural
            customs, we've got you covered with comprehensive information for your journey.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-purple-200 focus:border-purple-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-purple-600 text-white px-4 py-2 text-sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              100+ Questions Answered
            </Badge>
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Expert Verified
            </Badge>
            <Badge className="bg-indigo-600 text-white px-4 py-2 text-sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Updated Regularly
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Search Results */}
        {searchTerm && (
          <Card className="mb-8 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardTitle>Search Results for "{searchTerm}"</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`search-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div>
                          <div className="font-medium">{faq.question}</div>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No questions found matching your search.</p>
                  <p className="text-sm text-gray-500 mt-2">Try different keywords or browse categories below.</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* FAQ Categories */}
        {!searchTerm && (
          <Tabs defaultValue="visa" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {Object.entries(faqCategories).map(([key, category]) => {
                const IconComponent = category.icon
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center gap-1 text-xs lg:text-sm">
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(faqCategories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <TabsContent key={key} value={key}>
                  <Card className="border-purple-200 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <IconComponent className="h-6 w-6" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`${key}-${index}`}>
                            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        )}

        {/* Contact Support */}
        <Card className="mt-12 border-green-200 bg-green-50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-600 rounded-full">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Still Have Questions?</h3>
            <p className="text-green-700 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our Saudi Arabia travel experts are here to help you plan your
              perfect trip with personalized advice and recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Mail className="h-4 w-4 mr-2" />
                Email Our Experts
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-green-800">Email Response</p>
                <p className="text-green-600">Within 24 hours</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-green-800">Phone Support</p>
                <p className="text-green-600">9 AM - 6 PM AST</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-green-800">Expert Advice</p>
                <p className="text-green-600">Local Saudi knowledge</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
