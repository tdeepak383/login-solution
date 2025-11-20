import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


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

function EditContacts() {
    const navigate = useNavigate()
    const form = useRef();
    const { id } = useParams();
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

    useEffect(() => {
  if (!id) return; // Only run when editing

  fetch(`${import.meta.env.VITE_VERCEL_URL}/api/contacts/${id}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        const d = res.data;

        setFormData({
          name: d.name,
          email: d.email,
          contact: d.contact,
          company: d.company,
          jobCategory: d.jobCategory,
          jobRole: d.jobRole,
          duration: d.duration,
          requirement: d.requirement,
          consent: d.consent === 1 ? true : false,
        });

        setSelectJob(d.jobCategory);
      }
    })
    .catch((err) => console.log(err));
}, [id]);



const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Saving...");

  const method = id ? "PUT" : "POST";
  const url = id
    ? `${import.meta.env.VITE_VERCEL_URL}/api/contacts/${id}`
    : `${import.meta.env.VITE_VERCEL_URL}/api/contacts`;

  try {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus(id ? "✅ Updated Successfully" : "✅ Submitted Successfully");
        setTimeout(() => {
        navigate("/admin/contacts");
        }, 2000);
    } else {
      setStatus("❌ Something went wrong");
    }
  } catch (error) {
    console.error(error);
    setStatus("❌ Server error. Try again.");
  }
};



  return (
    <div className={`bg-white rounded-3xl max-w-4xl mx-auto`}>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full text-left p-8 space-y-12"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Edit Contact Form
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
            className="w-full md:w-auto px-8 py-3 gradient text-white font-medium rounded-lg shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
          {status && (
            <p className="mt-4 text-xs text-gray-600 text-center">{status}</p>
          )}
        </div>
      </form>
    </div>
  )
}

export default EditContacts