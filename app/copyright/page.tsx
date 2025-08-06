export const metadata = {
  title: 'Copyright Notice | Morton Dental',
  description: 'All content on this website is © Morton Dental. Learn about permitted uses and protections.',
};

export default function CopyrightPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
        Copyright & Credits
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Copyright Statement</h2>
        <p className="mb-4">
          All content on this website, including text, images, graphics, and layout, is the property of Morton Dental unless otherwise stated.
          Unauthorized reproduction, copying, or distribution of any material on this website is strictly prohibited.
        </p>
        <p>
          © {new Date().getFullYear()} Morton Dental. All Rights Reserved.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Image Sources</h2>
        <p className="mb-2">
          We have used royalty-free images sourced from publicly available platforms that allow free commercial use, including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Unsplash</li>
          <li>Pexels</li>
          <li>Pixabay</li>
        </ul>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          If you believe any image has been used without appropriate permission, please contact us and we will promptly address it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Website Design</h2>
        <p>This website was designed and developed with care by:</p>
        <ul className="list-inside mt-2 space-y-1">
          <li>
            <a
              href="https://www.linkedin.com/in/muktha-suvarna12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Muktha Suvarna
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maithri-suvarna-1532b0283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Maithri Suvarna
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shipali-k-a38b42291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Shipali K
            </a>
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-400 dark:text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-AU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </div>
  );
}
