const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// CREATE
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Name and phone are required" });
    }

    const [result] = await pool.query(
      `INSERT INTO consentform (name, email, phone)
       VALUES (?, ?, ?)`,
      [name, email || null, phone]
    );

    res.status(201).json({
      message: "Form data saved successfully",
      id: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/test", (req, res) => {
  res.send("Consent route working");
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM consentform ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM consentform WHERE id = ?",
      [id]
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const [result] = await pool.query(
      `UPDATE consentform 
       SET name = ?, email = ?, phone = ?
       WHERE id = ?`,
      [name, email, phone, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Form data updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM consentform WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Form data deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;