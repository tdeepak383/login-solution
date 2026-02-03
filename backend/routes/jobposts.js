const express = require("express");
const router = express.Router();
const pool = require("../config/db");


/* =========================
   CREATE JOB (POST)
========================= */
router.post("/", async (req, res) => {
  try {

    const {
      title,
      subtitle,
      company,
      experience,
      location,
      salary,
      skills,
      job_highlights,
      job_description,
      requirement
    } = req.body;

    const sql = `
      INSERT INTO jobs
      (title, subtitle, company, experience, location, salary, skills, job_highlights, job_description, requirement)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await pool.query(sql, [
      title,
      subtitle,
      company,
      experience,
      location,
      salary,
      skills,
      job_highlights,
      job_description,
      requirement
    ]);

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      id: result.insertId
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


/* =========================
   READ ALL JOBS (GET)
========================= */
router.get("/", async (req, res) => {
  try {

    const [rows] = await pool.query("SELECT * FROM jobs ORDER BY id DESC");

    res.json({
      success: true,
      data: rows
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


/* =========================
   READ SINGLE JOB (GET /:id)
========================= */
router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM jobs WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.json({
      success: true,
      data: rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


/* =========================
   UPDATE JOB (PUT /:id)
========================= */
router.put("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const {
      title,
      subtitle,
      company,
      experience,
      location,
      salary,
      skills,
      job_highlights,
      job_description,
      requirement
    } = req.body;

    const sql = `
      UPDATE jobs SET
        title = ?,
        subtitle = ?,
        company = ?,
        experience = ?,
        location = ?,
        salary = ?,
        skills = ?,
        job_highlights = ?,
        job_description = ?,
        requirement = ?
      WHERE id = ?
    `;

    const [result] = await pool.query(sql, [
      title,
      subtitle,
      company,
      experience,
      location,
      salary,
      skills,
      job_highlights,
      job_description,
      requirement,
      id
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.json({
      success: true,
      message: "Job updated successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


/* =========================
   DELETE JOB (DELETE /:id)
========================= */
router.delete("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM jobs WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.json({
      success: true,
      message: "Job deleted successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


module.exports = router;
