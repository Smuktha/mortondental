'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline'

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black">
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>Our Dental Services | Morton Dental Noosa</title>
        <meta
          name="description"
          content="Explore the full range of dental services available at Morton Dental in Noosa – general, preventive, restorative, cosmetic, and orthodontic care for the whole family."
        />
        <link rel="canonical" href="https://www.mortondental.com.au/services" />
      </Head>

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative h-72 md:h-96">
        <Image
          src="/images/services.jpg"
          alt="Dentist and patient at Morton Dental Noosa"
          fill
          priority
          className="object-cover object-top brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Full-Spectrum Dental Services <br className="hidden md:block" />
            for&nbsp;Noosa Families
          </h1>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          At Morton Dental, we offer comprehensive dental services – from emergency relief to
          full smile transformations – with gentle care for all ages.
        </p>

        {/* ---------- SERVICE CARDS GRID ---------- */}
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            title="General Dentistry"
            desc="Check-ups, fillings, root canals, and extractions for everyday dental needs."
            href="/services/general"
            Icon={ShieldCheckIcon}
          />
          <ServiceCard
            title="Preventive Dentistry"
            desc="Protective treatments like fissure sealants and hygiene care for long-term oral health."
            href="/services/preventive"
            Icon={SparklesIcon}
          />
          <ServiceCard
            title="Restorative Dentistry"
            desc="Crowns, bridges, implants and dentures to restore your bite and your smile."
            href="/services/restorative"
            Icon={WrenchScrewdriverIcon}
          />
          <ServiceCard
            title="Cosmetic Dentistry"
            desc="Whitening and veneers to enhance your confidence and appearance."
            href="/services/cosmetic"
            Icon={SparklesIcon}
          />
          <ServiceCard
            title="Orthodontics"
            desc="Clear aligners to gently straighten teeth with minimal visibility or discomfort."
            href="/services/orthodontics"
            Icon={FaceSmileIcon}
          />
        </div>

        {/* ---------- CTA BANNER ---------- */}
        <div className="bg-teal-700 text-white text-center p-6 rounded-md mt-16">
          <h3 className="text-lg font-semibold">Not sure where to start?</h3>
          <p className="mt-1 mb-3">
            Book a check-up and let our friendly team guide your care plan.
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-white text-teal-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-200 transition"
          >
            Book Appointment →
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ---------- REUSABLE CARD COMPONENT ---------- */
function ServiceCard({
  title,
  desc,
  href,
  Icon,
}: {
  title: string
  desc: string
  href: string
  Icon: React.ElementType
}) {
  return (
    <Link
      href={href}
      aria-label={title}
      className="group border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 hover:shadow-md hover:border-teal-500 transition block"
    >
      <div className="flex items-center gap-3 mb-2 text-teal-700 dark:text-teal-400">
        <Icon className="h-6 w-6" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </Link>
  )
}
