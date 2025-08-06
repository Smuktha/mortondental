import Link from 'next/link'
import Image from 'next/image'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'
export const metadata = {
  title: 'Tooth Extraction Noosa | Gentle Dental Removal | Morton Dental',
  description:
    'Gentle, stress-free tooth extractions in Noosa. We offer wisdom teeth removal, emergency extractions, and options for replacing teeth after removal.',
}

export default function ToothExtractionPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Tooth Extractions in Noosa</h1>

        {/* Content Section */}
        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              At Morton Dental, we aim to preserve your natural teeth whenever possible. However, in cases of severe decay, trauma, or crowding, a gentle and carefully planned <strong>tooth extraction</strong> may be necessary.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Comfortable, Gentle Care</h2>
            <p className="mb-4">
              Our team uses the latest techniques and anaesthesia to make the extraction process as quick and painless as possible. Your comfort is our priority.
            </p>
            <p>
              After the procedure, we’ll provide instructions to help you recover smoothly, and discuss options for replacing the extracted tooth if needed.
            </p>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative w-full h-[250px] rounded shadow-md overflow-hidden">
              <Image
                src="/images/extractions.jpg"
                alt="Tooth Extraction Procedure"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-10">
          <Link href="/contact-us">
            <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
              Schedule a Consultation »
            </button>
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            title="When Is an Extraction Necessary?"
            colour="teal"
            points={[
              'Severe tooth decay or infection',
              'Advanced gum disease',
              'Preparation for orthodontic treatment',
              'Broken teeth that can’t be repaired',
            ]}
          />
          <InfoBox
            title="Post-Extraction Care Tips"
            colour="orange"
            points={[
              'Bite down on gauze to control bleeding',
              'Avoid smoking or drinking from a straw',
              'Eat soft foods and avoid hot drinks',
              'Use cold compress to reduce swelling',
            ]}
          />
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'Will I be in pain after the extraction?',
              answer: 'Some discomfort is normal, but we’ll provide pain relief instructions and medications to keep you comfortable.',
            },
            {
              question: 'How long does it take to recover?',
              answer: 'Initial healing takes a few days. Full recovery typically takes about one to two weeks.',
            },
            {
              question: 'Can I replace a missing tooth afterward?',
              answer: 'Yes, we offer replacement options like dental implants, bridges, or partial dentures.',
            },
            {
              question: 'Do you offer sedation during extractions?',
              answer: 'Yes, we provide sedation options for anxious patients to make the experience more relaxing.',
            },
          ]}
        />

        {/* Call to Action */}
        <CallBanner />
      </div>
    </section>
  )
}
