'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How often should I come in for a check-up?',
    a: 'Most patients benefit from a check-up and clean every six months. We’ll let you know if you need more frequent visits based on your oral health.'
  },
  {
    q: 'Do you accept health funds?',
    a: 'Yes, we accept all major health funds and can process your claims on the spot using HICAPS. Just bring your health fund card to your appointment.'
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Absolutely. We offer flexible payment plans through third-party providers and can tailor options to suit your needs.'
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Please bring any health fund cards, identification, and a list of medications you’re currently taking. If you have x-rays from a previous dentist, bring those too.'
  },
  {
    q: 'How do I make an appointment?',
    a: 'You can book online through our website or call our friendly team directly. We also welcome walk-in patients depending on availability.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Quick answers to common concerns from our patients.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, idx) => (
          <div key={idx} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-lg focus:outline-none"
            >
              {item.q}
              <span className="text-xl font-bold">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && (
              <p className="mt-2 text-gray-700 text-base">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
