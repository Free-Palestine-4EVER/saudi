"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Heart,
  Shirt,
  Coffee,
  ChurchIcon as Mosque,
  Calendar,
  Gift,
  HandHeart,
  AlertCircle,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react"

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Saudi Culture & Customs
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover the rich traditions, warm hospitality, and cultural heritage of Saudi Arabia. Understanding local
            customs will enhance your travel experience and help you connect with the Saudi people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-amber-600 text-white px-4 py-2 text-sm">
              <Heart className="h-4 w-4 mr-2" />
              Warm Hospitality
            </Badge>
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              Rich Heritage
            </Badge>
            <Badge className="bg-yellow-600 text-white px-4 py-2 text-sm">
              <Star className="h-4 w-4 mr-2" />
              Respectful Tourism
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dress Code */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shirt className="h-6 w-6" />
                  Dress Code & Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Modern & Relaxed</h3>
                    </div>
                    <p className="text-green-700 text-sm">
                      Saudi Arabia has become much more relaxed about dress codes for tourists, while still maintaining
                      respect for local customs.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-amber-800">For Women</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <h4 className="font-medium text-blue-800 mb-2">✓ Recommended</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Modest clothing covering shoulders and knees</li>
                            <li>• Long pants, maxi dresses, or long skirts</li>
                            <li>• Loose-fitting tops with sleeves</li>
                            <li>• Comfortable walking shoes</li>
                            <li>• Light scarf for religious sites (optional)</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <h4 className="font-medium text-red-800 mb-2">✗ Avoid</h4>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Very tight or revealing clothing</li>
                            <li>• Short shorts or mini skirts</li>
                            <li>• Low-cut tops or sleeveless shirts</li>
                            <li>• Transparent or see-through fabrics</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-amber-800">For Men</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <h4 className="font-medium text-blue-800 mb-2">✓ Recommended</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Long pants (jeans, chinos, dress pants)</li>
                            <li>• Shirts with sleeves (t-shirts are fine)</li>
                            <li>• Closed-toe shoes for religious sites</li>
                            <li>• Light jacket for air-conditioned spaces</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <h4 className="font-medium text-red-800 mb-2">✗ Avoid</h4>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Very short shorts</li>
                            <li>• Tank tops in public areas</li>
                            <li>• Offensive graphics or text on clothing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mosque className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Religious Sites</h3>
                    </div>
                    <p className="text-sm text-yellow-700">
                      More conservative dress is required when visiting mosques or religious sites. Women should cover
                      their hair, arms, and legs completely. Men should wear long pants and shirts with sleeves.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Etiquette */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <HandHeart className="h-6 w-6" />
                  Social Etiquette & Customs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="greetings">
                    <AccordionTrigger>Greetings & Interactions</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-800 mb-2">✓ Do</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Use "As-salamu alaykum" (Peace be upon you) as greeting</li>
                              <li>• Shake hands with same gender</li>
                              <li>• Show respect to elders</li>
                              <li>• Accept hospitality graciously</li>
                              <li>• Use your right hand for eating and greeting</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-800 mb-2">✗ Don't</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Initiate physical contact with opposite gender</li>
                              <li>• Show soles of feet when sitting</li>
                              <li>• Use left hand for important activities</li>
                              <li>• Point with your finger (use open hand)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dining">
                    <AccordionTrigger>Dining Etiquette</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-800 mb-2">Saudi Hospitality</h4>
                          <p className="text-sm text-blue-700">
                            Saudis are incredibly hospitable and may invite you for meals. It's considered polite to
                            accept, and you should try a little of everything offered.
                          </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Traditional Dining</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Meals often eaten with hands</li>
                              <li>• Sit on floor cushions</li>
                              <li>• Share from communal dishes</li>
                              <li>• Say "Bismillah" before eating</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Modern Restaurants</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Western-style dining common</li>
                              <li>• Family sections available</li>
                              <li>• Tipping 10-15% appreciated</li>
                              <li>• No alcohol served</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="photography">
                    <AccordionTrigger>Photography Guidelines</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <h4 className="font-medium text-green-800 mb-2">✓ Allowed</h4>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Tourist attractions and landmarks</li>
                              <li>• Landscapes and architecture</li>
                              <li>• Food and markets</li>
                              <li>• Public events and festivals</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <h4 className="font-medium text-red-800 mb-2">✗ Ask Permission</h4>
                            <ul className="text-sm text-red-700 space-y-1">
                              <li>• People (especially women)</li>
                              <li>• Government buildings</li>
                              <li>• Military installations</li>
                              <li>• Private property</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Always ask permission before photographing people, and respect if they decline.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="business">
                    <AccordionTrigger>Business Culture</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-800 mb-2">Key Points</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Punctuality is important</li>
                            <li>• Business cards exchanged with both hands</li>
                            <li>• Meetings may start with small talk</li>
                            <li>• Decisions often made collectively</li>
                            <li>• Friday is the holy day (weekend is Fri-Sat)</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Religious Considerations */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Mosque className="h-6 w-6" />
                  Religious Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-2">Islamic Culture</h3>
                    <p className="text-sm text-purple-700">
                      Saudi Arabia is the birthplace of Islam and home to the two holiest cities in Islam: Mecca and
                      Medina. Understanding and respecting Islamic customs will enhance your experience.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Prayer Times</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <span>
                            <strong>Fajr:</strong> Dawn prayer
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <span>
                            <strong>Dhuhr:</strong> Midday prayer
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <span>
                            <strong>Asr:</strong> Afternoon prayer
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <span>
                            <strong>Maghrib:</strong> Sunset prayer
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <span>
                            <strong>Isha:</strong> Night prayer
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Some shops may close briefly during prayer times.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Ramadan Considerations</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Fasting observed from dawn to sunset</li>
                        <li>• Restaurants may have limited hours</li>
                        <li>• Respect those who are fasting</li>
                        <li>• Special evening meals (Iftar) are common</li>
                        <li>• Festive atmosphere in the evenings</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Important Note</h3>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Non-Muslims are not permitted to enter the holy cities of Mecca and Medina. However, there are
                      many other incredible destinations throughout Saudi Arabia to explore.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Cultural Tips */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-amber-600 text-white">
                <CardTitle>Cultural Tips</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Saudis are known for their exceptional hospitality and generosity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Coffee className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Arabic coffee (qahwa) and dates are traditional welcome offerings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Family is very important in Saudi culture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gift className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Small gifts from your country are appreciated</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Useful Arabic Phrases */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-amber-600 text-white">
                <CardTitle>Useful Arabic Phrases</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">As-salamu alaykum</p>
                    <p className="text-gray-600">Peace be upon you (greeting)</p>
                  </div>
                  <div>
                    <p className="font-medium">Shukran</p>
                    <p className="text-gray-600">Thank you</p>
                  </div>
                  <div>
                    <p className="font-medium">Afwan</p>
                    <p className="text-gray-600">You're welcome</p>
                  </div>
                  <div>
                    <p className="font-medium">Marhaba</p>
                    <p className="text-gray-600">Hello/Welcome</p>
                  </div>
                  <div>
                    <p className="font-medium">Ma'a salama</p>
                    <p className="text-gray-600">Goodbye</p>
                  </div>
                  <div>
                    <p className="font-medium">Inshallah</p>
                    <p className="text-gray-600">God willing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Events */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-amber-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Cultural Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Saudi National Day</p>
                    <p className="text-gray-600">September 23 - Celebrations nationwide</p>
                  </div>
                  <div>
                    <p className="font-medium">Riyadh Season</p>
                    <p className="text-gray-600">Oct-Mar - Entertainment and cultural events</p>
                  </div>
                  <div>
                    <p className="font-medium">AlUla Arts Festival</p>
                    <p className="text-gray-600">Winter - Art installations and performances</p>
                  </div>
                  <div>
                    <p className="font-medium">Janadriyah Festival</p>
                    <p className="text-gray-600">Annual - Traditional culture and heritage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Need Help? */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Cultural Questions?</h3>
                <p className="text-green-700 text-sm mb-4">
                  Our local guides can help you navigate Saudi culture with confidence.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Ask Our Experts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
