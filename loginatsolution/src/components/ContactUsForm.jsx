import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    workEmail: "",
    companyName: "",
    companyUrl: "",
    companySize: "",
    hearAbout: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="lg:p-8 w-full"
      >
        <h2 className="text-xl md:text-3xl font-semibold text-center mb-8 inline-block px-4 py-2 rounded">
          Book an intro call
        </h2>

        <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-6">
          {/* Work Email */}
          <div>
           
            <input
              type="email"
              name="workEmail"
              placeholder="name@company-email.com"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--pink)] outline-none"
            />
          </div>

          {/* Company Name */}
          <div>
          
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--pink)] outline-none"
            />
          </div>

          {/* Company URL */}
          <div>
           
            <input
              type="url"
              name="companyUrl"
              placeholder="Company URL"
              value={formData.companyUrl}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--pink)] outline-none"
            />
          </div>

          {/* Company Size */}
          <div>
            
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--pink)] outline-none"
            >
              <option value="">Company Size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-250</option>
              <option>251-1k</option>
              <option>1k+</option>
            </select>
          </div>

          {/* How did you hear about us */}
          <div className="md:col-span-1">
            
            <select
              name="hearAbout"
              value={formData.hearAbout}
              placeholder="How did you hear about us?"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--pink)] outline-none"
            >
              <option value="">How did you hear about us?</option>
              <option>Google</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Social Media</option>
              <option>Other</option>
            </select>
          </div>

          {/* Duration of the project */}
          <div className="md:col-span-1">
           
            <input
              type="text"
              name="duration"
              placeholder="Duration of the project - e.g. 3 months"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--pink)] outline-none"
            />
          </div>
        </div>
         {/* Consent */}
        <div className="flex items-start space-x-2 text-xs py-1 text-gray-600 my-5">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 border-gray-400 rounded focus:ring-[var(--pink)]"
          />
          <p className="text-lg">
            By submitting this form, you consent to the collection and use of
            your information in accordance with our{" "}
            <a href="/privacy-policy" className="text-emerald-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full gradient text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#4c6535] transition-all"
          >
            Let’s go!
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
