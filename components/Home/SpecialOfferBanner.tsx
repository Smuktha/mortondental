'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SpecialOfferBanner() {
  return (
    <section className="bg-gradient-to-br from-white via-orange-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT TEXT BLOCK */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Free <span className="text-orange-500">Dental Implant Consultation</span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Thinking about restoring your smile with dental implants? Get expert guidance at no cost with our 
            15-minute consultation — perfect for exploring your options with confidence.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-base mb-6 space-y-1">
            <li>No obligation — just expert advice</li>
            <li>Available for new and existing patients</li>
            <li>X-rays and treatment planning not included</li>
          </ul>
          <Link href="/appointment">
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition shadow">
              Book Your Free Consult
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/specialoffer.jpg"
            alt="Happy dental patient"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Optional badge overlay */}
          {/*
          <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-md text-xs font-bold shadow-md">
            LIMITED TIME OFFER
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
