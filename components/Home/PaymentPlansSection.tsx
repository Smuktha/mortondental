'use client'

import Image from 'next/image'

export default function EnhanceYourSmileSection() {
  return (
    <section id="enhance-smile" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Enhance Your Smile
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 font-semibold">
            with Morton Dental
          </p>
        </div>

        {/* Fresh copy */}
        <div className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl space-y-6">
          <p>
            Finding a dentist who’s both friendly and affordable shouldn’t be a challenge.
            At Morton Dental, we combine advanced technology with a genuine passion for
            patient care — so every visit feels easy, comfortable and transparent.
          </p>
          <p>
            From toddlers to grandparents, our team delivers preventive, restorative and
            cosmetic treatments in one convenient Noosa location. Whatever your budget or
            stage of life, we’ll create a personalised plan to keep your smile shining.
          </p>
        </div>

        {/* Health-fund / partner logos */}
        <div className="mt-6 w-full max-w-4xl">
          <Image
            src="/images/partners.png"
            alt="Health funds we work with"
            width={800}
            height={150}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
