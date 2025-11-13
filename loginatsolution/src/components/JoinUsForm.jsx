import React, { useState } from "react";

function JoinUsForm() {


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

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 md:p-10 space-y-6"
      encType="multipart/form-data"
    >
      <h2 className="text-3xl font-bold mb-3">Join Our Team</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form and upload your resume. Our HR team will contact you soon.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
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

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
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

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Phone *</label>
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

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Applying For *</label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select Position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="React Developer">React Developer</option>
            <option value="Digital Marketer">Digital Marketer</option>
            <option value="HR Executive">HR Executive</option>
          </select>
        </div>

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

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Upload Resume (PDF/DOC)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-md bg-white file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:bg-gray-200 file:text-gray-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:ring focus:ring-blue-300"
          placeholder="Tell us something about yourself..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full gradient text-white py-3 rounded-md text-lg hover:opacity-90 transition"
      >
        Submit Application
      </button>
    </form>
  );
}

export default JoinUsForm;
