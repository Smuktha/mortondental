export const metadata = {
  title: 'Contact Us | Morton Dental Noosa',
  description:
    'Get in touch with Morton Dental in Noosa. Find our clinic location, phone number, and send us a message online.',
}
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaAccessibleIcon } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="max-w-screen-xl mx-auto px-5 py-14 text-gray-800 dark:text-white">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-teal-700 dark:text-teal-400">Get in Touch with Morton Dental</h1>
        <p className="mt-4 text-lg">
          Need assistance? Reach out to us at <strong>(07) 5455 3577</strong>
        </p>
        <div className="w-16 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid Layout for Info and Form */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-teal-700 dark:text-teal-400">
            <FaPhoneAlt className="text-teal-600 dark:text-teal-300" /> Contact Details
          </h2>
          <p className="leading-relaxed mb-6">
            <strong>Morton Dental</strong>
            <br />
            Shop 5/1, Noosa Professional Centre
            <br />
            Lanyana Way, Noosa Heads, QLD 4567
            <br />
            Phone:{' '}
            <a href="tel:0754553577" className="text-teal-700 dark:text-teal-300 font-semibold">
              (07) 5455 3577
            </a>
          </p>

          <h3 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaClock className="text-teal-600 dark:text-teal-300" /> Operating Hours
          </h3>
          <ul className="space-y-1 mb-6 text-sm">
            {[ 
              ['Monday', '8:00 AM – 5:00 PM'],
              ['Tuesday', '8:00 AM – 5:00 PM'],
              ['Wednesday', '8:00 AM – 5:00 PM'],
              ['Thursday', '8:00 AM – 5:00 PM'],
              ['Friday', '8:00 AM – 5:00 PM'],
              ['Saturday', '8:30 AM – 1:30 PM'],
            ].map(([day, time], idx) => (
              <li key={idx} className="flex justify-between border-b border-gray-300 dark:border-gray-600 py-1">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>

          <a
            href="tel:0754553577"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-medium transition-all duration-300"
          >
            Call Now
          </a>
        </div>

        {/* Appointment Form */}
        <div className="w-full h-[700px]">
          <iframe
            src="https://booking.au.hsone.app/soe/new/MORTON%20DENTAL?pid=AUGOW01"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="fullscreen"
            loading="lazy"
            title="Morton Dental Booking"
            className="w-full h-full rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 border rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-teal-700 dark:text-teal-400">
            <FaMapMarkerAlt className="text-teal-600 dark:text-teal-300" /> Our Location
          </h3>
          <p>
            Visit us at Noosa Professional Centre. We provide convenient parking and easy access via public transport.
          </p>

          <h3 className="text-xl font-semibold mt-6 flex items-center gap-2 text-teal-700 dark:text-teal-400">
            <FaAccessibleIcon className="text-teal-600 dark:text-teal-300" /> Accessibility & Parking
          </h3>
          <p>
            Off-street parking is available. If you require wheelchair access, please contact the practice for parking instructions and support.
          </p>
        </div>

        <div className="p-6 bg-red-50 dark:bg-red-900 border-l-4 border-red-300 dark:border-red-500 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-red-700 dark:text-red-300">Emergency Dental Services</h3>
          <p className="mb-2">
            Urgent dental issue? We offer same-day emergency appointments. Get in touch now — flexible payment options available.
          </p>
          <p className="text-sm mt-4">
            <strong>After-Hours Emergency:</strong> Present to Noosa Hospital, 111 Goodchap Street, Noosaville.{' '}
            <a href="tel:+61754559200" className="text-blue-700 dark:text-blue-400 underline">07 5455 9200</a>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-teal-700 dark:text-teal-400 mb-6">Visit Us</h2>
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.7427654019043!2d153.08867767520587!3d-26.399496976956776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9369718b1efbb1%3A0x7193afadeec11f69!2sMorton%20Dental!5e0!3m2!1sen!2sus!4v1750920719349!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[400px]"
            title="Morton Dental Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

