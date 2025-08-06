"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/myzjrppw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-all"
      >
        <h2
          className="text-3xl font-bold text-center"
          style={{ color: "#00A9A5" }}
        >
          Send us your Feedback
        </h2>

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00A9A5]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00A9A5]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00A9A5]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ backgroundColor: "#00A9A5" }}
          className="w-full text-white px-6 py-2 rounded-md hover:brightness-110 transition font-semibold"
        >
          {status === "submitting" ? "Sending..." : "Submit"}
        </button>

        {/* Submission Feedback */}
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-center">
            Thank you! Your feedback has been sent. 💬
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-center">
            Oops! Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
}
