export const metadata = {
  title: 'Morton Dental | Your Local Dentist in Noosa',
  description: 'We provide gentle, professional dental care for individuals and families in Noosa. Book online or call us today!',
}

import AboutSection from '@/components/Home/AboutSection'
import PaymentPlansSection from '@/components/Home/PaymentPlansSection'
import ContactSection from '@/components/Home/ContactSection'
import ServiceGrid from '@/components/Home/ServiceGrid'
import SpecialOfferBanner from '@/components/Home/SpecialOfferBanner'
import OurDentistsSection from '@/components/Home/OurDentistsSection'
import RestorativeSection from '@/components/Home/RestorativeSection'
import PreventativeSection from '@/components/Home/PreventativeSection'
import FAQSection from '@/components/Home/FAQSection'

export default function HomePage() {
  return (
    <main>
      {/* HeroSection - skipped for now */}
      <AboutSection />
      <ServiceGrid />
      <SpecialOfferBanner />
      <OurDentistsSection />
      <PaymentPlansSection />
      <RestorativeSection />
      <PreventativeSection />
      <FAQSection />
      <ContactSection />
      
    </main>
  )
}
