'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  ClipboardDocumentListIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function GeneralDentistryPage() {
  const url = 'https://www.mortondental.com.au/services/general-dentistry'

  return (
    <>
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>General Dentistry | Morton Dental Noosa</title>
        <meta
          name="description"
          content="Comprehensive general dentistry in Noosa: check-ups, fillings, children’s dentistry, root canal therapy, extractions, and more—all under one friendly roof."
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
                  name: 'How often should I visit the dentist for a check-up?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most people benefit from a check-up and clean every six months. Your dentist may recommend more frequent visits if you have specific concerns.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are tooth-coloured fillings safe?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Composite (white) fillings are mercury-free and bond directly to your tooth for a natural look and long-lasting seal.',
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
          src="/images/general.jpg"
          alt="Smiling child at Morton Dental Noosa"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Caring, Comprehensive <br className="hidden md:block" />
            General&nbsp;Dentistry in&nbsp;Noosa
          </h1>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
        <p className="text-lg mb-8">
          From <strong>six-monthly cleans</strong> to <strong>emergency toothaches</strong>, Morton Dental offers the
          full spectrum of preventive and restorative care for every member of the family.
        </p>

        {/* ---------- PREVENTIVE CALL-OUT ---------- */}
        <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 rounded-md p-6 shadow-sm mb-14">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-2">Preventive Care Visits</h2>
          <p>
            Regular check-ups help us detect problems early, keep treatment simple, and protect your long-term health.
            We recommend a professional clean twice a year for most patients.
          </p>
          <Link
            href="/patients"
            className="inline-block mt-4 px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            I’m a New Patient »
          </Link>
        </div>

        {/* ---------- SERVICE GRID ---------- */}
        <h2 className="text-2xl font-bold mb-6">Explore Our General Dental Services</h2>
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
                {`Learn more about our ${title.toLowerCase()} care options.`}
              </p>
            </Link>
          ))}
        </div>

        {/* ---------- WHY US ---------- */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Morton Dental?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gentle, family-orientated team with decades of experience</li>
            <li>Modern technology &amp; digital X-rays for precise diagnosis</li>
            <li>Emergency appointments reserved every day</li>
            <li>Flexible payment plans &amp; all major health funds accepted</li>
          </ul>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="text-center py-8 bg-teal-600 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-semibold mb-2">Ready for a healthier smile?</h2>
          <p className="mb-4">Book your next check-up with our friendly Noosa team today.</p>
          <Link
            href="/appointment"
            className="inline-block bg-white text-teal-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Book Appointment »
          </Link>
        </div>
      </section>
    </>
  )
}

/* ------- DATA & ICONS ------- */
const services = [
  { title: 'Emergency Dental', href: '/services/general/emergency-dental', Icon: ClipboardDocumentListIcon },
  { title: 'Fillings', href: '/services/general/fillings', Icon: ShieldCheckIcon },
  { title: "Children's Dentistry", href: '/services/general/children-dentistry', Icon: SparklesIcon },
  { title: 'Root Canal', href: '/services/general/root-canal', Icon: ClipboardDocumentListIcon },
  { title: 'Custom Mouthguards', href: '/services/general/custom-mouthguards', Icon: ShieldCheckIcon },
  { title: 'Tooth Extraction', href: '/services/general/tooth-extraction', Icon: ClipboardDocumentListIcon },
  { title: 'Wisdom Teeth Removal', href: '/services/general/wisdom-teeth-removal', Icon: SparklesIcon },
] as const
