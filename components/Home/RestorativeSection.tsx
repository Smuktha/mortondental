'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function RestorativeSection() {
  return (
    <section className="bg-white pb-16">
      {/* Hero Image */}
      <div className="w-full h-[320px] md:h-[480px] relative">
        <Image
          src="/images/happy-parents-laughing-together-with-daughter.jpg"
          alt="Restorative Dentistry"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto px-4 mt-10 text-center">
        <p className="text-teal-600 uppercase text-sm font-semibold tracking-widest mb-2">
          Smile with Confidence
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Restore and Refresh Your Smile
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you’re dealing with damaged teeth or dreaming of a brighter, more balanced smile — Morton Dental offers expert restorative and cosmetic treatments tailored to you.
          From fillings and crowns to whitening and veneers, we combine precision and care to help you feel proud of your smile again.
        </p>

        <Link href="/appointment">
          <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded-md hover:bg-orange-600 transition">
            BOOK NOW!
          </button>
        </Link>
      </div>
    </section>
  )
}
