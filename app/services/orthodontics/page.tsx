export const metadata = {
  title: 'Orthodontics Noosa | Clear Aligners | Morton Dental',
  description:
    'Straighten teeth with clear aligners at Morton Dental Noosa. Discreet orthodontic solutions for teens and adults — no metal brackets or wires.',
}

import Image from 'next/image'
import Link from 'next/link'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function OrthodonticsPage() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      {/* ---------- HERO IMAGE SECTION ---------- */}
      <section className="relative h-72 md:h-96">
        <Image
          src="/images/ortho.jpg"
          alt="Orthodontic care at Morton Dental"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Straighten Your Smile <br className="hidden md:block" />
            with&nbsp;Orthodontics in&nbsp;Noosa
          </h1>
        </div>
      </section>

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          From discreet clear aligners to comfortable treatment options, Morton Dental helps
          teens and adults achieve straighter smiles without metal brackets or wires.
        </p>

        {/* ---------- HIGHLIGHT BOX ---------- */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded mb-10">
          <h2 className="font-semibold text-green-800 dark:text-green-300">
            Clear, Comfortable, Removable
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Invisalign-style aligners are nearly invisible and can be taken out for meals,
            brushing, and special occasions.
          </p>
          <Link
            href="/services/orthodontics/invisalign"
            className="inline-block mt-2 text-sm text-green-700 dark:text-green-400 font-semibold hover:underline"
          >
            Learn More About Clear Aligners →
          </Link>
        </div>

        {/* ---------- SINGLE SERVICE CARD ---------- */}
        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded hover:shadow-md transition mb-12 bg-white dark:bg-gray-900">
          <Link href="/services/orthodontics/invisalign" className="block">
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-medium mb-1">
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              Invisalign Clear Aligners
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nearly invisible, removable trays designed to gently move teeth
              into alignment with minimal disruption to your lifestyle.
            </p>
          </Link>
        </div>

        {/* ---------- CTA BANNER ---------- */}
        <div className="bg-teal-700 text-white text-center p-6 rounded-md">
          <h3 className="text-lg font-semibold">
            Ready to improve your smile discreetly?
          </h3>
          <p className="mt-1 mb-3">
            Book a consultation with our Noosa orthodontic team today.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-teal-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-200 transition"
          >
            Book Appointment →
          </Link>
        </div>
      </div>
    </div>
  )
}
