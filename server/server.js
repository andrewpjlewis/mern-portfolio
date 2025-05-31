const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const projectRoutes = require('./routes/projectRoutes');

const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API route (optional)
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join(__dirname, 'client', 'public')));

app.use('/api/projects', projectRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
