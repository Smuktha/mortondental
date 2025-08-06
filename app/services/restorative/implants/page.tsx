export const metadata = {
  title: 'Dental Implants Noosa | Morton Dental',
  description:
    'Permanent tooth replacement with dental implants in Noosa. Strong, natural-looking solutions to restore your smile’s appearance and function.',
}
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'
import Link from 'next/link'
import Image from 'next/image'

export default function ImplantsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Dental Implants</h1>
      <p className="mb-4">
        Dental implants are the modern gold-standard for replacing missing
        teeth – outlasting all other options while leaving neighbouring teeth
        untouched.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
        <div className="flex-1 space-y-4">
          <p>
            <strong className="text-orange-600">
              Strong • Natural-Feeling • Bone-Preserving
            </strong>
          </p>
          <p>
            A biocompatible titanium root integrates with your jawbone and is
            topped with a custom ceramic crown for a seamless finish.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/implants.jpg"
            alt="Dental implant illustration"
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
          Ask About Implants »
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-10">
        {/* Key Advantages */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-teal-600 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Key Advantages
          </h2>
          {[
            'Longest-lasting solution',
            'Non-invasive to neighbouring teeth',
            'Prevents bone loss & maintains facial profile',
          ].map((t) => (
            <p key={t} className="flex gap-2 text-gray-700 dark:text-gray-300">
              <CheckIcon className="h-5 w-5 text-teal-600 mt-1" /> {t}
            </p>
          ))}
        </div>

        {/* How Implants Work */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-orange-500 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            How Implants Work
          </h2>
          {[
            'Titanium post placed in jaw under local anaesthetic',
            'Bone fuses around implant (osseointegration)',
            'Crown / bridge / denture attached once healed',
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
            question: 'Is the implant procedure painful?',
            answer:
              'No – the area is completely numbed, and most patients resume normal activities the next day.',
          },
          {
            question: 'How long do implants last?',
            answer:
              'With good oral hygiene they often last decades, making them a great investment.',
          },
          {
            question: 'Can implants replace several teeth?',
            answer:
              'Yes – two implants can support a three- to five-tooth bridge, or stabilise a full arch denture.',
          },
        ]}
      />

      <CallBanner />
    </div>
  )
}
