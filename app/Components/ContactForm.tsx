'use client';
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
     <div className="flex flex-col justify-center items-center space-y-10 mt-16">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-wide border-b-2 border-white w-fit pb-2">
        Contact
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 max-w-md w-full p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/50"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-[#001f3f]/90 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 w-full text-[#001f3f] rounded-lg shadow-sm outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#001f3f]/90 mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 w-full text-[#001f3f] rounded-lg shadow-sm outline-none transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-[#001f3f]/90 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 w-full text-[#001f3f] rounded-lg shadow-sm outline-none transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Send Message
        </button>

        {/* Status */}
        {status && (
          <p
            className={`mt-2 text-sm ${
              status.startsWith("✅") ? "text-green-600" : status.startsWith("❌") ? "text-red-600" : "text-gray-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
