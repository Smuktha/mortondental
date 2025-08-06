export const metadata = {
  title: 'Fissure Sealants Noosa | Prevent Tooth Decay | Morton Dental',
  description:
    'Protect your teeth from decay with fissure sealants in Noosa. Morton Dental offers fast, painless treatments to seal deep grooves and prevent cavities.',
}

import Image from 'next/image'
import Link from 'next/link'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'

export default function FissureSealantsPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Fissure Sealants</h1>

        {/* Intro */}
        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              Sealants are thin, protective coatings painted onto the deep grooves of back teeth.
              They block out food and bacteria, dramatically lowering your child’s risk of cavities.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Fast • Painless • Effective</h2>
            <p className="mb-4">
              Placement takes only a few minutes per tooth—no needles or drilling required. Once set,
              sealants can last for several years.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <Image
              src="/images/prev1.avif"
              alt="Dental fissure sealant application"
              width={400}
              height={300}
              className="rounded shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* CTA */}
        <Link href="/contact-us">
          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition mb-10">
            Ask About Sealants »
          </button>
        </Link>

        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            colour="teal"
            title="Who Benefits Most?"
            points={[
              'Children & teens with deep grooves',
              'Adults prone to decay in molars',
              'Patients wearing braces (harder to clean)',
            ]}
          />
          <InfoBox
            colour="orange"
            title="How Sealants Are Applied"
            points={[
              'Teeth cleaned & dried',
              'Liquid resin painted on chewing surface',
              'Cured with a special light for 20 seconds',
            ]}
          />
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'Are sealants visible on my teeth?',
              answer: 'Sealants are clear or tooth-coloured, so they’re virtually unnoticeable.',
            },
            {
              question: 'How long will sealants last?',
              answer: 'They can last 3–5 years or longer; we’ll check them at each recall visit.',
            },
            {
              question: 'Do sealants replace fluoride?',
              answer: 'No—sealants protect grooves, while fluoride strengthens the entire enamel surface.',
            },
          ]}
        />

        <CallBanner />
      </div>
    </section>
  )
}
