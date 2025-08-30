"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Sparkles, Star } from "lucide-react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    document.body.classList.add("loading-active")

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(() => {
              document.body.classList.remove("loading-active")
              onComplete()
            }, 800)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => {
      clearInterval(interval)
      document.body.classList.remove("loading-active")
    }
  }, [onComplete])

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center loading-gradient-bg overflow-hidden ${
        isComplete ? "loading-fade-out" : ""
      }`}
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        minHeight: "100dvh",
        height: "100dvh",
      }}
    >
      {/* Desert Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-300/60 rounded-full desert-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute text-white/40 animate-bounce"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {i % 2 === 0 ? <Star className="h-4 w-4" /> : <Sparkles className="h-3 w-3" />}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Logo */}
        <div className="logo-reveal mb-8">
          <div className="relative pulse-glow rounded-2xl p-6 bg-white shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saudi_logo-removebg-preview-oMjoGp5HWqGHRFfif2EswQwiHr9vc5.png"
              alt="Saudi Explorer"
              width={200}
              height={80}
              className="h-16 w-auto object-contain md:h-20"
              priority
            />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full spinner-rotate"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-white to-amber-200 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="text-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Exploring Saudi Arabia...</h2>
          <p className="text-white/80 text-sm md:text-base drop-shadow">Preparing your journey to the Kingdom</p>
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 text-white/60 text-sm font-medium">{Math.round(progress)}%</div>
      </div>

      {/* Gradient Overlay */} 
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-amber-500/20 pointer-events-none"></div>
    </div>
  )
}
