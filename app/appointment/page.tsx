export const metadata = {
  title: 'Book a Dental Appointment | Morton Dental Noosa',
  description:
    'Book your next dental appointment with Morton Dental in Noosa. Easy online booking for check-ups, cleans, cosmetic treatments and more.',
}

export default function AppointmentPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-700 dark:text-teal-400">
        Book an Appointment
      </h1>
      <p className="text-center mb-4 text-gray-700 dark:text-gray-300">
        Use the form below to schedule your appointment with Morton Dental.
      </p>

      <div className="w-full h-[700px] bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <iframe
          className="w-full h-full rounded-md"
          src="https://booking.au.hsone.app/soe/new/MORTON%20DENTAL?pid=AUGOW01"
          frameBorder="0"
          allow="fullscreen"
          loading="lazy"
          title="Morton Dental Appointment Booking"
          aria-label="Book an Appointment with Morton Dental"
        ></iframe>
      </div>
    </div>
  )
}
