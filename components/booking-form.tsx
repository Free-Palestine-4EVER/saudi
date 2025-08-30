"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Users, Phone, Mail, MapPin, CreditCard, Shield, Check } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useCurrency } from "@/contexts/currency-context"

interface BookingFormProps {
  tourTitle: string
  tourPrice: number
}

export default function BookingForm({ tourTitle, tourPrice }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [travelers, setTravelers] = useState(2)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    specialRequests: "",
    accommodation: "standard",
    insurance: false,
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRestrictions: "",
    pickupLocation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [bookingReference, setBookingReference] = useState("")
  const { formatPrice } = useCurrency()

  const availableDates = Array.from({ length: 365 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return date
  })

  const isDateAvailable = (date: Date) => {
    return date > new Date()
  }

  const getSpotsLeft = (date: Date) => {
    if (!date) return 0
    // Mock spots calculation based on date
    const seed = date.getTime()
    return Math.floor((seed % 10) + 1) // 1-10 spots
  }

  const getDatePrice = (date: Date) => {
    if (!date) return tourPrice
    // Mock price variation based on date
    const seed = date.getTime()
    const variation = (seed % 3) * 100 // 0, 100, or 200 price increase
    return tourPrice + variation
  }

  const calculateTotal = () => {
    if (!selectedDate) return tourPrice * travelers
    const basePrice = getDatePrice(selectedDate) * travelers
    const accommodationUpgrade = formData.accommodation === "luxury" ? 200 * travelers : 0
    const insurance = formData.insurance ? 50 * travelers : 0
    const roomPreferenceUpgrade = formData.roomPreference === "suite" ? 150 * travelers : 0
    return basePrice + accommodationUpgrade + insurance + roomPreferenceUpgrade
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const bookingData = {
        tourTitle,
        selectedDate: selectedDate ? format(selectedDate, "PPP") : "",
        travelers,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        emergencyContact: formData.emergencyContact,
        emergencyPhone: formData.emergencyPhone,
        dietaryRestrictions: formData.dietaryRestrictions,
        pickupLocation: formData.pickupLocation,
        accommodation: formData.accommodation,
        insurance: formData.insurance,
        specialRequests: formData.specialRequests,
        totalAmount: calculateTotal(),
        depositAmount: Math.round(calculateTotal() * 0.25),
      }

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit booking")
      }

      const result = await response.json()
      setBookingReference(result.bookingReference)
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Booking error:", error)
      setIsSubmitting(false)
      alert("Failed to submit booking. Please try again.")
    }
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
        <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 p-8 text-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Check className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Booking Confirmed!</h3>
          <p className="text-white/90 text-xl">Thank you for booking {tourTitle}</p>
        </div>
        <div className="p-10 text-center">
          <p className="text-gray-600 mb-8 text-xl leading-relaxed">
            We'll send you a confirmation email shortly with all the details.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-8 rounded-2xl">
            <p className="text-green-800 font-semibold text-xl">
              <strong>Booking Reference:</strong> {bookingReference}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Book Your Tour</h3>
            <p className="text-white/90 text-lg">Secure your spot today!</p>
          </div>
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 backdrop-blur-sm"
          >
            Step {step} of 3
          </Badge>
        </div>

        <div className="flex gap-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "h-3 flex-1 rounded-full transition-all duration-500 shadow-sm",
                s <= step ? "bg-white shadow-lg" : "bg-white/30",
              )}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Date & Travelers */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="date" className="text-lg font-bold mb-4 block text-gray-800">
                  Select Your Departure Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-semibold h-12 text-lg border-2 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md",
                        !selectedDate && "text-muted-foreground",
                        selectedDate && "border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50",
                      )}
                    >
                      <CalendarIcon className="mr-3 h-5 w-5" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => !isDateAvailable(date) || date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {selectedDate && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-xl border border-amber-200 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700 font-semibold text-base">
                        {getSpotsLeft(selectedDate)} spots left
                      </span>
                      <span className="font-bold text-amber-800 text-lg">
                        {formatPrice(getDatePrice(selectedDate))} per person
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="travelers" className="text-lg font-bold mb-4 block text-gray-800">
                  Number of Travelers
                </Label>
                <Select value={travelers.toString()} onValueChange={(value) => setTravelers(Number.parseInt(value))}>
                  <SelectTrigger className="h-12 text-lg border-2 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        <div className="flex items-center gap-3 py-1">
                          <Users className="h-5 w-5" />
                          <span className="text-lg">
                            {num} {num === 1 ? "Traveler" : "Travelers"}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg text-gray-700">Estimated Total:</span>
                  <span className="text-2xl font-bold text-amber-700">{formatPrice(calculateTotal())}</span>
                </div>
                <p className="text-gray-600 text-base">
                  For {travelers} {travelers === 1 ? "traveler" : "travelers"}
                </p>
              </div>

              <Button
                type="button"
                onClick={nextStep}
                disabled={!selectedDate}
                className="w-full h-12 text-lg font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                Continue to Personal Details
              </Button>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-base font-bold mb-2 block">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-base font-bold mb-2 block">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-base font-bold mb-2 block">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-bold mb-2 block">
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="country" className="text-base font-bold mb-2 block">
                    Country of Residence *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className="pl-10 h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="emergencyContact" className="text-base font-bold mb-2 block">
                    Emergency Contact Name *
                  </Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    className="h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyPhone" className="text-base font-bold mb-2 block">
                    Emergency Contact Phone *
                  </Label>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    className="h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="dietaryRestrictions" className="text-base font-bold mb-2 block">
                    Dietary Restrictions
                  </Label>
                  <Input
                    id="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                    className="h-10 text-base border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Vegetarian, Halal, Allergies, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="pickupLocation" className="text-base font-bold mb-2 block">
                    Preferred Pickup Location
                  </Label>
                  <Select
                    value={formData.pickupLocation}
                    onValueChange={(value) => handleInputChange("pickupLocation", value)}
                  >
                    <SelectTrigger className="h-10 text-base border-2 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                      <SelectValue placeholder="Select pickup location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="city-center">City Center</SelectItem>
                      <SelectItem value="custom">Custom Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="specialRequests" className="text-base font-bold mb-2 block">
                  Special Requests & Medical Conditions
                </Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  className="border-2 hover:border-amber-400 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md text-base"
                  rows={4}
                  placeholder="Please include any medical conditions, mobility requirements, special occasions, or other important information..."
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-10 text-base font-bold border-2 hover:bg-gray-50 bg-transparent shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.country ||
                    !formData.emergencyContact ||
                    !formData.emergencyPhone
                  }
                  className="flex-1 h-10 text-base font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
                >
                  Continue to Options
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Options & Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-base font-bold mb-3 block">Accommodation Preference</Label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) => handleInputChange("accommodation", value)}
                  >
                    <SelectTrigger className="h-10 text-base border-2 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        <div className="flex flex-col items-start py-1">
                          <span className="font-semibold text-base">Standard (4★ Hotels)</span>
                          <span className="text-sm text-muted-foreground">Included in price</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="luxury">
                        <div className="flex flex-col items-start py-1">
                          <span className="font-semibold text-base">Luxury (5★ Hotels)</span>
                          <span className="text-sm text-muted-foreground">+$200 per person</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-base font-bold mb-3 block">Room Preference</Label>
                  <Select
                    value={formData.roomPreference}
                    onValueChange={(value) => handleInputChange("roomPreference", value)}
                  >
                    <SelectTrigger className="h-10 text-base border-2 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="double">Double Room (2 beds)</SelectItem>
                      <SelectItem value="single">Single Room</SelectItem>
                      <SelectItem value="triple">Triple Room (3 beds)</SelectItem>
                      <SelectItem value="suite">Suite Upgrade (+$150/night)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border-2 rounded-xl hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                <input
                  type="checkbox"
                  id="insurance"
                  checked={formData.insurance}
                  onChange={(e) => handleInputChange("insurance", e.target.checked)}
                  className="h-5 w-5 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <div className="flex-1">
                  <Label htmlFor="insurance" className="font-bold cursor-pointer text-base">
                    Travel Insurance
                  </Label>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage for $50 per person</p>
                </div>
                <Shield className="h-6 w-6 text-amber-500" />
              </div>

              <div className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-gray-800">Price Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span>Tour price ({travelers} travelers)</span>
                    <span className="font-semibold">
                      {formatPrice((selectedDate ? getDatePrice(selectedDate) : tourPrice) * travelers)}
                    </span>
                  </div>
                  {formData.accommodation === "luxury" && (
                    <div className="flex justify-between text-base">
                      <span>Luxury accommodation upgrade</span>
                      <span className="font-semibold">{formatPrice(200 * travelers)}</span>
                    </div>
                  )}
                  {formData.insurance && (
                    <div className="flex justify-between text-base">
                      <span>Travel insurance</span>
                      <span className="font-semibold">{formatPrice(50 * travelers)}</span>
                    </div>
                  )}
                  {formData.roomPreference === "suite" && (
                    <div className="flex justify-between text-base">
                      <span>Suite upgrade</span>
                      <span className="font-semibold">{formatPrice(150 * travelers)}</span>
                    </div>
                  )}
                  <div className="border-t-2 pt-3 flex justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span className="text-amber-700">{formatPrice(calculateTotal())}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 p-6 rounded-xl border border-amber-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <CreditCard className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-amber-800 mb-2">Secure Payment</h4>
                    <p className="text-amber-700 mb-3 text-base leading-relaxed">
                      Pay only a 25% deposit now. Remaining balance due 30 days before departure.
                    </p>
                    <p className="font-bold text-base text-amber-800">
                      Deposit required: {formatPrice(Math.round(calculateTotal() * 0.25))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-10 text-base font-bold border-2 hover:bg-gray-50 bg-transparent shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-10 text-base font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                By booking, you agree to our terms and conditions. Free cancellation up to 30 days before departure.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
