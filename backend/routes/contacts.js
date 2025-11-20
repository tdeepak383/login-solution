const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");

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
