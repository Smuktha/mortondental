'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogTwo() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* 🔷 Hero Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/karen.jpeg"
            alt="Dr Karen and Morton Dental Team"
            width={1200}
            height={500}
            className="w-full h-[280px] md:h-[420px] object-cover"
            priority
          />
        </div>

        {/* 🔷 Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00B2A9] leading-tight">
          Meet Dr Karen & the Friendly Morton Dental Noosa Team
        </h1>

        {/* 🔷 Intro */}
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            At Morton Dental, we believe trust and familiarity make every dental visit easier and more comfortable.
            That trust comes from the caring people behind every treatment, check-up and conversation.
          </p>
        </div>

        {/* 🔷 Sections */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-[#00B2A9]">A Gentle, Caring Approach</h2>
            <p>
              Dr Karen Silva has been part of Morton Dental Noosa since 2021 and has earned a reputation
              for her warm, attentive care. Patients appreciate her calm nature, clear explanations,
              and the way she takes time to listen.
            </p>
            <p>
              With a background in general and cosmetic dentistry, Dr Karen enjoys helping patients of all ages.
              She stays updated with modern techniques and gentle methods to ensure your care is both effective and comfortable.
            </p>
          </div>

          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-[#00B2A9]">People Make the Difference</h2>
            <p>
              From the first phone call to the final wave goodbye, our team is here to make your experience exceptional.
              Our receptionists, assistants, and hygienists are trained not just in dentistry — but in kindness and care.
            </p>
            <p>
              Our dentists work collaboratively, sharing knowledge and experience to provide consistent, high-quality
              treatment tailored to your needs.
            </p>
          </div>

          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-[#00B2A9]">Our Ongoing Commitment to You</h2>
            <p>
              We continue to grow with the latest dental technologies, gentle techniques,
              and a dedication to making sure you understand every step of your treatment.
            </p>
            <p>
              Life changes — and so do your dental needs. Whether it’s maintenance, cosmetic enhancements,
              or urgent care, we’re here to help.
            </p>
          </div>

          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-[#00B2A9]">Listening First</h2>
            <p>
              No pressure. No judgement. Just a friendly conversation about your dental goals and options.
              We take the time to listen and explain so you feel confident in your choices.
            </p>
            <p>
              We welcome your feedback — it's how we continue improving the care we provide.
            </p>
          </div>

          <div className="border-l-4 border-[#00B2A9] bg-[#F0FAF9] p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-[#00B2A9]">Comfort and Convenience</h2>
            <p>
              We respect your time. Our appointments run on schedule, and we offer flexible slots —
              including Saturdays — to fit busy lives.
            </p>
            <p>
              Nervous about the dentist? We get it. Our team takes breaks when needed, talks you through each step,
              and always puts your comfort first.
            </p>
          </div>
        </div>

        {/* 🔷 Thank You Note */}
        <div className="text-center pt-4">
          <p className="text-[#FD7E14] font-semibold italic">
            Thank you for being part of the Morton Dental Noosa family.
          </p>
        </div>

        {/* 🔷 CTA Block */}
        <div className="bg-[#E3F7F6] text-gray-800 border-l-4 border-[#00B2A9] p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Book Your Next Visit</h3>
          <p>
            If it’s time for your next check-up or if you’d like to discuss your oral health,
            call Morton Dental Noosa on <strong>(07) 5455 3577</strong> or visit{' '}
            <a href="https://www.mortondental.com.au" className="text-[#00B2A9] underline">
              www.mortondental.com.au
            </a>{' '}
            to arrange your appointment.
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
