"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Award,
  Globe,
  Heart,
  Star,
  MapPin,
  Calendar,
  Shield,
  Compass,
  Camera,
  Mountain,
  Waves,
} from "lucide-react"

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years of experience in Saudi tourism, Ahmed founded Saudi Explorer to share the hidden gems of his homeland with the world.",
    specialties: ["Cultural Heritage", "Desert Adventures", "Business Development"],
  },
  {
    name: "Fatima Al-Zahra",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Fatima ensures every journey runs smoothly, coordinating with local partners and managing our day-to-day operations across Saudi Arabia.",
    specialties: ["Operations Management", "Local Partnerships", "Quality Assurance"],
  },
  {
    name: "Omar Al-Mansouri",
    role: "Lead Tour Guide",
    image: "/placeholder.svg?height=300&width=300",
    bio: "A certified archaeologist and passionate storyteller, Omar brings Saudi Arabia's rich history to life for our guests.",
    specialties: ["Archaeology", "Historical Sites", "Storytelling"],
  },
  {
    name: "Layla Al-Harbi",
    role: "Customer Experience Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Layla is dedicated to creating unforgettable experiences, ensuring every traveler feels welcomed and cared for throughout their journey.",
    specialties: ["Customer Service", "Experience Design", "Guest Relations"],
  },
]

const values = [
  {
    icon: Heart,
    title: "Authentic Experiences",
    description:
      "We showcase the real Saudi Arabia, from ancient traditions to modern innovations, ensuring genuine cultural encounters.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your safety is our priority. We maintain the highest safety standards and work with certified local partners.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Our team consists of local experts who know Saudi Arabia intimately and are passionate about sharing their knowledge.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description:
      "We're committed to responsible tourism that benefits local communities and preserves Saudi Arabia's natural and cultural heritage.",
  },
]

const achievements = [
  { number: "500+", label: "Happy Travelers", icon: Users },
  { number: "15+", label: "Destinations Covered", icon: MapPin },
  { number: "5", label: "Years of Excellence", icon: Calendar },
  { number: "4.9", label: "Average Rating", icon: Star },
]

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10" />
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full">
              <Compass className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            About Saudi Explorer
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            We are passionate storytellers and expert guides dedicated to unveiling the wonders of Saudi Arabia. From
            ancient archaeological sites to modern marvels, we create unforgettable journeys that showcase the Kingdom's
            rich heritage and bright future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-amber-600 text-white px-4 py-2 text-sm">
              <Award className="h-4 w-4 mr-2" />
              Award-Winning Service
            </Badge>
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              Local Experts
            </Badge>
            <Badge className="bg-yellow-600 text-white px-4 py-2 text-sm">
              <Globe className="h-4 w-4 mr-2" />
              Sustainable Tourism
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Our Story */}
        <section className="mb-20">
          <Card className="border-amber-200 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image src="/images/saudi-hero.jpg" alt="Saudi Arabia landscape" fill className="object-cover" />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Saudi Explorer was born from a simple yet powerful vision: to share the incredible beauty, rich
                    history, and warm hospitality of Saudi Arabia with travelers from around the world.
                  </p>
                  <p>
                    Founded in 2019 by Ahmed Al-Rashid, a passionate Saudi native with deep roots in tourism and
                    cultural preservation, our company has grown from a small local operation to a trusted name in Saudi
                    Arabian tourism.
                  </p>
                  <p>
                    We believe that travel has the power to bridge cultures, create understanding, and forge lasting
                    memories. Every tour we design is crafted with care, authenticity, and a deep respect for both our
                    guests and our homeland.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-amber-600 text-amber-700">
                    <Camera className="h-3 w-3 mr-1" />
                    Photography Tours
                  </Badge>
                  <Badge variant="outline" className="border-orange-600 text-orange-700">
                    <Mountain className="h-3 w-3 mr-1" />
                    Adventure Expeditions
                  </Badge>
                  <Badge variant="outline" className="border-yellow-600 text-yellow-700">
                    <Waves className="h-3 w-3 mr-1" />
                    Red Sea Experiences
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-800">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our travelers place in us.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-amber-800 mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-800">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape every experience we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-amber-800">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-800">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Saudi Explorer who make every journey extraordinary.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`border-amber-200 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                  selectedMember === index ? "ring-2 ring-amber-500" : ""
                }`}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-amber-800">{member.name}</h3>
                  <p className="text-sm text-orange-600 mb-3">{member.role}</p>
                  {selectedMember === index && (
                    <div className="mt-4 space-y-3">
                      <p className="text-sm text-gray-600">{member.bio}</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-amber-600 text-amber-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <Button variant="ghost" size="sm" className="mt-3 text-amber-600 hover:text-amber-700">
                    {selectedMember === index ? "Show Less" : "Learn More"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="border-amber-200 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Mission</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                "To be the bridge between Saudi Arabia's magnificent heritage and curious travelers worldwide, creating
                transformative experiences that foster cultural understanding, preserve local traditions, and showcase
                the Kingdom's evolution into a modern, welcoming destination."
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Badge className="bg-amber-600 text-white px-6 py-3 text-base">Cultural Bridge</Badge>
                <Badge className="bg-orange-600 text-white px-6 py-3 text-base">Heritage Preservation</Badge>
                <Badge className="bg-yellow-600 text-white px-6 py-3 text-base">Modern Saudi Arabia</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications & Partnerships */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-800">Certifications & Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with trusted partners and maintain the highest industry standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-green-800">Licensed Tour Operator</h3>
                <p className="text-sm text-green-700">
                  Fully licensed by the Saudi Commission for Tourism and National Heritage
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Quality Certified</h3>
                <p className="text-sm text-blue-700">ISO 9001:2015 certified for quality management systems</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Global Network</h3>
                <p className="text-sm text-purple-700">Member of International Association of Tour Operators</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
