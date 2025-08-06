export const metadata = {
  title: 'Dental Crowns & Bridges Noosa | Morton Dental',
  description:
    'Protect and restore damaged teeth with crowns and bridges in Noosa. We offer natural-looking restorations that improve function and appearance.',
}
import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import { CallBanner, FaqList } from '@/components/ServiceHelpers'

export default function CrownsAndBridgesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      {/* ------------ HEADING & INTRO ------------ */}
      <h1 className="text-3xl font-bold mb-4">Crowns&nbsp;and&nbsp;Bridges</h1>
      <p className="mb-4">
        Our custom-matched ceramic crowns and bridges repair damage caused by
        wear, decay or accidents – restoring both strength and appearance while
        keeping you within budget.
      </p>

      {/* ------------ IMAGE + USP BANNER ------------ */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center my-6">
        <div className="flex-1 space-y-4">
          <p>
            <strong className="text-orange-600">Durable • Aesthetic • Budget-Friendly</strong>
          </p>
          <p>
            Each crown or bridge is handcrafted from high-strength ceramics to
            blend seamlessly with your natural smile.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/crown.jpg"
            alt="Dental crown and bridge illustration"
            width={500}
            height={333}
            className="rounded-md shadow-md w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* ------------ CTA BUTTON ------------ */}
      <div className="mb-8">
        <Link
          href="/contact-us"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Ask About Crowns &amp; Bridges »
        </Link>
      </div>

      {/* ------------ INFO BOXES ------------ */}
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {/* Box 1 */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-teal-600 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            When Is a Crown Needed?
          </h2>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <CheckIcon className="h-5 w-5 text-teal-600" />
              Structural cracks or large fillings
            </li>
            <li className="flex gap-2">
              <CheckIcon className="h-5 w-5 text-teal-600" />
              Post-root-canal protection
            </li>
            <li className="flex gap-2">
              <CheckIcon className="h-5 w-5 text-teal-600" />
              Fractured or heavily worn teeth
            </li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-orange-500 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Bridge Benefits
          </h2>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <CheckIcon className="h-5 w-5 text-orange-500" />
              Closes gaps left by missing teeth
            </li>
            <li className="flex gap-2">
              <CheckIcon className="h-5 w-5 text-orange-500" />
              Prevents neighbouring tooth movement
            </li>
            <li className="flex gap-2">
              <CheckIcon className="h-5 w-5 text-orange-500" />
              Restores bite and confidence
            </li>
          </ul>
        </div>
      </div>

      {/* ------------ FAQ ------------ */}
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <FaqList
        items={[
          {
            question: 'How long will a crown last?',
            answer:
              'With proper home care and regular check-ups, many crowns last 10–15 years or longer.',
          },
          {
            question: 'Is the crown procedure painful?',
            answer:
              'The tooth is fully numbed; most patients report only mild sensitivity afterwards.',
          },
          {
            question: 'Can I floss around a bridge?',
            answer:
              'Yes – use super-floss or a floss-threader to clean underneath the replacement tooth each day.',
          },
        ]}
      />

      <CallBanner />
    </div>
  )
}
