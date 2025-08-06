'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    video: '/videos/clip1.mp4',
    titleSmall: 'MODERN CARE AT YOUR FINGERTIPS',
    titleBig1: 'FRIENDLY NOOSA DENTAL TEAM',
    titleBig2: 'EXCEPTIONAL EXPERIENCE',
    button: 'BOOK NOW',
    href: '/appointment',
  },
  {
    video: '/videos/clip2.mp4',
    titleSmall: 'ADVANCED FACILITIES',
    titleBig1: 'COMFORT-DRIVEN TREATMENTS',
    titleBig2: 'YOU CAN TRUST',
    button: 'VIEW SERVICES',
    href: '/services',
  },
]

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section id="about" className="relative w-full overflow-hidden">
      {/* Background video */}
      <div className="relative w-full h-auto aspect-[16/9] sm:h-screen">
        <video
          key={slide.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      </div>

      {/* Text overlay */}
      <div
        className="
          absolute inset-0 z-10 flex flex-col justify-center
          items-center sm:items-start
          text-center sm:text-left
          px-4 sm:px-20
          max-w-[90%] sm:max-w-[700px]
          sm:ml-20 sm:mr-auto
          text-white
        "
      >
        <p className="text-xs sm:text-sm md:text-base font-medium mb-2">
          {slide.titleSmall}
        </p>
        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
          {slide.titleBig1}
        </h2>
        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {slide.titleBig2}
        </h2>
        <Link
          href={slide.href}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition"
        >
          {slide.button}
        </Link>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
