export const metadata = {
  title: 'Afterpay Dentist Noosa | Morton Dental',
  description:
    'Split your dental treatment cost with Afterpay at Morton Dental Noosa. No interest. Four easy payments. Book now or call (07) 5455 3577.',
}

import Image from 'next/image'

export default function AfterpayPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-center">
      
      {/* Afterpay image container */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl relative aspect-[3/2] rounded-lg shadow overflow-hidden">
          <Image
            src="/images/howafterpayworks.jpg"
            alt="How Afterpay Works"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Location & contact info */}
      <p className="text-sm text-gray-700">
        Afterpay Noosa Heads, Noosa Junction, Noosaville, QLD |{' '}
        <a href="tel:0754553577" className="text-teal-600 font-semibold">
          (07) 5455 3577
        </a>
      </p>
    </div>
  )
}
