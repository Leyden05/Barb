"use client"; // This is a client component 👈🏽

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleqzoqy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="">
    <div class="max-w-7xl mt-8 flex flex-col items-center p-8 rounded-lg transition duration-300" data-aos="fade-up">
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        <label htmlFor="email" className="text-white mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-customLavender px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 text-[#414a4c]"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-customLavender text-[#414a4c] px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-customLavender text-white font-semibold py-2 px-4"
        >
          Submit
        </button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;
