'use client'

import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function ActionBar() {
  return (
    <div className="bg-[#2d2d2d] text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center border-t-2 border-teal-600">
      
      {/* Left side */}
      <div className="flex items-center gap-6">
        <Link href="/appointment" className="flex items-center gap-1 hover:text-teal-300">
          <CalendarDaysIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Schedule an Appointment</span>
        </Link>

        <a href="mailto:reception@mortondental.com.au" className="flex items-center gap-1 hover:text-teal-300">
          <EnvelopeIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Email Us</span>
        </a>

        {/* ✅ Feedback link */}
        <Link href="/feedback" className="flex items-center gap-1 hover:text-teal-300">
          <ChatBubbleLeftRightIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Give Feedback</span>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a href="tel:+61754553577" className="flex items-center gap-1 font-semibold hover:text-teal-300">
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">(07) 5455 3577</span>
        </a>

        <div className="flex gap-2">
          <a href="https://www.google.com/maps?cid=8184078109432160105" aria-label="Google" className="hover:text-teal-300">
            <span className="text-lg font-bold">G</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557599395170" aria-label="Facebook" className="hover:text-teal-300">
            <span className="text-lg font-bold">f</span>
          </a>
        </div>
      </div>
    </div>
  )
}
