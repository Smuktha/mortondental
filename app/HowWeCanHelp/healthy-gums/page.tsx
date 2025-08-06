export const metadata = {
  title: 'Healthy Gums Guide | Morton Dental Noosa',
  description: 'Understand gum disease signs, prevention, and professional treatments available at Morton Dental to protect your gums.',
};

import Link from 'next/link';
import Image from 'next/image';

export default function HealthyGumsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800 dark:text-white">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-teal-700 dark:text-teal-400 mb-4">
        Caring for Healthy Gums in Noosa
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
        Healthy gums are the foundation of a confident, long-lasting smile. Our team helps you monitor and maintain your gum health with ease.
      </p>

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
        {/* Button + Content */}
        <div className="space-y-5">
          <Link href="/patients">
            <button className="bg-orange-500 text-white text-sm px-5 py-2 rounded hover:bg-orange-600 font-semibold">
              New to Morton Dental? Start Here »
            </button>
          </Link>
          <p className="text-gray-700 dark:text-gray-300">
            At Morton Dental, we emphasize proactive care. Healthy gums appear pink, feel firm, and don’t bleed during brushing or flossing.
            If you notice swelling, sensitivity, or bleeding, these could be early signs of gum disease.
          </p>
        </div>

        {/* Optimized Image */}
        <div className="relative h-[220px] w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/cosmetic.jpg"
            alt="Smiling dental patient"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Informational Grid */}
      <div className="grid md:grid-cols-2 gap-10 leading-relaxed mb-12">
        {/* Block 1 */}
        <div>
          <h2 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-2">
            How Should Healthy Gums Look?
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your gums should be bubble-gum pink, smooth in texture, and free from any pain. If they bleed while cleaning or brushing, it’s time to book a dental check-up.
          </p>
        </div>

        {/* Block 2 */}
        <div>
          <h2 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-2">
            Watch for Receding or Sore Areas
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Gums pulling away from the teeth or constant discomfort can expose roots and cause lasting sensitivity. We help prevent further damage through early intervention.
          </p>
        </div>

        {/* Block 3 */}
        <div>
          <h2 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-2">
            Why Gum Health Matters
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Poor gum health can increase the risk of serious conditions like heart disease, diabetes, and pregnancy complications. Healthy gums support your entire wellbeing.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-teal-50 dark:bg-teal-950 border-l-4 border-teal-600 dark:border-teal-400 p-5 rounded shadow-sm">
          <p className="text-[15px] text-gray-800 dark:text-gray-200">
            ✅ Keep your gums healthy with daily brushing, flossing, and regular dental visits. If your gums change color, bleed, or feel tender—don't wait. Our team is here to help.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-orange-50 dark:bg-orange-950 p-6 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-2">
          Let’s Talk About Your Gum Health
        </h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          Whether you're experiencing symptoms or just want to stay on top of your oral care, Morton Dental is here for you.
        </p>
        <Link href="/appointment">
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 font-semibold">
            Schedule Your Appointment »
          </button>
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Healthy Gums Services | Noosa Heads, Junction & Noosaville QLD | (07) 5455 3577
      </p>
    </div>
  );
}
