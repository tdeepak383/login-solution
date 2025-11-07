import { useState } from "react";

const RequirementForm = ({color}) => {
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
    <div className={`bg-${color} rounded-3xl`}>
      <form
        onSubmit={handleSubmit}
        className="w-full text-left p-8 space-y-8"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Share Your Requirement
        </h2>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-xs py-1 border-b border-gray-300 focus:outline-none  "
            />
          </div>

          {/* Email */}
          <div>
           
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-xs py-1 border-b border-gray-300 focus:outline-none  "
            />
          </div>

          {/* Contact */}
          <div>
            
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full  text-xs py-1 border-b border-gray-300 focus:outline-none  "
            />
          </div>

          {/* Duration */}
          <div>
           
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full  text-xs py-1 border-b border-gray-300 focus:outline-none  "
            >
              <option value="">Select Duration</option>
              <option value="1-3 months">1-3 Months</option>
              <option value="3-6 months">3-6 Months</option>
              <option value="6+ months">6+ Months</option>
            </select>
          </div>
        </div>

        {/* Company */}
        <div>         
          <input
            type="text"
            name="company"
            placeholder="Website / Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b border-gray-300 focus:outline-none  "
          />
        </div>

        {/* Work Requirement */}
        <div>
         
          <textarea
            name="requirement"
            placeholder="Add Your Requirement"
            value={formData.requirement}
            onChange={handleChange}
            rows="4"
            type="text"
            required
            className="w-full  text-xs py-1 border-b border-gray-300 focus:outline-none  "
          ></textarea>
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-2 text-xs py-1 text-gray-600">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 border-gray-400 rounded focus:ring-[var(--pink)]"
          />
          <p className="text-xs">
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
            className="w-full text-xs md:w-auto px-8 py-3 gradient text-white font-medium rounded-full shadow-md hover:opacity-90 transition"
          >
            Submit Your Requirement
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
