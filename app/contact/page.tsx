import ContactForm from "../Components/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto py-10 justify-center items-center">
      <h1 className="flex justify-center text-2xl font-bold mb-6">Contact Me</h1>
      <ContactForm />
    </div>
  );
}