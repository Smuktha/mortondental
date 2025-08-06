'use client'
import Link from 'next/link';

export default function NoGapOfferSection() {
  return (
    <section className="w-full h-auto grid grid-cols-1 md:grid-cols-2">
      
      {/* Google Map Embed */}
      <div className="w-full h-[350px] md:h-auto">
        <iframe
          title="Morton Dental Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.7427654019043!2d153.08867767520587!3d-26.399496976956776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9369718b1efbb1%3A0x7193afadeec11f69!2sMorton%20Dental!5e0!3m2!1sen!2sus!4v1750920719349!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] rounded shadow"
        />
      </div>

      {/* Offer Box */}
      <div className="bg-[#007b84] text-white flex flex-col justify-center items-start px-6 py-12 gap-6 relative">
        <h2 className="text-2xl font-bold leading-snug">
          Enjoy a <span className="text-[#6df3f3]">No-Gap First Appointment</span>
        </h2>
        <p className="text-sm">
          Or pay just $199 for your first visit.
        </p>

        <Link href="/contact-us">
          <button
            className="bg-orange-500 text-white font-semibold py-3 px-6 rounded shadow hover:bg-orange-600 transition"
          >
            Contact Us Today
          </button>
        </Link>

        <div className="text-lg font-bold">
          📞 <a href="tel:+61754553577" className="underline hover:text-orange-300">(07) 5455 3577</a>
        </div>

        <p className="text-xs text-gray-200 mt-4 max-w-md leading-snug">
          * Any surgical or invasive procedure carries risks. Before proceeding,
          you should seek a second opinion from an appropriately qualified health practitioner.
        </p>
      </div>
    </section>
  )
}
