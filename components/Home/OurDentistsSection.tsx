'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DentistsSection() {
  return (
    <section id="dentists" className="bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet the Team at Morton Dental</h2>
        <p className="text-sm text-gray-500 mt-2">Get to Know Us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Dr. Karen Silva */}
        <Link href="/team/karen-silva" className="group block">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <Image
              src="/images/dr-karen-profile(1).jpg"
              alt="Dr. Karen Silva"
              width={600}
              height={800}
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="bg-gray-100 py-4 text-center">
              <h2 className="text-xl font-semibold text-teal-700 group-hover:underline">Dr Karen Silva</h2>
              <p className="text-gray-600 text-sm">(Dentist)</p>
            </div>
          </div>
        </Link>

        {/* Dr. Stefano Burti */}
        <Link href="/team/stefano-burti" className="group block">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <Image
              src="/images/stefeno.png"
              alt="Dr. Stefano Burti"
              width={600}
              height={800}
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="bg-gray-100 py-4 text-center">
              <h2 className="text-xl font-semibold text-teal-700 group-hover:underline">Dr Stefano Burti</h2>
              <p className="text-gray-600 text-sm">(Dentist)</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
