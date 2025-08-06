export const metadata = {
  title: 'How We Can Help | Morton Dental Noosa',
  description:
    'Discover how Morton Dental supports your oral health with expert treatments, caring service, and tailored dental solutions for every stage of life.',
}
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HowWeCanHelp() {
  return (
    <>
      <Head>
        <title>How We Can Help | Morton Dental Noosa</title>
        <meta
          name="description"
          content="Discover how Morton Dental supports your oral health with expert treatments, caring service, and tailored dental solutions for every stage of life."
        />
      </Head>

      <div className="p-8 max-w-6xl mx-auto text-gray-800 dark:text-white">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-teal-800 dark:text-teal-400 text-center mb-4">
          How Morton Dental Supports You
        </h1>

        {/* Introduction */}
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
          At{' '}
          <Link href="/" className="text-teal-600 dark:text-teal-400 underline font-medium">
            Morton Dental
          </Link>
          , we’re here to help you maintain a confident, healthy smile. Whether you’re facing a dental concern or simply want
          routine care, we offer treatments to support every stage of your oral health.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            ['Tooth Extraction', '/HowWeCanHelp/tooth-extraction'],
            ['Wisdom Teeth Removal', '/HowWeCanHelp/wisdom-teeth-removal'],
            ['Replacing Missing Teeth', '/HowWeCanHelp/replacing-missing-teeth'],
            ['Wisdom Teeth Discomfort', '/HowWeCanHelp/wisdom-teeth-discomfort'],
            ['Teeth Grinding', '/HowWeCanHelp/teeth-grinding'],
            ['Family Dental Care', '/HowWeCanHelp/family-care'],
            ['Children’s Oral Health', '/HowWeCanHelp/oral-care-for-kids'],
            ['Healthy Gums', '/HowWeCanHelp/healthy-gums'],
            ['Gum Concerns & Pimples', '/HowWeCanHelp/gum-pimples'],
          ].map(([title, href], index) => (
            <Link
              key={index}
              href={href}
              className="block bg-white dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-gray-700 border border-teal-100 dark:border-gray-700 p-4 rounded shadow transition"
            >
              <h3 className="text-teal-700 dark:text-teal-400 font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Learn more →</p>
            </Link>
          ))}
        </div>

        {/* Image & Call-to-Action */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative w-full h-[350px] rounded overflow-hidden shadow">
            <Image
              src="/images/patient-completing-form.jpg"
              alt="Smiling patient at dental clinic"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>

          {/* Book Appointment */}
          <div className="bg-orange-50 dark:bg-orange-950 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400 mb-3">
              Book Your Appointment Today
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your dental journey starts with a simple visit. Whether you're due for a check-up or have a concern,
              our friendly team is ready to help.
            </p>
            <Link
              href="/appointment"
              className="inline-block bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 font-semibold transition"
            >
              Schedule Now »
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 pt-4">
          Your Dental Wellness Partner – Morton Dental | (07) 5455 3577
        </div>
      </div>
    </>
  )
}
