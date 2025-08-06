export const metadata = {
  title: 'Gum Pimples & Fistulas | Causes & Treatment | Morton Dental',
  description: 'Learn what gum pimples (fistulas) mean, why they form, and how Morton Dental Noosa can treat underlying infections safely.',
};

import Link from 'next/link';
import Image from 'next/image';

export default function GumPimplesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800 dark:text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400 text-center mb-6">
        Gum Bump & Pimple Treatment in Noosa
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        We understand how uncomfortable and concerning gum bumps can be. At Morton Dental, we provide gentle care and expert diagnosis.
      </p>

      {/* Intro Row */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
        <div className="space-y-4">
          <Link href="/patients">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded font-semibold">
              New Patients Welcome »
            </button>
          </Link>
          <p className="text-gray-700 dark:text-gray-300">
            Gum pimples, also called abscesses or bumps, are often the result of an infection in the gum tissue.
            These bumps may feel tender, appear swollen, and could be filled with pus if left untreated.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The root cause is usually poor oral hygiene, which allows bacteria to build up and cause inflammation.
            In some cases, the bump may be a benign growth like a gingival cyst.
          </p>
        </div>

        <div className="w-full h-[220px] rounded-lg overflow-hidden shadow-lg relative">
          <Image
            src="/images/gum-pimple.jpg"
            alt="Dental patient with gum issue"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400 mb-3">
          Common Symptoms of Gum Bumps
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Swelling & Redness:</strong> The area often appears irritated and inflamed.</li>
          <li><strong>Pus Discharge:</strong> You may notice fluid or pus under pressure.</li>
          <li><strong>Tenderness:</strong> Sensitive to touch, especially while eating.</li>
          <li><strong>Foul Taste:</strong> Unpleasant taste due to trapped bacteria or pus.</li>
        </ul>
      </div>

      {/* Prone Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400 mb-3">
          Who Is at Higher Risk?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          While gum pimples can affect anyone, they’re more frequently seen in individuals with:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Inadequate brushing and flossing habits</li>
          <li>Gingivitis or advanced gum disease</li>
          <li>Tooth infections spreading to the gums</li>
          <li>Weak immune system or underlying medical issues</li>
        </ul>
      </div>

      {/* Treatment Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-400 mb-3">
          How Do We Treat Gum Pimples?
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Treatment starts with identifying the underlying infection or cause. We may drain the bump, clean the
          area thoroughly, and prescribe antibiotics if needed. Long-term prevention includes proper daily hygiene,
          routine check-ups, and professional cleanings.
        </p>
      </div>

      {/* Highlight Box */}
      <div className="bg-teal-50 dark:bg-teal-950 border-l-4 border-teal-600 dark:border-teal-400 p-5 rounded-md shadow-sm mb-12">
        <p className="text-[15px] text-gray-800 dark:text-gray-200">
          📞 Don’t ignore signs of infection. If you spot a bump or pimple on your gums, schedule a consultation with Morton Dental immediately.
          Early care prevents complications and keeps your smile healthy.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-50 dark:bg-orange-950 mt-10 p-6 rounded-md shadow text-center">
        <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-2">
          Let’s Take a Look
        </h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-200">
          Book your appointment with our Noosa team and take the first step toward healthier gums.
        </p>
        <Link href="/appointment">
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 font-semibold">
            Book an Appointment »
          </button>
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Gum Bump & Pimple Dentist | Noosa Heads, Noosa Junction, Noosaville QLD | (07) 5455 3577
      </p>
    </div>
  );
}
