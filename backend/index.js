require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');   
const AuthRouter = require('./routes/auth');
const contactRouter = require('./routes/contacts')
const joinUsRouter = require('./routes/joinus')

const app = express();


app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', AuthRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/joinuslist', joinUsRouter);

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
