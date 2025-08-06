export const metadata = {
  title: 'Tooth Extraction Advice | Morton Dental Noosa',
  description: 'Learn when a tooth needs to be extracted, what the procedure involves, and how Morton Dental Noosa keeps you comfortable every step of the way.',
};

import Link from 'next/link'
import Image from 'next/image'

export default function ToothExtraction() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 text-gray-800 dark:text-white">

      {/* Header Section */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400">Tooth Extraction in Noosa</h1>
          <p className="text-gray-700 dark:text-gray-300">
            At Morton Dental, we prioritise preserving your natural teeth—but in some cases, an extraction is the best option for your oral health.
            Here's what to know about why extractions are needed, what the procedure involves, and how to recover smoothly.
          </p>
          <Link href="/appointment" className="inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600">
            NEW PATIENTS »
          </Link>
        </div>
        <div className="relative w-full h-52 md:h-60 rounded overflow-hidden shadow-md">
          <Image
            src="/images/wisdom.jpg"
            alt="Tooth Extraction"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority
          />
        </div>
      </div>

      {/* Reasons for Extraction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">Why Might a Tooth Need Extraction?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Severe Decay:</strong> Too advanced for filling or root canal treatment.</li>
          <li><strong>Gum Disease:</strong> Advanced cases where the tooth loses support.</li>
          <li><strong>Impacted Wisdom Teeth:</strong> Trapped or misaligned, causing pain or pressure.</li>
          <li><strong>Injury:</strong> Trauma resulting in irreparable damage.</li>
          <li><strong>Orthodontic Reasons:</strong> To make room for proper alignment.</li>
          <li><strong>Infections or Abscess:</strong> Spreading infections that can't be treated conservatively.</li>
          <li><strong>Extra Teeth:</strong> Supernumerary teeth crowding the mouth.</li>
        </ul>
      </section>

      {/* What to Expect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">What Happens During the Procedure?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          A full examination and X-rays are completed beforehand. If an extraction is needed, we use local anaesthesia to keep you comfortable. 
          After removing the tooth, we apply gauze to aid blood clotting and healing.
        </p>
      </section>

      {/* Healing Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">Healing Timeline After Extraction</h2>
        <p className="text-gray-700 dark:text-gray-300">The recovery process generally looks like this:</p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {[
            ['Days 1–2', 'Bleeding and swelling are normal. Use gauze, rest, and apply ice packs.'],
            ['Days 3–7', 'Swelling reduces, pain eases. Soft food and gentle hygiene recommended.'],
            ['Days 8–14', 'Healing progresses well. Most symptoms resolve by the second week.']
          ].map(([day, text], idx) => (
            <div key={idx} className="p-4 border dark:border-gray-700 rounded shadow dark:shadow-md">
              <h3 className="font-bold">{day}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Post-Care */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">Aftercare Tips for Smooth Healing</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Manage Bleeding:</strong> Bite gently on gauze, don’t disturb the clot.</li>
          <li><strong>Rest:</strong> Avoid exercise and bending during the first 24 hours.</li>
          <li><strong>Cold Compress:</strong> Use ice packs to reduce swelling early on.</li>
          <li><strong>Pain Relief:</strong> Follow your dentist’s instructions for medication.</li>
          <li><strong>Diet:</strong> Stick to cool, soft foods. Avoid heat, crunch, or spice.</li>
          <li><strong>Oral Hygiene:</strong> Avoid rinsing the first day. Afterward, rinse with salt water.</li>
          <li><strong>No Smoking or Alcohol:</strong> Both delay healing and increase risk of dry socket.</li>
        </ul>
      </section>

      {/* Follow-Up */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">Why Follow-Up Matters</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Scheduled checkups help us monitor your healing and remove sutures if needed. Please don’t skip them—they’re important for long-term results.
        </p>
      </section>

      {/* CTA & Home Care */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300">At-Home Recovery Support</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Your dental team will guide you with specific advice tailored to your extraction type. 
            If you experience persistent bleeding, pain, or swelling—reach out right away.
          </p>
        </div>

        <div className="bg-orange-100 dark:bg-orange-950 border border-orange-300 dark:border-orange-700 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-400">Book an Appointment</h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you're experiencing dental discomfort or suspect you may need a tooth removed, don’t wait. Morton Dental is here to help.
          </p>
          <Link href="/contact-us" className="inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-orange-600 mt-2">
            CONTACT US »
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4 mt-12">
        Tooth Extractions – Noosa Heads | Junction | Noosaville QLD | (07) 5455 3577
      </footer>
    </div>
  )
}
