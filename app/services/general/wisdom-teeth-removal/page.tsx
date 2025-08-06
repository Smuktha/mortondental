
import Link from 'next/link'
import Image from 'next/image'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'
export const metadata = {
  title: 'Wisdom Teeth Removal Noosa | Gentle Extractions | Morton Dental',
  description:
    'Safe, gentle wisdom teeth extractions in Noosa. We remove impacted or painful teeth with minimal discomfort. Sedation options available.',
}

export default function WisdomTeethPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Wisdom Teeth Removal in Noosa</h1>

        {/* Intro with side image */}
        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              Wisdom teeth (third molars) typically erupt in late teens or early twenties. In many cases,
              there isn't enough space, which can lead to impaction, pain, and infection. Morton Dental offers
              gentle <strong>wisdom tooth removal</strong> tailored to your needs.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Gentle Surgical Removal</h2>
            <p className="mb-4">
              We’ll evaluate your wisdom teeth using digital X-rays to determine whether removal is necessary.
              The procedure is usually done in-office using local anaesthesia or sedation for your comfort.
            </p>
            <p>
              Post-operative instructions and care are provided to ensure a smooth recovery process.
            </p>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative w-full h-[250px] rounded shadow-md overflow-hidden">
              <Image
                src="/images/wisdom.jpg"
                alt="X-ray of Wisdom Teeth"
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
              Book Your Consultation »
            </button>
          </Link>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            title="Symptoms of Impacted Wisdom Teeth"
            colour="teal"
            points={[
              'Jaw pain or swelling',
              'Difficulty opening your mouth',
              'Red or swollen gums',
              'Recurring infections or bad breath',
            ]}
          />
          <InfoBox
            title="What to Expect After Surgery"
            colour="orange"
            points={[
              'Mild discomfort and swelling for 2–3 days',
              'Follow soft food diet temporarily',
              'Take prescribed medications as directed',
              'Keep area clean with gentle rinsing',
            ]}
          />
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'Do all wisdom teeth need removal?',
              answer:
                'Not always. If they’re healthy, fully erupted and not causing problems, removal may not be necessary. We’ll assess with X-rays first.',
            },
            {
              question: 'How long is the recovery process?',
              answer:
                'Most people feel comfortable within 3–5 days. Swelling usually peaks around day 2. Follow all after-care instructions for a smooth recovery.',
            },
            {
              question: 'Can I go to work the next day?',
              answer:
                'Plan to rest for 1–2 days. If your job is physically demanding or involves talking all day, allow extra time off as recommended by your dentist.',
            },
            {
              question: 'Do you offer sedation for anxious patients?',
              answer:
                'Yes. We provide local anaesthetic plus optional oral or IV sedation for nervous patients. Let us know your concerns so we can help.',
            },
          ]}
        />

        {/* Call to Action Banner */}
        <CallBanner />
      </div>
    </section>
  )
}
