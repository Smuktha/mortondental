export const metadata = {
  title: 'Meet the Team | Morton Dental Noosa',
  description:
    'Get to know the friendly dentists and staff at Morton Dental in Noosa. Learn about our experience, qualifications, and commitment to gentle care.',
}

import Link from 'next/link'
import Image from 'next/image'

export default function TeamPage() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Image
          src="/images/logo1.png"
          alt="Morton Dental Logo"
          width={160}
          height={40}
          className="mx-auto mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Meet the Team at Morton Dental
        </h1>
        <p className="text-gray-600 text-lg mb-12">Get to Know Us</p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Dr. Karen Silva */}
          <Link href="/team/karen-silva" className="group block">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <Image
                src="/images/dr-karen-profile(1).jpg"
                alt="Dr. Karen Silva"
                width={500}
                height={500}
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="bg-gray-100 py-4 text-center">
                <h2 className="text-xl font-semibold text-teal-700 group-hover:underline">
                  Dr Karen Silva
                </h2>
                <p className="text-gray-600 text-sm">(Dentist)</p>
              </div>
            </div>
          </Link>

          {/* Dr. Stefano Burti */}
          <Link href="/team/stefano-burti" className="group block">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <Image
                src="/images/stefeno.png"
                alt="Dr. Stefano Burti"
                width={500}
                height={700}
                className="w-full h-[500px] object-cover"
              />
              <div className="bg-gray-100 py-4 text-center">
                <h2 className="text-xl font-semibold text-teal-700 group-hover:underline">
                  Dr Stefano Burti
                </h2>
                <p className="text-gray-600 text-sm">(Dentist)</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-500 text-sm">
          <Image
            src="/images/heart-div.png"
            alt="Heart Divider"
            width={160}
            height={40}
          />
          <span>Morton Dental Team | (07) 5455 3577</span>
        </div>
      </div>
    </section>
  )
}
