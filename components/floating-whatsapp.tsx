"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FloatingWhatsApp() {
  const phoneNumber = "+966561596033"
  const message = "Hello! I'm interested in exploring Saudi Arabia tours. Can you help me plan my trip?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group relative overflow-hidden p-0"
      >
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>

        <Image
          src="/images/whatsapp-logo.png"
          alt="WhatsApp"
          width={56}
          height={56}
          className="relative z-10 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </Button>
    </div>
  )
}
