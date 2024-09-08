const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobs');
const applicantRoutes = require('./routes/applicants');
const interviewRoutes = require('./routes/interviews');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', jobRoutes);
app.use('/api', applicantRoutes);
app.use('/api', interviewRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
