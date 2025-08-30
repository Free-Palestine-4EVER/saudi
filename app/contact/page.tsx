"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelDates: "",
    groupSize: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submitData = {
        ...formData,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          travelDates: "",
          groupSize: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h2>
            <p className="text-green-700 mb-4">
              Thank you for contacting Saudi Explorer. We'll get back to you within 24 hours.
            </p>
            <Badge className="bg-green-600 text-white">Response within 24 hours</Badge>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Contact Saudi Explorer
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Ready to explore the wonders of Saudi Arabia? Get in touch with our travel experts and let us create your
            perfect Arabian adventure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-amber-600 text-white px-4 py-2 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              24/7 Support
            </Badge>
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Expert Advice
            </Badge>
            <Badge className="bg-yellow-600 text-white px-4 py-2 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Custom Itineraries
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="border-amber-200 focus:border-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="border-amber-200 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+966 50 123 4567"
                        className="border-amber-200 focus:border-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)} required>
                        <SelectTrigger className="border-amber-200 focus:border-amber-500">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Tour Booking</SelectItem>
                          <SelectItem value="custom">Custom Itinerary</SelectItem>
                          <SelectItem value="group">Group Travel</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                      <Input
                        id="travelDates"
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange("travelDates", e.target.value)}
                        placeholder="e.g., March 2024"
                        className="border-amber-200 focus:border-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Select onValueChange={(value) => handleInputChange("groupSize", value)}>
                        <SelectTrigger className="border-amber-200 focus:border-amber-500">
                          <SelectValue placeholder="Number of travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 person</SelectItem>
                          <SelectItem value="2">2 people</SelectItem>
                          <SelectItem value="3-5">3-5 people</SelectItem>
                          <SelectItem value="6-10">6-10 people</SelectItem>
                          <SelectItem value="10+">10+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your dream Saudi Arabia experience, areas of interest, special requirements, or any questions you have..."
                      rows={8}
                      required
                      className="border-amber-200 focus:border-amber-500 min-h-[200px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">+966 11 123 4567</p>
                    <p className="text-sm text-gray-600">+966 50 987 6543</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">info@saudiexplorer.com</p>
                    <p className="text-sm text-gray-600">bookings@saudiexplorer.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-600">
                      King Fahd Road, Al Olaya District
                      <br />
                      Riyadh 12213, Saudi Arabia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-gray-600">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                      <br />
                      Friday - Saturday: 2:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  24/7 Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 font-medium">+966 50 EMERGENCY</p>
                <p className="text-sm text-red-600 mt-1">For urgent assistance during your trip</p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-800">24h</div>
                    <div className="text-sm text-green-600">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-800">500+</div>
                    <div className="text-sm text-green-600">Happy Travelers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-800">15+</div>
                    <div className="text-sm text-green-600">Destinations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-800">4.9★</div>
                    <div className="text-sm text-green-600">Average Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-yellow-100">
                Quick answers to common questions about traveling to Saudi Arabia
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do I need a visa to visit Saudi Arabia?</AccordionTrigger>
                  <AccordionContent>
                    Yes, most visitors need a visa. Saudi Arabia offers eVisa for tourists from eligible countries,
                    which can be obtained online. We can assist you with the visa application process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What's the best time to visit Saudi Arabia?</AccordionTrigger>
                  <AccordionContent>
                    The best time to visit is during the cooler months from October to March, when temperatures are more
                    comfortable for sightseeing and outdoor activities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are your tours suitable for families?</AccordionTrigger>
                  <AccordionContent>
                    We offer family-friendly tours with activities suitable for all ages. Our guides are experienced in
                    working with families and ensuring everyone has a great time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What should I pack for my Saudi Arabia trip?</AccordionTrigger>
                  <AccordionContent>
                    Pack lightweight, breathable clothing that covers your arms and legs. Bring sunscreen, a hat,
                    comfortable walking shoes, and a light jacket for cooler evenings. We'll provide a detailed packing
                    list upon booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can you customize tours for special interests?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We specialize in creating custom itineraries based on your interests, whether it's archaeology,
                    adventure sports, cultural experiences, or culinary tours. Contact us to discuss your preferences.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
