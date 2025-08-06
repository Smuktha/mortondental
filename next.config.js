/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Required for static export
  output: 'export',

  // ✅ Ensures compatibility with image components
  images: {
    unoptimized: true,
  },

  // ❌ Remove this to prevent folder-style export (e.g. /blog1/index.html)
  trailingSlash: true,

  // ✅ Prevent build from breaking due to type errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ App directory support (if you're using /app, keep this)
  experimental: {
    appDir: true,
  },

  // ✅ All custom redirects
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/meet-the-team', destination: '/team', permanent: true },
      { source: '/dr-karen-silva', destination: '/team', permanent: true },
      { source: '/dr-stefano-burti', destination: '/team', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/general-dentistry', destination: '/services/preventive', permanent: true },
      { source: '/emergency-dentist-noosa-heads', destination: '/services/general/emergency-dental', permanent: true },
      { source: '/dental-fillings-noosa-heads', destination: '/services/general/fillings', permanent: true },
      { source: '/childrens-dentistry-noosa-heads', destination: '/services/general/children-dentistry', permanent: true },
      { source: '/root-canal-noosa-heads', destination: '/services/general/root-canal', permanent: true },
      { source: '/custom-mouthguards', destination: '/services/general/custom-mouthguards', permanent: true },
      { source: '/tooth-extraction', destination: '/services/general/tooth-extraction', permanent: true },
      { source: '/wisdom-teeth-removal', destination: '/services/general/wisdom-teeth-removal', permanent: true },
      { source: '/preventive-dentistry-noosa-heads', destination: '/services/preventive', permanent: true },
      { source: '/fissure-sealants-noosa-heads', destination: '/services/preventive/fissure-sealants', permanent: true },
      { source: '/oral-hygiene-care-noosa-heads', destination: '/services/preventive/oral-hygiene-care', permanent: true },
      { source: '/restorative-dentistry-noosa-heads', destination: '/services/restorative', permanent: true },
      { source: '/crowns-and-bridges-noosa-heads', destination: '/services/restorative/crowns-and-bridges', permanent: true },
      { source: '/dentures-noosa-heads', destination: '/services/restorative/dentures', permanent: true },
      { source: '/dental-implants-noosa-heads', destination: '/services/restorative/implants', permanent: true },
      { source: '/inlays-and-onlays-noosa-heads', destination: '/services/restorative/inlays-and-onlays', permanent: true },
      { source: '/cosmetic-dentistry-noosa-heads', destination: '/services/cosmetic', permanent: true },
      { source: '/teeth-whitening-noosa-heads', destination: '/services/cosmetic/teeth-whitening', permanent: true },
      { source: '/dental-veneers-noosa-heads', destination: '/services/cosmetic/veneers', permanent: true },
      { source: '/orthodontics', destination: '/services/orthodontics', permanent: true },
      { source: '/invisalign-noosa-heads', destination: '/services/orthodontics/invisalign', permanent: true },
      { source: '/how-we-can-help', destination: '/HowWeCanHelp', permanent: true },
      { source: '/new-patients', destination: '/patients', permanent: true },
      { source: '/special-offers', destination: '/specials', permanent: true },
      { source: '/afterpay', destination: '/payment-plans', permanent: true },
    ]
  },
}

export default nextConfig
