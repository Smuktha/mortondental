import Link from 'next/link'
import Image from 'next/image'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'
export const metadata = {
  title: 'Root Canal Treatment Noosa | Morton Dental',
  description:
    'Gentle root canal therapy in Noosa to save your natural tooth. Comfortable care, modern techniques, and fast recovery to relieve pain and restore function.',
}

export default function RootCanalPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Root Canal Therapy</h1>

        {/* Intro Section */}
        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              A root canal removes infected nerve tissue, relieves pain, and lets you keep your natural tooth.
              Modern techniques make the procedure comfortable and predictable.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Pain Relief in One Visit</h2>
            <p className="mb-4">
              Most patients feel immediate relief once the tooth pulp is removed and the canals are disinfected.
              We then seal the root and usually place a crown for long-term protection.
            </p>
            <p>
              With proper care, a root-canal-treated tooth can last as long as any other tooth in your mouth.
            </p>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative w-full h-[250px] rounded shadow-md overflow-hidden">
              <Image
                src="/images/rootcanel.jpg"
                alt="X-ray of root canal tooth"
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
              Schedule Consultation »
            </button>
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            colour="teal"
            title="Signs You May Need a Root Canal"
            points={[
              'Severe toothache',
              'Lingering sensitivity to hot/cold',
              'Swelling or gum boil',
              'Darkening of the tooth',
            ]}
          />
          <InfoBox
            colour="orange"
            title="After-Care Tips"
            points={[
              'Avoid chewing until numbness wears off',
              'Take prescribed antibiotics fully',
              'Return for a crown to prevent fractures',
            ]}
          />
        </div>

        {/* FAQs */}
        <FaqList
          items={[
            {
              question: 'Is a root canal painful?',
              answer: 'No, most patients report little to no discomfort during the procedure. It actually relieves pain caused by infection.',
            },
            {
              question: 'How long does the appointment take?',
              answer: 'A typical root canal takes about 60 to 90 minutes depending on the tooth and severity of infection.',
            },
            {
              question: 'Will I need antibiotics?',
              answer: 'Antibiotics may be prescribed if there is swelling or infection present before the procedure.',
            },
            {
              question: 'How much does root canal therapy cost?',
              answer: 'Cost varies based on the tooth and treatment complexity. We provide full quotes before treatment.',
            },
          ]}
        />

        {/* Call to Action Banner */}
        <CallBanner />
      </div>
    </section>
  )
}
