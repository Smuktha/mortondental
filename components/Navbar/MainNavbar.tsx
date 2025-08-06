/* ------------------------------------------------------------------
   MainNavbar.tsx  –  sticky desktop fly‑outs + rock‑solid mobile menu
   -----------------------------------------------------------------*/
'use client'

import { useState, useRef } from 'react'
import Link          from 'next/link'
import Image         from 'next/image'
import {
  Bars3Icon,
  XMarkIcon,
}                     from '@heroicons/react/24/outline'

/* ====== generic helpers ====== */
type Setter     = React.Dispatch<React.SetStateAction<boolean>>
type TimeoutRef = React.MutableRefObject<NodeJS.Timeout | null>

/* fly‑out used for “Meet the Team” and “Payment Plans”  */
const FlyList = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute left-0 top-full bg-white text-black rounded shadow-lg
                  min-w-[200px] z-50">
    {children}
  </div>
)

/* big 4‑column mega‑menu for “Our Services” */
const MegaMenu = () => (
  <div className="absolute left-0 top-full bg-white text-black rounded shadow-lg
                  w-[700px] p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm z-50">

    {/* column 1 — General */}
    <div>
      <h4 className="font-bold mb-2 text-gray-800">
        <Link href="/services/general" className="hover:text-teal-600">General Dentistry</Link>
      </h4>
      <Link href="/services/general/emergency-dental"   className="block hover:text-teal-600">Emergency Dental</Link>
      <Link href="/services/general/fillings"           className="block hover:text-teal-600">Fillings</Link>
      <Link href="/services/general/children-dentistry" className="block hover:text-teal-600">Children’s Dentistry</Link>
      <Link href="/services/general/root-canal"         className="block hover:text-teal-600">Root Canal</Link>
      <Link href="/services/general/custom-mouthguards" className="block hover:text-teal-600">Custom Mouthguards</Link>
      <Link href="/services/general/tooth-extraction"   className="block hover:text-teal-600">Tooth Extraction</Link>
      <Link href="/services/general/wisdom-teeth-removal" className="block hover:text-teal-600">Wisdom Teeth Removal</Link>
    </div>

    {/* column 2 — Preventive */}
    <div>
      <h4 className="font-bold mb-2 text-gray-800">
        <Link href="/services/preventive" className="hover:text-teal-600">Preventive Dentistry</Link>
      </h4>
      <Link href="/services/preventive/fissure-sealants"  className="block hover:text-teal-600">Fissure Sealants</Link>
      <Link href="/services/preventive/oral-hygiene-care" className="block hover:text-teal-600">Oral Hygiene Care</Link>
    </div>

    {/* column 3 — Restorative */}
    <div>
      <h4 className="font-bold mb-2 text-gray-800">
        <Link href="/services/restorative" className="hover:text-teal-600">Restorative Dentistry</Link>
      </h4>
      <Link href="/services/restorative/crowns-and-bridges" className="block hover:text-teal-600">Crowns & Bridges</Link>
      <Link href="/services/restorative/dentures"          className="block hover:text-teal-600">Dentures</Link>
      <Link href="/services/restorative/implants"          className="block hover:text-teal-600">Implants</Link>
      <Link href="/services/restorative/inlays-and-onlays" className="block hover:text-teal-600">Inlays & Onlays</Link>
    </div>

    {/* column 4 — Cosmetic & Ortho */}
    <div>
      <h4 className="font-bold mb-2 text-gray-800">
        <Link href="/services/cosmetic" className="hover:text-teal-600">Cosmetic Dentistry</Link>
      </h4>
      <Link href="/services/cosmetic/teeth-whitening" className="block hover:text-teal-600">Teeth Whitening</Link>
      <Link href="/services/cosmetic/veneers"         className="block hover:text-teal-600">Veneers</Link>

      <h4 className="font-bold mt-4 mb-2 text-gray-800">
        <Link href="/services/orthodontics" className="hover:text-teal-600">Orthodontics</Link>
      </h4>
      <Link href="/services/orthodontics/invisalign"  className="block hover:text-teal-600">Invisalign</Link>
    </div>
  </div>
)

