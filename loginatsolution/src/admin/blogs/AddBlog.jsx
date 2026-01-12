import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

function AddBlog() {
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);

  /* ---------------- SLUG GENERATOR ---------------- */
  useEffect(() => {
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setSlug(generatedSlug);
  }, [title]);

  /* ---------------- THUMBNAIL PREVIEW ---------------- */
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnail(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = editorRef.current.getContent();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("thumbnail", thumbnail);
    
    await fetch(

      `${import.meta.env.VITE_VERCEL_URL}/api/blogs/`, 
    {
      method: "POST",
      body: formData,
    });

    alert("Blog published successfully");
  };

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ---------------- LEFT ---------------- */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Post Title"
              className="w-full border rounded-lg p-3 mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Slug Preview */}
            <div className="mb-4 flex items-center gap-3 py-2">
              <p className="text-sm font-medium">Slug:</p>
              <p className="text-sm text-gray-500">
                /{slug || "your-slug"}
              </p>
            </div>

            {/* Editor */}
            <Editor
              apiKey="xbjurmmf5jm4pcrbjdc1p84p08r73o8sqjrekdpfshyu194d"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                height: 420,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "preview",
                  "code",
                ],
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | link image | code",
              }}
            />

            {/* Excerpt */}
            <div className="mt-8">
              <p className="font-medium mb-2">Excerpt</p>
              <textarea
                name="excerpt"
                placeholder="Short description of the blog"
                className="w-full border rounded-lg p-3"
                rows={4}
              />
            </div>
          </div>

          {/* ---------------- RIGHT ---------------- */}
          <div className="space-y-6">
            {/* Thumbnail */}
            <div>
              <p className="font-medium mb-2">Thumbnail</p>

              <label className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-60 object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-gray-400 content-center h-40 text-sm">
                    Click to upload thumbnail
                  </p>
                )}

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailChange}
                />
              </label>
            </div>

            {/* Category */}
            <div>
              <p className="font-medium mb-2">Category</p>
              <input
                type="text"
                name="category"
                placeholder="Type category"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Tags */}
            <div>
              <p className="font-medium mb-2">Tags</p>
              <input
                type="text"
                name="tags"
                placeholder="Separate with commas"
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-[var(--purple)] text-white px-8 py-3 rounded-lg"
        >
          Publish Blog
        </button>
      </form>
    </section>
  );
}

export default AddBlog;