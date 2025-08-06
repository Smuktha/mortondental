export const metadata = {
  title: 'Privacy Policy | Morton Dental',
  description: 'Read how Morton Dental collects, stores, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <p>
          At Morton Dental, we are committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Scope of This Policy</h2>
        <p>
          This policy applies solely to the Morton Dental website. If you follow links to external websites, we encourage you to read their privacy statements as we do not control or take responsibility for their data practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-2">
          When you use our site, we may collect the following information:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Your name, email address, and phone number</li>
          <li>Preferred appointment date and time</li>
          <li>Technical data such as browser type, IP address, and pages visited</li>
        </ul>
        <p>
          This data is used to manage bookings, respond to enquiries, and enhance your website experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-2">
          <li>To schedule appointments and respond to your messages</li>
          <li>To send reminders or practice updates if you’ve opted in</li>
          <li>To improve website performance and usability</li>
        </ul>
        <p className="mt-2">
          You can unsubscribe from any communication by clicking the opt-out link included in our emails or texts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How We Protect Your Data</h2>
        <p>
          We use SSL encryption and secure systems to protect your data from unauthorized access. While no method is entirely risk-free, we continuously improve our security measures to keep your information safe.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
        <p>
          We do not sell or rent your personal data. Your information is only shared with trusted third parties if necessary to provide services or to comply with legal obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cookies and Analytics</h2>
        <p>
          Our site uses cookies and third-party tools like Google Analytics to understand visitor behavior and improve functionality. You may control cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Children’s Privacy</h2>
        <p>
          Our website is not intended for individuals under the age of 13. We do not knowingly collect personal data from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-2">You may request to:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccuracies in your information</li>
          <li>Request deletion of your data (as allowed by law)</li>
        </ul>
        <p>
          To make a request, please contact our office using the information below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Policy Updates</h2>
        <p>
          We may update this policy to reflect changes in our practices or legal requirements. The most current version will always be available on our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-1">Morton Dental</p>
        <p className="mb-1">Noosa Professional Centre</p>
        <p className="mb-1">Shop 5/1 Lanyana Way, Noosa Heads QLD 4567</p>
        <p>Phone: (07) 5455 3577</p>
      </section>

      <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: June 2025</p>
    </div>
  );
}
