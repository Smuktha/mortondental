import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { InfoBox, FaqList, CallBanner } from '@/components/ServiceHelpers'

// ---------- SEO Metadata ----------
export const metadata: Metadata = {
  title: 'Custom Mouthguards Noosa | Morton Dental',
  description:
    'Custom dental mouthguards in Noosa for sports or grinding. Comfortable, durable protection for kids and adults. Book a fitting at Morton Dental today.',
}

export default function CustomMouthguardsPage() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Custom Mouthguards in Noosa</h1>

        <div className="md:flex gap-8 mb-10">
          <div className="md:w-2/3">
            <p className="mb-4">
              A properly fitted <strong>mouthguard</strong> can protect your teeth and jaw from sports injuries or night grinding. At Morton Dental, we offer professionally made custom mouthguards that offer superior comfort and protection compared to over-the-counter options.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Why Custom Mouthguards Matter</h2>
            <p className="mb-4">
              Custom-fit mouthguards are molded to your unique bite, giving you better retention, comfort, and protection during sports or sleep. They help prevent chipped teeth, jaw trauma, and concussions.
            </p>
            <p>
              Our practice offers mouthguards in various colors and thicknesses, suitable for both children and adults.
            </p>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative w-full h-[250px] rounded shadow-md overflow-hidden">
              <Image
                src="/images/mouthgaurds.jpg"
                alt="Custom Dental Mouthguard"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <Link href="/contact-us">
          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition mb-10">
            Book Your Custom Guard »
          </button>
        </Link>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoBox
            title="Perfect for Sports or Night-time Grinding"
            colour="teal"
            points={[
              'Protects against teeth grinding (bruxism)',
              'Helps prevent sports-related injuries',
              'More comfortable than store-bought guards',
            ]}
          />
          <InfoBox
            title="Tailored to Fit You"
            colour="orange"
            points={[
              'Molded from your dental impression',
              'More durable and longer lasting',
              'Doesn’t fall out while sleeping or playing sports',
            ]}
          />
        </div>

        <FaqList
          items={[
            {
              question: 'How often should I replace my mouthguard?',
              answer:
                'It’s recommended to replace it every 6–12 months, especially for children or if there’s wear and tear.',
            },
            {
              question: 'Can my child get a custom sports guard?',
              answer:
                'Absolutely. We create mouthguards for both children and adults involved in sports.',
            },
            {
              question: 'Do you offer nighttime guards for grinding?',
              answer:
                'Yes, we provide custom night guards designed to prevent damage caused by teeth grinding (bruxism).',
            },
            {
              question: 'Will a mouthguard affect my breathing or talking?',
              answer:
                'No. Custom mouthguards are designed to fit snugly and comfortably without interfering with normal breathing or speech.',
            },
          ]}
        />

        <CallBanner />
      </div>
    </section>
  )
}
