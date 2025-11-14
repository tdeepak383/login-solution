import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function JoinUsForm() {
  const form = useRef();
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_68aw1vp",
        "template_vhjj1ja",
        form.current,
        "AJkmrIMNpmyESloDc"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");

          // Reset form
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            position: "",
            experience: "",
            message: "",
            resume: null,
          });

          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-full p-6 md:p-10 space-y-6"
      encType="multipart/form-data"
    >
      <h2 className="text-3xl font-bold mb-3">Join Our Team</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form and upload your resume. Our HR team will contact you soon.
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
            className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
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
            className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
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
            className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
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
            className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
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

       

        {/* Resume Upload */}
        {/* <div>
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

          
          <input
            type="hidden"
            name="resume_filename"
            value={formData.resume?.name || ""}
          />
        </div> */}
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
            className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
            placeholder="e.g. 2"
            min="0"
          />
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
          className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
          placeholder="Tell us something about yourself..."
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full gradient text-white py-3 rounded-md text-lg hover:opacity-90 transition"
      >
        Submit Application
      </button>

      {status && (
        <p className="mt-4 text-xs text-gray-600 text-center">{status}</p>
      )}
    </form>
  );
}

export default JoinUsForm;
