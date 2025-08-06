export const metadata = {
  title: 'New Dental Patients Noosa | What to Expect | Morton Dental',
  description:
    'Everything new dental patients need to know at Morton Dental Noosa — from your first visit and insurance to no-gap check-ups and flexible payments.',
}

import Link from 'next/link'
import Image from 'next/image'

export default function SpecialOfferCard() {
  return (
    <section className="w-full bg-white dark:bg-black py-12">
      <div className="max-w-6xl mx-auto space-y-12 px-6">

        {/* --- FREE Implant Consultation --- */}
        <div className="relative h-[400px] rounded overflow-hidden shadow-md">
          <Image
            src="/images/offer2.jpg"
            alt="Free Implant Consultation"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 flex items-center px-10">
            <div className="max-w-lg text-white">
              <h3 className="text-4xl font-extrabold mb-4">Complimentary Implant Consultation</h3>
              <p className="text-lg mb-6">
                Thinking about dental implants? Talk to our experienced team during your free consultation and
                explore whether this is the right option for you.
              </p>
              <Link
                href="/appointment"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>

        {/* --- Special Offer for ALL Patients --- */}
        <div className="relative h-[400px] rounded overflow-hidden shadow-md">
          <Image
            src="/images/offer4.jpg"
            alt="Special Offer for All Patients"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 flex items-center px-10">
            <div className="max-w-lg text-white">
              <h3 className="text-4xl font-extrabold mb-4">Comprehensive Check-Up & Clean – $199</h3>
              <p className="text-lg mb-6">
                Available for New and Existing Patients. Includes thorough exam, x-rays, fluoride treatment and clean. No gap for eligible health fund members!
              </p>
              <ul className="list-disc ml-5 text-base mb-6">
                <li>Dental Check-Up</li>
                <li>Professional Clean</li>
                <li>Fluoride & X-rays</li>
              </ul>
              <Link
                href="/appointment"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>

        {/* --- Whitening Offer --- */}
        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Whiter Teeth for Just $599</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Brighten your smile with our in-chair whitening session (valued at $990). Get dramatic results with professional-grade treatment.
            </p>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
              *Consultation and check-up required prior to treatment.
            </p>
            <Link
              href="/appointment"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded"
            >
              BOOK NOW
            </Link>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/images/offer3.jpg"
              alt="Teeth Whitening Offer"
              width={250}
              height={250}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
