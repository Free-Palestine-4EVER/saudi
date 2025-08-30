"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Plane,
  Shield,
  CreditCard,
  Phone,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Car,
  Wifi,
} from "lucide-react"

export default function TravelInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Saudi Arabia Travel Information
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Everything you need to know for a safe, comfortable, and memorable journey to the Kingdom of Saudi Arabia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Safe Travel
            </Badge>
            <Badge className="bg-amber-600 text-white px-4 py-2 text-sm">
              <Globe className="h-4 w-4 mr-2" />
              Tourist Visa Available
            </Badge>
            <Badge className="bg-yellow-600 text-white px-4 py-2 text-sm">
              <Heart className="h-4 w-4 mr-2" />
              Warm Hospitality
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Visa Information */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-6 w-6" />
                  Visa Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Tourist Visa Available</h3>
                    </div>
                    <p className="text-green-700 text-sm">
                      Saudi Arabia now offers tourist visas for visitors from 49 eligible countries, making it easier
                      than ever to explore the Kingdom.
                    </p>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="evisa">
                      <AccordionTrigger>eVisa (Online Application)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p>Apply online at visa.visitsaudi.com</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Processing time: 5-30 minutes</li>
                            <li>Cost: $80 USD (plus fees)</li>
                            <li>Valid for 1 year, multiple entries</li>
                            <li>Stay up to 90 days per visit</li>
                            <li>Passport valid for at least 6 months</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="visa-on-arrival">
                      <AccordionTrigger>Visa on Arrival</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p>Available at major airports and land borders</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Same cost and validity as eVisa</li>
                            <li>Longer processing time at airport</li>
                            <li>Bring printed hotel booking</li>
                            <li>Return ticket required</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="eligible-countries">
                      <AccordionTrigger>Eligible Countries</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                          <div>USA, Canada, UK, Australia, New Zealand</div>
                          <div>Most EU countries, Japan, South Korea</div>
                          <div>Singapore, Malaysia, Brunei, Kazakhstan</div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Check the official website for the complete list and latest updates.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>

            {/* Health & Safety */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Health & Safety
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">Vaccinations</h3>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• No mandatory vaccinations for most countries</li>
                        <li>• Yellow fever certificate if coming from endemic areas</li>
                        <li>• COVID-19 requirements may apply</li>
                        <li>• Consult your doctor before travel</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">Safety</h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Very low crime rate</li>
                        <li>• Excellent healthcare system</li>
                        <li>• Tourist police available</li>
                        <li>• Emergency services: 911</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Health Tips</h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Stay hydrated, especially in desert areas</li>
                      <li>• Use sunscreen and protective clothing</li>
                      <li>• Tap water is safe to drink in major cities</li>
                      <li>• Travel insurance recommended</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Currency & Money */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  Currency & Money
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Saudi Riyal (SAR)</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        The Saudi Riyal is pegged to the US Dollar at approximately 3.75 SAR = 1 USD.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>1 USD</span>
                          <span>≈ 3.75 SAR</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1 EUR</span>
                          <span>≈ 4.10 SAR</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1 GBP</span>
                          <span>≈ 4.70 SAR</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Payment Methods</h3>
                      <ul className="text-sm space-y-1">
                        <li>✓ Credit/Debit cards widely accepted</li>
                        <li>✓ Contactless payments common</li>
                        <li>✓ ATMs available everywhere</li>
                        <li>✓ Mobile payments (Apple Pay, etc.)</li>
                        <li>✓ Cash still useful for small vendors</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Typical Costs (SAR)</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>
                          <strong>Meals:</strong>
                        </p>
                        <p>Budget meal: 15-30 SAR</p>
                        <p>Mid-range: 50-100 SAR</p>
                        <p>Fine dining: 150+ SAR</p>
                      </div>
                      <div>
                        <p>
                          <strong>Transportation:</strong>
                        </p>
                        <p>Taxi (city): 20-50 SAR</p>
                        <p>Uber/Careem: 15-40 SAR</p>
                        <p>Metro (Riyadh): 4-12 SAR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-6 w-6" />
                  Transportation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Domestic Flights</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Saudia and flynas airlines</li>
                        <li>• Connect all major cities</li>
                        <li>• 1-2 hour flights typically</li>
                        <li>• Book online or through apps</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Ground Transportation</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Uber and Careem ride-sharing</li>
                        <li>• Traditional taxis available</li>
                        <li>• Car rental with international license</li>
                        <li>• Metro systems in Riyadh and Mecca</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Transportation Tips</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Download Uber/Careem apps before arrival</li>
                      <li>• International driving license required for car rental</li>
                      <li>• Public transport is modern and efficient in major cities</li>
                      <li>• Taxis should use meters or agree on fare beforehand</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Facts */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span>
                    <strong>Time Zone:</strong> AST (UTC+3)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-orange-600" />
                  <span>
                    <strong>Language:</strong> Arabic (English widely spoken)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wifi className="h-4 w-4 text-orange-600" />
                  <span>
                    <strong>Internet:</strong> Excellent 4G/5G coverage
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span>
                    <strong>Country Code:</strong> +966
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <div className="text-sm">
                  <p>
                    <strong>Emergency Services:</strong> 911
                  </p>
                  <p>
                    <strong>Police:</strong> 999
                  </p>
                  <p>
                    <strong>Fire Department:</strong> 998
                  </p>
                  <p>
                    <strong>Ambulance:</strong> 997
                  </p>
                  <p>
                    <strong>Tourist Police:</strong> 989
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Useful Apps */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle>Useful Apps</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Transportation</p>
                    <p className="text-gray-600">Uber, Careem, Riyadh Metro</p>
                  </div>
                  <div>
                    <p className="font-medium">Food Delivery</p>
                    <p className="text-gray-600">HungerStation, Jahez, Talabat</p>
                  </div>
                  <div>
                    <p className="font-medium">Navigation</p>
                    <p className="text-gray-600">Google Maps, Waze</p>
                  </div>
                  <div>
                    <p className="font-medium">Translation</p>
                    <p className="text-gray-600">Google Translate, Microsoft Translator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Need Help? */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Need More Help?</h3>
                <p className="text-green-700 text-sm mb-4">
                  Our Saudi Arabia travel experts are here to assist you with any questions.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Contact Our Experts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
