export const metadata = {
  title: 'Custom Dentures Noosa | Morton Dental',
  description:
    'Regain confidence with natural-looking full or partial dentures from Morton Dental Noosa. Comfortable, durable tooth replacement tailored to your needs.',
}
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'
import Link from 'next/link'
import Image from 'next/image'

export default function DenturesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Dentures</h1>
      <p className="mb-4">
        Custom full or partial dentures make replacing missing teeth affordable
        and convenient – with flexible payment plans available.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
        <div className="flex-1 space-y-4">
          <p>
            <strong className="text-orange-600">
              Natural-Looking • Comfortable • Removable or Implant-Stabilised
            </strong>
          </p>
          <p>
            Choose the solution that best matches your lifestyle – from
            traditional plates to implant-anchored options for extra security.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/denture.jpg"
            alt="Smiling patient with new dentures"
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
          Ask About Dentures »
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-10">
        {/* Full Dentures Box */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-teal-600 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Full Dentures
          </h2>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            {[
              'Replace all upper or lower teeth',
              'Rely on suction or 4 implants for retention',
              'Easily removed for cleaning',
            ].map((text) => (
              <li key={text} className="flex gap-2">
                <CheckIcon className="h-5 w-5 text-teal-600" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Partial Dentures Box */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-orange-500 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Partial Dentures
          </h2>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            {[
              'Replace multiple teeth while keeping the rest',
              'Metal / acrylic frameworks for strength',
              'Affordable alternative to bridges or implants',
            ].map((text) => (
              <li key={text} className="flex gap-2">
                <CheckIcon className="h-5 w-5 text-orange-500" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <FaqList
        items={[
          {
            question: 'How do I clean my dentures?',
            answer:
              'Remove them nightly, soak in effervescent solution, brush gently and rinse before wearing again.',
          },
          {
            question: 'Will dentures affect my speech?',
            answer:
              'A short adjustment period is normal; practising reading aloud speeds up adaptation.',
          },
          {
            question: 'Can dentures be stabilised with implants later?',
            answer:
              'Yes – many full denture wearers upgrade to 2–4 implants for added security.',
          },
        ]}
      />

      <CallBanner />
    </div>
  )
}
