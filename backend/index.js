require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const AuthRouter = require("./routes/auth");
const contactRouter = require("./routes/contacts");
const joinUsRouter = require("./routes/joinus");
const blogs = require("./routes/blogs");
const aslcontacts = require("./routes/aslcontacts");
const jobs = require("./routes/jobposts");
const attherate = require("./routes/attherate");
const analyticsRoutes = require('./routes/analytics')
const consentRoutes = require("./routes/FormRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: [
    'https://loginatsolution.com', // for production
    'http://localhost:5173',   // for local dev
    'http://localhost:3000',   // for local dev
  ],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// DEBUG ROUTE (check if server works)
app.get("/", (req, res) => {
  res.send("API is running...");
});

console.log("Consent route loaded");

// Routes
app.use("/api/auth", AuthRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/joinuslist", joinUsRouter);
app.use("/api/blogs", blogs);
app.use("/api/aslcontacts", aslcontacts);
app.use("/api/jobs", jobs);
app.use("/api/attherate", attherate);
app.use('/api/analytics', analyticsRoutes)

// ✅ IMPORTANT
app.use("/api/consentform", consentRoutes);

// Static
app.use("/uploads", express.static("uploads"));

// Health
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});