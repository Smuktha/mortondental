import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Title and Description */}
        <title>Morton Dental | Your Local Dentist in Noosa</title>
        <meta
          name="description"
          content="Providing quality dental care in a friendly and professional environment."
        />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="O9S3eX2zLBTbt2KfJwPhaGENXB9u49gbEmpKTXDzwG4"
        />
      </head>

      <body className="bg-white text-gray-800 min-h-screen">
        {/* ✅ Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53LKFW8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          />
        </noscript>

        {/* ✅ Facebook Pixel Fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=539631616959355&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>

        {/* ✅ Google Tag Manager Script */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53LKFW8');`}
        </Script>

        {/* ✅ Facebook Pixel Script */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','539631616959355');
          fbq('track','PageView');`}
        </Script>

        {/* ✅ Site Layout */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
