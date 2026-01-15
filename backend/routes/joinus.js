const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('../config/cloudinary.js')
const ExcelJS = require("exceljs");

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
// Export Excel api
// ==========================


router.get("/export", async (req, res) => {
  try {
    const { from, to } = req.query;

    let query = "SELECT * FROM joinuslist";
    let params = [];

    // ✅ Apply date filter only if both dates exist
    if (from && to) {
      query += " WHERE DATE(created_at) BETWEEN ? AND ?";
      params.push(from, to);
    }

    query += " ORDER BY id DESC";

    const [rows] = await pool.query(query, params);

    if (!rows.length) {
      return res.status(200).json({
        success: false,
        message: "No applicants found for the selected date range",
        data: []
      });
    }
    const ExcelJS = require("exceljs");
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Applicants");

    // Columns (same as yours)
    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "fullName", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Position", key: "position", width: 25 },
      { header: "Experience", key: "experience", width: 25 },
      { header: "Message", key: "message", width: 40 },
      { header: "Resume", key: "resume", width: 15 },
      { header: "Created At", key: "created_at", width: 20 }
    ];

    rows.forEach(row => worksheet.addRow(row));

    // ✅ Dynamic filename with date range
    const fileName = `applicants_${from || "all"}_${to || "all"}.xlsx`;

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Export failed" });
  }
});



// ==========================
// Export CSV API (Date Range)
// ==========================
router.get("/export-csv", async (req, res) => {
  try {
    const { from, to } = req.query;

    let query = "SELECT * FROM joinuslist";
    let params = [];

    // ✅ Apply date filter only if both dates are provided
    if (from && to) {
      query += " WHERE DATE(created_at) BETWEEN ? AND ?";
      params.push(from, to);
    }

    query += " ORDER BY id DESC";

    const [rows] = await pool.query(query, params);

    if (!rows.length) {
      return res.status(200).json({
        success: false,
        message: "No applicants found for the selected date range",
        data: []
      });
    }

    // CSV headers
    const headers = Object.keys(rows[0]).join(",");

    // CSV rows (handle null safely)
    const csvData = rows.map(row =>
      Object.values(row)
        .map(val => `"${val ?? ""}"`)
        .join(",")
    );

    const fileName = `applicants_${from || "all"}_${to || "all"}.csv`;

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );

    res.send([headers, ...csvData].join("\n"));

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "CSV export failed" });
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
