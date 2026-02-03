import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";

const EditJob = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const highlightsRef = useRef(null);
  const descRef = useRef(null);
  const reqRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    company: "",
    experience: "",
    location: "",
    salary: "",
    skills: ""
  });


  // ========================
  // Fetch Single Job
  // ========================
  useEffect(() => {
    fetchJob();
  }, []);


  const fetchJob = async () => {
    try {

      const res = await axios.get(
        `http://localhost:5000/api/jobs/${id}`
      );

      const job = res.data.data;

      // Set Inputs
      setFormData({
        title: job.title || "",
        subtitle: job.subtitle || "",
        company: job.company || "",
        experience: job.experience || "",
        location: job.location || "",
        salary: job.salary || "",
        skills: job.skills || ""
      });

      // Set Editors
      highlightsRef.current?.setContent(job.job_highlights || "");
      descRef.current?.setContent(job.job_description || "");
      reqRef.current?.setContent(job.requirement || "");

      setLoading(false);

    } catch (err) {
      console.error(err);
      alert("Failed to load job");
    }
  };


  // ========================
  // Handle Input
  // ========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // ========================
  // Update Submit
  // ========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      job_highlights: highlightsRef.current.getContent(),
      job_description: descRef.current.getContent(),
      requirement: reqRef.current.getContent()
    };

    try {

      await axios.put(
        `http://localhost:5000/api/jobs/${id}`,
        data
      );

      alert("Job Updated Successfully!");

      navigate("/admin/job-posts"); // redirect (optional)

    } catch (err) {
      console.error(err);
      alert("Error updating job");
    }
  };


  if (loading) {
    return (
      <div className="text-center py-20 text-xl">
        Loading...
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Update Job
        </h2>


        <form onSubmit={handleSubmit} className="space-y-6">


          {/* Inputs */}
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


          {/* Button */}
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
            Update Job
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditJob;



// ========================
// TinyMCE Config
// ========================

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