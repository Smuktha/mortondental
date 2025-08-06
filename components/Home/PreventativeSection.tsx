'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SplitCareSection() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image on Left */}
        <div className="w-full h-[300px] md:h-[400px] relative rounded-xl shadow-xl overflow-hidden">
          <Image
            src="/images/Quince-and-Mulberry-Studios-Vortala-MortonDental-047.jpg"
            alt="Preventative Based Care"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </div>

        {/* Text Content on Right */}
        <div className="text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preventative‑Based Care
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-700">
            Healthy smiles start with prevention. At Morton Dental, we offer thorough checkups, gentle cleans, and helpful advice to help you maintain optimal oral health at every stage of life. From kids to seniors, we’ve got your smile covered.
          </p>
          <Link href="/services/preventive">
            <button className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-700 transition">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}
