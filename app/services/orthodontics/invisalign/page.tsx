export const metadata = {
  title: 'Invisalign Noosa | Clear Aligners | Morton Dental',
  description:
    'Straighten your teeth discreetly with Invisalign in Noosa. Removable, comfortable aligners for teens and adults — no brackets or wires needed.',
}

import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'

export default function ClearAlignersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      {/* ------------ HEADING & INTRO ------------ */}
      <h1 className="text-3xl font-bold mb-4">Clear Aligners</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Clear aligners offer a discreet, removable way to straighten teeth — ideal for busy teens and adults who want a nearly invisible orthodontic solution.
      </p>

      {/* ------------ HERO IMAGE + USP BANNER ------------ */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
        <div className="flex-1 space-y-4">
          <p>
            <strong className="text-orange-600">Invisible • Comfortable • Removable</strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Custom-moulded trays gradually shift your teeth, and you can remove them for meals, brushing, and special occasions. Many cases finish in as little as&nbsp;6–18&nbsp;months.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/invisalign.jpg"
            alt="Patient holding clear aligner tray"
            width={500}
            height={333}
            className="rounded-md shadow-md w-full h-auto"
          />
        </div>
      </div>

      {/* ------------ CTA BUTTON ------------ */}
      <div className="mb-8">
        <Link
          href="/contact-us"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Ask About Clear Aligners »
        </Link>
      </div>

      {/* ------------ INFO BOXES ------------ */}
      <div className="grid md:grid-cols-2 gap-6 my-10">
        <InfoBox
          colour="teal"
          title="Why Patients Love Aligners"
          bullets={[
            'Nearly invisible in day-to-day life',
            'No brackets or wires to irritate cheeks',
            'Remove trays to eat, drink & brush',
          ]}
        />
        <InfoBox
          colour="orange"
          title="The Aligner Process"
          bullets={[
            '3D digital scan & treatment plan',
            'Series of trays changed every 1–2 weeks',
            'Retainers worn at night to maintain results',
          ]}
        />
      </div>

      {/* ------------ FAQ SECTION ------------ */}
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <FaqList
        items={[
          {
            question: 'How many hours a day do I wear them?',
            answer: 'For best results, 20–22 hours per day – remove only for meals and cleaning.',
          },
          {
            question: 'Will aligners affect my speech?',
            answer: 'A slight lisp is common for a day or two, but it quickly disappears as you adapt.',
          },
          {
            question: 'Do aligners hurt?',
            answer: 'You’ll feel gentle pressure when switching to a new set, but discomfort is minimal compared with braces.',
          },
        ]}
      />

      {/* ------------ CONTACT BANNER ------------ */}
      <CallBanner />
    </div>
  )
}

/* ---------- DARK MODE FRIENDLY INFO BOX COMPONENT ---------- */
function InfoBox({
  colour,
  title,
  bullets,
}: {
  colour: 'teal' | 'orange'
  title: string
  bullets: string[]
}) {
  const borderClass = colour === 'teal' ? 'border-teal-600' : 'border-orange-500'
  const iconClass = colour === 'teal' ? 'text-teal-600' : 'text-orange-500'

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 ${borderClass} border-l-4 p-4 rounded shadow`}>
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
      {bullets.map((b) => (
        <p key={b} className="flex gap-2 text-gray-700 dark:text-gray-300">
          <CheckIcon className={`h-5 w-5 mt-1 ${iconClass}`} /> {b}
        </p>
      ))}
    </div>
  )
}
