require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', reservationRoutes);

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
