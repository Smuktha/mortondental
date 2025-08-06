export const metadata = {
  title: 'Wisdom Tooth Discomfort Relief | Morton Dental Noosa',
  description: 'Suffering wisdom‑tooth pain? Morton Dental explains common causes, home relief tips, and when to seek urgent care.',
};

import Link from 'next/link'
import Image from 'next/image'

export default function WisdomTeethDiscomfort() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-14 text-gray-800 dark:text-white">

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Image First */}
        <div className="relative w-full h-56 md:h-60 rounded overflow-hidden shadow-md">
          <Image
            src="/images/prev1.avif"
            alt="Wisdom Teeth Discomfort"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority
          />
        </div>

        {/* Heading and Intro */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400">Wisdom Teeth Discomfort in Noosa</h1>
          <p className="text-gray-700 dark:text-gray-300">
            It's not always obvious when wisdom teeth need to be removed. But several warning signs may indicate it's time for an evaluation.
            Knowing what to watch for can help prevent pain and long-term issues.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Below are common indicators that suggest your wisdom teeth might be causing trouble:
          </p>
        </div>
      </div>

      {/* Symptoms Section */}
      <section className="space-y-10">
        {[
          {
            title: '1. Ongoing Pain or Pressure',
            text: 'Aching at the back of your jaw or a sharp pain while chewing could mean your wisdom teeth are misaligned or impacted. This discomfort often spreads across nearby areas and worsens over time.',
          },
          {
            title: '2. Swollen or Red Gums',
            text: 'Redness or puffiness in the gum tissue around wisdom teeth is a typical sign of infection. This may interfere with chewing or oral hygiene. Our team can evaluate the inflammation and offer treatment to relieve the symptoms.',
          },
          {
            title: '3. Limited Jaw Movement',
            text: 'Struggling to fully open your mouth may indicate that your wisdom teeth are pushing against other teeth or are impacted. We’ll assess your jaw function and recommend solutions to restore comfort and mobility.',
          },
          {
            title: '4. Bad Breath or Foul Taste',
            text: 'Food and bacteria trapped around partially erupted teeth can cause halitosis and a lingering unpleasant taste. This is not only embarrassing but may also point to infection or decay.',
          },
        ].map(({ title, text }, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="bg-orange-50 dark:bg-orange-950 border-l-4 border-orange-400 dark:border-orange-600 p-6 rounded shadow space-y-4">
        <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-400">Let’s Solve the Discomfort</h3>
        <p className="text-gray-700 dark:text-gray-300">
          If you're facing any of these symptoms, don't wait. Morton Dental can perform a full evaluation, provide guidance,
          and develop a treatment plan that prioritizes your comfort and long-term health.
        </p>
        <p className="text-sm italic text-gray-600 dark:text-gray-400">
          *All surgical procedures involve risk. Always seek a second opinion from a qualified health practitioner.
        </p>
        <Link href="/appointment" className="inline-block bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600">
          CONTACT US »
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4 mt-12">
        Wisdom Teeth Removal – Noosa Heads | Junction | Noosaville QLD | (07) 5455 3577
      </footer>
    </div>
  )
}
