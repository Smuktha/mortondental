import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'
// ---------- SEO Metadata ----------
export const metadata: Metadata = {
  title: 'Emergency Dentist Noosa | Morton Dental',
  description: 'Emergency dental care in Noosa for toothaches, broken teeth, abscesses & accidents. Call Morton Dental for same-day urgent appointments.',
}

export default function EmergencyDentalPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Emergency Dentist in Noosa</h1>
        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              Experiencing a toothache can be painful and scary. Every day, our <strong>practice</strong> is prepared to
              meet your dental emergency with efficient, compassionate care. We want to get you out of pain as quickly
              as possible, whether you’ve been seen for years or are new to our office.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Time Reserved Just for You</h2>
            <p className="mb-4">
              Each day, we block out specific amounts of time throughout our schedule to accommodate last-minute
              emergency patients. That way, we can see you in a timely manner. After all, <strong>dental emergencies
              always happen when you least expect them!</strong>
            </p>
            <p>
              Are we able to get you out of discomfort in one visit? It depends on the issue. Sometimes, treatment can
              start the same day. In others, we may need to provide a temporary or interim restoration until you can
              return for a more comprehensive one.
            </p>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative w-full h-[250px] rounded shadow-md overflow-hidden">
              <Image
                src="/images/treatment-room.jpg"
                alt="Woman with Tooth Pain"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mb-10">
          <Link href="/contact-us">
            <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
              Contact Us »
            </button>
          </Link>
        </div>

        {/* Types of Emergencies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Types of Dental Emergencies We Treat</h2>
          <p className="mb-6">
            Here are some of the most common reasons why you may need to make a same-day appointment at our practice:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
            {[
              'Broken or chipped teeth',
              'Tooth pain or hypersensitivity',
              'Denture repairs',
              'Crown or bridge falling off',
              'Gum infection and bleeding',
              'Abscessed tooth',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="italic text-sm mt-4 text-gray-600 dark:text-gray-400">
            If you're bleeding, use a clean cloth or gauze to apply mild pressure to your wound until it subsides.
            Heavy, uncontrolled bleeding or suspected broken jaw calls for immediate emergency medical care.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            title="Put Your Family’s Needs First"
            colour="teal"
            points={[
              'Emergency care for all ages',
              'Quick relief from toothaches',
              'Child-friendly treatments available',
            ]}
          />
          <InfoBox
            title="Affordable Emergency Care"
            colour="orange"
            points={[
              'Flexible payment options',
              'No surprise costs—fees discussed upfront',
              'Health fund and Medicare options available',
            ]}
          />
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'Can I get emergency dental care on weekends?',
              answer:
                'Please call us. We aim to accommodate urgent cases and may offer weekend availability in some situations.',
            },
            {
              question: 'What types of dental emergencies can you treat?',
              answer:
                'We handle toothaches, chipped or broken teeth, abscesses, gum infections, lost fillings or crowns, and more.',
            },
            {
              question: 'What should I do if I have a knocked-out tooth?',
              answer:
                'Place the tooth in milk or saliva and come to the clinic immediately. The sooner we see you, the better the chance of saving it.',
            },
            {
              question: 'What payment options are available for emergency dental care?',
              answer:
                'We offer flexible payments, accept most health funds, and clearly explain all costs before proceeding.',
            },
            {
              question: 'Can you coordinate care with my regular dentist?',
              answer:
                'Yes. If you’re visiting Noosa and already have a regular dentist, we’ll provide records and coordinate follow-up care.',
            },
            {
              question: 'Are there special provisions for veterans and children?',
              answer:
                'Yes, we support eligible patients through Medicare CDBS, DVA, and other community programs.',
            },
            {
              question: 'What if I’m on holiday and need emergency dental care?',
              answer:
                'We treat holidaymakers regularly. Call us and we’ll do our best to see you promptly and get you back to enjoying your stay.',
            },
          ]}
        />

        {/* Call Banner */}
        <CallBanner />
      </div>
    </section>
  )
}
