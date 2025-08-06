export const metadata = {
  title: 'Legal Information | Morton Dental',
  description: 'Learn about the legal terms and conditions related to using Morton Dental’s website.',
};

export default function LegalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
        Legal Disclaimer
      </h1>

      <p className="mb-6">
        The content presented on this website is intended for general informational purposes only and should not be interpreted as medical or professional advice. If you require dental care or guidance, please consult a qualified dental practitioner.
      </p>

      <p className="mb-6">
        While Morton Dental makes every effort to ensure the accuracy and reliability of the information provided, we make no warranties or representations about its completeness, relevance, or suitability for any specific purpose.
      </p>

      <p className="mb-6">
        Any actions taken based on information found on this website are done at your own discretion and risk. Morton Dental is not liable for any loss or damage that may occur as a result of reliance on the content herein.
      </p>

      <p className="mb-6">
        This website may contain links to third-party sites. These are provided for convenience only. Morton Dental has no control over the content or availability of those external sites and assumes no responsibility for them.
      </p>

      <p className="text-sm text-gray-400 dark:text-gray-500 mt-12">
        Last revised on: {new Date().toLocaleDateString('en-AU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </div>
  );
}
