'use client'

import Link from 'next/link'
import Image from 'next/image'

/* ------------ Tile Data ------------ */
const services = [
  {
    icon: '/icon/general.png',
    title: 'General Dentistry',
    href: '/services/general',
  },
  {
    icon: '/icon/checkup.png',
    title: 'Check-up & Cleans',
    href: '/services/preventive/oral-hygiene-care',
  },
  {
    icon: '/icon/cosmetic.png',
    title: 'Cosmetic Dentistry',
    href: '/services/cosmetic',
  },
  {
    icon: '/icon/teethwhitening.png',
    title: 'Teeth Whitening',
    href: '/services/cosmetic/teeth-whitening',
  },
  {
    icon: '/icon/invisalign.png',
    title: 'Invisalign',
    href: '/services/orthodontics/invisalign',
  },
  {
    icon: '/icon/emergency.png',
    title: 'Emergency Dental',
    href: '/services/general/emergency-dental',
  },
] as const

/* ------------ Component ------------ */
export default function ServiceGrid() {
  return (
    <section id="services" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(({ icon, title, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-md
                         hover:shadow-lg hover:border-teal-500 transition flex flex-col items-center text-center"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={icon}
                  alt={title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">
                {title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
