'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { SparklesIcon, StarIcon } from '@heroicons/react/24/outline'

export default function CosmeticDentistryPage() {
  const url = 'https://www.mortondental.com.au/services/cosmetic'

  return (
    <>
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>Cosmetic Dentistry Noosa | Veneers & Whitening | Morton Dental</title>
        <meta
          name="description"
          content="Enhance your smile with professional cosmetic dentistry in Noosa. Veneers, whitening, and full smile makeovers at Morton Dental."
        />
        <link rel="canonical" href={url} />
      </Head>

      <div className="bg-white dark:bg-black">
        {/* ---------- HERO SECTION ---------- */}
        <section className="relative h-72 md:h-96">
          <Image
            src="/images/cosmetic.jpg"
            alt="Cosmetic dental care at Morton Dental"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-black/30" />
          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
              Confident, Natural-Looking <br className="hidden md:block" />
              Cosmetic&nbsp;Dentistry in&nbsp;Noosa
            </h1>
          </div>
        </section>

        {/* ---------- CONTENT ---------- */}
        <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Whether you're looking to brighten your smile, correct imperfections, or enjoy a full smile makeover,
            Morton Dental provides personalised cosmetic solutions using the latest techniques and materials.
          </p>

          {/* ---------- INFO BOX ---------- */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-12 shadow-sm">
            <h2 className="text-xl font-semibold text-orange-700 dark:text-orange-400 mb-1">
              Custom Smile Makeovers
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We tailor each treatment plan to your goals, timeline, and budget – using premium materials for long-lasting results.
            </p>
            <Link
              href="/contact-us"
              className="inline-block mt-2 text-sm text-orange-700 dark:text-orange-400 font-semibold hover:underline"
            >
              Book a Cosmetic Consultation →
            </Link>
          </div>

          {/* ---------- SERVICE GRID ---------- */}
          <h2 className="text-2xl font-bold mb-6">Explore Our Cosmetic Services</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link
              href="/services/cosmetic/veneers"
              className="group border rounded-lg bg-white dark:bg-gray-900 p-6 hover:shadow-lg hover:border-teal-500 transition block"
            >
              <div className="flex items-center gap-3 mb-2 text-teal-700 dark:text-teal-400">
                <SparklesIcon className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Veneers</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Thin porcelain shells to reshape, brighten, and align teeth instantly.
              </p>
            </Link>

            <Link
              href="/services/cosmetic/teeth-whitening"
              className="group border rounded-lg bg-white dark:bg-gray-900 p-6 hover:shadow-lg hover:border-teal-500 transition block"
            >
              <div className="flex items-center gap-3 mb-2 text-teal-700 dark:text-teal-400">
                <StarIcon className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Teeth Whitening</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lift deep stains safely with professional in-chair or take-home whitening.
              </p>
            </Link>
          </div>

          {/* ---------- WHY US ---------- */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Morton Dental?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Experienced cosmetic dentists who understand aesthetics</li>
              <li>Natural-looking materials that blend with your smile</li>
              <li>Smile makeovers customised to your needs</li>
              <li>Flexible payment plans and health fund compatibility</li>
            </ul>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="text-center py-8 bg-teal-600 rounded-lg shadow-md text-white">
            <h2 className="text-xl font-semibold mb-2">Ready for a brighter, more confident smile?</h2>
            <p className="mb-4">Book your cosmetic consultation with our friendly Noosa team today.</p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-teal-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Book Appointment →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
