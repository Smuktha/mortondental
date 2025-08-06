export const metadata = {
  title: 'Oral Hygiene Appointments Noosa | Morton Dental',
  description:
    'Professional oral hygiene visits in Noosa. Scale & cleans, brushing tips, and personalised care to keep your smile healthy between dentist check-ups.',
}

import Image from 'next/image'
import Link from 'next/link'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'

export default function OralHygieneCarePage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Professional Oral Hygiene Care</h1>

        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              Even with excellent brushing, plaque hardens into calculus that can only be removed
              by a dental professional. Our hygienists provide gentle scaling, polishing, and
              personalised home-care coaching.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">What to Expect at Your Clean</h2>
            <p className="mb-4">
              We use ultrasonic scalers to comfortably lift deposits, then polish away stains and apply fluoride for
              extra strength. Your breath will feel fresher and your smile brighter.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <Image
              src="/images/oral.jpg"
              alt="Dental hygienist cleaning teeth"
              width={400}
              height={300}
              className="rounded shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>

        <Link href="/contact-us">
          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition mb-10">
            Schedule Your Clean »
          </button>
        </Link>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            colour="teal"
            title="Why Regular Cleans Matter"
            points={[
              'Prevent gum disease',
              'Remove hard calculus',
              'Brighten and polish enamel',
            ]}
          />
          <InfoBox
            colour="orange"
            title="Personalised Home-Care Tips"
            points={[
              'Proper brushing technique',
              'How to floss or use interdental brushes',
              'Dietary advice to reduce decay risk',
            ]}
          />
        </div>

        <FaqList
          items={[
            {
              question: 'Will the clean hurt?',
              answer: 'Most patients find modern ultrasonic scaling comfortable. Let us know if you have sensitivity—we can adjust.',
            },
            {
              question: 'How often should I have a professional clean?',
              answer: 'Every 6 months for most people; more often if you have gum disease or braces.',
            },
            {
              question: 'Do you offer air-polishing?',
              answer: 'Yes—air polish can gently remove stubborn surface stains for an extra-bright smile.',
            },
          ]}
        />

        <CallBanner />
      </div>
    </section>
  )
}
