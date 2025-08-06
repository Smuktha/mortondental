'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export default function RestorativeDentistryPage() {
  const url = 'https://www.mortondental.com.au/services/restorative-dentistry'

  return (
    <>
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>Restorative Dentistry | Morton Dental Noosa</title>
        <meta
          name="description"
          content="Expert restorative dentistry in Noosa: dental crowns, bridges, dentures, implants, and tooth repairs to restore your smile’s function and beauty."
        />
        <link rel="canonical" href={url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is considered restorative dentistry?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Restorative dentistry includes treatments that repair or replace damaged teeth, such as crowns, bridges, implants, and dentures.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long do dental crowns or implants last?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'With proper care, crowns and implants can last many years—often over a decade. Routine check-ups are essential to maintain them.',
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ---------- HERO ---------- */}
      <section className="relative h-72 md:h-96">
        <Image
          src="/images/restorive.jpg"
          alt="Restorative dental care at Morton Dental"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Functional, Natural-Looking <br className="hidden md:block" />
            Restorative&nbsp;Dentistry in&nbsp;Noosa
          </h1>
        </div>
      </section>

      {/* ---------- INTRO & CALL-OUT ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Restore the function, health, and appearance of your smile. Our Noosa team offers <strong>dental crowns</strong>, <strong>bridges</strong>, <strong>implants</strong>, and more—designed to last and look natural.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-600 rounded-md p-6 shadow-sm mb-14">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-2">
            Custom Restorations That Last
          </h2>
          <p className="text-gray-800 dark:text-gray-100">
            Every mouth is different. We create personalised treatment plans using high-quality materials that restore your bite and confidence.
          </p>
          <Link
            href="/patients"
            className="inline-block mt-4 px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            I’m a New Patient »
          </Link>
        </div>

        {/* ---------- GRID OF SERVICES ---------- */}
        <h2 className="text-2xl font-bold mb-6">Explore Our Restorative Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              aria-label={title}
              className="group border rounded-lg bg-white dark:bg-gray-900 p-6 hover:shadow-lg hover:border-teal-500 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="h-6 w-6 text-teal-600 group-hover:text-teal-700" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {`Learn about our ${title.toLowerCase()} treatment options.`}
              </p>
            </Link>
          ))}
        </div>

        {/* ---------- WHY CHOOSE US ---------- */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Morton Dental?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Durable materials for strong, long-lasting restorations</li>
            <li>Experienced dentists with an eye for natural aesthetics</li>
            <li>On-site crown fittings and digital scan technology</li>
            <li>Payment plans and health fund compatibility</li>
          </ul>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="text-center py-8 bg-teal-600 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-semibold mb-2">Need to restore a damaged tooth?</h2>
          <p className="mb-4">Book a consultation and explore your restorative options today.</p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-teal-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Book Appointment »
          </Link>
        </div>
      </section>
    </>
  )
}

/* ---------- SERVICE GRID DATA ---------- */
const services = [
  {
    title: 'Crowns & Bridges',
    href: '/services/restorative/crowns-and-bridges',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Dental Implants',
    href: '/services/restorative/implants',
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Dentures',
    href: '/services/restorative/dentures',
    Icon: SparklesIcon,
  },
  {
    title: 'Inlays & Onlays',
    href: '/services/restorative/inlays-and-onlays',
    Icon: ShieldCheckIcon,
  },
] as const
