const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const { upload } = require("../uploads/upload");

/* ---------------- CREATE BLOG ---------------- */
router.post("/", upload.single("thumbnail"), async (req, res) => {
  try {
    let { title, slug, content, category, tags } = req.body;
    const thumbnail = req.file ? req.file.path : null;

    if (!title || !slug || !content) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // 🔁 CHECK SLUG AVAILABILITY
    let finalSlug = slug;
    let counter = 1;

    while (true) {
      const [rows] = await pool.query(
        "SELECT id FROM posts WHERE slug = ? LIMIT 1",
        [finalSlug]
      );

      if (!rows.length) break;

      finalSlug = `${slug}-${counter}`;
      counter++;
    }

    await pool.query(
      `INSERT INTO posts (title, slug, content, thumbnail, category, tags)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, finalSlug, content, thumbnail, category, tags]
    );

    res.status(201).json({
      message: "Blog created successfully",
      slug: finalSlug,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



/* ---------------- GET ALL BLOGS ---------------- */
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT id, title, slug, thumbnail, category, tags, created_at
      FROM posts
      ORDER BY created_at DESC
    `);

    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ---------------- GET BLOG BY SLUG ---------------- */
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM posts WHERE slug = ? LIMIT 1",
      [slug]
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
