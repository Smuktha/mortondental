'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function PreventiveDentistryPage() {
  const url = 'https://www.mortondental.com.au/services/preventive-dentistry'

  return (
    <>
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>Preventive Dentistry | Morton Dental Noosa</title>
        <meta
          name="description"
          content="Professional cleans, fluoride, fissure sealants and personalised home-care coaching—everything you need to prevent cavities and gum disease in Noosa."
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
                  name: 'How often should I have a professional clean?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most people benefit from a professional clean every six months. Higher-risk patients may need three-monthly visits.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are fissure sealants?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sealants are thin protective coatings painted on chewing surfaces to block bacteria from settling in deep grooves.',
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
          src="/images/prevention.jpg"
          alt="Dentist performing a professional clean"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Proactive, Gentle <br className="hidden md:block" />
            Preventive&nbsp;Dentistry in&nbsp;Noosa
          </h1>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
        <p className="text-lg mb-8">
          Stop dental problems before they start. From <strong>professional cleans</strong> to
          <strong> fluoride & fissure sealants</strong>, Morton Dental has every preventive service
          you need for a lifetime of healthy smiles.
        </p>

        {/* ---------- CALL-OUT BOX ---------- */}
        <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-600 rounded-md p-6 shadow-sm mb-14">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-2">
            Six-Monthly Check-ups
          </h2>
          <p>
            Regular cleans remove hard tartar, freshen your breath and allow us to catch decay early.
            Most adults and children should visit twice per year.
          </p>
          <Link
            href="/patients"
            className="inline-block mt-4 px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            I’m a New Patient »
          </Link>
        </div>

        {/* ---------- SERVICE GRID ---------- */}
        <h2 className="text-2xl font-bold mb-6">Explore Our Preventive Services</h2>
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
                {`Learn about our ${title.toLowerCase()} program.`}
              </p>
            </Link>
          ))}
        </div>

        {/* ---------- WHY US ---------- */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Why Choose Morton Dental?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Friendly hygienists & modern ultrasonic scalers</li>
            <li>Digital X-rays for low-dose, instant imaging</li>
            <li>Family appointments available for convenience</li>
            <li>Bulk-billing for eligible Child Dental Benefit patients</li>
          </ul>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="text-center py-8 bg-teal-600 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-semibold mb-2">Ready to protect your smile?</h2>
          <p className="mb-4">Book a preventive check-up with our Noosa team now.</p>
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

/* ---------- DATA (Service tiles) ---------- */
const services = [
  {
    title: 'Fissure Sealants',
    href: '/services/preventive/fissure-sealants',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Oral Hygiene Care',
    href: '/services/preventive/oral-hygiene-care',
    Icon: SparklesIcon,
  },
] as const
