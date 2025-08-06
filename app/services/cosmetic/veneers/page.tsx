'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'

export default function VeneersPage() {
  const url = 'https://www.mortondental.com.au/services/cosmetic/veneers'

  return (
    <>
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>Porcelain Veneers Noosa | Smile Makeovers | Morton Dental</title>
        <meta
          name="description"
          content="Porcelain veneers in Noosa to correct chips, gaps, stains or uneven teeth. Get a flawless, natural-looking smile makeover at Morton Dental."
        />
        <link rel="canonical" href={url} />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
        {/* ---------- HEADING ---------- */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-teal-400 mb-4">Porcelain Veneers</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Veneers are ultra-thin ceramic shells bonded to the front of your teeth – perfect for transforming
          chips, gaps, stains or irregular shapes into a stunning, natural-looking smile.
        </p>

        {/* ---------- IMAGE + FEATURES ---------- */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
          <div className="flex-1 space-y-4">
            <p>
              <strong className="text-orange-600 dark:text-orange-400">
                Natural Appearance • Stain Resistant • Long-Lasting
              </strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Every veneer is handcrafted from translucent porcelain to match the colour and shape of your smile – 
              delivering realistic, camera-ready results that boost confidence.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/veneers.jpg"
              alt="Smile makeover with porcelain veneers"
              width={600}
              height={400}
              className="rounded-md shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="mb-8">
          <Link
            href="/contact-us"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Ask About Veneers »
          </Link>
        </div>

        {/* ---------- INFO BOXES ---------- */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <InfoBox
            title="Ideal For"
            bullets={[
              'Discoloured or stained teeth',
              'Small gaps between teeth',
              'Chipped, worn or misshaped teeth',
            ]}
            border="teal"
          />
          <InfoBox
            title="Treatment Steps"
            bullets={[
              'Digital smile design & preview',
              'Minimal enamel reshaping',
              'Custom lab-made veneers bonded in 2 weeks',
            ]}
            border="orange"
          />
        </div>

        {/* ---------- FAQ ---------- */}
        <SectionFAQ
          items={[
            {
              q: 'Are veneers permanent?',
              a: 'Yes – although they may need replacement after 10–15 years, veneers are a long-term commitment since a thin layer of enamel is removed.',
            },
            {
              q: 'Will they look fake or bulky?',
              a: 'Not at all – our veneers are ultra-thin and carefully colour-matched to blend seamlessly with your natural smile.',
            },
            {
              q: 'How should I care for my veneers?',
              a: 'Brush and floss daily, avoid hard foods like ice, and attend regular check-ups to keep your veneers looking their best.',
            },
          ]}
        />

        <CallBanner />
      </div>
    </>
  )
}

/* ---------- Reusable Components ---------- */

function InfoBox({
  title,
  bullets,
  border,
}: {
  title: string
  bullets: string[]
  border: 'teal' | 'orange'
}) {
  const borderClass = border === 'teal' ? 'border-teal-600' : 'border-orange-500'
  const iconClass = border === 'teal' ? 'text-teal-600 dark:text-teal-400' : 'text-orange-500 dark:text-orange-400'

  return (
    <div className={`bg-gray-50 dark:bg-gray-900 border-l-4 p-4 rounded shadow ${borderClass}`}>
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
        {bullets.map((text) => (
          <li key={text} className="flex gap-2">
            <CheckIcon className={`h-5 w-5 mt-0.5 ${iconClass}`} />
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SectionFAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Frequently Asked Questions</h2>
      <FaqList items={items.map(({ q, a }) => ({ question: q, answer: a }))} />
    </>
  )
}
