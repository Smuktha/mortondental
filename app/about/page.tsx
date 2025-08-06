'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="w-full bg-white text-gray-800 py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* 🔷 Header Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Morton Dental</h1>

          <p className="text-lg mb-6">
            Our family dentists are proficient in caring for local and Noosa Heads, Noosaville patients of all ages.
            As comprehensive local health providers, we love what we do. We deliver affordable, quality dentistry in one convenient location.
            In our <span className="text-blue-600 font-medium">friendly</span> and <span className="text-blue-600 font-medium">relaxed practice</span>,
            we have everything your smile (and budget) needs!
          </p>

          <Link href="/team">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition duration-200">
              MEET THE DOCTORS
            </button>
          </Link>
        </div>

        {/* 🔷 Info + Image Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Blocks */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Your One-Stop Dentist's Office</h2>
              <p>
                Everyday dental needs are unique. Whether you need to treat a few cavities, have a toothache, or want dentures, we offer quality care you can afford.
              </p>
              <p className="mt-2">
                Same-day dental emergency care is available. If we need to start treatment straightaway, ask about our flexible financing options.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Making Dentistry Affordable</h2>
              <p>
                We deliver high-quality services tailored to your financial needs. Whatever care you require, our in-network providers are here to help.
                We can process claims on-site and offer extra financing options if there's a <span className="italic">gap</span>.
              </p>
              <p className="mt-2 text-blue-600 italic">All our new patients can enjoy a gap-free scale and clean!</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">A Trustworthy Dental Care Team</h2>
              <p>
                Our experienced team works with patients of all ages. From dentures and crowns to Invisalign, we help you select what fits your lifestyle and smile goals.
              </p>
            </div>
          </div>

          {/* ✅ Optimized Next.js Image */}
          <div className="w-full h-[350px] md:h-full rounded overflow-hidden shadow-md relative">
            <Image
              src="/images/clinic.jpg"
              alt="Inside Morton Dental clinic with dentist and patient"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* 🔷 About Family Dentists */}
        <div>
          <h2 className="text-xl font-bold mb-3">About Our Family Dentists</h2>
          <p>
            Our experienced dentists deliver outstanding care that’s also reasonable.
            Not being able to afford the dental treatment you need can worsen your oral health condition in the future.
          </p>
          <p className="mt-2">
            Enjoy fewer treatments in the future thanks to budget-friendly and minimally invasive services.
          </p>
        </div>

        {/* 🔷 Callout Box */}
        <div className="bg-blue-50 border-l-4 border-teal-400 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-2">Get a No-Gap Scale and Clean</h3>
          <p className="mb-2">
            Are you a new patient?{' '}
            <Link href="/appointment" className="text-blue-600 underline">
              Request your gap-free clean
            </Link>{' '}
            today!
          </p>
          <p className="text-sm italic text-gray-600">
            * May apply to new in-network provider cards only. Please check with your health fund provider.
          </p>
        </div>

        {/* 🔷 Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          About Morton Dental | (07) 5455 3577
        </p>
      </div>
    </section>
  )
}
