export const metadata = {
  title: 'Children’s Oral Health Tips | Morton Dental Noosa',
  description: 'Practical advice for parents—brushing, diet, and dentist visits—to keep kids’ teeth healthy from toddlers to teens.',
};

import Link from 'next/link'
import Image from 'next/image'

export default function ChildrensDentistPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800 dark:text-white">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-400 text-center mb-4">
        Gentle & Fun Dentistry for Kids in Noosa
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">
        Creating healthy habits starts young. At Morton Dental, we make dental visits positive and educational for children of all ages.
      </p>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Helping your child develop great oral hygiene from the beginning can prevent cavities, discomfort, and fear of dentists later in life. 
            Our team makes sure each visit is welcoming and worry-free.
          </p>
          <Link href="/appointment">
            <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600">
              Book for New Patients »
            </button>
          </Link>
        </div>
        <div className="relative w-full h-[240px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/children.jpg"
            alt="Child at dental chair"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Details Section */}
      <section className="space-y-10 leading-relaxed">
        {[
          {
            title: 'A Friendly First Dental Experience',
            content: 'We love caring for kids! Our dentists are trained to create a calm, supportive environment where little ones feel safe and comfortable from their very first visit.'
          },
          {
            title: 'Making Oral Health Fun & Engaging',
            content: 'Through interactive games, tools, and our online classroom, kids are encouraged to enjoy taking care of their teeth and smile with pride.'
          },
          {
            title: 'Eligible for the Child Dental Benefits Schedule?',
            content: (
              <>
                <p>Your child may qualify for up to $1,052 worth of basic dental services over two years, including:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Routine checkups</li>
                  <li>X-rays and cleanings</li>
                  <li>Fillings and fissure sealants</li>
                </ul>
              </>
            )
          },
          {
            title: 'Our Dentists Know Kids',
            content: 'Dr. Sean, Dr. Rachael, and Dr. David all enjoy working with children and are committed to gentle, personalized care to make every appointment stress-free.'
          },
          {
            title: 'Preventive Care from an Early Age',
            content: 'Early dental visits help catch small issues before they turn into larger problems. We focus on building strong brushing and hygiene habits from the start.'
          },
          {
            title: 'Brushing Tips That Stick',
            content: 'We teach brushing and flossing using easy-to-remember steps, videos, and fun quizzes so that kids stay involved in their own health.'
          }
        ].map(({ title, content }, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-md shadow-sm"
          >
            <h2 className="text-xl font-bold mb-2 text-teal-800 dark:text-teal-400">{title}</h2>
            <div className="text-gray-700 dark:text-gray-300">{content}</div>
          </div>
        ))}
      </section>

      {/* CTA Box */}
      <div className="mt-12 bg-teal-50 dark:bg-teal-950 p-6 rounded-md shadow text-center">
        <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-2">
          Give Your Child a Smile That Lasts
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Ready to schedule your child’s next checkup? We’re here to make dental care simple, stress-free, and even fun.
        </p>
        <Link href="/appointment">
          <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600">
            Contact Morton Dental »
          </button>
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
        Children’s Dental Care | Noosa Heads, Junction & Noosaville QLD | (07) 5455 3577
      </p>
    </div>
  )
}
