require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const crmRoutes = require('./routes/crmRoutes');
const marketingRoutes = require('./routes/marketingRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/crm', crmRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/reports', reportRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
