'use client'

import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export function InfoBox({
  title,
  points,
  colour,
}: {
  title: string
  points: string[]
  colour: 'teal' | 'orange'
}) {
  const c =
    colour === 'teal'
      ? 'border-teal-500 text-teal-700'
      : 'border-orange-500 text-orange-700'
  return (
    <div className={`bg-gray-50 p-5 border-l-4 ${c} shadow-sm`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="space-y-1 text-sm text-gray-700">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <CheckCircleIcon className="w-4 h-4 text-current mt-0.5" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ✅ Updated: Now supports questions with answers
type FaqItem = {
  question: string
  answer: string
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="font-medium text-gray-800">{item.question}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CallBanner() {
  return (
    <div className="bg-teal-100 p-6 text-center rounded shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Need More Info?</h3>
      <p className="text-sm text-gray-700">
        <Link href="/contact-us" className="text-teal-600 font-semibold hover:underline">
          Contact Morton Dental
        </Link>{' '}
        to speak with our team today.
      </p>
    </div>
  )
}
