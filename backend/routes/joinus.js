const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
const multer = require("multer");
const path = require("path");

// ---------------------------
// MULTER STORAGE SETUP
// ---------------------------

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/resumes/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });


// -----------------------------
// POST: Submit "Join Us" form
// -----------------------------
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, position, experience, message } = req.body;

    let resumePath = null;
    if (req.file) {
      resumePath = "uploads/resumes/" + req.file.filename;
    }

    await pool.query(
      "INSERT INTO joinuslist (fullName, email, phone, position, experience, message, resume) VALUES (?,?,?,?,?,?,?)",
      [fullName, email, phone, position, experience, message, resumePath]
    );

    res.json({ success: true, message: "Submitted Successfully" });
  } catch (error) {
    console.error("Error creating record:", error);
    res.status(500).json({ error: "Internal Server Error" });
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

    const fullName = req.body.fullName || "";
    const email = req.body.email || "";
    const phone = req.body.phone || "";
    const position = req.body.position || "";
    const experience = req.body.experience || "";
    const message = req.body.message || "";

    let resumePath = null;

    if (req.file) {
      resumePath = "uploads/resumes/" + req.file.filename;
    }

    const sql = `
      UPDATE joinuslist SET 
      fullName = ?, 
      email = ?, 
      phone = ?, 
      position = ?, 
      experience = ?, 
      message = ?,
      resume = COALESCE(?, resume)
      WHERE id = ?
    `;

    await pool.query(sql, [
      fullName,
      email,
      phone,
      position,
      experience,
      message,
      resumePath,
      id,
    ]);

    res.json({ success: true, message: "Updated Successfully" });

  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
