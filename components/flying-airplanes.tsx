"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Plane } from "lucide-react"

interface Airplane {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  rotate: number
}

export function FlyingAirplanes() {
  const [airplanes, setAirplanes] = useState<Airplane[]>([])

  useEffect(() => {
    // Generate random airplanes
    const planes: Airplane[] = []
    const count = Math.floor(Math.random() * 3) + 3 // 3-5 airplanes

    for (let i = 0; i < count; i++) {
      planes.push({
        id: i,
        x: Math.random() * 100, // Random starting position
        y: Math.random() * 100,
        size: Math.random() * 0.5 + 0.5, // Random size between 0.5 and 1
        duration: Math.random() * 10 + 15, // Random duration between 15-25s
        delay: Math.random() * 2, // Random delay between 0-2s
        rotate: Math.random() * 360, // Random rotation
      })
    }

    setAirplanes(planes)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {airplanes.map((plane) => (
        <motion.div
          key={plane.id}
          className="absolute"
          initial={{
            x: `${plane.x}%`,
            y: `${plane.y}%`,
            opacity: 0,
            rotate: plane.rotate,
          }}
          animate={{
            x: [`${plane.x}%`, `${(plane.x + 50) % 100}%`, `${(plane.x + 100) % 100}%`],
            y: [`${plane.y}%`, `${(plane.y + 30) % 100}%`, `${(plane.y + 60) % 100}%`],
            opacity: [0, 1, 0],
            rotate: [plane.rotate, plane.rotate + 180, plane.rotate + 360],
          }}
          transition={{
            duration: plane.duration,
            delay: plane.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            scale: plane.size,
          }}
        >
          <Plane className="text-primary h-6 w-6" />
        </motion.div>
      ))}
    </div>
  )
}
