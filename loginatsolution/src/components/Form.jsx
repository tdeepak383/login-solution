import { useState } from "react";

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    duration: "",
    company: "",
    requirement: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white shadow-xl text-left rounded-3xl p-8 space-y-2"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Share Your Requirement
        </h2>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700  ">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-xl border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700  ">
              E-mail Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-xl border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700  ">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full text-xl border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700  ">
              Project Duration<span className="text-red-500">*</span>
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full text-xl border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"
            >
              <option value="">Select Duration</option>
              <option value="1-3 months">1–3 Months</option>
              <option value="3-6 months">3–6 Months</option>
              <option value="6+ months">6+ Months</option>
            </select>
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700  ">
            Website/ Company<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Website/ Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full text-xl border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"
          />
        </div>

        {/* Work Requirement */}
        <div>
          <label className="block text-sm font-medium text-gray-700  ">
            Work Requirement<span className="text-red-500">*</span>
          </label>
          <textarea
            name="requirement"
            placeholder="Add Your Requirement"
            value={formData.requirement}
            onChange={handleChange}
            rows="4"
            required
            className="w-full text-xl border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[var(--pink)]"
          ></textarea>
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 border-gray-400 rounded focus:ring-[var(--pink)]"
          />
          <p>
            By submitting this form, you consent to the collection and use of
            your information in accordance with our{" "}
            <a href="#" className="text-emerald-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full text-xl md:w-auto px-8 py-3 gradient text-white font-medium rounded-full shadow-md hover:opacity-90 transition"
          >
            Submit Your Requirement
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
