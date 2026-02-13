import React, { useRef, useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";

const AddJob = () => {

  const highlightsRef = useRef(null);
  const descRef = useRef(null);
  const reqRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    company: "",
    experience: "",
    location: "",
    salary: "",
    skills: ""
  });


  // Handle inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      job_highlights: highlightsRef.current.getContent(),
      job_description: descRef.current.getContent(),
      requirement: reqRef.current.getContent()
    };

    try {

      await axios.post(`${import.meta.env.VITE_VERCEL_URL}/api/jobs`, data);

      alert("Job Added Successfully!");

      setFormData({
        title: "",
        subtitle: "",
        company: "",
        experience: "",
        location: "",
        salary: "",
        skills: ""
      });

      highlightsRef.current.setContent("");
      descRef.current.setContent("");
      reqRef.current.setContent("");

    } catch (err) {
      console.error(err);
      alert("Error adding job");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Add New Job
        </h2>


        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Inputs Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              "title",
              "subtitle",
              "company",
              "experience",
              "location",
              "salary"
            ].map((field) => (
              <div key={field}>
                <label className="block mb-1 font-semibold text-gray-700">
                  {field.replace("_", " ").toUpperCase()}
                </label>

                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-4 py-2
                    border border-gray-300
                    rounded-md
                    focus:ring-2 focus:ring-[var(--purple)]
                    focus:outline-none
                  "
                />
              </div>
            ))}

          </div>
                <label className="block mb-1 font-semibold text-gray-700">
                  SKILLS
                </label>

                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-4 py-2
                    border border-gray-300
                    rounded-md
                    focus:ring-2 focus:ring-[var(--purple)]
                    focus:outline-none
                  "
                />

          {/* Editors */}

          {/* Highlights */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Job Highlights
            </label>

            <Editor
              apiKey="xbjurmmf5jm4pcrbjdc1p84p08r73o8sqjrekdpfshyu194d"
              onInit={(evt, editor) => (highlightsRef.current = editor)}
              init={editorConfig}
            />
          </div>


          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Job Description
            </label>

            <Editor
              apiKey="xbjurmmf5jm4pcrbjdc1p84p08r73o8sqjrekdpfshyu194d"
              onInit={(evt, editor) => (descRef.current = editor)}
              init={editorConfig}
            />
          </div>


          {/* Requirement */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Requirement
            </label>

            <Editor
              apiKey="xbjurmmf5jm4pcrbjdc1p84p08r73o8sqjrekdpfshyu194d"
              onInit={(evt, editor) => (reqRef.current = editor)}
              init={editorConfig}
            />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              bg-[var(--purple)]
              text-white
              py-3
              rounded-md
              font-semibold
              text-lg
              hover:bg-[var(--pink)]
              transition
              duration-200
            "
          >
            Add Job
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddJob;



// TinyMCE Config
const editorConfig = {
  height: 260,
  menubar: false,

  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "preview",
    "code"
  ],

  toolbar:
    "undo redo | bold italic | bullist numlist | alignleft aligncenter alignright | code",

  branding: false
};
