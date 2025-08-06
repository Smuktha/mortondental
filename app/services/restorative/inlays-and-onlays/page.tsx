export const metadata = {
  title: 'Inlays and Onlays Noosa | Morton Dental',
  description:
    'Durable ceramic inlays and onlays in Noosa. Ideal for strengthening back teeth with moderate damage—more conservative than crowns, stronger than fillings.',
}
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'
import Link from 'next/link'
import Image from 'next/image'

export default function InlaysOnlaysPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Inlays&nbsp;and&nbsp;Onlays</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        When a filling is too small and a crown too large, lab-made inlays and
        onlays are the perfect compromise – restoring strength while preserving
        healthy enamel.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
        <div className="flex-1 space-y-4">
          <p>
            <strong className="text-orange-600">
              Conservative • Precise • Long-Lasting
            </strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Sometimes called “three-quarter crowns”, they’re milled from solid
            ceramic for a snug, puzzle-piece fit.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/inlays.jpg"
            alt="Ceramic inlay being placed"
            width={500}
            height={333}
            className="rounded-md shadow-md w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="mb-8">
        <Link
          href="/contact-us"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Ask About Inlays & Onlays »
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-10">
        {/* Inlay Box */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-teal-600 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Inlay Facts
          </h2>
          {[
            'Fits inside cusps of the tooth',
            'Ideal when cusp tips are intact',
            'Replaces large old metal fillings',
          ].map((t) => (
            <p key={t} className="flex gap-2 text-gray-700 dark:text-gray-300">
              <CheckIcon className="h-5 w-5 text-teal-600 mt-1" /> {t}
            </p>
          ))}
        </div>

        {/* Onlay Box */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-orange-500 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Onlay Facts
          </h2>
          {[
            'Builds up worn or broken cusps',
            'Covers a larger outside surface',
            'Preserves more tooth than a full crown',
          ].map((t) => (
            <p key={t} className="flex gap-2 text-gray-700 dark:text-gray-300">
              <CheckIcon className="h-5 w-5 text-orange-500 mt-1" /> {t}
            </p>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <FaqList
        items={[
          {
            question: 'How many visits are required?',
            answer:
              'Two – one to prepare the tooth and take impressions, another about two weeks later to bond the inlay/onlay.',
          },
          {
            question: 'Will the treatment hurt?',
            answer:
              'Your tooth is completely numbed; most patients feel only mild tenderness afterwards.',
          },
          {
            question: 'How do I look after an inlay/onlay?',
            answer:
              'Brush and floss normally – good hygiene extends the life of any restoration.',
          },
        ]}
      />

      <CallBanner />
    </div>
  )
}
