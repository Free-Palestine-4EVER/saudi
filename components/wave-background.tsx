"use client"

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="wave-container">
        <div className="wave wave-1 bg-gradient-to-b from-transparent to-sand-400/20"></div>
        <div className="wave wave-2 bg-gradient-to-b from-transparent to-desert-400/15"></div>
        <div className="wave wave-3 bg-gradient-to-b from-transparent to-sand-300/10"></div>
      </div>
    </div>
  )
}
