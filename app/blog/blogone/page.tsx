'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogOne() {
  return (
    <section className="bg-[#f0fdfc] text-gray-800 py-12 px-4 md:px-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 space-y-10"
      >
        {/* 🔹 Hero Image */}
        <div className="overflow-hidden rounded-xl shadow-md">
        <Image
  src="/images/welcome.jpg"
  alt="Morton Dental Newsletter"
  width={1200}
  height={500}
  className="w-full h-[280px] md:h-[420px] object-contain"
/>

        </div>

        {/* 🔹 Blog Title */}
        <h1 className="text-4xl font-bold text-center text-[#00B2A9] leading-snug">
          Welcome to Morton Dental’s First eNewsletter!
        </h1>

        {/* 🔹 Intro */}
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          A warm hello to our wonderful patients, friends, and neighbours! Whether you're a long-time
          visitor or new to our practice — we’re delighted you’re here.
        </p>

        {/* 🔹 Section: About the eNewsletter */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">Why This Newsletter?</h2>
          <p>
            Life gets busy, and dental care can easily drop down the to-do list. That’s why we’ve created
            this monthly newsletter — to bring helpful advice, reminders, and exclusive offers straight to
            your inbox.
          </p>
          <p className="font-medium text-[#FD7E14]">
            Our goal: help your family enjoy healthy smiles, stress-free.
          </p>
        </div>

        {/* 🔹 Section: About Morton Dental */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">Who We Are</h2>
          <p>
            Located in the heart of Noosa Heads, Morton Dental is your friendly family clinic. We care for
            all ages — from toddlers to adults — with personalised, gentle treatment.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Experienced dentists and hygienists</li>
            <li>Modern, relaxing environment</li>
            <li>Affordable, honest care</li>
          </ul>
        </div>

        {/* 🔹 Section: What’s Coming Up */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">What to Expect in Future Issues</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Dental tips for home care</li>
            <li>Answers to common questions (like “Does whitening toothpaste work?”)</li>
            <li>Seasonal smile advice</li>
            <li>Exclusive patient-only offers</li>
            <li>Behind-the-scenes team stories</li>
          </ul>
        </div>

        {/* 🔹 Section: Why Check-Ups Matter */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">Why Regular Check-Ups Matter</h2>
          <p>
            Even if your teeth feel fine, small problems (like gum disease or cavities) can go unnoticed.
            A simple check-up every 6 months helps catch issues early — before they become costly.
          </p>
        </div>

        {/* 🔹 Section: A Gentle Approach */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">A Gentle Approach You’ll Appreciate</h2>
          <p>
            Nervous about dental visits? You’re not alone. Our team makes sure you feel comfortable,
            informed, and cared for — every step of the way.
          </p>
        </div>

        {/* 🔹 Section: Part of Noosa */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">Proudly Caring for Noosa’s Smiles</h2>
          <p>
            As a local clinic, we’re more than just a dental provider — we’re part of your community.
            Many of our patients have grown up with us, and we love watching their families thrive.
          </p>
        </div>

        {/* 🔹 Section: Stay Connected */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00B2A9]">Let’s Stay in Touch</h2>
          <p>
            Have a question or topic you'd like us to cover in future issues? Reach out! We’re here to
            help and always happy to hear your suggestions.
          </p>
        </div>

        {/* 🔹 Call to Action */}
        <div className="bg-[#E6F9F7] p-6 rounded-lg space-y-3 text-center">
          <h3 className="text-xl font-bold text-[#00B2A9]">Ready to Book Your Next Appointment?</h3>
          <p className="text-gray-700">
            Call <strong>(07) 5455 3577</strong> or book online at{' '}
            <a
              href="https://www.mortondental.com.au"
              className="text-[#FD7E14] underline hover:text-orange-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.mortondental.com.au
            </a>
          </p>
          <p className="text-[#FD7E14] font-semibold">
            Thank you for reading — here's to a happy, healthy smile all year long!
          </p>
        </div>

        {/* 🔹 Back to Blog Button */}
        <div className="text-center pt-8">
          <Link href="/blog">
            <button className="bg-[#FD7E14] hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
              ← Back to Blog
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
