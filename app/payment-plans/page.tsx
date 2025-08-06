export const metadata = {
  title: 'Dental Payment Plans Noosa | Morton Dental',
  description:
    'Explore dental payment plans at Morton Dental Noosa. We accept Afterpay, ZIP, and major health funds to make your dental care more affordable.',
}
import Link from 'next/link';
import Image from 'next/image';

export default function PaymentPlans() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 text-gray-800 dark:text-gray-200">
      {/* --- Hero Section --- */}
      <section className="text-center space-y-4">
        <Image
          src="/images/heart-pig.jpg"
          alt="Heart and piggy bank illustration representing payment plans"
          width={100}
          height={100}
          className="mx-auto"
          priority
        />
        <h1 className="text-4xl font-bold text-teal-800 dark:text-teal-300">Flexible Payment Options</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We want to make quality dental care affordable and stress-free.
          Explore our flexible payment plans and partner health funds designed to suit your needs.
        </p>
        <Link
          href="/services"
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold"
        >
          View Our Services »
        </Link>
      </section>

      {/* --- Medibank Card --- */}
      <section className="bg-orange-50 dark:bg-orange-100/10 border-l-4 border-orange-300 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-2">Medibank Members’ Choice Advantage Dentist</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Medibank members with extras cover can enjoy up to 100% back on select check-ups at Morton Dental.
          </p>
        </div>
        <Image src="/images/medibank.jpg" alt="Medibank logo" width={140} height={40} />
      </section>

      {/* --- Preferred Providers Grid --- */}
      <section>
        <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-6 text-center">Preferred Provider Partners</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'BUPA',
              logo: '/images/bupa.jpg',
              text: 'BUPA Platinum members enjoy high rebates on preventive and general dental treatments.',
            },
            {
              name: 'HCF',
              logo: '/images/hcf.jpg',
              text: 'Enjoy no-gap yearly scale and cleans as part of your Extras cover.',
            },
            {
              name: 'NIB',
              logo: '/images/nib.jpg',
              text: '100% back on checkups for NIB Extras policy holders.',
            },
            {
              name: 'TUH',
              logo: '/images/tuh.jpg',
              text: 'Education community families are eligible for rebates. HICAPS available on-site.',
            },
          ].map((provider) => (
            <div key={provider.name} className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm">
              <Image src={provider.logo} alt={`${provider.name} logo`} width={60} height={40} />
              <p className="text-gray-700 dark:text-gray-300">{provider.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Financing Options --- */}
      <section>
        <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-6 text-center">Financing Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              logo: '/images/zip.jpg',
              alt: 'ZIP logo',
              desc: 'Get your treatment now and pay later with interest-free ZIP finance.',
            },
            {
              logo: '/images/afterpay.jpg',
              alt: 'Afterpay logo',
              desc: 'Split your payments into four equal fortnightly payments — interest-free.',
              link: '/payment-plans/afterpay',
            },
            {
              logo: '/images/payright.jpg',
              alt: 'PayRight logo',
              desc: 'Fully automated flexible payment plans. You decide the frequency.',
            },
            {
              logo: '/images/australianGovernment.jpg',
              alt: 'DVA logo',
              desc: 'DVA-eligible? You may qualify for necessary dental care at no cost.',
            },
            {
              logo: '/images/medicare.jpg',
              alt: 'CDBS logo',
              desc: 'Eligible families can claim up to $1,132 for essential dental treatments.',
            },
          ].map(({ logo, alt, desc, link }) => (
            <div key={alt} className="bg-white dark:bg-gray-900 p-4 border rounded shadow-sm flex gap-4">
              <Image src={logo} alt={alt} width={60} height={40} />
              <div>
                <p className="text-gray-700 dark:text-gray-300">{desc}</p>
                {link && (
                  <Link href={link} className="inline-block mt-2 bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700 text-sm">
                    Learn More »
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact Us --- */}
      <section className="bg-teal-50 dark:bg-teal-900/30 p-6 text-center rounded-lg shadow">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
          Have questions or ready to book?
          <br />
          Call us at{' '}
          <a href="tel:0754553577" className="text-teal-800 dark:text-teal-300 font-bold">
            (07) 5455 3577
          </a>{' '}
          today!
        </p>
        <Link
          href="/contact-us"
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold"
        >
          CONTACT US »
        </Link>
      </section>

      {/* --- Disclaimer --- */}
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 italic">
        *All procedures carry risks. Always consult a qualified dental practitioner before proceeding.
      </p>
    </div>
  )
}
