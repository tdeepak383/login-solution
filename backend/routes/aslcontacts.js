const express = require("express");
const router = express.Router();
const pool = require("../config/db");


router.post("/", async (req, res) => {
  try {
    const { full_name, email, phone, subject, message } = req.body;

    if (!full_name || !email) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    await pool.query(
      `INSERT INTO aslcontacts 
       (full_name, email, phone, subject, message)
       VALUES (?, ?, ?, ?, ?)`,
      [full_name, email, phone, subject, message]
    );

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM aslcontacts ORDER BY created_at DESC"
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM aslcontacts WHERE id = ?",
      [id]
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, email, phone, subject, message } = req.body;

    await pool.query(
      `UPDATE aslcontacts SET
        full_name = ?, email = ?, phone = ?, subject = ?, message = ?
       WHERE id = ?`,
      [full_name, email, phone, subject, message, id]
    );

    res.json({ message: "Contact updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM aslcontacts WHERE id = ?", [id]);

    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;