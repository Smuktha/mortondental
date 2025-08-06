export const metadata = {
  title: 'Family Dental Care Noosa | Morton Dental',
  description:
    'Morton Dental offers comprehensive, affordable family dentistry in Noosa for toddlers, teens, adults and seniors – all under one roof.',
}
import Link from 'next/link';
import Image from 'next/image';

export default function FamilyCare() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800 dark:text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-teal-700 dark:text-teal-400 mb-4">
        Comprehensive Family Dental Services in Noosa
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">
        Morton Dental is committed to delivering personalized, affordable dental care for your whole family—from toddlers to grandparents.
      </p>

      {/* Image + Button Row */}
      <div className="grid sm:grid-cols-2 gap-6 items-center mb-12">
        <div className="space-y-4">
          <Link
            href="/appointment"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded inline-block transition"
          >
            New Patients Welcome »
          </Link>
          <p className="text-base text-gray-700 dark:text-gray-200">
            Make dental health a family priority. From routine cleanings to emergency care, we’ve got you covered in one place.
          </p>
        </div>
        <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-lg relative">
          <Image
            src="/images/family.jpg"
            alt="Happy family at dentist"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority
          />
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-10 text-base leading-relaxed">
        {[
          ["All Your Dental Needs, One Location", "Say goodbye to juggling multiple appointments! We handle checkups, cleanings, fillings, and more—all in a single visit for your whole family."],
          ["Long-Term Relationships Matter", "We make dental visits comforting by building strong connections with your family. Familiar faces help ease dental anxiety, especially in children."],
          ["Preventive Focus for Healthier Smiles", "Regular visits allow us to catch issues early—saving you from pain and costly treatments. We stay ahead with the latest tools in family care."],
          ["Knowledge Empowers Families", "We teach children and adults alike about brushing, nutrition, and hygiene so they can protect their smiles for life."],
          ["Emergency Dental Support", "For urgent dental needs, existing patients receive prompt attention. You can rely on us for fast, expert care when it matters most."],
          ["Budget-Friendly Packages", "We offer family discounts and affordable bundled plans so everyone in your household can get the care they deserve—without the stress."]
        ].map(([title, text], i) => (
          <div key={i}>
            <h2 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-2">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 bg-teal-50 dark:bg-teal-950 p-8 rounded-lg shadow-md grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-3">
            Let’s Care for Your Family’s Smiles
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            Ready to schedule a visit? We’re here to provide family-centered dental care with a personal touch. Let’s make oral health easy and enjoyable.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="h-[200px] sm:h-[250px] w-full rounded overflow-hidden shadow-sm relative">
          <Image
            src="/images/patient-in-treatment-chair-smiling.jpg"
            alt="Dental team with patient"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Morton Dental – Serving Families in Noosa Heads, Junction & Noosaville | (07) 5455 3577
      </p>
    </div>
  );
}
