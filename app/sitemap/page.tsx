'use client';

export default function SitemapPage() {
  const pages = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact Us', href: '/contact-us' },
    { title: 'New Patients', href: '/patients' },
    { title: 'Our Services', href: '/services' },
    { title: 'Emergency Dental', href: '/services/general/emergency-dental' },
    { title: 'Payment Plans', href: '/payment-plans' },
    { title: 'Meet the Team', href: '/team' },
  ];

  const services = [
    { title: 'Preventative Dentistry', href: '/services/preventive' },
    { title: 'Fissure Sealants', href: '/services/preventive/fissure-sealants' },
    { title: 'Oral Hygiene Care', href: '/services/preventive/oral-hygiene-care' },
    { title: 'Restorative Dentistry', href: '/services/restorative' },
    { title: 'Fillings', href: '/services/general/fillings' },
    { title: 'Dentures', href: '/services/restorative/dentures' },
    { title: 'Inlays and Onlays', href: '/services/restorative/inlays-and-onlays' },
    { title: 'Crowns and Bridges', href: '/services/restorative/crowns-and-bridges' },
    { title: 'Root Canal', href: '/services/general/root-canal' },
    { title: 'Implants', href: '/services/restorative/implants' },
    { title: 'Cosmetic Dentistry', href: '/services/cosmetic' },
    { title: 'Teeth Whitening', href: '/services/cosmetic/teeth-whitening' },
    { title: 'Veneers', href: '/services/cosmetic/veneers' },
    { title: 'Invisalign', href: '/services/orthodontics/invisalign' },
    { title: 'Custom Mouthguards', href: '/services/general/custom-mouthguards' },
    { title: "Children's Dentistry", href: '/services/general/children-dentistry' },
    { title: 'Orthodontics', href: '/services/orthodontics' },
    { title: 'Tooth Extraction', href: '/services/general/tooth-extraction' },
    { title: 'Wisdom Teeth Removal', href: '/services/general/wisdom-teeth-removal' },
  ];

  const helpTopics = [
    { title: 'Healthy Gums', href: '/HowWeCanHelp/healthy-gums' },
    { title: 'Teeth Grinding', href: '/HowWeCanHelp/teeth-grinding' },
    { title: 'Family Dental Care', href: '/HowWeCanHelp/family-care' },
    { title: 'Replacing Missing Teeth', href: '/HowWeCanHelp/replacing-missing-teeth' },
    { title: 'Wisdom Teeth Discomfort', href: '/HowWeCanHelp/wisdom-teeth-discomfort' },
    { title: 'Gum Pimples', href: '/HowWeCanHelp/gum-pimples' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
        Sitemap
      </h1>

      <div className="space-y-10">
        <Section title="Pages" items={pages} />
        <Section title="Dental Services" items={services} />
        <Section title="How We Can Help" items={helpTopics} />
      </div>
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
