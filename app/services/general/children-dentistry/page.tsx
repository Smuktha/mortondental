import Link from 'next/link'
import Image from 'next/image'
import {
  SparklesIcon,
  ShieldCheckIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline'
import { FaqList, CallBanner } from '@/components/ServiceHelpers'
import type { Metadata } from 'next'

/* ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "Children's Dentistry - Dentist Noosa",
  description:
    'Fun, gentle dental care for kids in Noosa. Fissure sealants, fluoride, hygiene coaching, and first‑visit check‑ups in a family‑friendly clinic.',
}

export default function ChildrensDentistryPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-56 md:h-72">
        <Image
          src="/images/children.jpg"
          alt="Smiling child at Morton Dental"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
            Children’s Dentistry in&nbsp;Noosa
          </h1>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-200">
        {/* Intro */}
        <p className="text-lg text-gray-700 dark:text-gray-300">
          A positive first dental experience sets your child up for lifelong
          oral health. Our friendly team uses gentle techniques, kid‑friendly
          language, and plenty of encouragement to make every visit fun.
        </p>

        {/* Kid‑friendly services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            Icon={SparklesIcon}
            title="Happy First Visits"
            colour="teal"
            desc="Quick, gentle check‑ups introduce your child to the sights and sounds of the dental chair—no stress or fear."
          />
          <FeatureCard
            Icon={ShieldCheckIcon}
            title="Fissure Sealants & Fluoride"
            colour="yellow"
            desc="Protective sealants and fluoride strengthen young teeth and prevent decay in hard‑to‑clean grooves."
          />
          <FeatureCard
            Icon={FaceSmileIcon}
            title="Fun Hygiene Coaching"
            colour="indigo"
            desc="Our hygienists teach brushing and flossing with interactive demonstrations and take‑home tips."
          />
        </div>

        {/* Info box */}
        <div className="bg-teal-50 dark:bg-teal-900 border-l-4 border-teal-600 dark:border-teal-400 p-6 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-2">
            When Should My Child First Visit?
          </h2>
          <p className="text-gray-700 dark:text-gray-200">
            We recommend booking a “happy visit” by their{' '}
            <strong>first birthday</strong> or when the first tooth appears.
            Early appointments help us monitor development and keep baby teeth
            healthy.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-300">
            Ready to Book Your Child’s Check‑Up?
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            We can’t wait to meet your little one and make dental care fun!
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Book a Happy Visit »
          </Link>
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'At what age do you start using fluoride toothpaste?',
              answer:
                'We usually recommend using a rice‑sized amount of low‑fluoride toothpaste from 18 months, unless otherwise advised.',
            },
            {
              question: 'Does my child need X‑rays at their first visit?',
              answer:
                'Not always. We only take X‑rays if clinically necessary to check for decay or monitor development.',
            },
            {
              question: 'Are kids eligible for bulk‑billed Medicare CDBS?',
              answer:
                'Yes. Many children qualify for Medicare’s Child Dental Benefits Schedule. We can check eligibility for you.',
            },
            {
              question: 'How can I help my child stop thumb‑sucking?',
              answer:
                'Our team offers gentle tips and encouragement. We’ll guide you with strategies if the habit persists beyond age 4–5.',
            },
          ]}
        />

        <CallBanner />
      </section>
    </>
  )
}

/* ---------- Reusable Card ---------- */
function FeatureCard({
  Icon,
  title,
  desc,
  colour,
}: {
  Icon: React.ElementType
  title: string
  desc: string
  colour: 'teal' | 'yellow' | 'indigo'
}) {
  const colourMap = {
    teal: 'text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400',
    yellow:
      'text-yellow-500 dark:text-yellow-300 border-yellow-500 dark:border-yellow-300',
    indigo:
      'text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400',
  }
  return (
    <div
      className={`flex items-start gap-4 bg-gray-50 dark:bg-gray-900 border-l-4 ${colourMap[colour]} p-5 rounded shadow-sm`}
    >
      <Icon className="w-7 h-7 shrink-0" />
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
      </div>
    </div>
  )
}
