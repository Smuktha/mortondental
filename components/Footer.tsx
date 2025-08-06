'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white text-sm pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">

        {/* Column 1: Logo and Social Icons */}
        <div>
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo1.png"
              alt="Morton Dental Logo"
              width={160}
              height={50}
              className="mb-4"
              priority
            />

            <div className="flex space-x-4 text-white text-lg">
              <a
                href="https://www.google.com/maps/place/Morton+Dental/@-26.399497,153.0912526,754m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b9369718b1efbb1:0x7193afadeec11f69!8m2!3d-26.399497!4d153.0912526!16s%2Fg%2F11bzvzrsy7?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
              >
                <FaGoogle className="hover:text-cyan-300 cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61557599395170"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
              >
                <FaFacebookF className="hover:text-cyan-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Address and Phone */}
        <div>
          <h3 className="font-semibold text-white">
            Dentist Noosa Heads, Noosa Junction, Noosaville QLD |{' '}
            <a href="tel:0754553577" className="text-cyan-400 font-bold hover:underline">
              (07) 5455 3577
            </a>
          </h3>
          <p className="mt-1">
            <span className="inline-block mr-1">🏠</span>
            Noosa Professional Centre, Shop 5/1 Lanyana Way, Noosa Heads, QLD 4567
          </p>
        </div>

        {/* Column 3: Clinic Details */}
        <div className="text-xs">
          <p className="mb-1">Morton Dental</p>
          <p>Noosa Professional Centre, Shop 5/1 Lanyana Way</p>
          <p>Noosa Heads, QLD 4567</p>
          <p>
            Phone:{' '}
            <a href="tel:0754553577" className="text-cyan-400 hover:underline">
              (07) 5455 3577
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs space-x-4">
        <Link href="/copyright" className="hover:text-cyan-400">Copyright</Link>
        <Link href="/legal" className="hover:text-cyan-400">Legal</Link>
        <Link href="/privacy" className="hover:text-cyan-400">Privacy</Link>
        <Link href="/accessibility" className="hover:text-cyan-400">Accessibility</Link>
        <Link href="/sitemap" className="hover:text-cyan-400">Sitemap</Link>

        <p className="text-center text-sm text-gray-500 mt-4">
          Dental Websites by{' '}
          <a
            href="https://www.linkedin.com/in/muktha-suvarna12/"
            className="underline hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Muktha
          </a>,{' '}
          <a
            href="https://www.linkedin.com/in/maithri-suvarna-1532b0283/"
            className="underline hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maithri
          </a>, and{' '}
          <a
            href="https://www.linkedin.com/in/shipali-k-a38b42291/"
            className="underline hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shipali K
          </a>
        </p>
      </div>
    </footer>
  );
}
