export const metadata = {
  title: 'Dr Stefano Burti | Noosa Dentist | Morton Dental',
  description:
    'Meet Dr Stefano Burti, a gentle and compassionate dentist at Morton Dental Noosa. Dedicated to patient-centred care with a relaxed and supportive approach.',
}
import Link from 'next/link'
import Image from 'next/image'

export default function DrStefanoPage() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Intro Section */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Text Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Dr Stefano Burti <span className="text-teal-600">(Dentist)</span>
            </h1>
            <p className="text-gray-700 mb-4">
              Dr Stefano Burti is known for his calm and compassionate approach to dental care. He focuses on understanding each patient’s needs and goals, offering a supportive and caring experience at every visit.
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              Passionate About Patient-Centred Dentistry
            </h2>
            <p className="text-gray-700 mb-4">
              With many years of experience, Dr Stefano provides gentle and precise treatments across a wide range of dental services. He works closely with patients to tailor care plans that reflect their lifestyle and oral health needs.
            </p>
          </div>

          {/* Doctor Image */}
          <div>
            <Image
              src="/images/stefeno.png"
              alt="Dr Stefano Burti"
              width={500}
              height={700}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="mt-8 flex justify-start">
          <Link
            href="/appointment"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-5 rounded shadow transition"
          >
            Book Appointment
          </Link>
        </div>

        {/* Highlight Box */}
        <div className="bg-teal-50 mt-12 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-bold text-teal-800 mb-2">Empowering You to Smile Brighter</h3>
          <p className="text-gray-700">
            Dr Stefano believes dentistry should be as stress-free and rewarding as possible. He takes the time to explain treatment options thoroughly and always listens to patient concerns with patience and empathy.
          </p>
        </div>

        {/* Lifestyle and Callout Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Outside the Clinic</h3>
            <p className="text-gray-700">
              Away from the dental chair, Dr Stefano enjoys cycling and exploring the Noosa surroundings with his family. His relaxed and friendly nature is reflected in his work and helps patients feel at home.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md shadow">
            <h4 className="text-md font-semibold text-gray-800 mb-2">
              Ready to Begin Your Smile Journey?
            </h4>
            <p className="text-gray-700">
              Book a consultation with Dr Stefano and take the first step toward better oral health.{' '}
              <Link href="/contact-us" className="text-teal-600 hover:underline">
                Contact our clinic
              </Link>{' '}
              today to schedule your visit.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mt-12">
          <Image
            src="/images/heart-div.png"
            alt="Divider"
            width={160}
            height={40}
          />
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Dr Stefano Burti | (07) 5455 3577
        </p>
      </div>
    </section>
  )
}
