const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('../config/cloudinary.js')


// ---------------------------
// MULTER STORAGE SETUP
// ---------------------------

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "raw", // allows PDF, DOC, DOCX
    public_id: (req, file) => 
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_"),
  },
});

const upload = multer({ storage });



// -----------------------------
// POST: Submit "Join Us" form
// -----------------------------
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, position, experience, message } = req.body;

    const resumeUrl = req.file?.path || ""; // cloudinary URL returned

    await pool.query(
      `INSERT INTO joinuslist 
       (fullName, email, phone, position, experience, message, resume) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [fullName, email, phone, position, experience, message, resumeUrl]
    );

    res.json({ success: true, message: "Saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});




// ==========================
// GET ALL joinuslist
// ==========================
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM joinuslist ORDER BY id DESC");
    res.json({ data: rows });
  } catch (error) {
    console.error("Error fetching joinuslist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ==========================
// GET CONTACT BY ID
// ==========================
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM joinuslist WHERE id = ?", [id]);

    if (rows.length > 0) {
      res.json({ data: rows[0] });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ==========================
// UPDATE CONTACT
// ==========================
router.put("/:id", upload.single("resume"), async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone, position, experience, message } = req.body;

    let resumeUrl = req.file?.path || null;

    let query =
      "UPDATE joinuslist SET fullName=?, email=?, phone=?, position=?, experience=?, message=?";
    let values = [
      fullName,
      email,
      phone,
      position,
      experience,
      message,
    ];

    if (resumeUrl) {
      query += ", resume=?";
      values.push(resumeUrl);
    }

    query += " WHERE id=?";
    values.push(id);

    await pool.query(query, values);

    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



// ==========================
// DELETE CONTACT
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM joinuslist WHERE id = ?", [id]);

    if (result.affectedRows > 0) {
      res.json({ message: "Deleted successfully", id });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