/* ====== main component ====== */
export default function MainNavbar() {
  /* timers so we can delay the hide – feels nicer */
  const teamTimer = useRef<NodeJS.Timeout|null>(null)
  const svcTimer  = useRef<NodeJS.Timeout|null>(null)
  const planTimer = useRef<NodeJS.Timeout|null>(null)

  const show = (setter:Setter, ref:TimeoutRef) => {
    if (ref.current) clearTimeout(ref.current)
    setter(true)
  }
  const hide = (setter:Setter, ref:TimeoutRef) => {
    ref.current = setTimeout(() => setter(false), 100)   // 100 ms grace
  }

  const [teamOpen, setTeamOpen]       = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [plansOpen, setPlansOpen]     = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)

  return (
    <header className="bg-[#4a4a4a] text-white shadow-md w-full z-50 sticky top-0">
      {/* ------------ top bar ------------ */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo1.png" alt="Morton Dental" width={150} height={45} priority/>
        </Link>

        {/* ------------ desktop nav ------------ */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/"          className="hover:text-teal-300">Home</Link>
          <Link href="/about"     className="hover:text-teal-300">About Us</Link>

          {/* Meet the Team ------------------------------------------------ */}
          <div
            className="relative"
            onMouseEnter={() => show(setTeamOpen , teamTimer)}
            onMouseLeave={() => hide(setTeamOpen , teamTimer)}
          >
            <Link href="/team" className="hover:text-teal-300">Meet the Team</Link>
            {teamOpen && (
              <FlyList>
                <Link href="/team/karen-silva"   className="block px-4 py-2 hover:bg-teal-100">Dr Karen Silva</Link>
                <Link href="/team/stefano-burti" className="block px-4 py-2 hover:bg-teal-100">Dr Stefano Burti</Link>
              </FlyList>
            )}
          </div>
<Link href="/blog" className="hover:text-teal-300">Blog</Link>

          {/* Our Services -------------------------------------------------- */}
          <div
            className="relative"
            onMouseEnter={() => show(setServicesOpen , svcTimer)}
            onMouseLeave={() => hide(setServicesOpen , svcTimer)}
          >
            <Link href="/services" className="hover:text-teal-300">Our Services</Link>
            {servicesOpen && <MegaMenu/>}
          </div>

          <Link href="/HowWeCanHelp" className="hover:text-teal-300">How We Can Help</Link>
          <Link href="/patients"     className="hover:text-teal-300">New Patients</Link>

          {/* Payment Plans -------------------------------------------------- */}
          <div
            className="relative"
            onMouseEnter={() => show(setPlansOpen , planTimer)}
            onMouseLeave={() => hide(setPlansOpen , planTimer)}
          >
            <Link href="/payment-plans" className="hover:text-teal-300">Payment Plans</Link>
            {plansOpen && (
              <FlyList>
                <Link href="/payment-plans/afterpay" className="block px-4 py-2 hover:bg-teal-100">Afterpay</Link>
              </FlyList>
            )}
          </div>

          <Link href="/contact-us" className="hover:text-teal-300">Contact Us</Link>

          <Link href="/appointment">
            <button className="bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded text-sm">
              Book Appointment
            </button>
          </Link>
        </nav>

        {/* ------------ mobile burger ------------ */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <XMarkIcon className="w-6 h-6"/> : <Bars3Icon className="w-6 h-6"/>}
        </button>
      </div>

      {/* ------------ mobile panel ------------ */}
      {mobileOpen && (
        <nav className="md:hidden bg-black text-white px-6 pb-6 space-y-4 text-sm">
          {/* simple links */}
          <MobileLink href="/"          close={() => setMobileOpen(false)}>Home</MobileLink>
          <MobileLink href="/about"     close={() => setMobileOpen(false)}>About Us</MobileLink>

          {/* accordions */}
          <Accordion label="Meet the Team">
            <MobileLink href="/team"               isChild close={() => setMobileOpen(false)}>All Team</MobileLink>
            <MobileLink href="/team/karen-silva"   isChild close={() => setMobileOpen(false)}>Dr Karen Silva</MobileLink>
            <MobileLink href="/team/stefano-burti" isChild close={() => setMobileOpen(false)}>Dr Stefano Burti</MobileLink>
          </Accordion>
<MobileLink href="/blog" close={() => setMobileOpen(false)}>Blog</MobileLink>

          <Accordion label="Our Services">
            <MobileLink href="/services"              isChild close={() => setMobileOpen(false)}>All Services</MobileLink>
            <MobileLink href="/services/general"      isChild close={() => setMobileOpen(false)}>General</MobileLink>
            <MobileLink href="/services/preventive"   isChild close={() => setMobileOpen(false)}>Preventive</MobileLink>
            <MobileLink href="/services/restorative"  isChild close={() => setMobileOpen(false)}>Restorative</MobileLink>
            <MobileLink href="/services/cosmetic"     isChild close={() => setMobileOpen(false)}>Cosmetic</MobileLink>
            <MobileLink href="/services/orthodontics" isChild close={() => setMobileOpen(false)}>Orthodontics</MobileLink>
          </Accordion>

          <MobileLink href="/HowWeCanHelp" close={() => setMobileOpen(false)}>How We Can Help</MobileLink>
          <MobileLink href="/patients"     close={() => setMobileOpen(false)}>New Patients</MobileLink>

          <Accordion label="Payment Plans">
            <MobileLink href="/payment-plans"         isChild close={() => setMobileOpen(false)}>All Plans</MobileLink>
            <MobileLink href="/payment-plans/afterpay" isChild close={() => setMobileOpen(false)}>Afterpay</MobileLink>
          </Accordion>

          <MobileLink href="/contact-us"  close={() => setMobileOpen(false)}>Contact Us</MobileLink>

          <Link href="/appointment" onClick={() => setMobileOpen(false)}>
            <button className="w-full bg-teal-600 hover:bg-teal-700 py-2 rounded mt-4">
              Book Appointment
            </button>
          </Link>
        </nav>
      )}
    </header>
  )
}

/* ---------------- mobile helpers ---------------- */
function MobileLink({
  href, children, close, isChild=false,
}: {
  href:string; children:React.ReactNode; close:()=>void; isChild?:boolean
}) {
  return (
    <Link href={href} onClick={close}
          className={`block hover:text-teal-300 ${isChild?'pl-4 py-1':'py-2'}`}>
      {children}
    </Link>
  )
}

function Accordion({
  label, children,
}:{
  label:string; children:React.ReactNode
}) {
  const [open,setOpen]=useState(false)
  return (
    <details open={open} onToggle={() => setOpen(!open)} className="group">
      <summary className="cursor-pointer py-2 group-hover:text-teal-300">{label}</summary>
      <div className="pl-2 mt-1 space-y-1">{children}</div>
    </details>
  )
}
