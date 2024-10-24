require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const reportRoutes=require('./routes/reportRoutes.js')
const marketingNdCrmRoutes = require('./routes/marketingNdCrmRoutes.js');


const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', marketingNdCrmRoutes);
app.use('/api/reports', reportRoutes);

// Export the app for Vercel (no app.listen)
module.exports = app;
