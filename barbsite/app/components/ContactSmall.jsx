"use client"; // This is a client component 👈🏽

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleqzoqy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<div class="max-w-7xl flex flex-col items-center mt-[300px]">
    <h2 class="text-white text-4xl">Contact me</h2>
  <form onSubmit={handleSubmit} className="flex flex-col mt-12 w-80">
    <label htmlFor="email" className="text-gray-700 mb-2">
      Email Address
    </label>
    <input
      id="email"
      type="email"
      name="email"
      className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <label htmlFor="message" className="text-gray-700 mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button
      type="submit"
      disabled={state.submitting}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
    >
      Submit
    </button>
  </form>
</div>
  );
}

export default ContactForm;
