export const metadata = {
  title: 'Dr Karen Silva | Noosa Dentist | Morton Dental',
  description:
    'Get to know Dr Karen Silva, an experienced and friendly dentist at Morton Dental Noosa. Skilled in cosmetic and general dentistry, fluent in Portuguese.',
}
import Link from 'next/link'
import Image from 'next/image'

export default function DrKarenPage() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Intro Section */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Text Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Dr Karen Silva <span className="text-teal-600">(Dentist)</span>
            </h1>
            <p className="text-gray-700 mb-4">
              With over a decade of experience, Dr Karen Silva is dedicated to providing gentle, high-quality care to patients of all ages.
              Her friendly nature and attention to detail ensure every patient feels relaxed and well cared for.
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              Skilled in Cosmetic & General Dentistry
            </h2>
            <p className="text-gray-700 mb-6">
              Originally from Brazil, Dr Karen earned her degree from FUNEC in 2010 and became an Australian registered dentist in 2021.
              She has advanced training in facial aesthetics and therapeutic injectables. In 2023, she completed additional training on the “Therapeutic Uses of Botulinum Toxin” through the Australian Dental Association QLD.
            </p>

            {/* ✅ Book Appointment Button */}
            <Link
              href="/appointment"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-5 rounded shadow transition mb-8"
            >
              Book Appointment
            </Link>
          </div>

          {/* Doctor Image */}
          <div>
            <Image
              src="/images/dr-karen-profile(1).jpg"
              alt="Dr Karen Silva"
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-teal-50 mt-12 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-bold text-teal-800 mb-2">Fluent in Portuguese & Focused on Connection</h3>
          <p className="text-gray-700">
            Fluent in Portuguese, Dr Karen is a valuable resource for those who feel more comfortable speaking in their native language. 
            She builds long-term relationships with her patients by listening, educating, and empowering them to achieve healthy, confident smiles.
          </p>
        </div>

        {/* Lifestyle and Callout Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Outside the Clinic</h3>
            <p className="text-gray-700">
              When not at Morton Dental, Dr Karen enjoys dancing (especially Brazilian styles), relaxing by the beach, and spending quality time with her family. 
              Her passion for life and people shines through in her work every day.
            </p>
          </div>

          <div className="bg-orange-100 p-4 rounded-md shadow">
            <h4 className="text-md font-semibold text-orange-800 mb-2">
              Let’s Brighten Your Smile
            </h4>
            <p className="text-gray-700">
              Book a consultation with Dr Karen to start your smile transformation today.{" "}
              <Link href="/contact-us" className="text-orange-600 hover:underline">
                Contact us now
              </Link>{" "}
              to schedule an appointment.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mt-12">
          <Image
            src="/images/heart-div.png"
            alt="Divider"
            width={160}
            height={140}
          />
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Dr Karen Silva | (07) 5455 3577
        </p>
      </div>
    </section>
  )
}
