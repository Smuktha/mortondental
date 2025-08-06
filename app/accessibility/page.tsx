export const metadata = {
  title: 'Accessibility Statement | Morton Dental',
  description:
    'Morton Dental is committed to making our website accessible to all users, including those with disabilities. Read our full accessibility statement.',
};
export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
        Website Accessibility Statement
      </h1>

      <section className="mb-8">
        <p>
          At Morton Dental, we are committed to providing a digital experience that is accessible
          to as many users as possible, including people with disabilities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Commitment</h2>
        <p>
          While we currently do not use accessibility-specific tools or widgets, our site is
          designed with clarity and simplicity in mind. We aim to create a user-friendly experience
          for all visitors and are continually looking at ways to improve accessibility.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What We’re Doing</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Using straightforward navigation and clear headings</li>
          <li>Maintaining readable fonts and contrasting colors</li>
          <li>Minimizing clutter and distractions</li>
          <li>Writing content in a clear, accessible tone</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Limitations</h2>
        <p>
          We acknowledge that some parts of our website may not be fully optimized for assistive
          technologies. As we continue to update our platform, improving accessibility remains a
          priority.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
        <p>
          If you experience any difficulty accessing any part of our website or need assistance,
          we’re happy to help.
        </p>
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p><strong>Phone:</strong> (07) 5455 3577</p>
          <p>
            <strong>Address:</strong> Morton Dental, Noosa Professional Centre, Shop 5/1 Lanyana Way,
            Noosa Heads QLD 4567
          </p>
          <p><strong>Hours:</strong> Monday–Friday, 8:00am–5:00pm</p>
        </div>
      </section>

      <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: June 2025</p>
    </div>
  );
}
