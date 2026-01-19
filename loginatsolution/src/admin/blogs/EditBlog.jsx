import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";

function EditBlog() {
  const editorRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH BLOG DATA ---------------- */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_VERCEL_URL}/api/blogs/${id}`
        );
        const data = await res.json();

        setTitle(data.title);
        setSlug(data.slug);
        setExcerpt(data.excerpt || "");
        setCategory(data.category || "");
        setTags(data.tags || "");
        setLikes(data.likes || "");
        setDislikes(data.dislikes || "");
        setPreview(data.thumbnail); // existing image
        editorRef.current?.setContent(data.content || "");

        setLoading(false);
      } catch (error) {
        alert("Failed to load blog");
      }
    };

    fetchBlog();
  }, [id]);

  /* ---------------- SLUG AUTO ---------------- */
  useEffect(() => {
    if (!title) return;

    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setSlug(generatedSlug);
  }, [title]);

  /* ---------------- THUMBNAIL ---------------- */
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnail(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------- UPDATE BLOG (PUT) ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = editorRef.current.getContent();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("excerpt", excerpt);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("likes", likes);
    formData.append("dislikes", dislikes);

    // send thumbnail only if changed
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    const res = await fetch(
      `${import.meta.env.VITE_VERCEL_URL}/api/blogs/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!res.ok) {
      alert("Update failed");
      return;
    }

    alert("Blog updated successfully");
    navigate("/admin/blogs");
  };

  if (loading) return <p className="p-10">Loading blog...</p>;

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2">
            <input
              type="text"
              className="w-full border rounded-lg p-3 mb-2"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="mb-4 flex gap-2 text-sm text-gray-600">
              <span>Slug:</span>
              <span>/{slug}</span>
            </div>

            <Editor
              apiKey="xbjurmmf5jm4pcrbjdc1p84p08r73o8sqjrekdpfshyu194d"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                height: 420,
                menubar: false,
                plugins: ["lists", "link", "image", "preview", "code"],
                toolbar:
                  "undo redo | bold italic | bullist numlist | link image | code",
              }}
            />

            <div className="mt-8">
              <p className="font-medium mb-2">Excerpt</p>
              <textarea
                className="w-full border rounded-lg p-3"
                rows={4}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">Thumbnail</p>
              <label className="border-2 border-dashed rounded-xl p-4 cursor-pointer block">
                {preview ? (
                  <img
                    src={preview}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-gray-400 text-center h-40 flex items-center justify-center">
                    Upload thumbnail
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            {/* Tags */}
            <div>
              <p className="font-medium mb-2">Tags</p>
              <input
                type="text"
                className="w-full border rounded-lg p-3"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            {/* likes dislikes */}

            <div>
              <p className="font-medium mb-2">Likes</p>
              <input
                type="number"
                name="likes"
                placeholder="Number of likes"
                className="w-full border rounded-lg p-3"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </div>
            <div>
              <p className="font-medium mb-2">Dislikes</p>
              <input
                type="number"
                name="dislikes"
                placeholder="Number of dislikes"
                className="w-full border rounded-lg p-3"
                value={dislikes}
                onChange={(e) => setDislikes(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-[var(--purple)] text-white px-8 py-3 rounded-lg"
        >
          Update Blog
        </button>
      </form>
    </section>
  );
}

export default EditBlog;
