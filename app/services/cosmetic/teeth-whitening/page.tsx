'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'

export default function TeethWhiteningPage() {
  const url = 'https://www.mortondental.com.au/services/cosmetic/teeth-whitening'

  return (
    <>
      {/* ---------- SEO / HEAD ---------- */}
      <Head>
        <title>Teeth Whitening Noosa | Morton Dental</title>
        <meta
          name="description"
          content="Whiten your teeth by up to 8 shades with professional in-chair or take-home whitening options in Noosa. Fast, safe and effective treatments at Morton Dental."
        />
        <link rel="canonical" href={url} />
      </Head>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-teal-700 dark:text-teal-400">Teeth Whitening</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Brighten your smile by up to eight shades with our professional in-chair or take-home whitening kits.
        </p>

        {/* ---------- HERO IMAGE + BENEFITS ---------- */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
          <div className="flex-1 space-y-4">
            <strong className="text-orange-600 dark:text-orange-400">Fast • Safe • Effective</strong>
            <p className="text-gray-700 dark:text-gray-300">
              Our Philips Zoom® system removes deep stains while protecting enamel and reducing sensitivity.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/teeth-whitening.jpg"
              alt="Patient undergoing professional teeth whitening treatment"
              width={600}
              height={400}
              className="rounded-md shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ---------- CTA BUTTON ---------- */}
        <div className="mb-8">
          <Link
            href="/contact-us"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Ask About Whitening »
          </Link>
        </div>

        {/* ---------- INFO BOXES ---------- */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <InfoBox
            title="In-Chair Whitening"
            border="teal"
            bullets={['90-minute appointment', 'Instant results', 'Desensitising gel included']}
          />
          <InfoBox
            title="Take-Home Kits"
            border="orange"
            bullets={['Custom trays', 'Gentle, gradual brightening', 'Whiten while you sleep']}
          />
        </div>

        {/* ---------- FAQ SECTION ---------- */}
        <SectionFAQ
          items={[
            {
              q: 'Will whitening make my teeth sensitive?',
              a: 'We apply a remineralising gel so most patients feel minimal sensitivity.',
            },
            {
              q: 'How long does it last?',
              a: 'With good hygiene and occasional top-up, results can last 12–24 months.',
            },
          ]}
        />

        <CallBanner />
      </div>
    </>
  )
}

/* ---------- REUSABLE COMPONENTS ---------- */

function InfoBox({
  title,
  border,
  bullets,
}: {
  title: string
  border: 'teal' | 'orange'
  bullets: string[]
}) {
  const borderClass = border === 'teal' ? 'border-teal-600' : 'border-orange-500'
  const iconClass = border === 'teal' ? 'text-teal-600 dark:text-teal-400' : 'text-orange-500 dark:text-orange-400'

  return (
    <div className={`bg-gray-50 dark:bg-gray-900 border-l-4 p-4 rounded shadow ${borderClass}`}>
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
      {bullets.map((b) => (
        <p key={b} className="flex gap-2 text-gray-700 dark:text-gray-300">
          <CheckIcon className={`h-5 w-5 mt-1 ${iconClass}`} /> {b}
        </p>
      ))}
    </div>
  )
}

function SectionFAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Frequently Asked Questions
      </h2>
      <FaqList items={items.map(({ q, a }) => ({ question: q, answer: a }))} />
    </>
  )
}
