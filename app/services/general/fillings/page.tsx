import Link from 'next/link'
import Image from 'next/image'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'
export const metadata = {
  title: 'Tooth-Coloured Dental Fillings Noosa | Morton Dental',
  description:
    'Gentle, natural-looking tooth fillings in Noosa. We use safe, durable materials to repair cavities and restore your smile’s function and appearance.',
}

export default function FillingsPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">White Tooth-Coloured Fillings</h1>

        {/* Intro with side image */}
        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              Composite (white) fillings restore cavities without visible silver. They bond directly to enamel
              for a strong, natural-looking repair — and they’re mercury-free.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Conservative &amp; Durable</h2>
            <p className="mb-4">
              Our dentists remove minimal tooth structure, layer in composite resin, then cure and polish
              for a seamless finish. Most appointments take less than an hour.
            </p>
            <p>
              You can eat and drink immediately after your visit, enjoying a smile that looks exactly the
              way it should — only healthier!
            </p>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative w-full h-[250px] rounded shadow-md overflow-hidden">
              <Image
                src="/images/filling.jpg"
                alt="Placing a white composite filling"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-10">
          <Link href="/contact-us">
            <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
              Book an Exam »
            </button>
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            colour="teal"
            title="Why Choose Composite?"
            points={[
              'Blends with natural enamel',
              'Mercury-free & minimally invasive',
              'Bonds to strengthen the tooth',
            ]}
          />
          <InfoBox
            colour="orange"
            title="Other Filling Materials"
            points={[
              'Ceramic inlays/onlays for larger repairs',
              'Glass-ionomer for low-stress areas',
              'We’ll recommend the best option for you',
            ]}
          />
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'How long do composite fillings last?',
              answer: 'With proper care, composite fillings can last 5–10 years or more. Regular check-ups help monitor their condition.',
            },
            {
              question: 'Is the procedure painful?',
              answer: 'We use local anaesthesia to ensure you’re completely comfortable. Most patients feel no pain during the filling.',
            },
            {
              question: 'Can I replace old metal fillings?',
              answer: 'Yes. We can safely remove old amalgam (silver) fillings and replace them with natural-looking composites.',
            },
            {
              question: 'Will my insurance cover white fillings?',
              answer: 'Most insurers cover composite fillings in visible teeth. We can provide a quote to check your benefits.',
            },
          ]}
        />

        {/* Call to action banner */}
        <CallBanner />
      </div>
    </section>
  )
}
