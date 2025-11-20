import React, { useEffect, useState } from "react";

function JoinUsForm() {
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Submit form using FormData (supports file upload)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const fd = new FormData();

      Object.keys(formData).forEach((key) => {
        fd.append(key, formData[key]);
      });

      const response = await fetch(
        `${import.meta.env.VITE_VERCEL_URL}/api/joinuslist`,
        {
          method: "POST",
          body: fd, // ❗ IMPORTANT: Do NOT add content-type manually
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "", 
          message: "",
          resume: null,
        });
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
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 md:p-10 space-y-6"
      encType="multipart/form-data"
    >
      <h2 className="text-3xl font-bold mb-3">Join our team</h2>

      <p className="text-gray-600 mb-6">
        Fill out the form and upload your resume. Our HR team will contact you
        soon.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="name@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="+91 9876543210"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Applying For *
          </label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          >
            <option value="">Select Position</option>
            <option value="Telecalling Executive / Telemarketing Executive">
              Telecalling Executive / Telemarketing Executive
            </option>
            <option value="Sales Executive">Sales Executive</option>
            <option value="SEO - CW">SEO - CW</option>
            <option value="HTML Designer">HTML Designer</option>
            <option value="PHP Developer">PHP Developer</option>
          </select>
        </div>

       

         {/* Experience */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Experience (Years)
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="e.g. 2"
            min="0"
          />
        </div>

         {/* Resume Upload */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Upload Resume (PDF/DOC)
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-md bg-white 
              file:mr-4 file:py-2 file:px-4 file:border 
              file:rounded-md file:bg-gray-200 file:text-gray-900"
          />
        </div>
      </div>

     

      {/* Message */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
          placeholder="Tell us something about yourself..."
        ></textarea>
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
  );
}

export default JoinUsForm;
