const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  resumeLink: { type: String, required: true },
  status: { type: String, required: true, enum: ['Pending', 'Interviewed', 'Rejected', 'Hired'] },
});

module.exports = mongoose.model('Applicant', ApplicantSchema);
