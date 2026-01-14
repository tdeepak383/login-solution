const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
const ExcelJS = require("exceljs");

router.get("/export", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM contacts ORDER BY id DESC"); 
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");

    // Columns
    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "contact", width: 20 },
      { header: "Company", key: "company", width: 25 },
      { header: "Job Category", key: "jobCategory", width: 25 },
      { header: "Job Role", key: "jobRole", width: 25 },
      { header: "Duration", key: "duration", width: 20 },
      { header: "Requirement", key: "requirement", width: 40 },
      { header: "Consent", key: "consent", width: 15 },
      { header: "Created At", key: "created_at", width: 20 }
    ];

    // Rows
    rows.forEach(row => worksheet.addRow(row));

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=contacts.xlsx"
    );    

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Export failed" });
  }
});


router.get("/export-csv", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM contacts");
  if (!rows.length) return res.send("");

  const headers = Object.keys(rows[0]).join(",");
  const csvData = rows.map(row =>
    Object.values(row).map(val => `"${val}"`).join(",")
  );

  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=contacts.csv");

  res.send([headers, ...csvData].join("\n"));
});

// ==========================
// GET ALL CONTACTS
// ==========================

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM contacts ORDER BY id DESC");
    res.json({ data: rows });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ==========================
// GET CONTACT BY ID
// ==========================

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [id]);

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
// CREATE NEW CONTACT
// ==========================

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      company,
      jobCategory,
      jobRole,
      duration,
      requirement,
      consent
    } = req.body;

    const [result] = await pool.query(
      `INSERT INTO contacts 
      (name, email, contact, company, jobCategory, jobRole, duration, requirement, consent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        contact,
        company,
        jobCategory,
        jobRole,
        duration,
        requirement,
        consent
      ]
    );

    res.status(201).json({
      id: result.insertId,
      name,
      email,
      contact,
      company,
      jobCategory,
      jobRole,
      duration,
      requirement,
      consent
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ==========================
// UPDATE CONTACT
// ==========================

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      email,
      contact,
      company,
      jobCategory,
      jobRole,
      duration,
      requirement,
      consent
    } = req.body;

    const [result] = await pool.query(
      `UPDATE contacts SET 
        name = ?, 
        email = ?, 
        contact = ?, 
        company = ?, 
        jobCategory = ?, 
        jobRole = ?, 
        duration = ?, 
        requirement = ?, 
        consent = ?
      WHERE id = ?`,
      [
        name,
        email,
        contact,
        company,
        jobCategory,
        jobRole,
        duration,
        requirement,
        consent,
        id
      ]
    );

    if (result.affectedRows > 0) {
      res.json({
        data: {
          id,
          name,
          email,
          contact,
          company,
          jobCategory,
          jobRole,
          duration,
          requirement,
          consent
        }
      });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
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

    const [result] = await pool.query("DELETE FROM contacts WHERE id = ?", [id]);

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
