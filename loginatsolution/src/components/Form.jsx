import { useEffect, useRef, useState } from "react";

const jobs = [
  { id: "job1", label: "Designer" },
  { id: "job2", label: "Full Stack Developer" },
  { id: "job3", label: "Customer Support Services" },
];

const jobsFunction = {
  job1: [
    { point: "Brand Experience Designer" },
    { point: "Web/Graphic Designer" },
    { point: "UI/UX Designer" },
    { point: "PowerPoint Designer" },
    { point: "Whitepaper/ Datasheet Designer" },
    { point: "Email and Newsletter Designer" },
    { point: "Social Media Post Designer" },
    { point: "Event Collateral Designer" },
    { point: "Postcards and Poster Designer" },
    { point: "Brochures and Leaflet Designer" },
    { point: "Office Branding Designer" },
    { point: "Audio Visuals Experts" },
    { point: "Video Editors" },
    { point: "Animated PPT Designer" },
  ],
  job2: [
    { point: "Front-End Developers: Angular, React, and Vue.js" },
    { point: "Crownpeak and HCL DX Developer" },
    { point: "CSS frameworks experts: Tailwind CSS and Bootstrap" },
    { point: "Single Page Application (SPA) Developer" },
    { point: "Sketch, Figma, and Adobe XD Designers" },
    { point: "Fluid and Interactive Front-End Design Experts" },
    { point: "Prototyping & Wireframing Experts: Figma/InVision/Axure" },
    { point: "Website Maintenance & Update Services" },
    { point: "ECommerce Developer: Shopify, Magento, WooCommerce" },
    { point: "Web Developer: WordPress, Drupal, PHP, .NET" },
    { point: "Wireframes and Prototype designer: Figma or Adobe XD" },
  ],
  job3: [
    { point: "Customer Support / Helpdesk Services" },
    { point: "Order Taking & Processing" },
    { point: "Technical Support (L1, L2, L3)" },
    { point: "Billing & Payment Support" },
    { point: "Reservation & Booking Services" },
    { point: "Product Information & Inquiry Handling" },
    { point: "Complaint Resolution / Grievance Handling" },
    { point: "Customer Retention Programs" },
    { point: "Virtual Receptionist / Switchboard Services" },
    { point: "Chat Process Experts" },
    { point: "Email Process Experts" },
    { point: "Product Management to Payments, Shipping, and Returns" },
  ],
};

const RequirementForm = ({ color }) => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [selectJob, setSelectJob] = useState(""); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    jobCategory: "",
    jobRole: "",
    duration: "",
    requirement: "",
    consent: false,
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // If jobCategory changes → find actual category label
    if (name === "jobCategory") {
      const selected = jobs.find((job) => job.id === value);
      setSelectJob(value); // for rendering sub-jobs
      setFormData((prev) => ({
        ...prev,
        jobCategory: selected ? selected.label : "",
        jobRole: "", // reset job role when changing category
      }));
      return;
    }

    // Default handler
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // ✅ Handle Submit
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("✅ Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        company: "",
        jobCategory: "",
        jobRole: "",
        duration: "",
        requirement: "",
        consent: false,
      });

      setSelectJob("");
    } else {
      setStatus("❌ Failed to submit. Try again.");
    }
  } catch (error) {
    console.error("Submit Error:", error);
    setStatus("❌ Server error. Try again later.");
  }
};


useEffect(() => {
  if (!status) return;

  const timer = setTimeout(() => {
    setStatus("");
  }, 2000);

  return () => clearTimeout(timer);
}, [status]);



  return (
    <div className={`bg-${color} rounded-3xl`}>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full text-left p-8 space-y-8"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Share your requirement
        </h2>

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            name="company"
            placeholder="Website / Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
          />
        </div>

        {/* Job Category */}
        <div>
          <select
            name="jobCategory"
            value={selectJob} // ✅ value now job1/job2/job3 (for dropdown logic)
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
          >
            <option value="">Select Job Category</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Role */}
        {selectJob && (
          <div>
            <select
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              required
              className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
            >
              <option value="">Select Role</option>
              {jobsFunction[selectJob]?.map((item, index) => (
                <option key={index} value={item.point}>
                  {item.point}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Duration */}
        <div>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
          >
            <option value="">Select Duration</option>
            <option value="1-3 months">1-3 Months</option>
            <option value="3-6 months">3-6 Months</option>
            <option value="6+ months">6+ Months</option>
          </select>
        </div>

        {/* Requirement */}
        <textarea
          name="requirement"
          placeholder="Add Your Requirement"
          value={formData.requirement}
          onChange={handleChange}
          rows="4"
          required
          className="w-full text-xs py-1 border-b bg-transparent border-gray-300 focus:outline-none"
        ></textarea>

        {/* Consent */}
        <div className="flex items-start space-x-2 text-xs py-1 text-gray-600">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 border-gray-400 rounded"
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

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white font-medium rounded-lg shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
          {status && (
            <p className="mt-4 text-xs text-gray-600 text-center">{status}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
