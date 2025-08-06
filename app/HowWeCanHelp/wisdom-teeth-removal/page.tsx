export const metadata = {
  title: 'Wisdom Teeth Removal Noosa | Morton Dental',
  description: 'Friendly, gentle wisdom‑teeth removal in Noosa. Discover symptoms, timing, and after‑care from the Morton Dental team.',
};

import Link from 'next/link'
import Image from 'next/image'

export default function WisdomTeethRemoval() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 text-gray-800 dark:text-white">

      {/* Header Section */}
      <section className="grid md:grid-cols-3 gap-10 items-start">
        {/* Image */}
        <div className="relative w-full h-56 md:h-60 rounded overflow-hidden shadow">
          <Image
            src="/images/patient-in-treatment-chair-smiling.jpg"
            alt="Wisdom Teeth Removal"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority
          />
        </div>

        {/* Title and Intro */}
        <div className="md:col-span-2 space-y-5">
          <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400">Wisdom Teeth Removal in Noosa</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Wisdom teeth — also called third molars — appear in late teens or early twenties and can cause oral health issues.
            Their removal is often recommended due to potential complications.
          </p>
          <p className="text-[15px] text-gray-700 dark:text-gray-300 font-medium">Common reasons for removal include:</p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {[
              "Impaction", "Misalignment", "Pain or discomfort", "Infection or gum disease",
              "Cysts or tumours", "Damage to nearby teeth", "Sinus complications", "Difficult cleaning"
            ].map((reason, i) => (
              <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-0.5 font-bold">✔</span> {reason}
              </li>
            ))}
          </ul>

          <p className="pt-2 text-gray-700 dark:text-gray-300">
            Early evaluation and preventive removal are often advised to avoid these problems.
          </p>
          <Link href="/appointment" className="inline-block bg-orange-500 text-white px-5 py-2 rounded shadow hover:bg-orange-600 mt-2">
            NEW PATIENTS »
          </Link>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300">Consultation & Evaluation</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Here's what you can expect at Morton Dental during a wisdom tooth assessment:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>History Review:</strong> Review of your medical and dental background.</li>
            <li><strong>Symptom Check:</strong> Discuss signs like swelling or jaw pain.</li>
            <li><strong>Visual Exam:</strong> Oral inspection to assess positioning.</li>
            <li><strong>X-rays:</strong> Imaging to see root depth, angle, or impaction.</li>
            <li><strong>Discussion:</strong> Explanation of findings and personalised treatment.</li>
          </ul>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Treatment Options:</strong> Risks and benefits of extraction explained.</li>
            <li><strong>Sedation Info:</strong> Options for comfort during the procedure.</li>
            <li><strong>Cost Details:</strong> Transparent info on price and coverage.</li>
            <li><strong>Pre‑op Guidance:</strong> Dietary and preparation instructions.</li>
          </ul>
        </div>
      </section>

      {/* CTA Box */}
      <section className="grid md:grid-cols-2 gap-6 bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-700 p-6 rounded shadow-sm">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300">Schedule an Appointment</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Wondering if your wisdom teeth need removal? Book a consultation today and let our experts assess your needs.
          </p>
          <p className="text-sm italic text-gray-500 dark:text-gray-400">
            *All surgical procedures involve risks. Consider seeking a second opinion from a qualified professional.
          </p>
          <Link href="/contact-us" className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            CONTACT US »
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Wisdom Teeth Removal | Noosa Heads | Noosa Junction | Noosaville, QLD | (07) 5455 3577
      </footer>
    </div>
  );
}
