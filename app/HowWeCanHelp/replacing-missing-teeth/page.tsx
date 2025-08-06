export const metadata = {
  title: 'Replace Missing Teeth | Implants, Bridges & Dentures | Morton Dental',
  description: 'Explore your options to replace missing teeth—implants, bridges, or dentures—at Morton Dental Noosa for a confident smile.',
};

import Link from 'next/link'
import Image from 'next/image'

export default function ReplacingMissingTeeth() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 dark:text-white space-y-12">

      {/* Heading + Overview */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400 mb-3">
          Replacing Missing Teeth in Noosa
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Losing a tooth doesn’t just affect your smile—it impacts your ability to chew, speak, and maintain oral structure. 
          At Morton Dental, we offer options like <strong>dental implants</strong>, <strong>bridges</strong>, and <strong>dentures</strong> 
          to restore your confidence and health.
        </p>
      </div>

      {/* Grid: Content & Image */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Details */}
        <div className="space-y-6 text-[16px] leading-relaxed">
          {[
            ['Why Replace a Missing Tooth?', 'When a tooth is lost, the surrounding jawbone can begin to shrink. This may change your facial shape, cause early aging, and weaken the bite. Replacing teeth with an implant can preserve bone and help maintain your natural look.'],
            ['Protect Speech & Chewing', 'Missing teeth can make it difficult to chew comfortably and speak clearly. Over time, this could lead to digestive concerns or confidence issues. Restoring your teeth improves day-to-day life.'],
            ['Stop Teeth from Shifting', 'Empty spaces cause nearby teeth to drift, resulting in crowding or bite misalignment. Replacements like bridges or dentures help maintain healthy spacing and alignment.'],
            ['Look and Feel Better', 'A gap in your smile can lower self-esteem. Dental replacements are designed to match natural teeth and enhance appearance, helping you smile with pride again.'],
            ['It’s an Investment in You', 'Replacing a tooth today avoids future complications that could be more costly. Preventive treatment keeps your mouth healthier and saves money over time.']
          ].map(([title, content], index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-teal-800 dark:text-teal-300">{title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{content}</p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/replacemissingtooth.jpg"
            alt="Dental care image"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Appointment + Image Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center bg-teal-50 dark:bg-teal-950 p-6 rounded shadow-md">
        {/* Mobile: Image */}
        <div className="relative w-full h-64 md:hidden rounded overflow-hidden">
          <Image
            src="/images/replace.jpg"
            alt="Tooth implant treatment"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>

        {/* Appointment Info */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-800 dark:text-teal-300 mb-2">
            Take the First Step Toward a Complete Smile
          </h3>
          <p className="mb-3 dark:text-gray-300">
            Let’s work together to restore your smile. Our team will help you choose the best tooth replacement based on your goals and lifestyle.
          </p>
          <p className="mb-4">
            <Link
              href="/appointment"
              className="text-teal-700 dark:text-teal-400 font-semibold underline hover:text-teal-900 dark:hover:text-teal-300"
            >
              Book your consultation today »
            </Link>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            *As with any surgical procedure, there are risks. Please consult a qualified professional before proceeding.
          </p>
        </div>

        {/* Desktop: Image */}
        <div className="hidden md:block relative w-full h-64 rounded overflow-hidden">
          <Image
            src="/images/replace.jpg"
            alt="Tooth replacement visual"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Replacing Missing Teeth | Noosa Heads, Junction, Noosaville QLD | (07) 5455 3577
      </footer>
    </div>
  )
}
