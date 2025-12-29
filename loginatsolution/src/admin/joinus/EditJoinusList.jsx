import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditJoinusList() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });

  // --------------------------------
  // Fetch data if editing (id exists)
  // --------------------------------
useEffect(() => {
  if (!id) return;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_VERCEL_URL}/api/joinuslist/${id}`
      );

      const result = await res.json();
      const data = result.data; // IMPORTANT: Extract from result.data

      setFormData({
        fullName: data.fullName || "",
        email: data.email || "",
        phone: data.phone || "",
        position: data.position || "",
        experience: data.experience || "",
        message: data.message || "",
        resume: null, // cannot prefill file input
      });

    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  fetchData();
}, [id]);


  // ------------------------
  // Handle input change
  // ------------------------
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData((p) => ({ ...p, resume: files[0] }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  // ------------------------
  // Submit form (Create / Edit)
  // ------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const payload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) payload.append(key, value);
    });

    try {
      const response = await fetch(
        id
          ? `${import.meta.env.VITE_VERCEL_URL}/api/joinuslist/${id}`
          : `${import.meta.env.VITE_VERCEL_URL}/api/joinuslist`,
        {
          method: id ? "PUT" : "POST",
          body: payload, // IMPORTANT: no headers here
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus(id ? "✔️ Updated Successfully" : "✔️ Submitted Successfully");

        setTimeout(() => navigate("/admin/resume-list"), 2000);
      } else {
        setStatus("❌ Something went wrong");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("❌ Server error. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 md:p-10 space-y-6"
      encType="multipart/form-data"
    >
      <h2 className="text-3xl font-bold mb-3">
        {id ? "Edit Applicant" : "Join Our Team"}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-bold text-gray-700">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
        </div>

        <div>
          <label className="font-bold text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
        </div>

        <div>
          <label className="font-bold text-gray-700">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
        </div>

        <div>
          <label className="font-bold text-gray-700">Applying For *</label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          >
            <option value="">Select Position</option>
            <option value="Project Delivery Executive (PDE)">Project Delivery Executive (PDE)</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Telecalling Executive / Telemarketing Executive">
              Telecalling Executive / Telemarketing Executive
            </option>
            <option value="Sales Executive">Sales Executive</option>
            <option value="SEO - CW">SEO - CW</option>
            <option value="HTML Designer">HTML Designer</option>
            <option value="PHP Developer">PHP Developer</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-gray-700">Experience</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
        </div>

        <div>
          <label className="font-bold text-gray-700">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full border p-3 rounded-md bg-white"
          />
        </div>
      </div>

      <div>
        <label className="font-bold text-gray-700">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        ></textarea>
      </div>

      <div className="text-center">
        <button className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow">
          {id ? "Update" : "Submit"}
        </button>

        {status && <p className="mt-3 text-gray-600 text-sm">{status}</p>}
      </div>
    </form>
  );
}

export default EditJoinusList;
