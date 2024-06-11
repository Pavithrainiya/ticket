require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit with failure
});

// Routes
app.use('/api', reservationRoutes);

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
