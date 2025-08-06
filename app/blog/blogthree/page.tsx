'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogThree() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* 🔷 Hero Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
  src="/images/winter.jpeg"
  alt="Healthy Smile in Winter"
  width={1200}
  height={500}
  className="w-full h-auto md:h-[420px] object-contain bg-white rounded-md"
  priority
/>

        </div>

        {/* 🔷 Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00B2A9] leading-tight">
          5 Tips for a Healthier Smile This Winter
        </h1>

        {/* 🔷 Intro */}
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Protecting your teeth and gums is important year-round, but the colder months bring unique challenges.
            At Morton Dental, we believe prevention is always better than cure. Here are five practical tips to
            help you care for your smile this winter — plus what to do if concerns arise.
          </p>
        </div>

        {/* 🔷 Tips List */}
        <div className="space-y-6">
          {[
            {
              title: '1. Drink More Water',
              text: 'Tea and coffee are great in winter, but water is still essential. Dry mouth increases decay and bad breath risk. Keep sipping water throughout the day — not just when you’re thirsty.',
            },
            {
              title: '2. Manage Tooth Sensitivity',
              text: 'Cold air and warm drinks can trigger tooth discomfort. Try a sensitive toothpaste and soft-bristle brush. If it persists, visit Morton Dental Noosa to check for any issues.',
            },
            {
              title: '3. Be Mindful of Comfort Foods',
              text: 'Limit sugary snacks and drinks. Rinse with water afterward. Include smile-friendly foods like cheese, yoghurt and crunchy veggies to protect enamel.',
            },
            {
              title: '4. Stick to Good Daily Habits',
              text: 'Cold mornings or late nights? Don’t skip brushing! Brush twice daily, floss once a day, and change your electric toothbrush head every 3 months.',
            },
            {
              title: '5. Keep Up with Regular Dental Visits',
              text: 'Routine check-ups help catch issues early. They’re quick, affordable, and support healthy teeth all year long — including winter.',
            },
          ].map((tip, index) => (
            <div
              key={index}
              className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-5 rounded-md shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#00B2A9] mb-2">{tip.title}</h2>
              <p className="text-gray-700">{tip.text}</p>
            </div>
          ))}
        </div>

        {/* 🔷 Additional Tip */}
        <div className="bg-[#FFF5E5] border-l-4 border-[#FD7E14] p-5 rounded-md shadow">
          <h3 className="text-lg font-bold text-[#FD7E14] mb-1">Additional Tip: Replace Your Toothbrush After Illness</h3>
          <p>
            If you’ve had a cold or flu, switch to a new toothbrush to prevent reinfection.
            It’s a small step that makes a big difference.
          </p>
        </div>

        {/* 🔷 Why It Matters */}
        <div className="space-y-6 pt-6">
          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-5 rounded-md">
            <h3 className="text-xl font-bold text-[#00B2A9]">Why Routine Visits Matter</h3>
            <p>
              Even if your teeth feel fine, regular check-ups help prevent minor issues from becoming major ones.
              At Morton Dental Noosa, we recommend seeing us at least twice a year.
            </p>
          </div>

          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-5 rounded-md">
            <h3 className="text-xl font-bold text-[#00B2A9]">Gentle Care and Flexible Options</h3>
            <p>
              We offer flexible appointments (including Saturdays), and gentle care every step of the way.
              New patients can enjoy a $199 or no-gap check-up and clean with health fund cover — including exam,
              clean, polish, fluoride treatment and x-rays if needed.
            </p>
          </div>

          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-5 rounded-md">
            <h3 className="text-xl font-bold text-[#00B2A9]">Our Commitment to You</h3>
            <p>
              Whether it’s sensitivity, treatment, or peace of mind — we’ll walk you through it without pressure.
              Your comfort and confidence matter to us.
            </p>
          </div>
        </div>

        {/* 🔷 Summary List */}
        <div className="pt-4">
          <h3 className="text-xl font-bold text-[#00B2A9] mb-2">How to Care for Your Smile This Winter</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Drink plenty of water each day</li>
            <li>Use sensitive toothpaste if needed</li>
            <li>Limit sugary snacks and rinse afterwards</li>
            <li>Brush twice and floss once daily</li>
            <li>Replace your toothbrush regularly</li>
            <li>Book your routine check-up</li>
          </ul>
        </div>

        {/* 🔷 CTA Box */}
        <div className="bg-[#E3F7F6] text-gray-800 border-l-4 border-[#00B2A9] p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
          <p>
            If you have questions or want to arrange an appointment, our friendly team is here to help.
            Call Morton Dental Noosa at <strong>(07) 5455 3577</strong> or{' '}
            <a href="https://www.mortondental.com.au" className="text-[#00B2A9] underline">
              visit us online
            </a>{' '}
            to book at your convenience.
          </p>
        </div>

        {/* 🔷 Closing Line */}
        <div className="text-center pt-4">
          <p className="text-[#FD7E14] font-semibold italic">
            Morton Dental Noosa — Gentle, professional dental care you can trust.
          </p>
        </div>

        {/* 🔷 Back to Blog */}
        <div className="text-center pt-10">
          <Link href="/blog">
            <button className="bg-[#FD7E14] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition">
              ← Back to Blog
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
