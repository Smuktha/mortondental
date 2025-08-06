import FeedbackForm from "@/components/FeedbackForm"; // lowercase 'f' in filename

export default function FeedbackPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center" style={{ color: "#00A9A5" }}>
        Feedback
      </h1>

      <p>
        While our professional dental team strives to provide you with the highest quality of care and service, 
        if you feel dissatisfied with treatment you’ve received you should first discuss the matter with your treating dentist.
      </p>

      <p>
        After this discussion, if you wish to take the matter further, please contact our Practice Manager on{" "}
        <strong className="text-black dark:text-white">07 5455 3577</strong> to discuss your concerns.
      </p>

      <p>
        If the matter is still unresolved, you may wish to contact the{" "}
        <strong>Australian Dental Association (ADA)</strong> Community Relations Officer, or the{" "}
        <strong>Office of the Health Ombudsman</strong>. Both officers have conciliatory roles in trying to resolve the situation 
        to the satisfaction of all parties.
      </p>

      <div className="space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#00A9A5" }}>
            Australian Dental Association
          </h2>
          <p><strong>Phone:</strong> (02) 9906 4412</p>
          <p><strong>Address:</strong> PO Box 520, St Leonards NSW 1590</p>
          <p><strong>Fax:</strong> (02) 9906 4917</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#00A9A5" }}>
            Office of the Health Ombudsman
          </h2>
          <p><strong>Phone:</strong> 133 646</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@oho.qld.gov.au" className="text-blue-600 dark:text-blue-400 underline">
              info@oho.qld.gov.au
            </a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.oho.qld.gov.au" className="text-blue-600 dark:text-blue-400 underline">
              www.oho.qld.gov.au
            </a>
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <FeedbackForm />
    </div>
  );
}
