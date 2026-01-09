require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');   
const AuthRouter = require('./routes/auth');
const contactRouter = require('./routes/contacts')
const joinUsRouter = require('./routes/joinus')
const blogs = require('./routes/blogs')
const app = express();
const aslcontacts = require('./routes/aslcontacts')

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', AuthRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/joinuslist', joinUsRouter);
app.use('/api/blogs', blogs)
app.use("/api/aslcontacts", aslcontacts)


app.use("/uploads", express.static("uploads"));


// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
