export const metadata = {
  title: 'Teeth Grinding (Bruxism) Help | Morton Dental Noosa',
  description: 'Find out why you grind or clench, how it harms your teeth, and the custom night‑guard solutions we offer in Noosa.',
};

import Link from 'next/link'
import Image from 'next/image'

export default function TeethGrinding() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 text-gray-800 dark:text-white">

      {/* Title & Image Section */}
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400">
            Teeth Grinding (Bruxism) Treatment in Noosa
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Teeth grinding, or bruxism, can silently damage your smile—occurring both while you're awake and during sleep. 
            It often goes unnoticed until symptoms like jaw pain or tooth wear appear.
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 mt-2"
          >
            NEW PATIENTS »
          </Link>
        </div>
        <div className="relative w-full h-48 md:h-60 rounded overflow-hidden shadow-md">
          <Image
            src="/images/filling.jpg"
            alt="Teeth Grinding Patient"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">
          Recognising Signs & Symptoms
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Spotting the signs early is key. Common indicators include tooth sensitivity, flattened or worn teeth, cracked restorations, jaw soreness, and headaches. 
          Some people may even notice cheek biting or disrupted sleep patterns caused by grinding noises.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">
          Impact on Your Health & Smile
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Bruxism doesn't just cause discomfort—it wears down enamel, causes tooth fractures, and can affect crowns and fillings. Gum recession may follow, leading to additional dental concerns.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The strain also reaches beyond your mouth. Facial pain, headaches, TMJ disorders, and sleep disruption can impact daily life. In time, visible tooth damage may even affect the look of your smile.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">
          How Mouthguards Help
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Custom-made mouthguards (or splints) are one of the most effective ways to reduce grinding damage. These appliances offer several benefits:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Protect Teeth:</strong> Absorb and spread pressure from grinding to reduce wear and chipping.</li>
          <li><strong>Relax the Jaw:</strong> Help prevent muscle tension and ease related headaches.</li>
          <li><strong>Protect Dental Work & Joints:</strong> Preserve crowns and fillings while relieving strain on the TMJ.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Mouthguards are a great start, but don’t address root causes like stress or misaligned bites. Long-term care may include relaxation techniques, dental adjustments, or orthodontic treatment.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <div className="bg-teal-50 dark:bg-teal-950 p-6 rounded shadow-md space-y-4">
        <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300">
          Book Your Consultation Today
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Concerned about clenching or grinding?{' '}
          <Link href="/" className="text-teal-700 dark:text-teal-400 underline">Morton Dental</Link> is here to help you protect your smile and comfort.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          *All medical or dental procedures carry risks. We recommend seeking a second opinion from a qualified professional before proceeding.
        </p>
        <Link
          href="/appointment"
          className="inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600"
        >
          CONTACT US »
        </Link>
      </div>

      {/* Footer Info */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Teeth Grinding Treatment | Noosa Heads, Junction, Noosaville QLD | (07) 5455 3577
      </footer>
    </div>
  );
}
